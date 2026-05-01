import type { Card } from '../types';

export const codingCards: Card[] = [
  {
    id: 'coding-design-patterns',
    domain: 'coding',
    title: 'Design Patterns',
    subtitle: 'Reusable solutions to common software problems',
    difficulty: 'intermediate',
    tags: ['OOP', 'architecture', 'patterns'],
    definition:
      'Design patterns are named, proven solutions to recurring software design problems — like Singleton (one instance), Observer (event-driven notifications), Factory (object creation without specifying the class), and Strategy (swappable algorithms). They provide a shared vocabulary between developers.',
    whyItMatters:
      'Knowing patterns lets you understand codebases faster ("this uses the Observer pattern") and communicate design decisions clearly. They prevent reinventing solutions to problems that have been solved thousands of times.',
    analogy:
      'Like architectural blueprints — you don\'t redesign load-bearing walls every time you build a house. You pick from proven structural patterns (A-frame, post-and-beam) and adapt them to your needs.',
    soundsSmartToSay:
      '"This is a good candidate for the Strategy pattern — we can swap the pricing algorithm without touching the checkout flow."',
    commonConfusions: [
      'Patterns are not copy-paste code — they are conceptual solutions you adapt to your language and context. A Singleton in Java looks very different from one in Python.',
      'Anti-patterns are the opposite: common but harmful practices (God Object, Spaghetti Code, Golden Hammer). Knowing anti-patterns is as valuable as knowing patterns.',
    ],
    relatedTerms: ['SOLID', 'Gang of Four', 'Anti-Pattern', 'Refactoring'],
  },
  {
    id: 'coding-rest-api',
    domain: 'coding',
    title: 'REST API',
    subtitle: 'The standard way services talk to each other over HTTP',
    difficulty: 'beginner',
    tags: ['HTTP', 'API', 'web'],
    definition:
      'A REST API exposes resources (users, orders, products) at URL endpoints and uses standard HTTP methods (GET = read, POST = create, PUT = update, DELETE = remove) with JSON payloads. It is stateless — each request carries all the information needed to process it.',
    whyItMatters:
      'REST is the most common API style on the internet. Every SaaS product, mobile app, and microservice communicates via REST APIs. Understanding REST is table stakes for working in any technical team.',
    analogy:
      'Like a restaurant menu: each dish (resource) has a name (URL), you order (POST), check your order (GET), modify it (PUT), or cancel (DELETE). The waiter (HTTP) doesn\'t remember your last visit — you give your full order every time.',
    soundsSmartToSay:
      '"We should version our API — breaking changes to /v1/users should go into /v2/users so existing clients don\'t break."',
    commonConfusions: [
      'REST vs RESTful: REST is the architectural style (stateless, resource-based). RESTful means an API follows REST principles. Many "REST APIs" are actually RPC-over-HTTP and don\'t follow all REST constraints.',
      'REST vs GraphQL: REST has fixed endpoints returning fixed shapes. GraphQL has one endpoint and the client specifies exactly what fields it wants. REST is simpler; GraphQL is more flexible for complex UIs.',
    ],
    relatedTerms: ['HTTP', 'JSON', 'GraphQL', 'OpenAPI'],
  },
  {
    id: 'coding-git',
    domain: 'coding',
    title: 'Git',
    subtitle: 'Distributed version control for every codebase',
    difficulty: 'beginner',
    tags: ['version control', 'branching', 'collaboration'],
    definition:
      'Git tracks every change to every file in a project, lets multiple developers work in parallel on branches, and merges their work together. Every developer has a full copy of the history — it is distributed, not centralized.',
    whyItMatters:
      'Git is universal — every modern software team uses it. Understanding branching, merging, rebasing, and conflict resolution is required to contribute to any codebase. GitHub/GitLab are collaboration layers on top of git.',
    analogy:
      'Like a shared Google Doc with unlimited undo history, where every editor works on their own copy (branch) and changes are merged together through a review process (pull request).',
    soundsSmartToSay:
      '"Let\'s rebase this feature branch onto main before merging — it keeps the commit history linear and easier to bisect if we need to find a regression."',
    commonConfusions: [
      'Git vs GitHub: Git is the version control tool (runs locally). GitHub is a cloud hosting platform for git repositories with collaboration features (PRs, issues, CI). GitLab and Bitbucket are alternatives.',
      'Merge vs rebase: Merge creates a merge commit preserving branch history. Rebase replays your commits on top of the target branch for a linear history. Both integrate changes; the tradeoff is history readability.',
    ],
    relatedTerms: ['Branch', 'Pull Request', 'Merge Conflict', 'CI/CD'],
  },
  {
    id: 'coding-solid',
    domain: 'coding',
    title: 'SOLID Principles',
    subtitle: 'Five rules for maintainable object-oriented code',
    difficulty: 'intermediate',
    tags: ['OOP', 'principles', 'clean code'],
    definition:
      'SOLID is five design principles: Single Responsibility (one reason to change), Open/Closed (open for extension, closed for modification), Liskov Substitution (subtypes must be substitutable), Interface Segregation (small focused interfaces), and Dependency Inversion (depend on abstractions, not concretions).',
    whyItMatters:
      'SOLID code is easier to test, extend, and maintain. Violating these principles leads to rigid, fragile codebases where every change breaks something unexpected.',
    analogy:
      'Like building with LEGO blocks — each block does one thing (S), you add new pieces without modifying existing ones (O), any same-size block fits the same slot (L), connectors are standardized (I), and you build on top of the base plate, not directly on the table (D).',
    soundsSmartToSay:
      '"This class violates Single Responsibility — it handles both user authentication and email sending. We should split those into separate concerns."',
    commonConfusions: [
      'SOLID is guidance, not dogma — over-applying these principles creates unnecessary abstraction layers. Use judgment about when the complexity of following SOLID outweighs the benefit.',
      'SOLID applies most directly to OOP but the underlying ideas (separation of concerns, programming to interfaces) apply to functional programming and other paradigms too.',
    ],
    relatedTerms: ['Design Patterns', 'Clean Code', 'Dependency Injection', 'Refactoring'],
  },
  {
    id: 'coding-testing',
    domain: 'coding',
    title: 'Testing Pyramid',
    subtitle: 'Unit, integration, and E2E — the right balance',
    difficulty: 'beginner',
    tags: ['testing', 'quality', 'TDD'],
    definition:
      'The testing pyramid suggests most tests should be fast unit tests (testing individual functions), fewer integration tests (testing components working together), and very few end-to-end tests (testing the full user workflow). This gives fast feedback with good coverage.',
    whyItMatters:
      'Too many E2E tests means slow, flaky CI. Too few tests means bugs reach production. The pyramid shape gives the best tradeoff: fast feedback from units, confidence from integrations, and real-world validation from a few E2E tests.',
    analogy:
      'Like quality control in manufacturing: inspect individual parts first (unit), then check subassemblies (integration), then do a final product test (E2E). You don\'t test the complete car for every bolt — that would be absurdly slow.',
    soundsSmartToSay:
      '"Our E2E suite takes 45 minutes and is 30% flaky. We need to push more coverage down to unit and integration tests so CI gives fast, reliable feedback."',
    commonConfusions: [
      'Unit test scope: A unit test should test one function in isolation, mocking its dependencies. If your "unit test" requires a database connection, it is an integration test.',
      'TDD (Test-Driven Development) means writing the test before the code. BDD (Behavior-Driven Development) writes tests in business language ("Given/When/Then"). Both aim for tests-first; BDD is more stakeholder-readable.',
    ],
    relatedTerms: ['TDD', 'Mocking', 'Code Coverage', 'CI/CD'],
  },
  {
    id: 'coding-microservices',
    domain: 'coding',
    title: 'Microservices',
    subtitle: 'Small, independently deployable services',
    difficulty: 'intermediate',
    tags: ['architecture', 'distributed', 'services'],
    definition:
      'A microservices architecture breaks an application into small, independent services — each owning its own data, deployable independently, and communicating via APIs or message queues. This is the opposite of a monolith where all code lives in one deployable unit.',
    whyItMatters:
      'Microservices let teams ship independently — the payments team can deploy without waiting for the search team. But they introduce distributed systems complexity (network failures, data consistency, debugging across services).',
    analogy:
      'Like a food court vs a single restaurant. A food court (microservices) has independent vendors that can open, close, and change menus without affecting each other. A single restaurant (monolith) has one kitchen where everything is interconnected.',
    soundsSmartToSay:
      '"Before we split this into microservices, we should ask whether the organizational boundary justifies the distributed systems overhead — a well-structured monolith is often the right answer."',
    commonConfusions: [
      'Microservices are not always better than monoliths — they trade code complexity for operational complexity. Many successful companies run monoliths at scale (Shopify, Stack Overflow).',
      'Each microservice should own its data store. Sharing a database between services creates tight coupling and negates the independence benefit.',
    ],
    relatedTerms: ['Monolith', 'API Gateway', 'Service Mesh', 'Domain-Driven Design'],
  },
  {
    id: 'coding-async',
    domain: 'coding',
    title: 'Async Programming',
    subtitle: 'Non-blocking code that handles concurrency',
    difficulty: 'intermediate',
    tags: ['concurrency', 'async/await', 'promises'],
    definition:
      'Asynchronous programming lets code start a long-running operation (network call, file read, database query) and continue doing other work instead of blocking and waiting. When the operation completes, a callback, promise, or await resumes the original work.',
    whyItMatters:
      'A web server handling 10,000 simultaneous connections can\'t block a thread per connection — it would need 10,000 threads. Async lets a single thread handle many connections by never waiting idle, which is how Node.js handles massive concurrency.',
    analogy:
      'Like a restaurant waiter who takes an order, sends it to the kitchen, then takes other tables\' orders while waiting — instead of standing at the kitchen window until the food is ready.',
    soundsSmartToSay:
      '"We need to make this API call async — blocking the event loop for 500ms per request will destroy our throughput under load."',
    commonConfusions: [
      'Async vs parallel: Async means non-blocking (one thread, many tasks interleaved). Parallel means simultaneous execution (multiple threads/cores). Async is about efficiency; parallelism is about speed.',
      'Callback hell → Promises → async/await is the evolution. Modern languages use async/await syntax which reads like synchronous code but executes asynchronously.',
    ],
    relatedTerms: ['Event Loop', 'Promise', 'Thread Pool', 'Concurrency'],
  },
  {
    id: 'coding-technical-debt',
    domain: 'coding',
    title: 'Technical Debt',
    subtitle: 'Shortcuts today that cost engineering time tomorrow',
    difficulty: 'beginner',
    tags: ['maintenance', 'refactoring', 'quality'],
    definition:
      'Technical debt is the accumulated cost of past shortcuts, quick fixes, and deferred maintenance in a codebase. Like financial debt, it accrues interest — making every future change slower and riskier until you "pay it down" through refactoring.',
    whyItMatters:
      'All codebases accumulate tech debt. The question is whether it\'s managed intentionally ("we chose this shortcut knowing we\'ll fix it in Q2") or accidentally ("nobody planned for this mess"). Unmanaged debt eventually slows feature development to a crawl.',
    analogy:
      'Like taking on a mortgage (intentional, manageable) vs running up credit card debt with no repayment plan (unintentional, compounding). Both are debt, but one is strategic and the other is a crisis.',
    soundsSmartToSay:
      '"We need to allocate 20% of each sprint to tech debt — if we keep deferring, our velocity will drop to the point where every feature takes 3x longer than it should."',
    commonConfusions: [
      'Tech debt is not always bad — taking on deliberate debt to ship faster is a valid business strategy. The problem is unintentional debt and the refusal to ever pay it down.',
      'Rewriting from scratch is rarely the answer to tech debt. Incremental refactoring while delivering features is almost always safer and more effective.',
    ],
    relatedTerms: ['Refactoring', 'Code Review', 'Legacy Code', 'Sprint Planning'],
  },
  {
    id: 'coding-code-review',
    domain: 'coding',
    title: 'Code Review',
    subtitle: 'Peer feedback before code reaches production',
    difficulty: 'beginner',
    tags: ['collaboration', 'quality', 'process'],
    definition:
      'Code review is the practice of having one or more developers examine code changes before they are merged into the main codebase. Reviewers check for correctness, readability, security issues, and adherence to team standards. Most teams implement this through pull requests on platforms like GitHub or GitLab.',
    whyItMatters:
      'Code review catches bugs before they reach production, where fixes cost 10-100x more. Beyond defect prevention, it spreads knowledge across the team so no single person becomes a bottleneck, and it raises the overall quality bar by establishing shared coding standards.',
    analogy:
      'Like the editorial process in publishing — a writer submits a draft, an editor reviews it for errors and clarity, and revisions happen before it goes to print. The goal is not to gatekeep but to ensure the final product meets the publication\'s standards.',
    soundsSmartToSay:
      '"We should timebox code reviews to under four hours of turnaround — blocking PRs for days kills velocity and leads to massive, unreviewable changesets."',
    commonConfusions: [
      'Code review is not about finding fault with the author — it is a collaborative process to improve the code. Framing feedback as questions ("Have we considered...?") is more effective than directives ("Change this").',
      'Reviewing a 2,000-line PR is nearly useless — studies show review effectiveness drops sharply past 400 lines. Smaller, focused PRs get better reviews and merge faster.',
      'Automated linting and formatting checks should not be part of human code review. Offload style enforcement to tools so reviewers can focus on logic, architecture, and edge cases.',
    ],
    relatedTerms: ['Pull Request', 'Pair Programming', 'Static Analysis', 'Git'],
  },
  {
    id: 'coding-dependency-injection',
    domain: 'coding',
    title: 'Dependency Injection',
    subtitle: 'Passing dependencies in rather than creating them internally',
    difficulty: 'intermediate',
    tags: ['OOP', 'testing', 'SOLID'],
    definition:
      'Dependency injection (DI) is a design technique where a component receives the services it depends on from the outside rather than creating them itself. Instead of a class instantiating its own database connection, the connection is passed in through a constructor, method, or framework. This inverts the flow of control — the caller decides which implementation to provide.',
    whyItMatters:
      'DI makes code testable by letting you swap real dependencies for test doubles (mocks, stubs). It also makes systems more flexible — you can switch from PostgreSQL to MySQL by injecting a different database adapter without modifying the business logic that uses it.',
    analogy:
      'Like a network switch with modular SFP ports — the switch doesn\'t manufacture its own transceivers, it accepts whatever compatible module you plug in. Need fiber instead of copper? Swap the module, not the switch. That is DI for infrastructure hardware.',
    soundsSmartToSay:
      '"Let\'s inject the payment gateway as an interface so we can stub it in tests and swap providers without touching the order service."',
    commonConfusions: [
      'DI is a simple concept often obscured by complex frameworks (Spring, Guice, Dagger). You can do dependency injection with plain constructor parameters — no framework required.',
      'Dependency injection is not the same as a service locator pattern. DI pushes dependencies to the consumer; a service locator makes the consumer pull dependencies from a global registry, which hides what a class actually needs.',
      'DI does not mean everything must be injectable. Over-abstracting simple dependencies (like utility functions or constants) adds indirection without benefit.',
    ],
    relatedTerms: ['SOLID Principles', 'Inversion of Control', 'Mocking', 'Interface'],
  },
  {
    id: 'coding-ci-linting-static-analysis',
    domain: 'coding',
    title: 'CI Linting and Static Analysis',
    subtitle: 'Catching bugs and style issues before humans review the code',
    difficulty: 'beginner',
    tags: ['CI/CD', 'quality', 'automation'],
    definition:
      'Linting checks code against style rules and common mistakes (unused variables, missing semicolons, inconsistent formatting), while static analysis examines code for deeper issues like security vulnerabilities, type errors, and potential null pointer exceptions — all without running the code. Running these tools automatically in CI ensures every commit meets quality standards.',
    whyItMatters:
      'Automating style and correctness checks eliminates entire categories of bugs before code review even begins. It frees human reviewers to focus on logic and architecture instead of debating tabs vs spaces, and it ensures consistency across a team of developers with different habits.',
    analogy:
      'Like a network firewall with intrusion detection — the firewall (linter) blocks traffic that violates basic rules, while the IDS (static analysis) performs deeper packet inspection to catch sophisticated threats. Both run automatically so the security team focuses on real incidents, not routine filtering.',
    soundsSmartToSay:
      '"Let\'s add a SAST scanner to the pipeline — we\'re catching SQL injection patterns in code review that a tool like Semgrep would flag automatically in seconds."',
    commonConfusions: [
      'Linting and static analysis are not the same thing. Linters enforce code style and catch simple errors. Static analysis tools (SonarQube, Semgrep, CodeQL) perform deeper semantic analysis to find security flaws and logical bugs.',
      'A clean linting report does not mean the code is correct — linters catch syntax and style issues, not business logic errors. You still need tests and code review.',
      'Strict linting rules on a legacy codebase can generate thousands of warnings overnight. Adopt incrementally: enforce rules only on new or changed files to avoid overwhelming the team.',
    ],
    relatedTerms: ['CI/CD', 'Code Review', 'Technical Debt', 'DevSecOps'],
  },
  {
    id: 'coding-monorepo-vs-polyrepo',
    domain: 'coding',
    title: 'Monorepo vs Polyrepo',
    subtitle: 'One big repository or many small ones',
    difficulty: 'intermediate',
    tags: ['architecture', 'version control', 'organization'],
    definition:
      'A monorepo stores all of an organization\'s projects and services in a single version control repository, while a polyrepo approach gives each project its own repository. Monorepos simplify cross-project changes and dependency management but require specialized tooling (Bazel, Nx, Turborepo) to handle scale. Polyrepos offer clear ownership boundaries but make coordinated changes across services harder.',
    whyItMatters:
      'Repository structure directly affects how fast teams can ship. In a polyrepo, updating a shared library means publishing a new version, then updating every consuming repo — a process that can take days. In a monorepo, you change the library and all consumers in a single atomic commit.',
    analogy:
      'Like the difference between a single corporate campus (monorepo) where all departments share cafeterias, parking, and security, versus separate office buildings around the city (polyrepo) where each department manages its own facilities. The campus is efficient but needs centralized facilities management; separate offices are independent but duplicate overhead.',
    soundsSmartToSay:
      '"A monorepo makes atomic cross-service refactors trivial, but we need to invest in build tooling — otherwise CI will rebuild everything on every commit and our pipeline will grind to a halt."',
    commonConfusions: [
      'Monorepo does not mean monolith. Google, Meta, and Microsoft use monorepos containing thousands of independent services. The repo structure is about code organization, not deployment coupling.',
      'Polyrepos do not automatically give you better isolation — teams can still create tight coupling through shared database schemas or undocumented API contracts. The boundary is organizational, not just technical.',
      'Monorepos at scale require specialized build tools that understand dependency graphs and only rebuild what changed. Without these tools, CI becomes prohibitively slow.',
    ],
    relatedTerms: ['Microservices', 'CI/CD', 'Git', 'Build Systems'],
  },
  {
    id: 'coding-database-migrations',
    domain: 'coding',
    title: 'Database Migrations',
    subtitle: 'Version-controlled changes to your database schema',
    difficulty: 'intermediate',
    tags: ['database', 'DevOps', 'deployment'],
    definition:
      'Database migrations are versioned, incremental scripts that modify a database schema — adding tables, altering columns, creating indexes — in a controlled, repeatable way. Each migration has an "up" (apply the change) and "down" (roll it back) operation, and a migration runner tracks which ones have been applied. Tools like Flyway, Liquibase, Alembic, and Knex handle this.',
    whyItMatters:
      'Without migrations, schema changes are manual SQL scripts run ad hoc, leading to environments that drift out of sync and deployments that fail because production\'s schema doesn\'t match what developers tested against. Migrations make database changes as reviewable, testable, and deployable as application code.',
    analogy:
      'Like infrastructure-as-code (Terraform) but for your database. Just as Terraform tracks the desired state of your cloud resources and applies incremental changes, migrations track the desired state of your schema and apply changes in order. Both give you version control, rollback capability, and environment consistency.',
    soundsSmartToSay:
      '"We should make this column addition backward-compatible — deploy the migration first with a nullable column, then deploy the code that populates it, so we can roll back the app without a schema rollback."',
    commonConfusions: [
      'Migrations must be immutable once applied to shared environments. If a migration has a bug, you write a new migration to fix it — you never edit a migration that has already run in staging or production.',
      'Schema migrations and data migrations are different concerns. Schema migrations change structure (add a column); data migrations transform existing data (backfill a new column). Mixing them in one migration makes rollback risky.',
      'Running migrations automatically on deployment works well until a migration takes a lock on a large table for 20 minutes. Long-running migrations need to be planned separately from the deployment pipeline.',
    ],
    relatedTerms: ['CI/CD', 'Infrastructure as Code', 'Schema Design', 'Rollback'],
  },
  {
    id: 'coding-concurrency-parallelism',
    domain: 'coding',
    title: 'Concurrency and Parallelism',
    subtitle: 'Managing multiple tasks — interleaved vs truly simultaneous',
    difficulty: 'advanced',
    tags: ['performance', 'multithreading', 'architecture'],
    definition:
      'Concurrency is structuring a program to handle multiple tasks whose execution can overlap, while parallelism is actually executing multiple tasks at the same instant on separate CPU cores. A concurrent program manages multiple in-progress tasks (possibly on one core via context switching), while a parallel program runs computations simultaneously on multiple cores. Languages offer different primitives: threads, coroutines, actors, channels, and futures.',
    whyItMatters:
      'Modern applications serve thousands of simultaneous users and process massive datasets. Without concurrency, a server handles one request at a time. Without parallelism, a data pipeline uses one core when sixteen are available. Mastering both is the difference between a system that handles load gracefully and one that collapses under traffic.',
    analogy:
      'Like the difference between a single help desk agent juggling multiple support tickets (concurrency — one person, many tasks interleaved) and a help desk team where each agent handles a ticket simultaneously (parallelism — many people, many tasks at the same time). The single agent is concurrent but not parallel; the full team is both.',
    soundsSmartToSay:
      '"This workload is CPU-bound, so async won\'t help — we need actual parallelism across worker processes. Async is for I/O-bound work where threads are waiting on network or disk."',
    commonConfusions: [
      'Concurrency is not parallelism. Concurrency is about structure (dealing with many things at once); parallelism is about execution (doing many things at once). A single-core machine can be concurrent but never parallel.',
      'Adding more threads does not always improve performance. Shared mutable state requires locks, and locks create contention. Past a certain point, threads spend more time waiting for locks than doing work — a phenomenon called lock contention.',
      'Race conditions occur when the result of a program depends on the unpredictable timing of concurrent operations. They produce bugs that appear randomly and are notoriously hard to reproduce, test, and debug.',
    ],
    relatedTerms: ['Async Programming', 'Thread Pool', 'Mutex', 'Actor Model'],
  },
  {
    id: 'coding-event-sourcing',
    domain: 'coding',
    title: 'Event Sourcing',
    subtitle: 'Storing what happened, not just the current state',
    difficulty: 'advanced',
    tags: ['architecture', 'data', 'patterns'],
    definition:
      'Event sourcing is an architectural pattern where every change to application state is captured as an immutable event in an append-only log. Instead of storing the current state of an entity (e.g., account balance = $500), you store every event that led to it (deposited $1000, withdrew $300, withdrew $200). Current state is derived by replaying the event sequence.',
    whyItMatters:
      'Event sourcing provides a complete audit trail, enables point-in-time reconstruction of state, and supports building new read models from historical data without schema migrations. It is particularly valuable in domains where auditability and traceability are regulatory requirements — financial services, healthcare, and supply chain.',
    analogy:
      'Like an accounting ledger versus a bank balance. Traditional CRUD stores only the current balance (you know you have $500 but not how you got there). Event sourcing is the full ledger — every credit and debit recorded in order. You can always re-derive the balance from the ledger, but you cannot reconstruct the ledger from just the balance.',
    soundsSmartToSay:
      '"If we event-source the order lifecycle, we can build a real-time analytics projection from the same event stream without adding tracking code to the transactional path."',
    commonConfusions: [
      'Event sourcing and CQRS (Command Query Responsibility Segregation) are often used together but are independent patterns. CQRS separates read and write models; event sourcing stores state as events. You can use either without the other.',
      'Event sourcing does not mean you never have a current-state database. Most systems maintain read-optimized projections (materialized views) built by processing the event stream. The event log is the source of truth; projections are derived caches.',
      'Replaying millions of events to rebuild state is slow. Snapshots (periodic checkpoints of derived state) solve this — you replay only events after the last snapshot rather than the entire history.',
    ],
    relatedTerms: ['CQRS', 'Message Queue', 'Domain-Driven Design', 'Audit Log'],
  },
  {
    id: 'coding-api-versioning',
    domain: 'coding',
    title: 'API Versioning',
    subtitle: 'Evolving APIs without breaking existing clients',
    difficulty: 'intermediate',
    tags: ['API', 'web', 'architecture'],
    definition:
      'API versioning is the practice of managing changes to an API so that existing clients continue to work while new clients can use updated functionality. Common strategies include URL path versioning (/v1/users, /v2/users), header versioning (Accept: application/vnd.api.v2+json), and query parameter versioning (?version=2). The goal is to make breaking changes (removing fields, changing types) without forcing all consumers to update simultaneously.',
    whyItMatters:
      'Public and internal APIs often have dozens or hundreds of consumers who cannot all upgrade at once. Without versioning, a single breaking change triggers a coordinated "big bang" migration across every consuming team and third-party integration — a logistical nightmare that slows the organization and risks production outages.',
    analogy:
      'Like backward-compatible hardware interfaces — USB-A ports coexisted with USB-C for years so existing peripherals kept working while new devices adopted the better connector. Removing USB-A overnight would have broken millions of devices, just as removing an API field overnight breaks every client that depends on it.',
    soundsSmartToSay:
      '"Rather than versioning the entire API, let\'s use additive changes — new fields are always optional, and deprecated fields remain for two release cycles with sunset headers so consumers have a migration window."',
    commonConfusions: [
      'Not every API change requires a new version. Adding a new optional field or a new endpoint is backward-compatible and does not break existing clients. Versioning is only needed for breaking changes like removing a field, renaming it, or changing its type.',
      'URL versioning (/v1/, /v2/) is the most visible and easiest for consumers to understand, but it can lead to entire API duplication. Header-based versioning is cleaner technically but harder for developers to discover and test in a browser.',
      'Semantic versioning (semver) for libraries and API versioning for services solve the same problem — communicating change impact — but operate differently. Semver has major.minor.patch; API versions are typically just a single integer (v1, v2).',
    ],
    relatedTerms: ['REST API', 'Backward Compatibility', 'Deprecation', 'OpenAPI'],
  },
  {
    id: 'coding-code-review',
    domain: 'coding',
    title: 'Code Review',
    subtitle: 'Catch bugs and share knowledge before merging',
    difficulty: 'beginner',
    tags: ['quality', 'collaboration', 'process'],
    definition:
      'Code review is the practice of having one or more developers examine a proposed code change (pull request) before it merges into the main branch. Reviewers check for correctness, readability, security issues, and adherence to team conventions.',
    whyItMatters:
      'Code review catches bugs that automated tests miss — logic errors, security vulnerabilities, and design problems. It also spreads knowledge across the team so no single person is the only one who understands a subsystem.',
    analogy:
      'Like peer review in academic publishing. A paper (code change) is reviewed by peers before it is published (merged). The goal is not gatekeeping — it is improving quality and catching blind spots the author cannot see.',
    soundsSmartToSay:
      '"Code review is a conversation, not an approval gate. If the review is just rubber-stamping, we are not getting the quality or knowledge-sharing benefits."',
    commonConfusions: [
      'Code review vs testing: Tests verify that code works correctly. Code review checks whether the approach is right, the code is maintainable, and edge cases are handled. Both are necessary; neither replaces the other.',
      'Nitpicking vs valuable feedback: Good code reviews focus on logic, design, and potential bugs. Formatting and style should be enforced by automated linters, not reviewers.',
    ],
    relatedTerms: ['Pull Request', 'Git', 'CI/CD', 'Pair Programming'],
  },
  {
    id: 'coding-dependency-injection',
    domain: 'coding',
    title: 'Dependency Injection',
    subtitle: 'Pass dependencies in, do not create them inside',
    difficulty: 'intermediate',
    tags: ['design', 'testing', 'decoupling'],
    definition:
      'Dependency injection (DI) is a design pattern where a component receives its dependencies from the outside rather than creating them internally. Instead of a class instantiating its own database connection, the connection is passed in — making the component testable, configurable, and loosely coupled.',
    whyItMatters:
      'Without DI, components are tightly coupled to their dependencies — you cannot swap a real database for a mock in tests, or change from Postgres to MySQL without rewriting the class. DI is what makes unit testing and modular architecture practical.',
    analogy:
      'Like a restaurant kitchen (your class) that receives ingredients from a supplier (injected dependency) instead of growing its own food. Changing suppliers is easy; growing your own food locks you into one source.',
    soundsSmartToSay:
      '"This class is instantiating its own HTTP client — we should inject it so we can mock it in tests and swap the implementation for different environments."',
    commonConfusions: [
      'DI vs DI framework: Dependency injection is a design pattern. DI frameworks (Spring, Guice, InversifyJS) automate the wiring. You can practice DI without a framework — just pass dependencies through constructors.',
      'DI vs Service Locator: A service locator is a registry where components ask for their dependencies. DI pushes dependencies into components. DI is preferred because dependencies are explicit in the constructor signature.',
    ],
    relatedTerms: ['SOLID Principles', 'Inversion of Control', 'Unit Testing', 'Mocking'],
  },
  {
    id: 'coding-static-analysis',
    domain: 'coding',
    title: 'Static Analysis',
    subtitle: 'Find bugs without running the code',
    difficulty: 'beginner',
    tags: ['quality', 'ci-cd', 'automation'],
    definition:
      'Static analysis tools (ESLint, SonarQube, Pylint, Semgrep) analyze source code without executing it to find bugs, security vulnerabilities, style violations, and code smells. They run in CI pipelines and IDEs, catching issues at the earliest possible moment.',
    whyItMatters:
      'Static analysis catches entire categories of bugs — null pointer dereferences, SQL injection, unused variables, unreachable code — before a single test runs. At scale, it enforces consistent code quality across hundreds of developers without relying on reviewers to catch every issue.',
    analogy:
      'Like a spell checker for code. A spell checker finds errors by analyzing text structure without understanding the meaning. Static analysis finds code errors by analyzing code structure without running it.',
    soundsSmartToSay:
      '"We should add Semgrep rules for our top OWASP vulnerabilities and block PRs that introduce new findings — shift security left into the developer workflow."',
    commonConfusions: [
      'Static vs dynamic analysis: Static analysis examines code without running it. Dynamic analysis (fuzzing, DAST) runs the code and tests its behavior. Both find different classes of bugs — use both.',
      'Linting vs static analysis: Linters traditionally check style and formatting. Modern static analysis tools do deep semantic analysis — data flow, taint tracking, and security vulnerability detection. The line between them has blurred.',
    ],
    relatedTerms: ['Code Review', 'CI/CD', 'SAST', 'DevSecOps'],
  },
  {
    id: 'coding-monorepo',
    domain: 'coding',
    title: 'Monorepo vs Polyrepo',
    subtitle: 'One big repo or many small ones?',
    difficulty: 'intermediate',
    tags: ['architecture', 'version-control', 'organization'],
    definition:
      'A monorepo stores all of an organization\'s code in a single repository — shared libraries, services, and applications together. A polyrepo strategy uses a separate repository for each project or service. Google, Meta, and Microsoft use monorepos; most open-source projects use polyrepos.',
    whyItMatters:
      'The repo strategy affects everything — dependency management, CI/CD pipeline design, code sharing, and team coordination. Monorepos enable atomic cross-project changes and easy code sharing. Polyrepos provide clear ownership boundaries and independent deployment cycles.',
    analogy:
      'Monorepo is like a single shopping mall where all stores share infrastructure (parking, HVAC, security). Polyrepo is like a street of independent shops, each with their own building. The mall enables sharing but requires coordination; the street is independent but duplicates infrastructure.',
    soundsSmartToSay:
      '"A monorepo only works with proper tooling — build caching, affected-target detection, and code ownership files. Without those, CI takes hours and nobody knows who owns what."',
    commonConfusions: [
      'Monorepo is not a monolith: A monorepo can contain dozens of independently deployable microservices. The code lives together for sharing and atomic changes, but services deploy independently.',
      'Tooling requirements differ: Polyrepos work with standard Git workflows. Monorepos at scale require specialized tooling (Bazel, Nx, Turborepo) for build caching, incremental builds, and selective testing.',
    ],
    relatedTerms: ['Git', 'CI/CD', 'Build Systems', 'Code Ownership'],
  },
  {
    id: 'coding-db-migrations',
    domain: 'coding',
    title: 'Database Migrations',
    subtitle: 'Version control for your schema',
    difficulty: 'intermediate',
    tags: ['database', 'deployment', 'versioning'],
    definition:
      'Database migrations are versioned, incremental scripts that evolve a database schema over time — adding columns, creating tables, modifying indexes — in a controlled, repeatable way. Tools like Flyway, Liquibase, Alembic, and Prisma Migrate track which migrations have run and apply new ones in order.',
    whyItMatters:
      'Without migrations, schema changes are ad-hoc SQL scripts that someone runs manually — leading to environments that drift apart, failed deployments, and "it works on my machine" for databases. Migrations make schema changes as reproducible as code deployments.',
    analogy:
      'Like Git commits for your database schema. Each migration is a "commit" that changes the schema, and the migration tool tracks the "log" of which changes have been applied. You can replay them to rebuild the schema from scratch.',
    soundsSmartToSay:
      '"Every schema change goes through a migration — no manual DDL in production. The migration should be backward-compatible so we can deploy the code and schema changes independently."',
    commonConfusions: [
      'Migrations vs seed data: Migrations change the schema (DDL). Seed data populates tables with initial data (DML). Some tools handle both, but they serve different purposes.',
      'Backward-compatible migrations: Renaming a column breaks all code that references the old name. Safe migrations add the new column, backfill, migrate code, then drop the old column — expanding first, contracting later.',
    ],
    relatedTerms: ['Schema Design', 'CI/CD', 'Flyway', 'ORM'],
  },
  {
    id: 'coding-concurrency',
    domain: 'coding',
    title: 'Concurrency and Parallelism',
    subtitle: 'Doing multiple things at once — or at least appearing to',
    difficulty: 'advanced',
    tags: ['performance', 'threading', 'async'],
    definition:
      'Concurrency is structuring a program to handle multiple tasks by interleaving their execution on one or more cores. Parallelism is actually executing multiple tasks simultaneously on multiple cores. Concurrency is about structure; parallelism is about execution.',
    whyItMatters:
      'Modern applications handle thousands of simultaneous requests, background jobs, and I/O operations. Understanding concurrency models (threads, async/await, actors, goroutines) is essential for writing systems that perform under load without race conditions or deadlocks.',
    analogy:
      'A single chef handling multiple dishes by switching between them is concurrency. Multiple chefs each working on their own dish is parallelism. You can have concurrency without parallelism (one chef, many dishes) but parallelism requires concurrency by definition.',
    soundsSmartToSay:
      '"We have a concurrency bug — two goroutines are writing to the same map without a mutex. The race detector catches it locally but it only manifests in production under load."',
    commonConfusions: [
      'Concurrent vs parallel: Concurrent means tasks are in progress at the same time (possibly interleaved on one core). Parallel means tasks execute at the exact same time on different cores. All parallel programs are concurrent, but not all concurrent programs are parallel.',
      'Async/await vs threading: async/await is a concurrency model that uses a single thread and an event loop (Node.js, Python asyncio). Threading uses multiple OS threads. Async is better for I/O-bound work; threads are better for CPU-bound work.',
    ],
    relatedTerms: ['Async Programming', 'Threading', 'Race Condition', 'Mutex'],
  },
  {
    id: 'coding-event-sourcing',
    domain: 'coding',
    title: 'Event Sourcing',
    subtitle: 'Store what happened, not just the current state',
    difficulty: 'advanced',
    tags: ['architecture', 'patterns', 'data'],
    definition:
      'Event sourcing stores every state change as an immutable event (OrderPlaced, PaymentReceived, ItemShipped) rather than overwriting the current state. The current state is derived by replaying events. This gives you a complete audit trail and the ability to reconstruct state at any point in time.',
    whyItMatters:
      'Traditional CRUD overwrites data — once you update a record, the previous state is gone. Event sourcing preserves the full history, enabling audit trails (finance, healthcare), temporal queries (what was the balance last Tuesday?), and event replay for debugging.',
    analogy:
      'Like a bank ledger vs a bank balance. A balance (CRUD) tells you you have $500 now. A ledger (event sourcing) tells you every deposit and withdrawal — you can always recalculate the balance and know exactly how you got there.',
    soundsSmartToSay:
      '"Event sourcing gives us a natural audit trail and the ability to rebuild read models — but the trade-off is eventual consistency and more complex query patterns."',
    commonConfusions: [
      'Event sourcing vs event-driven architecture: Event-driven architecture uses events for communication between services. Event sourcing uses events as the primary data storage mechanism. You can use event-driven architecture without event sourcing.',
      'Event sourcing adds complexity: Replaying millions of events to rebuild state is slow — you need snapshots. Querying events directly is hard — you need materialized views (CQRS). Only use event sourcing when the audit trail or temporal queries justify the complexity.',
    ],
    relatedTerms: ['CQRS', 'Event-Driven Architecture', 'Audit Trail', 'Immutability'],
  },
  {
    id: 'coding-api-versioning',
    domain: 'coding',
    title: 'API Versioning',
    subtitle: 'Evolving APIs without breaking consumers',
    difficulty: 'intermediate',
    tags: ['api', 'compatibility', 'design'],
    definition:
      'API versioning is the practice of managing changes to an API so that existing consumers continue working while new consumers can use updated functionality. Common strategies include URL versioning (/api/v2/), header versioning (Accept: application/vnd.api+json;version=2), and additive-only changes that avoid versioning entirely.',
    whyItMatters:
      'Once an API has consumers, breaking changes break their code. API versioning lets you evolve your API while giving consumers time to migrate — without it, every change requires coordinated deployments across all consumers.',
    analogy:
      'Like maintaining backward compatibility in electrical outlets. When a country adopts a new plug standard, old outlets still work with adapters. API versioning is the adapter — old consumers keep working while new ones use the updated interface.',
    soundsSmartToSay:
      '"We should favor additive, non-breaking changes — new fields, new endpoints — over versioning. When we do need a breaking change, deprecate v1 with a sunset date rather than removing it immediately."',
    commonConfusions: [
      'URL vs header versioning: URL versioning (/v1/users) is the most common and easiest to understand. Header versioning keeps URLs clean but is harder to test in a browser. Neither is objectively better — pick one and be consistent.',
      'Semantic versioning (semver) for libraries and API versioning for services solve the same problem — communicating change impact — but operate differently. Semver has major.minor.patch; API versions are typically just a single integer (v1, v2).',
    ],
    relatedTerms: ['REST API', 'Backward Compatibility', 'Deprecation', 'OpenAPI'],
  },
];
