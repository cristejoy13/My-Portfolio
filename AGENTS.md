# Agent Operating Guide

This repository uses the durable multi-agent workflow in `.agents/`.

When the user says, "use agents to check and finish the work and you review their work", treat it as a direct instruction to run the finish-and-review workflow:

1. Use `.agents/workflows/finish-and-review.md`.
2. Have the relevant specialist agents inspect and complete the work.
3. Use the `orchestrator` role to review the specialists' output before final handoff.

Before making non-trivial changes, read:

1. `.agents/README.md` for the overall workflow.
2. `.agents/registry.md` to choose the right agent roles.
3. The specific files in `.agents/agents/` for role instructions.
4. The matching playbook in `.agents/workflows/` for the task type.

Default behavior:

- Use the `orchestrator` role to frame the task, select specialists, and keep scope controlled.
- Preserve the current React/Vite/Tailwind structure unless the task explicitly requires a different architecture.
- Treat this as a personal portfolio site: edits should protect warmth, credibility, accessibility, and polish.
- Run `npm run build` before handing off code changes whenever possible.
- Never overwrite user content, portfolio copy, or assets without calling it out.
- Avoid repeating the same message or service across multiple sections. If a proposed addition seems redundant or weakens the portfolio, explain the tradeoff and ask the user before including it.

Change safety for every portfolio update:

- Record the requested scope and current behavior before editing. Change only files needed for that request; do not rewrite unrelated sections, copy, assets, routes, or integrations.
- Review the diff before release and remove unrelated edits. Keep existing user work and untracked files out of commits.
- Verify the changed behavior in a local browser preview, then smoke-check the nearby behavior and the main navigation, portfolio links, and contact path that could be affected.
- A successful build or HTTP response does not prove an outside service delivered its result. For contact forms, check the submission destination and notification inbox when access is available; state clearly when an end-to-end check is still missing.
- Follow the preview-before-release approval gate: give the user a working preview, wait for explicit approval, then commit, push, or deploy. After release, check the live behavior and report any unverified part.
