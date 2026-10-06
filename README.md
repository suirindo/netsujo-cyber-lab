# Netsujo Cyber Lab

> **Status: legacy / migration in progress**

This repository contains the former standalone **Netsujo Cyber Lab** security-service landing page.

Netsujo is no longer treating this repository as the canonical public surface for Cyber / Trust R&D. Durable trust-infrastructure work is being consolidated into the existing Netsujo R&D surfaces and the repositories that actually produce the implementation and evidence.

## Current ownership

- Public R&D explanation and public-safe proof summaries: `suirindo/netsujo-site`
- Agent Role Contracts and declaration-consistency evaluations: `suirindo/agent-role-contracts`
- Agent OS / Controller / recovery implementation and evidence: their existing repositories
- SIGNAL-specific application evidence: `suirindo/netsujo-signal`
- This repository: legacy source, migration history, and eventual archive

Canonical migration tracker:

- `suirindo/netsujo-site#555`

Repository-local transition tracker:

- `suirindo/netsujo-cyber-lab#5`

## Important boundary

The historical site contains security-service positioning, including vulnerability assessment / consulting / pricing / inquiry copy and synthetic SOC-style visuals.

Those historical materials must not be treated as proof that Netsujo currently provides or has independently demonstrated every capability described by the old landing page.

For current Trust / AI-agent R&D, claims should be tied to reproducible evidence for the specific workflow, version, environment, and boundary being discussed.

A declaration-layer PASS does not by itself prove runtime authorization, authenticated identity, reviewer independence, artifact authenticity, prevention of a real-world side effect, or business acceptance.

## Migration policy

Until the migration tracker is closed:

1. Do not turn this repository into a replacement `Trust Lab` or another product surface.
2. Do not add a second evidence store, controller, task database, or agent runtime here.
3. Do not merge legacy maintenance PRs solely because they are technically valid in isolation; first determine whether the legacy app still needs to be served during cutover.
4. Do not change domain, DNS, production deployment, or delete historical source based only on this README.
5. Archive the repository only after public migration dependencies and any required preservation work are complete.

## Historical implementation

The legacy landing page is a Next.js / TypeScript application using Tailwind CSS and was designed for Vercel deployment.

The source is retained during migration for provenance and controlled cutover work. It is not the target location for new Netsujo trust-infrastructure product development.

## License

© Netsujo. All rights reserved.
