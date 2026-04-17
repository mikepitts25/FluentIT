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
];
