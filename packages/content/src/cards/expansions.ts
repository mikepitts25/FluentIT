import type { Card } from '../types';

type ExpansionSeed = {
  id: string;
  domain: Card['domain'];
  title: string;
  subtitle: string;
  difficulty: Card['difficulty'];
  tags: string[];
  definition: string;
  whyItMatters: string;
  commonConfusion: string;
  relatedTerms: string[];
  analogy?: string;
  soundsSmartToSay?: string;
};

const domainAnalogies: Record<Card['domain'], string> = {
  cyber:
    'Like office security controls: each guard, badge reader, and camera covers a different path, and the system works only when the gaps between them are understood.',
  devops:
    'Like a factory floor: the tool matters less than the repeatable process, the visible quality checks, and the ability to stop the line when something is unsafe.',
  cloud:
    'Like operating a modern utility building: the provider supplies shared infrastructure, but your team still controls layout, access, usage, and failure planning.',
  networking:
    'Like a city road system: addresses, routes, signs, toll booths, and traffic rules all need to line up before traffic moves reliably.',
  data:
    'Like a supply chain for information: raw material becomes trusted output only when ownership, quality checks, storage, and delivery paths are explicit.',
  ai:
    'Like adding a specialist assistant to a team: value depends on the task, the available context, the review process, and clear operating limits.',
  syseng:
    'Like engineering a bridge: requirements, interfaces, load assumptions, failure modes, and operations all need to be designed together.',
  coding:
    'Like building with interchangeable parts: the code stays easier to change when boundaries, contracts, and side effects are made explicit.',
  integration:
    'Like connecting different departments with forms and handoffs: the work succeeds when format, timing, ownership, and exception handling are clear.',
  agile:
    'Like running a small operating rhythm: planning, feedback, delivery, and improvement only help when they create shared visibility and better decisions.',
  governance:
    'Like corporate guardrails: policies, controls, evidence, and ownership keep teams moving without turning every decision into a one-off debate.',
  observability:
    'Like an operations room: signals are valuable when they let responders see user impact, narrow a cause, and decide what happens next.',
  identity:
    'Like a secure building: identity establishes who is present and access policy decides which doors that identity may open.',
  architecture:
    'Like a city plan: service boundaries, roads, capacity, and emergency routes matter because every trade-off shapes later movement.',
  appsec:
    'Like inspecting a supply chain: secure software depends on design, code, dependencies, delivery steps, and operating controls.',
};

