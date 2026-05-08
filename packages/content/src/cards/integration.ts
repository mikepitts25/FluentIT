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
      'REST over JSON is human-readable but slow — gRPC is up to 10x faster thanks to binary serialization and HTTP/2 multiplexing. For internal service-to-service communication where you control both ends, gRPC dramatically reduces latency and bandwidth.',
    analogy:
      'If REST is like exchanging letters written in plain English (readable by anyone, but bulky and slow), gRPC is like a dedicated phone line with a shared codebook — faster and more efficient, but both sides need the codebook (proto definition) to communicate.',
    soundsSmartToSay:
      '"For the internal service mesh we should use gRPC with bidirectional streaming — the latency savings over REST compound across the call chain, and the proto contracts give us type safety across language boundaries."',
    commonConfusions: [
      'gRPC vs REST: REST is resource-oriented (nouns and HTTP verbs), while gRPC is action-oriented (calling functions). REST is better for public APIs because browsers natively support it; gRPC excels at internal service-to-service communication.',
      'gRPC requires HTTP/2, which means it does not work directly from browsers without a proxy (like gRPC-Web or Envoy). This is why gRPC is primarily used between backend services, not for frontend-to-backend calls.',
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
      'Like a bouncer at a nightclub enforcing a maximum occupancy. No matter how eager the crowd is, only a fixed number of people are allowed in per hour.',
    soundsSmartToSay:
      '"We should implement a sliding window rate limiter instead of fixed windows — fixed windows allow burst traffic at the boundary where two windows meet."',
    commonConfusions: [
      'Rate limiting vs throttling: Rate limiting rejects excess requests with a 429. Throttling slows requests down (queues them) rather than rejecting. Some systems use both — throttle first, then reject if the queue fills up.',
      'Exponential backoff is the proper client-side response to rate limiting — wait 1 second, then 2, then 4. Retrying immediately in a tight loop makes the problem worse.',
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
      'Like DNS for your internal services. Just as your browser asks DNS "where is google.com?" instead of memorizing an IP address, your services ask a registry "where is the payment service?" instead of hardcoding an IP that will change tomorrow.',
    soundsSmartToSay:
      '"We need health-check-aware service discovery — if an instance is registered but failing its health checks, the registry should stop routing traffic to it before we see cascading failures."',
    commonConfusions: [
      'Client-side vs server-side discovery: In client-side discovery (Eureka, Consul), the calling service queries the registry and picks an instance. In server-side discovery (AWS ALB, Kubernetes Services), a load balancer does the lookup.',
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
      'Large enterprises run hundreds of systems that must share data. An ESB replaces the O(n²) point-to-point integration nightmare with a hub-and-spoke model, making it possible to change one system without breaking integrations with twenty others.',
    analogy:
      'Like an airport hub in a hub-and-spoke airline network. Instead of every city having direct flights to every other city, all flights route through the hub (ESB). Adding a new destination means one new route to the hub, not fifty new direct routes.',
    soundsSmartToSay:
      '"The ESB served us well for SOA, but it became a monolithic bottleneck — we\'re decomposing it into domain-specific event streams and lightweight API gateways to avoid single points of failure."',
    commonConfusions: [
      'ESB vs API Gateway: An API gateway handles request/response traffic from external clients. An ESB orchestrates complex integration flows between internal systems — including message transformation and protocol mediation.',
      'ESBs are often criticized as monolithic single points of failure, which led to the rise of microservices and event-driven architectures. However, many enterprises still depend on them and will for years.',
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
      'Data serialization converts in-memory data structures into a format for network transmission or storage, then deserializes on the other end. Common formats include JSON (human-readable text), Protocol Buffers (compact binary with schemas), and Avro (binary with embedded schemas used heavily in data pipelines).',
    whyItMatters:
      'Every API call, message queue event, and data pipeline involves serialization. Choosing the right format affects performance, payload size, schema evolution, and developer experience. Binary formats like Protobuf can cut payload sizes by 60-80% compared to JSON.',
    analogy:
      'Like choosing a shipping container format. JSON is like sending items in transparent boxes with labels in plain English — easy to inspect but bulky. Protobuf is like vacuum-sealed packages with barcodes — compact and fast, but you need a scanner (schema) to read the contents.',
    soundsSmartToSay:
      '"We should use Avro for the Kafka topics since it supports schema evolution — producers can add fields without breaking existing consumers, and the schema registry ensures compatibility."',
    commonConfusions: [
      'JSON is text-based and self-describing (field names are in every payload). Protobuf and Avro are binary and schema-dependent — you need the schema definition to decode the bytes.',
      'Avro vs Protobuf: Avro embeds the writer\'s schema with the data (ideal for Kafka). Protobuf requires both sides to have the .proto file (ideal for RPC). Avro dominates in data engineering; Protobuf dominates in microservices.',
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
      'The circuit breaker pattern monitors calls to a downstream service and "trips" (opens) when failures exceed a threshold — immediately returning an error or fallback instead of waiting for timeouts. After a cooldown period, it enters a half-open state, allowing a few test requests through to see if the service has recovered.',
    whyItMatters:
      'Without a circuit breaker, a failing downstream service causes cascading failures — threads pile up waiting for timeouts, connection pools exhaust, and your entire system goes down because one dependency is slow.',
    analogy:
      'Exactly like an electrical circuit breaker in your home. When a short circuit draws too much current, the breaker trips to protect the entire house from catching fire. You manually reset it after fixing the problem.',
    soundsSmartToSay:
      '"We should add a circuit breaker around the payment provider call with a fallback to queue the charge — a 30-second timeout on every request during an outage will exhaust our thread pool in minutes."',
    commonConfusions: [
      'Circuit breaker vs retry: Retries try again hoping for success. A circuit breaker stops trying entirely when failure is likely — preventing wasted resources. Use both together.',
      'The three states — closed (normal flow), open (all requests fail fast), half-open (testing recovery) — are the opposite of what you might expect. "Closed" means the circuit is flowing normally.',
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
      'Command Query Responsibility Segregation (CQRS) splits a system into two separate models: a command (write) model optimized for processing changes, and a query (read) model optimized for serving data. Each side has its own store, schema, and scaling strategy, synchronized via events.',
    whyItMatters:
      'Most systems have vastly different read and write patterns. CQRS lets you scale reads and writes independently, optimize each model for its workload (normalized for writes, denormalized for reads), and use the best database technology for each side.',
    analogy:
      'Like a restaurant with a separate kitchen (write side) and dining room menu board (read side). The kitchen processes orders and updates the menu board asynchronously. Each is optimized for its audience.',
    soundsSmartToSay:
      '"CQRS lets us use a relational database for transactional writes and Elasticsearch for the read model — we get ACID guarantees on writes and sub-millisecond full-text search on reads."',
    commonConfusions: [
      'CQRS does not require event sourcing, and event sourcing does not require CQRS — though they pair well together.',
      'Eventual consistency is the main tradeoff: after a write, the read model may take milliseconds to seconds to update. If your UI must show the write result immediately, you need strategies like optimistic UI updates.',
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
      'Poor API documentation is the number one complaint developers have about integrations. An OpenAPI spec eliminates ambiguity — both humans and machines can read it. It enables design-first API development and drastically reduces integration time.',
    analogy:
      'Like a building blueprint filed with the city. Architects (API designers) create the blueprint before construction. Contractors (developers) build from it, and inspectors (tests) validate against it.',
    soundsSmartToSay:
      '"Let\'s adopt a spec-first workflow — define the OpenAPI contract before writing code, so frontend and backend teams can work in parallel and we catch breaking changes in CI with contract tests."',
    commonConfusions: [
      'Swagger vs OpenAPI: Swagger was the original name. When the spec was donated to the Linux Foundation in 2015, it was renamed OpenAPI. "Swagger" now refers to the tooling (Swagger UI, Swagger Editor).',
      'An OpenAPI spec is a contract, not just documentation. Use it for automated contract testing in CI — if the implementation drifts from the spec, the tests fail.',
    ],
    relatedTerms: ['Swagger UI', 'REST', 'API Contract', 'Postman'],
  },
  {
    id: 'int-saga',
    domain: 'integration',
    title: 'Saga Pattern',
    subtitle: 'Distributed transactions without a global lock',
    difficulty: 'advanced',
    tags: ['distributed systems', 'transactions', 'microservices'],
    definition:
      'A saga is a sequence of local transactions where each step publishes an event or message to trigger the next. If a step fails, compensating transactions undo the previous steps. Two styles: choreography (each service reacts to events, no coordinator) and orchestration (a central saga orchestrator commands each service). Sagas replace two-phase commit (2PC) for distributed transactions.',
    whyItMatters:
      'In a microservices architecture, business operations often span multiple services and databases. You can\'t use a database transaction across service boundaries. Without sagas, you get partial updates — money debited but order not created, inventory reserved but payment not charged.',
    analogy:
      'Like booking a vacation package — you book the flight, hotel, and car rental in sequence. If the car is unavailable, you cancel the hotel and flight in reverse order. Each booking (local transaction) succeeds or fails independently, but the overall trip either fully succeeds or everything is cancelled.',
    soundsSmartToSay:
      '"The order flow spans three services — we need a saga here. If the payment service fails after inventory is reserved, the choreography should trigger a compensating transaction to release the reserved stock."',
    commonConfusions: [
      'Sagas do not provide full ACID isolation. Between steps, intermediate states are visible — a saga is an eventual consistency pattern.',
      'Choreography (event-driven) and orchestration (command-driven) are both valid. Choreography scales better; orchestration is easier to debug and monitor.',
    ],
    relatedTerms: ['Event-Driven Architecture', 'Distributed Transactions', 'CQRS', 'Eventual Consistency'],
  },
  {
    id: 'int-event-streaming',
    domain: 'integration',
    title: 'Event Streaming (Kafka)',
    subtitle: 'A persistent, replayable log of events for real-time integration',
    difficulty: 'intermediate',
    tags: ['Kafka', 'streaming', 'real-time'],
    definition:
      'Event streaming platforms like Apache Kafka store events in durable, ordered, partitioned logs called topics. Unlike traditional queues (where messages are deleted after consumption), events in Kafka are retained for a configurable period. Multiple consumer groups can read the same events independently, and consumers can replay from any offset in history.',
    whyItMatters:
      'Kafka has become the data backbone of many large systems — it decouples dozens of producers and consumers, enables real-time analytics by replaying events into data warehouses, and provides exactly the data durability and ordering guarantees that complex integrations need. It handles millions of events per second with sub-10ms latency.',
    analogy:
      'Like a printed newspaper archive — each edition (event) is printed once and stored in a library (topic). Any reader (consumer group) can check out any issue independently and read from any date. The archive grows continuously; old issues are eventually discarded based on retention policy.',
    soundsSmartToSay:
      '"Kafka\'s consumer group model means we can add a new analytics pipeline that reads the same order events as our inventory service without touching either system — zero-coupling integration at scale."',
    commonConfusions: [
      'Kafka is not a traditional message queue. Messages are not deleted after consumption; multiple consumer groups can read the same topic independently. This is the key difference enabling replay and fan-out.',
      'Kafka ordering guarantees are per-partition, not per-topic. Events within a partition are ordered; events across partitions are not. Partition key selection is critical for correctness in ordering-sensitive workflows.',
    ],
    relatedTerms: ['Message Queue', 'Event-Driven Architecture', 'Consumer Group', 'Schema Registry'],
  },
  {
    id: 'int-dead-letter-queue',
    domain: 'integration',
    title: 'Dead Letter Queue (DLQ)',
    subtitle: 'A safety net for messages that can\'t be processed',
    difficulty: 'intermediate',
    tags: ['reliability', 'error handling', 'queues'],
    definition:
      'A Dead Letter Queue (DLQ) is a secondary queue where messages are routed when they fail processing after a maximum number of retry attempts. Instead of losing failed messages or blocking the main queue, they are preserved in the DLQ for investigation, reprocessing, or alerting.',
    whyItMatters:
      'Without a DLQ, a "poison pill" message that consistently causes processing errors blocks the entire queue or is silently dropped. A DLQ preserves the failed message, isolates it from healthy messages, and gives operators visibility into integration failures so they can diagnose the root cause.',
    analogy:
      'Like a postal return-to-sender process — if a package cannot be delivered after several attempts (wrong address, door always locked), it goes to the undeliverable mail facility (DLQ) rather than being discarded. Postal workers can then inspect it, correct the address, and redeliver.',
    soundsSmartToSay:
      '"We need DLQ alerts configured — a message landing in the dead letter queue is a silent failure today. An alarm on DLQ depth will tell us about integration failures before the business reports data gaps."',
    commonConfusions: [
      'A DLQ is not a substitute for proper error handling. Messages should only reach the DLQ after legitimate retry attempts. If your DLQ is full, the root cause is upstream — the DLQ is a symptom, not the problem.',
      'DLQ messages require manual or automated remediation. Periodically review, fix, and replay DLQ messages or the backlog grows indefinitely — a DLQ that\'s never drained provides only illusory reliability.',
    ],
    relatedTerms: ['Message Queue', 'Retry Pattern', 'Error Handling', 'SQS'],
  },
  {
    id: 'int-outbox-pattern',
    domain: 'integration',
    title: 'Transactional Outbox Pattern',
    subtitle: 'Guaranteeing exactly-once event publishing with database transactions',
    difficulty: 'advanced',
    tags: ['reliability', 'distributed systems', 'consistency'],
    definition:
      'The transactional outbox pattern solves the dual-write problem — atomically writing to a database and publishing an event. Instead of writing to the DB and then to Kafka (two separate operations that can partially fail), you write the event to an "outbox" table in the same database transaction. A separate relay process reads the outbox and publishes events to the message broker, guaranteeing no event is lost even if the process crashes.',
    whyItMatters:
      'Distributed systems fail in partial ways. If you write to your database and then publish to Kafka, the write can succeed and the publish can fail — leaving your event consumers out of sync. The outbox pattern makes event publication atomic with the database write, eliminating an entire class of consistency bugs.',
    analogy:
      'Like writing a check and putting it in an outbox on your desk — the transaction (check amount, recipient) is committed when you write it. A mail carrier (relay process) periodically picks up the outbox and delivers checks to the bank. Even if you\'re temporarily unavailable, the check is already written and will be delivered.',
    soundsSmartToSay:
      '"We have a race condition between our database commit and Kafka publish — the transactional outbox pattern would give us atomic event publication. Debezium can CDC the outbox table directly to Kafka without application changes."',
    commonConfusions: [
      'The outbox pattern guarantees at-least-once delivery, not exactly-once. The relay may publish the same event twice (if it crashes between publishing and marking as processed). Consumers must still be idempotent.',
      'Change Data Capture (CDC) tools like Debezium can automatically relay the outbox to Kafka by tailing the database transaction log, removing the need to write a custom relay process.',
    ],
    relatedTerms: ['Change Data Capture', 'Kafka', 'Idempotency', 'Dual-Write Problem'],
  },
  {
    id: 'int-change-data-capture',
    domain: 'integration',
    title: 'Change Data Capture (CDC)',
    subtitle: 'Streaming database changes as events in real time',
    difficulty: 'intermediate',
    tags: ['data integration', 'Debezium', 'streaming'],
    definition:
      'Change Data Capture (CDC) tracks and streams every insert, update, and delete in a database by reading the database\'s transaction log (WAL in PostgreSQL, binlog in MySQL) rather than polling with queries. Tools like Debezium capture these changes and publish them to Kafka topics, enabling real-time integration without modifying the source application.',
    whyItMatters:
      'Traditional ETL jobs run on schedules — hourly or nightly — creating data that is always stale. CDC delivers changes within milliseconds of when they occur. It enables zero-downtime database migrations, real-time analytics, maintaining read replicas in different databases, and the outbox pattern.',
    analogy:
      'Like a bank statement with every transaction listed chronologically versus checking your balance once a day. The balance (polling) tells you where you are; the transaction log (CDC) tells you every change that got you there — in real time.',
    soundsSmartToSay:
      '"CDC from our PostgreSQL WAL into Kafka gives us a real-time event stream from our existing application without any code changes — every database write becomes an event that downstream services can consume."',
    commonConfusions: [
      'CDC reads from the transaction log, which means it captures every change the database makes — even changes made by tools, migrations, or direct SQL — not just what the application writes through its ORM.',
      'CDC does not replace traditional ETL for historical data loads. CDC is for ongoing change propagation; you still need a bulk initial load before CDC takes over.',
    ],
    relatedTerms: ['Debezium', 'Kafka', 'ETL', 'Outbox Pattern'],
  },
  {
    id: 'int-service-mesh',
    domain: 'integration',
    title: 'Service Mesh',
    subtitle: 'Infrastructure layer for service-to-service communication',
    difficulty: 'advanced',
    tags: ['microservices', 'Istio', 'observability'],
    definition:
      'A service mesh (Istio, Linkerd, Consul Connect) deploys a sidecar proxy alongside every service instance and routes all network traffic through it. The mesh handles mutual TLS (mTLS) between services, load balancing, retries, circuit breaking, distributed tracing, and traffic policies — all without application code changes.',
    whyItMatters:
      'In a microservices architecture with dozens of services, implementing retries, mTLS, and tracing in each service independently is expensive and inconsistent. A service mesh handles all of this at the infrastructure layer, giving platform teams centralized control over how services communicate.',
    analogy:
      'Like a phone system\'s switching infrastructure versus two-tin-can telephones. The switching infrastructure (service mesh) handles call routing, encryption, quality monitoring, and billing for all calls. Each phone (service) just needs to talk; the infrastructure handles everything in between.',
    soundsSmartToSay:
      '"A service mesh gives us mTLS between every service pair without application changes — we get encryption in transit and service identity verification for free, which directly satisfies our zero trust requirements."',
    commonConfusions: [
      'Service mesh vs API gateway: An API gateway handles traffic entering your system from outside (north-south). A service mesh handles traffic between services inside your system (east-west). They complement each other.',
      'Service meshes add latency and operational complexity. Not every microservices deployment needs a service mesh — start with application-level patterns (circuit breakers, retries) and adopt a mesh when the cross-cutting concerns become unmanageable.',
    ],
    relatedTerms: ['Istio', 'mTLS', 'Sidecar Proxy', 'Envoy'],
  },
  {
    id: 'int-etl',
    domain: 'integration',
    title: 'ETL vs ELT',
    subtitle: 'Extract, Transform, Load — or Load first, Transform later',
    difficulty: 'beginner',
    tags: ['data integration', 'pipelines', 'data warehouse'],
    definition:
      'ETL (Extract, Transform, Load) is the classic pattern: extract data from source systems, transform it (clean, join, aggregate) in an intermediate processing layer, then load the result into a destination. ELT (Extract, Load, Transform) reverses the last two steps — load raw data into the destination first, then use the destination\'s compute (usually a cloud data warehouse) to transform it.',
    whyItMatters:
      'ETL was designed when compute was expensive and storage was cheap — processing before loading reduced destination storage. ELT became dominant with cloud data warehouses (BigQuery, Snowflake, Redshift) that make computation cheap and allow transforming petabytes at scale. ELT preserves raw data for reprocessing; ETL discards it after transformation.',
    analogy:
      'ETL is like a commercial kitchen that chops, marinates, and cooks ingredients before plating. ELT is like a sushi restaurant that delivers whole, fresh fish to the kitchen (data warehouse) and lets the chef (SQL/dbt) prepare each dish to order.',
    soundsSmartToSay:
      '"We\'re using ETL with a traditional on-prem tool, but we\'ve moved to BigQuery — we should shift to ELT and dbt. Load raw data into a staging schema, then define transformations as SQL models that run inside BigQuery where compute is cheap."',
    commonConfusions: [
      'ETL and ELT both have the same data movement — the difference is where transformation happens. ETL transforms outside the destination (in Python, Spark, or a dedicated tool). ELT transforms inside the destination (in SQL).',
      'ELT does not mean skipping data quality. You still validate, clean, and test data — you just do it inside the destination using SQL-based tools (dbt) rather than before loading.',
    ],
    relatedTerms: ['Data Pipeline', 'dbt', 'Data Warehouse', 'Change Data Capture'],
  },
  {
    id: 'int-retry-backoff',
    domain: 'integration',
    title: 'Retry with Exponential Backoff',
    subtitle: 'Automatically recovering from transient failures without overwhelming the downstream',
    difficulty: 'intermediate',
    tags: ['reliability', 'resilience', 'fault tolerance'],
    definition:
      'Exponential backoff is a retry strategy where the wait time between attempts doubles after each failure — 1s, 2s, 4s, 8s — typically with a random jitter added to prevent synchronized retry storms. Combined with a maximum retry count and a circuit breaker, it enables automatic recovery from transient failures without overwhelming a struggling downstream service.',
    whyItMatters:
      'Transient failures (network blips, momentary service overload, database connection timeouts) are normal in distributed systems. A service that fails immediately and permanently on the first error is brittle. A service that retries with backoff automatically recovers from the vast majority of transient failures without human intervention.',
    analogy:
      'Like a crowded restaurant — if the first table is full, you wait 5 minutes and check again. If still full, you wait 10 minutes, then 20. You don\'t stand at the podium checking every 30 seconds (retry storm) or give up after the first "no" (no retry). Jitter means different groups spread their check-back times randomly so they don\'t all return at once.',
    soundsSmartToSay:
      '"We should add jitter to our retry backoff — if every client retries at exactly the same intervals, they\'ll all hit the recovering service simultaneously, creating a retry storm that knocks it back down."',
    commonConfusions: [
      'Retry is not a substitute for idempotency. If retrying a non-idempotent operation (like creating a payment) causes duplicate effects, retries make things worse. Ensure operations are idempotent before adding automatic retries.',
      'Infinite retries are dangerous. Always set a maximum retry count or a total timeout, then fall back to a circuit breaker or error response. An operation retrying for hours causes resource exhaustion.',
    ],
    relatedTerms: ['Circuit Breaker', 'Idempotency', 'Jitter', 'Transient Fault'],
  },
  {
    id: 'int-eventual-consistency',
    domain: 'integration',
    title: 'Eventual Consistency',
    subtitle: 'Data becomes consistent across all nodes — eventually',
    difficulty: 'intermediate',
    tags: ['distributed systems', 'consistency', 'CAP theorem'],
    definition:
      'Eventual consistency is a consistency model in distributed systems where updates to one node will eventually propagate to all other nodes, and all nodes will eventually have the same data — but there is no guarantee of when. In the interim, different nodes may return different values for the same data. This is the tradeoff made by many distributed systems to achieve high availability and partition tolerance.',
    whyItMatters:
      'The CAP theorem states that distributed systems can guarantee only two of: Consistency, Availability, Partition Tolerance. Most internet-scale systems choose availability + partition tolerance, accepting eventual consistency. Understanding this model prevents building systems that assume reads always return the latest write — a source of subtle, hard-to-reproduce bugs.',
    analogy:
      'Like news spreading in a city before smartphones — a major event happens downtown, and different neighborhoods hear about it at different times. Eventually everyone knows, but asking "what happened?" in different neighborhoods gives different answers for hours. Eventually, the whole city has the same information.',
    soundsSmartToSay:
      '"This read-after-write scenario will see stale data because our read model is eventually consistent — we need to either read from the write store immediately after the command, or use optimistic locking in the UI to show the user\'s changes locally."',
    commonConfusions: [
      'Eventual consistency does not mean data is permanently inconsistent or that conflicts are never resolved. It means the window of inconsistency is bounded — given no new updates, all replicas will converge.',
      'Strong consistency and eventual consistency exist on a spectrum. Systems like DynamoDB let you choose per-operation: eventually consistent reads (cheaper, possibly stale) or strongly consistent reads (more expensive, always current).',
    ],
    relatedTerms: ['CAP Theorem', 'CQRS', 'Distributed Systems', 'Replication Lag'],
  },
  {
    id: 'int-distributed-tracing',
    domain: 'integration',
    title: 'Distributed Tracing',
    subtitle: 'Following a request across microservices to find where latency lives',
    difficulty: 'intermediate',
    tags: ['observability', 'debugging', 'OpenTelemetry'],
    definition:
      'Distributed tracing tracks a single request as it flows through multiple services. Each service creates a span (a named, timed unit of work) and passes a trace ID in headers. All spans with the same trace ID are assembled into a trace — a timeline showing exactly where the request spent its time across every service in the chain.',
    whyItMatters:
      'When a request takes 2 seconds and passes through 10 services, you cannot find the bottleneck by checking each service\'s average latency. Distributed tracing shows the complete timeline: "Service A took 10ms, Service B took 1800ms, Service C took 10ms" — pinpointing Service B as the bottleneck in seconds.',
    analogy:
      'Like a flight itinerary with timestamps — you boarded in New York at 9:00, landed in Chicago at 10:30, boarded the connection at 11:15, landed in Denver at 1:00. If you arrived late, you can immediately see which leg caused the delay. A distributed trace is the itinerary for your API request\'s journey through your microservices.',
    soundsSmartToSay:
      '"We need to propagate trace context through our Kafka messages — right now our trace breaks at every async boundary and we can\'t correlate a user\'s HTTP request with the downstream events it triggers."',
    commonConfusions: [
      'Logs, metrics, and traces are complementary — not interchangeable. Logs tell you what happened, metrics tell you how much/often, traces tell you where time was spent. Full observability requires all three.',
      'OpenTelemetry is the vendor-neutral standard for distributed tracing instrumentation. It replaces proprietary SDKs (Zipkin, Jaeger client libraries) with a single instrumentation layer that exports to any backend.',
    ],
    relatedTerms: ['OpenTelemetry', 'Span', 'Trace ID', 'Observability'],
  },
  {
    id: 'int-correlation-id',
    domain: 'integration',
    title: 'Correlation ID',
    subtitle: 'A unique identifier that ties together all log entries for one request',
    difficulty: 'beginner',
    tags: ['observability', 'logging', 'debugging'],
    definition:
      'A correlation ID is a unique identifier (UUID) generated at the entry point of a request and propagated through every system and service it touches. Every log entry, database call, and downstream API request includes this ID, enabling you to trace all activity associated with a single user request across multiple services and log streams.',
    whyItMatters:
      'Without correlation IDs, debugging a failed user request means searching through thousands of log lines from multiple services hoping to find matching timestamps. With correlation IDs, you search for the single ID and get every related log entry from every service in one result set — turning a multi-hour debugging session into a five-minute query.',
    analogy:
      'Like a package tracking number — every step in the shipping chain (label printed, picked up, sorted, in transit, delivered) is recorded with the same tracking number. You type one number and see the complete journey. Without the tracking number, you\'d need to contact every warehouse and truck along the route.',
    soundsSmartToSay:
      '"We need to propagate correlation IDs through our Kafka messages and HTTP headers — right now we can see the upstream log and the downstream log, but we can\'t connect them without grepping for the same timestamp across six systems."',
    commonConfusions: [
      'Correlation ID vs trace ID: A correlation ID is typically passed by clients or generated at the API gateway and propagated. A trace ID is automatically managed by distributed tracing systems. They serve similar purposes; distributed tracing systems use trace IDs as their correlation mechanism.',
      'Correlation IDs must be propagated at every boundary — HTTP headers, message queue metadata, database audit fields, and log output. Missing it in any single hop breaks the chain.',
    ],
    relatedTerms: ['Distributed Tracing', 'Log Aggregation', 'Request ID', 'OpenTelemetry'],
  },
  {
    id: 'int-bulkhead',
    domain: 'integration',
    title: 'Bulkhead Pattern',
    subtitle: 'Isolating failures to prevent cascading resource exhaustion',
    difficulty: 'intermediate',
    tags: ['resilience', 'fault isolation', 'microservices'],
    definition:
      'The bulkhead pattern isolates resources (thread pools, connection pools, memory) per downstream dependency so that failures in one dependency cannot exhaust shared resources and take down the entire service. If the payment service is slow, its thread pool fills up and new payment requests fail fast — but the order service, search, and user profile endpoints continue operating normally from their separate thread pools.',
    whyItMatters:
      'Without bulkheads, a shared thread pool of 200 threads can be exhausted by 200 slow payment calls — leaving no threads available for checkout, search, or profile requests. The entire service appears down when only one dependency is struggling.',
    analogy:
      'Like watertight compartments in a ship hull — if one compartment floods (payment service is slow), bulkhead walls prevent water (blocked threads) from flooding all other compartments (other service capabilities). The ship stays afloat even with a flooded compartment.',
    soundsSmartToSay:
      '"We should configure separate Resilience4j thread pool bulkheads for each third-party integration — right now a slow inventory API can exhaust our shared executor and degrade the entire application."',
    commonConfusions: [
      'Bulkhead vs circuit breaker: A circuit breaker stops calling a failing service. A bulkhead limits how many resources a failing service can consume. Use both together — the circuit breaker stops calls, the bulkhead limits damage before it trips.',
      'Bulkheads have a cost: separate thread pools consume more memory and CPU context-switching overhead. Size them appropriately for the expected concurrency of each dependency rather than using the same defaults everywhere.',
    ],
    relatedTerms: ['Circuit Breaker', 'Thread Pool', 'Resilience4j', 'Fallback'],
  },
  {
    id: 'int-backpressure',
    domain: 'integration',
    title: 'Backpressure',
    subtitle: 'Slowing producers when consumers can\'t keep up',
    difficulty: 'intermediate',
    tags: ['streaming', 'flow control', 'reliability'],
    definition:
      'Backpressure is a flow control mechanism where a downstream consumer signals to an upstream producer that it is overwhelmed and the producer should slow down or stop sending data. Without backpressure, a fast producer will continuously send data to a slow consumer, filling memory buffers until the consumer crashes from out-of-memory errors.',
    whyItMatters:
      'In high-throughput systems, production and consumption rates are rarely perfectly matched. Without backpressure, a sudden traffic spike causes unbounded memory growth and eventual crash. With backpressure, the system degrades gracefully — slowing at the source rather than crashing at the sink.',
    analogy:
      'Like a highway on-ramp metering light — when the highway (consumer) is congested, the light (backpressure signal) slows the rate of cars entering (producer). Cars wait at the on-ramp rather than piling up on the highway itself.',
    soundsSmartToSay:
      '"Our Kafka consumer is falling behind during batch processing windows — we need backpressure so the upstream producer pauses rather than growing the partition lag unboundedly and risking log retention cutoff."',
    commonConfusions: [
      'Backpressure is not the same as rate limiting. Rate limiting is imposed by the producer to protect itself. Backpressure is a signal from the consumer to the producer to slow down — it flows upstream.',
      'Reactive programming frameworks (RxJava, Project Reactor, Akka Streams) have built-in backpressure support. Standard HTTP does not have backpressure — the consumer must signal overload via rate limit responses or connection management.',
    ],
    relatedTerms: ['Flow Control', 'Kafka', 'Reactive Streams', 'Rate Limiting'],
  },
  {
    id: 'int-consumer-driven-contracts',
    domain: 'integration',
    title: 'Consumer-Driven Contract Testing',
    subtitle: 'Letting API consumers define the contract, not just the provider',
    difficulty: 'advanced',
    tags: ['testing', 'API contracts', 'Pact'],
    definition:
      'Consumer-driven contract testing is a testing approach where each consumer of an API defines the expectations it has of the provider (which endpoints it calls, what fields it needs, what response shapes it expects). These expectations become "contracts" that the provider must satisfy. Tools like Pact run these contracts against the provider in CI, catching breaking changes before deployment.',
    whyItMatters:
      'In a microservices organization, one team\'s API change can break another team\'s service — and integration issues are only discovered in staging or production. Consumer-driven contracts shift that discovery to the CI pipeline, where the provider\'s tests include every consumer\'s contract. A breaking API change fails the contract test before it ever reaches shared environments.',
    analogy:
      'Like a tenant drawing up a lease specifying exactly what they need from the landlord (reliable heat, working appliances, safe locks). The landlord must satisfy these specifications before renting. If they change something (remove the dishwasher), they must check whether any tenant\'s contract requires it first.',
    soundsSmartToSay:
      '"We\'re adding Pact contracts for our mobile client\'s API calls — the API team will run consumer contracts in their CI, so any breaking change they introduce will fail their own build before it reaches our integration environment."',
    commonConfusions: [
      'Consumer-driven contracts are not end-to-end tests. They test the interface contract between two services in isolation — not the full system. They are faster, more reliable, and catch API compatibility issues earlier than E2E tests.',
      'Provider tests run consumer contracts against the actual provider service. Consumer tests generate the contract document. The contract is the shared artifact that connects both sides.',
    ],
    relatedTerms: ['Pact', 'API Versioning', 'OpenAPI', 'Integration Testing'],
  },
  {
    id: 'int-websocket',
    domain: 'integration',
    title: 'WebSocket',
    subtitle: 'Full-duplex real-time communication over a persistent connection',
    difficulty: 'intermediate',
    tags: ['real-time', 'protocol', 'bidirectional'],
    definition:
      'WebSocket is a protocol that establishes a persistent, full-duplex connection between client and server over a single TCP connection. After the initial HTTP handshake, either side can send messages at any time — unlike HTTP where the client must initiate every request. WebSockets are the standard for real-time applications: chat, live dashboards, collaborative editing, and gaming.',
    whyItMatters:
      'HTTP polling to simulate real-time (check for updates every second) wastes bandwidth and creates latency. Server-Sent Events (SSE) allow server-to-client streaming but not bidirectional communication. WebSockets enable true real-time, bidirectional communication — the server pushes updates the moment they occur without waiting for a client request.',
    analogy:
      'Like the difference between sending letters (HTTP) and having a phone call (WebSocket). Letters require one party to initiate each exchange, and there\'s a delay. A phone call lets both parties speak whenever they want through a persistent connection.',
    soundsSmartToSay:
      '"Our live collaboration feature should use WebSockets rather than polling — at 500 active users polling every 2 seconds, we\'re generating 1,500 requests/minute of mostly empty responses. A WebSocket connection only sends data when something actually changes."',
    commonConfusions: [
      'WebSocket vs HTTP/2 Server Push: HTTP/2 allows the server to push resources proactively, but it is still request-response at the application layer. WebSocket is a completely different protocol with true bidirectional messaging.',
      'WebSocket connections are persistent, which changes your infrastructure requirements. Load balancers need sticky sessions (or WebSocket-aware routing), and connection counts affect server capacity differently than stateless HTTP.',
    ],
    relatedTerms: ['HTTP', 'Server-Sent Events', 'Real-Time', 'Socket.io'],
  },
  {
    id: 'int-ipaas',
    domain: 'integration',
    title: 'iPaaS (Integration Platform as a Service)',
    subtitle: 'Cloud-hosted integration hub connecting SaaS and enterprise systems',
    difficulty: 'intermediate',
    tags: ['integration', 'SaaS', 'no-code'],
    definition:
      'iPaaS platforms (MuleSoft Anypoint, Boomi, Workato, Zapier, Tray.io) provide cloud-hosted environments for building and managing integrations between SaaS applications, APIs, and on-premises systems. They offer pre-built connectors (Salesforce, Slack, SAP, Jira), visual workflow builders, data transformation tools, and monitoring — reducing integration from months of custom development to days or weeks.',
    whyItMatters:
      'Enterprise integration involves dozens of SaaS tools, each with its own API, authentication, and data model. Building and maintaining custom point-to-point integrations for every pair of tools is unsustainable. iPaaS provides a managed platform with pre-built connectors, so integrations can be built and maintained without deep engineering effort.',
    analogy:
      'Like a universal remote control for enterprise software — instead of programming separate remotes for every device, you configure one platform that speaks the protocol of every device in your house (Salesforce, Workday, SAP, Slack). Adding a new device (new SaaS tool) means selecting a pre-built connector, not writing driver code from scratch.',
    soundsSmartToSay:
      '"For the Salesforce-to-NetSuite sync, we should use our iPaaS platform — building a custom integration would take two sprints and we\'d own the maintenance. A pre-built connector in Workato takes a day and the vendor maintains the Salesforce API updates."',
    commonConfusions: [
      'iPaaS vs ESB: iPaaS is cloud-native, SaaS-friendly, and easier to use. Traditional ESBs are on-premises, heavyweight, and require developer expertise. Many enterprises are migrating from ESB to iPaaS as they move to the cloud.',
      'Enterprise iPaaS (MuleSoft, Boomi) vs citizen integrator tools (Zapier, Make): Enterprise tools support complex transformations, enterprise security, and high volume. Citizen tools are drag-and-drop friendly but hit limits with complex business logic.',
    ],
    relatedTerms: ['ESB', 'API Gateway', 'ETL', 'SaaS Integration'],
  },
  {
    id: 'int-load-shedding',
    domain: 'integration',
    title: 'Load Shedding',
    subtitle: 'Deliberately dropping low-priority requests to protect the system',
    difficulty: 'advanced',
    tags: ['reliability', 'resilience', 'capacity'],
    definition:
      'Load shedding is the intentional rejection of requests when a system is overloaded — prioritizing high-value traffic over low-value traffic to maintain service quality for the most important users and use cases. Rather than serving all requests equally poorly, load shedding serves the most critical requests well and explicitly fails the rest.',
    whyItMatters:
      'Without load shedding, a traffic spike degrades all users equally until everything fails. With load shedding, you can protect revenue-generating transactions (checkout, payments) by shedding non-critical traffic (analytics pings, recommendation prefetch) during peak load.',
    analogy:
      'Like an ER triage during a mass casualty event — the hospital cannot treat everyone at full quality simultaneously, so they prioritize by severity. Critical patients receive full care; stable patients wait or are redirected. This controlled prioritization saves more lives than attempting to treat everyone with degraded quality.',
    soundsSmartToSay:
      '"During our Black Friday peak, we should enable automatic load shedding for non-authenticated browse requests — a 5% conversion improvement from protecting checkout latency is worth the degraded experience for window shoppers."',
    commonConfusions: [
      'Load shedding is different from rate limiting. Rate limiting limits per-client request rates (preventing abuse). Load shedding limits total system load during capacity crises (protecting overall health). Both are needed.',
      'Load shedding requires prioritization logic — knowing which requests are critical and which are sheddable. Implementing this poorly (shedding auth requests) defeats the purpose and makes the outage worse.',
    ],
    relatedTerms: ['Rate Limiting', 'Backpressure', 'Circuit Breaker', 'Graceful Degradation'],
  },
  {
    id: 'int-graphql-federation',
    domain: 'integration',
    title: 'GraphQL Federation',
    subtitle: 'Composing multiple GraphQL APIs into a single unified graph',
    difficulty: 'advanced',
    tags: ['GraphQL', 'microservices', 'API composition'],
    definition:
      'GraphQL Federation (pioneered by Apollo) allows separate teams to own separate GraphQL subgraphs that are composed into a single unified supergraph at a federation gateway. Each service defines its slice of the schema and its types, while the gateway merges them — enabling clients to query across service boundaries with a single request without knowing about the underlying service topology.',
    whyItMatters:
      'A single GraphQL schema for a large organization becomes a bottleneck — all teams modify the same schema, creating conflicts and coordination overhead. Federation lets teams own their schemas independently while providing clients with a unified API. Netflix, Airbnb, and Twitter use federation to scale GraphQL across hundreds of teams.',
    analogy:
      'Like a shopping mall directory — each store (subgraph) maintains its own inventory, but the mall directory (gateway) presents a unified "find any product in any store" interface. You don\'t need to visit each store to search; the directory routes your query to the right store.',
    soundsSmartToSay:
      '"The user service owns the User type and the order service can extend it with order history — that\'s federation\'s type extension feature. Clients get a single unified User object with fields from both services in one query."',
    commonConfusions: [
      'Federation is for organizations with multiple teams, each owning separate GraphQL services. A single-team project with one GraphQL service does not need federation complexity.',
      'GraphQL Federation vs schema stitching: Schema stitching is an older approach that manually merges schemas at the gateway. Federation has each service declare its own slice with explicit ownership, making it more scalable and maintainable.',
    ],
    relatedTerms: ['GraphQL', 'API Gateway', 'Microservices', 'Apollo'],
  },
  {
    id: 'int-async-vs-sync',
    domain: 'integration',
    title: 'Synchronous vs Asynchronous Communication',
    subtitle: 'Request-response vs fire-and-forget — choosing the right integration style',
    difficulty: 'beginner',
    tags: ['architecture', 'patterns', 'coupling'],
    definition:
      'Synchronous communication (REST, gRPC) means the caller waits for a response before continuing — tightly coupling availability and latency between services. Asynchronous communication (message queues, event streams) means the caller sends a message and continues immediately, decoupling the producer from the consumer in time and space.',
    whyItMatters:
      'Choosing the wrong communication style creates brittle integrations. Synchronous calls propagate latency and failures upstream — a slow service makes every caller slow. Async decouples services but complicates the response pattern (you need callbacks or polling to get results). The right choice depends on whether the caller needs an immediate result.',
    analogy:
      'Synchronous is a phone call — you wait on the line until the other person responds before you can continue. Asynchronous is an email — you send it and continue your day; you\'ll get a response eventually. Use a phone call when you need an immediate answer; use email when you don\'t.',
    soundsSmartToSay:
      '"The order confirmation email doesn\'t need to block the checkout response — that\'s a perfect async use case. Decouple the email send via a queue and the user gets their confirmation page immediately while the email sends in the background."',
    commonConfusions: [
      'Async communication does not mean "slow." Kafka consumers can process messages in milliseconds. The key difference is the caller doesn\'t block waiting for a response — not that the response is delayed.',
      'Request-reply over async is possible — send a message to a request queue, include a reply-to queue, and wait for a response on that queue. But if you need a synchronous result, synchronous protocols are usually simpler.',
    ],
    relatedTerms: ['Message Queue', 'REST API', 'Event-Driven Architecture', 'Decoupling'],
  },
  {
    id: 'int-api-versioning-strategy',
    domain: 'integration',
    title: 'API Versioning Strategy',
    subtitle: 'Evolving APIs without breaking the consumers who depend on them',
    difficulty: 'intermediate',
    tags: ['API design', 'backward compatibility', 'lifecycle'],
    definition:
      'API versioning strategy defines how changes to an API are communicated and managed over time. Common approaches: URL versioning (/v1/users, /v2/users), header versioning (Accept: application/vnd.api.v2+json), and query parameter versioning (?version=2). Additive-only changes (new optional fields, new endpoints) can be made without a version bump; breaking changes (removing fields, changing types) require a new version.',
    whyItMatters:
      'APIs are contracts with consumers. Breaking a contract forces all consumers to update simultaneously — expensive coordination that slows teams. A clear versioning strategy signals change impact, provides migration windows, and enables consumers to upgrade on their own schedule.',
    analogy:
      'Like publishing a new edition of a technical standard. The new edition (v2) is published alongside the old (v1). Existing systems continue using v1 with no changes required. New systems adopt v2. After a defined sunset period, v1 is deprecated and retired.',
    soundsSmartToSay:
      '"We should add a sunset header to our v1 endpoints indicating the deprecation date — consumers get clear notice in the response headers, and we can track who\'s still on v1 by monitoring header adoption before we cut over."',
    commonConfusions: [
      'Backward-compatible changes do not require version bumps. Adding new optional response fields or new endpoints is additive and safe — existing consumers ignore fields they don\'t understand.',
      'API versioning is not the same as software versioning. Software uses semver (1.2.3). APIs typically just use a major version number (v1, v2) because minor and patch changes should be backward-compatible.',
    ],
    relatedTerms: ['Backward Compatibility', 'Deprecation', 'Sunset Header', 'OpenAPI'],
  },
];
