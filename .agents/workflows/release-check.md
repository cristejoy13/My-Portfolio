# Workflow: Release Check

## Agents

Primary: `release-manager`

Supporting: `qa-analyst`, `accessibility-performance`, `repo-steward`

## Steps

1. Review `git status --short`.
2. Inspect changed files.
3. Run `npm run build`.
4. Open a local preview and check the changed flow plus affected navigation, project links, and contact behavior.
5. Check deployment workflow and domain files if release settings changed.
6. Share the preview with the user and wait for explicit approval before committing, pushing, or deploying.
7. After release, verify the live behavior, including downstream notifications for integration changes when access is available.
8. Prepare a concise release summary and call out unverified areas.

## Done Means

- Build status is known.
- Changed scope is understood.
- The handoff makes deploy risk clear.
