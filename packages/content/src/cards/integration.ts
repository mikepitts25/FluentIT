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
];
