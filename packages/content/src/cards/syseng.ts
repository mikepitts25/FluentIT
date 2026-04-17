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
];
