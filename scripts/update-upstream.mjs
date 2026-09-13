import { readFileSync, writeFileSync } from 'node:fs';

const token = process.env.GITHUB_TOKEN;
const login = 'Yash121l';
const exclude = ['rtpvc', 'Rishihood-University'];

async function search(q) {
  const res = await fetch(`https://api.github.com/search/issues?q=${encodeURIComponent(q)}&per_page=50&sort=updated`, {
    headers: { authorization: `Bearer ${token}`, accept: 'application/vnd.github+json' },
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  return (await res.json()).items;
}

const own = `author:${login} type:pr -user:${login} ${exclude.map((o) => `-org:${o}`).join(' ')}`;
const merged = await search(`${own} is:merged`);
const open = await search(`${own} is:open`);

const repo = (pr) => pr.repository_url.replace('https://api.github.com/repos/', '');

const stars = new Map();
for (const name of new Set([...merged, ...open].map(repo))) {
  const res = await fetch(`https://api.github.com/repos/${name}`, {
    headers: { authorization: `Bearer ${token}`, accept: 'application/vnd.github+json' },
  });
  stars.set(name, res.ok ? (await res.json()).stargazers_count : 0);
}
const notable = (pr) => stars.get(repo(pr)) >= 100;
const byRepo = new Map();
for (const pr of merged.filter(notable)) {
  const name = repo(pr);
  const entry = byRepo.get(name) ?? { stars: stars.get(name), merged: 0, latest: '' };
  entry.merged += 1;
  entry.latest = entry.latest > pr.pull_request.merged_at ? entry.latest : pr.pull_request.merged_at;
  byRepo.set(name, entry);
}
const openNotable = open.filter(notable);
const openRepos = new Set(openNotable.map(repo));

const mergedTotal = [...byRepo.values()].reduce((n, e) => n + e.merged, 0);
const ranked = [...byRepo.entries()].sort((a, b) => b[1].merged - a[1].merged || b[1].stars - a[1].stars);
const projects = ranked.map(([name, e]) => `[${name}](https://github.com/${name}/pulls?q=is%3Apr+author%3A${login}+is%3Amerged) (${e.merged})`);
const pending = [...openRepos].filter((name) => !byRepo.has(name)).map((name) => `[${name}](https://github.com/${name}/pulls?q=is%3Apr+author%3A${login})`);

const parts = [];
if (mergedTotal) parts.push(`${mergedTotal} pull request${mergedTotal === 1 ? '' : 's'} merged into ${projects.join(', ')}.`);
if (openNotable.length) parts.push(`${openNotable.length} open${pending.length ? `, including first contributions to ${pending.join(', ')}` : ''}.`);
const table = parts.length ? parts.join(' ') : '_Nothing yet._';

const readme = readFileSync('README.md', 'utf8');
const next = readme.replace(/<!-- upstream:start -->[\s\S]*<!-- upstream:end -->/, `<!-- upstream:start -->\n${table}\n<!-- upstream:end -->`);
writeFileSync('README.md', next);
console.log(`${merged.length} merged, ${open.length} open`);
