import type { Card } from '../types';

export const integrationCards: Card[] = [
  {
    id: 'int-api-gateway',
    domain: 'integration',
    title: 'API Gateway',
    subtitle: 'The front door for all API traffic',
    difficulty: 'beginner',
    tags: ['API', 'routing', 'rate limiting'],
    definition:
      'An API gateway sits in front of your backend services and handles cross-cutting concerns — routing requests to the right service, authentication, rate limiting, request/response transformation, and logging — so individual services do not have to.',
    whyItMatters:
      'Without a gateway, every service implements its own auth, rate limiting, and logging. A gateway centralizes these concerns, provides a single entry point for clients, and decouples internal service topology from the external API.',
    analogy:
      'Like a hotel front desk — guests (clients) talk to the front desk (gateway) which routes them to the right department (service), checks their reservation (auth), and controls how many guests enter at once (rate limiting).',
    soundsSmartToSay:
      '"We should handle JWT validation at the gateway level — there\'s no reason for every downstream service to independently verify tokens."',
    commonConfusions: [
      'API gateway vs load balancer: A load balancer distributes traffic to instances of the same service. An API gateway routes to different services based on the request path and adds cross-cutting features.',
      'API gateway vs service mesh: An API gateway handles north-south traffic (client to service). A service mesh handles east-west traffic (service to service). They solve different problems and often coexist.',
    ],
    relatedTerms: ['Kong', 'AWS API Gateway', 'Rate Limiting', 'Service Mesh'],
  },
  {
    id: 'int-message-queue',
    domain: 'integration',
    title: 'Message Queues',
    subtitle: 'Asynchronous communication between services',
    difficulty: 'beginner',
    tags: ['async', 'decoupling', 'RabbitMQ'],
    definition:
      'A message queue is middleware that accepts messages from producers, stores them durably, and delivers them to consumers — decoupling the sender from the receiver. If the consumer is down, messages wait in the queue until it recovers.',
    whyItMatters:
      'Direct service-to-service HTTP calls create tight coupling — if the downstream service is slow or down, the upstream fails too. Queues absorb traffic spikes, buffer failures, and let services process work at their own pace.',
    analogy:
      'Like a mailbox — the mail carrier (producer) drops off letters regardless of whether you (consumer) are home. You process them when you\'re ready. If you go on vacation, the mailbox holds them until you return.',
    soundsSmartToSay:
      '"We should put a queue between the order service and the fulfillment service — synchronous calls mean one slow warehouse query blocks the entire checkout flow."',
    commonConfusions: [
      'Queue vs topic: A queue delivers each message to exactly one consumer (point-to-point). A topic delivers each message to all subscribers (pub/sub). RabbitMQ does both; Kafka is topic-based by nature.',
      'At-least-once vs exactly-once delivery: Most queues guarantee at-least-once (messages may be delivered twice if acks fail). Exactly-once is extremely hard — design consumers to be idempotent.',
    ],
    relatedTerms: ['RabbitMQ', 'SQS', 'Kafka', 'Pub/Sub'],
  },
  {
    id: 'int-webhook',
    domain: 'integration',
    title: 'Webhooks',
    subtitle: 'Real-time event notifications via HTTP callbacks',
    difficulty: 'beginner',
    tags: ['events', 'HTTP', 'real-time'],
    definition:
      'A webhook is an HTTP POST request that a service sends to your URL when an event occurs — like a payment succeeding, a PR being merged, or an order shipping. Instead of polling an API repeatedly, the event comes to you.',
    whyItMatters:
      'Polling wastes resources and introduces latency — you check every 30 seconds but the event happened at second 1. Webhooks deliver events in real time as they happen, enabling responsive integrations.',
    analogy:
      'Polling is like calling the pizza shop every 5 minutes asking "is my order ready?" Webhooks are like giving them your number and they call you when it\'s done.',
    soundsSmartToSay:
      '"We need to verify webhook signatures — without validating the HMAC, an attacker could send fake payment confirmation events to our endpoint."',
    commonConfusions: [
      'Webhooks are not guaranteed: the sender tries once (or a few retries). If your endpoint is down, events may be lost. Robust integrations use webhook + polling as a fallback.',
      'Webhook security: Always verify the signature (HMAC) sent with the webhook. Use HTTPS. Never trust the payload without cryptographic verification — anyone can POST to a public URL.',
    ],
    relatedTerms: ['Callback', 'Event-Driven', 'HMAC', 'Idempotency'],
  },
  {
    id: 'int-graphql',
    domain: 'integration',
    title: 'GraphQL',
    subtitle: 'Query language for APIs — ask for exactly what you need',
    difficulty: 'intermediate',
    tags: ['API', 'query', 'schema'],
    definition:
      'GraphQL is an API query language where the client specifies exactly which fields it wants in a single request. One GraphQL endpoint replaces many REST endpoints, eliminating over-fetching (getting too much data) and under-fetching (needing multiple requests).',
    whyItMatters:
      'Mobile apps on slow networks benefit most — instead of 5 REST calls to assemble a screen, one GraphQL query gets exactly the data needed. It also provides a strongly typed schema that serves as live API documentation.',
    analogy:
      'REST is like a fixed prix menu — you get the whole meal whether you want the salad or not. GraphQL is like an a la carte menu — you order exactly the dishes (fields) you want.',
    soundsSmartToSay:
      '"We need to add query complexity limits to our GraphQL endpoint — without them, a single deeply nested query could bring down the server."',
    commonConfusions: [
      'GraphQL is not a database query language — it is an API layer. It resolves queries by calling your backend services and databases through resolver functions.',
      'REST is not obsolete: GraphQL adds complexity (schema management, caching is harder, N+1 query problem). For simple CRUD APIs, REST is often simpler and sufficient.',
    ],
    relatedTerms: ['Schema', 'Resolver', 'Apollo', 'REST'],
  },
  {
    id: 'int-middleware',
    domain: 'integration',
    title: 'Middleware',
    subtitle: 'Software that connects systems together',
    difficulty: 'beginner',
    tags: ['ESB', 'integration', 'plumbing'],
    definition:
      'Middleware is software that sits between applications and handles communication, data transformation, routing, and protocol translation. It connects systems that were not designed to work together — from legacy mainframes to modern APIs.',
    whyItMatters:
      'Enterprises have dozens of systems (ERP, CRM, HRIS, billing) that need to share data. Without middleware, every pair of systems needs a custom point-to-point integration — creating an unmaintainable web of connections.',
    analogy:
      'Like a universal power adapter for international travel — each country (system) has a different plug shape (protocol/format), and the adapter (middleware) makes them compatible without rewiring the device.',
    soundsSmartToSay:
      '"We should route this through the integration layer instead of building another point-to-point connection — we already have 47 direct integrations and it\'s becoming impossible to manage."',
    commonConfusions: [
      'ESB (Enterprise Service Bus) is a traditional middleware pattern that centralizes all integration logic. Modern approaches prefer lightweight, decentralized integration (API gateways, event buses).',
      'iPaaS (Integration Platform as a Service) — tools like MuleSoft, Workato, and Boomi — are cloud-hosted middleware platforms. They handle the same problems as on-prem middleware but as a managed service.',
    ],
    relatedTerms: ['ESB', 'iPaaS', 'MuleSoft', 'ETL'],
  },
  {
    id: 'int-oauth',
    domain: 'integration',
    title: 'OAuth 2.0',
    subtitle: 'Delegated authorization without sharing passwords',
    difficulty: 'intermediate',
    tags: ['auth', 'tokens', 'security'],
    definition:
      'OAuth 2.0 is an authorization framework that lets a user grant a third-party application limited access to their resources on another service — without sharing their password. The user authorizes, the service issues a token, and the third party uses that token.',
    whyItMatters:
      '"Sign in with Google" is OAuth. Every SaaS integration that accesses your data (Slack reading your calendar, Zapier posting to your CRM) uses OAuth. Understanding the flow is essential for building and debugging integrations.',
    analogy:
      'Like a hotel key card — instead of giving the valet your house key (password), you give them a card (token) that only opens the parking garage (limited scope), only works today (expires), and can be deactivated anytime (revoked).',
    soundsSmartToSay:
      '"We should request the minimum OAuth scopes needed — asking for full account access when we only need email is a trust and security issue."',
    commonConfusions: [
      'OAuth vs OIDC: OAuth 2.0 handles authorization (what can you access). OIDC (OpenID Connect) is a layer on top that handles authentication (who are you). "Sign in with Google" is OIDC.',
      'Authorization Code flow vs Client Credentials: Authorization Code is for user-facing apps (user grants access). Client Credentials is for service-to-service auth (no user involved).',
    ],
    relatedTerms: ['OIDC', 'JWT', 'SSO', 'Access Token'],
  },
  {
    id: 'int-event-driven',
    domain: 'integration',
    title: 'Event-Driven Architecture',
    subtitle: 'Systems that react to events instead of polling',
    difficulty: 'intermediate',
    tags: ['events', 'pub/sub', 'decoupling'],
    definition:
      'Event-driven architecture (EDA) is a design pattern where services emit events ("order placed", "user signed up", "payment failed") and other services subscribe to and react to those events — instead of services calling each other directly.',
    whyItMatters:
      'EDA decouples services radically — the order service doesn\'t know or care that the email service, analytics service, and inventory service all react to "order placed." Adding a new consumer requires zero changes to the producer.',
    analogy:
      'Like a newspaper: the publisher (producer) prints the news once. Subscribers (consumers) choose which sections they read. Adding a new subscriber doesn\'t require the publisher to do anything different.',
    soundsSmartToSay:
      '"With event sourcing, we have a complete audit trail of every state change — we can reconstruct the state of any entity at any point in time."',
    commonConfusions: [
      'Event notification vs event-carried state: A notification says "order 123 was placed" (consumer must fetch details). Event-carried state includes the full order data in the event — simpler but larger payloads.',
      'Event sourcing vs event-driven: Event-driven means services communicate via events. Event sourcing means the events ARE the source of truth (you rebuild state by replaying events). Related but different.',
    ],
    relatedTerms: ['Kafka', 'CQRS', 'Event Sourcing', 'Pub/Sub'],
  },
  {
    id: 'int-idempotency',
    domain: 'integration',
    title: 'Idempotency',
    subtitle: 'Making operations safe to retry',
    difficulty: 'intermediate',
    tags: ['reliability', 'retry', 'API design'],
    definition:
      'An idempotent operation produces the same result whether you execute it once or multiple times. In API design, this means retrying a failed request (due to network timeout) won\'t create duplicate orders, double-charge a credit card, or send two emails.',
    whyItMatters:
      'Networks are unreliable. Clients will retry. If your API isn\'t idempotent, retries create duplicate data and inconsistent state — the most common class of integration bugs in distributed systems.',
    analogy:
      'An elevator call button is idempotent — pressing it 10 times doesn\'t summon 10 elevators. A vending machine button is NOT — pressing it 10 times dispenses 10 sodas.',
    soundsSmartToSay:
      '"We need an idempotency key on this payment endpoint — if the client retries after a timeout, we must not charge the customer twice."',
    commonConfusions: [
      'HTTP method idempotency: GET, PUT, DELETE are idempotent by design. POST is not. This is why APIs use PUT for updates (safe to retry) and POST for creation (may need an idempotency key).',
      'Idempotency keys: The client sends a unique key (UUID) with each request. The server stores the key + result. On retry with the same key, the server returns the stored result instead of reprocessing.',
    ],
    relatedTerms: ['Retry', 'Exactly-Once', 'Deduplication', 'At-Least-Once'],
  },
  {
    id: 'int-grpc',
    domain: 'integration',
    title: 'gRPC',
    subtitle: 'High-performance RPC framework using HTTP/2 and Protobuf',
    difficulty: 'intermediate',
    tags: ['RPC', 'Protobuf', 'HTTP/2', 'microservices'],
    definition:
      'gRPC is a remote procedure call framework developed by Google that uses HTTP/2 for transport and Protocol Buffers for serialization. It lets you call methods on a remote service as if they were local function calls, with strongly typed contracts defined in .proto files that generate client and server code in dozens of languages.',
    whyItMatters:
      'REST over JSON is human-readable but slow — gRPC is up to 10x faster thanks to binary serialization and HTTP/2 multiplexing. For internal service-to-service communication where you control both ends, gRPC dramatically reduces latency and bandwidth, which directly affects infrastructure costs at scale.',
    analogy:
      'If REST is like exchanging letters written in plain English (readable by anyone, but bulky and slow), gRPC is like a dedicated phone line with a shared codebook — faster and more efficient, but both sides need the codebook (proto definition) to communicate.',
    soundsSmartToSay:
      '"For the internal service mesh we should use gRPC with bidirectional streaming — the latency savings over REST compound across the call chain, and the proto contracts give us type safety across language boundaries."',
    commonConfusions: [
      'gRPC vs REST: REST is resource-oriented (nouns and HTTP verbs), while gRPC is action-oriented (calling functions). REST is better for public APIs because browsers natively support it; gRPC excels at internal service-to-service communication.',
      'gRPC requires HTTP/2, which means it does not work directly from browsers without a proxy (like gRPC-Web or Envoy). This is why gRPC is primarily used between backend services, not for frontend-to-backend calls.',
      'Protocol Buffers are not exclusive to gRPC — you can use Protobuf with REST APIs or message queues. gRPC simply chose Protobuf as its default serialization format.',
    ],
    relatedTerms: ['Protocol Buffers', 'HTTP/2', 'REST', 'Service Mesh'],
  },
  {
    id: 'int-api-rate-limiting',
    domain: 'integration',
    title: 'API Rate Limiting',
    subtitle: 'Controlling how many requests a client can make',
    difficulty: 'beginner',
    tags: ['API', 'throttling', 'reliability'],
    definition:
      'API rate limiting restricts how many requests a client can make to an API within a given time window — for example, 100 requests per minute. When the limit is exceeded, the API returns a 429 (Too Many Requests) status code, often with a Retry-After header telling the client when to try again.',
    whyItMatters:
      'Without rate limiting, a single misbehaving client — or a bot scraping your data — can overwhelm your service and degrade performance for everyone. Rate limiting protects availability, ensures fair usage, and is also how API providers enforce paid tier boundaries.',
    analogy:
      'Like a bouncer at a nightclub enforcing a maximum occupancy. No matter how eager the crowd is, only a fixed number of people are allowed in per hour. Everyone else waits in line or comes back later.',
    soundsSmartToSay:
      '"We should implement a sliding window rate limiter instead of fixed windows — fixed windows allow burst traffic at the boundary where two windows meet."',
    commonConfusions: [
      'Rate limiting vs throttling: Rate limiting rejects excess requests with a 429. Throttling slows requests down (queues them) rather than rejecting. Some systems use both — throttle first, then reject if the queue fills up.',
      'Rate limits apply per client (identified by API key or IP), not globally. A global limit of 1,000 requests per minute shared across all users would punish well-behaved clients for others\' abuse.',
      'Exponential backoff is the proper client-side response to rate limiting — wait 1 second, then 2, then 4. Retrying immediately in a tight loop makes the problem worse and may get your key banned.',
    ],
    relatedTerms: ['API Gateway', 'Throttling', '429 Status Code', 'Token Bucket'],
  },
  {
    id: 'int-service-discovery',
    domain: 'integration',
    title: 'Service Discovery',
    subtitle: 'How services find each other in dynamic environments',
    difficulty: 'intermediate',
    tags: ['microservices', 'networking', 'DNS'],
    definition:
      'Service discovery is the mechanism by which services in a distributed system locate each other without hardcoded addresses. A service registry keeps track of which instances are running and where, so when Service A needs to call Service B, it queries the registry for a healthy instance rather than relying on a static IP or config file.',
    whyItMatters:
      'In containerized or cloud environments, services scale up and down constantly — instances get new IP addresses every time they restart. Hardcoding addresses is fragile and impossible to maintain. Service discovery enables auto-scaling, rolling deployments, and self-healing infrastructure.',
    analogy:
      'Like DNS for your internal services. Just as your browser asks DNS "where is google.com?" instead of memorizing 142.250.80.46, your services ask a registry "where is the payment service?" instead of hardcoding an IP address that will change tomorrow.',
    soundsSmartToSay:
      '"We need health-check-aware service discovery — if an instance is registered but failing its health checks, the registry should stop routing traffic to it before we see cascading failures."',
    commonConfusions: [
      'Client-side vs server-side discovery: In client-side discovery (Eureka, Consul), the calling service queries the registry and picks an instance. In server-side discovery (AWS ALB, Kubernetes Services), a load balancer does the lookup. Kubernetes uses server-side discovery by default.',
      'Service discovery vs DNS: Traditional DNS has TTL-based caching, which means stale entries linger for minutes. Service discovery solutions update in real time when instances come and go — critical for environments where containers may live only seconds.',
      'A service registry is not a service mesh. The registry tracks where services are; a service mesh (Istio, Linkerd) also controls how traffic flows between them with retries, circuit breaking, and mTLS.',
    ],
    relatedTerms: ['Consul', 'Eureka', 'Kubernetes Services', 'DNS'],
  },
  {
    id: 'int-esb',
    domain: 'integration',
    title: 'ESB (Enterprise Service Bus)',
    subtitle: 'Centralized integration backbone for enterprise systems',
    difficulty: 'advanced',
    tags: ['enterprise', 'SOA', 'middleware', 'legacy'],
    definition:
      'An Enterprise Service Bus is a middleware architecture pattern that provides a centralized bus through which all enterprise applications communicate. The ESB handles message routing, protocol transformation, data mapping, orchestration, and error handling — acting as the nervous system that connects ERP, CRM, HRIS, and other enterprise systems.',
    whyItMatters:
      'Large enterprises run hundreds of systems that must share data — HR updates must flow to payroll, identity, and benefits systems simultaneously. An ESB replaces the O(n²) point-to-point integration nightmare with a hub-and-spoke model, making it possible to change one system without breaking integrations with twenty others.',
    analogy:
      'Like an airport hub in a hub-and-spoke airline network. Instead of every city having direct flights to every other city (point-to-point integrations), all flights route through the hub (ESB). Adding a new destination means one new route to the hub, not fifty new direct routes.',
    soundsSmartToSay:
      '"The ESB served us well for SOA, but it became a monolithic bottleneck — we\'re decomposing it into domain-specific event streams and lightweight API gateways to avoid single points of failure."',
    commonConfusions: [
      'ESB vs API Gateway: An API gateway handles request/response traffic from external clients. An ESB orchestrates complex integration flows between internal systems — including message transformation, protocol mediation (SOAP to REST), and long-running business processes.',
      'ESBs are often criticized as monolithic single points of failure, which led to the rise of microservices and event-driven architectures. However, many enterprises still depend on ESBs (IBM Integration Bus, MuleSoft, TIBCO) and will for years.',
      'ESB vs iPaaS: iPaaS (MuleSoft Anypoint, Boomi, Workato) is essentially ESB capabilities delivered as a cloud service. The integration patterns are similar, but iPaaS removes the infrastructure management burden.',
    ],
    relatedTerms: ['SOA', 'iPaaS', 'Middleware', 'MuleSoft'],
  },
  {
    id: 'int-data-serialization',
    domain: 'integration',
    title: 'Data Serialization (JSON/Protobuf/Avro)',
    subtitle: 'Encoding data for transmission between systems',
    difficulty: 'beginner',
    tags: ['data formats', 'JSON', 'Protobuf', 'Avro'],
    definition:
      'Data serialization is the process of converting in-memory data structures into a format that can be transmitted over a network or stored on disk, and then deserializing it back on the other end. Common formats include JSON (human-readable text), Protocol Buffers (compact binary with schemas), and Avro (binary with embedded schemas used heavily in data pipelines).',
    whyItMatters:
      'Every API call, message queue event, and data pipeline involves serialization. Choosing the right format affects performance, payload size, schema evolution, and developer experience. JSON is easy to debug but verbose; binary formats like Protobuf can cut payload sizes by 60-80%, saving real money on bandwidth and storage.',
    analogy:
      'Like choosing a shipping container format. JSON is like sending items in transparent boxes with labels in plain English — easy to inspect but bulky. Protobuf is like vacuum-sealed packages with barcodes — compact and fast to process, but you need a scanner (schema) to read the contents.',
    soundsSmartToSay:
      '"We should use Avro for the Kafka topics since it supports schema evolution — producers can add fields without breaking existing consumers, and the schema registry ensures compatibility."',
    commonConfusions: [
      'JSON is text-based and self-describing (field names are in every payload). Protobuf and Avro are binary and schema-dependent — you need the schema definition to decode the bytes. This makes binary formats smaller but harder to debug.',
      'Schema evolution is the killer feature of Protobuf and Avro — you can add or remove fields without breaking existing consumers. JSON has no built-in schema evolution; you handle compatibility manually or use JSON Schema.',
      'Avro vs Protobuf: Avro embeds the writer\'s schema with the data (ideal for file storage and Kafka). Protobuf requires both sides to have the .proto file (ideal for RPC). Avro dominates in data engineering; Protobuf dominates in microservices.',
    ],
    relatedTerms: ['JSON', 'Protocol Buffers', 'Avro', 'Schema Registry'],
  },
  {
    id: 'int-circuit-breaker',
    domain: 'integration',
    title: 'Circuit Breaker Pattern',
    subtitle: 'Failing fast when a downstream service is unhealthy',
    difficulty: 'intermediate',
    tags: ['resilience', 'fault tolerance', 'microservices'],
    definition:
      'The circuit breaker pattern monitors calls to a downstream service and "trips" (opens) when failures exceed a threshold — immediately returning an error or fallback instead of waiting for timeouts. After a cooldown period, it enters a half-open state, allowing a few test requests through to see if the service has recovered before fully closing the circuit again.',
    whyItMatters:
      'Without a circuit breaker, a failing downstream service causes cascading failures — threads pile up waiting for timeouts, connection pools exhaust, and your entire system goes down because one dependency is slow. Circuit breakers contain the blast radius and let your system degrade gracefully.',
    analogy:
      'Exactly like an electrical circuit breaker in your home. When a short circuit (downstream failure) draws too much current (failed requests), the breaker trips to protect the entire house (your system) from catching fire (cascading failure). You manually reset it after fixing the problem.',
    soundsSmartToSay:
      '"We should add a circuit breaker around the payment provider call with a fallback to queue the charge — a 30-second timeout on every request during an outage will exhaust our thread pool in minutes."',
    commonConfusions: [
      'Circuit breaker vs retry: Retries try again hoping for success. A circuit breaker stops trying entirely when failure is likely — preventing wasted resources. Use both together: retry a few times, then trip the circuit breaker.',
      'The three states — closed (normal flow), open (all requests fail fast), half-open (testing recovery) — are the opposite of what you might expect. "Closed" means the circuit is flowing normally, like an electrical circuit.',
      'Circuit breakers need tuning: threshold too low and the circuit trips on transient blips; too high and it does not trip fast enough to prevent cascading failures. Start with 50% failure rate over a 10-second window and adjust.',
    ],
    relatedTerms: ['Resilience', 'Retry', 'Fallback', 'Hystrix'],
  },
  {
    id: 'int-cqrs',
    domain: 'integration',
    title: 'CQRS',
    subtitle: 'Separating read and write models for scalability',
    difficulty: 'advanced',
    tags: ['architecture', 'event sourcing', 'scalability'],
    definition:
      'Command Query Responsibility Segregation (CQRS) splits a system into two separate models: a command (write) model optimized for processing changes, and a query (read) model optimized for serving data. Instead of one database handling both reads and writes, each side has its own store, schema, and scaling strategy, synchronized via events.',
    whyItMatters:
      'Most systems have vastly different read and write patterns — an e-commerce platform may handle 100 reads for every 1 write. CQRS lets you scale reads and writes independently, optimize each model for its workload (normalized for writes, denormalized for reads), and use the best database technology for each side.',
    analogy:
      'Like a restaurant with a separate kitchen (write side) and dining room menu board (read side). The kitchen processes orders and updates the menu board asynchronously. The menu board is formatted for customers to read quickly, not for chefs to cook from — each is optimized for its audience.',
    soundsSmartToSay:
      '"CQRS lets us use a relational database for transactional writes and Elasticsearch for the read model — we get ACID guarantees on writes and sub-millisecond full-text search on reads without either model compromising for the other."',
    commonConfusions: [
      'CQRS does not require event sourcing, and event sourcing does not require CQRS — though they pair well together. You can implement CQRS with a simple database and a synchronization process; no event store needed.',
      'Eventual consistency is the main tradeoff: after a write, the read model may take milliseconds to seconds to update. If your UI must show the write result immediately, you need strategies like returning the write result directly or optimistic UI updates.',
      'CQRS adds significant complexity — two data models, synchronization logic, eventual consistency handling. It is overkill for simple CRUD applications. Apply it only to bounded contexts with genuinely different read and write requirements.',
    ],
    relatedTerms: ['Event Sourcing', 'Eventual Consistency', 'Domain-Driven Design', 'Read Replica'],
  },
  {
    id: 'int-api-documentation',
    domain: 'integration',
    title: 'API Documentation (OpenAPI/Swagger)',
    subtitle: 'Machine-readable API contracts that generate docs and code',
    difficulty: 'beginner',
    tags: ['API', 'OpenAPI', 'Swagger', 'developer experience'],
    definition:
      'OpenAPI (formerly Swagger) is a specification for describing REST APIs in a machine-readable YAML or JSON file. It defines every endpoint, request/response schema, authentication method, and error code. From this single spec file, tools can auto-generate interactive documentation, client SDKs, server stubs, and contract tests.',
    whyItMatters:
      'Poor API documentation is the number one complaint developers have about integrations. An OpenAPI spec eliminates ambiguity — both humans and machines can read it. It enables design-first API development, automated testing, and drastically reduces integration time for external partners and internal teams alike.',
    analogy:
      'Like a building blueprint filed with the city. Architects (API designers) create the blueprint (OpenAPI spec) before construction. Contractors (developers) build from it, inspectors (tests) validate against it, and anyone can review the plans without entering the building (interactive docs).',
    soundsSmartToSay:
      '"Let\'s adopt a spec-first workflow — define the OpenAPI contract before writing code, so frontend and backend teams can work in parallel and we catch breaking changes in CI with contract tests."',
    commonConfusions: [
      'Swagger vs OpenAPI: Swagger was the original name. When the spec was donated to the Linux Foundation in 2015, it was renamed OpenAPI. "Swagger" now refers to the tooling (Swagger UI, Swagger Editor), while "OpenAPI" is the specification itself.',
      'Code-first vs spec-first: Code-first generates the OpenAPI spec from code annotations. Spec-first writes the spec first and generates code from it. Spec-first catches design issues earlier and enables parallel development, but requires more upfront planning.',
      'An OpenAPI spec is a contract, not just documentation. Use it for automated contract testing in CI — if the implementation drifts from the spec, the tests fail, preventing undocumented breaking changes from reaching production.',
    ],
    relatedTerms: ['Swagger UI', 'REST', 'API Contract', 'Postman'],
  },
  {
    id: 'int-grpc',
    domain: 'integration',
    title: 'gRPC',
    subtitle: 'High-performance RPC with Protocol Buffers',
    difficulty: 'intermediate',
    tags: ['rpc', 'performance', 'protobuf'],
    definition:
      'gRPC is a high-performance remote procedure call framework that uses Protocol Buffers (protobuf) for serialization and HTTP/2 for transport. It supports strongly typed contracts, bidirectional streaming, and code generation in dozens of languages — making it the default choice for internal service-to-service communication at scale.',
    whyItMatters:
      'REST with JSON is human-readable but slow for high-throughput internal services. gRPC is 5–10x faster due to binary serialization and HTTP/2 multiplexing, with strict contracts that catch breaking changes at compile time instead of at runtime.',
    analogy:
      'REST is like exchanging letters (readable, flexible, slow). gRPC is like a phone call (direct, fast, requires both sides to speak the same protocol). For internal services that talk millions of times per second, the phone call wins.',
    soundsSmartToSay:
      '"For our internal service mesh, gRPC gives us type-safe contracts and streaming — REST is better for our public API where human readability and browser compatibility matter."',
    commonConfusions: [
      'gRPC vs REST: REST is resource-oriented (GET /users/123). gRPC is action-oriented (GetUser(id=123)). REST is better for public APIs; gRPC is better for internal high-throughput communication.',
      'gRPC vs GraphQL: GraphQL lets clients request exactly the fields they need. gRPC uses fixed message schemas. GraphQL is better for flexible client queries; gRPC is better for predefined, high-performance server-to-server calls.',
    ],
    relatedTerms: ['Protocol Buffers', 'REST API', 'HTTP/2', 'Service Mesh'],
  },
  {
    id: 'int-rate-limiting',
    domain: 'integration',
    title: 'API Rate Limiting',
    subtitle: 'Protect your service from being overwhelmed',
    difficulty: 'beginner',
    tags: ['protection', 'throttling', 'api'],
    definition:
      'Rate limiting restricts how many API requests a client can make within a time window (e.g., 100 requests per minute). Requests beyond the limit receive a 429 (Too Many Requests) response. It protects services from abuse, accidental floods, and cascading failures.',
    whyItMatters:
      'Without rate limiting, a single misbehaving client — or a bug in a consuming service — can overwhelm your API and degrade it for everyone. Rate limiting is the first line of defense against both accidental and intentional overload.',
    analogy:
      'Like a bouncer at a club controlling how many people enter per hour. Everyone gets in eventually, but the club never exceeds capacity. Without the bouncer, a rush overwhelms the venue and ruins the experience for everyone.',
    soundsSmartToSay:
      '"We should implement tiered rate limits — higher limits for paying customers, lower for free tier — and return Retry-After headers so clients can back off gracefully."',
    commonConfusions: [
      'Rate limiting vs throttling: Rate limiting rejects excess requests (hard cutoff). Throttling slows them down (queuing or delaying). In practice, the terms are often used interchangeably.',
      'Rate limiting vs circuit breaker: Rate limiting protects your service from being overwhelmed by incoming traffic. A circuit breaker protects your service from overwhelming a downstream dependency. They protect in opposite directions.',
    ],
    relatedTerms: ['API Gateway', 'Circuit Breaker', '429 Status Code', 'Backpressure'],
  },
  {
    id: 'int-service-discovery',
    domain: 'integration',
    title: 'Service Discovery',
    subtitle: 'How services find each other dynamically',
    difficulty: 'intermediate',
    tags: ['microservices', 'networking', 'dynamic'],
    definition:
      'Service discovery is the mechanism by which services in a distributed system locate each other at runtime — registering their addresses when they start and deregistering when they stop. Tools like Consul, Eureka, and Kubernetes DNS provide this capability.',
    whyItMatters:
      'In dynamic environments where containers spin up and down constantly, hardcoded addresses break immediately. Service discovery provides a live registry of available service instances, enabling load balancing, failover, and elastic scaling without manual configuration.',
    analogy:
      'Like a DNS for microservices that updates in real-time. When a new instance of the payment service starts, it registers itself. When other services need to call payments, they query the registry for a healthy instance — no hardcoded IPs.',
    soundsSmartToSay:
      '"Kubernetes DNS handles service discovery within the cluster, but for cross-cluster communication we need something like Consul with health checking and DNS forwarding."',
    commonConfusions: [
      'Client-side vs server-side discovery: In client-side discovery, the client queries the registry and picks an instance (Netflix Eureka). In server-side discovery, the client calls a load balancer that queries the registry (Kubernetes Services). Server-side is simpler for clients.',
      'Service discovery vs DNS: Traditional DNS caches aggressively and updates slowly (TTLs). Service discovery registries update in real-time with health checking — a failed instance is removed in seconds, not minutes.',
    ],
    relatedTerms: ['Consul', 'Kubernetes DNS', 'Load Balancer', 'Health Checks'],
  },
  {
    id: 'int-esb',
    domain: 'integration',
    title: 'ESB',
    subtitle: 'Enterprise Service Bus',
    difficulty: 'advanced',
    tags: ['enterprise', 'legacy', 'integration'],
    definition:
      'An ESB is a centralized middleware platform that routes, transforms, and orchestrates messages between enterprise applications. It was the dominant integration pattern before microservices — products like MuleSoft, IBM Integration Bus, and TIBCO enabled complex B2B and system-to-system integrations.',
    whyItMatters:
      'Understanding ESBs is essential for working with enterprise systems. Many large organizations still run critical integrations through ESBs, and modern integration platforms (iPaaS) are essentially cloud-native ESBs. The pattern is not dead — it has evolved.',
    analogy:
      'Like a central post office that translates, routes, and transforms mail between departments that each speak a different language. The post office (ESB) ensures the HR system and the payroll system can exchange data even though they use different formats.',
    soundsSmartToSay:
      '"The ESB is a single point of failure and a bottleneck — for new integrations, we should evaluate an event-driven approach with a message broker instead of routing everything through the bus."',
    commonConfusions: [
      'ESB vs message broker: A message broker (Kafka, RabbitMQ) transports messages. An ESB transports, transforms, routes, and orchestrates messages — it is a message broker plus business logic. Modern architectures prefer dumb pipes (brokers) with smart endpoints.',
      'ESB vs API gateway: An API gateway handles external request routing and authentication. An ESB handles internal system-to-system integration with message transformation. Some overlap exists but they serve different purposes.',
    ],
    relatedTerms: ['Message Queues', 'Middleware', 'iPaaS', 'SOA'],
  },
  {
    id: 'int-serialization',
    domain: 'integration',
    title: 'Data Serialization',
    subtitle: 'JSON, Protobuf, Avro — choosing the right wire format',
    difficulty: 'beginner',
    tags: ['formats', 'performance', 'interoperability'],
    definition:
      'Data serialization converts in-memory data structures into a format that can be transmitted over a network or stored on disk. JSON is human-readable but verbose. Protocol Buffers and Avro are binary formats that are smaller and faster but require a schema definition.',
    whyItMatters:
      'The serialization format affects API performance, bandwidth costs, and developer experience. A chatty microservice exchanging millions of JSON messages per second can cut payload size and latency by 5–10x by switching to Protobuf — but loses human readability for debugging.',
    analogy:
      'JSON is like writing in English — anyone can read it, but it is verbose. Protobuf is like shorthand — compact and fast but you need a codebook (schema) to decode it. For internal notes (service-to-service), shorthand wins. For public documents (public APIs), English wins.',
    soundsSmartToSay:
      '"For our public API we should stick with JSON for developer experience. For the high-throughput internal event stream, Avro with a schema registry gives us backward-compatible binary serialization."',
    commonConfusions: [
      'Protobuf vs Avro: Both are binary schema-based formats. Protobuf is paired with gRPC and uses numbered fields. Avro embeds the schema with the data and is the default in Kafka ecosystems. Choose based on your transport layer.',
      'JSON vs MessagePack: MessagePack is a binary format that is drop-in compatible with JSON structures but smaller and faster. It is a good middle ground when you want JSON compatibility with better performance.',
    ],
    relatedTerms: ['gRPC', 'Schema Registry', 'JSON', 'Apache Avro'],
  },
  {
    id: 'int-circuit-breaker',
    domain: 'integration',
    title: 'Circuit Breaker Pattern',
    subtitle: 'Stop calling a service that is already down',
    difficulty: 'intermediate',
    tags: ['resilience', 'patterns', 'failure'],
    definition:
      'The circuit breaker pattern monitors calls to a downstream service and "trips" (opens) when failures exceed a threshold — subsequent calls fail immediately without hitting the downstream service. After a cooldown period, it allows a few test calls (half-open) to see if the service has recovered.',
    whyItMatters:
      'Without a circuit breaker, a failing downstream service causes cascading failures — every caller waits for timeouts, exhausts connection pools, and eventually fails too. The circuit breaker prevents one failure from taking down the entire system.',
    analogy:
      'Like an electrical circuit breaker in your house. When a short circuit happens, the breaker trips to prevent the wiring from catching fire. Resetting it tests whether the problem is fixed. Without it, one bad outlet can burn down the house.',
    soundsSmartToSay:
      '"We need a circuit breaker on the payment service call — if it is down, we should fail fast and return a cached response or graceful degradation rather than hanging for 30 seconds per request."',
    commonConfusions: [
      'Circuit breaker vs retry: Retries try again immediately after failure. A circuit breaker stops trying altogether after repeated failures. Use both — retry for transient errors, circuit breaker for sustained outages.',
      'Circuit breaker vs rate limiting: Rate limiting protects a service from too many requests. A circuit breaker protects a caller from a failing dependency. They protect in different directions.',
    ],
    relatedTerms: ['Resilience', 'Retry Pattern', 'Bulkhead Pattern', 'Graceful Degradation'],
  },
  {
    id: 'int-cqrs',
    domain: 'integration',
    title: 'CQRS',
    subtitle: 'Command Query Responsibility Segregation',
    difficulty: 'advanced',
    tags: ['architecture', 'patterns', 'scalability'],
    definition:
      'CQRS separates the read (query) and write (command) sides of a system into different models, often backed by different databases. Writes go to a normalized store optimized for consistency. Reads go to a denormalized store optimized for query performance. The read store is kept in sync via events.',
    whyItMatters:
      'Most applications read far more than they write. CQRS lets you scale reads and writes independently — the read side can use materialized views, caching, and search indexes while the write side maintains strict consistency. It is the pattern behind high-read-throughput systems.',
    analogy:
      'Like a library with a catalog system. Authors submit manuscripts (writes) to the archives (write store). The librarian creates catalog cards and shelf displays (read store) optimized for how patrons search. The archive and the catalog are separate systems synced by the librarian.',
    soundsSmartToSay:
      '"CQRS makes sense here — our writes are simple but our reads need to join across five tables. Let us denormalize into a read model and sync it from the write side via events."',
    commonConfusions: [
      'CQRS does not require event sourcing: CQRS separates reads and writes. Event sourcing stores state as events. They are often used together but are independent patterns — you can do CQRS with a normal database on the write side.',
      'Eventual consistency trade-off: The read model is updated asynchronously, so it may be slightly behind the write model. If you need read-your-own-writes consistency, you need to handle it at the application level.',
    ],
    relatedTerms: ['Event Sourcing', 'Materialized View', 'Event-Driven Architecture', 'Read Replica'],
  },
  {
    id: 'int-openapi',
    domain: 'integration',
    title: 'OpenAPI / Swagger',
    subtitle: 'Machine-readable API documentation',
    difficulty: 'beginner',
    tags: ['documentation', 'api', 'standards'],
    definition:
      'OpenAPI (formerly Swagger) is a specification for describing REST APIs in a machine-readable YAML or JSON format. From a single OpenAPI spec, you can auto-generate interactive documentation, client SDKs, server stubs, and contract tests — making the spec the single source of truth for your API.',
    whyItMatters:
      'Hand-written API documentation drifts from the implementation within weeks. An OpenAPI spec that generates docs, tests, and types from the same source eliminates drift and gives API consumers reliable, always-current documentation.',
    analogy:
      'Like architectural blueprints for a building. The blueprint (spec) defines exactly what the building (API) looks like. Contractors (client developers) can build against the blueprint without visiting the construction site. Inspectors (tests) can verify the building matches the blueprint.',
    soundsSmartToSay:
      '"We should generate our OpenAPI spec from code annotations and use it for contract testing in CI — if the implementation drifts from the spec, the build breaks."',
    commonConfusions: [
      'OpenAPI vs Swagger: Swagger was the original name. When the spec was donated to the Linux Foundation, it was renamed OpenAPI. "Swagger" now refers to the tooling (Swagger UI, Swagger Editor), not the specification itself.',
      'An OpenAPI spec is a contract, not just documentation. Use it for automated contract testing in CI — if the implementation drifts from the spec, the tests fail, preventing undocumented breaking changes from reaching production.',
    ],
    relatedTerms: ['Swagger UI', 'REST', 'API Contract', 'Postman'],
  },
];
