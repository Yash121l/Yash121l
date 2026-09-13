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
const line = (pr, state) => `| [${repo(pr)}](https://github.com/${repo(pr)}) | [${pr.title.replace(/\|/g, '\\|')}](${pr.html_url}) | ${state} |`;

const rows = [
  ...merged.filter(notable).map((pr) => line(pr, `merged ${pr.pull_request.merged_at.slice(0, 10)}`)),
  ...open.filter(notable).map((pr) => line(pr, 'open')),
];
const table = rows.length
  ? ['| repo | pull request | state |', '| --- | --- | --- |', ...rows].join('\n')
  : '_None yet._';

const readme = readFileSync('README.md', 'utf8');
const next = readme.replace(/<!-- upstream:start -->[\s\S]*<!-- upstream:end -->/, `<!-- upstream:start -->\n${table}\n<!-- upstream:end -->`);
writeFileSync('README.md', next);
console.log(`${merged.length} merged, ${open.length} open`);
