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
      'Like an assembly line with quality checks at every station — a part is tested before the next station touches it, so defects are caught early and never reach the end of the line.',
    soundsSmartToSay:
      '"If the pipeline is not green, nothing ships — CI/CD is the gate that protects production quality."',
    commonConfusions: [
      'CD (Delivery) vs CD (Deployment): Continuous Delivery means code is always ready to deploy but a human presses go. Continuous Deployment means it ships automatically.',
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
      'Pod vs container: A pod is the smallest deployable unit in k8s and wraps one or more containers.',
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
      'IaC means defining and managing infrastructure through code files that are version-controlled, reviewed, and applied automatically — just like application code.',
    whyItMatters:
      'Manual infrastructure is inconsistent, hard to audit, and impossible to reproduce exactly. IaC means your production and staging environments are identical, and every change is tracked in git.',
    analogy:
      'Like having blueprints for a building that are version-controlled. Any change to the building is first a change to the blueprint, reviewed by an architect, then applied by automated construction.',
    soundsSmartToSay:
      '"If it\'s not in Terraform, it doesn\'t exist — we can\'t have snowflake infrastructure that only one person knows how to configure."',
    commonConfusions: [
      'Terraform vs Ansible: Terraform provisions infrastructure. Ansible configures software on existing infrastructure.',
      'IaC is not just cloud: Terraform manages on-prem VMware, Kubernetes clusters, DNS records, and SaaS configuration.',
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
      'Any change to production goes through a git PR — reviewed, audited, and reversible with a git revert. Drift detection catches unauthorized manual changes automatically.',
    analogy:
      "Like a building where the blueprints (git) are the only authority. If the physical building doesn't match the blueprints, the automated crew immediately fixes it.",
    soundsSmartToSay:
      '"With GitOps, git history is our audit log — we know exactly who changed what in production and can roll back with a revert."',
    commonConfusions: [
      'GitOps vs CI/CD: CI/CD pushes changes out. GitOps pulls changes in — a controller in the cluster watches the git repo and applies changes.',
      'ArgoCD and Flux are the main GitOps controllers for Kubernetes.',
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
      'OpenTelemetry (OTel) is now the standard for instrumentation.',
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
      "SRE is Google's approach to running production systems — treating operations as a software engineering problem. SREs write code to automate operations, define SLOs, and manage error budgets.",
    whyItMatters:
      'SRE gives reliability a quantifiable target. Error budgets create productive tension: if reliability is good, teams can ship faster. If reliability is suffering, they slow down and fix it.',
    analogy:
      "Like a manufacturing quality engineer who redesigns the production line to prevent defects — and tracks defect rates with a strict monthly quota.",
    soundsSmartToSay:
      '"We need to define our SLOs before we can set meaningful alerts — alerting on everything just creates noise."',
    commonConfusions: [
      'SRE vs DevOps: DevOps is a cultural philosophy. SRE is a specific implementation with defined practices and roles, originally from Google.',
      'SLO vs SLA: An SLO is an internal target. An SLA is a contractual commitment with penalties. SLOs should always be stricter than SLAs.',
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
      'A container packages an application and all its dependencies into a portable unit that runs identically on any machine — development laptop, CI server, or production cluster.',
    whyItMatters:
      '"Works on my machine" is eliminated. Containers ensure the exact same software runs everywhere, making deployments predictable and environment drift impossible.',
    analogy:
      'Like a shipping container — standardized dimensions, works on any ship/truck/crane. The contents are isolated from each other and the carrier does not care what is inside.',
    soundsSmartToSay:
      '"The container image is immutable — if we need a config change, we rebuild and redeploy, we don\'t SSH in and edit files."',
    commonConfusions: [
      'Containers vs VMs: A VM virtualizes an entire computer including the OS. A container shares the host OS kernel — much lighter and faster to start.',
      'Docker vs containers: Docker is the most common tool, but the container standard (OCI) is open — Podman, containerd, and others run the same images.',
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
      'Traditional deployments cause downtime during the update. Blue-green means users never see the transition — and if the new version has a problem, rollback is a single traffic switch.',
    analogy:
      "Like switching a train from one track to another at a junction — passengers don't feel a thing, and if the new track has a problem, you switch them back instantly.",
    soundsSmartToSay:
      '"With blue-green, our rollback time is seconds, not the 20 minutes it takes to redeploy the old version."',
    commonConfusions: [
      'Blue-green vs canary: Blue-green switches all traffic at once. Canary releases send a small percentage to the new version first.',
      'Database migrations are the hard part of blue-green — the new code must be able to read the old schema during the switchover window.',
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
      'A canary deployment routes a small percentage of production traffic (e.g., 5%) to the new version while the majority continues hitting the stable version. If metrics stay healthy, traffic is gradually shifted until the new version receives 100%.',
    whyItMatters:
      'A bad release that hits all users at once can mean a full-scale outage. Canary deployments limit the blast radius — only a fraction of users are affected if something goes wrong.',
    analogy:
      'Like A/B testing for infrastructure stability — you expose a small group to the change, measure the impact with real data, and only roll it out broadly when confidence is high.',
    soundsSmartToSay:
      '"Let\'s canary this release at 5% for an hour and watch error rates and p99 latency before we promote it to full traffic."',
    commonConfusions: [
      'Canary vs blue-green: Blue-green switches all traffic at once. Canary gradually shifts traffic percentages.',
      'A canary deployment still requires good observability — without metrics to compare, you are flying blind.',
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
      'A service mesh deploys a sidecar proxy alongside each service instance, providing mutual TLS, load balancing, retries, circuit breaking, and observability without requiring application code changes.',
    whyItMatters:
      'As organizations move from monoliths to microservices, every team ends up reinventing retry logic, auth, and tracing. A service mesh standardizes these cross-cutting concerns at the infrastructure layer.',
    analogy:
      'Like the corporate network team managing firewalls and VPNs so application teams never think about network security — except a service mesh does it per-service.',
    soundsSmartToSay:
      '"We should enforce mutual TLS between all services via the mesh rather than asking each team to implement their own certificate management."',
    commonConfusions: [
      'Service mesh vs API gateway: An API gateway handles north-south traffic. A service mesh handles east-west traffic. Both can coexist.',
      'A service mesh adds latency and resource overhead — it is not free, and simpler architectures may not need one.',
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
      'Feature flags are conditional switches in code that let you enable or disable functionality at runtime without deploying new code. They allow teams to deploy code to production with new features hidden behind a flag.',
    whyItMatters:
      'Without feature flags, deploying code and releasing a feature to users are the same event. Feature flags separate these, letting you deploy continuously while controlling exactly who sees what.',
    analogy:
      'Like a light switch panel in a theater — all the stage lights are wired and installed (deployed), but the director controls which lights are on or off for each scene (released).',
    soundsSmartToSay:
      '"Ship the code behind a flag today so we can test it internally, then flip it on for 10% of users next Tuesday without another deploy."',
    commonConfusions: [
      'Feature flags vs canary deployments: Canary controls traffic at the infrastructure layer. Feature flags control logic at the application layer.',
      'Feature flags create technical debt if not cleaned up — every flag adds a conditional branch that must eventually be removed.',
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
      'Helm is the de facto package manager for Kubernetes. A Helm chart bundles templated YAML files that define a complete application deployment — parameterized with values so the same chart can be reused across environments.',
    whyItMatters:
      'Deploying a production application to Kubernetes can require dozens of interrelated YAML files. Helm charts bundle and version them as a single artifact, making complex deployments repeatable and upgradable with a single command.',
    analogy:
      'Like npm for Node or pip for Python — instead of manually downloading and configuring every dependency, you install a single versioned package that brings everything with it.',
    soundsSmartToSay:
      '"Let\'s publish an internal Helm chart for this service so every team gets the same sane defaults for resource limits, health checks, and security context."',
    commonConfusions: [
      'Helm vs Kustomize: Helm uses templating with Go templates. Kustomize uses patching on plain YAML. Many teams use both.',
      'Helm 2 required Tiller with broad cluster permissions. Helm 3 removed Tiller entirely, significantly improving security.',
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
      'Chaos engineering is the discipline of deliberately injecting failures into a production system — killing pods, adding network latency, exhausting CPU — to uncover weaknesses before they cause real outages.',
    whyItMatters:
      'Distributed systems fail in unpredictable ways that unit tests and staging cannot replicate. Chaos engineering turns unknown failure modes into known, tested scenarios.',
    analogy:
      'Like a penetration test for reliability — instead of waiting for an outage, you simulate one under controlled conditions to find and fix weaknesses proactively.',
    soundsSmartToSay:
      '"We should run a chaos experiment during business hours to validate that our circuit breakers actually trip — if we only test resilience in staging, we are testing a lie."',
    commonConfusions: [
      'Chaos engineering vs breaking things randomly: Chaos experiments are controlled and hypothesis-driven. Randomly killing production servers is an outage.',
      'Chaos engineering requires observability as a prerequisite — if you cannot measure steady-state behavior, you cannot detect whether an injected failure caused degradation.',
    ],
    relatedTerms: ['SRE', 'Observability', 'Circuit Breaker', 'Game Day'],
  },
  {
    id: 'devops-pipeline-as-code',
    domain: 'devops',
    title: 'Pipeline as Code',
    subtitle: 'Define CI/CD pipelines in version-controlled files',
    difficulty: 'beginner',
    tags: ['automation', 'CI/CD', 'version-control'],
    definition:
      'Pipeline as Code means defining your CI/CD pipeline logic in a file checked into the same repository as your application code (e.g., .github/workflows/*.yml, .gitlab-ci.yml). The pipeline definition is versioned, reviewed, and tested just like the code it builds.',
    whyItMatters:
      'When pipelines are configured through a UI, changes are invisible, unreviewable, and impossible to roll back. Pipeline as Code means a PR that changes how the app is built gets the same review rigor as the code itself.',
    analogy:
      'Like Infrastructure as Code for your build process — the same way IaC moved server configuration into version-controlled Terraform files, Pipeline as Code moves build configuration out of Jenkins UI.',
    soundsSmartToSay:
      '"Our pipeline definition lives in the repo, so when we branch for a release, the pipeline branches with it — no one has to manually clone a Jenkins job."',
    commonConfusions: [
      'Pipeline as Code vs CI/CD: CI/CD is the practice. Pipeline as Code is how you define that practice — in a file rather than through a GUI.',
      'Jenkinsfile vs GitHub Actions: Both are Pipeline as Code, just different syntaxes. The principle is the same.',
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
      'Immutable infrastructure is a model where servers and containers are never modified after deployment. Instead of SSHing in to apply patches, you build a new machine image with the changes baked in, deploy it, and destroy the old one.',
    whyItMatters:
      'Mutable servers accumulate undocumented changes over time — "configuration drift" — until no one knows exactly what is running. Immutable infrastructure guarantees what you tested is exactly what runs in production.',
    analogy:
      'Like the difference between editing a Word document in place versus publishing a new edition of a printed book. You never scratch out lines in a printed book — you publish a new edition.',
    soundsSmartToSay:
      '"If a server needs a patch, we do not SSH in — we update the base image, rebuild, and roll out new instances."',
    commonConfusions: [
      'Immutable does not mean permanent — instances are frequently replaced. It means once created, an instance is never changed in place.',
      'Tools like Packer (for VM images) and Docker (for container images) are the primary enablers of immutable infrastructure.',
    ],
    relatedTerms: ['Containers', 'Infrastructure as Code', 'Golden Image', 'Configuration Drift'],
  },
  {
    id: 'devops-devsecops',
    domain: 'devops',
    title: 'DevSecOps Pipeline Automation',
    subtitle: 'Baking security into every stage of the pipeline',
    difficulty: 'beginner',
    tags: ['security', 'automation', 'shift-left'],
    definition:
      'DevSecOps integrates security practices directly into the DevOps pipeline — automated vulnerability scanning, dependency auditing, secret detection, and compliance checks run as part of every build.',
    whyItMatters:
      'When security review only happens at the end of a release cycle, it becomes a bottleneck. DevSecOps makes security fast enough to keep up with CI/CD, reducing risk without reducing velocity.',
    analogy:
      'Like building code quality into development with linters and automated tests. DevSecOps does the same for security: inline checks instead of a final audit.',
    soundsSmartToSay:
      '"We shifted security left — every PR runs SAST, dependency scanning, and secret detection automatically, so vulnerabilities never make it past code review."',
    commonConfusions: [
      'Shift-left does not mean shift-only-left: DevSecOps adds security checks early but keeps runtime protections.',
      'DevSecOps is a culture, not a tool: Adding scanners to the pipeline without developer buy-in just creates ignored alerts.',
    ],
    relatedTerms: ['CI/CD', 'SAST', 'Shift Left', 'Supply Chain Security'],
  },
  {
    id: 'devops-platform-engineering',
    domain: 'devops',
    title: 'Platform Engineering',
    subtitle: 'Building the internal developer platform that enables DevOps at scale',
    difficulty: 'intermediate',
    tags: ['developer experience', 'IDP', 'self-service'],
    definition:
      'Platform engineering is the discipline of designing and building internal developer platforms (IDPs) — curated toolchains and self-service capabilities that let application teams provision infrastructure, deploy software, and manage observability without needing deep DevOps expertise. Tools like Backstage provide developer portals that surface all available capabilities.',
    whyItMatters:
      'As organizations grow, every team reinventing their own CI/CD pipelines, Kubernetes configurations, and monitoring setups is wasteful and inconsistent. A platform team builds the "golden paths" once, and product teams follow them — faster, safer, and more compliant.',
    analogy:
      'Like building the road system for a city — individual car owners (product teams) choose where to drive, but the roads, traffic signals, and guardrails (the platform) are built and maintained by specialists so everyone travels more safely.',
    soundsSmartToSay:
      '"We should invest in an internal developer platform so teams can deploy with confidence without needing a Kubernetes expert — the platform encodes best practices and lets product teams move fast on paved paths."',
    commonConfusions: [
      'Platform engineering vs DevOps: DevOps is a culture and practice. Platform engineering is the implementation — building the tools and infrastructure that enable DevOps practices at scale.',
      'A developer portal (Backstage) is not the platform — it is the UI. The platform includes CI/CD, service mesh, secret management, observability, and access control.',
    ],
    relatedTerms: ['Internal Developer Platform', 'Backstage', 'Golden Path', 'Self-Service Infrastructure'],
  },
  {
    id: 'devops-opentelemetry',
    domain: 'devops',
    title: 'OpenTelemetry',
    subtitle: 'The open standard for telemetry instrumentation',
    difficulty: 'intermediate',
    tags: ['observability', 'telemetry', 'instrumentation'],
    definition:
      'OpenTelemetry (OTel) is a vendor-neutral, open-source observability framework that provides APIs, SDKs, and tools for generating, collecting, and exporting metrics, logs, and traces from applications. It is rapidly becoming the industry standard, supported by all major observability vendors.',
    whyItMatters:
      'Before OTel, every observability vendor had its own SDK — switching from Datadog to Honeycomb required re-instrumenting every service. OTel separates instrumentation (your code) from the backend (where data goes), so you instrument once and route to any backend.',
    analogy:
      'Like the USB-C standard for cables — instead of every manufacturer requiring a different proprietary cable, a single standard works with any compatible device. OTel is the USB-C for observability.',
    soundsSmartToSay:
      '"We should instrument our services with OTel from the start — then we can swap backends without touching application code and correlate traces across the entire distributed system with a single trace ID."',
    commonConfusions: [
      'OTel vs Prometheus vs Jaeger: OTel is the instrumentation and collection layer. Prometheus is a metrics backend. Jaeger is a tracing backend. OTel collects the data and ships it to these backends.',
      'OTel collectors vs SDK auto-instrumentation: The OTel SDK instruments your code. Auto-instrumentation agents add OTel without code changes. The OTel collector is a standalone process that receives, processes, and exports telemetry.',
    ],
    relatedTerms: ['Observability', 'Distributed Tracing', 'Prometheus', 'Jaeger'],
  },
  {
    id: 'devops-error-budget',
    domain: 'devops',
    title: 'Error Budgets',
    subtitle: 'Quantifying how much unreliability is acceptable',
    difficulty: 'intermediate',
    tags: ['SRE', 'reliability', 'SLO'],
    definition:
      'An error budget is the maximum amount of unreliability permitted over a period (typically 30 days) before a service is considered in breach of its SLO. If your SLO is 99.9% availability, your error budget is 0.1% downtime — about 43 minutes per month. Burning through this budget means freezing risky changes until reliability recovers.',
    whyItMatters:
      'Error budgets create productive tension between feature velocity and reliability. They give engineering and product a shared, data-driven framework: burn budget freely when healthy, slow down and invest in reliability when approaching the limit.',
    analogy:
      'Like a household budget. You have a certain amount to spend each month. You can save by being conservative or spend freely if you have surplus. When the budget runs out, you stop spending — you don\'t add debt.',
    soundsSmartToSay:
      '"We burned 80% of our error budget in week two — we should freeze non-critical deployments for the rest of the month and address the flaky tests causing unnecessary incidents."',
    commonConfusions: [
      'Error budget vs SLA: An SLA has legal consequences if breached. An error budget is an internal engineering metric. SLOs should be stricter than SLAs so you exhaust your error budget before triggering SLA penalties.',
      'Burning the error budget is not always bad: Planned downtime for a major infrastructure upgrade is an acceptable reason. Unplanned failures from insufficient testing is not.',
    ],
    relatedTerms: ['SLO', 'SLA', 'SRE', 'Reliability'],
  },
  {
    id: 'devops-secrets-management',
    domain: 'devops',
    title: 'Secrets Management',
    subtitle: 'Securely storing and distributing API keys, credentials, and certificates',
    difficulty: 'intermediate',
    tags: ['security', 'credentials', 'HashiCorp Vault'],
    definition:
      'Secrets management is the practice of securely storing, distributing, rotating, and auditing sensitive credentials — API keys, database passwords, TLS certificates, cloud access keys — so they are never hardcoded in source code or configuration files. Tools include HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, and GCP Secret Manager.',
    whyItMatters:
      'Hardcoded credentials in source code are among the most common causes of cloud breaches. Secrets management tools provide short-lived dynamic credentials, audit trails of who accessed what, and automated rotation — replacing static, long-lived secrets.',
    analogy:
      'Like a pharmacy dispensing medications — drugs (secrets) are stored securely, each prescription (access request) is logged, pharmacists (applications) receive exactly what they need for the specific purpose, and the medication expires after use.',
    soundsSmartToSay:
      '"We need to move all our database credentials out of environment variables and into Vault with dynamic secrets — short-lived credentials that expire after use dramatically reduce the blast radius of a compromised service."',
    commonConfusions: [
      'Secrets management vs password manager: Personal password managers store human credentials. Secrets management is for machine-to-machine credentials at scale with automation, rotation, and audit trails.',
      'Dynamic secrets vs static secrets: Static secrets are long-lived credentials you store and rotate manually. Dynamic secrets are generated on-demand with a TTL — the secret is only valid for the task that requested it.',
    ],
    relatedTerms: ['HashiCorp Vault', 'AWS Secrets Manager', 'Least Privilege', 'Credential Rotation'],
  },
  {
    id: 'devops-progressive-delivery',
    domain: 'devops',
    title: 'Progressive Delivery',
    subtitle: 'Controlled, gradual rollout of software changes',
    difficulty: 'intermediate',
    tags: ['deployment', 'risk reduction', 'release management'],
    definition:
      'Progressive delivery is the practice of releasing software changes incrementally — to increasing percentages of users or traffic — using feature flags, canary deployments, and A/B testing. Automated metrics analysis decides whether to proceed or rollback based on predefined criteria.',
    whyItMatters:
      'Big bang releases are high-risk — a single deployment can affect all users. Progressive delivery decouples deployment from exposure, letting you validate real production behavior before committing a change to all users.',
    analogy:
      'Like a scientific trial with phases — Phase 1 tests on a small group for safety, Phase 2 tests on a larger group for efficacy, Phase 3 confirms at scale before full approval. Each phase gates the next.',
    soundsSmartToSay:
      '"We should move to progressive delivery with automated analysis — define what \'healthy\' looks like for error rate and latency, and let the system decide whether to proceed or rollback without human intervention."',
    commonConfusions: [
      'Progressive delivery is not just canary: It is the full practice combining feature flags, traffic splitting, automated metric analysis, and rollback — more than just routing a percentage of traffic.',
      'Progressive delivery requires mature observability: Automated promotion/rollback decisions are only as good as the metrics you define as success criteria.',
    ],
    relatedTerms: ['Canary Deployments', 'Feature Flags', 'Argo Rollouts', 'Flagger'],
  },
  {
    id: 'devops-toil',
    domain: 'devops',
    title: 'Toil Reduction',
    subtitle: 'Eliminating manual, repetitive operational work through automation',
    difficulty: 'beginner',
    tags: ['SRE', 'automation', 'efficiency'],
    definition:
      'Toil is manual, repetitive, automatable operational work that scales linearly with service load — restarting crashed services, manually acknowledging alerts, rotating credentials by hand. SRE practice targets reducing toil below 50% of an engineer\'s time by automating repetitive tasks.',
    whyItMatters:
      'Toil is not just inefficient — it is demoralizing and crowds out engineering work that would actually improve the system. Every hour spent on toil is an hour not spent preventing the next incident.',
    analogy:
      'Like a surgeon who spends half their time filing paperwork instead of operating. The paperwork is necessary, but automating it (electronic health records, auto-filing) frees surgeons for the skilled work only they can do.',
    soundsSmartToSay:
      '"This alert fires 15 times a week and the response is always the same — restart the pod. That is pure toil. We should either fix the root cause or automate the remediation, not have someone wake up for it at 3am."',
    commonConfusions: [
      'Toil vs hard work: Not all operational work is toil. Toil is specifically manual, repetitive, and automatable. Designing a new architecture is hard work but not toil.',
      'Toil budget: SRE practice suggests no more than 50% of an engineer\'s time should be toil. This is enforced culturally and measured — not just stated as a goal.',
    ],
    relatedTerms: ['SRE', 'Automation', 'Error Budget', 'Runbooks'],
  },
  {
    id: 'devops-dora-metrics',
    domain: 'devops',
    title: 'DORA Metrics',
    subtitle: 'Four key metrics that predict software delivery performance',
    difficulty: 'intermediate',
    tags: ['metrics', 'performance', 'delivery'],
    definition:
      'DORA (DevOps Research and Assessment) metrics are four evidence-based measures of software delivery performance: Deployment Frequency (how often you deploy), Lead Time for Changes (time from commit to production), Change Failure Rate (percentage of deployments causing incidents), and Time to Restore Service (how long to recover from a failure).',
    whyItMatters:
      'DORA research shows elite teams deploy multiple times per day with sub-hour lead times, while low performers deploy monthly with multi-week lead times. These four metrics diagnose where your delivery pipeline is bottlenecked and predict overall organizational performance.',
    analogy:
      'Like vital signs in medicine — heart rate, blood pressure, temperature, and respiratory rate give you a complete picture of health without running every test. DORA metrics give you a complete picture of delivery health without measuring everything.',
    soundsSmartToSay:
      '"Our lead time is six days and change failure rate is 20% — that puts us in the medium performer bucket. To reach elite, we need to invest in test coverage and deployment automation, not just ask people to go faster."',
    commonConfusions: [
      'DORA metrics are lagging indicators: They tell you where you are, not why. Use them to identify areas for investigation, then dig into root causes.',
      'High deployment frequency and low change failure rate are not in tension: Elite performers deploy more often AND have lower failure rates because frequent small changes are easier to test and review.',
    ],
    relatedTerms: ['CI/CD', 'SRE', 'Lead Time', 'Change Failure Rate'],
  },
  {
    id: 'devops-artifact-registry',
    domain: 'devops',
    title: 'Artifact Registry',
    subtitle: 'Version-controlled storage for build outputs and container images',
    difficulty: 'beginner',
    tags: ['CI/CD', 'containers', 'versioning'],
    definition:
      'An artifact registry stores the outputs of CI builds — container images, npm packages, Maven JARs, Helm charts, Python packages — with versioning, access controls, and vulnerability scanning. Examples include Docker Hub, GitHub Packages, JFrog Artifactory, AWS ECR, and Google Artifact Registry.',
    whyItMatters:
      'You need a single source of truth for your build artifacts that is versioned, signed, and auditable. Pulling random container images from the internet or rebuilding from source in every environment creates security, reproducibility, and provenance problems.',
    analogy:
      'Like a library for your build outputs. Instead of building books from scratch every time (rebuilding from source), you retrieve a specific, catalogued edition (versioned artifact). The librarian (registry) knows who checked out what and can flag damaged editions (vulnerable images).',
    soundsSmartToSay:
      '"Our deployment should reference a specific immutable image digest, not a mutable tag like \'latest\' — tags can be overwritten, but a digest permanently identifies exactly what is deployed."',
    commonConfusions: [
      'Artifact registry vs source control: Source control stores code. Artifact registries store compiled, packaged, and tested outputs. You cannot deploy source code directly.',
      'Mutable tags (latest, v1) vs immutable digests: Tags can be overwritten. Digests (sha256:abc...) are content-addressed and never change. Always deploy by digest in production.',
    ],
    relatedTerms: ['Docker', 'CI/CD', 'Image Scanning', 'Supply Chain Security'],
  },
  {
    id: 'devops-oncall',
    domain: 'devops',
    title: 'On-Call Practices',
    subtitle: 'Running a sustainable, effective incident response rotation',
    difficulty: 'intermediate',
    tags: ['reliability', 'incident response', 'SRE'],
    definition:
      'On-call is the practice of having engineers available outside business hours to respond to production incidents. Effective on-call programs define escalation paths, set severity thresholds for paging, ensure runbooks exist for every alert, and measure alert quality to reduce unnecessary pages.',
    whyItMatters:
      'Poorly designed on-call creates burnout, turnover, and a culture where engineers fear pushing code late in a cycle. Well-designed on-call catches real incidents quickly, with minimal noise and sustainable rotation schedules.',
    analogy:
      'Like an emergency room on-call rotation for doctors — the goal is rapid response to genuine emergencies, not having doctors paged for every routine patient question. Triage protocols determine what wakes someone up at 3am.',
    soundsSmartToSay:
      '"We have 40 alerts that fired last week and only 3 required human action — we need to either fix or silence the other 37 because alert fatigue means on-call engineers start ignoring everything, including the real incidents."',
    commonConfusions: [
      'On-call is not the same as being available 24/7: Well-designed on-call pages rarely and only for actionable incidents. Engineers should get uninterrupted sleep most nights.',
      'On-call rotation vs escalation: An on-call rotation decides who handles the first page. An escalation path defines who gets called if the first responder cannot resolve the issue.',
    ],
    relatedTerms: ['Incident Response', 'SRE', 'Runbooks', 'Alert Fatigue'],
  },
  {
    id: 'devops-karpenter',
    domain: 'devops',
    title: 'Karpenter',
    subtitle: 'Just-in-time Kubernetes node provisioning',
    difficulty: 'advanced',
    tags: ['kubernetes', 'autoscaling', 'cloud cost'],
    definition:
      'Karpenter is an open-source Kubernetes node provisioner (originally from AWS) that automatically launches exactly the right compute resources for your workloads — selecting the best instance type, size, and purchase option (spot/on-demand) based on pending pod requirements, within seconds.',
    whyItMatters:
      'Traditional cluster autoscaling adds nodes in pre-defined increments after a delay. Karpenter provisions the precise instance needed in under 60 seconds, reducing both over-provisioning waste and pod scheduling latency.',
    analogy:
      'Like a just-in-time delivery warehouse instead of buying inventory in bulk. Instead of pre-ordering boxes of the same size, you order the exact box size needed for each shipment, arriving just before you need to pack it.',
    soundsSmartToSay:
      '"With Karpenter we went from 15-minute scale-out events to 60 seconds, and spot instance coverage went from 30% to 70% because Karpenter automatically selects the best instance family for each workload."',
    commonConfusions: [
      'Karpenter vs cluster autoscaler: The cluster autoscaler scales existing node groups. Karpenter bypasses node groups and provisions individual instances directly — more flexible and faster.',
      'Karpenter vs KEDA: Karpenter scales nodes (infrastructure). KEDA scales pods (workloads) based on external metrics like queue depth. They complement each other.',
    ],
    relatedTerms: ['Kubernetes', 'Auto Scaling', 'Spot Instances', 'FinOps'],
  },
  {
    id: 'devops-policy-as-code',
    domain: 'devops',
    title: 'Policy as Code',
    subtitle: 'Automating governance through machine-readable policies',
    difficulty: 'intermediate',
    tags: ['governance', 'OPA', 'compliance'],
    definition:
      'Policy as Code defines security, compliance, and operational rules as code files (using tools like Open Policy Agent/Rego, Checkov, or Sentinel) that are version-controlled and automatically enforced in CI/CD pipelines and Kubernetes admission controllers — preventing non-compliant infrastructure from ever being deployed.',
    whyItMatters:
      'Manual policy review does not scale to hundreds of engineers deploying dozens of times per day. Automated policy enforcement at the pipeline and deployment level catches misconfigurations (public S3 buckets, missing encryption, over-privileged IAM roles) before they reach production.',
    analogy:
      'Like building code enforcement automated into the building permit system. Instead of an inspector reviewing every plan manually, the permit software automatically rejects designs that violate zoning laws before anyone breaks ground.',
    soundsSmartToSay:
      '"We use OPA Gatekeeper as an admission controller — any pod without resource limits or a readiness probe is automatically rejected at deployment time, not caught in a manual audit weeks later."',
    commonConfusions: [
      'OPA vs Checkov vs Sentinel: OPA is a general policy engine used at runtime (Kubernetes admission). Checkov scans IaC files before deployment. Sentinel is HashiCorp\'s policy framework for Terraform/Vault.',
      'Policy as Code vs compliance audits: Policy as Code provides continuous automated compliance. Audits verify whether policies are correct and sufficient. Both are needed.',
    ],
    relatedTerms: ['OPA', 'Kubernetes Admission Control', 'Compliance as Code', 'IaC Security'],
  },
  {
    id: 'devops-multi-cluster',
    domain: 'devops',
    title: 'Multi-Cluster Kubernetes',
    subtitle: 'Managing workloads across multiple Kubernetes clusters',
    difficulty: 'advanced',
    tags: ['kubernetes', 'multi-cluster', 'platform'],
    definition:
      'Multi-cluster Kubernetes management involves running and coordinating workloads across multiple Kubernetes clusters — for reasons of compliance (data residency), availability (regional failover), or isolation (dev/staging/prod). Tools like ArgoCD, Fleet, and Cluster API help manage this complexity.',
    whyItMatters:
      'A single Kubernetes cluster is a single point of failure and a single blast radius. Multi-cluster enables regional high availability, compliance-driven data segregation, and stronger isolation between environments.',
    analogy:
      'Like operating in multiple AWS regions — each region is independent, you manage them consistently via IaC, and failure in one region does not cascade to others. Multi-cluster applies the same principle to Kubernetes.',
    soundsSmartToSay:
      '"We need a multi-cluster strategy for GDPR compliance — EU customer data must not leave EU clusters, but our platform tooling needs to work identically across all regions."',
    commonConfusions: [
      'Multi-cluster vs multi-tenancy: Multi-cluster means separate cluster instances. Multi-tenancy means multiple teams share one cluster with namespace-level isolation. Multi-cluster provides stronger isolation at higher cost.',
      'Fleet management tools (ArgoCD, Rancher Fleet) deploy applications to multiple clusters from a central control plane — without them, multi-cluster management becomes manual and error-prone.',
    ],
    relatedTerms: ['Kubernetes', 'GitOps', 'ArgoCD', 'Cluster API'],
  },
  {
    id: 'devops-ebpf',
    domain: 'devops',
    title: 'eBPF',
    subtitle: 'Running sandboxed programs in the Linux kernel for observability and security',
    difficulty: 'advanced',
    tags: ['linux', 'kernel', 'observability', 'networking'],
    definition:
      'eBPF (extended Berkeley Packet Filter) is a kernel technology that allows sandboxed programs to run in the Linux kernel without changing kernel source code. It enables high-performance observability (Cilium, Falco), network policy enforcement, and security monitoring with minimal overhead — tracing every syscall and network packet without modifying application code.',
    whyItMatters:
      'Traditional observability requires either code instrumentation or full kernel module writing. eBPF provides kernel-level visibility without either — observing every process, network connection, and syscall in real time with production-safe sandboxing.',
    analogy:
      'Like installing transparent monitoring on every road in a city without tearing up the pavement. eBPF attaches observers to kernel execution paths the way you would add sensors to existing infrastructure — minimal disruption, maximum visibility.',
    soundsSmartToSay:
      '"Cilium uses eBPF for network policy enforcement — it is faster than iptables and gives us per-process visibility that traditional firewall rules cannot provide."',
    commonConfusions: [
      'eBPF vs kernel modules: Kernel modules are privileged and can crash the kernel. eBPF programs are sandboxed and verified by the kernel before execution — much safer for production.',
      'eBPF is not just for networking: The Linux kernel exposes dozens of eBPF hook points for security (syscall tracing), performance profiling, and container observability.',
    ],
    relatedTerms: ['Linux Kernel', 'Cilium', 'Falco', 'Observability'],
  },
  {
    id: 'devops-supply-chain',
    domain: 'devops',
    title: 'Software Supply Chain Security',
    subtitle: 'Securing the pipeline from code to production',
    difficulty: 'intermediate',
    tags: ['security', 'pipeline', 'SBOM'],
    definition:
      'Software supply chain security focuses on protecting every component and step in the process of building and deploying software — source code, dependencies, build systems, artifact registries, deployment pipelines — to prevent malicious code from being injected between development and production.',
    whyItMatters:
      'SolarWinds showed that build pipelines are high-value attack targets. SLSA (Supply chain Levels for Software Artifacts) is the emerging framework for verifying that software was built from the expected source by the expected process.',
    analogy:
      'Like pharmaceutical supply chain verification — every pill must be traced from raw ingredients through manufacturing to pharmacy. A counterfeit pill inserted anywhere in the chain causes harm. Software supply chain security tracks provenance the same way.',
    soundsSmartToSay:
      '"We should sign our container images with Cosign and verify signatures at deployment time — an unsigned image from an untrusted registry should never reach production."',
    commonConfusions: [
      'SBOM vs dependency scanning: An SBOM lists components. Dependency scanning checks those components against CVE databases. You need both.',
      'SLSA framework levels: SLSA 1 requires documentation. SLSA 4 requires hermetic, reproducible builds with verified provenance. Most organizations should target SLSA 2-3.',
    ],
    relatedTerms: ['SBOM', 'SLSA', 'Image Signing', 'Build Provenance'],
  },
];
