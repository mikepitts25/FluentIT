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
      'RAID (Redundant Array of Independent Disks) combines multiple physical drives into a single logical unit to improve performance, provide data redundancy, or both. RAID 0 stripes data for speed with no redundancy, RAID 1 mirrors data for protection, and RAID 5/6 use parity to balance both.',
    whyItMatters:
      'A single disk failure without RAID means data loss and downtime. RAID keeps systems running through disk failures, giving operations teams time to replace failed drives without impacting users.',
    analogy:
      'RAID 1 puts an identical goalkeeper behind the first (mirror), RAID 5 distributes the defense across several players so any one can cover for a fallen teammate (parity), and RAID 0 puts all players on offense for speed with nobody guarding the net.',
    soundsSmartToSay:
      '"RAID is not a backup strategy — it protects against hardware failure, not against accidental deletion or corruption. We still need offline backups regardless of our RAID level."',
    commonConfusions: [
      'RAID vs backup: RAID protects against disk failure in real time. Backups protect against data loss over time (deletion, corruption, ransomware). RAID cannot replace backups because corruption replicates instantly to the array.',
      'RAID 5 vs RAID 6: RAID 5 survives one disk failure. RAID 6 survives two simultaneous failures. With modern large drives, rebuild times are long enough that a second failure during rebuild is a real risk — RAID 6 is safer for large arrays.',
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
      'A system that handles 100 concurrent users in dev may collapse at 10,000 in production due to connection pool limits, lock contention, or upstream API rate limits that only appear at scale.',
    analogy:
      'Like a fire drill for a building — you simulate the emergency (high traffic) to find bottlenecks (stairwells too narrow, doors locked) and fix them before a real fire (Black Friday, viral moment) forces everyone out at once.',
    soundsSmartToSay:
      '"Our p99 latency doubles at 60% of projected peak load — we need to profile the hot path and either optimize or horizontally scale before the campaign launch."',
    commonConfusions: [
      'Load testing vs stress testing vs soak testing: Load testing validates expected traffic levels. Stress testing pushes past expected limits to find the breaking point. Soak testing runs moderate load for extended periods to catch slow leaks.',
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
      'DNS vs service discovery: DNS provides static name-to-IP mapping with TTL-based caching. Service discovery tools (Consul, Eureka) provide dynamic, health-aware resolution that updates in real time as instances come and go.',
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
      'Like a security operations center that pulls all camera feeds (log streams) into a single wall of monitors (dashboard) — instead of walking to each camera individually, you search the central archive by timestamp and location.',
    soundsSmartToSay:
      '"We need to enforce structured logging with correlation IDs across all services — without a request ID propagated through the call chain, our aggregated logs are just a massive haystack."',
    commonConfusions: [
      'Logs vs metrics vs traces: Logs are discrete text events. Metrics are numeric time-series data. Traces follow a single request across services. Log aggregation handles the first; full observability requires all three.',
      'ELK vs Loki: ELK indexes the full text of every log line — powerful search but expensive storage. Loki indexes only metadata labels and stores raw logs compressed — cheaper but requires knowing which labels to query on.',
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
      'When a critical system fails at 3 AM, the on-call engineer may not be the person who built it. Runbooks encode tribal knowledge into repeatable procedures so that any trained operator can resolve known issues quickly, reducing mean time to recovery.',
    analogy:
      'Like the emergency procedure cards in an airplane seat pocket — the card gives any person the exact steps to follow in a crisis without needing to understand aerodynamics.',
    soundsSmartToSay:
      '"Every alert that pages someone should link directly to a runbook — if we can\'t document the response, either the alert is not actionable or we don\'t understand the failure mode well enough yet."',
    commonConfusions: [
      'Runbooks vs playbooks: Runbooks describe step-by-step procedures for a specific scenario. Playbooks describe broader strategies and decision frameworks for categories of incidents.',
      'Static runbooks vs automated runbooks: Static runbooks are documents humans follow manually. Automated runbooks (Rundeck, PagerDuty Process Automation) execute steps programmatically, reducing human error and response time.',
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
      'Kernel tuning is the practice of modifying operating system kernel parameters — via sysctl, /proc, /sys, or kernel boot options — to optimize performance for specific workloads. This includes adjusting network buffer sizes, file descriptor limits, virtual memory behavior, I/O schedulers, and TCP stack settings.',
    whyItMatters:
      'Default kernel settings are tuned for general-purpose workloads. A database server handling 50,000 connections or a load balancer processing millions of packets per second can see 20-50% performance improvements from targeted tuning without any hardware changes.',
    analogy:
      'Like tuning a race car engine for a specific track — stock settings work for street driving, but for a race you adjust the suspension, gear ratios, and tire pressure based on whether the course is a straightaway (throughput) or a winding road (latency).',
    soundsSmartToSay:
      '"We should increase net.core.somaxconn and net.ipv4.tcp_max_syn_backlog on the load balancers — at our connection rate, the default listen queue is causing SYN drops during traffic bursts."',
    commonConfusions: [
      'Kernel tuning vs application tuning: Kernel tuning adjusts OS-level behavior. Application tuning adjusts app-level settings (connection pools, thread counts). Both are needed — kernel tuning without application profiling is optimizing the wrong layer.',
      'sysctl vs persistent configuration: Running sysctl -w changes a parameter until reboot. Making it persistent requires /etc/sysctl.conf or /etc/sysctl.d/. Forgetting persistence means tuning disappears after the next reboot.',
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
      'Site Reliability Engineering (SRE) applies software engineering principles to infrastructure and operations. Core practices include defining Service Level Objectives (SLOs) as reliability targets, using error budgets to balance feature velocity with stability, eliminating toil through automation, and conducting blameless post-mortems.',
    whyItMatters:
      'Traditional ops teams become bottlenecks as systems scale. SRE practices quantify reliability as a feature, give teams a shared language for risk decisions, and systematically reduce operational burden through engineering.',
    analogy:
      'Like the transition from artisan craftsmanship to industrial engineering — instead of relying on heroics to keep the factory running, you instrument the production line (SLOs), set acceptable defect rates (error budgets), and automate repetitive tasks (toil reduction).',
    soundsSmartToSay:
      '"We have burned 80% of our quarterly error budget and it\'s only week six — we should freeze feature launches and redirect engineering effort toward reliability work until the budget recovers."',
    commonConfusions: [
      'SRE vs DevOps: DevOps is a broad cultural movement. SRE is a specific implementation with concrete practices (SLOs, error budgets, toil budgets). Google describes SRE as "a concrete implementation of DevOps."',
      'SLO vs SLA: An SLA is a contractual commitment with financial penalties. An SLO is an internal reliability target, typically stricter than the SLA. You aim for the SLO so you never breach the SLA.',
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
      'Infrastructure lifecycle management is the end-to-end governance of infrastructure assets — from initial request and provisioning, through active operation and change management, to retirement and decommissioning. It encompasses asset tracking (CMDB), cost allocation, patching schedules, end-of-life planning, and secure disposal.',
    whyItMatters:
      'Without lifecycle management, organizations accumulate zombie infrastructure — forgotten servers still running (and costing money), unpatched systems with known vulnerabilities, and decommissioned hardware with unwiped disks.',
    analogy:
      'Like fleet management for a trucking company — you track every vehicle from purchase (provisioning) through maintenance schedules (patching), fuel cost allocation (chargebacks), and eventual sale or scrapping (decommission).',
    soundsSmartToSay:
      '"We need to automate our decommissioning workflow — right now, terminated projects leave orphaned cloud resources running for months because there is no ownership tag linking infrastructure back to the team that created it."',
    commonConfusions: [
      'Lifecycle management vs IaC: IaC (Terraform) handles provisioning and configuration. Lifecycle management is broader — it covers policies, ownership, financial tracking, and end-of-life decisions throughout the infrastructure\'s entire existence.',
      'CMDB vs asset inventory: An asset inventory lists what you have. A CMDB also tracks relationships, dependencies, and change history — so you know that decommissioning server A will break service B.',
    ],
    relatedTerms: ['CMDB', 'Configuration Management', 'Cost Allocation', 'Asset Tagging'],
  },
  {
    id: 'syseng-systemd',
    domain: 'syseng',
    title: 'systemd',
    subtitle: 'The init system and service manager for modern Linux',
    difficulty: 'intermediate',
    tags: ['Linux', 'init', 'services', 'daemon'],
    definition:
      'systemd is the init system and service manager used by virtually all modern Linux distributions. It manages the startup sequence of the OS, starts and stops daemons (background services), handles dependencies between services, and provides logging via journald. Services are defined in unit files that declare how to start, stop, restart, and when to run each process.',
    whyItMatters:
      'Understanding systemd lets you control every background service on a Linux host — web servers, databases, monitoring agents, custom daemons. When a service fails to start or crashes in a loop, systemd logs and unit configuration are your first debugging tools.',
    analogy:
      'Like a stage director managing actors before and during a play — systemd decides which services start first (dependencies), cues each actor (daemon) at the right moment, restarts those who stumble (crash recovery), and records every word spoken (journald logging).',
    soundsSmartToSay:
      '"Check journalctl -u nginx -n 100 -- the unit file says it should restart on failure but it\'s been crash-looping for 20 minutes, which means systemd is backing off on restarts."',
    commonConfusions: [
      'systemd vs SysV init: SysV init used shell scripts in /etc/init.d/ and sequential startup. systemd uses declarative unit files with parallel startup and dependency tracking — much faster boot times on modern systems.',
      'systemctl vs service: On systemd systems, service is often an alias for systemctl. Prefer systemctl directly (systemctl start nginx, systemctl status nginx) for consistency and to access systemd-specific features.',
    ],
    relatedTerms: ['Linux Kernel', 'journald', 'cgroups', 'Daemons'],
  },
  {
    id: 'syseng-namespaces-cgroups',
    domain: 'syseng',
    title: 'Namespaces & cgroups',
    subtitle: 'The Linux primitives that make containers possible',
    difficulty: 'advanced',
    tags: ['Linux', 'containers', 'isolation', 'kernel'],
    definition:
      'Linux namespaces provide process isolation — each namespace type (PID, network, mount, UTS, IPC, user) gives processes a private view of a kernel resource. cgroups (control groups) enforce resource limits — how much CPU, memory, and I/O a group of processes may consume. Together, namespaces and cgroups are the kernel machinery that Docker and Kubernetes use to implement containers.',
    whyItMatters:
      'Containers are not a new OS concept — they are namespaces and cgroups with a convenient UX on top. Understanding the primitives explains container security boundaries, why OOMKill happens, and why a container can "see" the host network if misconfigured.',
    analogy:
      'Namespaces are like one-way mirrors — a process in a namespace sees only its own isolated view of the system. cgroups are like resource meters and governors — they enforce how much of the shared resource pie each tenant can consume.',
    soundsSmartToSay:
      '"The pod is being OOMKilled because the container\'s cgroup memory limit is 256 MiB but the JVM heap alone is 512 MiB — we need to either increase the limit or tune the JVM flags."',
    commonConfusions: [
      'Namespaces provide isolation, not security: A process in a network namespace has an isolated network stack, but kernel vulnerabilities can still allow namespace escapes. Container security requires both namespace isolation and restricted system calls (seccomp, AppArmor).',
      'cgroups v1 vs v2: cgroups v1 is the older per-subsystem hierarchy. cgroups v2 unifies all controllers under a single hierarchy — better for container runtimes. Most modern Linux distros default to v2.',
    ],
    relatedTerms: ['Linux Kernel', 'Docker', 'Kubernetes', 'OOM Killer'],
  },
  {
    id: 'syseng-performance-profiling',
    domain: 'syseng',
    title: 'Performance Profiling',
    subtitle: 'Finding exactly what is consuming your CPU and memory',
    difficulty: 'advanced',
    tags: ['performance', 'profiling', 'CPU', 'memory', 'flamegraph'],
    definition:
      'Performance profiling samples a running system — CPU usage per function, memory allocation patterns, lock contention, I/O wait — to identify exactly where time and resources are spent. Tools like perf, flamegraphs, gprof, and language-specific profilers (py-spy, async-profiler) produce visualizations that make hotspots obvious.',
    whyItMatters:
      'Without profiling, performance optimization is guesswork. Engineers often optimize the wrong code path. Profiling reveals that 90% of CPU time is spent in a single function or that a library allocates 10,000 objects per request — enabling targeted optimization that produces orders-of-magnitude improvements.',
    analogy:
      'Like a time-and-motion study on a factory floor — instead of guessing which station slows production, you observe actual workers (functions) and time every step. The slowest station (hotspot) gets the engineer\'s attention, not the one that looks busy.',
    soundsSmartToSay:
      '"Before we throw more CPUs at this, let\'s run a flamegraph under production-level load — I suspect the hotspot is in the serialization layer, not the business logic."',
    commonConfusions: [
      'Profiling vs benchmarking: Benchmarking measures how fast something is (e.g., 50,000 requests/sec). Profiling explains why by showing where time is spent internally. Benchmark first to know you have a problem; profile to find the root cause.',
      'Sampling vs instrumentation profiling: Sampling profilers periodically capture the call stack — low overhead but statistical. Instrumentation profilers add code at every function entry/exit — precise but high overhead. Use sampling in production.',
    ],
    relatedTerms: ['Load Testing', 'Kernel Tuning', 'eBPF', 'Flamegraph'],
  },
  {
    id: 'syseng-memory-management',
    domain: 'syseng',
    title: 'Memory Management',
    subtitle: 'Virtual memory, swap, and the OOM killer',
    difficulty: 'intermediate',
    tags: ['memory', 'swap', 'OOM', 'Linux', 'virtual memory'],
    definition:
      'The Linux kernel manages physical RAM through virtual memory — each process gets its own virtual address space, mapped to physical pages. When RAM is exhausted, the kernel uses swap (disk-backed overflow) to extend memory. When both run out, the OOM (Out of Memory) Killer terminates processes based on a score to recover memory.',
    whyItMatters:
      'Memory pressure is one of the most common root causes of production incidents. Understanding virtual memory, page faults, and the OOM killer explains why a container suddenly exits, why a Java app suddenly slows, or why a server\'s I/O spikes before a crash.',
    analogy:
      'Like a hotel at full capacity — RAM is the hotel rooms (fast, in-building). Swap is overflow parking at a lot down the street (slower, you have to bus people). The OOM killer is the fire marshal who evicts the largest groups (most memory-hungry processes) when the building is dangerously overcrowded.',
    soundsSmartToSay:
      '"The host is swapping heavily — pages are being evicted to disk at 500 MB/s. This is a memory pressure problem, not a CPU problem; adding swap space is treating the symptom, not fixing the root cause."',
    commonConfusions: [
      'Swap vs virtual memory: Virtual memory is the kernel\'s abstraction of address space — all modern processes use it regardless of swap. Swap is just one backing store for pages that don\'t fit in RAM. A system can use virtual memory without any swap.',
      'OOM kill vs application crash: When a process is OOM-killed, it receives SIGKILL from the kernel, not an out-of-memory exception. The application logs nothing — it simply stops. Check dmesg or /var/log/syslog for "Out of memory: Kill process" entries.',
    ],
    relatedTerms: ['Linux Kernel', 'cgroups', 'Performance Profiling', 'Huge Pages'],
  },
  {
    id: 'syseng-filesystem-types',
    domain: 'syseng',
    title: 'Filesystem Types',
    subtitle: 'ext4, XFS, ZFS, and Btrfs — choosing the right FS',
    difficulty: 'intermediate',
    tags: ['filesystem', 'storage', 'ext4', 'ZFS', 'XFS'],
    definition:
      'A filesystem determines how data is organized and stored on disk. ext4 is the Linux default — reliable, well-tested, widely supported. XFS excels at large files and high-throughput workloads. ZFS provides built-in RAID, checksums, snapshots, and data integrity guarantees. Btrfs offers copy-on-write snapshots and built-in compression — still maturing for enterprise use.',
    whyItMatters:
      'The wrong filesystem for a workload wastes performance or risks data integrity. A database on ext4 with default settings may silently corrupt data on power loss. A file server on XFS handles millions of files efficiently. ZFS on a storage appliance adds RAID and checksumming without separate RAID hardware.',
    analogy:
      'Like choosing the right type of warehouse shelving — standard shelving (ext4) works for most things. Pallet racking (XFS) is better for large heavy items. Climate-controlled secure cabinets (ZFS) are best for valuable items needing integrity checks and snapshots.',
    soundsSmartToSay:
      '"We should use XFS for the Kafka log directories — it handles large sequential writes and the high inode counts better than ext4 at our volume."',
    commonConfusions: [
      'Filesystem vs volume manager: A filesystem (ext4, XFS) manages file layout. A volume manager (LVM, ZFS) manages disk pools and logical volumes. ZFS is unusual because it combines both, which is why it doesn\'t use LVM underneath.',
      'Journaling vs copy-on-write: ext4 and XFS are journaling filesystems — they log changes before writing to protect against corruption. ZFS and Btrfs are copy-on-write — they never overwrite existing data, writing new versions and updating pointers atomically.',
    ],
    relatedTerms: ['RAID', 'LVM', 'Storage Tiers', 'IOPS'],
  },
  {
    id: 'syseng-ssh-hardening',
    domain: 'syseng',
    title: 'SSH Hardening',
    subtitle: 'Securing remote access to Linux servers',
    difficulty: 'intermediate',
    tags: ['SSH', 'security', 'hardening', 'access'],
    definition:
      'SSH hardening is the practice of configuring the SSH daemon (sshd) and surrounding controls to minimize the attack surface of remote server access. Key controls include: disabling password authentication (enforce key-based auth), disabling root login, restricting users who can SSH, changing the default port, enabling rate limiting, and using tools like fail2ban to block brute-force attempts.',
    whyItMatters:
      'SSH is the most common attack vector for Linux server compromise. Servers with password-based SSH exposed to the internet receive thousands of brute-force attempts per hour. A single weak password leads to full server compromise. SSH hardening turns a wide-open door into a secured gate.',
    analogy:
      'Like hardening a building\'s employee entrance — instead of a simple lock (password), you require a key card (SSH key) plus PIN (passphrase), install a camera (logging), limit who can enter (AllowUsers), and add a guard who locks out anyone who tries the wrong card too many times (fail2ban).',
    soundsSmartToSay:
      '"We should enforce certificate-based SSH using an internal CA rather than managing individual authorized_keys files — it lets us revoke access centrally without touching every server."',
    commonConfusions: [
      'SSH keys vs certificates: An SSH key pair (authorized_keys) grants permanent access. An SSH certificate (signed by a CA) has an expiry and can be revoked centrally. Certificates are operationally superior for large fleets.',
      'Changing the SSH port is security theater: Moving SSH from 22 to a non-standard port reduces automated scan noise but does not stop a targeted attacker. It should not replace real hardening measures like key-based auth and fail2ban.',
    ],
    relatedTerms: ['Bastion Host', 'PAM', 'Certificate Management', 'Zero Trust'],
  },
  {
    id: 'syseng-on-call',
    domain: 'syseng',
    title: 'On-Call Rotations',
    subtitle: 'Sharing the responsibility of 24/7 production support',
    difficulty: 'beginner',
    tags: ['on-call', 'incident response', 'operations', 'SRE'],
    definition:
      'An on-call rotation is a scheduled system where engineers take turns being the primary responder for production alerts outside business hours. When a monitoring alert fires, the on-call engineer is paged (via PagerDuty, OpsGenie, etc.), triages the incident, and either resolves it or escalates to secondary responders. Good on-call culture includes clear escalation paths, runbooks for common incidents, and post-mortems after significant pages.',
    whyItMatters:
      'Production systems need to be monitored 24/7. Without a rotation, the same people are always paged (burnout) or nobody responds (outages persist). A well-run on-call program distributes the burden fairly and ensures rapid incident response regardless of the time.',
    analogy:
      'Like a hospital\'s attending physician rotation — not every doctor is on duty every night, but there is always a qualified physician available and a clear escalation path to specialists if needed.',
    soundsSmartToSay:
      '"Our on-call load is too high — if the on-call engineer is being paged more than twice a night on average, that is a reliability problem we need to fix with engineering, not by hiring more on-call bodies."',
    commonConfusions: [
      'On-call vs always-on: On-call means you carry a phone and respond within 15 minutes. Always-on is an unhealthy state where there is no off-duty time. Good on-call programs have clear response time expectations and guaranteed rest periods.',
      'Alert quantity vs alert quality: More alerts is not better. Every page that is not actionable is noise that degrades response to real incidents. Alert quality (signal-to-noise ratio) is more important than coverage.',
    ],
    relatedTerms: ['Runbooks', 'PagerDuty', 'Incident Response', 'Site Reliability Practices'],
  },
  {
    id: 'syseng-golden-image',
    domain: 'syseng',
    title: 'Golden Images',
    subtitle: 'Pre-baked, hardened base images for fast, consistent deployment',
    difficulty: 'intermediate',
    tags: ['images', 'Packer', 'AMI', 'immutable', 'build'],
    definition:
      'A golden image (or golden AMI in AWS) is a pre-built, hardened base image for VMs or containers that includes the OS, security patches, monitoring agents, and standard tooling — ready to deploy without additional configuration. Tools like HashiCorp Packer automate the build pipeline from a configuration file to a cloud-ready image.',
    whyItMatters:
      'Instead of provisioning a raw OS and running configuration management every time a new server launches, golden images bake all that work in once. New instances start faster, are always in a known state, and reduce the attack surface by eliminating the window between launch and patch application.',
    analogy:
      'Like a bakery using a master recipe and pre-mixed dry ingredients (golden image) rather than measuring flour from scratch every time — the loaf (instance) is consistent, faster to produce, and the mixing (configuration management) has already been done and tested.',
    soundsSmartToSay:
      '"We should shift from running Ansible at boot time to baking everything into a golden AMI — it cuts our auto-scaling launch time from 5 minutes to under 60 seconds and removes a whole class of configuration drift."',
    commonConfusions: [
      'Golden image vs container image: Both are immutable artifacts. A golden image (AMI, VMware template) produces a VM with a full OS. A container image produces a lightweight container that shares the host kernel. The principles are the same; the scope differs.',
      'Immutability vs updates: A golden image is immutable — you never patch a running server. Instead, you build a new image with the patch and replace running instances. This requires a solid image build pipeline and blue/green or rolling deployment strategy.',
    ],
    relatedTerms: ['Immutable Infrastructure', 'Packer', 'Configuration Management', 'Auto Scaling'],
  },
  {
    id: 'syseng-os-hardening',
    domain: 'syseng',
    title: 'OS Hardening',
    subtitle: 'Reducing attack surface on every Linux host',
    difficulty: 'intermediate',
    tags: ['security', 'hardening', 'CIS', 'Linux', 'baseline'],
    definition:
      'OS hardening is the practice of systematically reducing the attack surface of an operating system by removing unnecessary software, disabling unused services, applying secure configurations, enforcing least privilege, and enabling security controls (SELinux, AppArmor, auditd). The CIS Benchmarks provide standardized hardening checklists for most operating systems.',
    whyItMatters:
      'A default Linux installation includes many services, world-readable files, and permissive defaults designed for usability, not security. Each unnecessary service or open port is an attack surface. Hardening eliminates vectors an attacker would use to gain an initial foothold or escalate privileges after a breach.',
    analogy:
      'Like securing a building before occupancy — you remove all unnecessary exterior doors (disable unused services), reinforce remaining doors with locks and cameras (authentication and logging), post guards at critical points (mandatory access control), and conduct a walkthrough checklist before opening (CIS benchmark scan).',
    soundsSmartToSay:
      '"Our golden image should be CIS Level 2 compliant out of the box — baking hardening into the image means every instance starts from a known-good security baseline without relying on post-provisioning remediation."',
    commonConfusions: [
      'Hardening vs patching: Patching fixes known vulnerabilities in software. Hardening removes unnecessary functionality and tightens configuration to limit the blast radius of any compromise. Both are required; neither alone is sufficient.',
      'CIS Benchmarks vs STIG: CIS Benchmarks are developed by the Center for Internet Security for broad enterprise use. STIGs (Security Technical Implementation Guides) are US government standards (DoD). Both are hardening frameworks; choose based on your compliance requirements.',
    ],
    relatedTerms: ['SELinux', 'SSH Hardening', 'Golden Images', 'PAM'],
  },
  {
    id: 'syseng-package-management',
    domain: 'syseng',
    title: 'Package Management',
    subtitle: 'Installing, updating, and removing software on Linux',
    difficulty: 'beginner',
    tags: ['apt', 'yum', 'dnf', 'rpm', 'packages'],
    definition:
      'Linux package managers handle the installation, upgrade, and removal of software packages along with their dependencies. Debian-based systems (Ubuntu) use APT with .deb packages. Red Hat-based systems (RHEL, CentOS, Fedora) use DNF/YUM with .rpm packages. Package managers resolve dependency trees, verify cryptographic signatures, and maintain a database of installed software.',
    whyItMatters:
      'Package managers are how software stays patched and consistent across a fleet. Unmanaged package installs (downloading tarballs, compiling from source) create software that the package manager doesn\'t know about — missing security updates, version conflicts, and configuration drift.',
    analogy:
      'Like a restaurant supply chain — rather than each chef personally sourcing every ingredient from different farms (manual install), a purchasing manager (package manager) orders from approved suppliers (repositories), verifies quality (signature checking), and tracks inventory (installed package database).',
    soundsSmartToSay:
      '"We should pin the kernel and critical packages in our APT configuration — uncontrolled package upgrades during auto-update windows have caused regressions twice this quarter."',
    commonConfusions: [
      'apt vs apt-get: apt is the modern user-friendly frontend. apt-get is the older, more scriptable command. In shell scripts and automation, prefer apt-get for stable output; in interactive terminals, apt provides better progress display.',
      'Package repo vs package registry: A Linux package repo (APT repo, Yum repo) hosts OS packages (.deb, .rpm). A package registry (npm, PyPI, Maven) hosts language libraries. Both use the package manager model but serve different ecosystems.',
    ],
    relatedTerms: ['Configuration Management', 'OS Hardening', 'Golden Images', 'Ansible'],
  },
  {
    id: 'syseng-process-management',
    domain: 'syseng',
    title: 'Process Management',
    subtitle: 'Understanding and controlling what runs on a Linux host',
    difficulty: 'beginner',
    tags: ['processes', 'ps', 'kill', 'signals', 'Linux'],
    definition:
      'Every running program on Linux is a process with a unique PID (Process ID), owner, resource usage, and state. Process management involves listing processes (ps, top, htop), inspecting resource usage, sending signals (SIGTERM to gracefully stop, SIGKILL to force stop), managing priorities (nice, renice), and understanding parent-child process relationships (fork, exec).',
    whyItMatters:
      'When a system is unresponsive, a service is misbehaving, or a process is consuming runaway CPU or memory, process management tools are your first line of diagnosis. Understanding signals is critical — sending SIGKILL to a database is how you corrupt data; SIGTERM triggers a clean shutdown.',
    analogy:
      'Like managing employees on a factory floor — you can see who is working (ps), check how busy they are (top), ask someone to stop work at a good stopping point (SIGTERM), or physically remove someone immediately (SIGKILL). The difference matters when an employee is in the middle of delicate work.',
    soundsSmartToSay:
      '"Send SIGTERM first and wait — give the process time to flush buffers and close connections cleanly. Only escalate to SIGKILL if it doesn\'t respond within 30 seconds."',
    commonConfusions: [
      'kill vs SIGKILL: The kill command sends signals — by default SIGTERM (15), which asks the process to stop gracefully. kill -9 sends SIGKILL, which the kernel enforces immediately with no cleanup. Always try SIGTERM first.',
      'Zombie processes: A zombie process has finished but its exit status hasn\'t been collected by its parent. It shows as Z in ps output and consumes no CPU or memory — only a PID. It disappears when the parent reads the exit code or when the parent exits.',
    ],
    relatedTerms: ['systemd', 'Linux Kernel', 'cgroups', 'Performance Profiling'],
  },
  {
    id: 'syseng-io-monitoring',
    domain: 'syseng',
    title: 'I/O Monitoring',
    subtitle: 'Diagnosing disk and storage performance bottlenecks',
    difficulty: 'intermediate',
    tags: ['disk', 'I/O', 'iostat', 'iotop', 'performance'],
    definition:
      'I/O monitoring tracks the throughput, utilization, and latency of disk and storage operations. Tools like iostat report device-level metrics (MB/s read/write, IOPS, utilization percentage, await time). iotop shows which processes are generating I/O. These metrics reveal whether a performance problem is CPU-bound, memory-bound, or I/O-bound.',
    whyItMatters:
      'I/O bottlenecks are a common root cause of slow databases, unresponsive services, and high load averages. A server can appear CPU-bound (high load average) when it is actually I/O-wait — processes are blocked waiting for slow disks, not consuming CPU. Misdiagnosing I/O-wait as CPU pressure leads to wrong remediation.',
    analogy:
      'Like diagnosing a traffic jam — you need to distinguish between too many cars (CPU pressure), roads being dug up for construction (disk saturation), or cars waiting at a slow customs checkpoint (high await time). Each root cause requires a different fix.',
    soundsSmartToSay:
      '"Load average is high but CPU utilization is low — this is almost certainly I/O-wait. Check iostat for disk utilization and await — if a device is at 100% utilization, no amount of horizontal scaling will help until we fix the storage tier."',
    commonConfusions: [
      'Load average vs CPU utilization: Load average includes processes in both CPU queue and I/O wait. A load average of 8 on a 4-core system with 20% CPU utilization means the remaining load is I/O-wait — disk is the bottleneck, not CPU.',
      'Await vs service time: await is total time from I/O request to completion (queue + service). svctm is actual disk service time. A high await with low svctm means I/O is queuing — you need more IOPS or parallelism, not faster disks.',
    ],
    relatedTerms: ['Storage Tiers', 'RAID', 'Performance Profiling', 'Kernel Tuning'],
  },
  {
    id: 'syseng-certificate-management',
    domain: 'syseng',
    title: 'Certificate Management',
    subtitle: 'Lifecycle management of TLS certificates at scale',
    difficulty: 'intermediate',
    tags: ['TLS', 'PKI', 'certificates', 'HTTPS', 'expiry'],
    definition:
      'Certificate management covers the full lifecycle of TLS certificates — issuance, deployment, renewal, and revocation. At scale, this includes using a Certificate Authority (CA), automating renewal (Let\'s Encrypt + ACME, cert-manager in Kubernetes), monitoring expiry dates, and maintaining an inventory of certificates across all services.',
    whyItMatters:
      'Expired certificates cause immediate production outages — browsers and services refuse connections to hosts with expired or invalid certificates. In large organizations with hundreds of certificates, manual management is a liability. An expired cert at 3 AM that takes hours to rotate is an avoidable incident.',
    analogy:
      'Like managing building access badges for all employees — each badge (certificate) has an expiry date and must be renewed before it stops working. With 10 employees you renew manually; with 10,000 you need an automated badge management system that alerts before expiry and renews automatically.',
    soundsSmartToSay:
      '"We should deploy cert-manager in our Kubernetes clusters to automate Let\'s Encrypt renewals — manually renewed certificates are a operational risk, and our SLAs can\'t absorb the downtime from an unexpected expiry."',
    commonConfusions: [
      'Certificate vs key: A certificate is a public document that binds a public key to an identity, signed by a CA. The private key is secret and never leaves the server. You can safely share a certificate; never share the private key.',
      'Self-signed vs CA-signed: Self-signed certificates cost nothing but cause browser warnings and are not trusted by default. CA-signed certificates (from a trusted CA like Let\'s Encrypt, DigiCert) are trusted by browsers and clients without additional configuration.',
    ],
    relatedTerms: ['TLS/SSL', 'PKI', 'mTLS', 'SSH Hardening'],
  },
  {
    id: 'syseng-secrets-management',
    domain: 'syseng',
    title: 'System Secrets Management',
    subtitle: 'Storing and rotating credentials, API keys, and certificates securely',
    difficulty: 'intermediate',
    tags: ['secrets', 'Vault', 'credentials', 'rotation', 'security'],
    definition:
      'Secrets management is the practice of storing, distributing, rotating, and auditing sensitive credentials — database passwords, API keys, private keys, OAuth tokens — using a dedicated secrets store rather than environment variables, config files, or source code. Tools include HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, and GCP Secret Manager.',
    whyItMatters:
      'Secrets in source code are routinely leaked via public repos, logs, or error messages. Static credentials that never rotate create persistent blast radius when compromised. A secrets management system provides centralized access control, audit trails, automatic rotation, and short-lived dynamic credentials that limit the window of compromise.',
    analogy:
      'Like a bank\'s safe deposit system versus keeping cash under the mattress — secrets in a vault (Vault, Secrets Manager) have controlled access, every withdrawal is logged, keys can be changed centrally, and the contents are protected even if someone breaks into the building.',
    soundsSmartToSay:
      '"We should move all database credentials to Vault with dynamic secrets — instead of a static password that lives forever, Vault issues a credential that expires in one hour. Compromised creds become useless almost immediately."',
    commonConfusions: [
      'Secrets management vs encryption: Encryption protects data at rest and in transit. Secrets management controls access to the keys and credentials used for encryption and authentication. You need both — encryption without secrets management is like a lock with the key left in it.',
      'Environment variables are not secrets management: Passing secrets via env vars is better than hardcoding them but still exposes them in process listings, container inspect output, and logging. A secrets management system provides proper access control and auditability.',
    ],
    relatedTerms: ['Certificate Management', 'Zero Trust', 'Least Privilege', 'HashiCorp Vault'],
  },
  {
    id: 'syseng-immutable-infrastructure',
    domain: 'syseng',
    title: 'Immutable Server Infrastructure',
    subtitle: 'Replace servers instead of patching them',
    difficulty: 'intermediate',
    tags: ['immutable', 'infrastructure', 'cattle vs pets', 'deployment'],
    definition:
      'Immutable infrastructure is a deployment model where servers are never modified after creation — no patches applied in place, no configuration changes on running systems. Instead, a new image is built with changes and deployed to replace the old instances. The old servers are terminated. Every deployment starts from a clean, known state.',
    whyItMatters:
      'Patching running servers (mutable infrastructure) introduces drift — over time, servers diverge from each other and from their documented state. Immutable infrastructure eliminates drift, makes deployments reproducible, and simplifies rollback (redeploy the previous image). It is the infrastructure analog of stateless application design.',
    analogy:
      'Like replacing a printer cartridge vs refilling it by hand — refilling is possible but messy, inconsistent, and you\'re never sure exactly how much ink is in there. A new cartridge (new image) is consistent, guaranteed, and standardized every time.',
    soundsSmartToSay:
      '"We should never SSH into a production host to make changes — if a config needs to change, update the Packer build, bake a new AMI, and roll it out via auto-scaling group replacement. Any manual changes are invisible to our IaC."',
    commonConfusions: [
      'Immutable vs stateless: Immutable refers to the server (infrastructure) — it is not modified after creation. Stateless refers to the application — it does not store session state locally. They are complementary but separate concepts. Stateful applications (databases) can still run on immutable infrastructure using persistent volumes.',
      'Immutable infrastructure vs blue/green deployment: Blue/green is a deployment strategy where two environments exist and traffic is switched between them. Immutable infrastructure is the principle that underpins blue/green — you build a new environment rather than modifying the existing one.',
    ],
    relatedTerms: ['Golden Images', 'Configuration Management', 'Infrastructure as Code', 'Blue/Green Deployment'],
  },
  {
    id: 'syseng-container-runtime',
    domain: 'syseng',
    title: 'Container Runtime',
    subtitle: 'The layer that actually runs containers on a host',
    difficulty: 'intermediate',
    tags: ['containers', 'Docker', 'containerd', 'CRI-O', 'runtime'],
    definition:
      'A container runtime is the software that executes container images on a host — pulling images, creating namespaces and cgroups, mounting filesystems, and starting processes. Docker uses containerd under the hood. Kubernetes uses the Container Runtime Interface (CRI) to support multiple runtimes: containerd (default), CRI-O, and formerly Docker (deprecated in Kubernetes 1.24+).',
    whyItMatters:
      'Understanding the container runtime stack explains why containers behave the way they do — image layers, networking, storage drivers — and helps diagnose issues that appear to be container bugs but are actually runtime or kernel problems.',
    analogy:
      'Like the difference between a car (container image) and the engine (container runtime) — Docker is the dealership that sold you the car, containerd is the engine that makes it actually move, and the Linux kernel provides the fuel (hardware resources).',
    soundsSmartToSay:
      '"Kubernetes deprecated Dockershim in 1.24, but our workloads aren\'t affected — we were using containerd as the actual runtime all along. Docker was just the build tool."',
    commonConfusions: [
      'Docker vs containerd: Docker is a full platform (build, push, run, compose). containerd is just the runtime component that pulls and runs images. Kubernetes uses containerd directly without the rest of the Docker platform.',
      'OCI standards: The Open Container Initiative defines the Image Spec (how images are built and layered) and Runtime Spec (how containers are executed). Any OCI-compliant runtime can run any OCI-compliant image — Docker images run on containerd, CRI-O, and Podman.',
    ],
    relatedTerms: ['Namespaces & cgroups', 'Docker', 'Kubernetes', 'Golden Images'],
  },
  {
    id: 'syseng-ebpf',
    domain: 'syseng',
    title: 'eBPF System Tracing',
    subtitle: 'Running sandboxed programs inside the Linux kernel for observability',
    difficulty: 'advanced',
    tags: ['eBPF', 'observability', 'Linux', 'kernel', 'tracing'],
    definition:
      'eBPF (extended Berkeley Packet Filter) allows programs to run sandboxed inside the Linux kernel without modifying kernel source or loading kernel modules. eBPF programs attach to kernel events (system calls, network packets, function calls) and can collect metrics, trace behavior, and even enforce policies — all with near-zero overhead. Tools like Cilium (networking), Falco (security), and Pixie (observability) are built on eBPF.',
    whyItMatters:
      'Traditional observability required adding instrumentation to application code or loading kernel modules (risky, complex). eBPF observes system behavior from the kernel level without touching application code — enabling deep, production-safe profiling, network tracing, and security enforcement that was previously impossible or too expensive.',
    analogy:
      'Like installing a building-wide sensor network in a city building without any construction — eBPF attaches sensors directly to the building\'s existing infrastructure (kernel) that monitor every door, elevator, and hallway (system call, network packet, function) in real time, without disrupting any occupants (applications).',
    soundsSmartToSay:
      '"We can use Cilium\'s eBPF-based network policy instead of iptables — it operates at the kernel level, doesn\'t require a kube-proxy, and gives us L7 observability on every service-to-service call without any sidecar overhead."',
    commonConfusions: [
      'eBPF vs kernel modules: Kernel modules run arbitrary code in kernel space with full privileges — dangerous and can crash the system. eBPF programs are verified before loading (the kernel verifier ensures they terminate and don\'t access invalid memory) — safe enough for production.',
      'eBPF is not just for networking: eBPF originated in packet filtering (tcpdump uses BPF) but modern eBPF is used for performance profiling, security enforcement (seccomp policies), tracing any kernel function, and even building load balancers.',
    ],
    relatedTerms: ['Linux Kernel', 'Namespaces & cgroups', 'Performance Profiling', 'Cilium'],
  },
  {
    id: 'syseng-firewall',
    domain: 'syseng',
    title: 'Host-Based Firewall',
    subtitle: 'iptables, nftables, and ufw — controlling traffic on the host',
    difficulty: 'intermediate',
    tags: ['firewall', 'iptables', 'nftables', 'security', 'network'],
    definition:
      'A host-based firewall controls network traffic entering and leaving a single server at the OS level, independent of any network firewall. Linux implements this via the Netfilter framework — accessed through iptables (older) or nftables (modern replacement). UFW is a simpler frontend for iptables on Ubuntu. Rules are processed in order: ACCEPT, DROP, or REJECT packets matching defined criteria.',
    whyItMatters:
      'Network perimeter firewalls protect the edge, but host-based firewalls add defense-in-depth — if a server is reached via a compromised network path or an attacker gains access to the internal network, host firewall rules limit what that server can communicate with.',
    analogy:
      'Like a building\'s security system versus individual office locks — the perimeter fence (network firewall) is the first line of defense, but each office (host firewall) has its own lock so a visitor who gets into the lobby can\'t freely roam to every room.',
    soundsSmartToSay:
      '"We should apply egress filtering on all production hosts — most servers only need to call specific upstreams, but right now any compromised process can make outbound connections to any IP on any port."',
    commonConfusions: [
      'iptables vs nftables: iptables is the older interface, still widely used and supported. nftables is the modern replacement — more performant, simpler syntax, and the default on newer distributions. nftables can run the iptables command syntax via compatibility shims.',
      'Host firewall vs security groups: Cloud security groups (AWS, GCP, Azure) filter traffic before it reaches the instance — implemented in the hypervisor or SDN layer. Host-based iptables rules filter at the OS level after the packet arrives. Both provide value and should be layered.',
    ],
    relatedTerms: ['OS Hardening', 'Network Segmentation', 'Zero Trust', 'eBPF'],
  },
  {
    id: 'syseng-lvm',
    domain: 'syseng',
    title: 'LVM (Logical Volume Manager)',
    subtitle: 'Flexible disk management without partition table constraints',
    difficulty: 'intermediate',
    tags: ['LVM', 'storage', 'disk', 'Linux', 'volumes'],
    definition:
      'LVM (Logical Volume Manager) is a Linux abstraction layer between physical disks and filesystems that provides flexible storage management. Physical disks are added to a Volume Group (VG). Logical Volumes (LVs) are carved from the VG and formatted with a filesystem. LVs can be resized, moved, snapshotted, and spanned across multiple disks without repartitioning.',
    whyItMatters:
      'Without LVM, resizing a partition requires unmounting, using partition tools, and hoping for contiguous free space. With LVM, you add a disk to the VG and extend the LV with two commands — live, online, without downtime. LVM snapshots also enable consistent backups without stopping the application.',
    analogy:
      'Like a storage unit facility where you rent flexible space (VG) and can expand, shrink, or rearrange individual units (LVs) without physically moving the building\'s walls — just update the floor plan (LVM metadata).',
    soundsSmartToSay:
      '"We should put the database volume on an LVM LV — when we inevitably need to expand it, we can add an EBS volume to the VG and extend the LV online without any downtime or data migration."',
    commonConfusions: [
      'LVM vs filesystem: LVM manages the volume (raw block device). The filesystem (ext4, XFS) sits on top of the LV and manages files. You need both — LVM for flexible volume management, filesystem for file organization.',
      'LVM snapshots vs storage snapshots: LVM snapshots use copy-on-write to capture a point-in-time view of an LV. Cloud storage snapshots (EBS snapshots) capture the underlying block device. LVM snapshots are faster but use local disk space; cloud snapshots replicate off-host.',
    ],
    relatedTerms: ['Filesystem Types', 'Storage Tiers', 'RAID', 'Backup & DR'],
  },
  {
    id: 'syseng-bastion-host',
    domain: 'syseng',
    title: 'Bastion Host',
    subtitle: 'The secure gateway for accessing private infrastructure',
    difficulty: 'beginner',
    tags: ['bastion', 'jump server', 'access', 'security', 'SSH'],
    definition:
      'A bastion host (jump server) is a hardened, heavily monitored server in a public subnet that acts as the only entry point for SSH or RDP access to servers in private subnets. Engineers connect to the bastion first, then hop to internal hosts. The bastion aggregates all access into one hardened, audited gateway instead of exposing every server to the internet.',
    whyItMatters:
      'Exposing every server\'s SSH port to the internet is an enormous attack surface. A bastion host reduces this to a single hardened target — hardened OS, key-based auth only, comprehensive logging, MFA enforced — while keeping all other servers in private subnets unreachable from the internet.',
    analogy:
      'Like the security desk in a corporate lobby — all visitors (engineers) check in at the single guarded entrance (bastion), show ID (SSH key + MFA), sign the log (audit trail), and then are escorted to their destination (internal host). No one can walk directly into the building through a back door (no public IP on internal servers).',
    soundsSmartToSay:
      '"We\'re replacing our bastion with AWS Systems Manager Session Manager — it gives us the same audited access without a bastion to maintain or an SSH port open anywhere, and all session activity is logged to CloudWatch."',
    commonConfusions: [
      'Bastion host vs VPN: A VPN gives a device an IP on the private network — broad network access. A bastion host gives SSH/RDP access to specific hosts via a controlled hop — narrower access. Zero Trust advocates for bastion-like per-resource access rather than broad VPN access.',
      'Bastion vs jump host: The terms are used interchangeably. Technically a jump host (ProxyJump in SSH config) is any intermediate host; a bastion is a specifically hardened and monitored jump host.',
    ],
    relatedTerms: ['SSH Hardening', 'Zero Trust', 'VPN', 'Network Segmentation'],
  },
  {
    id: 'syseng-ntp',
    domain: 'syseng',
    title: 'NTP (Time Synchronization)',
    subtitle: 'Why all your servers must agree on the time',
    difficulty: 'beginner',
    tags: ['NTP', 'time', 'synchronization', 'clocks'],
    definition:
      'NTP (Network Time Protocol) synchronizes clocks across servers by polling time servers in a hierarchy. Modern Linux systems use chrony or systemd-timesyncd instead of the legacy ntpd daemon. Accurate time is critical for log correlation, distributed transactions, certificate validation, and authentication protocols like Kerberos.',
    whyItMatters:
      'Clock drift between servers breaks distributed systems in subtle ways — log events appear out of order, authentication tokens expire prematurely, distributed database transactions conflict, and TLS certificates may appear invalid. Time drift of even a few seconds can cause production incidents that are extremely difficult to diagnose.',
    analogy:
      'Like musicians in an orchestra — every musician must sync to the conductor\'s tempo (NTP time server). If one section drifts even slightly, the music sounds wrong. In distributed systems, clock drift is the equivalent of musicians playing at different tempos — everything falls apart.',
    soundsSmartToSay:
      '"Our Kubernetes cluster nodes have 30-second clock drift between them — that explains why our distributed lock is failing intermittently. The etcd leader election timeout is shorter than the drift window."',
    commonConfusions: [
      'NTP vs PTP: NTP synchronizes clocks to millisecond accuracy over networks. PTP (Precision Time Protocol) synchronizes to nanosecond accuracy for applications requiring extreme timing precision (financial trading, 5G networks, GPS systems). Most infrastructure uses NTP.',
      'chrony vs ntpd: ntpd is the legacy NTP daemon. chrony is the modern replacement — faster to synchronize on startup, more accurate under variable network conditions, and the default on RHEL 7+ and Ubuntu 20.04+. Most new systems should use chrony.',
    ],
    relatedTerms: ['Log Aggregation', 'Distributed Systems', 'Certificate Management'],
  },
  {
    id: 'syseng-syslog',
    domain: 'syseng',
    title: 'Syslog & journald',
    subtitle: 'How Linux collects and routes system logs',
    difficulty: 'beginner',
    tags: ['syslog', 'journald', 'logging', 'rsyslog', 'Linux'],
    definition:
      'Syslog is the standard protocol and daemon for collecting, filtering, and routing log messages from the kernel and system services. rsyslog and syslog-ng are common implementations. systemd-based systems use journald for structured binary logs, accessed via journalctl. Both systems can forward logs to centralized log aggregators (ELK, Splunk, Loki).',
    whyItMatters:
      'System logs are the ground truth for diagnosing OS-level problems — authentication failures, kernel panics, OOM kills, hardware errors, and service crashes all leave traces in syslog or journald before any application-level observability captures them.',
    analogy:
      'Like the black box flight recorder on an aircraft — syslog captures a continuous record of everything the system does at the OS level. When something goes wrong, it is your first source of truth, capturing events that happened before any monitoring alert fired.',
    soundsSmartToSay:
      '"Check journalctl -k for kernel messages — the OOM kill will show up there with the exact process name and memory usage at the time of the kill, which gives us the data we need to right-size the cgroup limits."',
    commonConfusions: [
      'journald vs syslog: journald stores logs in a structured binary format queryable with journalctl. Traditional syslog stores plain text in /var/log/. On systemd systems, journald collects all logs; rsyslog can then forward them to centralized syslog in the traditional format.',
      'Log rotation: Syslog files grow indefinitely without rotation. logrotate periodically compresses and archives log files based on size or time. journald handles its own rotation via Storage= and SystemMaxUse= settings in journald.conf.',
    ],
    relatedTerms: ['Log Aggregation', 'systemd', 'Runbooks', 'System Monitoring'],
  },
  {
    id: 'syseng-selinux',
    domain: 'syseng',
    title: 'SELinux',
    subtitle: 'Mandatory access control for every process on Linux',
    difficulty: 'advanced',
    tags: ['SELinux', 'MAC', 'security', 'Linux', 'access control'],
    definition:
      'SELinux (Security-Enhanced Linux) is a Linux kernel module that implements Mandatory Access Control (MAC) — every process and file has a security label, and a policy defines exactly what operations are allowed. Unlike traditional Unix permissions (Discretionary Access Control), SELinux decisions cannot be overridden by the file owner — only the policy can permit an action.',
    whyItMatters:
      'Standard Unix permissions (rwxr-xr-x) are user-controlled — a misconfigured application can access files it shouldn\'t. SELinux enforces system-wide policy regardless of file permissions, containing the damage from compromised processes. A compromised Apache web server constrained by SELinux cannot read /etc/shadow or spawn a shell.',
    analogy:
      'Like the difference between employee badge access (DAC) and a government clearance system (MAC) — with badge access, an employee can lend their badge to anyone. With clearance levels, the system itself decides who can access what, regardless of what the employee wants.',
    soundsSmartToSay:
      '"Don\'t set SELinux to permissive — that defeats its entire purpose. Instead, use audit2allow to generate the specific policy exception you need and add it properly. Running permissive in production is the same as turning SELinux off."',
    commonConfusions: [
      'SELinux vs AppArmor: Both implement MAC but with different approaches. SELinux uses labels on every file and process — fine-grained but complex. AppArmor uses file paths and is simpler to configure. RedHat/CentOS default to SELinux; Ubuntu/Debian default to AppArmor.',
      'Permissive mode vs disabled: In permissive mode, SELinux logs violations but does not enforce them — useful for debugging policy. In disabled mode, no labels or logging occur. Never run production in permissive mode; use it only temporarily to diagnose policy issues.',
    ],
    relatedTerms: ['OS Hardening', 'Namespaces & cgroups', 'PAM', 'Least Privilege'],
  },
  {
    id: 'syseng-ulimits',
    domain: 'syseng',
    title: 'ulimits (Resource Limits)',
    subtitle: 'Per-process resource limits enforced by the kernel',
    difficulty: 'intermediate',
    tags: ['ulimits', 'file descriptors', 'limits', 'Linux', 'performance'],
    definition:
      'ulimits are kernel-enforced per-process resource limits — maximum open file descriptors (nofile), maximum processes/threads (nproc), maximum file size (fsize), core dump size (core), and more. They prevent a single runaway process from consuming all system resources. Set via /etc/security/limits.conf, PAM, or systemd unit LimitNOFILE= directives.',
    whyItMatters:
      'Many production incidents are caused by processes hitting default ulimits that were never adjusted for the workload. A database or web server that handles thousands of connections needs file descriptor limits in the hundreds of thousands — the default of 1,024 causes "too many open files" errors under moderate load.',
    analogy:
      'Like a power breaker for each apartment in a building — each unit (process) has a maximum amperage (file descriptors, memory). When a tenant runs too many high-power appliances (connections), their breaker trips (process errors) instead of blowing the entire building\'s main fuse (system crash).',
    soundsSmartToSay:
      '"Our nginx process is hitting the file descriptor limit at 1,024 — we need to set LimitNOFILE=65536 in the systemd unit file and also increase fs.file-max via sysctl for the system-wide limit."',
    commonConfusions: [
      'Soft vs hard limits: Soft limits are the current effective limit, which a process can increase up to the hard limit. Hard limits require root privileges to raise. ulimit -n shows the soft limit; ulimit -Hn shows the hard limit.',
      'ulimits vs cgroups: ulimits apply per-process. cgroups apply to a group of processes collectively. A process that forks many children can have each child respect its own ulimit, but the group\'s total can still be constrained by cgroup limits.',
    ],
    relatedTerms: ['Linux Kernel', 'cgroups', 'Process Management', 'Kernel Tuning'],
  },
  {
    id: 'syseng-service-discovery',
    domain: 'syseng',
    title: 'Service Discovery',
    subtitle: 'Finding services dynamically as instances come and go',
    difficulty: 'intermediate',
    tags: ['service discovery', 'Consul', 'etcd', 'DNS', 'microservices'],
    definition:
      'Service discovery is the mechanism by which services find each other in a dynamic environment where instances have ephemeral IPs (containers, auto-scaling groups). A service registry (Consul, etcd, Kubernetes DNS) maintains a real-time catalog of available instances with health status. Clients query the registry instead of hard-coding IP addresses.',
    whyItMatters:
      'In a containerized or cloud-native environment, services come and go constantly — auto-scaling, deployments, crashes, spot instance terminations. Static IP-based routing breaks immediately. Service discovery provides a stable, health-aware interface to a dynamic pool of instances.',
    analogy:
      'Like a live taxi dispatcher (service registry) versus a printed phone book (static DNS) — the dispatcher knows in real time which taxis are available, their location, and whether they can take a fare. The phone book lists numbers that may or may not be in service today.',
    soundsSmartToSay:
      '"We should use Consul with health checks for our service discovery layer — it will automatically route traffic away from unhealthy instances without any DNS TTL delay that would cause failed requests during the propagation window."',
    commonConfusions: [
      'Service discovery vs load balancer: A load balancer distributes traffic across known backends. Service discovery tells the load balancer (or client) what those backends are. They work together — discovery finds the instances, load balancing distributes across them.',
      'Client-side vs server-side discovery: Client-side discovery (Ribbon, Consul client) means the calling service queries the registry and picks an instance. Server-side discovery (load balancer queries registry) means the client calls a fixed address and the router handles instance selection.',
    ],
    relatedTerms: ['DNS Resolution', 'Load Balancer', 'Kubernetes', 'Consul'],
  },
  {
    id: 'syseng-boot-process',
    domain: 'syseng',
    title: 'Linux Boot Process',
    subtitle: 'From power-on to login prompt — what happens in between',
    difficulty: 'intermediate',
    tags: ['boot', 'GRUB', 'BIOS', 'UEFI', 'initramfs', 'Linux'],
    definition:
      'The Linux boot sequence: (1) BIOS/UEFI firmware initializes hardware and finds the bootable device, (2) GRUB (bootloader) loads the kernel and initramfs from disk, (3) the kernel initializes hardware, mounts the initramfs as a temporary root filesystem, (4) initramfs mounts the real root filesystem, (5) the kernel hands off to systemd (init), (6) systemd starts services in dependency order until the system is ready.',
    whyItMatters:
      'Boot failures are among the most disruptive incidents — a misconfigured GRUB entry or corrupted initramfs means the server cannot start, and you may need console or serial access to recover. Understanding the boot sequence tells you where to look when a server won\'t come up.',
    analogy:
      'Like launching a rocket — BIOS is the launch control that checks systems and ignites, GRUB is the guidance computer that points in the right direction, the kernel is the rocket engine that takes over, and systemd is mission control that coordinates all systems once in orbit.',
    soundsSmartToSay:
      '"The instance is stuck in initramfs rescue shell — it can\'t find the root filesystem, which usually means a disk UUIDs mismatch after volume replacement or a broken fstab entry. We need console access to fix it."',
    commonConfusions: [
      'BIOS vs UEFI: BIOS is the legacy firmware. UEFI is the modern replacement with a GUI, faster boot, secure boot support, and support for disks larger than 2 TB. Most systems built after 2010 use UEFI, though it often runs in legacy BIOS compatibility mode.',
      'initrd vs initramfs: Both are temporary root filesystems loaded into RAM during boot to mount the real root FS. initrd is an older disk image format. initramfs is the modern format — a compressed cpio archive embedded in the kernel or loaded separately by GRUB.',
    ],
    relatedTerms: ['Linux Kernel', 'systemd', 'GRUB', 'Backup & DR'],
  },
  {
    id: 'syseng-tcpdump',
    domain: 'syseng',
    title: 'Packet Capture (tcpdump/Wireshark)',
    subtitle: 'Seeing exactly what is on the wire',
    difficulty: 'advanced',
    tags: ['tcpdump', 'Wireshark', 'packet capture', 'network', 'debugging'],
    definition:
      'tcpdump is a command-line tool that captures network packets on a host, filtered by interface, port, protocol, or IP address. Captured packets can be saved to a .pcap file and analyzed in Wireshark for deep protocol inspection. It is the ground truth for diagnosing network-level issues — TLS handshake failures, connection resets, retransmissions, and protocol mismatches.',
    whyItMatters:
      'When logs say "connection refused" or "connection reset" but you don\'t know if the problem is client, network, or server, tcpdump shows exactly what bytes are traveling and in which direction. It bypasses all application-level abstractions and shows the raw network reality.',
    analogy:
      'Like a court stenographer recording every word spoken in a room — not a summary or interpretation, but the exact verbatim transcript of every packet exchanged. When two systems disagree about what was said, the transcript is the authoritative record.',
    soundsSmartToSay:
      '"Let\'s run a tcpdump on both ends and compare — if the client sends a SYN and we see a RST immediately at the server, that\'s a firewall or port issue. If we don\'t see the SYN at the server at all, the problem is upstream of us."',
    commonConfusions: [
      'tcpdump vs netstat/ss: netstat and ss show socket state (what connections exist, in what state). tcpdump captures the actual packets flowing. ss tells you the connection is ESTABLISHED; tcpdump tells you what data is being exchanged on it.',
      'Encrypted traffic: tcpdump captures encrypted TLS data — you see the handshake but not the plaintext. To inspect encrypted payloads, you need the server private key or a TLS proxy (MITM). Tools like ssldump or Wireshark with key material can decrypt captures.',
    ],
    relatedTerms: ['Networking', 'Firewall', 'Load Testing', 'I/O Monitoring'],
  },
];
