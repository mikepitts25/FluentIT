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
      'Dependency injection (DI) is a design technique where a component receives the services it depends on from the outside rather than creating them itself. Instead of a class instantiating its own database connection, the connection is passed in through a constructor, method, or framework.',
    whyItMatters:
      'DI makes code testable by letting you swap real dependencies for test doubles (mocks, stubs). It also makes systems more flexible — you can switch from PostgreSQL to MySQL by injecting a different database adapter without modifying the business logic that uses it.',
    analogy:
      'Like a network switch with modular SFP ports — the switch doesn\'t manufacture its own transceivers, it accepts whatever compatible module you plug in. Need fiber instead of copper? Swap the module, not the switch.',
    soundsSmartToSay:
      '"Let\'s inject the payment gateway as an interface so we can stub it in tests and swap providers without touching the order service."',
    commonConfusions: [
      'DI is a simple concept often obscured by complex frameworks (Spring, Guice, Dagger). You can do dependency injection with plain constructor parameters — no framework required.',
      'Dependency injection is not the same as a service locator pattern. DI pushes dependencies to the consumer; a service locator makes the consumer pull dependencies from a global registry.',
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
      'Linting checks code against style rules and common mistakes (unused variables, missing semicolons, inconsistent formatting), while static analysis examines code for deeper issues like security vulnerabilities, type errors, and potential null pointer exceptions — all without running the code.',
    whyItMatters:
      'Automating style and correctness checks eliminates entire categories of bugs before code review even begins. It frees human reviewers to focus on logic and architecture instead of debating tabs vs spaces.',
    analogy:
      'Like a network firewall with intrusion detection — the firewall (linter) blocks traffic that violates basic rules, while the IDS (static analysis) performs deeper packet inspection to catch sophisticated threats.',
    soundsSmartToSay:
      '"Let\'s add a SAST scanner to the pipeline — we\'re catching SQL injection patterns in code review that a tool like Semgrep would flag automatically in seconds."',
    commonConfusions: [
      'Linting and static analysis are not the same thing. Linters enforce code style and catch simple errors. Static analysis tools (SonarQube, Semgrep, CodeQL) perform deeper semantic analysis to find security flaws.',
      'A clean linting report does not mean the code is correct — linters catch syntax and style issues, not business logic errors. You still need tests and code review.',
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
      'A monorepo stores all of an organization\'s projects and services in a single version control repository, while a polyrepo approach gives each project its own repository. Monorepos simplify cross-project changes and dependency management but require specialized tooling (Bazel, Nx, Turborepo) to handle scale.',
    whyItMatters:
      'Repository structure directly affects how fast teams can ship. In a polyrepo, updating a shared library means publishing a new version, then updating every consuming repo. In a monorepo, you change the library and all consumers in a single atomic commit.',
    analogy:
      'Like the difference between a single corporate campus (monorepo) where all departments share cafeterias, parking, and security, versus separate office buildings around the city (polyrepo) where each department manages its own facilities.',
    soundsSmartToSay:
      '"A monorepo makes atomic cross-service refactors trivial, but we need to invest in build tooling — otherwise CI will rebuild everything on every commit and our pipeline will grind to a halt."',
    commonConfusions: [
      'Monorepo does not mean monolith. Google, Meta, and Microsoft use monorepos containing thousands of independent services. The repo structure is about code organization, not deployment coupling.',
      'Polyrepos do not automatically give you better isolation — teams can still create tight coupling through shared database schemas or undocumented API contracts.',
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
      'Database migrations are versioned, incremental scripts that modify a database schema — adding tables, altering columns, creating indexes — in a controlled, repeatable way. Each migration has an "up" (apply the change) and "down" (roll it back) operation, and a migration runner tracks which ones have been applied.',
    whyItMatters:
      'Without migrations, schema changes are manual SQL scripts run ad hoc, leading to environments that drift out of sync and deployments that fail because production\'s schema doesn\'t match what developers tested against.',
    analogy:
      'Like infrastructure-as-code (Terraform) but for your database. Just as Terraform tracks the desired state of your cloud resources and applies incremental changes, migrations track the desired state of your schema.',
    soundsSmartToSay:
      '"We should make this column addition backward-compatible — deploy the migration first with a nullable column, then deploy the code that populates it, so we can roll back the app without a schema rollback."',
    commonConfusions: [
      'Migrations must be immutable once applied to shared environments. If a migration has a bug, you write a new migration to fix it — you never edit a migration that has already run in staging or production.',
      'Schema migrations and data migrations are different concerns. Schema migrations change structure (add a column); data migrations transform existing data (backfill). Mixing them makes rollback risky.',
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
      'Concurrency is structuring a program to handle multiple tasks whose execution can overlap, while parallelism is actually executing multiple tasks at the same instant on separate CPU cores. A concurrent program manages multiple in-progress tasks (possibly on one core via context switching), while a parallel program runs computations simultaneously.',
    whyItMatters:
      'Modern applications serve thousands of simultaneous users and process massive datasets. Without concurrency, a server handles one request at a time. Without parallelism, a data pipeline uses one core when sixteen are available.',
    analogy:
      'Like the difference between a single help desk agent juggling multiple support tickets (concurrency — one person, many tasks interleaved) and a help desk team where each agent handles a ticket simultaneously (parallelism — many people, many tasks at the same time).',
    soundsSmartToSay:
      '"This workload is CPU-bound, so async won\'t help — we need actual parallelism across worker processes. Async is for I/O-bound work where threads are waiting on network or disk."',
    commonConfusions: [
      'Concurrency is not parallelism. Concurrency is about structure (dealing with many things at once); parallelism is about execution (doing many things at once). A single-core machine can be concurrent but never parallel.',
      'Race conditions occur when the result of a program depends on the unpredictable timing of concurrent operations. They produce bugs that appear randomly and are notoriously hard to reproduce.',
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
      'Event sourcing is an architectural pattern where every change to application state is captured as an immutable event in an append-only log. Instead of storing the current state of an entity (account balance = $500), you store every event that led to it (deposited $1000, withdrew $300, withdrew $200). Current state is derived by replaying the event sequence.',
    whyItMatters:
      'Event sourcing provides a complete audit trail, enables point-in-time reconstruction of state, and supports building new read models from historical data without schema migrations. It is particularly valuable in domains with regulatory auditability requirements — financial services, healthcare, supply chain.',
    analogy:
      'Like an accounting ledger versus a bank balance. Traditional CRUD stores only the current balance. Event sourcing is the full ledger — every credit and debit recorded in order. You can always re-derive the balance from the ledger.',
    soundsSmartToSay:
      '"If we event-source the order lifecycle, we can build a real-time analytics projection from the same event stream without adding tracking code to the transactional path."',
    commonConfusions: [
      'Event sourcing and CQRS are often used together but are independent patterns. CQRS separates read and write models; event sourcing stores state as events. You can use either without the other.',
      'Replaying millions of events to rebuild state is slow. Snapshots (periodic checkpoints of derived state) solve this — you replay only events after the last snapshot.',
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
      'API versioning is the practice of managing changes to an API so that existing clients continue to work while new clients can use updated functionality. Common strategies include URL path versioning (/v1/users, /v2/users), header versioning, and query parameter versioning. The goal is to make breaking changes without forcing all consumers to update simultaneously.',
    whyItMatters:
      'Public and internal APIs often have dozens or hundreds of consumers who cannot all upgrade at once. Without versioning, a single breaking change triggers a coordinated "big bang" migration across every consuming team and third-party integration.',
    analogy:
      'Like backward-compatible hardware interfaces — USB-A ports coexisted with USB-C for years so existing peripherals kept working while new devices adopted the better connector.',
    soundsSmartToSay:
      '"Rather than versioning the entire API, let\'s use additive changes — new fields are always optional, and deprecated fields remain for two release cycles with sunset headers so consumers have a migration window."',
    commonConfusions: [
      'Not every API change requires a new version. Adding a new optional field or a new endpoint is backward-compatible and does not break existing clients.',
      'URL versioning (/v1/, /v2/) is the most visible and easiest for consumers to understand, but can lead to entire API duplication. Header-based versioning is cleaner technically but harder to discover.',
    ],
    relatedTerms: ['REST API', 'Backward Compatibility', 'Deprecation', 'OpenAPI'],
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
      'Static vs dynamic analysis: Static analysis examines code without running it. Dynamic analysis (fuzzing, DAST) runs the code and tests its behavior. Both find different classes of bugs.',
      'Linting vs static analysis: Linters traditionally check style and formatting. Modern static analysis tools do deep semantic analysis — data flow, taint tracking, and security vulnerability detection.',
    ],
    relatedTerms: ['Code Review', 'CI/CD', 'SAST', 'DevSecOps'],
  },
  {
    id: 'coding-functional-programming',
    domain: 'coding',
    title: 'Functional Programming',
    subtitle: 'Pure functions, immutability, and no side effects',
    difficulty: 'intermediate',
    tags: ['paradigm', 'immutability', 'pure functions'],
    definition:
      'Functional programming (FP) is a paradigm that treats computation as the evaluation of pure functions — functions that always return the same output for the same input and have no side effects. FP emphasizes immutable data (data that never changes after creation), first-class functions (functions as values), and higher-order functions (map, filter, reduce).',
    whyItMatters:
      'FP makes code easier to reason about, test, and parallelize. Pure functions have no hidden state, so testing them is trivial. Immutable data eliminates an entire class of concurrency bugs. Even in OOP codebases, FP techniques (immutable objects, pure utility functions) dramatically reduce bugs.',
    analogy:
      'Like a mathematical formula: f(x) = x² always returns 4 when x=2, regardless of when you call it or what else is happening. There are no global variables or side effects — just inputs and outputs.',
    soundsSmartToSay:
      '"Let\'s make this transformation pipeline purely functional — immutable inputs, no side effects, so we can parallelize it across worker threads without any synchronization overhead."',
    commonConfusions: [
      'FP and OOP are not mutually exclusive. Scala, Kotlin, Swift, and Python support both. Most modern software uses FP techniques within an OOP structure.',
      'Immutability does not mean you cannot have changing state — it means you create new state rather than modifying existing state. React\'s state management is built on this principle.',
    ],
    relatedTerms: ['Pure Function', 'Immutability', 'Monad', 'Higher-Order Function'],
  },
  {
    id: 'coding-type-systems',
    domain: 'coding',
    title: 'Type Systems',
    subtitle: 'Catching errors at compile time before the code ever runs',
    difficulty: 'intermediate',
    tags: ['TypeScript', 'static typing', 'safety'],
    definition:
      'A type system defines what kinds of values a variable can hold and what operations are valid on them. Statically typed languages (TypeScript, Java, Go, Rust) check types at compile time — you can\'t accidentally pass a number where a string is expected. Dynamically typed languages (Python, JavaScript) check types at runtime. Generics let you write code that works with multiple types while preserving type safety.',
    whyItMatters:
      'Type errors are the most common class of bugs in dynamically typed codebases. TypeScript has become the default for large JavaScript projects because it catches type mismatches before the code ships, dramatically reducing runtime errors. Generics let you write reusable, type-safe data structures and algorithms.',
    analogy:
      'Like plumbing with labeled connectors — a static type system is like color-coded pipes where the red (hot) connector physically cannot connect to a cold-water fitting. A dynamic type system is like unlabeled pipes where everything fits together, but you find out at runtime that you connected hot and cold backwards.',
    soundsSmartToSay:
      '"We should enable strict TypeScript mode — the laxer settings let too many implicit `any` types through, which defeats the purpose of having TypeScript at all."',
    commonConfusions: [
      'Static typing does not mean more verbose code. Go and Rust infer types in most places so you rarely write type annotations explicitly. TypeScript infers types from assignments.',
      'Strong typing and static typing are different axes. Python is dynamically typed but strongly typed (you cannot add a string and a number without an explicit conversion). JavaScript is both dynamic and weakly typed.',
    ],
    relatedTerms: ['TypeScript', 'Generics', 'Interface', 'Compiler'],
  },
  {
    id: 'coding-build-systems',
    domain: 'coding',
    title: 'Build Systems',
    subtitle: 'Automating compilation, bundling, and dependency resolution',
    difficulty: 'intermediate',
    tags: ['tooling', 'CI/CD', 'performance'],
    definition:
      'A build system compiles source code, resolves dependencies, runs tests, and packages the output into deployable artifacts. Language-specific tools (Maven/Gradle for Java, npm/Webpack for JavaScript, cargo for Rust) handle single-project builds. Polyglot build systems (Bazel, Buck, Nx, Turborepo) manage monorepos with multiple languages and services by understanding dependency graphs and caching build outputs.',
    whyItMatters:
      'Build systems are the foundation of CI/CD — every code change triggers a build. Poorly configured builds that rebuild everything on every change grind pipelines to a halt. Modern build systems use content-addressed caching: if inputs haven\'t changed, reuse the cached output. This can reduce CI times from hours to minutes.',
    analogy:
      'Like a factory assembly line with smart inventory management — instead of manufacturing every component from raw materials every time, the factory checks if it already made that component (cache hit) and only rebuilds when the design changed (cache miss). The more modular the factory, the more it can reuse.',
    soundsSmartToSay:
      '"We should configure remote caching in Nx — right now every developer and CI runner rebuilds from scratch. With a shared cache, the second build of any unchanged package is a cache hit."',
    commonConfusions: [
      'Build systems and package managers solve different problems. A package manager (npm, Maven) downloads external libraries. A build system compiles your code and links those libraries into artifacts.',
      'Incremental builds only work if the build system correctly models the dependency graph. Circular dependencies or missing declarations cause incorrect incremental builds — stale output from previous builds.',
    ],
    relatedTerms: ['CI/CD', 'Monorepo', 'Dependency Management', 'Artifact Registry'],
  },
  {
    id: 'coding-package-management',
    domain: 'coding',
    title: 'Package Management',
    subtitle: 'Declaring and resolving external library dependencies',
    difficulty: 'beginner',
    tags: ['dependencies', 'npm', 'versioning'],
    definition:
      'Package managers (npm, pip, Maven, Cargo, Go modules) declare what external libraries your code depends on, resolve compatible versions, and download them. A lockfile (package-lock.json, Pipfile.lock) pins exact versions so every developer and CI run gets identical dependencies. Semantic versioning (major.minor.patch) signals whether an update is safe or breaking.',
    whyItMatters:
      'Unmanaged dependencies are a security and reliability crisis waiting to happen. Most software supply chain attacks target package managers — a compromised npm package can inject malicious code into thousands of applications. Lockfiles, dependency auditing, and pinning versions are the first line of defense.',
    analogy:
      'Like a restaurant supply chain — instead of growing every ingredient yourself (writing all code from scratch), you order from suppliers (packages). A lockfile is your supplier contract: exact brands, quantities, and delivery dates. Without a contract, your kitchen might get a different brand that tastes slightly wrong — or an ingredient that makes your guests sick.',
    soundsSmartToSay:
      '"We should run npm audit in CI and block builds with critical vulnerabilities — we\'ve had three dependencies with known CVEs sitting in package.json for six months."',
    commonConfusions: [
      'The node_modules directory and similar vendor folders should never be committed to source control. The lockfile is what you commit — the package manager reconstructs node_modules from it.',
      'Semantic versioning is advisory, not enforced. A library can introduce a breaking change in a minor version (violating semver), which is why lockfiles matter more than version ranges.',
    ],
    relatedTerms: ['Semantic Versioning', 'Supply Chain Security', 'Build Systems', 'Lockfile'],
  },
  {
    id: 'coding-caching-strategies',
    domain: 'coding',
    title: 'Caching Strategies',
    subtitle: 'Storing computed results to avoid redundant work',
    difficulty: 'intermediate',
    tags: ['performance', 'Redis', 'CDN'],
    definition:
      'Caching stores the result of an expensive operation (database query, API call, computation) so future requests can be served from the cache instead of repeating the work. Key strategies include cache-aside (app checks cache first, populates on miss), write-through (app writes to cache and DB simultaneously), and write-behind (cache updates are asynchronously flushed to the DB). Common caching layers: CDN (static assets), Redis/Memcached (application data), and browser cache.',
    whyItMatters:
      'A single database query that takes 200ms might be called 10,000 times per second. Caching that result in Redis reduces 10,000 DB hits to 1 DB hit + 9,999 Redis hits at ~1ms each — a 200x throughput improvement. Caching is often the difference between a system that handles load and one that falls over.',
    analogy:
      'Like keeping frequently used tools on your workbench instead of walking to the storeroom every time. The workbench (cache) has limited space and may have older tool versions, but retrieval is instant. The storeroom (database) has everything but takes time to access.',
    soundsSmartToSay:
      '"Cache invalidation is one of the two hard problems in computer science. Before we add caching, we need to define what staleness is acceptable — TTL-based expiry is simple but blunt; event-driven invalidation is precise but complex."',
    commonConfusions: [
      '"Cache invalidation is one of the two hard problems in CS" — the joke is that correctly determining when to invalidate cached data is genuinely difficult. Stale data from a cache can cause subtle, hard-to-debug bugs.',
      'Caching is not free. Caches consume memory, add operational complexity, and introduce consistency challenges. Cache everything naively and you trade database load for stale data bugs and cache-stampede thundering herd problems.',
    ],
    relatedTerms: ['Redis', 'CDN', 'TTL', 'Cache Invalidation'],
  },
  {
    id: 'coding-rate-limiting',
    domain: 'coding',
    title: 'Rate Limiting',
    subtitle: 'Controlling how many requests a client can make in a time window',
    difficulty: 'intermediate',
    tags: ['API', 'performance', 'abuse prevention'],
    definition:
      'Rate limiting restricts how many requests a client (identified by API key, IP, or user ID) can make in a given time window. Common algorithms: fixed window (count resets at a fixed interval), sliding window (rolling count over the last N seconds), token bucket (requests consume tokens that refill at a constant rate), and leaky bucket (requests queue up and are processed at a fixed rate). Exceeding the limit returns HTTP 429 Too Many Requests.',
    whyItMatters:
      'Without rate limiting, a single misbehaving client (or attacker) can exhaust server resources, triggering an outage for all users. Rate limiting also protects against brute-force attacks (trying millions of passwords), web scraping, and API abuse. Every public-facing API needs it.',
    analogy:
      'Like a bouncer with a guest list — you can enter the club, but only once every 30 minutes. The bouncer doesn\'t care why you keep coming back, just that you\'ve hit your limit. Token bucket is like a drink ticket system: you get 10 tickets per hour, each request costs a ticket, and unused tickets accumulate up to a maximum.',
    soundsSmartToSay:
      '"We should use the token bucket algorithm for the API — it allows burst traffic up to the bucket capacity while enforcing a sustained rate limit, which is more user-friendly than hard per-second limits."',
    commonConfusions: [
      'Rate limiting and throttling are often used interchangeably but differ: rate limiting rejects excess requests (429), throttling slows them down (delays responses). Both protect resources; rejection is harsher but cleaner.',
      'Rate limiting at the API gateway level protects your services. Rate limiting at the application level (before hitting the DB) is an additional layer. Both are needed for full protection.',
    ],
    relatedTerms: ['API Gateway', 'Token Bucket', 'Throttling', 'DDoS Protection'],
  },
  {
    id: 'coding-idempotency',
    domain: 'coding',
    title: 'Idempotency',
    subtitle: 'Safe to call multiple times with the same result',
    difficulty: 'intermediate',
    tags: ['API design', 'reliability', 'distributed systems'],
    definition:
      'An operation is idempotent if calling it multiple times produces the same result as calling it once. GET, PUT, and DELETE are idempotent HTTP methods (calling them twice has the same effect as once). POST is not idempotent by default — submitting an order form twice creates two orders. Idempotency keys (unique IDs sent with the request) let POST and PATCH operations be made idempotent by detecting and deduplicating retries.',
    whyItMatters:
      'Networks are unreliable — clients retry failed requests, and distributed systems have partial failures where it\'s unclear whether the operation succeeded. If your payment API is not idempotent, a retry after a network timeout might charge the customer twice. Idempotency is not optional for financial, inventory, and any state-changing operations.',
    analogy:
      'Like pressing a crosswalk button. Pressing it once or ten times has the same result: one "walk" signal. The button is idempotent — additional presses are harmless. Compare to a vending machine payment: each button press deducts money. Pressing it twice means paying twice.',
    soundsSmartToSay:
      '"Our payment endpoint needs to accept an idempotency key — if the client retries after a timeout, we need to return the original charge result rather than processing a second charge."',
    commonConfusions: [
      'Idempotent does not mean no side effects — it means the same side effect occurs regardless of how many times you call it. Deleting a file is idempotent: delete it once or ten times, the file is still gone.',
      'PUT (full replacement) is idempotent; PATCH (partial update) is not idempotent by default. PATCH with "set field X to value Y" is idempotent, but PATCH with "increment field X by 1" is not.',
    ],
    relatedTerms: ['REST API', 'Retry Logic', 'Distributed Systems', 'Idempotency Key'],
  },
  {
    id: 'coding-circuit-breaker',
    domain: 'coding',
    title: 'Circuit Breaker Pattern',
    subtitle: 'Stop calling a failing service before it takes you down too',
    difficulty: 'intermediate',
    tags: ['resilience', 'distributed systems', 'patterns'],
    definition:
      'The circuit breaker pattern wraps calls to external services and monitors for failures. When the failure rate exceeds a threshold, the circuit "trips" (opens) and subsequent calls fail immediately without attempting the network call. After a cooldown period, the circuit enters a "half-open" state to test if the service has recovered. This prevents cascading failures where one slow service causes threads to pile up and take down the caller.',
    whyItMatters:
      'In a microservices architecture, a slow or failing downstream service can exhaust the upstream service\'s thread pool — causing the upstream service to fail too, creating a cascade. Circuit breakers are the safety valve that stops cascades before they propagate across the entire system.',
    analogy:
      'Like an electrical circuit breaker. When a short circuit creates excessive current, the breaker trips and cuts power — protecting the rest of the electrical system from damage. Once the fault is fixed, you reset the breaker. Without it, the short circuit would burn through your entire home\'s wiring.',
    soundsSmartToSay:
      '"We need circuit breakers on our third-party payment gateway calls — when their API is slow, we\'re holding threads open for 30 seconds each and our own service goes down even though we\'re just waiting."',
    commonConfusions: [
      'Circuit breakers are not the same as retries. Retries handle transient failures by trying again. Circuit breakers handle persistent failures by stopping attempts to prevent resource exhaustion. Use both: retry a few times, then open the circuit.',
      'Libraries like Resilience4j (Java), Polly (.NET), and Hystrix (Netflix, now deprecated) implement circuit breakers. You do not need to build this from scratch.',
    ],
    relatedTerms: ['Retry Pattern', 'Bulkhead Pattern', 'Service Mesh', 'Fallback'],
  },
  {
    id: 'coding-twelve-factor',
    domain: 'coding',
    title: 'Twelve-Factor App',
    subtitle: 'A methodology for building cloud-native, scalable web applications',
    difficulty: 'intermediate',
    tags: ['cloud-native', 'architecture', 'best practices'],
    definition:
      'The Twelve-Factor App is a methodology for building scalable, maintainable software-as-a-service applications. Key factors include: store config in environment variables (not code), treat backing services (databases, queues) as attached resources, ship logs as event streams, and make processes stateless and disposable. Originally published by Heroku engineers, it has become the reference model for cloud-native application design.',
    whyItMatters:
      'Applications built to twelve-factor principles are easy to deploy in any environment (local, staging, production, any cloud), scale horizontally by adding instances, and operate reliably under container orchestration. Violating these principles often produces apps that are hard to containerize, require special environment setup, or fail unpredictably when scaled.',
    analogy:
      'Like ISO manufacturing standards — a twelve-factor app is designed to fit into any "factory" (deployment platform) without custom modifications. Just as ISO-standard bolts fit any ISO-compatible nut regardless of country of manufacture, a twelve-factor app runs on Heroku, AWS, GCP, or Kubernetes without modification.',
    soundsSmartToSay:
      '"The app is hardcoding database credentials in the config file, which violates twelve-factor factor III. Config belongs in the environment — we should be reading from environment variables or a secrets manager."',
    commonConfusions: [
      'Twelve-factor is a methodology for application design, not for infrastructure. It tells you how to write the app; Kubernetes/Terraform tell you how to deploy it.',
      'Not all twelve factors apply equally. Factors I (codebase), II (dependencies), and III (config) are the most universally applicable and highest value. Some factors (X — dev/prod parity) require organizational buy-in beyond just the codebase.',
    ],
    relatedTerms: ['Cloud Native', 'Containers', 'Environment Variables', 'Microservices'],
  },
  {
    id: 'coding-graphql',
    domain: 'coding',
    title: 'GraphQL',
    subtitle: 'Query language where clients ask for exactly what they need',
    difficulty: 'intermediate',
    tags: ['API', 'query language', 'web'],
    definition:
      'GraphQL is an API query language and runtime that lets clients specify exactly what data they need — no more, no less. Unlike REST (where the server defines the response shape), GraphQL clients send a query describing the fields they want. A single GraphQL endpoint replaces dozens of REST endpoints. The schema defines all types and relationships, serving as self-documenting API contract.',
    whyItMatters:
      'REST APIs often return too much data (over-fetching: getting 50 fields when you need 3) or require multiple round trips (under-fetching: hitting /users, then /users/123/posts, then /users/123/followers). GraphQL solves both — one request, exactly the data you asked for. It\'s the standard for complex data graphs (Facebook, GitHub, Shopify all use it).',
    analogy:
      'Like ordering from a build-your-own burrito counter instead of a fixed menu. With REST, you get the "Combo #3" with everything on it whether you want it or not. With GraphQL, you specify exactly: chicken, black beans, no sour cream, double guac — and that\'s all you get.',
    soundsSmartToSay:
      '"The mobile app is downloading 80KB of user data to display a 200-byte profile card — we should move to GraphQL so the client can request only the fields it actually renders."',
    commonConfusions: [
      'GraphQL is not always better than REST. REST is simpler for straightforward CRUD operations, more cacheable (HTTP-level caching works naturally), and more widely understood. GraphQL shines for complex, relationship-heavy data models.',
      'GraphQL\'s N+1 problem: naively resolving nested queries triggers a database query per item (1 query for 10 users, then 10 queries for their posts = 11 queries). DataLoader batching is the standard solution.',
    ],
    relatedTerms: ['REST API', 'API Schema', 'N+1 Problem', 'Apollo'],
  },
  {
    id: 'coding-grpc',
    domain: 'coding',
    title: 'gRPC',
    subtitle: 'High-performance binary RPC using Protocol Buffers',
    difficulty: 'advanced',
    tags: ['API', 'Protocol Buffers', 'microservices'],
    definition:
      'gRPC (Google Remote Procedure Call) is a high-performance RPC framework that uses Protocol Buffers (protobuf) as its interface definition language and binary serialization format. You define service methods and message types in a .proto file; gRPC generates client and server code in multiple languages. It runs over HTTP/2, supporting streaming (server-streaming, client-streaming, bidirectional).',
    whyItMatters:
      'gRPC is significantly faster than JSON-over-HTTP for internal service communication — protobuf binary encoding is 3-10x smaller than equivalent JSON, and HTTP/2 multiplexing reduces connection overhead. It is the standard for high-throughput microservice-to-microservice communication at companies like Google, Netflix, and Uber.',
    analogy:
      'Like comparing a typed API (gRPC/protobuf) to a text file exchange (REST/JSON). Both transfer data, but the typed binary format is compact and validated by a compiler — no wasted bytes on field name strings, no runtime JSON parsing errors, and no ambiguity about data types.',
    soundsSmartToSay:
      '"For service-to-service calls in the data pipeline, we should use gRPC — the protobuf encoding is an order of magnitude smaller than JSON and the strongly-typed contract means breaking changes are caught at compile time, not in production."',
    commonConfusions: [
      'gRPC is for service-to-service communication, not browser-to-server. Browsers cannot make native gRPC calls (limited HTTP/2 framing support). gRPC-Web is a workaround, but most browser-facing APIs use REST or GraphQL.',
      'Protobuf schema evolution requires care. Adding fields is backward-compatible. Removing fields breaks existing clients silently — they just ignore unknown fields. Changing field types is a breaking change.',
    ],
    relatedTerms: ['Protocol Buffers', 'REST API', 'Service Mesh', 'HTTP/2'],
  },
  {
    id: 'coding-webhooks',
    domain: 'coding',
    title: 'Webhooks',
    subtitle: 'Push-based event notifications from service to service',
    difficulty: 'beginner',
    tags: ['API', 'events', 'integration'],
    definition:
      'A webhook is an HTTP callback — when an event occurs in a source system (payment completed, PR merged, file uploaded), it sends an HTTP POST request with event data to a URL you register. This is push-based: the source system tells you when something happens, instead of you polling "did anything change?" every few seconds.',
    whyItMatters:
      'Webhooks replace inefficient polling. Instead of making 1,000 API calls per hour to check if anything changed (most returning "nothing changed"), one webhook fires when the event actually occurs. They are how Stripe notifies you of payment events, GitHub triggers your CI, and Slack delivers message notifications.',
    analogy:
      'Like a package delivery notification vs compulsively tracking your order. Polling is opening the tracking page every 10 minutes. A webhook is getting a text message the moment the package is delivered — one event, at the right time, no wasted effort.',
    soundsSmartToSay:
      '"We should register a webhook with the payment provider rather than polling their API — we\'ll get real-time payment confirmations instead of a 60-second polling delay, and we\'ll stop burning API quota on empty responses."',
    commonConfusions: [
      'Webhooks are not guaranteed delivery. The destination server might be down. Production webhook consumers must acknowledge receipt (return HTTP 200 quickly) and be idempotent — the sender may retry on failure, meaning you process the same event twice.',
      'Webhooks expose a public HTTPS endpoint, which is an attack surface. Always validate webhook signatures (HMAC-SHA256) to verify the payload came from the legitimate sender, not a spoofed request.',
    ],
    relatedTerms: ['REST API', 'Polling', 'Event-Driven Architecture', 'Idempotency'],
  },
  {
    id: 'coding-jwt',
    domain: 'coding',
    title: 'JWT (JSON Web Token)',
    subtitle: 'Stateless, signed tokens for authentication and authorization',
    difficulty: 'intermediate',
    tags: ['auth', 'security', 'API'],
    definition:
      'A JSON Web Token (JWT) is a compact, URL-safe token format containing a header (algorithm), payload (claims like user ID, roles, expiry), and signature. The server signs the token with a secret or private key; clients send it in the Authorization header. The server verifies the signature without looking up a session database — authentication becomes stateless.',
    whyItMatters:
      'JWTs let any service verify a user\'s identity and permissions without calling a central auth server. This is essential for microservices — the payments service and the order service can both verify the same JWT without sharing a session store. It\'s the standard mechanism behind OAuth 2.0 and OpenID Connect.',
    analogy:
      'Like a signed backstage pass at a concert. The pass contains your name, access level, and validity date. Any security guard (service) can read it and verify the signature without calling the box office (auth server). If the pass is valid and signed by the right organization, you get in.',
    soundsSmartToSay:
      '"We should keep JWT payloads small — the token is sent with every request. Put only the user ID and roles in the JWT, not the full user profile, and fetch detailed profile data on demand."',
    commonConfusions: [
      'JWTs are encoded (Base64), not encrypted. The payload is readable by anyone who has the token — never put sensitive data (passwords, PII) in a JWT. The signature verifies the token hasn\'t been tampered with, but the content is not secret.',
      'JWTs cannot be revoked before expiry without a blocklist (defeating statelessness). This is the core tradeoff: stateless verification vs instant revocation. Use short expiry times (15 min access tokens) and refresh tokens for longer sessions.',
    ],
    relatedTerms: ['OAuth', 'OpenID Connect', 'Session Management', 'HMAC'],
  },
  {
    id: 'coding-oauth',
    domain: 'coding',
    title: 'OAuth 2.0',
    subtitle: 'Delegated authorization — access without sharing passwords',
    difficulty: 'intermediate',
    tags: ['auth', 'security', 'API'],
    definition:
      'OAuth 2.0 is an authorization framework that lets a user grant a third-party application limited access to their account without sharing their password. The user authenticates with the identity provider (Google, GitHub), which issues an access token to the application. The application presents that token to access resources on the user\'s behalf. OpenID Connect (OIDC) is a layer on top of OAuth that adds authentication (who is the user) to OAuth\'s authorization (what can they access).',
    whyItMatters:
      '"Login with Google" and "Connect to GitHub" are OAuth flows. Every major platform uses OAuth for third-party integrations. Without OAuth, apps would ask for your Google password — a catastrophic security anti-pattern. Understanding OAuth flows (authorization code, client credentials, implicit) is essential for building or securing any integration.',
    analogy:
      'Like giving a valet your car key — a special key that starts the car but doesn\'t open the trunk or glove box. The valet (third-party app) gets limited access to your car (account) without getting your house keys (full password). When you leave, you take the valet key back (revoke the token).',
    soundsSmartToSay:
      '"We should use the authorization code flow with PKCE for this mobile app — the implicit flow is deprecated because it exposes tokens in the redirect URL, which gets logged and shared with third-party scripts."',
    commonConfusions: [
      'OAuth 2.0 is an authorization framework, not an authentication protocol. It answers "can this app access this resource?" not "who is this user?" OpenID Connect (built on OAuth) adds the identity layer.',
      'Access tokens are not the same as refresh tokens. Access tokens are short-lived (minutes to hours). Refresh tokens are long-lived and used to obtain new access tokens without re-authenticating the user.',
    ],
    relatedTerms: ['JWT', 'OpenID Connect', 'PKCE', 'SSO'],
  },
  {
    id: 'coding-trunk-based-development',
    domain: 'coding',
    title: 'Trunk-Based Development',
    subtitle: 'Everyone commits to main, feature flags gate incomplete work',
    difficulty: 'intermediate',
    tags: ['version control', 'CI/CD', 'workflows'],
    definition:
      'Trunk-based development (TBD) is a source control strategy where all developers commit directly to a single main branch (trunk) or use very short-lived feature branches (less than a day or two). Incomplete features are hidden behind feature flags rather than long-lived branches. This is the prerequisite for true continuous integration — CI only works if everyone integrates frequently.',
    whyItMatters:
      'Long-lived feature branches accumulate divergence that becomes painful to merge. The longer a branch lives, the larger the merge conflict and the higher the risk of integration bugs. TBD forces small, incremental commits that integrate continuously, giving CI feedback on every change. Google, Meta, and most high-performing engineering organizations practice TBD.',
    analogy:
      'Like a shared document where everyone edits the live version with tracked changes, rather than emailing different copies around for weeks and then trying to reconcile five different versions. Real-time collaboration (TBD) beats asynchronous version merging (long-lived branches) for fast-moving teams.',
    soundsSmartToSay:
      '"Our feature branches are living for 3-4 weeks and merge conflicts are killing us. We should move to trunk-based development with feature flags — ship the code, just gate the behavior."',
    commonConfusions: [
      'Trunk-based development does not mean shipping unfinished code to users. Feature flags let you merge incomplete code to main while hiding the feature from users until it\'s ready.',
      'TBD is not compatible with long-lived release branches. Instead, use tags to mark releases and deploy from main. Release branches are an anti-pattern in TBD.',
    ],
    relatedTerms: ['Feature Flags', 'CI/CD', 'Git', 'Continuous Integration'],
  },
  {
    id: 'coding-pair-programming',
    domain: 'coding',
    title: 'Pair Programming',
    subtitle: 'Two developers, one keyboard, one screen',
    difficulty: 'beginner',
    tags: ['collaboration', 'quality', 'agile'],
    definition:
      'Pair programming is a practice where two developers work together at one workstation. One developer (the "driver") writes code while the other (the "navigator") reviews each line, thinks ahead about design and edge cases, and suggests improvements. Roles switch regularly. A variant, mob programming, has the whole team working on the same code simultaneously.',
    whyItMatters:
      'Pair programming produces higher-quality code (a second pair of eyes catches errors before they\'re written), spreads knowledge (no single person becomes the only one who understands a system), and accelerates onboarding (a junior developer paired with a senior learns 10x faster). Studies show pairs write better code in the same time as one developer working alone.',
    analogy:
      'Like co-piloting an aircraft — the pilot (driver) handles controls while the co-pilot (navigator) monitors instruments, cross-checks procedures, and calls out concerns. Errors caught in the cockpit don\'t become crashes. Neither role is more important; they need each other.',
    soundsSmartToSay:
      '"We should pair the new engineer with someone who knows the auth system for the first sprint — it\'s faster than documentation and they\'ll understand the design decisions, not just what the code does."',
    commonConfusions: [
      'Pair programming is not "two people looking at one screen while one does nothing." The navigator is actively thinking — reviewing, planning, catching bugs, looking up documentation. It is collaborative, not passive observation.',
      'Remote pair programming is viable with tools like VS Code Live Share, Tuple, or Screen. The distance makes it slightly less natural but does not fundamentally change the practice.',
    ],
    relatedTerms: ['Code Review', 'Mob Programming', 'TDD', 'Agile'],
  },
  {
    id: 'coding-adr',
    domain: 'coding',
    title: 'Architecture Decision Records (ADRs)',
    subtitle: 'Documenting why, not just what, was decided',
    difficulty: 'beginner',
    tags: ['documentation', 'architecture', 'process'],
    definition:
      'An Architecture Decision Record (ADR) is a short document that captures an architectural decision, the context that drove it, the options considered, and the consequences of the chosen approach. Each ADR is stored as a numbered Markdown file in the repository alongside the code it describes. They are immutable once accepted — if the decision changes, a new ADR supersedes the old one.',
    whyItMatters:
      'Code shows what was built; ADRs explain why. Without them, developers six months later — including the original author — have no idea why a particular architecture was chosen and whether the constraints that drove it still apply. ADRs prevent "why did we do it this way?" from becoming a recurring meeting.',
    analogy:
      'Like engineering change notices (ECNs) in manufacturing — a formal record that says "we changed this component from material A to material B because of reason X, and the tradeoffs were Y and Z." If a problem arises later, the ECN explains the decision context so engineers know whether the reasoning still applies.',
    soundsSmartToSay:
      '"Let\'s write an ADR for the message queue choice — we evaluated Kafka, RabbitMQ, and SQS. Even if everyone currently knows why we chose SQS, that knowledge will be gone when the team turns over."',
    commonConfusions: [
      'ADRs are not design documents or specifications — they are records of a decision that was made at a specific point in time. They are short (one page), not exhaustive.',
      'ADRs are not living documents. Once accepted, they are not updated — instead, a new ADR supersedes the old one. This preserves the historical record of what was decided and when.',
    ],
    relatedTerms: ['Technical Debt', 'Documentation as Code', 'Architecture Review', 'RFC'],
  },
  {
    id: 'coding-ddd',
    domain: 'coding',
    title: 'Domain-Driven Design (DDD)',
    subtitle: 'Aligning software structure with the business problem',
    difficulty: 'advanced',
    tags: ['architecture', 'modeling', 'microservices'],
    definition:
      'Domain-Driven Design (DDD) is an approach where the software model closely mirrors the business domain. Key concepts: Ubiquitous Language (developers and domain experts use the same terms), Bounded Contexts (explicit boundaries around areas of the domain where models apply), Aggregates (clusters of related objects with a root entity that owns consistency), and Domain Events (significant business events that trigger behavior).',
    whyItMatters:
      'Misalignment between code and business concepts is a major source of bugs and complexity. When the order service uses "Customer" and the billing service uses "Account" for the same concept but with different rules, inconsistencies proliferate. DDD makes Bounded Contexts the basis for microservice boundaries — each service owns its subdomain model completely.',
    analogy:
      'Like zoning laws in city planning. Each district (Bounded Context) has its own rules about what "building" means — residential zoning has different building codes than commercial zoning. They can both use the word "building" but mean something different. You don\'t apply residential rules to a warehouse.',
    soundsSmartToSay:
      '"We\'re having the classic mapping problem — the same concept means different things to billing and shipping. That\'s a DDD bounded context issue. Each service should own its own model and translate at the boundary."',
    commonConfusions: [
      'DDD is not just naming your classes after business concepts. The strategic patterns (Bounded Contexts, Context Maps, Ubiquitous Language) drive the high-level architecture. The tactical patterns (Aggregates, Value Objects, Domain Events) are the implementation patterns within a bounded context.',
      'Bounded Contexts map well to microservices but they are not the same thing. A Bounded Context is a conceptual boundary; a microservice is a deployment boundary. One bounded context can be multiple services or services can span contexts (though the latter is a code smell).',
    ],
    relatedTerms: ['Microservices', 'Event Sourcing', 'CQRS', 'Bounded Context'],
  },
  {
    id: 'coding-refactoring',
    domain: 'coding',
    title: 'Refactoring',
    subtitle: 'Improving code structure without changing its behavior',
    difficulty: 'beginner',
    tags: ['code quality', 'maintenance', 'clean code'],
    definition:
      'Refactoring is the process of restructuring existing code — renaming variables for clarity, extracting methods, removing duplication, simplifying conditionals, breaking up large classes — without changing what the code does. Each refactoring step is small and behavior-preserving, validated by the test suite. Martin Fowler\'s "Refactoring" catalog lists over 100 named refactoring techniques.',
    whyItMatters:
      'Code that works is not the same as code that is maintainable. Refactoring is how you pay down technical debt incrementally without a risky rewrite. Teams that refactor continuously maintain velocity; teams that don\'t eventually grind to a halt in a codebase where every change risks breaking something.',
    analogy:
      'Like renovating a building floor by floor while the tenants remain — you improve the structure without closing the building. A rewrite is demolishing the building and rebuilding from scratch, which is risky, expensive, and leaves tenants without space during construction.',
    soundsSmartToSay:
      '"Before adding this feature, let\'s spend half a sprint refactoring this module — it\'s gotten so complex that the feature will take 3x longer than it should. The refactoring will pay for itself by the second feature we add here."',
    commonConfusions: [
      'Refactoring is not rewriting. Rewriting replaces code with a new implementation. Refactoring changes the structure of existing code in small, safe steps while keeping tests green.',
      'You cannot safely refactor without tests. Refactoring changes structure while preserving behavior — the only way to verify behavior is preserved is to run tests after each step. Without tests, you are guessing.',
    ],
    relatedTerms: ['Technical Debt', 'Code Review', 'Testing', 'Clean Code'],
  },
  {
    id: 'coding-feature-flags',
    domain: 'coding',
    title: 'Feature Flags',
    subtitle: 'Toggle features on/off without deploying new code',
    difficulty: 'intermediate',
    tags: ['deployment', 'CI/CD', 'experimentation'],
    definition:
      'Feature flags (also called feature toggles) are configuration values that enable or disable features at runtime without a new deployment. A flag check wraps new code: if the flag is on, use the new path; otherwise use the old path. Flags can be toggled per user, per percentage of traffic, per account tier, or globally. Tools like LaunchDarkly, Unleash, and Split.io manage flag lifecycles.',
    whyItMatters:
      'Feature flags decouple code deployment from feature release. You can merge code to main and deploy it while the feature is invisible to users — enabling trunk-based development. They enable canary releases (turn on for 1% of users), A/B testing (different experiences for different segments), and instant rollback (turn off the flag rather than reverting a deployment).',
    analogy:
      'Like the dimmer switches in a theater — all the lighting infrastructure is installed, but individual lights are controlled independently and in real time. You can bring a new lighting effect online gradually, test it at 10% brightness, and cut it instantly if something looks wrong, all without rewiring the stage.',
    soundsSmartToSay:
      '"We can ship the new checkout flow to production behind a flag and run it alongside the old flow for 48 hours at 5% traffic — if the conversion rate is better and there are no errors, we flip to 100% and retire the old code."',
    commonConfusions: [
      'Feature flags are a deployment tool, not a permanent architecture. Every flag should have a planned removal date — flag proliferation ("flag debt") makes code hard to read when every path is conditional.',
      'Feature flags and environment variables are not the same. Env vars are static (set at deploy time). Feature flags are dynamic (changed at runtime without redeployment). Env vars are for configuration; flags are for behavior control.',
    ],
    relatedTerms: ['Canary Release', 'A/B Testing', 'Trunk-Based Development', 'Rollback'],
  },
  {
    id: 'coding-semantic-versioning',
    domain: 'coding',
    title: 'Semantic Versioning',
    subtitle: 'major.minor.patch — communicating the impact of a release',
    difficulty: 'beginner',
    tags: ['versioning', 'packages', 'API'],
    definition:
      'Semantic versioning (semver) is a convention for version numbers: MAJOR.MINOR.PATCH. Increment MAJOR for breaking changes (existing users must update their code), MINOR for new backward-compatible features, and PATCH for backward-compatible bug fixes. Pre-release versions use suffixes like 1.0.0-beta.1. Package managers use semver ranges (^1.2.0 = any 1.x version >= 1.2.0) to automatically accept compatible updates.',
    whyItMatters:
      'Without semver, a version number is meaningless marketing. With it, a version bump communicates whether an update is safe to apply automatically (patch/minor) or requires migration work (major). The entire JavaScript and Rust package ecosystems depend on semver to enable automatic dependency updates and security patches.',
    analogy:
      'Like traffic light signals for software releases. PATCH is a green light — safe to apply automatically. MINOR is a yellow light — new features, but nothing should break. MAJOR is a red light — stop and read the migration guide before updating.',
    soundsSmartToSay:
      '"We\'re adding a new required field to the API response, which is technically a breaking change — clients that pattern-match on the exact response shape will fail. That should be a major version bump, not a minor."',
    commonConfusions: [
      'Version 0.x.y is special in semver — the API is considered unstable and anything can change on minor bumps. Many libraries stay at 0.x to avoid the commitment of a stable API.',
      'Semver is a contract, not enforcement. Nothing prevents a library from publishing a breaking change as a patch release. This is why lockfiles are essential — they pin exact versions regardless of semver ranges.',
    ],
    relatedTerms: ['Package Management', 'API Versioning', 'Lockfile', 'Changelog'],
  },
  {
    id: 'coding-orm',
    domain: 'coding',
    title: 'Object-Relational Mapping (ORM)',
    subtitle: 'Talking to your database with objects, not raw SQL',
    difficulty: 'beginner',
    tags: ['database', 'abstraction', 'SQL'],
    definition:
      'An ORM maps database tables to programming language objects, letting you query and manipulate data using your language\'s syntax instead of raw SQL. Active Record (Rails), Hibernate (Java), SQLAlchemy (Python), Prisma (TypeScript), and Entity Framework (.NET) are popular ORMs. The ORM handles generating SQL, mapping result sets to objects, and managing connections.',
    whyItMatters:
      'ORMs reduce boilerplate, prevent SQL injection (parameterized queries are the default), and let developers stay in their language\'s type system. They accelerate development for standard CRUD operations. However, ORMs generate inefficient SQL for complex queries, can cause N+1 problems, and abstract away important database concepts.',
    analogy:
      'Like a universal remote control for your database — you press the "get all users" button and it handles the specific SQL syntax for your database brand (PostgreSQL vs MySQL vs SQLite). It\'s convenient for common operations but you still need to know how TVs work when the universal remote can\'t handle the advanced settings.',
    soundsSmartToSay:
      '"The ORM is generating one query per record for this relationship — that\'s the classic N+1 problem. We need to add eager loading here or the endpoint will issue 500 queries for 500 records."',
    commonConfusions: [
      'ORMs do not replace knowledge of SQL and database design. They abstract the syntax but not the concepts. A developer who doesn\'t understand indexes, joins, and query plans will write slow ORM code without realizing why.',
      'Raw SQL and ORM can coexist. Most ORMs let you drop to raw SQL for complex queries where the generated SQL is inadequate. Use the ORM for 80% of queries; use raw SQL for the 20% that need precision.',
    ],
    relatedTerms: ['Database Migrations', 'SQL', 'N+1 Problem', 'Connection Pooling'],
  },
  {
    id: 'coding-hexagonal-architecture',
    domain: 'coding',
    title: 'Hexagonal Architecture',
    subtitle: 'Ports and adapters — isolating business logic from infrastructure',
    difficulty: 'advanced',
    tags: ['architecture', 'clean architecture', 'testing'],
    definition:
      'Hexagonal architecture (ports and adapters) organizes code into three layers: the domain (pure business logic with no external dependencies), ports (interfaces that define how the domain talks to the outside world), and adapters (concrete implementations of those ports — databases, HTTP handlers, message queues). The domain is at the center and depends on nothing; adapters depend on the domain.',
    whyItMatters:
      'When business logic is entangled with infrastructure (database queries inside business rules, HTTP parsing mixed with domain logic), testing is painful and changes are risky. Hexagonal architecture makes the domain independently testable (no database, no HTTP needed) and lets you swap adapters — change from PostgreSQL to DynamoDB — without touching the business logic.',
    analogy:
      'Like a power strip with universal adapters. The device (domain logic) has one plug (port). The adapter converts between the device\'s plug and the local outlet format (infrastructure). You can take the device to any country (any database, any framework) by swapping the adapter, not the device.',
    soundsSmartToSay:
      '"The business logic should not know whether it\'s being called by an HTTP handler or a queue consumer — that\'s the port/adapter boundary. The use case should take domain objects in and return domain objects; the adapters handle serialization."',
    commonConfusions: [
      'Hexagonal architecture, clean architecture, and onion architecture are different names for similar ideas — all put domain logic at the center, isolated from infrastructure. The specific ring/layer names differ, but the principle is the same.',
      'This architecture has upfront cost. For a simple CRUD app, the ports-and-adapters structure adds complexity without benefit. It pays off at the scale where testing speed, infrastructure swappability, and business logic clarity matter.',
    ],
    relatedTerms: ['DDD', 'Dependency Injection', 'Clean Architecture', 'Testing'],
  },
  {
    id: 'coding-cqrs',
    domain: 'coding',
    title: 'CQRS',
    subtitle: 'Separate read models from write models for performance and clarity',
    difficulty: 'advanced',
    tags: ['architecture', 'patterns', 'scalability'],
    definition:
      'Command Query Responsibility Segregation (CQRS) separates the model used to update information (commands) from the model used to read it (queries). Instead of one database model that handles both reads and writes, you have a write side (normalized, consistent) and one or more read sides (denormalized, optimized for specific query patterns). The read side is updated asynchronously when write events occur.',
    whyItMatters:
      'Read and write workloads have fundamentally different characteristics. Reads are often 10-100x more frequent than writes and benefit from denormalized, pre-computed data. Writes need strict consistency and validation. CQRS lets you optimize each side independently — scale reads horizontally, keep writes strongly consistent.',
    analogy:
      'Like a bank\'s back office vs teller window. The teller (read side) shows your current balance from a fast, pre-computed ledger optimized for display. The accounting department (write side) processes every transaction with full journal entries and reconciliation. They use different books optimized for their respective jobs.',
    soundsSmartToSay:
      '"The search results query is joining across seven tables and taking 800ms — that\'s a CQRS problem. The read model for search should be a denormalized, pre-indexed projection, not a live join against the normalized write model."',
    commonConfusions: [
      'CQRS does not require event sourcing. You can use CQRS with a traditional relational database, synchronously updating a denormalized read table on every write. Event sourcing and CQRS are complementary, not coupled.',
      'CQRS introduces eventual consistency on the read side. There is a window between a write completing and the read model reflecting it. Applications must tolerate this — not all domains can.',
    ],
    relatedTerms: ['Event Sourcing', 'Read Model', 'Domain Events', 'Eventual Consistency'],
  },
  {
    id: 'coding-strangler-fig',
    domain: 'coding',
    title: 'Strangler Fig Pattern',
    subtitle: 'Incrementally replace a legacy system without a big-bang rewrite',
    difficulty: 'intermediate',
    tags: ['architecture', 'migration', 'legacy'],
    definition:
      'The Strangler Fig pattern (named after a tree that grows around a host and eventually replaces it) is a migration strategy where new functionality is built in a new system that routes traffic alongside the legacy system. A facade intercepts requests; new features go to the new system, old ones stay in the legacy system. Over time, more and more requests are routed to the new system until the old one is decommissioned.',
    whyItMatters:
      'Big-bang rewrites fail. Rewriting a large legacy system from scratch while the business continues to evolve the requirements is one of the most reliably failed engineering projects. The Strangler Fig lets you ship value continuously, validate the new system incrementally with real traffic, and always have a working fallback to the old system.',
    analogy:
      'Like renovating a highway while keeping traffic flowing — you build the new lanes alongside the existing ones, incrementally redirect traffic to the new lanes, and demolish the old lanes only once they\'re empty. You never close the highway.',
    soundsSmartToSay:
      '"We should use the Strangler Fig rather than a rewrite — route new user registrations to the new service and migrate old users over time. We can decomission the legacy system when it has zero active users."',
    commonConfusions: [
      'The facade/proxy that routes traffic is critical and often underestimated. It must handle routing logic, backward compatibility, and potentially data synchronization between old and new systems during the transition.',
      'The Strangler Fig requires discipline — the legacy system must not continue receiving new features during migration, or you create a moving target. Feature freeze the old system once migration begins.',
    ],
    relatedTerms: ['Technical Debt', 'Microservices', 'API Gateway', 'Migration'],
  },
  {
    id: 'coding-saga-pattern',
    domain: 'coding',
    title: 'Saga Pattern',
    subtitle: 'Managing distributed transactions without a global lock',
    difficulty: 'advanced',
    tags: ['distributed systems', 'transactions', 'microservices'],
    definition:
      'A saga is a sequence of local transactions where each step publishes an event or message to trigger the next. If a step fails, compensating transactions undo the previous steps. There are two styles: choreography (each service listens for events and reacts, no central coordinator) and orchestration (a central saga orchestrator tells each service what to do next). Sagas replace two-phase commit (2PC) for distributed transactions.',
    whyItMatters:
      'In a microservices architecture, a business operation often spans multiple services and databases. You can\'t use a database transaction that spans service boundaries. Without sagas, you get partial updates: money debited but order not created, inventory reserved but payment not charged. Sagas provide eventual consistency with rollback capability.',
    analogy:
      'Like booking a vacation package — you book the flight, hotel, and rental car in sequence. If the car is unavailable, you cancel the hotel and then the flight in reverse order. Each booking (local transaction) succeeds or fails independently, but the overall trip either fully succeeds or everything is cancelled. That\'s a saga.',
    soundsSmartToSay:
      '"The order flow spans three services — we need a saga here. If the payment service fails after inventory is reserved, the choreography should trigger a compensating transaction to release the reserved stock."',
    commonConfusions: [
      'Sagas do not provide full ACID isolation. Between steps, intermediate states are visible. A saga is an eventual consistency pattern — the system eventually reaches a consistent state, but momentarily inconsistent states are possible.',
      'Choreography (event-driven) and orchestration (command-driven) are both valid saga styles. Choreography scales better and avoids a single point of failure; orchestration is easier to understand, debug, and monitor.',
    ],
    relatedTerms: ['Event-Driven Architecture', 'Distributed Transactions', 'CQRS', 'Eventual Consistency'],
  },
  {
    id: 'coding-backwards-compatibility',
    domain: 'coding',
    title: 'Backward Compatibility',
    subtitle: 'Old clients keep working when you ship new versions',
    difficulty: 'intermediate',
    tags: ['API design', 'versioning', 'integration'],
    definition:
      'A change is backward-compatible if existing clients work correctly without modification after the change is deployed. For APIs: adding new optional fields is backward-compatible; removing or renaming fields is not. For databases: adding a nullable column is backward-compatible; dropping a column that code still reads is not. Backward-compatible changes let you deploy new software without coordinating all consumers simultaneously.',
    whyItMatters:
      'In a system with many integrators (public API, many internal services, mobile clients you can\'t force-update), breaking backward compatibility means coordinating simultaneous deployments across dozens of teams — a fragile, expensive operation. Designing for backward compatibility enables independent deployment, which is the foundation of a fast-moving microservices architecture.',
    analogy:
      'Like electrical outlet standards. A new device with a USB-C charger is backward-compatible if it also includes a USB-A adapter. Homeowners don\'t need to rewire their houses to use the new device. Breaking backward compatibility is like shipping a device with a proprietary plug that requires everyone to replace their outlets first.',
    soundsSmartToSay:
      '"We should apply expand-contract for this schema change: first add the new column (backward-compatible), migrate reads to use it, backfill the data, then remove the old column in a separate release once no code references it."',
    commonConfusions: [
      'Additive changes are not always backward-compatible. Adding a required field to an API request breaks clients that don\'t send it. "New stuff" is only safe if it is optional.',
      'Forward compatibility (new clients work with old servers) is a different and harder problem. Protocol Buffers and Avro are designed for both backward and forward compatibility; most JSON APIs only target backward compatibility.',
    ],
    relatedTerms: ['API Versioning', 'Semantic Versioning', 'Database Migrations', 'Expand-Contract'],
  },
  {
    id: 'coding-openapi',
    domain: 'coding',
    title: 'OpenAPI Specification',
    subtitle: 'Machine-readable contract for your REST API',
    difficulty: 'intermediate',
    tags: ['API', 'documentation', 'tooling'],
    definition:
      'OpenAPI (formerly Swagger) is a specification for describing REST APIs in a machine-readable YAML or JSON document. The spec defines endpoints, request/response schemas, authentication methods, and error codes. Tools generate client SDKs, server stubs, API documentation (Swagger UI), and integration tests directly from the spec.',
    whyItMatters:
      'An OpenAPI spec is a contract between the API team and its consumers. Client teams can generate typed SDKs without waiting for the API to be built (design-first). Automated tools validate that the implementation matches the spec, preventing undocumented behavior from becoming a dependency.',
    analogy:
      'Like a blueprint for a building. The blueprint (OpenAPI spec) exists before construction begins. Contractors (client developers) use it to plan their work. Inspectors (validation tools) verify the finished building matches the blueprint.',
    soundsSmartToSay:
      '"Let\'s adopt a design-first workflow — write the OpenAPI spec, get stakeholder sign-off, then generate the server stubs. That way frontend and backend can work in parallel against the agreed contract."',
    commonConfusions: [
      'OpenAPI describes the interface, not the implementation. Two services can have identical OpenAPI specs but completely different internal implementations.',
      'OpenAPI 3.x and Swagger 2.0 are different versions of the same specification. "Swagger" is now commonly used to refer to Swagger UI (the documentation tool) or the older 2.0 spec. OpenAPI 3.x is the current standard.',
    ],
    relatedTerms: ['REST API', 'API Versioning', 'GraphQL', 'SDK Generation'],
  },
  {
    id: 'coding-observability-code',
    domain: 'coding',
    title: 'Observability in Code',
    subtitle: 'Instrumenting your application so you can understand it in production',
    difficulty: 'intermediate',
    tags: ['monitoring', 'logging', 'tracing'],
    definition:
      'Observability is the ability to understand the internal state of a system from its external outputs — logs, metrics, and traces. Code-level observability means instrumenting your application: structured logs (JSON with consistent fields, not ad hoc strings), metrics (counters, histograms emitted to Prometheus or StatsD), and distributed traces (OpenTelemetry spans that track a request across services).',
    whyItMatters:
      'You cannot debug what you cannot see. A service that emits only error logs and no metrics is a black box in production. Structured logs let you query across thousands of log lines. Traces let you find which service in a chain of 12 added 800ms of latency. Metrics let you alert on degrading performance before users notice.',
    analogy:
      'Like industrial equipment with sensor arrays — a modern turbine has hundreds of sensors reporting temperature, pressure, vibration, and RPM in real time. Engineers diagnose problems remotely without physically inspecting the turbine. Code without observability is a turbine with no sensors — you find out it failed when it stops working.',
    soundsSmartToSay:
      '"We need to add a histogram metric for this endpoint\'s response time — an average is useless because it hides the tail. P99 latency is what users experience at the 99th percentile, and that\'s what SLAs care about."',
    commonConfusions: [
      'Monitoring and observability are not the same. Monitoring tells you when something is wrong (alerts, dashboards). Observability tells you why — it gives you the data to investigate arbitrary questions about system behavior.',
      'Logging everything is not observability. Unstructured log spam with inconsistent fields is as opaque as no logs. Structured logs with consistent, queryable fields are the foundation.',
    ],
    relatedTerms: ['OpenTelemetry', 'Distributed Tracing', 'Metrics', 'SLO/SLA'],
  },
  {
    id: 'coding-clean-code',
    domain: 'coding',
    title: 'Clean Code',
    subtitle: 'Code that reads like prose and changes without fear',
    difficulty: 'beginner',
    tags: ['code quality', 'readability', 'principles'],
    definition:
      'Clean code is code that is easy to read, understand, and change. Key practices: meaningful names (variables and functions that say what they do), small functions (each does one thing), no magic numbers (named constants instead of bare literals), minimal comments (code should be self-documenting), and consistent formatting. Robert Martin\'s "Clean Code" is the canonical reference.',
    whyItMatters:
      'Code is read far more often than it is written. A developer reading unfamiliar code spends 70% of their time understanding what it does before they can change it. Clean code reduces that comprehension overhead, speeds up code review, and reduces bugs introduced by misunderstanding what existing code does.',
    analogy:
      'Like writing a clear report vs a dense technical memo. Both might contain the same information, but the clear report can be understood quickly, shared with others, and built upon. The dense memo requires the author to explain it every time, creates bottlenecks, and leads to misinterpretations.',
    soundsSmartToSay:
      '"If you need a comment to explain what this function does, the function name is wrong. Rename it so the code reads like the comment, then delete the comment."',
    commonConfusions: [
      'Clean code is not about style preferences (tabs vs spaces, single vs double quotes). Those are enforced by formatters. Clean code is about naming, structure, and cognitive load.',
      'Clean code does not mean short code. A verbose variable name (userAuthenticationToken) is cleaner than a short one (uat) even though it\'s longer. Clarity beats brevity.',
    ],
    relatedTerms: ['Refactoring', 'Code Review', 'SOLID', 'Technical Debt'],
  },
];
