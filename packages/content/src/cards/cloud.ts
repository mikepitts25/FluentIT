import type { Card } from '../types';

export const cloudCards: Card[] = [
  {
    id: 'cloud-iam-roles',
    domain: 'cloud',
    title: 'Cloud IAM Roles',
    subtitle: 'Permission grants for cloud resources',
    difficulty: 'beginner',
    tags: ['IAM', 'permissions', 'security'],
    definition:
      'In cloud platforms, IAM roles are collections of permissions that can be assigned to users, services, or applications. A role grants access to specific API actions on specific resources — nothing more.',
    whyItMatters:
      'Cloud breaches frequently happen through over-privileged roles. Assigning least-privilege roles prevents a compromised service from accessing everything in your account.',
    analogy:
      'Like Linux sudo rules — a service account might have permission to read S3 buckets but not delete them, just as a user might have sudo rights for specific commands only.',
    soundsSmartToSay:
      '"We should audit all IAM roles for privilege creep — roles accumulate permissions over time and rarely get trimmed."',
    commonConfusions: [
      'AWS IAM vs cloud IAM broadly: AWS IAM, GCP IAM, and Azure RBAC all implement the same concept differently. The pattern is the same; the syntax and structure differ.',
      'Role vs policy: In AWS, a policy defines permissions, and a role is a container that holds policies. In GCP, roles contain permissions directly.',
    ],
    relatedTerms: ['Least Privilege', 'Service Account', 'AWS SCP', 'RBAC'],
  },
  {
    id: 'cloud-serverless',
    domain: 'cloud',
    title: 'Serverless',
    subtitle: 'Run code without managing infrastructure',
    difficulty: 'beginner',
    tags: ['lambda', 'functions', 'FaaS'],
    definition:
      'Serverless lets you deploy individual functions that execute on-demand, with no servers to provision, patch, or scale. You pay per invocation and the cloud provider handles all infrastructure concerns.',
    whyItMatters:
      'Operational overhead drops to near zero for event-driven workloads. A function triggered by a file upload costs nothing when there are no uploads and scales automatically to millions.',
    analogy:
      "Like paying per taxi ride instead of owning a car — you don't maintain the vehicle, insurance, or garage. You just call when you need it and pay for what you use.",
    soundsSmartToSay:
      '"Serverless is not zero-ops — you still need to manage IAM, environment variables, timeouts, and cold start latency."',
    commonConfusions: [
      'Serverless does not mean no servers — servers absolutely exist. You just don\'t manage them. "No servers to manage" is more accurate.',
      'Cold starts: the first invocation of an idle function can be slow as the runtime initializes. For latency-sensitive APIs, this is a real concern.',
    ],
    relatedTerms: ['AWS Lambda', 'Cloud Functions', 'Event-Driven', 'FaaS'],
  },
  {
    id: 'cloud-vpc',
    domain: 'cloud',
    title: 'VPC',
    subtitle: 'Virtual Private Cloud — your network in the cloud',
    difficulty: 'beginner',
    tags: ['networking', 'isolation', 'subnets'],
    definition:
      'A VPC is a logically isolated virtual network in the cloud where you launch your resources. You define the IP address ranges, subnets (public and private), route tables, and gateways.',
    whyItMatters:
      'Without a VPC, your cloud resources would be on a flat public network. A VPC lets you create private segments that are not internet-accessible by default — the foundation of cloud network security.',
    analogy:
      'Like your corporate office network — you have a building (VPC) with private internal offices (private subnets) and a lobby open to visitors (public subnet), all connected by a switchboard (router).',
    soundsSmartToSay:
      '"Our databases should never be in a public subnet — they belong in a private subnet with no route to the internet gateway."',
    commonConfusions: [
      'Public vs private subnet: A public subnet has a route to an internet gateway. A private subnet does not. Databases and backends belong in private subnets.',
      'VPC peering vs Transit Gateway: VPC peering connects two VPCs directly. Transit Gateway acts as a hub for connecting many VPCs — better at scale.',
    ],
    relatedTerms: ['Subnet', 'Security Group', 'Internet Gateway', 'NAT Gateway'],
  },
  {
    id: 'cloud-multi-region',
    domain: 'cloud',
    title: 'Regions and Availability Zones',
    subtitle: 'How cloud providers achieve physical redundancy',
    difficulty: 'beginner',
    tags: ['availability', 'disaster recovery', 'latency'],
    definition:
      'A cloud region is a geographic area (e.g., us-east-1) containing multiple isolated data centers called Availability Zones (AZs). AZs within a region are connected by low-latency links but are physically separate to survive local failures.',
    whyItMatters:
      'Deploying across multiple AZs protects against data center failures. Deploying across multiple regions protects against regional outages and satisfies data residency requirements.',
    analogy:
      'Like having branch offices in multiple cities (regions) and multiple buildings per city (AZs). If one building loses power, the others keep running. If a city floods, the other cities are unaffected.',
    soundsSmartToSay:
      '"Single-AZ deployments are not highly available — we need resources spread across at least two AZs to survive an AZ outage."',
    commonConfusions: [
      'Region vs AZ: Region is geographic (US East). AZ is a specific data center cluster within that region. One region typically has 3+ AZs.',
      'Multi-AZ vs multi-region: Multi-AZ handles hardware failures and maintenance. Multi-region handles regional disasters and is significantly more complex to operate.',
    ],
    relatedTerms: ['High Availability', 'Disaster Recovery', 'Data Residency', 'Edge Locations'],
  },
  {
    id: 'cloud-object-storage',
    domain: 'cloud',
    title: 'Object Storage',
    subtitle: 'Infinitely scalable flat file storage (S3, GCS, Blob)',
    difficulty: 'beginner',
    tags: ['S3', 'storage', 'data lake'],
    definition:
      'Object storage stores files as objects with metadata and a unique key, in flat namespaces called buckets. Unlike file systems (folders/paths), objects are accessed via HTTP and can scale to exabytes without performance degradation.',
    whyItMatters:
      'Object storage is the backbone of data lakes, ML training datasets, backups, static website hosting, and log archives — all at near-zero cost per GB compared to block or file storage.',
    analogy:
      'Like a massive warehouse where every item has a unique barcode (key) and you retrieve it by barcode — no shelving structure, no folders, just direct lookup.',
    soundsSmartToSay:
      '"We should move our audit logs to object storage with a lifecycle policy — keeping everything on EBS is expensive and unnecessary."',
    commonConfusions: [
      'Object storage vs block storage: Block storage (EBS, Persistent Disk) is what a filesystem or database uses — low latency, random I/O. Object storage is for large files accessed via HTTP.',
      'Public access in object storage: S3 buckets are private by default in 2026, but misconfigured buckets exposing sensitive data are still a common breach vector.',
    ],
    relatedTerms: ['AWS S3', 'Data Lake', 'Lifecycle Policy', 'CDN'],
  },
  {
    id: 'cloud-autoscaling',
    domain: 'cloud',
    title: 'Auto Scaling',
    subtitle: 'Automatically adjusting capacity to match demand',
    difficulty: 'beginner',
    tags: ['scaling', 'cost', 'availability'],
    definition:
      'Auto scaling automatically adds or removes compute capacity (instances, containers, functions) based on real-time demand metrics like CPU utilization, request count, or queue depth.',
    whyItMatters:
      'Without auto scaling you either over-provision (waste money) or under-provision (outages during traffic spikes). Auto scaling means you pay for what you use and always have enough capacity.',
    analogy:
      'Like a restaurant that calls in extra chefs when the dinner rush starts and sends them home after the rush — matching staffing to demand in real time.',
    soundsSmartToSay:
      '"Our auto scaling policies need to scale out faster than they scale in — aggressive scale-out, conservative scale-in prevents thrashing."',
    commonConfusions: [
      'Horizontal vs vertical scaling: Auto scaling typically means horizontal (adding more instances). Vertical scaling (bigger instance) has limits and requires restarts.',
      'Scaling is not instant — it takes minutes to spin up new instances. You need buffers or predictive scaling for traffic spikes that ramp fast.',
    ],
    relatedTerms: ['Load Balancer', 'HPA', 'KEDA', 'Spot Instances'],
  },
  {
    id: 'cloud-cdn',
    domain: 'cloud',
    title: 'CDN',
    subtitle: 'Content Delivery Network — serving content from the edge',
    difficulty: 'beginner',
    tags: ['performance', 'edge', 'caching'],
    definition:
      'A CDN is a globally distributed network of cache servers (edge locations) that serve content from the location closest to the user — reducing latency, offloading origin servers, and absorbing DDoS traffic.',
    whyItMatters:
      'A user in Tokyo hitting your origin server in Virginia has 150ms+ of network latency before anything loads. A CDN serves cached content from a Tokyo edge node in <10ms.',
    analogy:
      'Like distributing copies of a popular book to libraries worldwide instead of having everyone fly to the publisher in New York to read it.',
    soundsSmartToSay:
      '"We need to set correct cache-control headers — if our CDN is not caching static assets aggressively, we\'re wasting money on origin bandwidth."',
    commonConfusions: [
      "CDN vs load balancer: A load balancer distributes traffic across your origin servers. A CDN sits in front of everything and serves cached content so many requests never reach your origin.",
      'CDNs also provide DDoS protection and WAF (Web Application Firewall) capabilities — it is not just about performance.',
    ],
    relatedTerms: ['Edge Location', 'Cache-Control', 'WAF', 'Origin Shield'],
  },
  {
    id: 'cloud-managed-services',
    domain: 'cloud',
    title: 'Managed Services',
    subtitle: 'Let the cloud run the plumbing',
    difficulty: 'beginner',
    tags: ['RDS', 'PaaS', 'operational overhead'],
    definition:
      'Managed services are cloud-operated versions of common software — databases (RDS), message queues (SQS), caches (ElastiCache), search (OpenSearch) — where the provider handles provisioning, patching, backups, and scaling.',
    whyItMatters:
      'Running your own database cluster requires specialized expertise, ongoing patching, backup management, and failover configuration. A managed service offloads all of that to the cloud provider.',
    analogy:
      'Like hiring a property management company instead of being your own landlord — they handle maintenance, repairs, and tenant issues. You just collect rent (use the service).',
    soundsSmartToSay:
      '"We should evaluate managed Kafka before running our own brokers — the operational burden of self-managed Kafka clusters is significant."',
    commonConfusions: [
      'Managed does not mean hands-off entirely — you still configure security groups, IAM permissions, parameter groups, and retention policies. You just don\'t patch the OS or replace failed disks.',
      'Cost: Managed services cost more per unit than self-managed. The tradeoff is paying for engineering time vs. paying the cloud provider. At scale, sometimes self-managed wins.',
    ],
    relatedTerms: ['RDS', 'PaaS', 'Shared Responsibility Model', 'Multi-AZ'],
  },
  {
    id: 'cloud-cost-optimization',
    domain: 'cloud',
    title: 'Cloud Cost Optimization (FinOps)',
    subtitle: 'Making cloud spending visible, accountable, and efficient',
    difficulty: 'intermediate',
    tags: ['FinOps', 'cost management', 'reserved instances', 'right-sizing'],
    definition:
      'Cloud cost optimization — often practiced as FinOps — is the discipline of monitoring, allocating, and reducing cloud spend without sacrificing performance. It combines reserved instance purchasing, right-sizing underutilized resources, eliminating waste, and creating tagging strategies that tie every dollar to a team or product.',
    whyItMatters:
      'Cloud bills can grow 3-5x faster than expected because developers provision resources without seeing the invoice. A mature FinOps practice gives finance and engineering a shared view of spend, turning cloud cost into a first-class engineering metric rather than a quarterly surprise.',
    analogy:
      'Like capacity planning in a data center, but reversed — in on-prem you fight to get budget for hardware up front. In cloud you fight to control spending after the fact, because anyone with an IAM role can spin up resources instantly.',
    soundsSmartToSay:
      '"We should commit to a savings plan for our baseline compute and use spot instances for our batch workloads — we are leaving 40% savings on the table with on-demand pricing."',
    commonConfusions: [
      'Reserved Instances vs Savings Plans: Reserved Instances lock you to a specific instance type and region. Savings Plans commit to a dollar amount of usage and are more flexible across instance families.',
      'Right-sizing is not just downsizing — sometimes an instance is CPU-optimized when it should be memory-optimized. Changing the family matters as much as changing the size.',
      'Cost optimization is not cost cutting — the goal is maximizing value per dollar, which sometimes means spending more on performance-critical paths.',
    ],
    relatedTerms: ['Savings Plans', 'Spot Instances', 'Tagging Strategy', 'Showback/Chargeback'],
  },
  {
    id: 'cloud-containers-as-a-service',
    domain: 'cloud',
    title: 'Containers as a Service',
    subtitle: 'Run containers without managing the cluster underneath',
    difficulty: 'beginner',
    tags: ['CaaS', 'containers', 'ECS', 'Fargate', 'Cloud Run'],
    definition:
      'Containers as a Service (CaaS) platforms like AWS Fargate, Azure Container Instances, and Google Cloud Run let you run Docker containers without provisioning or managing the underlying servers or Kubernetes clusters. You provide a container image, specify CPU and memory, and the platform handles scheduling, scaling, and infrastructure.',
    whyItMatters:
      'CaaS removes the operational burden of managing a container orchestrator while still giving teams the portability and consistency of container-based deployments. It is the sweet spot between serverless functions (too constrained) and full Kubernetes (too complex) for many workloads.',
    analogy:
      'Like the difference between leasing a car and renting one by the hour — Kubernetes is the lease where you maintain and park the vehicle, CaaS is the rental where you just drive it and hand back the keys.',
    soundsSmartToSay:
      '"For this microservice we do not need a full EKS cluster — Fargate or Cloud Run gives us container portability without the Kubernetes operational overhead."',
    commonConfusions: [
      'CaaS vs Kubernetes: CaaS abstracts away the cluster entirely. Managed Kubernetes (EKS, GKE) still requires you to manage node pools, upgrades, and networking — CaaS removes all of that.',
      'CaaS vs serverless functions: Functions (Lambda) run short-lived event handlers. CaaS runs full container images, so you can bring any runtime, framework, or long-running process.',
    ],
    relatedTerms: ['Docker', 'Fargate', 'Cloud Run', 'Container Registry'],
  },
  {
    id: 'cloud-native-architecture',
    domain: 'cloud',
    title: 'Cloud-Native Architecture',
    subtitle: 'Designing systems to exploit cloud capabilities from day one',
    difficulty: 'intermediate',
    tags: ['microservices', '12-factor', 'resilience', 'cloud-native'],
    definition:
      'Cloud-native architecture is a design approach where applications are built specifically to leverage cloud elasticity, managed services, and distributed infrastructure. It typically involves microservices, containerization, declarative APIs, immutable infrastructure, and designing for failure — rather than simply lifting existing apps into VMs.',
    whyItMatters:
      'Lift-and-shift migrations move on-prem problems to the cloud and add a cloud bill on top. Cloud-native design unlocks the real value — automatic scaling, self-healing, rapid deployments, and pay-per-use economics that on-prem architectures structurally cannot achieve.',
    analogy:
      'Like the difference between scanning a paper form into a PDF versus building a native web form — the PDF works, but you lose search, validation, and automation. Cloud-native means building for the new medium, not just porting the old one.',
    soundsSmartToSay:
      '"Lifting and shifting this monolith will not give us cloud benefits — we need to decompose the stateful components and externalize session state before we can scale horizontally."',
    commonConfusions: [
      'Cloud-native does not mean microservices exclusively — a well-designed modular monolith deployed in containers with CI/CD and infrastructure-as-code can be cloud-native. The principles matter more than the pattern.',
      'Cloud-native vs cloud-hosted: Running a legacy app on an EC2 instance is cloud-hosted. Cloud-native means the app was designed to take advantage of elasticity, managed services, and distributed architecture.',
      'The CNCF (Cloud Native Computing Foundation) defines cloud-native around containers, service meshes, and declarative APIs, but the broader industry uses it more loosely to mean "built for cloud."',
    ],
    relatedTerms: ['12-Factor App', 'Microservices', 'Immutable Infrastructure', 'CNCF'],
  },
  {
    id: 'cloud-landing-zones',
    domain: 'cloud',
    title: 'Landing Zones',
    subtitle: 'Pre-configured, governed foundations for cloud accounts',
    difficulty: 'advanced',
    tags: ['governance', 'multi-account', 'Control Tower', 'guardrails'],
    definition:
      'A landing zone is a pre-architected, multi-account cloud environment that enforces security baselines, networking topology, IAM boundaries, and compliance guardrails before any workload is deployed. Tools like AWS Control Tower, Azure Landing Zones, and GCP Cloud Foundation Toolkit automate the setup of organizational units, centralized logging, and preventive policies.',
    whyItMatters:
      'Without a landing zone, every team sets up their own account differently — inconsistent security policies, no centralized audit trail, and network configurations that do not interconnect. A landing zone ensures that the hundredth account is as well-governed as the first, which is critical for enterprises with regulatory obligations.',
    analogy:
      'Like a managed building code for a new city district — before anyone builds, the zoning, utilities, fire codes, and road layouts are standardized. Individual teams still design their own buildings, but the foundation is consistent and compliant.',
    soundsSmartToSay:
      '"We should not hand out AWS accounts without running them through our landing zone — every account needs centralized CloudTrail, Config rules, and a VPC peered to our transit gateway from day one."',
    commonConfusions: [
      'Landing zone vs single account setup: A landing zone is a multi-account strategy with organizational units, SCPs, and centralized services. It is not just configuring one account well.',
      'Landing zones are not one-time — they require ongoing maintenance as new compliance rules emerge, new regions are adopted, and new account patterns are needed. Treat them as a living platform.',
      'AWS Control Tower vs custom landing zone: Control Tower is opinionated and faster to start. Custom landing zones built with Terraform or CloudFormation offer more flexibility but require more engineering investment.',
    ],
    relatedTerms: ['AWS Control Tower', 'Organizational Units', 'Service Control Policies', 'Guardrails'],
  },
  {
    id: 'cloud-egress-costs',
    domain: 'cloud',
    title: 'Egress Costs',
    subtitle: 'The hidden tax on data leaving the cloud',
    difficulty: 'beginner',
    tags: ['networking', 'cost', 'data transfer', 'egress'],
    definition:
      'Egress costs are charges cloud providers levy when data leaves their network — whether to the internet, to another region, or sometimes even to another availability zone. Ingress (data coming in) is typically free, but egress can cost $0.08-0.12 per GB, which adds up fast at scale.',
    whyItMatters:
      'Teams often focus on compute and storage costs and are blindsided by data transfer bills. A service streaming 100TB of video per month can face $9,000+ in egress alone. Understanding egress patterns is essential for accurate cloud budgeting and architecture decisions.',
    analogy:
      'Like a hotel that offers free check-in but charges you to leave with your luggage — cloud providers make it cheap to bring data in and expensive to take it out, creating a natural lock-in effect.',
    soundsSmartToSay:
      '"Before we architect this as cross-region replication, let us model the egress costs — inter-region data transfer is not free and that database replicates a lot of write traffic."',
    commonConfusions: [
      'Not all egress is priced the same — data to the internet, to another region, to another AZ, and to other AWS services within the same region all have different rates. Same-AZ traffic within a VPC is usually free.',
      'Egress costs are a form of vendor lock-in — once your data is in a cloud, moving it out costs real money. This is intentional and should factor into multi-cloud strategy decisions.',
    ],
    relatedTerms: ['Data Transfer', 'CDN', 'VPC Peering', 'Cloud Cost Optimization'],
  },
  {
    id: 'cloud-service-models',
    domain: 'cloud',
    title: 'Cloud Service Models (IaaS/PaaS/SaaS)',
    subtitle: 'The three layers of cloud responsibility',
    difficulty: 'beginner',
    tags: ['IaaS', 'PaaS', 'SaaS', 'shared responsibility'],
    definition:
      'Cloud service models define how much of the stack the provider manages versus you. Infrastructure as a Service (IaaS) gives you virtual machines and networking — you manage everything above the hypervisor. Platform as a Service (PaaS) adds the runtime, so you only manage your code and data. Software as a Service (SaaS) manages everything — you just use the application.',
    whyItMatters:
      'Choosing the right service model determines your team\'s operational burden, security responsibilities, and cost structure. An understaffed team running IaaS databases is taking on patching and backup obligations they may not be equipped to handle — PaaS or SaaS might be a better fit.',
    analogy:
      'Like the difference between building a house (IaaS), renting an unfurnished apartment (PaaS), and staying in a hotel (SaaS) — each level trades control and customization for convenience and reduced responsibility.',
    soundsSmartToSay:
      '"We need to be clear about where our responsibility ends in the shared responsibility model — on IaaS we own OS patching, but on PaaS the provider handles that and we only secure our application layer."',
    commonConfusions: [
      'The lines between IaaS, PaaS, and SaaS are blurring — services like AWS Fargate or Azure SQL Managed Instance sit somewhere between IaaS and PaaS. Think of it as a spectrum, not three rigid boxes.',
      'SaaS does not mean zero security responsibility — you still manage user access, data classification, API key rotation, and integration security. The shared responsibility model always leaves something on your plate.',
      'PaaS is not just Heroku — managed Kubernetes, managed databases, and serverless platforms are all forms of PaaS, even though they feel very different to operate.',
    ],
    relatedTerms: ['Shared Responsibility Model', 'Managed Services', 'Serverless', 'Lift and Shift'],
  },
  {
    id: 'cloud-kubernetes',
    domain: 'cloud',
    title: 'Kubernetes on Cloud (EKS/AKS/GKE)',
    subtitle: 'Managed Kubernetes — container orchestration without building the control plane',
    difficulty: 'intermediate',
    tags: ['Kubernetes', 'EKS', 'AKS', 'GKE', 'container orchestration'],
    definition:
      'Managed Kubernetes services like Amazon EKS, Azure AKS, and Google GKE run the Kubernetes control plane for you — handling API server availability, etcd backups, and version upgrades. You still manage worker nodes (or use a serverless node option like Fargate or Autopilot), deploy workloads, and configure networking and security policies.',
    whyItMatters:
      'Self-hosting Kubernetes is a full-time job for a platform team. Managed Kubernetes removes the hardest parts — control plane HA, etcd reliability, and upgrade orchestration — so your engineers can focus on deploying and operating applications rather than operating the platform itself.',
    analogy:
      'Like the difference between building your own mail server versus using managed Exchange — you still configure mailboxes, rules, and security, but you do not worry about the underlying server uptime, patching, or storage replication.',
    soundsSmartToSay:
      '"We are running EKS but still managing our own node groups — we should evaluate Karpenter for node provisioning to reduce our operational surface and improve bin-packing efficiency."',
    commonConfusions: [
      'Managed Kubernetes is not fully managed — the provider runs the control plane, but you are still responsible for worker node OS patches (unless using Fargate/Autopilot), Kubernetes RBAC, network policies, pod security, and application-level concerns.',
      'EKS, AKS, and GKE are not identical — they differ significantly in default networking (CNI plugins), IAM integration, ingress controllers, and upgrade strategies. Kubernetes portability does not mean zero migration effort.',
      'Managed Kubernetes vs CaaS: Managed Kubernetes still exposes the full Kubernetes API and complexity. CaaS (Fargate, Cloud Run) hides the orchestrator entirely — choose based on whether your team needs Kubernetes-level control.',
    ],
    relatedTerms: ['Kubernetes', 'Karpenter', 'Helm', 'Container as a Service'],
  },
  {
    id: 'cloud-data-sovereignty',
    domain: 'cloud',
    title: 'Cloud Data Sovereignty',
    subtitle: 'Legal and regulatory control over where data physically resides',
    difficulty: 'advanced',
    tags: ['compliance', 'GDPR', 'data residency', 'governance'],
    definition:
      'Data sovereignty is the principle that data is subject to the laws and governance structures of the country where it is physically stored or processed. In cloud computing, this means choosing regions carefully, configuring replication boundaries, and sometimes using sovereign cloud offerings to ensure data never leaves a specific jurisdiction.',
    whyItMatters:
      'Regulations like GDPR, Canadas PIPEDA, and Australias Privacy Act impose strict rules on where personal data can reside and who can access it. A misconfigured cross-region replication or a US-based support engineer accessing EU customer data can create a compliance violation with fines reaching 4% of global revenue.',
    analogy:
      'Like the chain-of-custody requirements in forensic evidence handling — it is not enough to protect the data, you must also prove it was never in the wrong hands or the wrong place. The physical and jurisdictional location matters as much as the encryption.',
    soundsSmartToSay:
      '"We need to audit our S3 replication rules and CloudFront distribution origins — if any EU customer data is being cached at US edge locations, we have a GDPR data residency problem."',
    commonConfusions: [
      'Data residency vs data sovereignty: Data residency is about where data is stored. Data sovereignty adds the legal dimension — whose laws apply to that data. Data can be resident in a country but sovereign to another if a foreign company controls the encryption keys.',
      'Encryption does not solve sovereignty — even if data is encrypted at rest in a compliant region, if the encryption keys are managed by a US-headquartered provider, some jurisdictions consider the data accessible to US authorities under the CLOUD Act.',
      'Sovereign cloud offerings (AWS GovCloud, Google Distributed Cloud, Azure Confidential Computing) exist specifically for regulated workloads, but they come with reduced service availability and higher costs.',
    ],
    relatedTerms: ['GDPR', 'Data Residency', 'CLOUD Act', 'Sovereign Cloud'],
  },
  {
    id: 'cloud-finops',
    domain: 'cloud',
    title: 'FinOps',
    subtitle: 'Cloud cost optimization as a discipline',
    difficulty: 'intermediate',
    tags: ['cost', 'optimization', 'governance'],
    definition:
      'FinOps (Cloud Financial Operations) is the practice of bringing financial accountability to cloud spending through real-time cost visibility, team-level chargeback, and continuous optimization — reserved instances, rightsizing, spot instances, and eliminating waste.',
    whyItMatters:
      'Cloud spending is the fastest-growing line item in most IT budgets, and without FinOps discipline, teams over-provision "just in case." Organizations with mature FinOps practices save 20–30% on cloud spend annually.',
    analogy:
      'Like DevOps brought dev and ops together, FinOps brings engineering and finance together. Engineers make the spending decisions (instance sizes, storage tiers), so they need the cost data in real time — not a surprise bill at month-end.',
    soundsSmartToSay:
      '"We should tag every resource by team and environment so we can do per-team chargeback — you cannot optimize what you cannot attribute."',
    commonConfusions: [
      'FinOps vs cost cutting: FinOps is about maximizing value per dollar, not just cutting costs. Sometimes spending more (on reserved instances or better architecture) saves money long-term.',
      'FinOps vs billing alerts: Alerts tell you when you overspend. FinOps is a continuous practice of forecasting, budgeting, optimizing, and attributing costs across teams.',
    ],
    relatedTerms: ['Reserved Instances', 'Spot Instances', 'Rightsizing', 'Cloud Governance'],
  },
  {
    id: 'cloud-caas',
    domain: 'cloud',
    title: 'Containers as a Service',
    subtitle: 'Run containers without managing clusters',
    difficulty: 'beginner',
    tags: ['containers', 'managed', 'serverless'],
    definition:
      'CaaS platforms (like AWS Fargate, Azure Container Instances, or Google Cloud Run) let you run containers without provisioning or managing the underlying servers or Kubernetes clusters. You push a container image and the platform handles scheduling, scaling, and infrastructure.',
    whyItMatters:
      'Not every team needs the full power (and complexity) of Kubernetes. CaaS gives you container portability and isolation without the operational burden of managing a cluster — ideal for smaller services or teams without dedicated platform engineers.',
    analogy:
      'Like the difference between owning a car and using a ride service. Kubernetes is buying and maintaining your own fleet. CaaS is calling an Uber — you just say where you want to go (what container to run) and the platform handles the rest.',
    soundsSmartToSay:
      '"For this service, Fargate makes more sense than EKS — we do not need cluster-level control and the ops overhead is not worth it for a single workload."',
    commonConfusions: [
      'CaaS vs serverless: Serverless (Lambda/Cloud Functions) runs functions. CaaS runs full containers. CaaS gives you more control over the runtime but less abstraction than serverless.',
      'CaaS vs Kubernetes: CaaS often runs on Kubernetes under the hood but hides the complexity. If you need custom networking, sidecars, or operators, you need full Kubernetes.',
    ],
    relatedTerms: ['Serverless', 'Kubernetes', 'Docker', 'Cloud Run'],
  },
  {
    id: 'cloud-native',
    domain: 'cloud',
    title: 'Cloud-Native Architecture',
    subtitle: 'Built for the cloud, not just running on it',
    difficulty: 'intermediate',
    tags: ['architecture', 'microservices', 'design'],
    definition:
      'Cloud-native architecture designs applications to fully exploit cloud capabilities — microservices, containers, declarative APIs, immutable infrastructure, and automated scaling. It is a design philosophy, not a specific technology.',
    whyItMatters:
      'Lifting and shifting a monolith to the cloud gives you a cloud bill without cloud benefits. Cloud-native applications scale elastically, recover from failures automatically, and deploy independently — delivering the agility the cloud promises.',
    analogy:
      'Like the difference between scanning a paper document into a PDF versus creating a native digital document. The PDF is "in the cloud" but you cannot search, edit, or hyperlink it. The native document unlocks all the digital capabilities.',
    soundsSmartToSay:
      '"Moving to the cloud is not cloud-native — we need to decompose this monolith into independently deployable services before we get the scaling and resilience benefits."',
    commonConfusions: [
      'Cloud-native vs cloud-hosted: Running a VM in AWS is cloud-hosted. Cloud-native means the application is architected for elastic scaling, self-healing, and continuous delivery.',
      'Cloud-native does not mean microservices only: A well-designed modular monolith can be cloud-native if it uses containers, declarative config, and cloud-managed services. Microservices are one pattern, not the definition.',
    ],
    relatedTerms: ['Microservices', 'Containers', '12-Factor App', 'Kubernetes'],
  },
  {
    id: 'cloud-egress',
    domain: 'cloud',
    title: 'Egress Costs',
    subtitle: 'Data goes in free but comes out expensive',
    difficulty: 'beginner',
    tags: ['cost', 'networking', 'billing'],
    definition:
      'Egress costs are the charges cloud providers apply when data leaves their network — to the internet, to another region, or sometimes even to another availability zone. Ingress (data going in) is almost always free, but egress can be one of the largest surprise line items on a cloud bill.',
    whyItMatters:
      'Teams often architect for performance without considering data transfer costs. A chatty microservice that pulls gigabytes between regions, or a CDN-less API serving large responses globally, can generate thousands in unexpected egress charges.',
    analogy:
      'Like a hotel minibar: checking in with your luggage is free, but every item you take out is marked up 10x. Cloud providers make it cheap to put data in and expensive to take it out — creating vendor lock-in through economics.',
    soundsSmartToSay:
      '"We should audit our cross-region traffic — inter-AZ egress alone is costing us more than the compute for that service."',
    commonConfusions: [
      'Egress vs bandwidth: Bandwidth is the pipe capacity. Egress is the per-GB charge for data that flows through it. You can have plenty of bandwidth and still pay high egress costs.',
      'Same-region egress: Data transfer between availability zones in the same region is not free on most providers. Only traffic within the same AZ avoids egress charges.',
    ],
    relatedTerms: ['FinOps', 'CDN', 'Data Transfer', 'Multi-Region'],
  },
  {
    id: 'cloud-managed-k8s',
    domain: 'cloud',
    title: 'Managed Kubernetes',
    subtitle: 'EKS, AKS, GKE — Kubernetes without the control plane headache',
    difficulty: 'intermediate',
    tags: ['kubernetes', 'managed', 'containers'],
    definition:
      'Managed Kubernetes services (AWS EKS, Azure AKS, Google GKE) run and maintain the Kubernetes control plane for you — API server, etcd, scheduler — so you only manage the worker nodes and workloads. Some offer fully managed node pools too.',
    whyItMatters:
      'Self-hosting Kubernetes means managing etcd backups, control plane upgrades, and HA across zones — a full-time job. Managed Kubernetes shifts that burden to the cloud provider, letting platform teams focus on developer experience and application reliability.',
    analogy:
      'Like managed databases (RDS, Cloud SQL) for your orchestration layer. Just as you would not run your own Postgres on bare metal if a managed version exists, you should not run your own k8s control plane if a managed version exists.',
    soundsSmartToSay:
      '"GKE Autopilot fully manages nodes too — for our workloads, it might make more sense than managing our own node pools on standard GKE."',
    commonConfusions: [
      'Managed control plane vs managed nodes: Most managed k8s services manage the control plane by default but still make you manage worker nodes. Fully managed options (GKE Autopilot, EKS Fargate profiles) also manage the nodes.',
      'EKS vs AKS vs GKE: All three provide managed Kubernetes, but they differ in default networking (VPC-native vs overlay), upgrade experience, and add-on ecosystem. GKE is generally considered the most opinionated and easiest to operate.',
    ],
    relatedTerms: ['Kubernetes', 'Containers as a Service', 'Helm', 'Cloud-Native'],
  },
];