const seeds: ExpansionSeed[] = [
  {
    id: 'cyber-cspm-expansion',
    domain: 'cyber',
    title: 'Cloud Security Posture Management',
    subtitle: 'Finding risky cloud configuration before attackers do',
    difficulty: 'intermediate',
    tags: ['cloud security', 'posture', 'misconfiguration'],
    definition:
      'Cloud Security Posture Management (CSPM) continuously scans cloud accounts for risky configuration, exposed resources, policy violations, and drift from security baselines.',
    whyItMatters:
      'Many cloud incidents start with a simple misconfiguration such as public storage, permissive IAM, or unencrypted data. CSPM catches those issues across accounts before they become breaches.',
    commonConfusion:
      'CSPM is not the same as vulnerability scanning. CSPM checks cloud configuration and control posture; vulnerability scanners inspect software flaws.',
    relatedTerms: ['CNAPP', 'IAM', 'Security Baseline', 'Cloud Asset Inventory'],
  },
  {
    id: 'cyber-cwpp',
    domain: 'cyber',
    title: 'Cloud Workload Protection',
    subtitle: 'Runtime security for cloud servers, containers, and functions',
    difficulty: 'intermediate',
    tags: ['cloud security', 'runtime', 'containers'],
    definition:
      'Cloud Workload Protection Platforms (CWPP) monitor and protect workloads running in cloud environments, including virtual machines, containers, Kubernetes pods, and sometimes serverless functions.',
    whyItMatters:
      'Secure configuration is only half the story. Once workloads are running, teams need visibility into suspicious process activity, network behavior, malware, and privilege abuse.',
    commonConfusion:
      'CSPM looks at cloud configuration posture. CWPP focuses on runtime workload behavior. Mature cloud security programs usually need both.',
    relatedTerms: ['Runtime Security', 'Container Security', 'EDR', 'Kubernetes'],
  },
  {
    id: 'cyber-secret-scanning',
    domain: 'cyber',
    title: 'Secret Scanning',
    subtitle: 'Detecting credentials before they leak into production',
    difficulty: 'beginner',
    tags: ['credentials', 'git', 'automation'],
    definition:
      'Secret scanning searches source code, build logs, tickets, and artifacts for exposed API keys, private keys, tokens, passwords, and other credentials.',
    whyItMatters:
      'A single leaked token can bypass every network control. Automated secret scanning shortens the time between exposure and revocation, especially in fast-moving repositories.',
    commonConfusion:
      'Secret scanning does not replace secret management. Scanning finds mistakes; vaults and managed secret stores prevent teams from hard-coding secrets in the first place.',
    relatedTerms: ['Secrets Manager', 'Token Revocation', 'Pre-Commit Hook', 'Credential Rotation'],
  },
  {
    id: 'cyber-passwordless-auth',
    domain: 'cyber',
    title: 'Passwordless Authentication',
    subtitle: 'Signing in without reusable passwords',
    difficulty: 'beginner',
    tags: ['identity', 'authentication', 'phishing'],
    definition:
      'Passwordless authentication replaces reusable passwords with stronger factors such as passkeys, hardware security keys, device-bound credentials, or magic links.',
    whyItMatters:
      'Passwords are easy to phish, reuse, spray, and leak. Passwordless sign-in reduces account takeover risk by removing the shared secret attackers most often target.',
    commonConfusion:
      'Passwordless does not always mean MFA is gone. Strong passwordless systems still prove possession of a trusted device or cryptographic key.',
    relatedTerms: ['Passkey', 'FIDO2', 'WebAuthn', 'MFA'],
  },
  {
    id: 'cyber-just-in-time-access',
    domain: 'cyber',
    title: 'Just-in-Time Access',
    subtitle: 'Granting privileged access only when needed',
    difficulty: 'intermediate',
    tags: ['identity', 'privilege', 'access control'],
    definition:
      'Just-in-Time access grants elevated permissions for a limited time after approval or policy checks, then automatically removes those permissions.',
    whyItMatters:
      'Standing admin access creates a large blast radius. JIT access lets administrators do necessary work while reducing how long powerful credentials exist.',
    commonConfusion:
      'JIT access is not the same as least privilege. Least privilege defines what someone can do; JIT limits when elevated access is active.',
    relatedTerms: ['PAM', 'Least Privilege', 'Break Glass Access', 'Access Review'],
  },
  {
    id: 'cyber-threat-intelligence-platform',
    domain: 'cyber',
    title: 'Threat Intelligence Platform',
    subtitle: 'Turning external threat signals into operational context',
    difficulty: 'advanced',
    tags: ['threat intelligence', 'SOC', 'indicators'],
    definition:
      'A Threat Intelligence Platform centralizes indicators, adversary reports, malware details, and campaign context so security teams can enrich alerts and prioritize investigations.',
    whyItMatters:
      'Raw indicators are noisy. A useful platform connects IPs, domains, hashes, tactics, and confidence levels so analysts can decide what matters to their environment.',
    commonConfusion:
      'Threat intelligence is not just buying feeds. The value comes from relevance, curation, confidence scoring, and integration into detection and response workflows.',
    relatedTerms: ['IOC', 'MITRE ATT&CK', 'SIEM', 'SOAR'],
  },
  {
    id: 'devops-progressive-delivery-expansion',
    domain: 'devops',
    title: 'Progressive Delivery',
    subtitle: 'Releasing changes gradually with automated safety checks',
    difficulty: 'intermediate',
    tags: ['release', 'automation', 'deployment'],
    definition:
      'Progressive delivery rolls out changes in controlled stages, using metrics, feature flags, and automated analysis to decide whether to continue or roll back.',
    whyItMatters:
      'Big-bang releases concentrate risk. Gradual rollout limits blast radius and lets teams detect bad changes with real traffic before all users are affected.',
    commonConfusion:
      'Progressive delivery is broader than canary deployment. Canary is one rollout pattern; progressive delivery also includes flags, metrics, approvals, and rollback policy.',
    relatedTerms: ['Canary Deployment', 'Feature Flags', 'SLO', 'Rollback'],
  },
  {
    id: 'devops-canary-deployment',
    domain: 'devops',
    title: 'Canary Deployment',
    subtitle: 'Sending a small slice of traffic to a new version first',
    difficulty: 'beginner',
    tags: ['deployment', 'release', 'traffic'],
    definition:
      'A canary deployment releases a new version to a small percentage of users or instances before gradually expanding to the full fleet.',
    whyItMatters:
      'Production is the only environment with real traffic diversity. Canarying lets teams observe the new version under real conditions while limiting user impact.',
    commonConfusion:
      'Canary is not the same as blue-green. Blue-green switches between two full environments; canary shifts traffic gradually between versions.',
    relatedTerms: ['Blue-Green Deployment', 'Traffic Shaping', 'Rollback', 'Progressive Delivery'],
  },
  {
    id: 'devops-feature-flags-expansion',
    domain: 'devops',
    title: 'Feature Flags',
    subtitle: 'Separating deployment from release',
    difficulty: 'beginner',
    tags: ['release', 'experimentation', 'configuration'],
    definition:
      'Feature flags wrap behavior in runtime switches so code can be deployed without immediately exposing the feature to every user.',
    whyItMatters:
      'Flags let teams test in production, target cohorts, disable broken features quickly, and avoid long-lived branches that drift from main.',
    commonConfusion:
      'Feature flags are not free. Old flags become technical debt and must have owners, expiry dates, and cleanup work.',
    relatedTerms: ['Progressive Delivery', 'A/B Test', 'Kill Switch', 'Trunk-Based Development'],
  },
  {
    id: 'devops-deployment-rings',
    domain: 'devops',
    title: 'Deployment Rings',
    subtitle: 'Rolling out releases by audience or environment tier',
    difficulty: 'intermediate',
    tags: ['release', 'risk management', 'deployment'],
    definition:
      'Deployment rings group users, regions, or environments into ordered rollout stages, such as internal users, beta customers, one region, then global production.',
    whyItMatters:
      'Rings create a predictable path for exposure. Early rings catch issues with limited impact, while later rings get a release that has already survived real use.',
    commonConfusion:
      'Deployment rings are not only for massive companies. Small teams can use internal staff, friendly customers, and general availability as simple rings.',
    relatedTerms: ['Canary Deployment', 'Dogfooding', 'Release Management', 'Feature Flags'],
  },
  {
    id: 'devops-golden-signals',
    domain: 'devops',
    title: 'Golden Signals',
    subtitle: 'The four core service health measurements',
    difficulty: 'beginner',
    tags: ['observability', 'metrics', 'SRE'],
    definition:
      'The golden signals are latency, traffic, errors, and saturation. They provide a compact view of whether a service is fast, used, failing, or running out of capacity.',
    whyItMatters:
      'Dashboards with hundreds of charts hide the obvious. Golden signals focus responders on the measurements that usually explain user-facing service health.',
    commonConfusion:
      'Golden signals are not the only metrics a system needs. They are the starting point for service health, not a replacement for domain-specific business metrics.',
    relatedTerms: ['SRE', 'Latency', 'Error Rate', 'Saturation'],
  },
  {
    id: 'devops-runbook-automation',
    domain: 'devops',
    title: 'Runbook Automation',
    subtitle: 'Turning operational procedures into repeatable actions',
    difficulty: 'intermediate',
    tags: ['operations', 'incident response', 'automation'],
    definition:
      'Runbook automation converts documented operational steps, such as restarting services or collecting diagnostics, into approved scripts or workflows.',
    whyItMatters:
      'Manual runbooks are slow under pressure and easy to execute inconsistently. Automation reduces response time and preserves operator attention for judgment calls.',
    commonConfusion:
      'Runbook automation should not hide risky actions. Good workflows include approvals, audit logs, dry runs, and clear rollback paths.',
    relatedTerms: ['Incident Response', 'SOAR', 'PagerDuty', 'Operational Playbook'],
  },
  {
    id: 'devops-incident-retrospective',
    domain: 'devops',
    title: 'Incident Retrospective',
    subtitle: 'Learning from outages without blaming individuals',
    difficulty: 'beginner',
    tags: ['incident', 'SRE', 'learning'],
    definition:
      'An incident retrospective reviews what happened, why it happened, how detection and response worked, and what improvements will reduce future risk.',
    whyItMatters:
      'Outages reveal how the real system behaves. A good retrospective turns pain into concrete improvements in alerts, tests, architecture, and process.',
    commonConfusion:
      'A retrospective is not a punishment meeting. The goal is to improve the system, not find the person closest to the failure.',
    relatedTerms: ['Postmortem', 'Root Cause Analysis', 'Corrective Action', 'Blameless Culture'],
  },
  {
    id: 'devops-capacity-planning',
    domain: 'devops',
    title: 'Capacity Planning',
    subtitle: 'Forecasting resource needs before saturation hits',
    difficulty: 'intermediate',
    tags: ['capacity', 'performance', 'forecasting'],
    definition:
      'Capacity planning estimates future compute, storage, network, and database needs based on growth, seasonality, performance limits, and business events.',
    whyItMatters:
      'Autoscaling helps with short-term variation, but teams still need to know when architecture, quotas, budgets, or data stores will hit hard limits.',
    commonConfusion:
      'Capacity planning is not just buying more servers. It also includes removing bottlenecks, setting quotas, and understanding which resource saturates first.',
    relatedTerms: ['Autoscaling', 'Load Testing', 'Quota', 'Saturation'],
  },
  {
    id: 'devops-autoscaling-policy',
    domain: 'devops',
    title: 'Autoscaling Policy',
    subtitle: 'Rules that add or remove capacity automatically',
    difficulty: 'intermediate',
    tags: ['scaling', 'cloud', 'operations'],
    definition:
      'An autoscaling policy defines when infrastructure should add or remove capacity using signals such as CPU, queue depth, request rate, or custom application metrics.',
    whyItMatters:
      'Good autoscaling absorbs traffic spikes without permanently overpaying for idle capacity. Bad autoscaling can flap, lag behind demand, or scale the wrong tier.',
    commonConfusion:
      'CPU is not always the right scaling signal. For workers, queue depth or processing latency often reflects user impact better than CPU utilization.',
    relatedTerms: ['Horizontal Scaling', 'Queue Depth', 'Target Tracking', 'Cooldown'],
  },
  {
    id: 'devops-policy-as-code-expansion',
    domain: 'devops',
    title: 'Policy as Code',
    subtitle: 'Enforcing operational rules through versioned code',
    difficulty: 'intermediate',
    tags: ['governance', 'automation', 'security'],
    definition:
      'Policy as code expresses rules about infrastructure, deployment, security, or compliance in machine-readable code that can run in CI, admission control, or runtime checks.',
    whyItMatters:
      'Manual policy review does not scale. Automated policy checks catch forbidden public buckets, missing tags, unapproved regions, or unsafe container settings before deployment.',
    commonConfusion:
      'Policy as code should guide teams, not only block them. Good policies include clear failure messages and documented remediation paths.',
    relatedTerms: ['OPA', 'Conftest', 'Admission Controller', 'Compliance Automation'],
  },
  {
    id: 'devops-platform-engineering-expansion',
    domain: 'devops',
    title: 'Platform Engineering',
    subtitle: 'Building internal platforms that make delivery easier',
    difficulty: 'intermediate',
    tags: ['platform', 'developer experience', 'operations'],
    definition:
      'Platform engineering creates internal tools, workflows, and paved roads that help product teams build, deploy, observe, and operate software with less cognitive load.',
    whyItMatters:
      'As systems grow, every team reinventing deployment, secrets, observability, and infrastructure slows delivery. A platform team turns repeated operational needs into reusable capabilities.',
    commonConfusion:
      'Platform engineering is not a rebrand of ticket-based ops. The platform should be a product with users, documentation, support, and feedback loops.',
    relatedTerms: ['Internal Developer Platform', 'Golden Path', 'DevEx', 'Self-Service'],
  },
  {
    id: 'devops-developer-portal',
    domain: 'devops',
    title: 'Developer Portal',
    subtitle: 'A catalog and front door for internal engineering services',
    difficulty: 'beginner',
    tags: ['developer experience', 'catalog', 'platform'],
    definition:
      'A developer portal centralizes service ownership, documentation, templates, APIs, runbooks, deployment links, and operational metadata for engineering teams.',
    whyItMatters:
      'When engineers cannot find who owns a service or how to deploy it, delivery slows and incidents take longer. A portal makes operational knowledge discoverable.',
    commonConfusion:
      'A portal is only useful if it stays connected to real sources of truth. Static wiki pages rot quickly without automation and ownership.',
    relatedTerms: ['Backstage', 'Service Catalog', 'Golden Path', 'Ownership'],
  },
  {
    id: 'devops-service-ownership',
    domain: 'devops',
    title: 'Service Ownership',
    subtitle: 'Making responsibility explicit for each production service',
    difficulty: 'beginner',
    tags: ['operations', 'ownership', 'on-call'],
    definition:
      'Service ownership assigns a team accountable for a service across its lifecycle, including design, deployment, reliability, documentation, and incident response.',
    whyItMatters:
      'Production systems fail at boundaries when nobody knows who owns them. Explicit ownership shortens incident response and drives long-term reliability work.',
    commonConfusion:
      'Ownership does not mean one team does every task alone. It means accountability is clear, dependencies are known, and escalation paths are documented.',
    relatedTerms: ['On-Call', 'Service Catalog', 'Runbook', 'SLO'],
  },
  {
    id: 'devops-environment-promotion',
    domain: 'devops',
    title: 'Environment Promotion',
    subtitle: 'Moving the same artifact through test, staging, and production',
    difficulty: 'beginner',
    tags: ['deployment', 'pipeline', 'release'],
    definition:
      'Environment promotion moves one built artifact through increasingly production-like environments instead of rebuilding separately for each stage.',
    whyItMatters:
      'Rebuilding per environment creates uncertainty about what actually shipped. Promoting the same artifact makes test results meaningful for production.',
    commonConfusion:
      'Promotion does not mean every environment has identical configuration. The artifact should be identical; environment-specific config should be injected safely at runtime.',
    relatedTerms: ['Artifact Registry', 'Immutable Build', 'Staging', 'Pipeline'],
  },
  {
    id: 'devops-immutable-infrastructure-expansion',
    domain: 'devops',
    title: 'Immutable Infrastructure',
    subtitle: 'Replacing servers instead of changing them in place',
    difficulty: 'intermediate',
    tags: ['infrastructure', 'deployment', 'reliability'],
    definition:
      'Immutable infrastructure treats servers, containers, or machine images as disposable. Changes create a new version, and old instances are replaced rather than patched manually.',
    whyItMatters:
      'Mutable servers drift over time and become hard to reproduce. Immutable deployments make rollback, scaling, and disaster recovery more predictable.',
    commonConfusion:
      'Immutable infrastructure does not mean state disappears. Stateful data still needs durable storage, backup, and migration strategy.',
    relatedTerms: ['Golden Image', 'Blue-Green Deployment', 'IaC', 'Drift'],
  },
  {
    id: 'devops-drift-detection',
    domain: 'devops',
    title: 'Drift Detection',
    subtitle: 'Finding when live systems differ from declared state',
    difficulty: 'intermediate',
    tags: ['IaC', 'configuration', 'governance'],
    definition:
      'Drift detection compares live infrastructure or configuration against the desired state defined in code, policy, or a configuration database.',
    whyItMatters:
      'Manual emergency changes are sometimes necessary, but untracked drift breaks repeatability and can hide security or reliability risk.',
    commonConfusion:
      'Drift detection is not automatically drift correction. Some systems alert first because blindly overwriting production changes can cause outages.',
    relatedTerms: ['Terraform Plan', 'GitOps', 'Configuration Management', 'Desired State'],
  },
  {
    id: 'devops-container-image-scanning',
    domain: 'devops',
    title: 'Container Image Scanning',
    subtitle: 'Checking container images for vulnerable packages',
    difficulty: 'beginner',
    tags: ['containers', 'security', 'CI'],
    definition:
      'Container image scanning inspects image layers, operating system packages, language dependencies, and metadata for known vulnerabilities and policy violations.',
    whyItMatters:
      'Containers often include more software than teams realize. Scanning catches vulnerable base images and dependencies before images reach production.',
    commonConfusion:
      'A clean scan does not prove an image is secure. It only means the scanner did not find known issues under its rules and databases.',
    relatedTerms: ['SBOM', 'Base Image', 'CVE', 'Artifact Registry'],
  },
  {
    id: 'devops-dependency-pinning',
    domain: 'devops',
    title: 'Dependency Pinning',
    subtitle: 'Locking dependency versions for repeatable builds',
    difficulty: 'beginner',
    tags: ['builds', 'dependencies', 'supply chain'],
    definition:
      'Dependency pinning records exact dependency versions or checksums so builds use known inputs instead of whatever version is newest at build time.',
    whyItMatters:
      'Repeatable builds are impossible when dependencies float unpredictably. Pinning reduces surprise breakage and improves supply chain review.',
    commonConfusion:
      'Pinning is not the same as never updating. Pinned dependencies still need routine upgrades, vulnerability review, and automated pull requests.',
    relatedTerms: ['Lockfile', 'SBOM', 'Reproducible Build', 'Version Constraint'],
  },
  {
    id: 'devops-ephemeral-environments',
    domain: 'devops',
    title: 'Ephemeral Environments',
    subtitle: 'Temporary preview environments for individual changes',
    difficulty: 'intermediate',
    tags: ['testing', 'preview', 'CI'],
    definition:
      'Ephemeral environments are short-lived application deployments created for a branch, pull request, demo, or test run, then destroyed automatically.',
    whyItMatters:
      'Shared staging environments become bottlenecks and accumulate stale state. Ephemeral environments let reviewers test changes in isolation.',
    commonConfusion:
      'Ephemeral environments still need production-like dependencies where it matters. A toy preview that skips auth, queues, or migrations can hide real integration risk.',
    relatedTerms: ['Preview Deployment', 'Pull Request Environment', 'IaC', 'Test Data'],
  },
  {
    id: 'devops-release-train',
    domain: 'devops',
    title: 'Release Train',
    subtitle: 'Shipping on a predictable schedule',
    difficulty: 'beginner',
    tags: ['release', 'planning', 'coordination'],
    definition:
      'A release train is a fixed release cadence where completed work ships at scheduled intervals, and unfinished work waits for a future train.',
    whyItMatters:
      'Predictable release windows help coordinate testing, communication, compliance, and customer readiness, especially in larger organizations.',
    commonConfusion:
      'A release train is not the same as slow delivery. Teams can still deploy frequently internally while packaging customer-visible releases on a cadence.',
    relatedTerms: ['Release Management', 'Change Freeze', 'Deployment Window', 'Feature Flag'],
  },
  {
    id: 'cloud-landing-zone',
    domain: 'cloud',
    title: 'Cloud Landing Zone',
    subtitle: 'A prepared foundation for cloud workloads',
    difficulty: 'intermediate',
    tags: ['architecture', 'governance', 'foundation'],
    definition:
      'A cloud landing zone is a preconfigured cloud environment with account structure, networking, identity, logging, security controls, and guardrails ready for workloads.',
    whyItMatters:
      'Without a landing zone, every team invents its own cloud baseline. That creates inconsistent security, billing, networking, and operational patterns.',
    commonConfusion:
      'A landing zone is not one account or one VPC. It is the foundation pattern that defines how many accounts, networks, policies, logs, and shared services fit together.',
    relatedTerms: ['Account Vending', 'Guardrails', 'Cloud Governance', 'Shared Services'],
  },
  {
    id: 'cloud-account-structure',
    domain: 'cloud',
    title: 'Cloud Account Structure',
    subtitle: 'Separating workloads for ownership, billing, and blast radius',
    difficulty: 'beginner',
    tags: ['accounts', 'governance', 'billing'],
    definition:
      'Cloud account structure organizes environments, teams, and workloads into separate accounts, subscriptions, or projects with clear ownership and policy boundaries.',
    whyItMatters:
      'One shared cloud account becomes a security and billing mess. Separate accounts make access control, cost tracking, compliance, and incident containment easier.',
    commonConfusion:
      'Account separation is not only for large enterprises. Even small teams benefit from separating production, staging, security tooling, and sandbox workloads.',
    relatedTerms: ['AWS Organizations', 'Azure Subscription', 'GCP Project', 'Blast Radius'],
  },
  {
    id: 'cloud-shared-responsibility',
    domain: 'cloud',
    title: 'Shared Responsibility Model',
    subtitle: 'Knowing what the cloud provider secures and what you still own',
    difficulty: 'beginner',
    tags: ['security', 'governance', 'cloud basics'],
    definition:
      'The shared responsibility model defines which security responsibilities belong to the cloud provider and which remain with the customer.',
    whyItMatters:
      'Cloud does not remove security ownership. Providers secure the underlying infrastructure; customers still configure identity, data protection, network exposure, and workload security.',
    commonConfusion:
      'The split changes by service model. Customers own more in IaaS virtual machines than in managed databases or serverless platforms.',
    relatedTerms: ['IaaS', 'PaaS', 'SaaS', 'Cloud Security'],
  },
  {
    id: 'cloud-autoscaling-groups',
    domain: 'cloud',
    title: 'Autoscaling Groups',
    subtitle: 'Automatically changing compute capacity',
    difficulty: 'beginner',
    tags: ['compute', 'scaling', 'availability'],
    definition:
      'Autoscaling groups manage a fleet of compute instances by launching, terminating, and replacing instances based on desired capacity and health checks.',
    whyItMatters:
      'They keep services available when instances fail and adjust capacity when demand changes, reducing both outages and overprovisioning.',
    commonConfusion:
      'Autoscaling groups do not make an application stateless. The app must still handle instance replacement, external sessions, and graceful shutdown.',
    relatedTerms: ['Load Balancer', 'Launch Template', 'Health Check', 'Horizontal Scaling'],
  },
  {
    id: 'cloud-object-storage-lifecycle',
    domain: 'cloud',
    title: 'Object Storage Lifecycle Policies',
    subtitle: 'Moving or deleting objects automatically over time',
    difficulty: 'beginner',
    tags: ['storage', 'cost', 'retention'],
    definition:
      'Object storage lifecycle policies transition, archive, or delete objects based on age, prefix, tags, or version status.',
    whyItMatters:
      'Logs, backups, exports, and media can grow without limit. Lifecycle rules control cost and retention without manual cleanup scripts.',
    commonConfusion:
      'Lifecycle policies are not backups. They manage object age and storage class; backup strategy still needs recovery objectives and protection from accidental deletion.',
    relatedTerms: ['S3', 'Blob Storage', 'Cold Storage', 'Retention'],
  },
  {
    id: 'cloud-block-vs-object-storage',
    domain: 'cloud',
    title: 'Block vs Object Storage',
    subtitle: 'Two different storage models for different workloads',
    difficulty: 'beginner',
    tags: ['storage', 'architecture', 'performance'],
    definition:
      'Block storage presents disk-like volumes to servers, while object storage stores files as objects with metadata behind an API.',
    whyItMatters:
      'Databases usually need low-latency block storage. Backups, media, logs, and data lakes usually fit object storage better and cheaper.',
    commonConfusion:
      'Object storage is not a normal filesystem. Some tools make it look like one, but rename, locking, and consistency behavior can differ.',
    relatedTerms: ['EBS', 'S3', 'Blob Storage', 'IOPS'],
  },
  {
    id: 'cloud-private-endpoint',
    domain: 'cloud',
    title: 'Private Endpoint',
    subtitle: 'Accessing cloud services without public internet exposure',
    difficulty: 'intermediate',
    tags: ['networking', 'security', 'connectivity'],
    definition:
      'A private endpoint exposes a managed cloud service inside a private network using private IP addressing instead of a public service endpoint.',
    whyItMatters:
      'Private endpoints reduce internet exposure for databases, storage, queues, and APIs while keeping traffic inside controlled cloud networking paths.',
    commonConfusion:
      'A private endpoint does not automatically authorize access. IAM, resource policies, firewall rules, and DNS still need correct configuration.',
    relatedTerms: ['PrivateLink', 'VPC Endpoint', 'Private DNS', 'Managed Service'],
  },
  {
    id: 'cloud-service-quotas-expansion',
    domain: 'cloud',
    title: 'Service Quotas',
    subtitle: 'Provider limits that shape cloud architecture',
    difficulty: 'beginner',
    tags: ['limits', 'operations', 'planning'],
    definition:
      'Service quotas are cloud provider limits on resources such as instances, IP addresses, API calls, load balancers, storage, or regional capacity.',
    whyItMatters:
      'Quotas can turn a normal scale-up or disaster recovery event into a failure if limits are not known and raised before they are needed.',
    commonConfusion:
      'Quotas are not always hard technical limits. Some can be raised by request; others are fixed service limits that require architecture changes.',
    relatedTerms: ['Rate Limit', 'Capacity Planning', 'Region', 'Account Limit'],
  },
  {
    id: 'cloud-managed-identity',
    domain: 'cloud',
    title: 'Managed Identity',
    subtitle: 'Cloud-issued identity for workloads',
    difficulty: 'beginner',
    tags: ['identity', 'IAM', 'security'],
    definition:
      'Managed identity lets cloud workloads authenticate to services using a provider-managed identity instead of embedded credentials.',
    whyItMatters:
      'Hard-coded keys leak and require rotation. Managed identity provides short-lived credentials tied to the workload and controlled by IAM policy.',
    commonConfusion:
      'Managed identity solves authentication, not authorization. The identity still needs the right permissions and scope.',
    relatedTerms: ['Service Account', 'IAM Role', 'Workload Identity', 'Secretless'],
  },
  {
    id: 'cloud-key-management-service',
    domain: 'cloud',
    title: 'Key Management Service',
    subtitle: 'Managed creation and control of encryption keys',
    difficulty: 'intermediate',
    tags: ['encryption', 'security', 'keys'],
    definition:
      'A Key Management Service stores and controls cryptographic keys used to encrypt data, sign operations, or protect secrets across cloud services.',
    whyItMatters:
      'Centralized key management gives teams audit logs, rotation, access policy, and separation of duties without handling raw key material directly.',
    commonConfusion:
      'Using KMS does not mean all data is protected correctly. Teams must still choose what to encrypt, who can decrypt, and how keys are rotated or disabled.',
    relatedTerms: ['Encryption at Rest', 'Customer Managed Key', 'HSM', 'Envelope Encryption'],
  },
  {
    id: 'cloud-load-balancer',
    domain: 'cloud',
    title: 'Cloud Load Balancer',
    subtitle: 'Distributing traffic across healthy targets',
    difficulty: 'beginner',
    tags: ['networking', 'availability', 'traffic'],
    definition:
      'A cloud load balancer receives client traffic and distributes it across healthy backend targets such as instances, containers, functions, or services.',
    whyItMatters:
      'Load balancers provide availability, health-based routing, TLS termination, and a stable entry point while backend capacity changes.',
    commonConfusion:
      'A load balancer does not fix a slow dependency. It can route around unhealthy targets, but it cannot make every backend operation scalable.',
    relatedTerms: ['Health Check', 'TLS Termination', 'Target Group', 'Ingress'],
  },
  {
    id: 'cloud-dns-hosted-zone',
    domain: 'cloud',
    title: 'DNS Hosted Zone',
    subtitle: 'Managing domain records in cloud DNS',
    difficulty: 'beginner',
    tags: ['DNS', 'networking', 'routing'],
    definition:
      'A DNS hosted zone contains the authoritative records for a domain or subdomain, such as A, CNAME, MX, TXT, and service-specific routing records.',
    whyItMatters:
      'DNS controls how users and systems find services. Cloud DNS integrates record management with load balancers, certificates, failover, and automation.',
    commonConfusion:
      'A hosted zone is not the same as domain registration. Registration buys the name; the hosted zone tells resolvers where that name points.',
    relatedTerms: ['A Record', 'CNAME', 'TTL', 'Route 53'],
  },
  {
    id: 'cloud-cost-allocation-tags',
    domain: 'cloud',
    title: 'Cost Allocation Tags',
    subtitle: 'Labels that make cloud spend accountable',
    difficulty: 'beginner',
    tags: ['FinOps', 'billing', 'tags'],
    definition:
      'Cost allocation tags label cloud resources with attributes such as team, product, environment, owner, or cost center so billing data can be grouped meaningfully.',
    whyItMatters:
      'Cloud bills without tags are hard to explain. Good tagging lets teams find waste, charge costs back, and connect spend to business value.',
    commonConfusion:
      'Tags must be enforced early. Retroactively fixing missing tags across thousands of resources is slow and often incomplete.',
    relatedTerms: ['FinOps', 'Chargeback', 'Showback', 'Tag Policy'],
  },
  {
    id: 'cloud-rightsizing',
    domain: 'cloud',
    title: 'Rightsizing',
    subtitle: 'Matching resources to actual workload demand',
    difficulty: 'beginner',
    tags: ['FinOps', 'performance', 'cost'],
    definition:
      'Rightsizing adjusts instance types, database tiers, storage classes, and resource requests so capacity matches measured demand and performance needs.',
    whyItMatters:
      'Overprovisioning wastes money; underprovisioning hurts reliability. Rightsizing is one of the fastest ways to improve cloud unit economics.',
    commonConfusion:
      'Rightsizing is not a one-time cleanup. Workload behavior changes, so recommendations need recurring review and safe rollout.',
    relatedTerms: ['FinOps', 'Utilization', 'Reserved Capacity', 'Autoscaling'],
  },
  {
    id: 'cloud-reserved-capacity',
    domain: 'cloud',
    title: 'Reserved Capacity',
    subtitle: 'Committing to usage for lower cloud pricing',
    difficulty: 'intermediate',
    tags: ['FinOps', 'pricing', 'commitment'],
    definition:
      'Reserved capacity trades a usage commitment, often one or three years, for discounted pricing on predictable compute, database, or other cloud resources.',
    whyItMatters:
      'Steady production workloads can be much cheaper with commitments than with pure on-demand pricing, but bad commitments lock in waste.',
    commonConfusion:
      'Reserved capacity is a financial commitment, not a scaling mechanism. It may not reserve actual regional capacity unless the provider offers that specific option.',
    relatedTerms: ['Savings Plan', 'On-Demand', 'Committed Use Discount', 'FinOps'],
  },
  {
    id: 'cloud-spot-instances-expansion',
    domain: 'cloud',
    title: 'Spot Instances',
    subtitle: 'Discounted compute that can be interrupted',
    difficulty: 'intermediate',
    tags: ['compute', 'cost', 'batch'],
    definition:
      'Spot instances use spare cloud capacity at a discount, with the trade-off that the provider can interrupt them when capacity is needed elsewhere.',
    whyItMatters:
      'Batch jobs, CI workers, data processing, and fault-tolerant services can cut compute costs sharply when they handle interruption correctly.',
    commonConfusion:
      'Spot is not suitable for every workload. Stateful, latency-sensitive, or non-restartable services need careful design before using interruptible capacity.',
    relatedTerms: ['Interruptible VM', 'Batch Processing', 'Autoscaling', 'Checkpointing'],
  },
  {
    id: 'cloud-backup-service',
    domain: 'cloud',
    title: 'Cloud Backup Service',
    subtitle: 'Managed backup across cloud resources',
    difficulty: 'beginner',
    tags: ['backup', 'resilience', 'operations'],
    definition:
      'Cloud backup services centralize scheduled backups, retention rules, encryption, vaulting, and restore operations for databases, volumes, files, and other resources.',
    whyItMatters:
      'Backups are only useful when they are consistent, protected, and restorable. Managed services reduce missed jobs and provide auditability.',
    commonConfusion:
      'A snapshot is not a complete recovery plan. Teams still need restore testing, retention policy, access control, and recovery time targets.',
    relatedTerms: ['Snapshot', 'RPO', 'RTO', 'Backup Vault'],
  },
  {
    id: 'cloud-disaster-recovery-tiers',
    domain: 'cloud',
    title: 'Disaster Recovery Tiers',
    subtitle: 'Choosing the right recovery posture for each workload',
    difficulty: 'intermediate',
    tags: ['resilience', 'DR', 'availability'],
    definition:
      'Disaster recovery tiers range from backup-and-restore to pilot light, warm standby, and active-active architectures, each with different cost and recovery speed.',
    whyItMatters:
      'Not every system deserves active-active cost. Matching DR tier to business impact keeps resilience spending aligned with risk.',
    commonConfusion:
      'High availability and disaster recovery are related but different. HA handles local failures; DR handles broader loss of a region, platform, or site.',
    relatedTerms: ['RTO', 'RPO', 'Warm Standby', 'Active-Active'],
  },
  {
    id: 'cloud-centralized-logging',
    domain: 'cloud',
    title: 'Centralized Cloud Logging',
    subtitle: 'Collecting logs from cloud services and workloads',
    difficulty: 'beginner',
    tags: ['logging', 'observability', 'operations'],
    definition:
      'Centralized cloud logging collects application, platform, audit, network, and service logs into a common system for search, alerting, retention, and investigation.',
    whyItMatters:
      'When logs stay scattered across resources, incidents take longer to understand. Centralized logging gives responders a timeline across services.',
    commonConfusion:
      'Logging everything forever is not a strategy. Teams need retention, sampling, redaction, and cost controls.',
    relatedTerms: ['Audit Log', 'Log Retention', 'SIEM', 'Observability'],
  },
  {
    id: 'cloud-asset-inventory',
    domain: 'cloud',
    title: 'Cloud Asset Inventory',
    subtitle: 'Knowing what exists across cloud environments',
    difficulty: 'beginner',
    tags: ['inventory', 'governance', 'security'],
    definition:
      'A cloud asset inventory tracks resources, metadata, owners, tags, configuration, and relationships across cloud accounts, projects, subscriptions, and regions.',
    whyItMatters:
      'Teams cannot secure, patch, budget, or decommission resources they cannot see. Inventory is the foundation for cloud governance.',
    commonConfusion:
      'Inventory is not just a spreadsheet. Useful inventory is automatically updated and queryable across accounts and regions.',
    relatedTerms: ['CMDB', 'CSPM', 'Tagging', 'Resource Graph'],
  },
  {
    id: 'cloud-api-gateway',
    domain: 'cloud',
    title: 'Cloud API Gateway',
    subtitle: 'Managed front door for APIs',
    difficulty: 'beginner',
    tags: ['API', 'routing', 'security'],
    definition:
      'A cloud API gateway routes client API requests to backend services while handling concerns such as authentication, rate limiting, TLS, request transformation, and logging.',
    whyItMatters:
      'APIs need consistent edge controls. A gateway keeps common concerns out of every service and gives teams one place to manage external API behavior.',
    commonConfusion:
      'An API gateway is not a full service mesh. Gateways usually handle north-south traffic; meshes focus on service-to-service traffic inside the platform.',
    relatedTerms: ['Rate Limit', 'JWT', 'Reverse Proxy', 'Service Mesh'],
  },
  {
    id: 'cloud-message-queue-service',
    domain: 'cloud',
    title: 'Managed Message Queue',
    subtitle: 'Decoupling work with durable asynchronous messages',
    difficulty: 'beginner',
    tags: ['queue', 'async', 'managed service'],
    definition:
      'A managed message queue stores messages between producers and consumers so work can be processed asynchronously and reliably.',
    whyItMatters:
      'Queues smooth traffic spikes, isolate failures, and let services communicate without waiting for each other in the request path.',
    commonConfusion:
      'Queues do not remove the need for idempotent consumers. Retries and duplicate delivery are normal in many queue systems.',
    relatedTerms: ['SQS', 'Pub/Sub', 'Dead Letter Queue', 'Event-Driven'],
  },
  {
    id: 'cloud-secrets-manager',
    domain: 'cloud',
    title: 'Secrets Manager',
    subtitle: 'Secure storage and rotation for sensitive values',
    difficulty: 'beginner',
    tags: ['secrets', 'security', 'credentials'],
    definition:
      'A secrets manager stores sensitive values such as database passwords, API keys, tokens, and certificates with access control, audit logging, and often rotation support.',
    whyItMatters:
      'Secrets in code, images, or config files leak easily. Centralized secret management reduces exposure and makes rotation operationally possible.',
    commonConfusion:
      'A secrets manager is not a place for normal configuration. Non-sensitive settings belong in ordinary config systems where visibility is easier.',
    relatedTerms: ['KMS', 'Credential Rotation', 'Vault', 'Managed Identity'],
  },
  {
    id: 'networking-subnetting',
    domain: 'networking',
    title: 'Subnetting',
    subtitle: 'Dividing an IP network into smaller ranges',
    difficulty: 'beginner',
    tags: ['IP', 'subnet', 'addressing'],
    definition:
      'Subnetting splits a larger IP address range into smaller networks so routing, isolation, and address allocation can be managed cleanly.',
    whyItMatters:
      'Good subnet design prevents address exhaustion, reduces blast radius, and keeps routing understandable across sites, clouds, and environments.',
    commonConfusion:
      'A subnet is not automatically private or secure. Security depends on routing, firewall rules, ACLs, and service exposure.',
    relatedTerms: ['CIDR', 'Route Table', 'VLAN', 'IP Address'],
  },
  {
    id: 'networking-cidr',
    domain: 'networking',
    title: 'CIDR',
    subtitle: 'Compact notation for IP address ranges',
    difficulty: 'beginner',
    tags: ['IP', 'routing', 'addressing'],
    definition:
      'CIDR notation expresses an IP network with an address and prefix length, such as 10.0.0.0/24, where the prefix length defines how many addresses are in the range.',
    whyItMatters:
      'CIDR is the language used for routing, firewall rules, VPC design, VPNs, and allowlists. Misreading it causes accidental exposure or broken connectivity.',
    commonConfusion:
      'A smaller prefix number means a larger network. /16 contains many more addresses than /24.',
    relatedTerms: ['Subnet Mask', 'Route Table', 'IP Address', 'VPC'],
  },
  {
    id: 'networking-route-table',
    domain: 'networking',
    title: 'Route Table',
    subtitle: 'Rules that tell traffic where to go next',
    difficulty: 'beginner',
    tags: ['routing', 'IP', 'networking'],
    definition:
      'A route table maps destination IP ranges to next hops such as gateways, routers, VPN connections, peering links, or local networks.',
    whyItMatters:
      'When route tables are wrong, traffic silently goes nowhere or takes unsafe paths. They are central to cloud networking and on-prem connectivity.',
    commonConfusion:
      'Security rules and routes are different. A route can send traffic to a destination, but firewall policy still decides whether it is allowed.',
    relatedTerms: ['Default Route', 'Gateway', 'Subnet', 'BGP'],
  },
  {
    id: 'networking-bgp',
    domain: 'networking',
    title: 'BGP',
    subtitle: 'The routing protocol that connects networks on the internet',
    difficulty: 'advanced',
    tags: ['routing', 'internet', 'protocol'],
    definition:
      'Border Gateway Protocol (BGP) exchanges route information between autonomous systems so networks can decide how to reach IP prefixes across the internet or private WANs.',
    whyItMatters:
      'BGP underpins internet routing, cloud direct connections, and many enterprise WANs. Misconfiguration can reroute or blackhole large amounts of traffic.',
    commonConfusion:
      'BGP chooses paths based on policy, not simply shortest distance. Operators influence routes with attributes such as local preference and AS path.',
    relatedTerms: ['Autonomous System', 'Route Advertisement', 'Peering', 'Direct Connect'],
  },
  {
    id: 'networking-dns-records',
    domain: 'networking',
    title: 'DNS Records',
    subtitle: 'The resource records that resolve names to services',
    difficulty: 'beginner',
    tags: ['DNS', 'records', 'names'],
    definition:
      'DNS records store name resolution data such as A and AAAA addresses, CNAME aliases, MX mail routing, TXT verification, and SRV service location.',
    whyItMatters:
      'Most outages that look like application failures can also be DNS failures. Correct records and TTLs are essential for migration, failover, and certificates.',
    commonConfusion:
      'CNAME records create aliases, not redirects. HTTP redirects happen at the web layer, after DNS has resolved a host.',
    relatedTerms: ['A Record', 'CNAME', 'MX Record', 'TTL'],
  },
  {
    id: 'networking-dhcp',
    domain: 'networking',
    title: 'DHCP',
    subtitle: 'Automatically assigning network configuration to devices',
    difficulty: 'beginner',
    tags: ['IP', 'LAN', 'configuration'],
    definition:
      'Dynamic Host Configuration Protocol (DHCP) gives devices IP addresses and network settings such as default gateway, DNS servers, and lease duration.',
    whyItMatters:
      'Manual IP configuration does not scale. DHCP keeps endpoints connected and reduces address conflicts on user, server, and lab networks.',
    commonConfusion:
      'DHCP assigns configuration; DNS resolves names. They often work together but solve different problems.',
    relatedTerms: ['IP Lease', 'Default Gateway', 'DNS Server', 'MAC Address'],
  },
  {
    id: 'networking-nat',
    domain: 'networking',
    title: 'NAT',
    subtitle: 'Translating private addresses to reachable addresses',
    difficulty: 'beginner',
    tags: ['IP', 'routing', 'firewall'],
    definition:
      'Network Address Translation rewrites packet source or destination addresses so private networks can communicate through shared or public addresses.',
    whyItMatters:
      'NAT lets many private hosts share limited public IPs and is common in cloud egress, home networks, and enterprise firewalls.',
    commonConfusion:
      'NAT is not a security control by itself. It hides addressing, but firewall policy and exposure rules still determine access.',
    relatedTerms: ['PAT', 'Private IP', 'Egress', 'Firewall'],
  },
  {
    id: 'networking-load-balancing',
    domain: 'networking',
    title: 'Load Balancing',
    subtitle: 'Distributing requests across multiple backends',
    difficulty: 'beginner',
    tags: ['traffic', 'availability', 'performance'],
    definition:
      'Load balancing spreads client requests across multiple backend servers or services using algorithms and health checks.',
    whyItMatters:
      'It improves availability and capacity by avoiding a single overloaded or failed backend instance.',
    commonConfusion:
      'Layer 4 and Layer 7 load balancers operate differently. Layer 4 routes by transport connection; Layer 7 can inspect HTTP details such as host and path.',
    relatedTerms: ['Health Check', 'Reverse Proxy', 'Layer 7', 'TLS Termination'],
  },
  {
    id: 'networking-tls-handshake',
    domain: 'networking',
    title: 'TLS Handshake',
    subtitle: 'How clients and servers establish encrypted sessions',
    difficulty: 'intermediate',
    tags: ['TLS', 'encryption', 'certificates'],
    definition:
      'The TLS handshake lets a client verify a server certificate, agree on cryptographic parameters, and establish keys for encrypted communication.',
    whyItMatters:
      'Broken TLS causes user-facing outages and security risk. Understanding the handshake helps debug certificate, protocol, and trust chain problems.',
    commonConfusion:
      'TLS is not just encryption. It also provides identity verification through certificates and certificate authorities.',
    relatedTerms: ['Certificate Authority', 'Cipher Suite', 'HTTPS', 'mTLS'],
  },
  {
    id: 'networking-mtls',
    domain: 'networking',
    title: 'Mutual TLS',
    subtitle: 'Both sides authenticate with certificates',
    difficulty: 'intermediate',
    tags: ['TLS', 'identity', 'service mesh'],
    definition:
      'Mutual TLS (mTLS) requires both client and server to present trusted certificates, giving each side cryptographic proof of the other identity.',
    whyItMatters:
      'mTLS is common for service-to-service security because it prevents unknown clients from connecting even if they can reach the network path.',
    commonConfusion:
      'mTLS does not decide what an authenticated service may do. Authorization policy still needs to map identity to allowed actions.',
    relatedTerms: ['TLS', 'Certificate', 'Service Mesh', 'Zero Trust'],
  },
  {
    id: 'networking-vpn',
    domain: 'networking',
    title: 'VPN',
    subtitle: 'Encrypted tunnels between users, sites, or networks',
    difficulty: 'beginner',
    tags: ['remote access', 'encryption', 'connectivity'],
    definition:
      'A Virtual Private Network creates an encrypted tunnel across an untrusted network so users or sites can access private resources.',
    whyItMatters:
      'VPNs remain common for remote access, branch connectivity, and cloud-to-on-prem links, especially where private routing is required.',
    commonConfusion:
      'VPN access is not automatically zero trust. Traditional VPNs often grant broad network reach after login unless segmented and controlled.',
    relatedTerms: ['IPsec', 'SSL VPN', 'Split Tunnel', 'ZTNA'],
  },
  {
    id: 'networking-sd-wan',
    domain: 'networking',
    title: 'SD-WAN',
    subtitle: 'Software-defined control over wide area networks',
    difficulty: 'intermediate',
    tags: ['WAN', 'routing', 'branch'],
    definition:
      'SD-WAN centrally manages traffic paths across multiple network links such as broadband, MPLS, LTE, and cloud connections based on policy and performance.',
    whyItMatters:
      'It lets organizations improve branch connectivity, steer application traffic, reduce reliance on expensive circuits, and manage WAN policy consistently.',
    commonConfusion:
      'SD-WAN is not just cheaper internet links. The value is policy-based routing, visibility, resiliency, and centralized control.',
    relatedTerms: ['MPLS', 'WAN', 'Traffic Steering', 'Branch Network'],
  },
  {
    id: 'networking-packet-capture',
    domain: 'networking',
    title: 'Packet Capture',
    subtitle: 'Recording network packets for troubleshooting',
    difficulty: 'intermediate',
    tags: ['troubleshooting', 'packets', 'analysis'],
    definition:
      'Packet capture records network traffic at the packet level so engineers can inspect protocols, timings, retransmissions, handshakes, and errors.',
    whyItMatters:
      'When logs disagree or do not exist, packets show what actually crossed the wire. They are often decisive for hard network and TLS problems.',
    commonConfusion:
      'Packet captures can contain sensitive data. Capture scope, storage, retention, and sharing need security controls.',
    relatedTerms: ['Wireshark', 'tcpdump', 'Latency', 'Retransmission'],
  },
  {
    id: 'networking-qos',
    domain: 'networking',
    title: 'Quality of Service',
    subtitle: 'Prioritizing important traffic under congestion',
    difficulty: 'intermediate',
    tags: ['performance', 'traffic', 'WAN'],
    definition:
      'Quality of Service (QoS) classifies and prioritizes network traffic so latency-sensitive applications get preferred treatment when links are congested.',
    whyItMatters:
      'Voice, video, and operational systems can degrade badly when bulk transfers consume the same constrained link. QoS keeps critical traffic usable.',
    commonConfusion:
      'QoS does not create bandwidth. It decides which packets wait or drop first when there is contention.',
    relatedTerms: ['DSCP', 'Traffic Shaping', 'Latency', 'Packet Loss'],
  },
  {
    id: 'networking-ztna',
    domain: 'networking',
    title: 'Zero Trust Network Access',
    subtitle: 'Application-level access without broad network trust',
    difficulty: 'intermediate',
    tags: ['zero trust', 'remote access', 'identity'],
    definition:
      'Zero Trust Network Access grants users access to specific applications based on identity, device posture, and policy instead of placing them broadly on a private network.',
    whyItMatters:
      'ZTNA reduces lateral movement risk and supports remote access without exposing entire subnets through a traditional VPN.',
    commonConfusion:
      'ZTNA is not a single product feature. It depends on identity, device trust, application segmentation, logging, and policy enforcement.',
    relatedTerms: ['VPN', 'Identity Provider', 'Device Posture', 'Least Privilege'],
  },
  {
    id: 'data-data-contract',
    domain: 'data',
    title: 'Data Contract',
    subtitle: 'A formal agreement for producer-owned data shape and quality',
    difficulty: 'intermediate',
    tags: ['data quality', 'schema', 'ownership'],
    definition:
      'A data contract defines the schema, meaning, quality expectations, ownership, and change process for data shared between producing and consuming systems.',
    whyItMatters:
      'Analytics and downstream services break when producers change fields without warning. Contracts make data changes explicit and testable.',
    commonConfusion:
      'A data contract is more than a schema file. It should include ownership, semantics, SLAs, validation, and compatibility expectations.',
    relatedTerms: ['Schema Registry', 'Data Product', 'Data Quality', 'Backward Compatibility'],
  },
  {
    id: 'data-change-data-capture',
    domain: 'data',
    title: 'Change Data Capture',
    subtitle: 'Streaming database changes as events',
    difficulty: 'intermediate',
    tags: ['CDC', 'streaming', 'database'],
    definition:
      'Change Data Capture (CDC) detects inserts, updates, and deletes in a database and publishes those changes to downstream systems.',
    whyItMatters:
      'CDC keeps warehouses, search indexes, caches, and event-driven systems current without repeatedly scanning entire source tables.',
    commonConfusion:
      'CDC is not the same as polling a table for updated rows. Log-based CDC reads database change logs and usually has lower load and better fidelity.',
    relatedTerms: ['Debezium', 'Replication Log', 'Kafka', 'ELT'],
  },
  {
    id: 'data-dbt-model',
    domain: 'data',
    title: 'dbt Model',
    subtitle: 'Version-controlled SQL transformation for analytics',
    difficulty: 'beginner',
    tags: ['dbt', 'SQL', 'transformation'],
    definition:
      'A dbt model is a SQL select statement that builds a table or view in a warehouse as part of a tested, version-controlled transformation project.',
    whyItMatters:
      'dbt brings software engineering practices to analytics work: code review, tests, lineage, documentation, and repeatable builds.',
    commonConfusion:
      'dbt does not extract data from source systems. It transforms data that has already landed in the warehouse.',
    relatedTerms: ['ELT', 'Data Lineage', 'Warehouse', 'SQL Test'],
  },
  {
    id: 'data-data-mart',
    domain: 'data',
    title: 'Data Mart',
    subtitle: 'A curated analytics dataset for a business area',
    difficulty: 'beginner',
    tags: ['analytics', 'BI', 'warehouse'],
    definition:
      'A data mart is a focused subset of warehouse data designed for a specific department, domain, or analytical use case.',
    whyItMatters:
      'Business users need trusted, understandable datasets. Data marts reduce complexity and align metrics with how a team makes decisions.',
    commonConfusion:
      'A data mart should not become an unmanaged spreadsheet dump. It still needs lineage, definitions, access control, and ownership.',
    relatedTerms: ['Data Warehouse', 'Semantic Layer', 'Star Schema', 'BI'],
  },
  {
    id: 'data-semantic-layer',
    domain: 'data',
    title: 'Semantic Layer',
    subtitle: 'Shared business definitions for metrics and dimensions',
    difficulty: 'intermediate',
    tags: ['metrics', 'BI', 'governance'],
    definition:
      'A semantic layer defines business-friendly metrics, dimensions, relationships, and rules so tools calculate measures consistently.',
    whyItMatters:
      'Without a semantic layer, every dashboard can define revenue, active user, or churn differently. Shared definitions reduce metric disputes.',
    commonConfusion:
      'A semantic layer is not just a BI convenience. It is a governance layer for meaning, calculation, and access across analytics tools.',
    relatedTerms: ['Metrics Layer', 'Dimension', 'Data Mart', 'BI'],
  },
  {
    id: 'data-star-schema',
    domain: 'data',
    title: 'Star Schema',
    subtitle: 'Fact and dimension tables for analytics',
    difficulty: 'beginner',
    tags: ['modeling', 'warehouse', 'BI'],
    definition:
      'A star schema organizes analytics data around fact tables for measurable events and dimension tables for descriptive context.',
    whyItMatters:
      'It makes BI queries faster and easier to understand because measures and descriptive attributes have clear roles.',
    commonConfusion:
      'Fact tables are not always financial facts. A fact can be any measurable event such as page views, orders, shipments, or support tickets.',
    relatedTerms: ['Fact Table', 'Dimension Table', 'Data Mart', 'OLAP'],
  },
  {
    id: 'data-slowly-changing-dimension',
    domain: 'data',
    title: 'Slowly Changing Dimension',
    subtitle: 'Tracking changes to descriptive data over time',
    difficulty: 'intermediate',
    tags: ['modeling', 'history', 'warehouse'],
    definition:
      'A slowly changing dimension captures how descriptive attributes, such as customer segment or account owner, change over time in analytics models.',
    whyItMatters:
      'Historical reporting can be wrong if old facts are joined to today metadata. SCD patterns preserve the context that was true at the time.',
    commonConfusion:
      'Type 1 overwrites history; Type 2 keeps historical rows. Teams must choose based on reporting needs.',
    relatedTerms: ['Dimension Table', 'Type 2 SCD', 'Surrogate Key', 'History'],
  },
  {
    id: 'data-catalog-expansion',
    domain: 'data',
    title: 'Data Catalog',
    subtitle: 'Searchable inventory of datasets and data knowledge',
    difficulty: 'beginner',
    tags: ['metadata', 'discovery', 'governance'],
    definition:
      'A data catalog indexes datasets, tables, columns, owners, descriptions, lineage, classifications, and usage so people can find and understand data.',
    whyItMatters:
      'Data teams lose time rediscovering what exists and whether it can be trusted. Catalogs make ownership and context visible.',
    commonConfusion:
      'A catalog is not useful just because it scans tables. Human-curated definitions and ownership are what make it trustworthy.',
    relatedTerms: ['Metadata', 'Data Lineage', 'Data Steward', 'Data Governance'],
  },
  {
    id: 'data-metadata-management',
    domain: 'data',
    title: 'Metadata Management',
    subtitle: 'Managing data about data',
    difficulty: 'intermediate',
    tags: ['metadata', 'governance', 'catalog'],
    definition:
      'Metadata management collects and maintains information about datasets, including schemas, owners, lineage, quality rules, classifications, and usage.',
    whyItMatters:
      'Metadata lets teams answer basic governance questions: where data came from, what it means, who owns it, who uses it, and whether it contains sensitive fields.',
    commonConfusion:
      'Metadata management is not only documentation. Operational metadata can drive automation such as access workflows, quality checks, and retention policy.',
    relatedTerms: ['Data Catalog', 'Lineage', 'Classification', 'Data Governance'],
  },
  {
    id: 'data-master-data-management',
    domain: 'data',
    title: 'Master Data Management',
    subtitle: 'Creating trusted records for core business entities',
    difficulty: 'advanced',
    tags: ['MDM', 'governance', 'identity resolution'],
    definition:
      'Master Data Management (MDM) creates and governs authoritative records for core entities such as customers, products, suppliers, employees, or locations.',
    whyItMatters:
      'Organizations often have many versions of the same customer or product across systems. MDM reduces duplicates and inconsistent identifiers.',
    commonConfusion:
      'MDM is not just deduplication. It includes stewardship, matching rules, survivorship logic, workflows, and ongoing governance.',
    relatedTerms: ['Golden Record', 'Data Stewardship', 'Entity Resolution', 'Reference Data'],
  },
  {
    id: 'data-retention-policy',
    domain: 'data',
    title: 'Data Retention Policy',
    subtitle: 'Defining how long data is kept and when it is removed',
    difficulty: 'beginner',
    tags: ['retention', 'privacy', 'governance'],
    definition:
      'A data retention policy specifies how long different data types must be kept, archived, or deleted based on legal, business, and operational requirements.',
    whyItMatters:
      'Keeping data forever increases storage cost, discovery burden, privacy risk, and breach impact. Deleting too soon can violate legal or business needs.',
    commonConfusion:
      'Retention is not the same as backup. Backups also need retention rules or deleted data can persist unexpectedly.',
    relatedTerms: ['Records Retention', 'Data Lifecycle', 'Privacy', 'Legal Hold'],
  },
  {
    id: 'data-pii-masking',
    domain: 'data',
    title: 'PII Masking',
    subtitle: 'Hiding sensitive personal data while preserving utility',
    difficulty: 'beginner',
    tags: ['privacy', 'security', 'PII'],
    definition:
      'PII masking obscures personal data such as names, emails, phone numbers, or identifiers so it is less exposed in logs, tests, analytics, or support tools.',
    whyItMatters:
      'Many teams need realistic data patterns without full access to sensitive values. Masking reduces exposure while keeping workflows useful.',
    commonConfusion:
      'Masking is not always anonymization. If masked data can be reversed or linked back to a person, privacy obligations may still apply.',
    relatedTerms: ['Tokenization', 'Anonymization', 'Data Classification', 'Privacy'],
  },
  {
    id: 'data-anonymization',
    domain: 'data',
    title: 'Data Anonymization',
    subtitle: 'Transforming data so people cannot be reidentified',
    difficulty: 'advanced',
    tags: ['privacy', 'anonymization', 'governance'],
    definition:
      'Data anonymization modifies or removes identifying details so individuals cannot reasonably be reidentified from the dataset.',
    whyItMatters:
      'Anonymized data can support analytics and research with lower privacy risk, but weak anonymization can still expose people through linkage attacks.',
    commonConfusion:
      'Pseudonymized data is not automatically anonymous. Replacing a name with an ID may still allow reidentification if the mapping or linked attributes exist.',
    relatedTerms: ['Pseudonymization', 'Differential Privacy', 'PII', 'Reidentification'],
  },
  {
    id: 'data-feature-store-expansion',
    domain: 'data',
    title: 'Feature Store',
    subtitle: 'Reusable inputs for machine learning models',
    difficulty: 'intermediate',
    tags: ['machine learning', 'features', 'platform'],
    definition:
      'A feature store manages curated machine learning features so training and serving use consistent definitions, freshness, and access patterns.',
    whyItMatters:
      'ML teams waste time rebuilding the same features, and models fail when training data differs from production serving. Feature stores reduce that mismatch.',
    commonConfusion:
      'A feature store is not just a database. It handles feature definitions, lineage, online/offline serving, and freshness guarantees.',
    relatedTerms: ['Online Store', 'Offline Store', 'Training-Serving Skew', 'ML Platform'],
  },
  {
    id: 'data-vector-database',
    domain: 'data',
    title: 'Vector Database',
    subtitle: 'Searching by semantic similarity using embeddings',
    difficulty: 'intermediate',
    tags: ['AI', 'embeddings', 'search'],
    definition:
      'A vector database stores embedding vectors and retrieves items by similarity, enabling semantic search, recommendation, and retrieval-augmented generation.',
    whyItMatters:
      'Traditional keyword search misses meaning. Vector search can find conceptually similar documents even when the exact words differ.',
    commonConfusion:
      'A vector database does not understand truth. It retrieves similar items; applications still need ranking, filtering, grounding, and evaluation.',
    relatedTerms: ['Embedding', 'Semantic Search', 'RAG', 'Approximate Nearest Neighbor'],
  },
  {
    id: 'data-time-series-database',
    domain: 'data',
    title: 'Time-Series Database',
    subtitle: 'Optimized storage for timestamped measurements',
    difficulty: 'beginner',
    tags: ['time series', 'metrics', 'database'],
    definition:
      'A time-series database stores and queries timestamped data such as metrics, sensor readings, prices, or events, often with retention and downsampling features.',
    whyItMatters:
      'Operational metrics and IoT data can generate huge write volumes. Time-series systems are designed for append-heavy data and time-window queries.',
    commonConfusion:
      'Time-series databases are not only for infrastructure metrics. They also fit finance, industrial telemetry, product analytics, and energy data.',
    relatedTerms: ['Prometheus', 'InfluxDB', 'Retention', 'Downsampling'],
  },
  {
    id: 'data-graph-database',
    domain: 'data',
    title: 'Graph Database',
    subtitle: 'Storing entities and relationships as first-class data',
    difficulty: 'intermediate',
    tags: ['graph', 'relationships', 'database'],
    definition:
      'A graph database represents data as nodes and edges, making relationship traversal central to storage and query patterns.',
    whyItMatters:
      'Fraud rings, network dependencies, recommendations, identity resolution, and knowledge graphs often depend more on relationships than rows.',
    commonConfusion:
      'A graph database is not automatically better for every connected dataset. Relational databases can handle many joins well when relationships are simple and bounded.',
    relatedTerms: ['Node', 'Edge', 'Knowledge Graph', 'Cypher'],
  },
  {
    id: 'data-lakehouse-expansion',
    domain: 'data',
    title: 'Lakehouse',
    subtitle: 'Combining data lake storage with warehouse-like management',
    difficulty: 'intermediate',
    tags: ['lakehouse', 'warehouse', 'data lake'],
    definition:
      'A lakehouse uses low-cost data lake storage with table formats, metadata, transactions, and governance features normally associated with warehouses.',
    whyItMatters:
      'It aims to reduce duplication between raw lake data and curated warehouse data while supporting analytics, ML, and streaming on shared storage.',
    commonConfusion:
      'A lakehouse is not just files in object storage. The table format and governance layer are what make reliable analytics possible.',
    relatedTerms: ['Delta Lake', 'Apache Iceberg', 'Object Storage', 'ACID'],
  },
  {
    id: 'data-medallion-architecture',
    domain: 'data',
    title: 'Medallion Architecture',
    subtitle: 'Bronze, silver, and gold layers for data refinement',
    difficulty: 'beginner',
    tags: ['architecture', 'lakehouse', 'quality'],
    definition:
      'Medallion architecture organizes data into bronze raw ingestion, silver cleaned and conformed data, and gold business-ready aggregates or marts.',
    whyItMatters:
      'Layering makes data quality and purpose visible. Consumers know whether they are using raw source data or curated business data.',
    commonConfusion:
      'Bronze, silver, and gold are conventions, not magic technology. Teams still need definitions, tests, ownership, and lifecycle rules.',
    relatedTerms: ['Data Lakehouse', 'Data Quality', 'Data Mart', 'ELT'],
  },
  {
    id: 'data-data-product',
    domain: 'data',
    title: 'Data Product',
    subtitle: 'A dataset managed like a product with users and owners',
    difficulty: 'intermediate',
    tags: ['data mesh', 'ownership', 'governance'],
    definition:
      'A data product is a dataset or analytical capability with defined users, owners, documentation, quality expectations, interfaces, and support.',
    whyItMatters:
      'Treating data as a product shifts teams from dumping tables to delivering reliable, discoverable assets that others can depend on.',
    commonConfusion:
      'Calling a table a data product does not make it one. The product mindset requires ownership, usability, reliability, and feedback loops.',
    relatedTerms: ['Data Mesh', 'Data Contract', 'SLA', 'Data Steward'],
  },
  {
    id: 'data-reverse-etl',
    domain: 'data',
    title: 'Reverse ETL',
    subtitle: 'Sending warehouse data back into operational tools',
    difficulty: 'beginner',
    tags: ['activation', 'warehouse', 'integration'],
    definition:
      'Reverse ETL syncs curated data from a warehouse into operational systems such as CRM, marketing automation, support tools, or product platforms.',
    whyItMatters:
      'Analytics becomes more valuable when insights drive action. Reverse ETL operationalizes segments, scores, and customer attributes where teams work.',
    commonConfusion:
      'Reverse ETL is not a substitute for real-time transactional integration. Warehouse data may be delayed and should not power latency-critical workflows.',
    relatedTerms: ['Customer Data Platform', 'ELT', 'Data Activation', 'Warehouse'],
  },
  {
    id: 'data-sla',
    domain: 'data',
    title: 'Data SLA',
    subtitle: 'A reliability promise for data availability and quality',
    difficulty: 'intermediate',
    tags: ['reliability', 'quality', 'governance'],
    definition:
      'A data SLA defines expected freshness, availability, completeness, accuracy, or response time for a data asset or pipeline.',
    whyItMatters:
      'Critical dashboards, ML models, and business workflows need explicit expectations so producers and consumers know what reliability means.',
    commonConfusion:
      'A data SLA is only useful if it is measurable. Vague promises like high quality do not help unless tied to specific checks and alerting.',
    relatedTerms: ['Data Observability', 'Freshness', 'SLO', 'Data Contract'],
  },
  {
    id: 'data-query-federation',
    domain: 'data',
    title: 'Query Federation',
    subtitle: 'Querying multiple data sources through one interface',
    difficulty: 'intermediate',
    tags: ['query', 'federation', 'analytics'],
    definition:
      'Query federation lets users query data across multiple systems without physically copying all of it into one database first.',
    whyItMatters:
      'Federation can speed exploration and reduce duplication, especially when data is distributed across warehouses, lakes, operational databases, and SaaS systems.',
    commonConfusion:
      'Federation does not eliminate performance and governance problems. Cross-source joins can be slow, and access policy must still be enforced consistently.',
    relatedTerms: ['Trino', 'Presto', 'Data Virtualization', 'Warehouse'],
  },
  {
    id: 'data-materialized-view',
    domain: 'data',
    title: 'Materialized View',
    subtitle: 'Precomputed query results stored for faster reads',
    difficulty: 'beginner',
    tags: ['database', 'performance', 'analytics'],
    definition:
      'A materialized view stores the result of a query so future reads can use precomputed data instead of recalculating from base tables every time.',
    whyItMatters:
      'Expensive joins and aggregations can slow dashboards or applications. Materialized views trade storage and refresh complexity for faster reads.',
    commonConfusion:
      'A materialized view can become stale. Teams must understand refresh timing before using it for operational decisions.',
    relatedTerms: ['View', 'Refresh', 'Aggregation', 'Query Optimization'],
  },
  {
    id: 'data-backfill',
    domain: 'data',
    title: 'Data Backfill',
    subtitle: 'Reprocessing historical data after a logic or schema change',
    difficulty: 'intermediate',
    tags: ['pipeline', 'history', 'operations'],
    definition:
      'A data backfill reruns processing for historical periods to populate missing data, fix incorrect logic, or apply a new transformation to old records.',
    whyItMatters:
      'Changing a metric definition only for new data creates inconsistent history. Backfills make historical datasets align with current logic.',
    commonConfusion:
      'Backfills can be operationally risky. They may overload systems, duplicate records, or overwrite corrected data without careful idempotency controls.',
    relatedTerms: ['Idempotency', 'Partition', 'Data Pipeline', 'Replay'],
  },
  {
    id: 'syseng-capacity-modeling',
    domain: 'syseng',
    title: 'Capacity Modeling',
    subtitle: 'Estimating whether a system can handle expected load',
    difficulty: 'intermediate',
    tags: ['capacity', 'modeling', 'performance'],
    definition:
      'Capacity modeling estimates how system components behave under expected and peak demand using assumptions about workload, throughput, latency, and constraints.',
    whyItMatters:
      'It helps teams find bottlenecks before deployment and decide whether to scale hardware, redesign flows, or adjust requirements.',
    commonConfusion:
      'A capacity model is not a guarantee. It is only as good as its assumptions and should be validated with measurement and load testing.',
    relatedTerms: ['Throughput', 'Latency', 'Load Test', 'Bottleneck'],
  },
  {
    id: 'syseng-requirements-traceability',
    domain: 'syseng',
    title: 'Requirements Traceability',
    subtitle: 'Linking requirements to design, tests, and delivery evidence',
    difficulty: 'intermediate',
    tags: ['requirements', 'verification', 'governance'],
    definition:
      'Requirements traceability tracks each requirement through design decisions, implementation work, tests, approvals, and release evidence.',
    whyItMatters:
      'Regulated and complex systems need proof that requirements were built and verified. Traceability also exposes orphan requirements and untested changes.',
    commonConfusion:
      'Traceability is not just paperwork. When maintained well, it helps impact analysis whenever requirements or design choices change.',
    relatedTerms: ['Verification', 'Validation', 'Test Case', 'Change Control'],
  },
  {
    id: 'syseng-failure-mode-analysis',
    domain: 'syseng',
    title: 'Failure Mode Analysis',
    subtitle: 'Identifying how a system can fail before it does',
    difficulty: 'intermediate',
    tags: ['reliability', 'risk', 'analysis'],
    definition:
      'Failure mode analysis examines components, interfaces, and processes to identify possible failures, causes, effects, detection methods, and mitigations.',
    whyItMatters:
      'Teams can design controls for likely or severe failures before users experience them, improving safety and reliability.',
    commonConfusion:
      'Failure mode analysis is not only for hardware. Software, data flows, operations, and human processes also have failure modes.',
    relatedTerms: ['FMEA', 'Risk Assessment', 'Mitigation', 'Reliability'],
  },
  {
    id: 'syseng-interface-control-document',
    domain: 'syseng',
    title: 'Interface Control Document',
    subtitle: 'A formal description of how systems connect',
    difficulty: 'intermediate',
    tags: ['interfaces', 'documentation', 'integration'],
    definition:
      'An Interface Control Document (ICD) specifies the data, protocols, timing, formats, responsibilities, and constraints for an interface between systems.',
    whyItMatters:
      'Interfaces are where large systems often fail. A clear ICD reduces ambiguous assumptions between teams and vendors.',
    commonConfusion:
      'An API reference is not always a full ICD. ICDs usually include operational, timing, ownership, and compatibility expectations beyond endpoint syntax.',
    relatedTerms: ['API Contract', 'Integration', 'Protocol', 'System Boundary'],
  },
  {
    id: 'syseng-operational-readiness-review',
    domain: 'syseng',
    title: 'Operational Readiness Review',
    subtitle: 'Checking whether a system is ready to run in production',
    difficulty: 'beginner',
    tags: ['operations', 'release', 'readiness'],
    definition:
      'An Operational Readiness Review verifies that monitoring, support, documentation, rollback, capacity, security, and ownership are ready before launch.',
    whyItMatters:
      'A system can pass functional tests but still be unready to operate. ORRs catch gaps that matter after real users arrive.',
    commonConfusion:
      'An ORR is not a rubber-stamp meeting. It should have clear launch criteria and authority to delay release when risk is unacceptable.',
    relatedTerms: ['Runbook', 'SLO', 'Launch Checklist', 'Incident Response'],
  },
  {
    id: 'syseng-change-advisory-board',
    domain: 'syseng',
    title: 'Change Advisory Board',
    subtitle: 'Reviewing production changes for risk and coordination',
    difficulty: 'beginner',
    tags: ['change management', 'ITIL', 'risk'],
    definition:
      'A Change Advisory Board reviews planned changes to assess risk, timing, dependencies, rollback, communication, and business impact.',
    whyItMatters:
      'Coordinated review prevents collisions such as two teams changing dependent systems at the same time or releasing during a critical business window.',
    commonConfusion:
      'A CAB should not become a slow approval theater. Low-risk standard changes should be preapproved or automated.',
    relatedTerms: ['Change Management', 'Standard Change', 'Rollback Plan', 'Release Window'],
  },
  {
    id: 'syseng-lifecycle-management',
    domain: 'syseng',
    title: 'Lifecycle Management',
    subtitle: 'Managing systems from planning through retirement',
    difficulty: 'beginner',
    tags: ['lifecycle', 'planning', 'operations'],
    definition:
      'Lifecycle management covers how a system is planned, built, deployed, operated, upgraded, supported, and eventually retired.',
    whyItMatters:
      'Systems that never get lifecycle attention accumulate unsupported platforms, stale dependencies, hidden costs, and operational risk.',
    commonConfusion:
      'Retirement is part of lifecycle management. Decommissioning, data archival, user migration, and contract termination need planning.',
    relatedTerms: ['End of Life', 'Roadmap', 'Technical Debt', 'Decommissioning'],
  },
  {
    id: 'coding-dependency-injection-expansion',
    domain: 'coding',
    title: 'Dependency Injection',
    subtitle: 'Providing collaborators from the outside instead of constructing them internally',
    difficulty: 'beginner',
    tags: ['architecture', 'testing', 'design'],
    definition:
      'Dependency injection passes a component its dependencies, such as repositories or clients, instead of having the component create them directly.',
    whyItMatters:
      'It makes code easier to test, configure, and replace because behavior depends on explicit interfaces rather than hidden construction.',
    commonConfusion:
      'Dependency injection does not require a large framework. Constructor parameters or function arguments can be dependency injection.',
    relatedTerms: ['Inversion of Control', 'Interface', 'Test Double', 'Composition'],
  },
  {
    id: 'coding-idempotency-expansion',
    domain: 'coding',
    title: 'Idempotency',
    subtitle: 'Making repeated operations have the same effect as one operation',
    difficulty: 'intermediate',
    tags: ['reliability', 'API', 'distributed systems'],
    definition:
      'An idempotent operation can be safely repeated without changing the result beyond the first successful application.',
    whyItMatters:
      'Retries are unavoidable in distributed systems. Idempotency prevents duplicate payments, orders, messages, and side effects when clients retry.',
    commonConfusion:
      'Idempotent does not mean no response changes. A repeated request might return a different status or timestamp while preserving the same business effect.',
    relatedTerms: ['Idempotency Key', 'Retry', 'Exactly Once', 'API Design'],
  },
  {
    id: 'coding-contract-testing',
    domain: 'coding',
    title: 'Contract Testing',
    subtitle: 'Verifying service expectations at integration boundaries',
    difficulty: 'intermediate',
    tags: ['testing', 'API', 'microservices'],
    definition:
      'Contract testing verifies that a provider and consumer agree on request and response expectations without needing a full end-to-end environment.',
    whyItMatters:
      'Distributed systems break when API assumptions drift. Contract tests catch incompatible changes early and make service boundaries safer to evolve.',
    commonConfusion:
      'Contract tests complement, not replace, integration tests. They focus on interface compatibility rather than full business workflows.',
    relatedTerms: ['Consumer-Driven Contract', 'API Schema', 'Pact', 'Backward Compatibility'],
  },
  {
    id: 'integration-webhook',
    domain: 'integration',
    title: 'Webhook',
    subtitle: 'An HTTP callback sent when an event happens',
    difficulty: 'beginner',
    tags: ['HTTP', 'events', 'API'],
    definition:
      'A webhook lets one system notify another by sending an HTTP request to a configured URL when an event occurs.',
    whyItMatters:
      'Webhooks avoid constant polling and let integrations react quickly to events such as payments, tickets, signups, or deployments.',
    commonConfusion:
      'Webhook delivery is not guaranteed to happen exactly once. Receivers should verify signatures, handle retries, and process events idempotently.',
    relatedTerms: ['Callback', 'Event', 'Signature Verification', 'Idempotency'],
  },
  {
    id: 'integration-polling',
    domain: 'integration',
    title: 'Polling',
    subtitle: 'Checking another system repeatedly for changes',
    difficulty: 'beginner',
    tags: ['API', 'synchronization', 'batch'],
    definition:
      'Polling repeatedly asks a system for new or changed data on a schedule, often using timestamps, cursors, or page tokens.',
    whyItMatters:
      'Polling is simple and often reliable when webhooks are unavailable, but it can waste API quota and increase latency.',
    commonConfusion:
      'Polling is not automatically bad. It is a reasonable choice for low-volume data, simple APIs, or systems without event delivery.',
    relatedTerms: ['Cursor', 'Rate Limit', 'Webhook', 'Incremental Sync'],
  },
  {
    id: 'integration-event-bus',
    domain: 'integration',
    title: 'Event Bus',
    subtitle: 'A shared channel for publishing and subscribing to events',
    difficulty: 'intermediate',
    tags: ['events', 'messaging', 'architecture'],
    definition:
      'An event bus routes events from producers to interested consumers, often with filtering, fan-out, and decoupled delivery.',
    whyItMatters:
      'It lets systems react to business events without every producer calling every consumer directly.',
    commonConfusion:
      'An event bus is not a database of truth. Consumers still need to handle missed events, replay, ordering, and state reconstruction carefully.',
    relatedTerms: ['Pub/Sub', 'Event-Driven Architecture', 'Fan-Out', 'Message Broker'],
  },
  {
    id: 'integration-api-rate-limit',
    domain: 'integration',
    title: 'API Rate Limit',
    subtitle: 'A cap on how often clients can call an API',
    difficulty: 'beginner',
    tags: ['API', 'limits', 'reliability'],
    definition:
      'An API rate limit restricts the number of requests a client can make in a time window or under a quota policy.',
    whyItMatters:
      'Rate limits protect providers from overload and force consumers to design batching, caching, retry, and backoff behavior.',
    commonConfusion:
      'Rate limits are not the same as authentication. A valid client can still be throttled when it exceeds allowed usage.',
    relatedTerms: ['Throttling', 'Quota', 'Backoff', '429 Too Many Requests'],
  },
  {
    id: 'integration-idempotency-key',
    domain: 'integration',
    title: 'Idempotency Key',
    subtitle: 'A client-provided key for safely retrying requests',
    difficulty: 'intermediate',
    tags: ['API', 'retries', 'reliability'],
    definition:
      'An idempotency key uniquely identifies a request so the server can detect retries and avoid applying the same operation multiple times.',
    whyItMatters:
      'Network failures make clients retry. Idempotency keys prevent duplicate charges, orders, or account changes when the original request actually succeeded.',
    commonConfusion:
      'Idempotency keys need a storage and expiry strategy. If keys expire too soon, late retries can still duplicate work.',
    relatedTerms: ['Retry', 'POST', 'Exactly Once', 'Deduplication'],
  },
  {
    id: 'integration-circuit-breaker',
    domain: 'integration',
    title: 'Circuit Breaker',
    subtitle: 'Stopping calls to a dependency that is already failing',
    difficulty: 'intermediate',
    tags: ['resilience', 'reliability', 'API'],
    definition:
      'A circuit breaker detects repeated dependency failures and temporarily stops calls, allowing fast failure or fallback while the dependency recovers.',
    whyItMatters:
      'Without circuit breakers, failing dependencies can consume threads, queues, and connection pools until the caller fails too.',
    commonConfusion:
      'A circuit breaker is not a retry policy. Retries try again; circuit breakers stop trying for a period when repeated attempts are harmful.',
    relatedTerms: ['Timeout', 'Fallback', 'Bulkhead', 'Retry'],
  },
  {
    id: 'integration-retry-with-backoff',
    domain: 'integration',
    title: 'Retry with Backoff',
    subtitle: 'Waiting longer between retries after failures',
    difficulty: 'beginner',
    tags: ['resilience', 'API', 'retries'],
    definition:
      'Retry with backoff repeats a failed operation after increasing delays, often with jitter to avoid many clients retrying at the same time.',
    whyItMatters:
      'Immediate retry storms can make partial outages worse. Backoff gives dependencies time to recover and reduces synchronized load spikes.',
    commonConfusion:
      'Not every failure should be retried. Validation errors and unauthorized requests usually need correction, not another attempt.',
    relatedTerms: ['Exponential Backoff', 'Jitter', 'Timeout', 'Rate Limit'],
  },
  {
    id: 'integration-dead-letter-queue',
    domain: 'integration',
    title: 'Dead Letter Queue',
    subtitle: 'A holding area for messages that cannot be processed',
    difficulty: 'beginner',
    tags: ['messaging', 'queue', 'operations'],
    definition:
      'A dead letter queue stores messages that repeatedly fail processing so they can be inspected, fixed, replayed, or discarded safely.',
    whyItMatters:
      'Without a DLQ, poison messages can block queues or disappear without investigation. DLQs preserve evidence and keep processing moving.',
    commonConfusion:
      'A DLQ is not a fix by itself. Teams need alerts, ownership, replay tooling, and policies for old failed messages.',
    relatedTerms: ['Poison Message', 'Queue', 'Retry', 'Replay'],
  },
  {
    id: 'integration-outbox-pattern',
    domain: 'integration',
    title: 'Outbox Pattern',
    subtitle: 'Reliably publishing events after database changes',
    difficulty: 'advanced',
    tags: ['events', 'database', 'reliability'],
    definition:
      'The outbox pattern writes business data and an outgoing event record in the same database transaction, then a separate publisher sends the event.',
    whyItMatters:
      'It prevents the classic failure where a database update succeeds but the message publish fails, leaving other systems unaware of the change.',
    commonConfusion:
      'The outbox pattern still requires idempotent consumers. Publishers can retry and consumers may see duplicate events.',
    relatedTerms: ['Transactional Outbox', 'CDC', 'Eventual Consistency', 'Idempotency'],
  },
  {
    id: 'integration-schema-registry',
    domain: 'integration',
    title: 'Schema Registry',
    subtitle: 'Central management for event and message schemas',
    difficulty: 'intermediate',
    tags: ['schema', 'events', 'compatibility'],
    definition:
      'A schema registry stores and validates schemas for messages or events, helping producers and consumers evolve formats safely.',
    whyItMatters:
      'When event formats change without compatibility checks, consumers break. Schema registries make format evolution visible and enforceable.',
    commonConfusion:
      'A schema registry does not guarantee semantic compatibility. A field can keep the same type but change meaning, so documentation and ownership still matter.',
    relatedTerms: ['Avro', 'Protobuf', 'Backward Compatibility', 'Kafka'],
  },
  {
    id: 'integration-canonical-data-model',
    domain: 'integration',
    title: 'Canonical Data Model',
    subtitle: 'A shared representation used between systems',
    difficulty: 'advanced',
    tags: ['data model', 'integration', 'architecture'],
    definition:
      'A canonical data model defines common business entities and fields so integrations can translate through a shared format instead of every system mapping to every other system.',
    whyItMatters:
      'It can reduce mapping complexity in large integration landscapes, especially when many systems exchange similar entities.',
    commonConfusion:
      'A canonical model can become a bottleneck if it tries to represent every system perfectly. It should cover shared integration needs, not every local detail.',
    relatedTerms: ['Data Mapping', 'Enterprise Service Bus', 'Message Contract', 'Transformation'],
  },
  {
    id: 'integration-api-versioning',
    domain: 'integration',
    title: 'API Versioning',
    subtitle: 'Evolving interfaces without breaking consumers',
    difficulty: 'beginner',
    tags: ['API', 'compatibility', 'governance'],
    definition:
      'API versioning manages changes to an API contract so consumers can migrate safely when behavior, fields, or endpoints change.',
    whyItMatters:
      'Breaking API changes can take down dependent systems. Versioning gives providers room to evolve while protecting consumers.',
    commonConfusion:
      'Not every change needs a new version. Additive backward-compatible changes can often happen within the current version.',
    relatedTerms: ['Backward Compatibility', 'Deprecation', 'OpenAPI', 'Contract Testing'],
  },
  {
    id: 'integration-integration-testing',
    domain: 'integration',
    title: 'Integration Testing',
    subtitle: 'Verifying that connected components work together',
    difficulty: 'beginner',
    tags: ['testing', 'systems', 'quality'],
    definition:
      'Integration testing checks interactions between components, services, databases, queues, or external APIs rather than testing one unit in isolation.',
    whyItMatters:
      'Many bugs live at boundaries: mismatched schemas, missing permissions, wrong timeouts, bad migrations, or incompatible assumptions.',
    commonConfusion:
      'Integration tests are not the same as end-to-end tests. They can focus on a small boundary without exercising the entire user workflow.',
    relatedTerms: ['Contract Testing', 'Test Container', 'End-to-End Test', 'API Test'],
  },
  {
    id: 'integration-message-ordering',
    domain: 'integration',
    title: 'Message Ordering',
    subtitle: 'Keeping related events in the expected sequence',
    difficulty: 'intermediate',
    tags: ['messaging', 'events', 'consistency'],
    definition:
      'Message ordering controls whether related messages are delivered and processed in the same sequence they were produced.',
    whyItMatters:
      'Some workflows break if an update arrives before a create event or a cancellation arrives before the original order.',
    commonConfusion:
      'Global ordering is expensive and often unnecessary. Many systems only need ordering within a key such as account, user, or order ID.',
    relatedTerms: ['Partition Key', 'Kafka', 'FIFO Queue', 'Eventual Consistency'],
  },
  {
    id: 'agile-sprint-goal',
    domain: 'agile',
    title: 'Sprint Goal',
    subtitle: 'The shared outcome a sprint is trying to achieve',
    difficulty: 'beginner',
    tags: ['scrum', 'planning', 'alignment'],
    definition:
      'A sprint goal is a concise statement of the business or product outcome the team intends to deliver during the sprint.',
    whyItMatters:
      'It gives the team a decision filter when trade-offs appear, instead of treating the sprint as a disconnected list of tickets.',
    commonConfusion:
      'A sprint goal is not just a restatement of every backlog item. It should describe the outcome those items support.',
    relatedTerms: ['Sprint Planning', 'Product Backlog', 'Scrum', 'Commitment'],
  },
  {
    id: 'agile-backlog-refinement-expansion',
    domain: 'agile',
    title: 'Backlog Refinement',
    subtitle: 'Preparing future work before sprint planning',
    difficulty: 'beginner',
    tags: ['planning', 'backlog', 'scrum'],
    definition:
      'Backlog refinement is the ongoing activity of clarifying, splitting, estimating, and ordering work before it is selected for delivery.',
    whyItMatters:
      'Planning works better when the team has already surfaced dependencies, acceptance criteria, and uncertainty.',
    commonConfusion:
      'Refinement is not a commitment to build everything discussed. It improves readiness and shared understanding.',
    relatedTerms: ['Product Backlog', 'Story Splitting', 'Acceptance Criteria', 'Sprint Planning'],
  },
  {
    id: 'agile-definition-of-ready',
    domain: 'agile',
    title: 'Definition of Ready',
    subtitle: 'A shared threshold for work entering delivery',
    difficulty: 'beginner',
    tags: ['readiness', 'planning', 'quality'],
    definition:
      'A Definition of Ready describes the minimum clarity a backlog item should have before the team pulls it into active delivery.',
    whyItMatters:
      'It reduces churn caused by vague work entering a sprint before the team understands the goal, constraints, or acceptance criteria.',
    commonConfusion:
      'Definition of Ready should not become a bureaucracy gate. It should be lightweight and improve flow.',
    relatedTerms: ['Backlog Refinement', 'Acceptance Criteria', 'Definition of Done', 'Sprint Planning'],
  },
  {
    id: 'agile-acceptance-criteria',
    domain: 'agile',
    title: 'Acceptance Criteria',
    subtitle: 'Concrete conditions that define whether work is done correctly',
    difficulty: 'beginner',
    tags: ['requirements', 'quality', 'stories'],
    definition:
      'Acceptance criteria are testable conditions that a product backlog item must satisfy to be accepted by stakeholders or the product owner.',
    whyItMatters:
      'They reduce ambiguity and give developers, testers, and product owners a shared understanding of expected behavior.',
    commonConfusion:
      'Acceptance criteria are not implementation tasks. They describe observable outcomes, not the internal steps to build them.',
    relatedTerms: ['User Story', 'Definition of Done', 'BDD', 'Product Owner'],
  },
  {
    id: 'agile-story-mapping-expansion',
    domain: 'agile',
    title: 'Story Mapping',
    subtitle: 'Organizing work around the user journey',
    difficulty: 'intermediate',
    tags: ['product discovery', 'planning', 'prioritization'],
    definition:
      'Story mapping lays out user activities and tasks in sequence, then slices releases or increments across that journey.',
    whyItMatters:
      'It helps teams see the whole product experience, find gaps, and choose thin valuable slices instead of building isolated features.',
    commonConfusion:
      'Story mapping is not just backlog sorting. It is a visual model of user workflow and release strategy.',
    relatedTerms: ['User Journey', 'MVP', 'Backlog', 'Release Planning'],
  },
  {
    id: 'agile-velocity-expansion',
    domain: 'agile',
    title: 'Velocity',
    subtitle: 'A team-local measure of completed work per iteration',
    difficulty: 'beginner',
    tags: ['metrics', 'planning', 'scrum'],
    definition:
      'Velocity measures how much estimated work a team completes in an iteration, usually using story points or another team-local estimate.',
    whyItMatters:
      'Velocity can help a stable team forecast near-term capacity when used carefully and honestly.',
    commonConfusion:
      'Velocity should not be used to compare teams. Point scales are local, and pressure to increase velocity often damages estimation quality.',
    relatedTerms: ['Story Points', 'Forecasting', 'Sprint', 'Capacity'],
  },
  {
    id: 'agile-cycle-time-expansion',
    domain: 'agile',
    title: 'Cycle Time',
    subtitle: 'How long work takes from start to finish',
    difficulty: 'beginner',
    tags: ['flow', 'metrics', 'kanban'],
    definition:
      'Cycle time measures elapsed time from when work starts to when it is completed under the team definition of done.',
    whyItMatters:
      'Shorter, more predictable cycle time usually means faster feedback, less hidden work, and better delivery forecasting.',
    commonConfusion:
      'Cycle time differs from lead time. Lead time often starts when a request is made; cycle time starts when active work begins.',
    relatedTerms: ['Lead Time', 'Throughput', 'WIP', 'Kanban'],
  },
  {
    id: 'agile-wip-limit',
    domain: 'agile',
    title: 'WIP Limit',
    subtitle: 'A cap on work in progress',
    difficulty: 'beginner',
    tags: ['kanban', 'flow', 'focus'],
    definition:
      'A work-in-progress limit restricts how many items can be active in a workflow state or across a team at the same time.',
    whyItMatters:
      'Too much parallel work creates context switching, queues, delayed feedback, and hidden blockers. WIP limits expose bottlenecks.',
    commonConfusion:
      'A WIP limit is not about keeping people busy. It is about keeping work flowing.',
    relatedTerms: ['Kanban', 'Flow', 'Cycle Time', 'Bottleneck'],
  },
  {
    id: 'agile-retrospective-action-item',
    domain: 'agile',
    title: 'Retrospective Action Item',
    subtitle: 'A concrete improvement chosen after team reflection',
    difficulty: 'beginner',
    tags: ['retrospective', 'improvement', 'team'],
    definition:
      'A retrospective action item is a specific, owned change the team commits to after reflecting on what helped or hurt delivery.',
    whyItMatters:
      'Retrospectives without follow-through become ritual. Small action items turn learning into process improvement.',
    commonConfusion:
      'An action item should be small enough to complete. Large vague improvements should be split and owned.',
    relatedTerms: ['Retrospective', 'Continuous Improvement', 'Team Health', 'Experiment'],
  },
  {
    id: 'agile-product-increment',
    domain: 'agile',
    title: 'Product Increment',
    subtitle: 'A usable slice of product value',
    difficulty: 'beginner',
    tags: ['scrum', 'delivery', 'increment'],
    definition:
      'A product increment is the integrated, usable result of completed work that meets the definition of done and adds to the product.',
    whyItMatters:
      'Frequent increments create feedback opportunities and reduce the risk of long development periods without usable output.',
    commonConfusion:
      'An increment does not have to be released to every customer immediately, but it should be potentially releasable.',
    relatedTerms: ['Definition of Done', 'Sprint Review', 'Release', 'Scrum'],
  },
  {
    id: 'agile-spike-expansion',
    domain: 'agile',
    title: 'Spike',
    subtitle: 'Time-boxed research to reduce uncertainty',
    difficulty: 'beginner',
    tags: ['research', 'uncertainty', 'planning'],
    definition:
      'A spike is a time-boxed investigation used to answer a technical or product question before committing to larger delivery work.',
    whyItMatters:
      'Some work is too uncertain to estimate or design responsibly. Spikes turn unknowns into decisions, prototypes, or clearer backlog items.',
    commonConfusion:
      'A spike should produce learning, not production code by default. Its output is usually a recommendation, prototype, or refined plan.',
    relatedTerms: ['Discovery', 'Prototype', 'Risk Reduction', 'Timebox'],
  },
  {
    id: 'agile-release-burndown',
    domain: 'agile',
    title: 'Release Burndown',
    subtitle: 'Tracking remaining work toward a release target',
    difficulty: 'intermediate',
    tags: ['metrics', 'release', 'forecasting'],
    definition:
      'A release burndown shows remaining scope over time so teams can forecast whether a release target is likely to be met.',
    whyItMatters:
      'It makes scope change and progress visible, helping product and delivery leaders adjust scope, date, or staffing expectations early.',
    commonConfusion:
      'A burndown chart is not a performance scoreboard. It is a forecasting tool that depends on honest scope and completion data.',
    relatedTerms: ['Release Planning', 'Scope', 'Velocity', 'Forecasting'],
  },
  {
    id: 'governance-risk-register',
    domain: 'governance',
    title: 'Risk Register',
    subtitle: 'A tracked list of risks, owners, and treatments',
    difficulty: 'beginner',
    tags: ['risk', 'governance', 'tracking'],
    definition:
      'A risk register records identified risks, likelihood, impact, owner, treatment plan, status, and review dates.',
    whyItMatters:
      'Risks that are not tracked become surprises. A register makes risk decisions visible and assignable.',
    commonConfusion:
      'A risk register is not useful if it is a static spreadsheet. It needs review cadence, ownership, and updates when risk changes.',
    relatedTerms: ['Risk Treatment', 'Control', 'Likelihood', 'Impact'],
  },
  {
    id: 'governance-control-owner',
    domain: 'governance',
    title: 'Control Owner',
    subtitle: 'The person accountable for a specific control',
    difficulty: 'beginner',
    tags: ['controls', 'accountability', 'compliance'],
    definition:
      'A control owner is accountable for operating, monitoring, and providing evidence for a specific control.',
    whyItMatters:
      'Controls fail when everyone assumes someone else owns them. Named ownership makes audits and remediation actionable.',
    commonConfusion:
      'A control owner may not perform every task personally. They are accountable for ensuring the control operates effectively.',
    relatedTerms: ['Control', 'Audit Evidence', 'RACI', 'Compliance'],
  },
  {
    id: 'governance-audit-evidence',
    domain: 'governance',
    title: 'Audit Evidence',
    subtitle: 'Proof that a control operated as expected',
    difficulty: 'beginner',
    tags: ['audit', 'evidence', 'compliance'],
    definition:
      'Audit evidence is documentation, logs, screenshots, reports, tickets, or system records that demonstrate a control was designed and operated.',
    whyItMatters:
      'Auditors and regulators need verifiable proof, not verbal assurances. Good evidence reduces audit friction and supports trust.',
    commonConfusion:
      'Evidence must match the control period and scope. A screenshot from the wrong date or environment may not prove anything.',
    relatedTerms: ['Control Testing', 'SOC 2', 'Audit Trail', 'Compliance'],
  },
  {
    id: 'governance-policy-exception',
    domain: 'governance',
    title: 'Policy Exception',
    subtitle: 'An approved deviation from a required policy',
    difficulty: 'beginner',
    tags: ['policy', 'risk', 'exception'],
    definition:
      'A policy exception documents a temporary or bounded deviation from policy, including rationale, risk acceptance, compensating controls, owner, and expiry.',
    whyItMatters:
      'Real environments sometimes cannot comply immediately. Exceptions keep deviations visible and time-bound instead of hidden.',
    commonConfusion:
      'An exception is not a permanent waiver. It should expire, be reviewed, and either be remediated or formally renewed.',
    relatedTerms: ['Risk Acceptance', 'Compensating Control', 'Policy', 'Waiver'],
  },
  {
    id: 'governance-data-classification-policy',
    domain: 'governance',
    title: 'Data Classification Policy',
    subtitle: 'Labeling data by sensitivity and handling requirements',
    difficulty: 'beginner',
    tags: ['data governance', 'privacy', 'security'],
    definition:
      'A data classification policy defines sensitivity levels such as public, internal, confidential, and restricted, plus handling rules for each level.',
    whyItMatters:
      'Teams need to know which data requires encryption, access control, retention limits, masking, or special approval.',
    commonConfusion:
      'Classification labels only help if systems and processes use them. Labels should drive access, retention, monitoring, and sharing rules.',
    relatedTerms: ['PII', 'Data Loss Prevention', 'Retention', 'Access Control'],
  },
  {
    id: 'governance-access-review',
    domain: 'governance',
    title: 'Access Review',
    subtitle: 'Periodic confirmation that access is still appropriate',
    difficulty: 'beginner',
    tags: ['identity', 'audit', 'access'],
    definition:
      'An access review asks owners or managers to verify that users, groups, and service accounts still need their assigned permissions.',
    whyItMatters:
      'Access accumulates over time as people change roles and projects. Reviews reduce privilege creep and support audit requirements.',
    commonConfusion:
      'Access review is not the same as access request approval. Review checks whether existing access remains justified.',
    relatedTerms: ['Least Privilege', 'RBAC', 'Joiner-Mover-Leaver', 'Audit'],
  },
  {
    id: 'governance-segregation-of-duties',
    domain: 'governance',
    title: 'Segregation of Duties',
    subtitle: 'Splitting sensitive responsibilities across people or roles',
    difficulty: 'intermediate',
    tags: ['controls', 'fraud', 'access'],
    definition:
      'Segregation of duties prevents one person from controlling all steps of a sensitive process, such as requesting, approving, and executing a payment.',
    whyItMatters:
      'It reduces fraud, error, and abuse by requiring independent checks at critical points.',
    commonConfusion:
      'Small teams can still implement segregation with compensating controls such as review, logging, and approval by an independent owner.',
    relatedTerms: ['Control', 'Approval Workflow', 'Fraud Risk', 'Compensating Control'],
  },
  {
    id: 'governance-vendor-risk-assessment',
    domain: 'governance',
    title: 'Vendor Risk Assessment',
    subtitle: 'Evaluating third-party risk before and during use',
    difficulty: 'beginner',
    tags: ['vendor', 'risk', 'third party'],
    definition:
      'A vendor risk assessment reviews a third party security, privacy, compliance, operational resilience, and business risk before or during a relationship.',
    whyItMatters:
      'Vendors can process sensitive data or support critical operations. Their weaknesses can become your incidents.',
    commonConfusion:
      'Vendor assessment is not finished at onboarding. Important vendors need periodic review, monitoring, and contract controls.',
    relatedTerms: ['Third-Party Risk', 'SOC 2', 'DPA', 'Due Diligence'],
  },
  {
    id: 'governance-business-continuity-plan',
    domain: 'governance',
    title: 'Business Continuity Plan',
    subtitle: 'Keeping essential operations running during disruption',
    difficulty: 'beginner',
    tags: ['continuity', 'resilience', 'planning'],
    definition:
      'A business continuity plan defines how essential business functions continue during disruptions such as outages, office closures, vendor failures, or disasters.',
    whyItMatters:
      'Technology recovery is only part of resilience. Teams also need people, communications, manual workarounds, priorities, and decision rights.',
    commonConfusion:
      'Business continuity and disaster recovery overlap but differ. BC focuses on business operations; DR focuses on restoring technology services.',
    relatedTerms: ['Disaster Recovery', 'Crisis Management', 'RTO', 'RPO'],
  },
  {
    id: 'governance-disaster-recovery-test',
    domain: 'governance',
    title: 'Disaster Recovery Test',
    subtitle: 'Proving recovery plans work before a real disaster',
    difficulty: 'intermediate',
    tags: ['DR', 'testing', 'resilience'],
    definition:
      'A disaster recovery test exercises recovery procedures, backups, failover, communications, and roles to verify that recovery targets are achievable.',
    whyItMatters:
      'Untested recovery plans often fail when needed. Testing exposes missing access, outdated runbooks, broken backups, and unrealistic timelines.',
    commonConfusion:
      'A tabletop exercise and a technical failover test are different. Mature programs use both.',
    relatedTerms: ['RTO', 'RPO', 'Tabletop Exercise', 'Failover'],
  },
  {
    id: 'governance-records-retention',
    domain: 'governance',
    title: 'Records Retention',
    subtitle: 'Keeping official records for required periods',
    difficulty: 'beginner',
    tags: ['records', 'retention', 'compliance'],
    definition:
      'Records retention defines which business records must be kept, where they are stored, how long they are retained, and when they can be disposed.',
    whyItMatters:
      'Retention supports legal, regulatory, tax, audit, and business needs while reducing risk from keeping unnecessary records forever.',
    commonConfusion:
      'Records retention is not the same as data backup. Backup protects recoverability; retention governs official record lifecycle.',
    relatedTerms: ['Legal Hold', 'Data Retention', 'Archive', 'Disposition'],
  },
  {
    id: 'governance-compliance-attestation',
    domain: 'governance',
    title: 'Compliance Attestation',
    subtitle: 'A formal statement that requirements are met',
    difficulty: 'beginner',
    tags: ['compliance', 'audit', 'assurance'],
    definition:
      'A compliance attestation is a formal assertion, often supported by evidence or third-party review, that specific requirements or controls are satisfied.',
    whyItMatters:
      'Customers, regulators, and partners often need assurance before trusting a service or sharing sensitive data.',
    commonConfusion:
      'An attestation is not the same as certification in every framework. The level of independent assurance varies by standard and report type.',
    relatedTerms: ['SOC 2', 'ISO 27001', 'Audit Report', 'Evidence'],
  },
  {
    id: 'governance-risk-appetite',
    domain: 'governance',
    title: 'Risk Appetite',
    subtitle: 'How much risk an organization is willing to accept',
    difficulty: 'intermediate',
    tags: ['risk', 'strategy', 'governance'],
    definition:
      'Risk appetite states the amount and type of risk an organization is willing to accept while pursuing objectives.',
    whyItMatters:
      'Without risk appetite, teams escalate every hard choice or make inconsistent decisions about security, reliability, compliance, and speed.',
    commonConfusion:
      'Risk appetite is not permission to ignore risk. It sets decision boundaries and should be paired with risk tolerance and controls.',
    relatedTerms: ['Risk Tolerance', 'Risk Acceptance', 'Control', 'Governance'],
  },
];

export const expansionCards: Card[] = seeds.map((seed) => ({
  id: seed.id,
  domain: seed.domain,
  title: seed.title,
  subtitle: seed.subtitle,
  difficulty: seed.difficulty,
  tags: seed.tags,
  definition: seed.definition,
  whyItMatters: seed.whyItMatters,
  analogy: seed.analogy ?? domainAnalogies[seed.domain],
  soundsSmartToSay:
    seed.soundsSmartToSay ??
    `"${seed.title} is useful here, but only if we define ownership, operating limits, and how failure will be handled."`,
  commonConfusions: [seed.commonConfusion],
  relatedTerms: seed.relatedTerms,
}));
