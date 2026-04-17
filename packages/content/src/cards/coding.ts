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
];
