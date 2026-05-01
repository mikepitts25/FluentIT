import type { Card } from '../types';

export const sysengCards: Card[] = [
  {
    id: 'syseng-linux-kernel',
    domain: 'syseng',
    title: 'Linux Kernel',
    subtitle: 'The core of every server and most cloud workloads',
    difficulty: 'beginner',
    tags: ['OS', 'Linux', 'kernel'],
    definition:
      'The Linux kernel is the core of the Linux operating system — it manages hardware resources (CPU, memory, disk, network), provides system calls for applications, and enforces process isolation. It runs on everything from Raspberry Pis to 99% of the world\'s supercomputers.',
    whyItMatters:
      'Almost every cloud VM, container, and Kubernetes node runs Linux. Understanding kernel-level concepts (namespaces, cgroups, file descriptors, signals) is essential for debugging production issues that go deeper than application code.',
    analogy:
      'Like the traffic management system of a city — it controls which vehicles (processes) get road access (CPU), parking spaces (memory), and highway lanes (I/O), and keeps them from crashing into each other.',
    soundsSmartToSay:
      '"The container is OOMKilled because the cgroup memory limit is too low — this is a kernel-level enforcement, not an application bug."',
    commonConfusions: [
      'Linux vs GNU/Linux: The kernel is Linux. The full OS (including shell, utilities, package manager) is GNU/Linux. When people say "Linux server" they mean the full stack.',
      'Kernel space vs user space: The kernel runs in a privileged mode with full hardware access. Applications run in user space and must use system calls to request kernel services.',
    ],
    relatedTerms: ['cgroups', 'Namespaces', 'systemd', 'File Descriptors'],
  },
  {
    id: 'syseng-capacity-planning',
    domain: 'syseng',
    title: 'Capacity Planning',
    subtitle: 'Predicting how much infrastructure you will need',
    difficulty: 'intermediate',
    tags: ['scaling', 'forecasting', 'resources'],
    definition:
      'Capacity planning is the process of estimating future compute, storage, memory, and network requirements — based on traffic forecasts, growth rates, and performance benchmarks — so infrastructure is provisioned before demand exceeds supply.',
    whyItMatters:
      'Under-provisioning causes outages during traffic spikes. Over-provisioning wastes money. Good capacity planning means you scale just ahead of demand, with headroom for unexpected bursts.',
    analogy:
      'Like a city water department forecasting next summer\'s demand — they use historical usage data, population growth, and weather projections to ensure the supply never runs dry, without building a dam for a town that doesn\'t need one.',
    soundsSmartToSay:
      '"We need to load-test at 2x current peak before Black Friday — our capacity plan assumes linear scaling but we haven\'t validated that assumption."',
    commonConfusions: [
      'Capacity planning vs auto scaling: Auto scaling reacts to demand in real time. Capacity planning forecasts demand weeks or months ahead to ensure the underlying infrastructure can support auto scaling.',
      'Vertical vs horizontal headroom: Adding bigger instances has hard ceilings. Horizontal capacity (adding more instances) scales further but requires the application to be designed for it.',
    ],
    relatedTerms: ['Load Testing', 'Benchmarking', 'Auto Scaling', 'SLO'],
  },
  {
    id: 'syseng-ha',
    domain: 'syseng',
    title: 'High Availability',
    subtitle: 'Designing systems that survive failures',
    difficulty: 'beginner',
    tags: ['availability', 'redundancy', 'failover'],
    definition:
      'High availability (HA) means designing a system so it continues operating when individual components fail — through redundancy (multiple copies), failover (automatic switching to backups), and health monitoring (detecting failures fast).',
    whyItMatters:
      'Users expect 99.9%+ uptime. Without HA, a single server crash, disk failure, or network blip takes down the whole service. HA design ensures no single point of failure exists.',
    analogy:
      'Like a hospital with backup generators — when the main power goes out, generators kick in automatically. Patients (users) never notice the switch because the system was designed to handle the failure.',
    soundsSmartToSay:
      '"99.9% availability is 8.7 hours of downtime per year. If we need five-nines (99.999%), we need active-active across multiple regions — that\'s a fundamentally different architecture."',
    commonConfusions: [
      'HA vs DR: High Availability handles component failures within a region (minutes of downtime). Disaster Recovery handles regional or site-wide failures (hours to recover). You need both.',
      'Active-passive vs active-active: Active-passive has a standby that takes over on failure. Active-active runs both copies simultaneously and load-balances across them — faster failover, higher cost.',
    ],
    relatedTerms: ['Failover', 'Load Balancer', 'Health Check', 'MTTR'],
  },
  {
    id: 'syseng-config-mgmt',
    domain: 'syseng',
    title: 'Configuration Management',
    subtitle: 'Keeping every server in a known, consistent state',
    difficulty: 'beginner',
    tags: ['Ansible', 'Puppet', 'drift'],
    definition:
      'Configuration management is the practice of automating server setup and ongoing state — packages installed, services running, config files in place — so every machine in a fleet is identical and any drift from the desired state is detected and corrected automatically.',
    whyItMatters:
      'Manual server configuration leads to "snowflake" machines where no two are alike. When a snowflake breaks, nobody knows how to rebuild it. Config management makes servers reproducible and disposable.',
    analogy:
      'Like a franchise restaurant chain where every location must follow the same recipe, layout, and procedures — if one location deviates (drift), an inspector (the config tool) corrects it back to spec.',
    soundsSmartToSay:
      '"We need to treat our servers as cattle, not pets — if one is misconfigured, we should be able to destroy and rebuild it from our Ansible playbooks in minutes."',
    commonConfusions: [
      'Config management vs IaC: IaC (Terraform) provisions infrastructure — creates servers, VPCs, databases. Config management (Ansible, Puppet, Chef) configures software on those servers after they exist.',
      'Push vs pull: Ansible pushes config from a central machine via SSH. Puppet/Chef agents pull config from a server on a schedule. Both achieve the same goal.',
    ],
    relatedTerms: ['Ansible', 'Puppet', 'Chef', 'Idempotent'],
  },
  {
    id: 'syseng-storage',
    domain: 'syseng',
    title: 'Storage Tiers',
    subtitle: 'Block, file, and object — pick the right one',
    difficulty: 'beginner',
    tags: ['storage', 'SAN', 'NAS', 'SSD'],
    definition:
      'Storage comes in three tiers: block storage (raw volumes like a hard disk — used by databases and VMs), file storage (shared network filesystems like NFS/NAS — used for shared files), and object storage (flat HTTP-accessible buckets like S3 — used for data lakes and backups).',
    whyItMatters:
      'Choosing the wrong storage tier kills performance or wastes budget. A database on object storage would be catastrophically slow. Archival logs on premium SSD block storage would be absurdly expensive.',
    analogy:
      'Block storage is like a private garage — fast, dedicated, only your car fits. File storage is like a shared parking structure — multiple cars, organized by floor. Object storage is like a massive warehouse — infinite capacity, just label and retrieve.',
    soundsSmartToSay:
      '"We should tier our storage — hot data on SSD-backed block storage, warm on standard EBS, and cold on S3 Glacier with lifecycle policies."',
    commonConfusions: [
      'SAN vs NAS: SAN provides block storage over a network (iSCSI, Fibre Channel) — each server sees a raw disk. NAS provides file storage over a network (NFS, SMB) — each server sees a shared filesystem.',
      'IOPS vs throughput: IOPS measures how many individual read/write operations per second. Throughput measures total data transferred per second. Databases care about IOPS; video streaming cares about throughput.',
    ],
    relatedTerms: ['SAN', 'NAS', 'IOPS', 'S3 Glacier'],
  },
  {
    id: 'syseng-monitoring',
    domain: 'syseng',
    title: 'System Monitoring',
    subtitle: 'Watching CPU, memory, disk, and network in real time',
    difficulty: 'beginner',
    tags: ['metrics', 'alerting', 'Nagios'],
    definition:
      'System monitoring continuously collects and visualizes infrastructure metrics — CPU utilization, memory usage, disk I/O, network bandwidth, process counts — and fires alerts when metrics cross thresholds that indicate problems.',
    whyItMatters:
      'You can\'t fix what you can\'t see. Monitoring turns silent failures (disk filling up, memory leak, CPU throttling) into actionable alerts before they become outages.',
    analogy:
      'Like the vital signs monitor in a hospital room — heart rate (CPU), blood pressure (memory), oxygen (disk), and temperature (network) are all watched continuously. An alarm sounds before the patient crashes.',
    soundsSmartToSay:
      '"Our alerting is too noisy — we need to shift from threshold-based alerts to anomaly detection so we only page on real problems, not normal traffic spikes."',
    commonConfusions: [
      'Monitoring vs observability: Monitoring checks known metrics against known thresholds. Observability (metrics + logs + traces) lets you explore unknown problems. Monitoring is a subset of observability.',
      'Uptime monitoring vs infrastructure monitoring: Uptime tools (Pingdom, Uptime Robot) check if your site responds. Infrastructure tools (Prometheus, Datadog, Nagios) watch internal system health.',
    ],
    relatedTerms: ['Prometheus', 'Grafana', 'Nagios', 'PagerDuty'],
  },
  {
    id: 'syseng-backup-dr',
    domain: 'syseng',
    title: 'Backup & Disaster Recovery',
    subtitle: 'RPO, RTO, and the plan for when everything goes wrong',
    difficulty: 'beginner',
    tags: ['backup', 'DR', 'RPO', 'RTO'],
    definition:
      'Backup is copying data to a separate location. Disaster Recovery (DR) is the full plan to restore operations after a catastrophic failure. Two key metrics define the plan: RPO (Recovery Point Objective — how much data loss is acceptable) and RTO (Recovery Time Objective — how fast must we recover).',
    whyItMatters:
      'Backups without a tested recovery plan are useless. DR without defined RPO/RTO is just hope. These metrics drive the entire architecture — RPO determines backup frequency, RTO determines failover speed.',
    analogy:
      'RPO is like how often you save a document — save every 5 minutes and you lose at most 5 minutes of work. RTO is like how fast you can open it on another computer if yours breaks.',
    soundsSmartToSay:
      '"Our RPO is 1 hour but we only run backups nightly — we need continuous replication or WAL shipping to actually meet that commitment."',
    commonConfusions: [
      'Backup vs replication: Backups are point-in-time snapshots stored separately. Replication is continuous copying to another system. Replication gives lower RPO but doesn\'t protect against corruption (which replicates too).',
      'DR testing: A DR plan that has never been tested is not a plan. Regular DR drills are essential — most organizations discover their DR plan doesn\'t work during the first real disaster.',
    ],
    relatedTerms: ['RPO', 'RTO', 'Snapshots', 'WAL Shipping'],
  },
  {
    id: 'syseng-virtualization',
    domain: 'syseng',
    title: 'Virtualization',
    subtitle: 'Running multiple OS instances on one physical machine',
    difficulty: 'beginner',
    tags: ['VM', 'hypervisor', 'VMware'],
    definition:
      'Virtualization uses a hypervisor to run multiple virtual machines (VMs) on a single physical server — each VM gets its own OS, memory, CPU allocation, and network interface, fully isolated from other VMs on the same host.',
    whyItMatters:
      'Before virtualization, one application meant one physical server — most running at 10-15% utilization. Virtualization achieves 60-80% utilization by packing multiple workloads onto fewer machines, saving massive hardware and data center costs.',
    analogy:
      'Like subdividing a warehouse into separate offices — each tenant (VM) has their own walls, locks, and utilities, but they share the same building (physical server). One tenant\'s mess doesn\'t affect the others.',
    soundsSmartToSay:
      '"We should right-size our VM allocations — most are provisioned with 4 vCPUs but only using 0.5. That wasted capacity adds up across hundreds of VMs."',
    commonConfusions: [
      'Type 1 vs Type 2 hypervisor: Type 1 (ESXi, KVM, Hyper-V) runs directly on hardware — used in production. Type 2 (VirtualBox, VMware Workstation) runs on top of an existing OS — used for development.',
      'VMs vs containers: VMs virtualize hardware and run full OS kernels — heavier but stronger isolation. Containers share the host kernel — lighter and faster but weaker isolation boundary.',
    ],
    relatedTerms: ['Hypervisor', 'VMware', 'KVM', 'vCPU'],
  },
  {
    id: 'syseng-raid',
    domain: 'syseng',
    title: 'RAID',
    subtitle: 'Combining disks for speed, redundancy, or both',
    difficulty: 'beginner',
    tags: ['storage', 'redundancy', 'disk', 'RAID'],
    definition:
      'RAID (Redundant Array of Independent Disks) combines multiple physical drives into a single logical unit to improve performance, provide data redundancy, or both. Different RAID levels trade off capacity, speed, and fault tolerance — RAID 0 stripes data for speed with no redundancy, RAID 1 mirrors data for protection, and RAID 5/6 use parity to balance both.',
    whyItMatters:
      'A single disk failure without RAID means data loss and downtime. RAID keeps systems running through disk failures, giving operations teams time to replace failed drives without impacting users. Choosing the wrong RAID level can mean paying double for storage (RAID 1) or losing everything to a single failure (RAID 0).',
    analogy:
      'Think of it like backup goalkeepers in soccer — RAID 1 puts an identical goalkeeper behind the first (mirror), RAID 5 distributes the defense across several players so any one can cover for a fallen teammate (parity), and RAID 0 just puts all your players on offense for speed with nobody guarding the net.',
    soundsSmartToSay:
      '"RAID is not a backup strategy — it protects against hardware failure, not against accidental deletion or corruption. We still need offline backups regardless of our RAID level."',
    commonConfusions: [
      'RAID vs backup: RAID protects against disk failure in real time. Backups protect against data loss over time (deletion, corruption, ransomware). RAID cannot replace backups because corruption on one disk replicates instantly to the array.',
      'Hardware RAID vs software RAID: Hardware RAID uses a dedicated controller card with its own processor and cache — faster but vendor-locked. Software RAID (Linux mdadm, ZFS) uses the CPU — more flexible and portable but uses host resources.',
      'RAID 5 vs RAID 6: RAID 5 survives one disk failure using a single parity stripe. RAID 6 survives two simultaneous failures with double parity. With modern large drives, rebuild times are long enough that a second failure during rebuild is a real risk — RAID 6 is safer for large arrays.',
    ],
    relatedTerms: ['Storage Tiers', 'IOPS', 'ZFS', 'Hot Spare'],
  },
  {
    id: 'syseng-load-testing',
    domain: 'syseng',
    title: 'Load Testing',
    subtitle: 'Finding your system\'s breaking point before users do',
    difficulty: 'intermediate',
    tags: ['performance', 'testing', 'scalability', 'benchmarking'],
    definition:
      'Load testing simulates realistic user traffic against a system to measure how it performs under expected and peak conditions. It identifies bottlenecks — slow database queries, memory leaks, thread pool exhaustion — before they surface in production. Stress testing pushes beyond expected limits to find the actual breaking point.',
    whyItMatters:
      'Launching a feature or surviving a traffic spike without load testing is gambling. A system that handles 100 concurrent users in dev may collapse at 10,000 in production due to connection pool limits, lock contention, or upstream API rate limits that only appear at scale.',
    analogy:
      'Like a fire drill for a building — you simulate the emergency (high traffic) to find the bottlenecks (stairwells too narrow, doors locked) and fix them before a real fire (Black Friday, viral moment) forces everyone out at once.',
    soundsSmartToSay:
      '"Our p99 latency doubles at 60% of projected peak load — we need to profile the hot path and either optimize or horizontally scale before the campaign launch."',
    commonConfusions: [
      'Load testing vs stress testing vs soak testing: Load testing validates expected traffic levels. Stress testing pushes past expected limits to find the breaking point. Soak testing runs moderate load for extended periods to catch slow leaks and resource exhaustion.',
      'Testing in staging vs production: Staging environments often have smaller databases, fewer nodes, and different network topology. Load test results from staging may not reflect production behavior — ideally, run canary load tests against production infrastructure.',
      'Throughput vs latency under load: A system can maintain high throughput while latency degrades badly. Always measure both — users feel latency, not throughput.',
    ],
    relatedTerms: ['Capacity Planning', 'Benchmarking', 'p99 Latency', 'JMeter'],
  },
  {
    id: 'syseng-dns-resolution',
    domain: 'syseng',
    title: 'DNS Resolution (Internal)',
    subtitle: 'How machines find each other by name inside your network',
    difficulty: 'beginner',
    tags: ['DNS', 'networking', 'name resolution', 'service discovery'],
    definition:
      'Internal DNS resolution translates human-readable hostnames (like db-primary.prod.internal) into IP addresses within a private network. Organizations run internal DNS servers to manage name resolution for infrastructure that is not publicly accessible — databases, microservices, internal tools, and private APIs.',
    whyItMatters:
      'Hardcoding IP addresses in configuration is brittle — when a server moves, every reference breaks. Internal DNS decouples service names from infrastructure, so teams can replace, scale, or migrate servers without updating every client that connects to them.',
    analogy:
      'Like a company phone directory — instead of memorizing everyone\'s extension (IP address), you look up their name (hostname) in the directory (DNS). When someone changes desks, the directory is updated once and everyone can still reach them.',
    soundsSmartToSay:
      '"We should use split-horizon DNS so internal services resolve to private IPs inside the VPC but the same domain resolves to the public load balancer externally."',
    commonConfusions: [
      'Internal DNS vs public DNS: Public DNS (Route 53, Cloudflare) resolves internet-facing domains. Internal DNS resolves private hostnames only visible within your network. They often coexist — internal DNS forwards unknown queries to public DNS.',
      'DNS vs service discovery: DNS provides static name-to-IP mapping with TTL-based caching. Service discovery tools (Consul, Eureka) provide dynamic, health-aware resolution that updates in real time as instances come and go — better suited for ephemeral containers.',
      'DNS caching and TTL: Clients and resolvers cache DNS responses for the TTL (Time To Live) duration. Setting TTL too high means stale records during failovers. Setting it too low increases DNS query load and latency.',
    ],
    relatedTerms: ['Service Discovery', 'Split-Horizon DNS', 'BIND', 'CoreDNS'],
  },
  {
    id: 'syseng-log-aggregation',
    domain: 'syseng',
    title: 'Log Aggregation',
    subtitle: 'Collecting logs from everywhere into one searchable place',
    difficulty: 'intermediate',
    tags: ['logging', 'observability', 'ELK', 'centralized logging'],
    definition:
      'Log aggregation is the practice of collecting, transporting, and storing log data from all systems — servers, containers, applications, network devices — into a centralized platform where it can be searched, filtered, and analyzed. Tools like the ELK stack (Elasticsearch, Logstash, Kibana), Splunk, or Loki provide this capability.',
    whyItMatters:
      'When an incident hits, engineers need to correlate events across dozens of services in seconds. SSH-ing into individual servers to grep log files does not scale. Centralized logs with structured fields and fast search turn a multi-hour investigation into a five-minute query.',
    analogy:
      'Like a security operations center that pulls all camera feeds (log streams) into a single wall of monitors (dashboard) with a searchable recording system — instead of walking to each camera individually, you search the central archive by timestamp and location.',
    soundsSmartToSay:
      '"We need to enforce structured logging with correlation IDs across all services — without a request ID propagated through the call chain, our aggregated logs are just a massive haystack with no way to trace a single user journey."',
    commonConfusions: [
      'Logs vs metrics vs traces: Logs are discrete text events. Metrics are numeric time-series data (CPU, request count). Traces follow a single request across services. Log aggregation handles the first; full observability requires all three.',
      'Log volume vs log value: Aggregating everything at DEBUG level generates enormous storage costs and noise. Effective log aggregation requires log-level discipline — INFO and above in production, with the ability to temporarily increase verbosity for debugging.',
      'ELK vs Loki: ELK indexes the full text of every log line — powerful search but expensive storage. Loki indexes only metadata labels and stores raw logs compressed — cheaper but requires you to know which labels to query on.',
    ],
    relatedTerms: ['System Monitoring', 'Elasticsearch', 'Splunk', 'Structured Logging'],
  },
  {
    id: 'syseng-runbooks',
    domain: 'syseng',
    title: 'Runbooks',
    subtitle: 'Step-by-step guides for handling known operational scenarios',
    difficulty: 'beginner',
    tags: ['operations', 'documentation', 'incident response', 'SOP'],
    definition:
      'A runbook is a documented set of procedures for handling a specific operational task or incident — from routine maintenance (certificate rotation, database failover) to emergency response (service down, data breach). Good runbooks include exact commands, expected outputs, decision trees, escalation paths, and rollback steps.',
    whyItMatters:
      'When a critical system fails at 3 AM, the on-call engineer may not be the person who built it. Runbooks encode tribal knowledge into repeatable procedures so that any trained operator can resolve known issues quickly and consistently, reducing mean time to recovery.',
    analogy:
      'Like the emergency procedure cards in an airplane seat pocket — pilots have their own detailed checklists, but the card gives any passenger (on-call engineer) the exact steps to follow in a crisis without needing to understand aerodynamics.',
    soundsSmartToSay:
      '"Every alert that pages someone should link directly to a runbook — if we can\'t document the response, either the alert is not actionable or we don\'t understand the failure mode well enough yet."',
    commonConfusions: [
      'Runbooks vs playbooks: The terms are often used interchangeably, but runbooks typically describe step-by-step procedures for a specific scenario, while playbooks describe broader strategies and decision frameworks for categories of incidents.',
      'Static runbooks vs automated runbooks: Static runbooks are documents that humans follow manually. Automated runbooks (via tools like Rundeck, PagerDuty Process Automation) execute the steps programmatically, reducing human error and response time.',
      'Writing runbooks vs maintaining them: A runbook that was accurate six months ago may be dangerously wrong after infrastructure changes. Runbooks must be tested and updated regularly — stale runbooks are worse than no runbook because they create false confidence.',
    ],
    relatedTerms: ['Incident Response', 'MTTR', 'On-Call', 'Post-Mortem'],
  },
  {
    id: 'syseng-kernel-tuning',
    domain: 'syseng',
    title: 'Kernel Tuning',
    subtitle: 'Adjusting OS-level parameters for specific workloads',
    difficulty: 'advanced',
    tags: ['Linux', 'kernel', 'sysctl', 'performance', 'tuning'],
    definition:
      'Kernel tuning is the practice of modifying operating system kernel parameters — via sysctl, /proc, /sys, or kernel boot options — to optimize performance for specific workloads. This includes adjusting network buffer sizes, file descriptor limits, virtual memory behavior, I/O schedulers, and TCP stack settings to match the demands of databases, web servers, or high-throughput data pipelines.',
    whyItMatters:
      'Default kernel settings are tuned for general-purpose workloads. A database server handling 50,000 connections, a load balancer processing millions of packets per second, or a storage node doing heavy sequential I/O all benefit from targeted tuning that can yield 20-50% performance improvements without any hardware changes.',
    analogy:
      'Like tuning a race car engine for a specific track — the stock settings (defaults) work for street driving, but for a race (production workload), you adjust the suspension, gear ratios, and tire pressure (kernel parameters) based on whether the course is a straightaway (throughput) or a winding road (latency-sensitive).',
    soundsSmartToSay:
      '"We should increase net.core.somaxconn and net.ipv4.tcp_max_syn_backlog on the load balancers — at our connection rate, the default listen queue is causing SYN drops during traffic bursts."',
    commonConfusions: [
      'Kernel tuning vs application tuning: Kernel tuning adjusts OS-level behavior (TCP buffers, scheduler, memory management). Application tuning adjusts app-level settings (connection pools, thread counts, cache sizes). Both are needed — kernel tuning without application profiling is optimizing the wrong layer.',
      'sysctl vs persistent configuration: Running sysctl -w changes a parameter until reboot. Making it persistent requires adding it to /etc/sysctl.conf or a file in /etc/sysctl.d/. Forgetting persistence means tuning disappears after the next reboot or instance replacement.',
      'Tuning for benchmarks vs production: Parameters that maximize a synthetic benchmark (disabling swap, setting overcommit to always) can cause catastrophic failures in production under real mixed workloads. Always validate tuning under realistic conditions.',
    ],
    relatedTerms: ['Linux Kernel', 'sysctl', 'I/O Scheduler', 'TCP Stack'],
  },
  {
    id: 'syseng-sre-practices',
    domain: 'syseng',
    title: 'Site Reliability Practices',
    subtitle: 'Applying software engineering to operations problems',
    difficulty: 'intermediate',
    tags: ['SRE', 'reliability', 'SLO', 'error budget', 'toil'],
    definition:
      'Site Reliability Engineering (SRE) is a discipline that applies software engineering principles to infrastructure and operations. Core practices include defining Service Level Objectives (SLOs) as reliability targets, using error budgets to balance feature velocity with stability, eliminating toil through automation, and conducting blameless post-mortems to learn from failures.',
    whyItMatters:
      'Traditional ops teams become bottlenecks as systems scale — manual processes, ticket queues, and hero culture do not keep pace with the rate of change in modern infrastructure. SRE practices quantify reliability as a feature, give teams a shared language for risk decisions, and systematically reduce operational burden through engineering.',
    analogy:
      'Like the transition from artisan craftsmanship to industrial engineering in manufacturing — instead of relying on individual skill and heroics to keep the factory running, you instrument the production line (SLOs), set acceptable defect rates (error budgets), and systematically automate repetitive tasks (toil reduction).',
    soundsSmartToSay:
      '"We have burned 80% of our quarterly error budget and it\'s only week six — we should freeze feature launches and redirect engineering effort toward reliability work until the budget recovers."',
    commonConfusions: [
      'SRE vs DevOps: DevOps is a broad cultural movement focused on collaboration between dev and ops. SRE is a specific implementation of that philosophy with concrete practices (SLOs, error budgets, toil budgets). Google describes SRE as "a concrete implementation of DevOps."',
      'SLO vs SLA: An SLA (Service Level Agreement) is a contractual commitment with financial penalties. An SLO (Service Level Objective) is an internal reliability target, typically stricter than the SLA. You aim for the SLO so you never breach the SLA.',
      'Toil vs hard work: Toil is not just any work — it is manual, repetitive, automatable work that scales linearly with service size. Designing a new architecture is hard work but not toil. Manually restarting a crashed service every night is toil.',
    ],
    relatedTerms: ['SLO', 'Error Budget', 'Toil', 'Post-Mortem'],
  },
  {
    id: 'syseng-infra-lifecycle',
    domain: 'syseng',
    title: 'Infrastructure Lifecycle Management',
    subtitle: 'Governing infrastructure from provisioning through decommission',
    difficulty: 'advanced',
    tags: ['lifecycle', 'governance', 'decommission', 'CMDB', 'asset management'],
    definition:
      'Infrastructure lifecycle management is the end-to-end governance of infrastructure assets — from initial request and provisioning, through active operation and change management, to retirement and decommissioning. It encompasses asset tracking (CMDB), cost allocation, patching schedules, end-of-life planning, and secure disposal of hardware and data.',
    whyItMatters:
      'Without lifecycle management, organizations accumulate zombie infrastructure — forgotten servers still running (and costing money), unpatched systems with known vulnerabilities, and decommissioned hardware with unwiped disks. Disciplined lifecycle management controls costs, reduces security risk, and ensures compliance with data retention and disposal regulations.',
    analogy:
      'Like fleet management for a trucking company — you track every vehicle from purchase (provisioning) through maintenance schedules (patching), fuel cost allocation (chargebacks), regulatory inspections (compliance), and eventual sale or scrapping (decommission). Ignoring lifecycle means trucks break down on the highway and expired registrations attract fines.',
    soundsSmartToSay:
      '"We need to automate our decommissioning workflow — right now, terminated projects leave orphaned cloud resources running for months because there is no ownership tag linking infrastructure back to the team and budget that created it."',
    commonConfusions: [
      'Lifecycle management vs IaC: Infrastructure as Code (Terraform, CloudFormation) handles provisioning and configuration. Lifecycle management is broader — it covers the policies, ownership, financial tracking, and end-of-life decisions that surround infrastructure throughout its entire existence.',
      'CMDB vs asset inventory: An asset inventory lists what you have. A Configuration Management Database (CMDB) also tracks relationships, dependencies, and change history between assets — so you know that decommissioning server A will break service B.',
      'Decommissioning vs deleting: Deleting a cloud resource removes it immediately. Proper decommissioning includes verifying no dependencies remain, archiving data per retention policy, revoking credentials, updating DNS, removing monitoring, and documenting the change — skipping steps creates ghost dependencies and compliance gaps.',
    ],
    relatedTerms: ['CMDB', 'Configuration Management', 'Cost Allocation', 'Asset Tagging'],
  },
  {
    id: 'syseng-internal-dns',
    domain: 'syseng',
    title: 'Internal DNS',
    subtitle: 'Name resolution inside your network',
    difficulty: 'beginner',
    tags: ['dns', 'networking', 'service-discovery'],
    definition:
      'Internal DNS servers resolve hostnames to IP addresses within your private network — turning "db-primary.prod.internal" into 10.0.1.15. Unlike public DNS, internal DNS records are not visible on the internet and can include private IPs, service records, and split-horizon configurations.',
    whyItMatters:
      'Hard-coding IP addresses in configuration files is fragile — when a server moves to a new IP, everything that references it breaks. Internal DNS provides a stable name layer so services reference hostnames, and DNS updates propagate the IP change.',
    analogy:
      'Like a company phone directory that only works inside the building. External callers use the public phone number (public DNS), but employees use extension numbers (internal DNS) that map to desks that might move around.',
    soundsSmartToSay:
      '"We should use DNS-based service discovery instead of hardcoded IPs in our config files — it makes failover and migration transparent to consuming services."',
    commonConfusions: [
      'Internal DNS vs public DNS: Public DNS (Cloudflare, Route 53) resolves public domain names for internet users. Internal DNS resolves private hostnames for internal services. Many organizations run both.',
      'DNS vs service discovery: Traditional DNS resolves names to IPs. Service discovery (Consul, Kubernetes DNS) adds health checking, load balancing, and metadata. Kubernetes uses DNS as its service discovery mechanism.',
    ],
    relatedTerms: ['DNS', 'Service Discovery', 'Split-Horizon DNS', 'DHCP'],
  },
  {
    id: 'syseng-lifecycle',
    domain: 'syseng',
    title: 'Infrastructure Lifecycle Management',
    subtitle: 'From provisioning to decommissioning',
    difficulty: 'advanced',
    tags: ['governance', 'lifecycle', 'operations'],
    definition:
      'Infrastructure lifecycle management covers the entire lifespan of IT assets — procurement, provisioning, configuration, patching, monitoring, compliance checks, and decommissioning. It ensures nothing is forgotten, everything is tracked, and end-of-life assets are retired safely.',
    whyItMatters:
      'Unmanaged infrastructure accumulates risk. Servers running unpatched software, cloud resources with no owner, and decommissioned hardware with live data are all lifecycle management failures that create security vulnerabilities and waste budget.',
    analogy:
      'Like fleet management for vehicles. You do not just buy cars (provision) and drive them — you schedule maintenance (patching), track mileage (monitoring), ensure inspections (compliance), and retire them properly (decommissioning). IT assets need the same discipline.',
    soundsSmartToSay:
      '"Every resource should have an owner tag, a cost center, and a review date — if we cannot answer who owns it and whether it is still needed, it should be flagged for decommission."',
    commonConfusions: [
      'Lifecycle management vs asset management: Asset management tracks what exists (CMDB). Lifecycle management adds the time dimension — what state is it in, when does it need action, and when should it be retired.',
      'Decommissioning vs deleting: Deleting a cloud resource removes it immediately. Proper decommissioning includes verifying no dependencies remain, archiving data per retention policy, revoking credentials, updating DNS, removing monitoring, and documenting the change.',
    ],
    relatedTerms: ['CMDB', 'Configuration Management', 'Cost Allocation', 'Asset Tagging'],
  },
];
