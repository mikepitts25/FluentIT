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
];
