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
      'AWS IAM vs cloud IAM broadly: AWS IAM, GCP IAM, and Azure RBAC all implement the same concept differently.',
      'Role vs policy: In AWS, a policy defines permissions and a role is a container that holds policies. In GCP, roles contain permissions directly.',
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
      "Like paying per taxi ride instead of owning a car — you don't maintain the vehicle, insurance, or garage.",
    soundsSmartToSay:
      '"Serverless is not zero-ops — you still need to manage IAM, environment variables, timeouts, and cold start latency."',
    commonConfusions: [
      'Serverless does not mean no servers — servers absolutely exist. You just don\'t manage them.',
      'Cold starts: the first invocation of an idle function can be slow as the runtime initializes.',
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
      'Like your corporate office network — you have a building (VPC) with private internal offices (private subnets) and a lobby open to visitors (public subnet).',
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
      'Like having branch offices in multiple cities (regions) and multiple buildings per city (AZs). If one building loses power, the others keep running.',
    soundsSmartToSay:
      '"Single-AZ deployments are not highly available — we need resources spread across at least two AZs to survive an AZ outage."',
    commonConfusions: [
      'Region vs AZ: Region is geographic (US East). AZ is a specific data center cluster within that region.',
      'Multi-AZ vs multi-region: Multi-AZ handles hardware failures. Multi-region handles regional disasters and is significantly more complex.',
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
      'Object storage stores files as objects with metadata and a unique key, in flat namespaces called buckets. Unlike file systems, objects are accessed via HTTP and can scale to exabytes without performance degradation.',
    whyItMatters:
      'Object storage is the backbone of data lakes, ML training datasets, backups, static website hosting, and log archives — all at near-zero cost per GB.',
    analogy:
      'Like a massive warehouse where every item has a unique barcode (key) and you retrieve it by barcode — no shelving structure, no folders, just direct lookup.',
    soundsSmartToSay:
      '"We should move our audit logs to object storage with a lifecycle policy — keeping everything on EBS is expensive and unnecessary."',
    commonConfusions: [
      'Object storage vs block storage: Block storage (EBS) is what a filesystem or database uses — low latency, random I/O. Object storage is for large files accessed via HTTP.',
      'Misconfigured buckets exposing sensitive data are still a common breach vector even though S3 buckets are private by default in 2026.',
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
      'Auto scaling automatically adds or removes compute capacity based on real-time demand metrics like CPU utilization, request count, or queue depth.',
    whyItMatters:
      'Without auto scaling you either over-provision (waste money) or under-provision (outages during traffic spikes). Auto scaling means you pay for what you use and always have enough capacity.',
    analogy:
      'Like a restaurant that calls in extra chefs when the dinner rush starts and sends them home after the rush.',
    soundsSmartToSay:
      '"Our auto scaling policies need to scale out faster than they scale in — aggressive scale-out, conservative scale-in prevents thrashing."',
    commonConfusions: [
      'Horizontal vs vertical scaling: Auto scaling typically means horizontal (adding more instances). Vertical scaling has limits and requires restarts.',
      'Scaling is not instant — it takes minutes to spin up new instances. You need buffers or predictive scaling for fast traffic spikes.',
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
      'A CDN is a globally distributed network of cache servers that serve content from the location closest to the user — reducing latency, offloading origin servers, and absorbing DDoS traffic.',
    whyItMatters:
      'A user in Tokyo hitting your origin server in Virginia has 150ms+ of network latency before anything loads. A CDN serves cached content from a Tokyo edge node in under 10ms.',
    analogy:
      'Like distributing copies of a popular book to libraries worldwide instead of having everyone fly to the publisher to read it.',
    soundsSmartToSay:
      '"We need to set correct cache-control headers — if our CDN is not caching static assets aggressively, we\'re wasting money on origin bandwidth."',
    commonConfusions: [
      'CDN vs load balancer: A load balancer distributes traffic across your origin servers. A CDN sits in front and serves cached content so many requests never reach your origin.',
      'CDNs also provide DDoS protection and WAF capabilities.',
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
      'Managed services are cloud-operated versions of common software — databases (RDS), message queues (SQS), caches (ElastiCache) — where the provider handles provisioning, patching, backups, and scaling.',
    whyItMatters:
      'Running your own database cluster requires specialized expertise, ongoing patching, backup management, and failover configuration. A managed service offloads all of that.',
    analogy:
      'Like hiring a property management company instead of being your own landlord — they handle maintenance and repairs.',
    soundsSmartToSay:
      '"We should evaluate managed Kafka before running our own brokers — the operational burden of self-managed Kafka clusters is significant."',
    commonConfusions: [
      'Managed does not mean hands-off — you still configure security groups, IAM permissions, and retention policies.',
      'Cost: Managed services cost more per unit than self-managed. The tradeoff is paying for engineering time vs. paying the cloud provider.',
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
      'Cloud cost optimization — practiced as FinOps — is the discipline of monitoring, allocating, and reducing cloud spend without sacrificing performance. It combines reserved instance purchasing, right-sizing underutilized resources, eliminating waste, and tagging strategies.',
    whyItMatters:
      'Cloud bills can grow 3-5x faster than expected because developers provision resources without seeing the invoice. FinOps gives finance and engineering a shared view of spend.',
    analogy:
      'Like capacity planning in a data center, but reversed — in on-prem you fight to get budget for hardware up front. In cloud you fight to control spending after the fact.',
    soundsSmartToSay:
      '"We should commit to a savings plan for our baseline compute and use spot instances for batch workloads — we are leaving 40% savings on the table with on-demand pricing."',
    commonConfusions: [
      'Reserved Instances vs Savings Plans: Reserved Instances lock you to a specific instance type. Savings Plans commit to a dollar amount and are more flexible.',
      'Right-sizing is not just downsizing — sometimes an instance is CPU-optimized when it should be memory-optimized.',
    ],
    relatedTerms: ['Savings Plans', 'Spot Instances', 'Tagging Strategy', 'Showback/Chargeback'],
  },
  {
    id: 'cloud-containers-as-a-service',
    domain: 'cloud',
    title: 'Containers as a Service (CaaS)',
    subtitle: 'Run containers without managing the cluster underneath',
    difficulty: 'beginner',
    tags: ['CaaS', 'containers', 'ECS', 'Fargate', 'Cloud Run'],
    definition:
      'CaaS platforms like AWS Fargate, Azure Container Instances, and Google Cloud Run let you run Docker containers without provisioning or managing servers or Kubernetes clusters. You provide a container image, specify CPU and memory, and the platform handles scheduling, scaling, and infrastructure.',
    whyItMatters:
      'CaaS removes the operational burden of managing a container orchestrator while still giving teams the portability of containers. It is the sweet spot between serverless functions (too constrained) and full Kubernetes (too complex).',
    analogy:
      'Like the difference between leasing a car and renting one by the hour — Kubernetes is the lease where you maintain and park the vehicle, CaaS is the rental where you just drive and hand back the keys.',
    soundsSmartToSay:
      '"For this microservice we do not need a full EKS cluster — Fargate gives us container portability without the Kubernetes operational overhead."',
    commonConfusions: [
      'CaaS vs Kubernetes: CaaS abstracts away the cluster entirely. Managed Kubernetes still requires you to manage node pools and upgrades.',
      'CaaS vs serverless functions: Functions run short-lived event handlers. CaaS runs full container images with any runtime or long-running process.',
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
      'Cloud-native architecture is a design approach where applications are built specifically to leverage cloud elasticity, managed services, and distributed infrastructure — microservices, containerization, declarative APIs, immutable infrastructure, and designing for failure.',
    whyItMatters:
      'Lift-and-shift migrations move on-prem problems to the cloud and add a cloud bill on top. Cloud-native design unlocks the real value — automatic scaling, self-healing, and pay-per-use economics.',
    analogy:
      'Like the difference between scanning a paper form into a PDF versus building a native web form — the PDF works, but you lose search, validation, and automation.',
    soundsSmartToSay:
      '"Lifting and shifting this monolith will not give us cloud benefits — we need to decompose the stateful components and externalize session state before we can scale horizontally."',
    commonConfusions: [
      'Cloud-native does not mean microservices exclusively — a well-designed modular monolith deployed in containers with CI/CD can be cloud-native.',
      'Cloud-native vs cloud-hosted: Running a legacy app on an EC2 instance is cloud-hosted. Cloud-native means the app was designed to take advantage of cloud capabilities.',
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
      'A landing zone is a pre-architected, multi-account cloud environment that enforces security baselines, networking topology, IAM boundaries, and compliance guardrails before any workload is deployed. Tools like AWS Control Tower, Azure Landing Zones, and GCP Cloud Foundation Toolkit automate the setup.',
    whyItMatters:
      'Without a landing zone, every team sets up their own account differently — inconsistent security policies and no centralized audit trail. A landing zone ensures the hundredth account is as well-governed as the first.',
    analogy:
      'Like a managed building code for a new city district — before anyone builds, the zoning, utilities, and road layouts are standardized. Individual teams still design their own buildings, but the foundation is consistent.',
    soundsSmartToSay:
      '"We should not hand out AWS accounts without running them through our landing zone — every account needs centralized CloudTrail, Config rules, and a VPC peered to our transit gateway from day one."',
    commonConfusions: [
      'Landing zone vs single account setup: A landing zone is a multi-account strategy with organizational units, SCPs, and centralized services.',
      'Landing zones require ongoing maintenance as new compliance rules emerge and new account patterns are needed.',
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
      'Egress costs are charges cloud providers levy when data leaves their network — whether to the internet, to another region, or sometimes even to another availability zone. Ingress is typically free, but egress can cost $0.08–0.12 per GB.',
    whyItMatters:
      'Teams often focus on compute and storage costs and are blindsided by data transfer bills. A service streaming 100TB per month can face $9,000+ in egress alone.',
    analogy:
      'Like a hotel that offers free check-in but charges you to leave with your luggage — cloud providers make it cheap to bring data in and expensive to take it out.',
    soundsSmartToSay:
      '"Before we architect this as cross-region replication, let us model the egress costs — inter-region data transfer is not free."',
    commonConfusions: [
      'Not all egress is priced the same — data to the internet, to another region, to another AZ, and to other services within the same region all have different rates.',
      'Egress costs are a form of vendor lock-in — once your data is in a cloud, moving it out costs real money.',
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
      'IaaS (Infrastructure as a Service) gives you virtual machines and networking — you manage everything above the hypervisor. PaaS adds the runtime so you only manage code and data. SaaS manages everything — you just use the application.',
    whyItMatters:
      'Choosing the right service model determines your team\'s operational burden, security responsibilities, and cost structure.',
    analogy:
      'Like the difference between building a house (IaaS), renting an unfurnished apartment (PaaS), and staying in a hotel (SaaS) — each level trades control for convenience.',
    soundsSmartToSay:
      '"We need to be clear about where our responsibility ends — on IaaS we own OS patching, but on PaaS the provider handles that."',
    commonConfusions: [
      'The lines between IaaS, PaaS, and SaaS are blurring — services like AWS Fargate sit somewhere between. Think of it as a spectrum.',
      'SaaS does not mean zero security responsibility — you still manage user access, data classification, and API key rotation.',
    ],
    relatedTerms: ['Shared Responsibility Model', 'Managed Services', 'Serverless', 'Lift and Shift'],
  },
  {
    id: 'cloud-kubernetes',
    domain: 'cloud',
    title: 'Managed Kubernetes (EKS/AKS/GKE)',
    subtitle: 'Container orchestration without building the control plane',
    difficulty: 'intermediate',
    tags: ['Kubernetes', 'EKS', 'AKS', 'GKE'],
    definition:
      'Managed Kubernetes services like Amazon EKS, Azure AKS, and Google GKE run the Kubernetes control plane for you — handling API server availability, etcd backups, and version upgrades. You still manage worker nodes (or use a serverless node option like Fargate or Autopilot).',
    whyItMatters:
      'Self-hosting Kubernetes is a full-time job for a platform team. Managed Kubernetes removes the hardest parts so your engineers can focus on deploying and operating applications.',
    analogy:
      'Like managed Exchange versus running your own mail server — you still configure mailboxes and security, but you do not worry about server uptime or storage replication.',
    soundsSmartToSay:
      '"We are running EKS but still managing our own node groups — we should evaluate Karpenter to reduce our operational surface and improve bin-packing efficiency."',
    commonConfusions: [
      'Managed Kubernetes is not fully managed — the provider runs the control plane, but you are still responsible for worker node patches (unless using Fargate/Autopilot), RBAC, and network policies.',
      'EKS, AKS, and GKE differ significantly in default networking, IAM integration, and upgrade strategies.',
    ],
    relatedTerms: ['Kubernetes', 'Karpenter', 'Helm', 'Containers as a Service'],
  },
  {
    id: 'cloud-data-sovereignty',
    domain: 'cloud',
    title: 'Cloud Data Sovereignty',
    subtitle: 'Legal and regulatory control over where data physically resides',
    difficulty: 'advanced',
    tags: ['compliance', 'GDPR', 'data residency', 'governance'],
    definition:
      'Data sovereignty is the principle that data is subject to the laws of the country where it is physically stored. In cloud computing, this means choosing regions carefully, configuring replication boundaries, and sometimes using sovereign cloud offerings to ensure data never leaves a specific jurisdiction.',
    whyItMatters:
      'Regulations like GDPR impose strict rules on where personal data can reside and who can access it. A misconfigured cross-region replication can create a compliance violation with fines reaching 4% of global revenue.',
    analogy:
      'Like chain-of-custody in forensic evidence handling — it is not enough to protect the data, you must prove it was never in the wrong hands or the wrong place.',
    soundsSmartToSay:
      '"We need to audit our S3 replication rules — if any EU customer data is being cached at US edge locations, we have a GDPR data residency problem."',
    commonConfusions: [
      'Data residency vs data sovereignty: Residency is about where data is stored. Sovereignty adds the legal dimension — whose laws apply.',
      'Encryption does not solve sovereignty — if a US-headquartered provider manages the keys, some jurisdictions consider the data accessible to US authorities under the CLOUD Act.',
    ],
    relatedTerms: ['GDPR', 'Data Residency', 'CLOUD Act', 'Sovereign Cloud'],
  },
  {
    id: 'cloud-finops',
    domain: 'cloud',
    title: 'FinOps',
    subtitle: 'Cloud financial operations as a practice',
    difficulty: 'intermediate',
    tags: ['cost', 'optimization', 'governance'],
    definition:
      'FinOps is the practice of bringing financial accountability to cloud spending through real-time cost visibility, team-level chargeback, and continuous optimization — reserved instances, rightsizing, spot instances, and eliminating waste.',
    whyItMatters:
      'Cloud spending is the fastest-growing line item in most IT budgets. Organizations with mature FinOps practices save 20–30% on cloud spend annually.',
    analogy:
      'Like DevOps brought dev and ops together, FinOps brings engineering and finance together. Engineers make spending decisions, so they need cost data in real time — not a surprise bill at month-end.',
    soundsSmartToSay:
      '"We should tag every resource by team and environment so we can do per-team chargeback — you cannot optimize what you cannot attribute."',
    commonConfusions: [
      'FinOps vs cost cutting: FinOps is about maximizing value per dollar, not just cutting costs.',
      'FinOps vs billing alerts: Alerts tell you when you overspend. FinOps is continuous forecasting, budgeting, and optimization.',
    ],
    relatedTerms: ['Reserved Instances', 'Spot Instances', 'Rightsizing', 'Cloud Governance'],
  },
  {
    id: 'cloud-spot-instances',
    domain: 'cloud',
    title: 'Spot Instances',
    subtitle: 'Discounted cloud compute with interruption risk',
    difficulty: 'intermediate',
    tags: ['cost', 'compute', 'interruption'],
    definition:
      'Spot instances (AWS), preemptible VMs (GCP), and Azure Spot VMs are spare cloud compute capacity sold at up to 90% discount. The trade-off: the cloud provider can reclaim them with 2 minutes notice when demand rises. They are ideal for fault-tolerant, stateless workloads like batch processing, CI builds, and ML training.',
    whyItMatters:
      'For workloads that can handle interruption, spot instances dramatically cut compute costs. A CI pipeline that runs on spot instances can cut build infrastructure costs by 70-80% with proper design.',
    analogy:
      'Like standby airline seats — deeply discounted, but the airline can bump you if they oversell the flight. Perfect if your schedule is flexible; terrible if you need to make a specific meeting.',
    soundsSmartToSay:
      '"We should run our ML training jobs on spot — training jobs are naturally interruptible (checkpointing), and the cost savings compound significantly at our scale."',
    commonConfusions: [
      'Spot instances vs reserved instances: Reserved instances give discounts on committed capacity with no interruption risk. Spot gives deeper discounts with interruption risk.',
      'Spot capacity pools: Using multiple instance types and availability zones as fallback capacity pools reduces effective interruption frequency dramatically.',
    ],
    relatedTerms: ['FinOps', 'Reserved Instances', 'Savings Plans', 'Karpenter'],
  },
  {
    id: 'cloud-private-connectivity',
    domain: 'cloud',
    title: 'Private Connectivity',
    subtitle: 'AWS Direct Connect, Azure ExpressRoute, GCP Interconnect',
    difficulty: 'intermediate',
    tags: ['networking', 'hybrid cloud', 'bandwidth'],
    definition:
      'Private connectivity services like AWS Direct Connect, Azure ExpressRoute, and GCP Cloud Interconnect provide dedicated physical connections between your on-premises data center and the cloud — bypassing the public internet for improved latency, bandwidth, and security.',
    whyItMatters:
      'For high-volume data transfer, latency-sensitive workloads, or regulated industries that cannot use the public internet, a dedicated private connection provides predictable performance and can reduce egress costs compared to internet-based transfer.',
    analogy:
      'Like the difference between calling someone on a public phone line versus a dedicated leased line. The public line works, but it shares capacity with everyone else. The dedicated line is yours — no congestion, no shared risk.',
    soundsSmartToSay:
      '"We are moving 50TB of data daily between our data center and AWS — at our volume, Direct Connect with a 10 Gbps connection pays for itself quickly compared to internet egress costs and provides the consistent latency our real-time analytics requires."',
    commonConfusions: [
      'Private connectivity vs VPN: A VPN uses the public internet with encryption. Private connectivity is a physical circuit that bypasses the internet entirely — better latency and no internet exposure.',
      'Direct Connect does not bypass AWS networking security — you still use VPCs, security groups, and IAM. It only replaces the internet transport.',
    ],
    relatedTerms: ['Hybrid Cloud', 'VPC', 'Egress Costs', 'SD-WAN'],
  },
  {
    id: 'cloud-migration-strategies',
    domain: 'cloud',
    title: 'Cloud Migration Strategies (6 Rs)',
    subtitle: 'The six patterns for migrating workloads to the cloud',
    difficulty: 'intermediate',
    tags: ['migration', 'architecture', 'lift-and-shift'],
    definition:
      'The 6 Rs framework describes six strategies for migrating workloads: Rehost (lift-and-shift to VMs), Replatform (move with minor optimizations, e.g., managed database), Repurchase (move to SaaS), Refactor/Rearchitect (rebuild cloud-native), Retire (decommission), and Retain (keep on-premises for now).',
    whyItMatters:
      'Not every workload should be treated the same in a migration. A third-party application running unchanged (rehost) has a different ROI than a core business application that should be rebuilt as microservices (refactor). Applying the right R to each workload drives migration efficiency.',
    analogy:
      'Like moving to a new house. Some things you pack and move as-is (rehost). Some you replace with new purchases that better fit the new space (repurchase). Some you have custom-built for the new layout (refactor). And some old furniture you just get rid of (retire).',
    soundsSmartToSay:
      '"We should rehost our development and test environments for quick wins, replatform the databases to managed RDS, and refactor our monolithic order service — doing all three the same way would be a mistake."',
    commonConfusions: [
      'Lift-and-shift (rehost) is not cloud-native — it gives you cloud economics (OpEx vs CapEx) but not cloud benefits (elasticity, managed services). It is a starting point, not a destination.',
      'Refactor requires the most investment but delivers the most long-term value for core workloads. Not every application is worth refactoring.',
    ],
    relatedTerms: ['Cloud-Native', 'Managed Services', 'Lift and Shift', 'Technical Debt'],
  },
  {
    id: 'cloud-service-quotas',
    domain: 'cloud',
    title: 'Service Limits and Quotas',
    subtitle: 'The invisible ceilings that can stop a cloud rollout cold',
    difficulty: 'intermediate',
    tags: ['limits', 'scaling', 'capacity'],
    definition:
      'Cloud providers impose default limits (quotas) on resource consumption — the number of EC2 instances in a region, Lambda concurrency, VPC peering connections, or API request rates. These limits are per-account, per-region, and often need to be requested in advance for production workloads.',
    whyItMatters:
      'Cloud teams are frequently surprised when scaling attempts hit invisible ceilings. A viral product launch that hits an EC2 quota limit or a Lambda concurrency limit cannot be resolved instantly — quota increase requests take hours to days.',
    analogy:
      'Like electrical circuit breakers in a building. You can plug in as many devices as you want until you hit the circuit\'s amperage limit, at which point everything stops. You need to request an upgrade from the utility company before the limit matters.',
    soundsSmartToSay:
      '"We should pre-request quota increases for EC2 and Lambda concurrency before our launch campaign — getting denied for capacity during a spike is not something we can fix in real time."',
    commonConfusions: [
      'Soft limits vs hard limits: Soft limits can be increased via a support request. Hard limits are fixed by the service architecture and cannot be raised.',
      'Account limits vs organization limits: In AWS Organizations, some limits apply per-account while others can be managed at the organizational level with SCPs.',
    ],
    relatedTerms: ['Auto Scaling', 'AWS Support', 'Capacity Planning', 'Launch Planning'],
  },
  {
    id: 'cloud-hybrid',
    domain: 'cloud',
    title: 'Hybrid and Multi-Cloud',
    subtitle: 'Combining on-premises infrastructure with cloud providers',
    difficulty: 'intermediate',
    tags: ['hybrid', 'multi-cloud', 'strategy'],
    definition:
      'Hybrid cloud connects on-premises data centers with one or more cloud providers, enabling workloads to run in the best location. Multi-cloud uses multiple cloud providers (AWS + GCP + Azure) either for redundancy, cost optimization, or to use best-of-breed services from each.',
    whyItMatters:
      'Regulatory requirements, latency, or existing investments may require some workloads to remain on-premises. Hybrid cloud enables gradual migration while keeping existing infrastructure productive. Multi-cloud avoids vendor lock-in and enables leveraging specialized services.',
    analogy:
      'Like a city that has a central hub (on-premises data center) connected to multiple neighborhoods (cloud regions) by transit lines (Direct Connect/ExpressRoute). Residents can live in the best neighborhood for their needs while the city provides connecting infrastructure.',
    soundsSmartToSay:
      '"We use multi-cloud strategically — our core workloads run on AWS for ecosystem reasons, but we use GCP BigQuery for analytics because it is demonstrably better for that use case than Redshift."',
    commonConfusions: [
      'Multi-cloud vs cloud-agnostic: Most multi-cloud strategies use provider-specific services for each workload rather than avoiding all provider lock-in. True cloud-agnosticism sacrifices too many managed service benefits.',
      'Hybrid cloud complexity: Managing networking, identity, and security across hybrid environments is significantly harder than pure cloud. The operational overhead should be justified by a specific business requirement.',
    ],
    relatedTerms: ['Private Connectivity', 'Cloud Strategy', 'Vendor Lock-in', 'Data Residency'],
  },
  {
    id: 'cloud-cloud-monitoring',
    domain: 'cloud',
    title: 'Cloud Monitoring',
    subtitle: 'Visibility into cloud resource health and performance',
    difficulty: 'beginner',
    tags: ['monitoring', 'observability', 'CloudWatch'],
    definition:
      'Cloud monitoring uses provider-native tools (AWS CloudWatch, GCP Cloud Monitoring, Azure Monitor) and third-party platforms (Datadog, New Relic, Dynatrace) to collect and visualize metrics, set alarms, analyze logs, and trace requests across cloud services.',
    whyItMatters:
      'Cloud infrastructure is dynamic — instances spin up and down, serverless functions execute for milliseconds. Traditional monitoring assumptions (static servers, persistent agents) break in cloud environments. Cloud-native monitoring adapts to ephemeral resources.',
    analogy:
      'Like a smart building management system — it tracks every sensor in every room automatically, even as rooms are reconfigured. You should not have to manually configure monitoring for every new server that auto-scales.',
    soundsSmartToSay:
      '"We should ship all our metrics to a single observability platform — using CloudWatch for some services and Datadog for others means we never have a unified view during incidents."',
    commonConfusions: [
      'Cloud provider monitoring vs third-party: Provider tools (CloudWatch, Cloud Monitoring) are deeply integrated and cheap. Third-party tools (Datadog, New Relic) offer better cross-cloud correlation and richer analytics but at higher cost.',
      'Metrics vs logs vs traces: Cloud monitoring typically starts with metrics (utilization, error rates). Logs add context. Traces connect requests across services. A mature cloud observability strategy needs all three.',
    ],
    relatedTerms: ['Observability', 'CloudWatch', 'Distributed Tracing', 'Alerting'],
  },
  {
    id: 'cloud-cloud-security-groups',
    domain: 'cloud',
    title: 'Security Groups and NACLs',
    subtitle: 'Cloud network access controls at instance and subnet level',
    difficulty: 'beginner',
    tags: ['networking', 'security', 'firewall'],
    definition:
      'Security groups are stateful virtual firewalls attached to individual cloud instances that control inbound and outbound traffic by port, protocol, and source/destination. Network ACLs (NACLs) are stateless and operate at the subnet level — providing a coarser-grained additional layer of control.',
    whyItMatters:
      'Security groups are the primary mechanism for network isolation in cloud environments. A database security group that allows access only from the application tier is a fundamental security control that prevents direct internet access to databases.',
    analogy:
      'Security groups are like a personal bodyguard for each instance — they check every person trying to approach. NACLs are like a checkpoint at the neighborhood gate — coarser but applied before anyone reaches the individual buildings.',
    soundsSmartToSay:
      '"Our database security group allows port 5432 from anywhere (0.0.0.0/0) — we need to restrict it to the application tier security group ID only, not a CIDR block."',
    commonConfusions: [
      'Security groups vs NACLs: Security groups are stateful (return traffic is automatically allowed). NACLs are stateless (you must explicitly allow return traffic). Use both in regulated environments.',
      'Security groups do not replace firewalls: For complex rule sets, east-west traffic inspection, or layer 7 filtering, dedicated firewalls (AWS Network Firewall, Azure Firewall) provide capabilities security groups lack.',
    ],
    relatedTerms: ['VPC', 'Network Segmentation', 'Firewall', 'Least Privilege'],
  },
  {
    id: 'cloud-well-architected',
    domain: 'cloud',
    title: 'Cloud Well-Architected Framework',
    subtitle: 'AWS/GCP/Azure best practice guidance for cloud architecture',
    difficulty: 'intermediate',
    tags: ['architecture', 'best practices', 'framework'],
    definition:
      'Well-Architected Frameworks (AWS, GCP, Azure each have their own) provide structured guidance across six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability. Cloud architects use Well-Architected Reviews to assess workloads against these pillars.',
    whyItMatters:
      'Cloud architecture mistakes are easy to make and expensive to fix. Well-Architected Frameworks provide a systematic way to evaluate architectures against proven best practices before deployment, preventing costly redesigns.',
    analogy:
      'Like a structured safety checklist used in aviation or surgery — not a creative framework but a systematic review against known failure modes. The value is not the checklist itself but the discipline of applying it consistently.',
    soundsSmartToSay:
      '"We should run a Well-Architected Review before we launch — it is a free engagement with AWS Solutions Architects and typically surfaces 3-5 high-priority remediation items we would not have caught in code review."',
    commonConfusions: [
      'Well-Architected Review vs architecture design: A design review happens before building. A Well-Architected Review assesses existing workloads. Both are valuable at different stages.',
      'The framework evolves: AWS updated to include a Sustainability pillar in 2021. Always use the current version rather than older documentation.',
    ],
    relatedTerms: ['Cloud Architecture', 'FinOps', 'Security', 'Reliability'],
  },
  {
    id: 'cloud-serverless-containers',
    domain: 'cloud',
    title: 'Serverless Containers',
    subtitle: 'Container portability with serverless operations',
    difficulty: 'intermediate',
    tags: ['containers', 'serverless', 'Cloud Run'],
    definition:
      'Serverless containers combine container packaging (portability, reproducibility) with serverless operations (no infrastructure management, scale-to-zero, pay-per-request). Services like Google Cloud Run, AWS App Runner, and Azure Container Apps let you deploy containers that scale from zero to thousands of instances automatically.',
    whyItMatters:
      'Regular serverless functions (Lambda) require your code to fit within runtime constraints. Serverless containers give you the freedom of any language and library — packaged in a container — with the simplicity of serverless scaling and pricing.',
    analogy:
      'Like a short-order kitchen (serverless containers) versus a full restaurant (Kubernetes). You still cook the same food (containerized application), but there is no kitchen to staff, maintain, or pay for when there are no orders.',
    soundsSmartToSay:
      '"Cloud Run is perfect for this API — containerized so we can run it locally, but scale-to-zero billing means we pay nothing during off-peak hours when traffic is minimal."',
    commonConfusions: [
      'Serverless containers vs FaaS: Function-as-a-Service (Lambda) runs single functions with strict size and timeout limits. Serverless containers run full applications with more flexibility.',
      'Scale-to-zero has a cold start penalty: The first request after idle time wakes the container. For latency-sensitive endpoints, keep a minimum instance running to eliminate cold starts.',
    ],
    relatedTerms: ['Containers', 'Cloud Run', 'AWS App Runner', 'Serverless'],
  },
  {
    id: 'cloud-cloud-databases',
    domain: 'cloud',
    title: 'Cloud Databases',
    subtitle: 'Managed relational, NoSQL, and specialized databases',
    difficulty: 'beginner',
    tags: ['databases', 'managed', 'RDS'],
    definition:
      'Cloud managed databases abstract away hardware provisioning, patching, backup, and replication. They span relational (AWS RDS, Google Cloud SQL, Azure Database for PostgreSQL), NoSQL (DynamoDB, Firestore, Cosmos DB), analytical (BigQuery, Redshift, Snowflake), and specialized (Elasticache for Redis, Neptune for graphs, Timestream for time-series).',
    whyItMatters:
      'Choosing the right managed database service eliminates entire categories of operational work. RDS Multi-AZ gives you automatic failover in under 60 seconds. Serverless Aurora scales storage automatically. These capabilities take months to build on self-managed databases.',
    analogy:
      'Like choosing appliances for a kitchen — you could build your own refrigerator (self-managed database) or buy a commercial-grade unit (managed database). The commercial unit handles temperature regulation, compressor maintenance, and defrost cycles automatically.',
    soundsSmartToSay:
      '"We are running MySQL on EC2, which means we own patching, backup, and failover. Migrating to RDS Multi-AZ would give us automated failover in 60 seconds versus the 30-minute manual process we have today."',
    commonConfusions: [
      'Managed databases are not one-size-fits-all: RDS, DynamoDB, Aurora, Redshift, and BigQuery all solve different problems. Choosing RDS for a time-series workload or DynamoDB for analytics causes performance and cost problems.',
      'Multi-AZ vs read replicas: Multi-AZ provides high availability (automatic failover). Read replicas provide read scaling. They are different features that solve different problems.',
    ],
    relatedTerms: ['RDS', 'DynamoDB', 'Aurora Serverless', 'Read Replica'],
  },
];
