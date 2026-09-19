# Yash Lunawat

I build thesis & software at [RTP Global](https://rtp.vc), an early-stage venture fund (AUM 5B$ and Active fund of 1B$), from Bengaluru. B.Tech in AI at Rishihood University, class of 2027. Most of what I write is TypeScript and Swift, with Python where it fits.

Site: [yashlunawat.com](https://yashlunawat.com). LinkedIn: [yash-lunawat-](https://linkedin.com/in/yash-lunawat-).

## Now

**[canistart](https://github.com/Yash121l/canistart)**. One command that tells you whether a GitHub issue is worth starting on: competing pull requests the issue page does not show, fixes that already landed, the repo's and the org's AI policy quoted sentence by sentence, CLA and DCO gates, merge rate. GO, CAUTION or STOP with exit codes, so it also works as a gate in front of a coding agent. Zero dependencies.

```
npx github:Yash121l/canistart https://github.com/owner/repo/issues/123
```

I built it after two days of picking issues by hand: of twelve candidates, three were already fixed, two had five or more open PRs, one sat behind an org policy that bans autonomous agents.

## Upstream

Pull requests to projects I use, counted daily. Most of the current work is in CNCF and OpenJS Foundation projects: container registries, cluster storage, workload identity, observability, and the Node and browser tooling I use every day.

Not every issue is best answered with a patch. Several of these threads ended with a root cause instead, including bugs that turned out to be fixed upstream already, a reported missing feature that was really an instance metadata hop limit, and a cache leak whose stated cause was the wrong function. I also answer questions in project discussions when the answer is sitting in the source.

<!-- upstream:start -->
15 pull requests merged into [meriyah/meriyah](https://github.com/meriyah/meriyah/pulls?q=is%3Apr+author%3AYash121l+is%3Amerged) (6), [evilmartians/lefthook](https://github.com/evilmartians/lefthook/pulls?q=is%3Apr+author%3AYash121l+is%3Amerged) (2), [rxhanson/Rectangle](https://github.com/rxhanson/Rectangle/pulls?q=is%3Apr+author%3AYash121l+is%3Amerged) (1), [vorssaint/vorssaint-utils](https://github.com/vorssaint/vorssaint-utils/pulls?q=is%3Apr+author%3AYash121l+is%3Amerged) (1), [rook/rook](https://github.com/rook/rook/pulls?q=is%3Apr+author%3AYash121l+is%3Amerged) (1), [webdriverio/webdriverio](https://github.com/webdriverio/webdriverio/pulls?q=is%3Apr+author%3AYash121l+is%3Amerged) (1), [linearmouse/linearmouse](https://github.com/linearmouse/linearmouse/pulls?q=is%3Apr+author%3AYash121l+is%3Amerged) (1), [wasmCloud/wasmCloud](https://github.com/wasmCloud/wasmCloud/pulls?q=is%3Apr+author%3AYash121l+is%3Amerged) (1), [appium/appium-xcuitest-driver](https://github.com/appium/appium-xcuitest-driver/pulls?q=is%3Apr+author%3AYash121l+is%3Amerged) (1). 21 open, including first contributions to [spiffe/spire](https://github.com/spiffe/spire/pulls?q=is%3Apr+author%3AYash121l), [argoproj/argo-rollouts](https://github.com/argoproj/argo-rollouts/pulls?q=is%3Apr+author%3AYash121l), [distribution/distribution](https://github.com/distribution/distribution/pulls?q=is%3Apr+author%3AYash121l), [open-telemetry/opentelemetry-js-contrib](https://github.com/open-telemetry/opentelemetry-js-contrib/pulls?q=is%3Apr+author%3AYash121l), [node-red/node-red](https://github.com/node-red/node-red/pulls?q=is%3Apr+author%3AYash121l), [nodejs/corepack](https://github.com/nodejs/corepack/pulls?q=is%3Apr+author%3AYash121l), [Arize-ai/phoenix](https://github.com/Arize-ai/phoenix/pulls?q=is%3Apr+author%3AYash121l), [chaos-mesh/chaos-mesh](https://github.com/chaos-mesh/chaos-mesh/pulls?q=is%3Apr+author%3AYash121l), [trpc/trpc](https://github.com/trpc/trpc/pulls?q=is%3Apr+author%3AYash121l), [TanStack/table](https://github.com/TanStack/table/pulls?q=is%3Apr+author%3AYash121l), [pingdotgg/t3code](https://github.com/pingdotgg/t3code/pulls?q=is%3Apr+author%3AYash121l), [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers/pulls?q=is%3Apr+author%3AYash121l).
<!-- upstream:end -->

## Projects

- **[PortHole](https://github.com/Yash121l/PortHole)**. macOS menu bar app: every listening port, which process owns it, kill it in one click. Swift and SwiftUI.
- **[Railly](https://github.com/Yash121l/railway)**. Live train tracking for Indian Railways with a Live Activity on the lock screen. Swift app plus a Next.js site.
- **[yardstick](https://github.com/Yash121l/yardstick)**. Local LLM eval harness: which model for which pipeline, at what cost, with which API quirks.
- **[GhostPilot](https://github.com/Yash121l/GhostPilot)**. Local-first, bring-your-own-key desktop app for AI-assisted social publishing.
- **[Forge](https://github.com/Yash121l/Forge)**. Self-hosted Git platform for small groups, in Go.
- **[Vessel](https://github.com/Yash121l/Vessel)**. Self-hosted app deployment manager for a Linux VPS: one Go binary that sets up Docker, nginx and the firewall, then deploys apps from templates with generated Compose files and TLS routes.

At work I build internal tooling for the fund: deal sourcing, portfolio intelligence, warm-intro graphs, and the agents that run them. Those repos are private.

## Stack

TypeScript, Node, Cloudflare Workers, SQLite and D1, Swift and SwiftUI, Python, Go. Claude and the Anthropic API for anything that reasons.

<img src="https://streak-stats.demolab.com?user=Yash121l&theme=github-dark-blue&hide_border=true&date_format=M%20j%5B%2C%20Y%5D" alt="contribution streak" width="60%" />
