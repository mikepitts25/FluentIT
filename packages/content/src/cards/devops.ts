import type { Card } from '../types';

export const devopsCards: Card[] = [
  {
    id: 'devops-cicd',
    domain: 'devops',
    title: 'CI/CD',
    subtitle: 'Continuous Integration / Continuous Delivery',
    difficulty: 'beginner',
    tags: ['automation', 'pipeline', 'deployment'],
    definition:
      'CI/CD is the practice of automatically building, testing, and deploying code every time a developer pushes a change. CI catches integration bugs early; CD automates the path to production.',
    whyItMatters:
      'Manual deployments are slow, inconsistent, and error-prone. CI/CD lets teams ship dozens of changes per day with confidence because each change is tested automatically before it reaches users.',
    analogy:
      'Like an assembly line with quality checks at every station — a car part is tested before the next station touches it, so defects are caught early and never reach the end of the line.',
    soundsSmartToSay:
      '"If the pipeline is not green, nothing ships — CI/CD is the gate that protects production quality."',
    commonConfusions: [
      'CD (Delivery) vs CD (Deployment): Continuous Delivery means code is always ready to deploy but a human presses go. Continuous Deployment means it ships automatically — no human in the loop.',
      'CI/CD is not just Jenkins: Modern pipelines run in GitHub Actions, GitLab CI, CircleCI, Tekton, ArgoCD — the tool matters less than the practice.',
    ],
    relatedTerms: ['GitOps', 'Artifact Registry', 'Pipeline', 'Blue-Green Deployment'],
  },
  {
    id: 'devops-kubernetes',
    domain: 'devops',
    title: 'Kubernetes',
    subtitle: 'Container orchestration at scale',
    difficulty: 'intermediate',
    tags: ['containers', 'orchestration', 'k8s'],
    definition:
      'Kubernetes (k8s) is an open-source platform that automates deploying, scaling, and managing containerized applications. It schedules containers across a cluster of machines and handles failures automatically.',
    whyItMatters:
      'Running one container on one server is easy. Running thousands of containers across hundreds of servers — with self-healing, load balancing, and zero-downtime updates — is what Kubernetes handles.',
    analogy:
      'Like an air traffic controller for containers: it knows which runway (server) has capacity, routes traffic to the right planes (containers), and reroutes automatically if a runway closes.',
    soundsSmartToSay:
      '"We need to look at our resource requests and limits — pods are getting OOMKilled because we\'re not setting memory bounds correctly."',
    commonConfusions: [
      'Kubernetes vs Docker: Docker builds and runs individual containers. Kubernetes orchestrates many containers across many machines. They work together.',
      'Pod vs container: A pod is the smallest deployable unit in k8s and wraps one or more containers. Think of a pod as a container host.',
    ],
    relatedTerms: ['Pod', 'Helm', 'Ingress', 'Service Mesh'],
  },
  {
    id: 'devops-iac',
    domain: 'devops',
    title: 'Infrastructure as Code',
    subtitle: 'Manage infrastructure through version-controlled files',
    difficulty: 'beginner',
    tags: ['terraform', 'automation', 'provisioning'],
    definition:
      'IaC means defining and managing infrastructure (servers, networks, databases, DNS) through code files that are version-controlled, reviewed, and applied automatically — just like application code.',
    whyItMatters:
      'Manual infrastructure is inconsistent, hard to audit, and impossible to reproduce exactly. IaC means your production and staging environments are identical, and every change is tracked in git.',
    analogy:
      'Like having blueprints for a building that are version-controlled. Any change to the building is first a change to the blueprint, reviewed by an architect, then applied by automated construction.',
    soundsSmartToSay:
      '"If it\'s not in Terraform, it doesn\'t exist — we can\'t have snowflake infrastructure that only one person knows how to configure."',
    commonConfusions: [
      'Terraform vs Ansible: Terraform provisions infrastructure (create a server, VPC, database). Ansible configures software on existing infrastructure. Both are IaC tools but for different layers.',
      'IaC is not just cloud: IaC tools like Terraform manage on-prem VMware, Kubernetes clusters, DNS records, and SaaS configuration — not just cloud resources.',
    ],
    relatedTerms: ['Terraform', 'Ansible', 'GitOps', 'Idempotent'],
  },
  {
    id: 'devops-gitops',
    domain: 'devops',
    title: 'GitOps',
    subtitle: 'Git as the single source of truth for operations',
    difficulty: 'intermediate',
    tags: ['git', 'automation', 'deployment'],
    definition:
      'GitOps is an operational model where the desired state of your infrastructure and deployments is declared in a git repository. An automated operator continuously reconciles the live system to match what is in git.',
    whyItMatters:
      'Any change to production goes through a git PR — meaning it is reviewed, audited, and reversible with a git revert. Drift detection catches unauthorized manual changes automatically.',
    analogy:
      "Like a building where the blueprints (git) are the only authority. If the physical building doesn't match the blueprints, the automated crew immediately fixes it — no one can make unofficial changes.",
    soundsSmartToSay:
      '"With GitOps, git history is our audit log — we know exactly who changed what in production and can roll back with a revert."',
    commonConfusions: [
      'GitOps vs CI/CD: CI/CD pushes changes out. GitOps pulls changes in — a controller in the cluster watches the git repo and applies changes. The direction of the flow is different.',
      'ArgoCD and Flux are the main GitOps controllers for Kubernetes — GitOps is a pattern, these are the implementations.',
    ],
    relatedTerms: ['ArgoCD', 'Flux', 'CI/CD', 'Reconciliation Loop'],
  },
  {
    id: 'devops-observability',
    domain: 'devops',
    title: 'Observability',
    subtitle: 'Metrics, logs, and traces — the three pillars',
    difficulty: 'beginner',
    tags: ['monitoring', 'telemetry', 'SRE'],
    definition:
      'Observability is the ability to understand the internal state of a system from its external outputs — specifically through three signals: metrics (numbers over time), logs (timestamped events), and traces (request paths across services).',
    whyItMatters:
      'In distributed systems, bugs hide between services. Observability lets you ask arbitrary questions about production behavior — not just alert on thresholds you thought of in advance.',
    analogy:
      'Like the instrumentation in a cockpit — not just a warning light when something fails, but continuous data on every system so pilots can diagnose and act before a failure becomes a crash.',
    soundsSmartToSay:
      '"Monitoring tells you when something is broken. Observability tells you why — we need distributed tracing to follow requests across all our microservices."',
    commonConfusions: [
      'Monitoring vs observability: Monitoring is about known unknowns (alerts you defined). Observability is about unknown unknowns — exploring behavior you didn\'t anticipate.',
      'OpenTelemetry (OTel) is now the standard for instrumentation — it produces metrics, logs, and traces in a vendor-neutral format.',
    ],
    relatedTerms: ['Prometheus', 'Jaeger', 'OpenTelemetry', 'SLO'],
  },
  {
    id: 'devops-sre',
    domain: 'devops',
    title: 'SRE',
    subtitle: 'Site Reliability Engineering',
    difficulty: 'beginner',
    tags: ['reliability', 'SLO', 'incident'],
    definition:
      "SRE is Google's approach to running production systems — treating operations as a software engineering problem. SREs write code to automate operations, define SLOs (reliability targets), and manage error budgets.",
    whyItMatters:
      'SRE gives reliability a quantifiable target. Error budgets create a productive tension: if reliability is good, teams can ship faster. If reliability is suffering, they slow down and fix it.',
    analogy:
      "Like a manufacturing quality engineer who doesn't just inspect products but redesigns the production line to prevent defects — and tracks defect rates with a strict monthly quota.",
    soundsSmartToSay:
      '"We need to define our SLOs before we can set meaningful alerts — alerting on everything just creates noise."',
    commonConfusions: [
      'SRE vs DevOps: DevOps is a cultural philosophy. SRE is a specific implementation of that philosophy with defined practices and roles, originally from Google.',
      'SLO vs SLA: An SLO is an internal target (99.9% availability). An SLA is a contractual commitment to customers with financial penalties if missed. SLOs should always be stricter than SLAs.',
    ],
    relatedTerms: ['SLO', 'SLA', 'Error Budget', 'Toil'],
  },
  {
    id: 'devops-docker',
    domain: 'devops',
    title: 'Containers',
    subtitle: 'Lightweight, portable application packaging',
    difficulty: 'beginner',
    tags: ['docker', 'packaging', 'isolation'],
    definition:
      'A container packages an application and all its dependencies (libraries, config, runtime) into a portable unit that runs identically on any machine — development laptop, CI server, or production cluster.',
    whyItMatters:
      '"Works on my machine" is eliminated. Containers ensure the exact same software runs everywhere, making deployments predictable and environment drift impossible.',
    analogy:
      'Like a shipping container — standardized dimensions, works on any ship/truck/crane. The contents are isolated from each other and the carrier does not care what is inside.',
    soundsSmartToSay:
      '"The container image is immutable — if we need a config change, we rebuild and redeploy, we don\'t SSH in and edit files."',
    commonConfusions: [
      'Containers vs VMs: A VM virtualizes an entire computer including the OS. A container shares the host OS kernel and only virtualizes the application layer — much lighter and faster to start.',
      'Docker vs containers: Docker is the most common tool for building and running containers, but the container standard (OCI) is open — Podman, containerd, and others run the same images.',
    ],
    relatedTerms: ['Docker', 'Kubernetes', 'OCI', 'Image Registry'],
  },
  {
    id: 'devops-blue-green',
    domain: 'devops',
    title: 'Blue-Green Deployment',
    subtitle: 'Zero-downtime releases via traffic switching',
    difficulty: 'intermediate',
    tags: ['deployment', 'availability', 'rollback'],
    definition:
      'Blue-green deployment runs two identical production environments (blue = live, green = new version). The new version is deployed to green, tested, then traffic is switched instantly. Rollback means switching back to blue.',
    whyItMatters:
      'Traditional deployments cause downtime during the update. Blue-green means users never see the transition — and if the new version has a problem, rollback is a single traffic switch, not a redeployment.',
    analogy:
      "Like switching a train from one track to another at a junction — passengers don't feel a thing, and if the new track has a problem, you switch them back instantly.",
    soundsSmartToSay:
      '"With blue-green, our rollback time is seconds, not the 20 minutes it takes to redeploy the old version."',
    commonConfusions: [
      'Blue-green vs canary: Blue-green switches all traffic at once. Canary releases send a small percentage of traffic (say 5%) to the new version first to test it before full rollout.',
      'Database migrations are the hard part of blue-green — the new code must be able to read the old schema and vice versa during the switchover window.',
    ],
    relatedTerms: ['Canary Release', 'Feature Flags', 'Load Balancer', 'Rollback'],
  },
  {
    id: 'devops-canary-deployments',
    domain: 'devops',
    title: 'Canary Deployments',
    subtitle: 'Gradually rolling out changes to a subset of users',
    difficulty: 'intermediate',
    tags: ['deployment', 'risk-mitigation', 'traffic-management'],
    definition:
      'A canary deployment routes a small percentage of production traffic (e.g., 5%) to the new version of a service while the majority continues hitting the stable version. If metrics stay healthy, traffic is gradually shifted until the new version receives 100%.',
    whyItMatters:
      'A bad release that hits all users at once can mean a full-scale outage. Canary deployments limit the blast radius — only a fraction of users are affected if something goes wrong, and automated rollback can trigger before most customers even notice.',
    analogy:
      'Like A/B testing in product management, but for infrastructure stability — you expose a small group to the change, measure the impact with real data, and only roll it out broadly when confidence is high.',
    soundsSmartToSay:
      '"Let\'s canary this release at 5% for an hour and watch error rates and p99 latency before we promote it to full traffic."',
    commonConfusions: [
      'Canary vs blue-green: Blue-green switches all traffic at once between two environments. Canary gradually shifts traffic percentages, giving you real production feedback before full rollout.',
      'Canary vs feature flags: Feature flags toggle functionality in application code. Canary deployments control traffic routing at the infrastructure level — they can be used together but solve different problems.',
      'A canary deployment still requires good observability — without metrics to compare between old and new versions, you are flying blind and the canary provides no safety benefit.',
    ],
    relatedTerms: ['Blue-Green Deployment', 'Progressive Delivery', 'Service Mesh', 'Observability'],
  },
  {
    id: 'devops-service-mesh',
    domain: 'devops',
    title: 'Service Mesh',
    subtitle: 'A dedicated infrastructure layer for service-to-service communication',
    difficulty: 'advanced',
    tags: ['networking', 'microservices', 'security'],
    definition:
      'A service mesh is a configurable infrastructure layer that handles service-to-service communication by deploying a sidecar proxy alongside each service instance. It provides mutual TLS, load balancing, retries, circuit breaking, and observability without requiring application code changes.',
    whyItMatters:
      'As organizations move from monoliths to microservices, every team ends up reinventing retry logic, auth, and tracing in their own language and framework. A service mesh standardizes these cross-cutting concerns at the infrastructure layer, freeing developers to focus on business logic.',
    analogy:
      'Like the corporate network team managing firewalls, VPNs, and DNS so that application teams never think about network security — except a service mesh does it per-service, not per-network-segment, like moving from castle-and-moat security to zero-trust.',
    soundsSmartToSay:
      '"We should enforce mutual TLS between all services via the mesh rather than asking each team to implement their own certificate management."',
    commonConfusions: [
      'Service mesh vs API gateway: An API gateway handles north-south traffic (external clients to internal services). A service mesh handles east-west traffic (service-to-service within the cluster). Both can coexist.',
      'Istio vs Linkerd: Istio is feature-rich but complex. Linkerd is lightweight and simpler to operate. The choice depends on the team\'s operational maturity and feature requirements.',
      'A service mesh adds latency and resource overhead because every request passes through sidecar proxies — it is not free, and simpler architectures may not need one.',
    ],
    relatedTerms: ['Istio', 'Linkerd', 'Sidecar Proxy', 'Mutual TLS'],
  },
  {
    id: 'devops-feature-flags',
    domain: 'devops',
    title: 'Feature Flags',
    subtitle: 'Decouple deployment from release',
    difficulty: 'beginner',
    tags: ['release-management', 'testing', 'configuration'],
    definition:
      'Feature flags (also called feature toggles) are conditional switches in code that let you enable or disable functionality at runtime without deploying new code. They allow teams to deploy code to production with new features hidden behind a flag and reveal them to specific users, percentages, or segments on demand.',
    whyItMatters:
      'Without feature flags, deploying code and releasing a feature to users are the same event. Feature flags separate these, letting you deploy continuously while controlling exactly who sees what — enabling safe testing in production, gradual rollouts, and instant kill switches.',
    analogy:
      'Like a light switch panel in a theater — all the stage lights are wired and installed (deployed), but the director controls which lights are on or off for each scene (released) without rewiring anything.',
    soundsSmartToSay:
      '"Ship the code behind a flag today so we can test it internally, then flip it on for 10% of users next Tuesday without another deploy."',
    commonConfusions: [
      'Feature flags vs canary deployments: Canary controls traffic at the infrastructure layer (which version of the service handles the request). Feature flags control logic at the application layer (which code path executes). They complement each other.',
      'Feature flags create technical debt if not cleaned up — every flag adds a conditional branch that must be maintained and eventually removed once the feature is fully launched.',
    ],
    relatedTerms: ['Canary Release', 'Progressive Delivery', 'A/B Testing', 'Dark Launch'],
  },
  {
    id: 'devops-helm-charts',
    domain: 'devops',
    title: 'Helm Charts',
    subtitle: 'Package manager for Kubernetes',
    difficulty: 'intermediate',
    tags: ['kubernetes', 'packaging', 'templating'],
    definition:
      'Helm is the de facto package manager for Kubernetes. A Helm chart is a collection of templated YAML files that define a complete application deployment — including deployments, services, config maps, and ingress rules — parameterized with values so the same chart can be reused across environments.',
    whyItMatters:
      'Deploying a production application to Kubernetes can require dozens of interrelated YAML files. Helm charts bundle and version them as a single artifact, making complex deployments repeatable, shareable, and upgradable with a single command.',
    analogy:
      'Like package managers in software development (npm for Node, pip for Python) — instead of manually downloading and configuring every dependency, you install a single versioned package that brings everything with it and handles the wiring.',
    soundsSmartToSay:
      '"Let\'s publish an internal Helm chart for this service so every team gets the same sane defaults for resource limits, health checks, and security context."',
    commonConfusions: [
      'Helm chart vs Kubernetes manifest: A manifest is a static YAML file applied directly. A Helm chart is a templated, parameterized package that generates manifests — like the difference between a hardcoded config file and a configurable template.',
      'Helm vs Kustomize: Helm uses templating with Go templates and values files. Kustomize uses patching and overlays on plain YAML. Many teams use both — Helm for third-party charts, Kustomize for in-house apps.',
      'Helm 2 required a server-side component called Tiller that had broad cluster permissions. Helm 3 removed Tiller entirely, significantly improving security.',
    ],
    relatedTerms: ['Kubernetes', 'Kustomize', 'GitOps', 'Artifact Registry'],
  },
  {
    id: 'devops-chaos-engineering',
    domain: 'devops',
    title: 'Chaos Engineering',
    subtitle: 'Intentionally breaking systems to build confidence',
    difficulty: 'advanced',
    tags: ['reliability', 'testing', 'resilience'],
    definition:
      'Chaos engineering is the discipline of experimenting on a production system by deliberately injecting failures — killing pods, adding network latency, exhausting CPU — to uncover weaknesses before they cause real outages. Experiments follow a scientific method: hypothesize steady-state behavior, introduce a controlled disruption, and observe whether the system degrades gracefully.',
    whyItMatters:
      'Distributed systems fail in unpredictable ways that unit tests and staging environments cannot replicate. Chaos engineering turns unknown failure modes into known, tested scenarios — reducing mean time to recovery and preventing costly surprise outages during peak traffic.',
    analogy:
      'Like a penetration test in cybersecurity — instead of waiting for an attacker to find your vulnerabilities, you hire a red team to find and exploit them first so you can fix them proactively. Chaos engineering is a red team for reliability.',
    soundsSmartToSay:
      '"We should run a chaos experiment during business hours to validate that our circuit breakers actually trip — if we only test resilience in staging, we are testing a lie."',
    commonConfusions: [
      'Chaos engineering vs breaking things randomly: Chaos experiments are controlled, hypothesis-driven, and have a blast radius limit. Randomly killing production servers without a plan is not chaos engineering — it is an outage.',
      'Chaos engineering requires observability as a prerequisite — if you cannot measure steady-state behavior, you cannot detect whether an injected failure actually caused degradation.',
      'Tools like Chaos Monkey (Netflix), Litmus (Kubernetes-native), and Gremlin (commercial) provide structured chaos experiment frameworks — you do not need to write custom failure injection scripts.',
    ],
    relatedTerms: ['SRE', 'Observability', 'Circuit Breaker', 'Game Day'],
  },
  {
    id: 'devops-pipeline-as-code',
    domain: 'devops',
    title: 'Pipeline as Code',
    subtitle: 'Define build and deployment pipelines in version-controlled files',
    difficulty: 'beginner',
    tags: ['automation', 'CI/CD', 'version-control'],
    definition:
      'Pipeline as Code means defining your CI/CD pipeline logic — build steps, test stages, deployment targets, approval gates — in a file checked into the same repository as your application code (e.g., Jenkinsfile, .github/workflows/*.yml, .gitlab-ci.yml). The pipeline definition is versioned, reviewed, and tested just like the code it builds.',
    whyItMatters:
      'When pipelines are configured through a UI, changes are invisible, unreviewable, and impossible to roll back. Pipeline as Code means a PR that changes how the app is built gets the same review rigor as a PR that changes what the app does — and breaking pipeline changes can be reverted with git.',
    analogy:
      'Like Infrastructure as Code but for your build process — the same way IaC moved server configuration from manual ClickOps into version-controlled Terraform files, Pipeline as Code moves build configuration from Jenkins UI into version-controlled pipeline files.',
    soundsSmartToSay:
      '"Our pipeline definition lives in the repo, so when we branch for a release, the pipeline branches with it — no one has to manually clone a Jenkins job."',
    commonConfusions: [
      'Pipeline as Code vs CI/CD: CI/CD is the practice of continuous integration and delivery. Pipeline as Code is how you define that CI/CD process — in a file rather than through a GUI. You can have CI/CD without Pipeline as Code (and vice versa).',
      'Jenkinsfile vs GitHub Actions: Both are Pipeline as Code, just different syntaxes. Jenkinsfile uses Groovy DSL, GitHub Actions uses YAML. The principle — pipeline definition lives in source control — is the same.',
    ],
    relatedTerms: ['CI/CD', 'Infrastructure as Code', 'GitOps', 'Jenkinsfile'],
  },
  {
    id: 'devops-immutable-infrastructure',
    domain: 'devops',
    title: 'Immutable Infrastructure',
    subtitle: 'Replace servers instead of patching them',
    difficulty: 'intermediate',
    tags: ['infrastructure', 'deployment', 'reliability'],
    definition:
      'Immutable infrastructure is a model where servers and containers are never modified after deployment. Instead of SSHing into a running server to apply patches or config changes, you build a new machine image (or container image) with the changes baked in, deploy it, and destroy the old one.',
    whyItMatters:
      'Mutable servers accumulate undocumented changes over time — "configuration drift" — until no one knows exactly what is running or can reproduce the environment. Immutable infrastructure guarantees that what you tested is exactly what runs in production, eliminating an entire class of "works on that server but not this one" bugs.',
    analogy:
      'Like the difference between editing a Word document in place (mutable) versus publishing a new version of a printed book (immutable). You never scratch out lines in a printed book — you publish a new edition. Every copy of that edition is identical.',
    soundsSmartToSay:
      '"If a server needs a patch, we do not SSH in — we update the base image, rebuild, and roll out new instances. Immutable infrastructure means every instance is a known quantity."',
    commonConfusions: [
      'Immutable infrastructure vs Infrastructure as Code: IaC defines what to build. Immutable infrastructure defines how to change it — by replacing, never patching. IaC can produce either mutable or immutable infrastructure.',
      'Immutable does not mean permanent — instances are frequently replaced. It means once created, an instance is never changed in place. Short-lived and immutable go hand in hand.',
      'Tools like Packer (for VM images) and Docker (for container images) are the primary enablers of immutable infrastructure — they bake dependencies into a versioned artifact before deployment.',
    ],
    relatedTerms: ['Containers', 'Infrastructure as Code', 'Golden Image', 'Configuration Drift'],
  },
  {
    id: 'devops-devsecops',
    domain: 'devops',
    title: 'DevSecOps',
    subtitle: 'Baking security into every stage of the pipeline',
    difficulty: 'beginner',
    tags: ['security', 'automation', 'shift-left'],
    definition:
      'DevSecOps integrates security practices directly into the DevOps pipeline rather than treating security as a separate, final gate. It means automated vulnerability scanning, dependency auditing, secret detection, and compliance checks run as part of every build — catching security issues at the same speed code is shipped.',
    whyItMatters:
      'When security review only happens at the end of a release cycle, it becomes a bottleneck that teams either wait weeks for or bypass entirely. DevSecOps makes security fast enough to keep up with CI/CD, reducing risk without reducing velocity.',
    analogy:
      'Like building code quality into a development process with linters and automated tests — instead of a separate QA team reviewing everything at the end, quality checks run continuously. DevSecOps does the same thing for security: inline checks instead of a final audit.',
    soundsSmartToSay:
      '"We shifted security left — every PR runs SAST, dependency scanning, and secret detection automatically, so vulnerabilities never make it past code review."',
    commonConfusions: [
      'DevSecOps vs traditional security: Traditional security is a gate at the end. DevSecOps embeds security into every pipeline stage — from IDE plugins that catch issues at write-time to runtime scanning in production.',
      'Shift-left does not mean shift-only-left: DevSecOps adds security checks early (SAST, dependency scanning) but also keeps runtime protections (WAF, RASP, container scanning) — it is security everywhere, not just at build time.',
      'DevSecOps is a culture, not a tool: Tools like Snyk, Trivy, and Checkov enable it, but without developer buy-in and security training, adding scanners to the pipeline just creates ignored alerts.',
    ],
    relatedTerms: ['CI/CD', 'SAST', 'Shift Left', 'Supply Chain Security'],
  },
  {
    id: 'devops-canary',
    domain: 'devops',
    title: 'Canary Deployments',
    subtitle: 'Test in production with a safety net',
    difficulty: 'intermediate',
    tags: ['deployment', 'rollout', 'risk'],
    definition:
      'A canary deployment routes a small percentage of live traffic (1–5%) to the new version while the rest stays on the old version. If metrics stay healthy, traffic gradually shifts to the new version. If something breaks, only a fraction of users are affected.',
    whyItMatters:
      'Staging environments never perfectly match production. Canary deployments let you validate changes against real traffic and real data at low risk — catching issues that only surface under production load or data patterns.',
    analogy:
      'Named after the canary in a coal mine — the bird detects danger before the miners do. Your canary deployment detects regressions before the full user base sees them.',
    soundsSmartToSay:
      '"Let us set up automated canary analysis — if error rates or latency exceed baseline by more than a threshold, the deployment auto-rolls back."',
    commonConfusions: [
      'Canary vs blue-green: Blue-green switches 100% of traffic at once between two environments. Canary gradually shifts traffic, giving you a finer-grained safety net.',
      'Canary vs feature flag: Feature flags control which features are visible. Canary deployments control which version of the entire application serves traffic. You can combine both.',
    ],
    relatedTerms: ['Blue-Green Deployment', 'Feature Flags', 'Progressive Delivery', 'Rollback'],
  },
  {
    id: 'devops-service-mesh',
    domain: 'devops',
    title: 'Service Mesh',
    subtitle: 'Infrastructure-layer networking for microservices',
    difficulty: 'advanced',
    tags: ['networking', 'microservices', 'observability'],
    definition:
      'A service mesh is a dedicated infrastructure layer — typically implemented as sidecar proxies alongside each service — that handles service-to-service communication: load balancing, retries, mTLS encryption, and observability, without changing application code.',
    whyItMatters:
      'When you have dozens of microservices, implementing retries, circuit breakers, and mutual TLS in every service is unsustainable. A service mesh moves that logic into the infrastructure so developers can focus on business logic.',
    analogy:
      'Like a managed network overlay. Just as a VPC abstracts physical networking from your VMs, a service mesh abstracts service networking from your application code. Istio and Linkerd are the "VPC" for microservice traffic.',
    soundsSmartToSay:
      '"Before adding a service mesh, let us make sure we actually need L7 traffic management — if we only need mTLS, a simpler solution like cert-manager might suffice."',
    commonConfusions: [
      'Service mesh vs API gateway: An API gateway handles north-south traffic (external clients to internal services). A service mesh handles east-west traffic (service to service). Most architectures need both.',
      'Service mesh vs load balancer: A load balancer distributes traffic to service instances. A service mesh handles that plus retries, timeouts, circuit breaking, mutual TLS, and distributed tracing across the entire mesh.',
      'Sidecar vs ambient: Traditional service meshes inject a sidecar proxy per pod. Newer approaches (like Istio Ambient) use per-node proxies to reduce overhead.',
    ],
    relatedTerms: ['Kubernetes', 'mTLS', 'Istio', 'Sidecar Pattern'],
  },
  {
    id: 'devops-feature-flags',
    domain: 'devops',
    title: 'Feature Flags',
    subtitle: 'Deploy does not have to mean release',
    difficulty: 'beginner',
    tags: ['deployment', 'release', 'toggles'],
    definition:
      'Feature flags are conditional switches in code that let you enable or disable features at runtime without deploying new code. They decouple deployment from release — code ships dark, then you turn it on for specific users, percentages, or regions.',
    whyItMatters:
      'Feature flags eliminate the "big bang release." Product teams can test with beta users, run A/B experiments, and instantly kill a broken feature — all without emergency rollbacks or hotfix deploys.',
    analogy:
      'Like the circuit breakers in your electrical panel. The wiring (code) is always there, but you can flip individual breakers on or off without rewiring the house.',
    soundsSmartToSay:
      '"We should flag that feature for a gradual rollout — 10% of users first, then ramp up once we confirm metrics are stable."',
    commonConfusions: [
      'Feature flags vs environment variables: Env vars are set at deploy time and require a restart to change. Feature flags change at runtime and can target specific users or segments.',
      'Technical debt risk: Stale feature flags left in the code become confusing tech debt. Teams need a process to clean up flags after full rollout.',
    ],
    relatedTerms: ['Canary Deployment', 'A/B Testing', 'Progressive Delivery', 'LaunchDarkly'],
  },
  {
    id: 'devops-helm',
    domain: 'devops',
    title: 'Helm Charts',
    subtitle: 'Package manager for Kubernetes',
    difficulty: 'intermediate',
    tags: ['kubernetes', 'packaging', 'templating'],
    definition:
      'Helm is a package manager for Kubernetes that bundles related YAML manifests — deployments, services, configmaps, secrets — into versioned, parameterized packages called charts. Charts can be shared, reused, and customized via values files.',
    whyItMatters:
      'Raw Kubernetes YAML is verbose and repetitive. Helm charts template the boilerplate, enforce consistent structure across services, and provide a single command to install, upgrade, or rollback a complex application.',
    analogy:
      'Like apt or yum for Kubernetes. Just as you run "apt install nginx" instead of manually placing binaries and config files, you run "helm install my-app" instead of applying dozens of YAML files.',
    soundsSmartToSay:
      '"Let us publish our service as a Helm chart with sensible defaults so other teams can deploy it by overriding just the values they need."',
    commonConfusions: [
      'Helm vs Kustomize: Helm uses Go templating to generate YAML. Kustomize uses overlays to patch existing YAML. Helm is better for packaging and distribution; Kustomize is simpler for environment-specific tweaks.',
      'Helm charts vs operators: Charts deploy and configure applications. Operators add custom controllers that actively manage application lifecycle (backup, scaling, failover). Complex stateful applications often need both.',
    ],
    relatedTerms: ['Kubernetes', 'Kustomize', 'GitOps', 'ArgoCD'],
  },
  {
    id: 'devops-chaos-engineering',
    domain: 'devops',
    title: 'Chaos Engineering',
    subtitle: 'Break things on purpose to build resilience',
    difficulty: 'advanced',
    tags: ['resilience', 'testing', 'reliability'],
    definition:
      'Chaos engineering is the practice of intentionally injecting failures — killing pods, adding network latency, corrupting data — into production or staging systems to discover weaknesses before real outages expose them.',
    whyItMatters:
      'You cannot know if your system is resilient by reading architecture diagrams. Netflix popularized chaos engineering because theoretical redundancy often fails under real conditions. The only way to know is to test.',
    analogy:
      'Like a fire drill for your infrastructure. You do not wait for an actual fire to find out the exit is blocked — you simulate the disaster in controlled conditions to find the gaps.',
    soundsSmartToSay:
      '"We should run a game day where we simulate an AZ failure — I want to see if our services actually failover or if we have undocumented dependencies on the primary zone."',
    commonConfusions: [
      'Chaos engineering vs breaking things randomly: Chaos engineering is controlled and hypothesis-driven. You form a hypothesis ("killing this pod should not affect users"), test it, and learn. It is not just unplugging servers for fun.',
      'Production vs staging: Ideally chaos tests run in production with blast-radius controls, since staging rarely replicates real traffic patterns. But you can start in staging to build confidence.',
    ],
    relatedTerms: ['SRE', 'Game Day', 'Resilience', 'Observability'],
  },
  {
    id: 'devops-pipeline-as-code',
    domain: 'devops',
    title: 'Pipeline as Code',
    subtitle: 'Version your build pipeline like your application',
    difficulty: 'beginner',
    tags: ['ci-cd', 'automation', 'versioning'],
    definition:
      'Pipeline as Code means defining your CI/CD pipeline in a configuration file (like a Jenkinsfile, .github/workflows YAML, or .gitlab-ci.yml) that lives in the same repository as your application code. Changes to the pipeline go through code review just like application changes.',
    whyItMatters:
      'When pipelines are configured through a web UI, they become tribal knowledge that only one person understands. Pipeline as Code makes your build process reviewable, auditable, and reproducible — if you can clone the repo, you can build the project.',
    analogy:
      'The same principle as Infrastructure as Code, applied to your build system. Just as Terraform makes infrastructure reproducible, Pipeline as Code makes your CI/CD reproducible.',
    soundsSmartToSay:
      '"Our pipeline definition should live in the repo — if we need to rebuild from six months ago, we need the pipeline version that matches that code version."',
    commonConfusions: [
      'Pipeline as Code vs Infrastructure as Code: IaC provisions infrastructure (servers, databases). Pipeline as Code defines how software is built, tested, and deployed. Both follow the same "define it in version-controlled files" principle.',
      'Declarative vs scripted: Most Pipeline as Code systems support both declarative (structured YAML) and scripted (imperative) styles. Declarative is easier to read; scripted offers more flexibility.',
    ],
    relatedTerms: ['CI/CD', 'GitOps', 'Infrastructure as Code', 'GitHub Actions'],
  },
  {
    id: 'devops-immutable-infra',
    domain: 'devops',
    title: 'Immutable Infrastructure',
    subtitle: 'Replace, never patch',
    difficulty: 'intermediate',
    tags: ['infrastructure', 'deployment', 'consistency'],
    definition:
      'Immutable infrastructure is the practice of never modifying running servers after deployment. Instead of patching or updating in place, you build a new image with the changes and replace the old instances entirely.',
    whyItMatters:
      'Mutable servers accumulate configuration drift — "snowflake" servers where no one remembers what was changed and when. Immutable infrastructure guarantees every instance is identical and reproducible, eliminating "works on that server but not this one" problems.',
    analogy:
      'Like containers for your VMs. Just as a Docker image is built once and run anywhere, an AMI or machine image is built once and any instance launched from it is identical. You never SSH in and tweak things.',
    soundsSmartToSay:
      '"If someone has to SSH into a production server to fix something, that is a process failure — the fix should go into the image build pipeline."',
    commonConfusions: [
      'Immutable infra vs containers: Containers are one implementation of immutable infrastructure. But the principle also applies to VM images (AMIs, GCE images) and even bare metal with PXE boot.',
      'Immutable does not mean no state: Servers are immutable, but databases and persistent volumes still hold mutable state. The pattern applies to compute, not storage.',
    ],
    relatedTerms: ['Containers', 'Infrastructure as Code', 'AMI', 'Configuration Drift'],
  },
  {
    id: 'devops-devsecops',
    domain: 'devops',
    title: 'DevSecOps',
    subtitle: 'Security as a first-class CI/CD citizen',
    difficulty: 'beginner',
    tags: ['security', 'ci-cd', 'shift-left'],
    definition:
      'DevSecOps integrates security practices directly into the DevOps pipeline — automated vulnerability scanning, dependency checks, secret detection, and compliance gates run on every commit rather than being bolted on at the end.',
    whyItMatters:
      'Finding a vulnerability in production costs 100x more to fix than catching it during development. DevSecOps shifts security left so vulnerabilities are caught when they are cheapest to fix — at the pull request, not the pentest.',
    analogy:
      'Like adding quality inspections at every station on the assembly line rather than only checking the finished car. DevOps already added automated testing; DevSecOps adds automated security testing to the same pipeline.',
    soundsSmartToSay:
      '"We should add SAST and dependency scanning to the PR pipeline so developers get security feedback in the same workflow they already use for tests."',
    commonConfusions: [
      'DevSecOps vs a security team: DevSecOps does not replace security engineers. It empowers developers to catch common issues early so the security team can focus on architecture reviews, threat modeling, and incident response.',
      'DevSecOps is a culture, not a tool: Tools like Snyk, Trivy, and Semgrep enable it, but without developer buy-in and security training, adding scanners to the pipeline just creates ignored alerts.',
    ],
    relatedTerms: ['CI/CD', 'SAST', 'Shift Left', 'Supply Chain Security'],
  },
];
