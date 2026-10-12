# Workflow: Bug Fix

## Agents

Primary: `frontend-engineer`

Supporting: `qa-analyst`, plus `accessibility-performance` for UI behavior bugs.

## Steps

1. Reproduce the bug when possible; otherwise distinguish observed evidence from a code-based inference.
2. Locate the smallest responsible area.
3. Fix the cause, not only the symptom.
4. Review the diff for unrelated changes, then check nearby behaviors and affected user flows for regressions.
5. Run `npm run build`.
6. For third-party services, verify the downstream result rather than treating a successful request as proof of delivery.
7. Document what was fixed, how it was verified, and what remains unverified.

## Done Means

- The reported bug is addressed.
- Nearby behavior still works.
- Build passes or the failure is documented.
