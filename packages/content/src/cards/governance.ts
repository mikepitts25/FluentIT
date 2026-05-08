import type { Card } from '../types';

export const governanceCards: Card[] = [
  {
    id: 'gov-itil',
    domain: 'governance',
    title: 'ITIL',
    subtitle: 'IT service management best practices',
    difficulty: 'beginner',
    tags: ['ITSM', 'service management', 'framework'],
    definition:
      'ITIL (Information Technology Infrastructure Library) is a framework of best practices for IT service management (ITSM). It defines processes for incident management, change management, problem management, and service requests — standardizing how IT delivers and supports services.',
    whyItMatters:
      'Every enterprise IT organization uses ITIL concepts even if they don\'t call it ITIL. When someone files a ticket, that\'s ITIL incident management. When a change goes through a CAB (Change Advisory Board), that\'s ITIL change management.',
    analogy:
      'Like the playbook for running a hospital — standardized procedures for admitting patients (incident management), scheduling surgeries (change management), and investigating recurring conditions (problem management).',
    soundsSmartToSay:
      '"We need to distinguish incidents from problems — this keeps recurring because we\'re treating the symptom (incident) without investigating the root cause (problem)."',
    commonConfusions: [
      'ITIL vs DevOps: ITIL is process-heavy and historically slow. DevOps is fast and automated. Modern organizations blend both — using ITIL\'s service management structure with DevOps\' automation and speed.',
      'Incident vs problem: An incident is a service disruption ("site is down"). A problem is the underlying cause of one or more incidents ("database connection pool is misconfigured"). Fix incidents fast; investigate problems thoroughly.',
    ],
    relatedTerms: ['ITSM', 'Change Management', 'ServiceNow', 'CAB'],
  },
  {
    id: 'gov-soc2',
    domain: 'governance',
    title: 'SOC 2',
    subtitle: 'Proving your security controls to customers',
    difficulty: 'beginner',
    tags: ['compliance', 'audit', 'trust'],
    definition:
      'SOC 2 is an audit framework that evaluates an organization\'s controls over security, availability, processing integrity, confidentiality, and privacy. A SOC 2 Type II report covers a period of time (usually 12 months) and is issued by an independent auditor.',
    whyItMatters:
      'Enterprise customers require SOC 2 reports before buying SaaS products. It is the baseline trust credential — without it, deals stall in procurement. Achieving SOC 2 requires documented controls, evidence collection, and an annual audit.',
    analogy:
      'Like a restaurant health inspection report — the inspector (auditor) checks that you follow food safety rules (security controls), documents their findings (SOC 2 report), and you display the grade (share with customers) to prove trust.',
    soundsSmartToSay:
      '"SOC 2 Type I is a point-in-time snapshot — our customers will want a Type II report that covers 12 months of operational evidence."',
    commonConfusions: [
      'SOC 2 Type I vs Type II: Type I evaluates control design at a point in time. Type II evaluates control effectiveness over a period (typically 12 months). Type II is significantly more rigorous and valuable.',
      'SOC 2 vs ISO 27001: SOC 2 is US-focused and evaluates specific trust service criteria. ISO 27001 is international and certifies an information security management system (ISMS). Many companies pursue both.',
    ],
    relatedTerms: ['ISO 27001', 'AICPA', 'Trust Service Criteria', 'GRC'],
  },
  {
    id: 'gov-change-mgmt',
    domain: 'governance',
    title: 'Change Management',
    subtitle: 'Controlling what changes in production and when',
    difficulty: 'beginner',
    tags: ['change', 'risk', 'approval'],
    definition:
      'Change management is the process of evaluating, approving, scheduling, and tracking changes to production systems — ensuring changes are documented, risk-assessed, have a rollback plan, and are coordinated to minimize impact.',
    whyItMatters:
      'Uncontrolled changes are the #1 cause of outages. Change management prevents conflicting changes from going live simultaneously, ensures rollback plans exist, and creates an audit trail of who changed what and when.',
    analogy:
      'Like a construction permit process — you can\'t just knock down a wall (make a production change) without a blueprint (change request), structural engineer approval (risk assessment), and an inspection after (post-implementation review).',
    soundsSmartToSay:
      '"Standard changes (routine, pre-approved, low risk) should be automated in CI/CD. Only non-standard changes need CAB review — otherwise we\'re just adding bureaucracy for no risk reduction."',
    commonConfusions: [
      'Change management vs change control: Change management is the overall process. Change control is the gating mechanism (who approves, what criteria). In regulated environments, change control may be mandated.',
      'ITIL change management vs DevOps: Traditional ITIL requires CAB approval for every change (slow). Modern approaches auto-approve low-risk changes and only gate high-risk ones — achieving both speed and safety.',
    ],
    relatedTerms: ['CAB', 'Change Request', 'Rollback Plan', 'ITIL'],
  },
  {
    id: 'gov-rbac',
    domain: 'governance',
    title: 'RBAC',
    subtitle: 'Role-Based Access Control — permissions by job function',
    difficulty: 'beginner',
    tags: ['access', 'authorization', 'least privilege'],
    definition:
      'RBAC assigns permissions to roles (Admin, Editor, Viewer, Auditor) rather than individual users. Users are assigned roles, and the role determines what they can access. This simplifies permission management at scale.',
    whyItMatters:
      'Managing individual permissions for 10,000 employees is impossible. RBAC means when someone joins the marketing team, they get the "Marketing" role and automatically receive exactly the access marketing needs — no more, no less.',
    analogy:
      'Like a hotel key card system — a guest card opens room doors, a staff card opens supply closets, and a manager card opens everything. You don\'t program individual doors per person; you assign a role.',
    soundsSmartToSay:
      '"We need to audit role assignments quarterly — people accumulate permissions as they move between teams but rarely lose old ones. This permission creep violates least privilege."',
    commonConfusions: [
      'RBAC vs ABAC: RBAC grants access based on role assignment. ABAC (Attribute-Based Access Control) grants access based on attributes (department, location, time of day, device type). ABAC is more granular but harder to manage.',
      'Custom roles vs predefined: Start with a small set of predefined roles. Custom per-user roles defeat the purpose of RBAC and quickly become unmanageable.',
    ],
    relatedTerms: ['Least Privilege', 'IAM', 'ABAC', 'Access Review'],
  },
  {
    id: 'gov-incident-response',
    domain: 'governance',
    title: 'Incident Response Plan',
    subtitle: 'What to do when things go very wrong',
    difficulty: 'beginner',
    tags: ['incident', 'playbook', 'communication'],
    definition:
      'An incident response plan defines who does what during an outage or security breach — roles (incident commander, communications lead), escalation paths, communication templates, severity levels, and the process from detection through resolution to postmortem.',
    whyItMatters:
      'During an incident, panic and confusion waste minutes that cost money and trust. A well-practiced incident response plan means everyone knows their role, communication is clear, and resolution is systematic rather than chaotic.',
    analogy:
      'Like a fire drill — when the alarm sounds, everyone knows their evacuation route, meeting point, and who takes attendance. You don\'t figure this out during the fire; you practice it regularly.',
    soundsSmartToSay:
      '"We need to run quarterly incident response drills — the team that practices incident response performs dramatically better than one reading the playbook for the first time during a real outage."',
    commonConfusions: [
      'Severity levels matter: A Sev1 (critical, all hands on deck) has a different response than a Sev3 (degraded, business hours response). Not every incident is an emergency.',
      'Incident commander ≠ the most senior engineer. It\'s whoever is trained to coordinate the response. They delegate technical work and focus on communication and coordination.',
    ],
    relatedTerms: ['Incident Commander', 'Runbook', 'Severity Levels', 'Postmortem'],
  },
  {
    id: 'gov-compliance-auto',
    domain: 'governance',
    title: 'Compliance as Code',
    subtitle: 'Automating compliance checks into CI/CD',
    difficulty: 'intermediate',
    tags: ['automation', 'policy', 'audit'],
    definition:
      'Compliance as Code embeds regulatory and policy requirements into automated checks that run in CI/CD pipelines — verifying that infrastructure configurations, code changes, and deployments meet compliance requirements before they reach production.',
    whyItMatters:
      'Manual compliance audits are slow, expensive, and only happen annually. Automated compliance means every change is checked against policy in real time — violations are caught at deployment time, not during the next audit.',
    analogy:
      'Like a spell-checker for compliance — instead of hiring a proofreader to review every document once a year, the spell-checker (policy engine) catches violations in real time as you type (deploy).',
    soundsSmartToSay:
      '"We should define our SOC 2 controls as OPA policies and enforce them in the CI pipeline — continuous compliance is cheaper and more reliable than annual point-in-time audits."',
    commonConfusions: [
      'OPA (Open Policy Agent) is the most common policy engine — it evaluates JSON against Rego policies. Cloud-specific tools (AWS Config Rules, Azure Policy) do similar things within their platforms.',
      'Compliance as Code doesn\'t replace auditors — it gives auditors continuous evidence. The auditor still evaluates whether the policies are sufficient; the automation proves they are consistently enforced.',
    ],
    relatedTerms: ['OPA', 'Policy Engine', 'Continuous Compliance', 'SOC 2'],
  },
  {
    id: 'gov-risk-mgmt',
    domain: 'governance',
    title: 'IT Risk Management',
    subtitle: 'Identifying, assessing, and mitigating technology risks',
    difficulty: 'beginner',
    tags: ['risk', 'assessment', 'mitigation'],
    definition:
      'IT risk management is the process of identifying threats to IT systems (security breach, outage, data loss, vendor failure), assessing their likelihood and impact, and implementing controls to reduce risk to an acceptable level.',
    whyItMatters:
      'Every IT decision involves risk. Risk management provides a framework for making those tradeoffs explicitly — "we accept this risk" or "we mitigate this risk" — rather than ignoring risks until they become incidents.',
    analogy:
      'Like wearing a seatbelt — you don\'t expect a crash every drive, but you assess the risk (possible accident), evaluate the impact (injury), and apply a control (seatbelt) to reduce it to an acceptable level.',
    soundsSmartToSay:
      '"We need to document this as an accepted risk with an owner — if we\'re choosing not to fix it, that decision should be explicit and reviewed quarterly."',
    commonConfusions: [
      'Risk acceptance is valid — not every risk needs mitigation. The key is making it a conscious, documented decision with an owner, not an oversight.',
      'Risk matrix (likelihood × impact) is the standard tool. A high-likelihood, high-impact risk demands immediate action. A low-likelihood, low-impact risk may be accepted.',
    ],
    relatedTerms: ['Risk Register', 'Risk Matrix', 'Business Continuity', 'Threat Modeling'],
  },
  {
    id: 'gov-gdpr-privacy',
    domain: 'governance',
    title: 'Data Privacy (GDPR)',
    subtitle: 'Protecting personal data by design and by law',
    difficulty: 'beginner',
    tags: ['privacy', 'GDPR', 'PII'],
    definition:
      'Data privacy regulations (GDPR, CCPA, HIPAA) define how organizations must collect, store, process, and delete personal data. GDPR (Europe) requires explicit consent, data minimization, breach notification within 72 hours, and the right for individuals to request data deletion.',
    whyItMatters:
      'GDPR fines reach 4% of global annual revenue. Beyond fines, privacy failures destroy customer trust. Engineers must understand where PII (Personally Identifiable Information) flows through systems and ensure it is handled according to regulatory requirements.',
    analogy:
      'Like a lockbox at a bank — you can only put in what the customer agreed to store (consent), you must tell them exactly what\'s inside (transparency), you delete contents when asked (right to erasure), and you notify them immediately if the box is broken into (breach notification).',
    soundsSmartToSay:
      '"We need a data inventory before we can answer DSARs (Data Subject Access Requests) — we can\'t tell users what data we have if we don\'t know where it lives across all our systems."',
    commonConfusions: [
      'PII vs sensitive data: PII is any data that can identify a person (name, email, IP address). Sensitive data is a subset that requires extra protection (health data, biometrics, financial records).',
      'GDPR applies to any company processing EU citizens\' data — not just companies based in the EU. A US SaaS company with European customers must comply.',
    ],
    relatedTerms: ['PII', 'CCPA', 'HIPAA', 'Data Minimization'],
  },
  {
    id: 'gov-iso27001',
    domain: 'governance',
    title: 'ISO 27001',
    subtitle: 'The international standard for information security management',
    difficulty: 'beginner',
    tags: ['security', 'certification', 'ISMS'],
    definition:
      'ISO 27001 is an international standard that specifies requirements for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS). It provides a systematic approach to managing sensitive information through risk assessment, security controls, and ongoing monitoring.',
    whyItMatters:
      'ISO 27001 certification is often a prerequisite for doing business internationally, especially in Europe and Asia-Pacific markets. It demonstrates to customers, partners, and regulators that your organization takes a structured, risk-based approach to information security.',
    analogy:
      'Like getting a building up to code — an architect (security team) designs to meet structural standards (ISO 27001 controls), a building inspector (auditor) certifies compliance, and you must maintain the building over time or lose your certificate of occupancy.',
    soundsSmartToSay:
      '"ISO 27001 gives us the ISMS framework, but the real value is in Annex A controls — we should map our existing SOC 2 controls to Annex A to identify gaps rather than starting from scratch."',
    commonConfusions: [
      'ISO 27001 vs SOC 2: ISO 27001 is a certification (you pass or fail) recognized internationally. SOC 2 is an attestation report primarily used in North America. Many mature organizations pursue both.',
      'ISO 27001 vs ISO 27002: ISO 27001 defines the requirements for an ISMS. ISO 27002 provides detailed implementation guidance for the security controls in Annex A. Think of 27001 as the "what" and 27002 as the "how."',
    ],
    relatedTerms: ['ISMS', 'SOC 2', 'Annex A', 'Risk Assessment'],
  },
  {
    id: 'gov-bcp',
    domain: 'governance',
    title: 'Business Continuity Planning',
    subtitle: 'Keeping the business running when disaster strikes',
    difficulty: 'intermediate',
    tags: ['resilience', 'disaster recovery', 'continuity'],
    definition:
      'Business Continuity Planning (BCP) is the process of creating systems, procedures, and policies that ensure critical business functions continue operating during and after a significant disruption — whether that is a natural disaster, cyberattack, or major infrastructure failure. It includes business impact analysis, recovery strategies, and regular testing.',
    whyItMatters:
      'Downtime costs enterprises thousands to millions of dollars per hour. BCP forces organizations to identify which systems and processes are truly critical, define acceptable recovery times (RTO) and data loss thresholds (RPO), and build resilience before a disaster.',
    analogy:
      'Like a hospital backup generator — the hospital identifies life-critical systems (ICU, OR), installs backup power (recovery strategy), and tests the generator monthly (BCP drill) so that when the grid fails, patients stay alive.',
    soundsSmartToSay:
      '"Our BCP needs to define RTOs per business function, not per system — the CFO cares that payroll runs on time, not whether the specific VM hosting it recovers in two hours."',
    commonConfusions: [
      'BCP vs DR (Disaster Recovery): BCP is the broader business strategy for maintaining operations. DR is the technical subset focused on recovering IT systems and data. DR is one component of a BCP, not a synonym.',
      'BCP is not just an IT responsibility — it covers people, processes, facilities, and supply chains. IT owns the disaster recovery plan, but the business owns the continuity plan.',
    ],
    relatedTerms: ['Disaster Recovery', 'RTO', 'RPO', 'Business Impact Analysis'],
  },
  {
    id: 'gov-audit-trail',
    domain: 'governance',
    title: 'Audit Trail',
    subtitle: 'An unalterable record of who did what and when',
    difficulty: 'beginner',
    tags: ['logging', 'compliance', 'accountability'],
    definition:
      'An audit trail is a chronological record of system activities that captures who performed an action, what they did, when they did it, and from where. It provides an immutable, tamper-evident log that can be used for security investigations, compliance evidence, and operational troubleshooting.',
    whyItMatters:
      'Without audit trails, you cannot answer basic security questions — "Who accessed this data?" "Who approved this change?" "When was this configuration modified?" Every compliance framework (SOC 2, ISO 27001, HIPAA) requires audit logging.',
    analogy:
      'Like a security camera system in a building — it does not prevent theft by itself, but it records who entered which rooms, when, and what they carried out. When something goes missing, you can rewind the footage.',
    soundsSmartToSay:
      '"Our audit logs need to be written to immutable storage with separate access controls — if an attacker can delete the audit trail, they can cover their tracks and we lose all forensic capability."',
    commonConfusions: [
      'Audit logs vs application logs: Application logs are for debugging (stack traces, performance metrics). Audit logs are for accountability (user actions, access events, configuration changes). They serve different audiences and have different retention requirements.',
      'Immutability is essential — audit logs that can be modified or deleted by administrators are not trustworthy for compliance or forensics. Use write-once storage or centralized SIEM systems with separate access controls.',
    ],
    relatedTerms: ['SIEM', 'SOC 2', 'Immutable Logging', 'Chain of Custody'],
  },
  {
    id: 'gov-cmdb',
    domain: 'governance',
    title: 'CMDB',
    subtitle: 'Configuration Management Database — your IT asset map',
    difficulty: 'intermediate',
    tags: ['ITSM', 'assets', 'configuration'],
    definition:
      'A CMDB (Configuration Management Database) is a centralized repository that stores information about all significant IT assets (Configuration Items or CIs) and the relationships between them. CIs include servers, applications, databases, network devices, cloud resources, and the dependencies connecting them.',
    whyItMatters:
      'When a server goes down, you need to instantly know what applications depend on it, who owns them, and what business processes are affected. Without a CMDB, incident response relies on tribal knowledge that walks out the door when employees leave.',
    analogy:
      'Like a wiring diagram for a building — an electrician needs to know which circuit breaker (server) powers which outlets (applications) before flipping a switch (making a change). Without the diagram, every maintenance task is a guessing game.',
    soundsSmartToSay:
      '"A CMDB is only valuable if it stays current — we should auto-populate CIs from our cloud provider APIs and container orchestration platform rather than relying on manual data entry that goes stale within weeks."',
    commonConfusions: [
      'A CMDB is not an asset inventory — an asset inventory tracks ownership and cost (finance perspective). A CMDB tracks configuration and relationships (operations perspective). They overlap but serve different purposes.',
      'CMDBs fail when treated as a one-time project. The data decays rapidly if not continuously updated through automated discovery and integration with CI/CD pipelines, cloud APIs, and monitoring tools.',
    ],
    relatedTerms: ['ITIL', 'Configuration Item', 'ServiceNow', 'Asset Management'],
  },
  {
    id: 'gov-zero-trust-compliance',
    domain: 'governance',
    title: 'Zero Trust Compliance',
    subtitle: 'Proving regulatory compliance in a never-trust architecture',
    difficulty: 'advanced',
    tags: ['zero trust', 'compliance', 'architecture'],
    definition:
      'Zero Trust Compliance is the practice of aligning a Zero Trust Architecture — where no user, device, or network segment is inherently trusted — with regulatory and audit requirements. It involves mapping zero trust principles (verify explicitly, use least privilege, assume breach) to specific compliance controls.',
    whyItMatters:
      'Traditional compliance models assume a trusted internal network with perimeter defenses, but zero trust eliminates that assumption. Organizations adopting zero trust must demonstrate to auditors that continuous authentication, micro-segmentation, and dynamic access policies satisfy the same control objectives.',
    analogy:
      'Like upgrading from a castle-with-moat security model to an airport security model, then proving to regulators that the new approach is actually safer. In a castle, once you cross the moat you roam freely. In an airport, every person is checked at every gate, every boarding pass is verified.',
    soundsSmartToSay:
      '"Our zero trust implementation actually gives us stronger compliance evidence — we have continuous verification logs at every access point instead of annual attestations that a firewall rule exists."',
    commonConfusions: [
      'Zero trust is not a product you buy — it is an architectural principle. Vendors sell "zero trust solutions," but real zero trust requires rethinking identity, network, device, and workload trust across the entire stack.',
      'Compliance frameworks are catching up: NIST SP 800-207 defines zero trust architecture, and FedRAMP now references it. But many auditors still use perimeter-based mental models.',
    ],
    relatedTerms: ['Zero Trust Architecture', 'NIST 800-207', 'Micro-segmentation', 'Least Privilege'],
  },
  {
    id: 'gov-sla-slo-sli',
    domain: 'governance',
    title: 'SLA / SLO / SLI',
    subtitle: 'The hierarchy of service reliability promises',
    difficulty: 'beginner',
    tags: ['reliability', 'service level', 'metrics'],
    definition:
      'SLI (Service Level Indicator) is a metric that measures service behavior, such as latency or error rate. SLO (Service Level Objective) is an internal target for that metric, such as "99.9% of requests under 200ms." SLA (Service Level Agreement) is a contractual commitment to customers with consequences (usually financial penalties) if the SLO is breached.',
    whyItMatters:
      'Without SLIs, you cannot objectively measure reliability. Without SLOs, engineering has no target and either over-invests in reliability or under-invests. Without SLAs, customers have no enforceable guarantee. Getting this hierarchy right aligns engineering effort with business commitments.',
    analogy:
      'Like a shipping company: the SLI is tracking data showing actual delivery times, the SLO is the internal goal to deliver 99% of packages within 2 days, and the SLA is the customer-facing guarantee of 3-day delivery with a refund if missed.',
    soundsSmartToSay:
      '"Our SLO should be tighter than our SLA — if we target 99.95% internally but promise 99.9% externally, we have an error budget cushion before we breach the contractual commitment."',
    commonConfusions: [
      'SLO vs SLA: An SLO is an internal engineering target with no contractual penalties. An SLA is an external legal commitment. You should always set your SLO tighter than your SLA.',
      '"Five nines" (99.999%) allows only 5.26 minutes of downtime per year. Each additional nine is exponentially more expensive. Most services do not need — and cannot achieve — five nines.',
    ],
    relatedTerms: ['Error Budget', 'Uptime', 'SRE', 'Observability'],
  },
  {
    id: 'gov-vendor-risk',
    domain: 'governance',
    title: 'Vendor Risk Management',
    subtitle: 'Assessing and managing risks from third-party suppliers',
    difficulty: 'intermediate',
    tags: ['third-party', 'risk', 'supply chain'],
    definition:
      'Vendor Risk Management (VRM) is the process of identifying, assessing, monitoring, and mitigating risks introduced by third-party vendors and service providers. It includes evaluating vendors\' security posture, financial stability, compliance certifications, and data handling practices before and throughout the vendor relationship.',
    whyItMatters:
      'Your security is only as strong as your weakest vendor. Major breaches — Target, SolarWinds, MOVEit — originated through third-party vendors. Regulators hold you responsible for your vendors\' data handling, not the vendors themselves.',
    analogy:
      'Like vetting a subcontractor on a construction project — the general contractor is liable if the electrician does shoddy wiring that burns down the building. You check their credentials before hiring and inspect their work during the project.',
    soundsSmartToSay:
      '"We need to tier our vendors by data access and criticality — a vendor processing customer PII gets a full security assessment, while a vendor supplying office furniture gets a basic financial check."',
    commonConfusions: [
      'Vendor risk assessment is not a one-time event — vendors\' security postures change, and a vendor that passed assessment two years ago may have had turnover, acquisitions, or breaches since.',
      'Fourth-party risk is real — your vendor\'s vendors (subprocessors) also introduce risk. GDPR explicitly requires tracking and disclosing subprocessors who handle personal data.',
    ],
    relatedTerms: ['Third-Party Risk', 'SOC 2', 'Supply Chain Security', 'Due Diligence'],
  },
  {
    id: 'gov-nist-csf',
    domain: 'governance',
    title: 'NIST Cybersecurity Framework',
    subtitle: 'A risk-based approach to managing cybersecurity posture',
    difficulty: 'advanced',
    tags: ['framework', 'cybersecurity', 'risk management'],
    definition:
      'The NIST Cybersecurity Framework (CSF) is a voluntary framework that organizes cybersecurity activities into six core functions: Govern, Identify, Protect, Detect, Respond, and Recover. It provides a common language for managing cybersecurity risk and allows organizations to assess their current maturity, set target profiles, and prioritize improvements.',
    whyItMatters:
      'NIST CSF gives organizations a structured, non-prescriptive way to evaluate and improve their cybersecurity posture without mandating specific technologies. It is widely adopted across industries and increasingly referenced by regulators and cyber insurance providers.',
    analogy:
      'Like a fitness assessment framework — instead of prescribing a specific workout, it defines fitness categories, helps you measure your current level in each, set target goals, and track progress. A marathon runner and a weightlifter use the same framework but arrive at very different programs.',
    soundsSmartToSay:
      '"Let\'s map our current controls to NIST CSF and build a target profile — that gives us a gap analysis we can prioritize by risk and present to leadership as a phased investment roadmap."',
    commonConfusions: [
      'NIST CSF vs NIST 800-53: CSF is a high-level risk management framework for any organization. NIST 800-53 is a detailed catalog of hundreds of specific security controls primarily for US federal agencies.',
      'NIST CSF 2.0 (released 2024) added "Govern" as a sixth core function. References to five functions are outdated.',
    ],
    relatedTerms: ['NIST 800-53', 'Risk Framework', 'CIS Controls', 'Cyber Resilience'],
  },
  {
    id: 'gov-pci-dss',
    domain: 'governance',
    title: 'PCI DSS',
    subtitle: 'Payment Card Industry Data Security Standard',
    difficulty: 'intermediate',
    tags: ['compliance', 'payments', 'cardholder data'],
    definition:
      'PCI DSS (Payment Card Industry Data Security Standard) is a set of security requirements for any organization that stores, processes, or transmits cardholder data. It mandates controls in twelve areas: network security, cardholder data protection, access control, monitoring, and regular testing. Compliance is verified by a Qualified Security Assessor (QSA) for large merchants or self-assessed by smaller ones.',
    whyItMatters:
      'Processing credit cards without PCI DSS compliance exposes you to steep fines (up to $100,000/month), card brand penalties, and potential loss of the ability to accept card payments — ending your business. Even using a PCI-compliant payment processor does not remove all obligations; you are still responsible for how you handle cardholder data on your systems.',
    analogy:
      'Like food safety standards for a restaurant supply chain — every company that handles raw ingredients (cardholder data) must follow handling procedures to prevent contamination (fraud). The restaurant using the supplier (your checkout) is also inspected.',
    soundsSmartToSay:
      '"We should minimize our PCI scope by tokenizing cardholder data at the point of entry — if card numbers never touch our application servers, most of our infrastructure falls out of scope entirely."',
    commonConfusions: [
      'Scope matters: PCI DSS applies to systems that store, process, or transmit cardholder data, and systems connected to them. Minimizing scope (via tokenization, hosted payment pages) dramatically reduces compliance burden.',
      'PCI DSS compliance is required by contract with card networks (Visa, Mastercard), not law — but failing to comply violates your merchant agreement and can result in business termination.',
    ],
    relatedTerms: ['Tokenization', 'QSA', 'Cardholder Data Environment', 'Network Segmentation'],
  },
  {
    id: 'gov-hipaa',
    domain: 'governance',
    title: 'HIPAA',
    subtitle: 'Health data privacy and security requirements',
    difficulty: 'intermediate',
    tags: ['healthcare', 'compliance', 'PHI'],
    definition:
      'HIPAA (Health Insurance Portability and Accountability Act) establishes standards for protecting Protected Health Information (PHI) — any individually identifiable health data. It has two key rules: the Privacy Rule (who can access PHI and for what purposes) and the Security Rule (technical, physical, and administrative safeguards for electronic PHI). Covered entities and their business associates must comply.',
    whyItMatters:
      'HIPAA violations carry civil fines from $100 to $50,000 per violation (capped at $1.9M annually) and criminal penalties for willful neglect. Any SaaS company building healthcare applications, storing patient data, or serving providers and payers must understand their HIPAA obligations — including executing Business Associate Agreements (BAAs) with cloud vendors.',
    analogy:
      'Like patient confidentiality in a hospital — doctors, nurses, and even administrative staff have strict rules about who can access patient records, how they are stored, and who the information can be shared with. The rules apply to everyone who touches the data, not just the treating physician.',
    soundsSmartToSay:
      '"Before we build this patient portal, we need to execute BAAs with every vendor that touches PHI — AWS, our analytics provider, and our logging platform all need BAAs or we\'re creating HIPAA exposure."',
    commonConfusions: [
      'HIPAA does not require specific technologies — it requires appropriate safeguards based on risk assessment. Encryption is "addressable" (must be implemented or have a documented reason why not), not required regardless of context.',
      'Business associates (vendors who process PHI on behalf of a covered entity) are directly liable under HIPAA since 2013. A BAA is contractually necessary but does not transfer your liability to the vendor.',
    ],
    relatedTerms: ['PHI', 'BAA', 'Covered Entity', 'Business Associate'],
  },
  {
    id: 'gov-patch-management',
    domain: 'governance',
    title: 'Patch Management',
    subtitle: 'Systematically applying security fixes before attackers exploit them',
    difficulty: 'beginner',
    tags: ['vulnerability', 'patching', 'security operations'],
    definition:
      'Patch management is the process of identifying, acquiring, testing, and deploying software updates to address security vulnerabilities and bugs. It includes maintaining a complete inventory of software versions, subscribing to vendor security advisories, testing patches before broad deployment, and tracking compliance against defined patching SLAs (e.g., critical vulnerabilities patched within 48 hours).',
    whyItMatters:
      'The majority of successful cyberattacks exploit known vulnerabilities for which patches were available. EternalBlue (WannaCry, NotPetya) exploited a vulnerability that Microsoft had patched two months before the attack. A structured patch management program closes the window between "patch released" and "patch deployed" — that gap is where attackers live.',
    analogy:
      'Like car maintenance — manufacturers issue recalls (security patches) for safety defects. If you ignore the recall notice, the defect that was known and fixable causes an accident. The manufacturer knows, you knew, and you still drove the defective vehicle (unpatched system).',
    soundsSmartToSay:
      '"We need to define patching SLAs by severity — Critical CVEs within 48 hours, High within 7 days, Medium within 30 days. Right now everything goes into a quarterly patch cycle regardless of risk, which means critical vulnerabilities sit exposed for months."',
    commonConfusions: [
      'Patch management vs vulnerability management: Vulnerability management identifies and prioritizes vulnerabilities. Patch management is the remediation process. Patching is one remediation method — compensating controls (WAF rules, network isolation) are others when patching is not immediately possible.',
      'Testing before deployment is non-negotiable. Patches can break applications. The solution is automated testing environments, not skipping testing — an unpatched vulnerability is usually a smaller risk than an outage from an untested patch in production.',
    ],
    relatedTerms: ['CVE', 'Vulnerability Management', 'CVSS Score', 'Zero-Day'],
  },
  {
    id: 'gov-vulnerability-mgmt',
    domain: 'governance',
    title: 'Vulnerability Management',
    subtitle: 'Continuously finding and prioritizing security weaknesses',
    difficulty: 'intermediate',
    tags: ['security', 'scanning', 'CVE'],
    definition:
      'Vulnerability management is the continuous process of discovering, classifying, prioritizing, remediating, and reporting on security vulnerabilities across your IT environment. It combines automated scanning tools (Qualys, Tenable, Rapid7), CVE databases, threat intelligence, and risk prioritization to focus remediation effort on vulnerabilities most likely to be exploited in your environment.',
    whyItMatters:
      'A large organization may have thousands of vulnerabilities at any time — you cannot patch everything simultaneously. Vulnerability management provides the prioritization framework (CVSS score, exploitability, asset criticality, active exploitation in the wild) that tells security and engineering teams which vulnerabilities to fix first.',
    analogy:
      'Like triage in an emergency room — not every patient needs immediate surgery. You assess severity (CVSS score), likelihood of deterioration (active exploit), and what organ is affected (asset criticality), then treat the most critical cases first while managing the queue.',
    soundsSmartToSay:
      '"We should correlate our vulnerability scanner output with CISA\'s Known Exploited Vulnerabilities catalog — a vulnerability with a CVSS score of 7.0 that\'s actively exploited in the wild is more urgent than a CVSS 9.0 theoretical one."',
    commonConfusions: [
      'CVSS score is not the only prioritization factor. A CVSS 10.0 vulnerability on a non-internet-facing system with compensating controls may be less urgent than a CVSS 7.0 on a public-facing server with active exploitation.',
      'Vulnerability management is ongoing, not a quarterly exercise. New CVEs are published daily; your asset inventory changes constantly. Continuous scanning (not annual) is the baseline.',
    ],
    relatedTerms: ['CVE', 'CVSS', 'Patch Management', 'Penetration Testing'],
  },
  {
    id: 'gov-data-classification',
    domain: 'governance',
    title: 'Data Classification',
    subtitle: 'Labeling data by sensitivity to drive appropriate controls',
    difficulty: 'beginner',
    tags: ['data governance', 'security', 'PII'],
    definition:
      'Data classification is the process of categorizing data into tiers based on its sensitivity and the impact of unauthorized disclosure — typically Public, Internal, Confidential, and Restricted. Once classified, each tier has defined handling requirements: who can access it, where it can be stored, how it must be transmitted (encrypted or not), and how long it is retained.',
    whyItMatters:
      'Without data classification, every system is treated the same — either everything is over-protected (expensive) or everything is under-protected (risky). Classification lets you apply expensive controls (encryption, strict access, detailed audit logging) to high-value data and lighter controls to low-value data.',
    analogy:
      'Like classification markings on government documents — Unclassified, Confidential, Secret, Top Secret each carry specific handling rules (who can read it, where it can be discussed, how it must be transmitted). The classification on the document tells every handler what level of protection it deserves.',
    soundsSmartToSay:
      '"We need to tag our data in the data lake with classification labels so our access control policies can be data-driven — right now we can\'t tell which S3 buckets contain PII and which contain public documentation."',
    commonConfusions: [
      'Classification is not just a labeling exercise — it must be enforced technically. A "Restricted" label in a document header means nothing if the document lives in a publicly accessible storage bucket.',
      'Data owners (business stakeholders) are responsible for classifying their data, not IT security. IT provides the framework and enforces controls; the business decides how sensitive their data is.',
    ],
    relatedTerms: ['Data Governance', 'PII', 'DLP', 'Access Control'],
  },
  {
    id: 'gov-access-review',
    domain: 'governance',
    title: 'Access Review / Recertification',
    subtitle: 'Periodically verifying that everyone has only the access they need',
    difficulty: 'beginner',
    tags: ['access control', 'compliance', 'IAM'],
    definition:
      'Access review (also called access recertification or entitlement review) is the periodic process of having managers confirm that their team members\' access rights are still appropriate. It typically runs quarterly or annually, produces a report of access changes (revocations, approvals), and provides evidence for auditors that least-privilege is maintained over time.',
    whyItMatters:
      'People accumulate permissions as they change roles, join projects, and get temporary access that never gets revoked. Without reviews, access sprawl grows unchecked until a departing employee still has database access six months after leaving or a developer has admin rights to a production system from a project two years ago.',
    analogy:
      'Like renewing a driver\'s license — rather than issuing a license forever, you periodically verify that the holder still meets the criteria (correct role, no violations) and revoke or update it when things change. Licenses don\'t expire immediately; neither does access — both need periodic review.',
    soundsSmartToSay:
      '"Our access review process is entirely manual and takes six weeks — we should use an IGA (Identity Governance and Administration) tool to automate the workflow and reduce the campaign to a week."',
    commonConfusions: [
      'Access review is reactive; access provisioning governance is proactive. Access reviews clean up accumulated drift. Proper joiner/mover/leaver (JML) processes prevent drift from accumulating by removing access automatically when roles change.',
      'Rubber-stamp reviews are worse than no reviews — they create audit evidence of approval without actual review. Reviewers need context (what systems, what permissions, last login date) to make informed decisions.',
    ],
    relatedTerms: ['RBAC', 'Least Privilege', 'IAM', 'Joiner-Mover-Leaver'],
  },
  {
    id: 'gov-pen-testing',
    domain: 'governance',
    title: 'Penetration Testing',
    subtitle: 'Authorized hacking to find vulnerabilities before attackers do',
    difficulty: 'intermediate',
    tags: ['security testing', 'red team', 'offensive security'],
    definition:
      'Penetration testing (pentest) is a controlled, authorized simulation of cyberattacks to identify security vulnerabilities in systems, networks, and applications. Testers use the same techniques as real attackers — social engineering, exploit frameworks, privilege escalation — but with explicit permission and clearly defined scope. Results are documented in a report with risk ratings and remediation recommendations.',
    whyItMatters:
      'Vulnerability scanners find known vulnerabilities, but a skilled penetration tester finds logic flaws, chained vulnerabilities, and business-logic weaknesses that automated tools miss. SOC 2 Type II, PCI DSS, and ISO 27001 all require regular penetration testing. Enterprise customers increasingly request pentest reports in security questionnaires.',
    analogy:
      'Like hiring a locksmith to test your building\'s security by trying to break in — you give them permission, define which doors they can test, and they report every weakness they found. It\'s much better to learn your back door is unlocked from the friendly locksmith than from a real burglar.',
    soundsSmartToSay:
      '"We should run a pentest before we launch this new API — the developers have been building with the mindset of "how do I make this work," but we need someone with the mindset of "how do I make this fail."',
    commonConfusions: [
      'Pentest vs vulnerability scan: A vulnerability scan uses automated tools to find known vulnerabilities. A pentest is a hands-on, human-driven test that finds exploitable weaknesses, not just known CVEs.',
      'Black box vs white box vs grey box: Black box = testers get no prior information (like a real attacker). White box = testers get full access to source code and architecture. Grey box = partial knowledge (most common for realistic but efficient testing).',
    ],
    relatedTerms: ['Red Team', 'Vulnerability Management', 'Bug Bounty', 'OWASP'],
  },
  {
    id: 'gov-grc-platform',
    domain: 'governance',
    title: 'GRC Platform',
    subtitle: 'Governance, Risk, and Compliance management software',
    difficulty: 'intermediate',
    tags: ['GRC', 'compliance', 'risk', 'tools'],
    definition:
      'A GRC (Governance, Risk, and Compliance) platform centralizes the management of policies, controls, risks, and compliance requirements into a single tool. Tools like ServiceNow GRC, Archer, LogicGate, and Drata automate control evidence collection, map controls to multiple frameworks (SOC 2, ISO 27001, PCI DSS), track risk registers, and generate audit-ready reports.',
    whyItMatters:
      'Organizations subject to multiple compliance frameworks (SOC 2 + ISO 27001 + HIPAA simultaneously) face enormous overhead manually tracking evidence and controls across frameworks. GRC platforms eliminate duplicate effort by mapping a single control to multiple frameworks — "implement MFA" satisfies SOC 2 CC6.1, ISO 27001 A.9.4.2, and PCI DSS Requirement 8.3.',
    analogy:
      'Like a unified compliance dashboard for a multi-regulation business — instead of maintaining separate spreadsheets for each inspector (auditor), you have one system that automatically collects evidence (from cloud APIs, CI/CD tools, identity providers) and maps it to every applicable standard.',
    soundsSmartToSay:
      '"We\'re spending four months per year collecting SOC 2 evidence manually. A GRC platform with continuous control monitoring would automatically pull evidence from AWS Config, GitHub, and Okta — reducing our audit prep from months to weeks."',
    commonConfusions: [
      'GRC tools automate evidence collection but do not implement controls. The tool proves that MFA is enforced; you still need to configure Okta to enforce MFA. The tool and the control are different.',
      'Dedicated compliance automation tools (Drata, Vanta, Secureframe) target fast-growing startups with SOC 2 as their first framework. Traditional GRC platforms (Archer, ServiceNow) target enterprises managing dozens of frameworks and thousands of controls.',
    ],
    relatedTerms: ['SOC 2', 'ISO 27001', 'Risk Register', 'Continuous Compliance'],
  },
  {
    id: 'gov-sox',
    domain: 'governance',
    title: 'SOX Compliance',
    subtitle: 'Financial reporting controls for publicly traded companies',
    difficulty: 'intermediate',
    tags: ['compliance', 'financial', 'public company'],
    definition:
      'The Sarbanes-Oxley Act (SOX) requires publicly traded US companies to maintain accurate financial records and implement internal controls over financial reporting. Section 404 requires management to assess and auditors to attest to the effectiveness of internal controls annually. For IT, SOX means strict access controls, change management, and audit logging for systems that affect financial data.',
    whyItMatters:
      'SOX violations can result in CEO/CFO criminal liability and company delisting. IT teams are deeply affected because financial systems (ERP, databases, payroll) must have documented, audited controls — who can approve transactions, who can modify code deployed to financial systems, and who has admin access to financial databases.',
    analogy:
      'Like requiring an accountant\'s work to be reviewed by an independent auditor before it becomes a public record — SOX extends this principle to the systems and processes that generate financial data, ensuring the inputs to financial statements are as audited as the statements themselves.',
    soundsSmartToSay:
      '"Any change to our ERP system needs to go through the SOX change control process — IT General Controls (ITGCs) are what our financial auditors examine to determine whether the financial data from that system is reliable."',
    commonConfusions: [
      'SOX compliance is primarily about IT General Controls (ITGCs) for IT teams: access controls (segregation of duties), change management (approved and documented changes), and computer operations (backup, incident management).',
      'SOX applies to the systems that affect financial reporting — not every IT system. Scope your SOX controls carefully: the payroll system is in scope; the marketing website is not.',
    ],
    relatedTerms: ['IT General Controls', 'Segregation of Duties', 'Change Management', 'Financial Reporting'],
  },
  {
    id: 'gov-fedramp',
    domain: 'governance',
    title: 'FedRAMP',
    subtitle: 'Cloud security authorization for US federal government systems',
    difficulty: 'advanced',
    tags: ['government', 'cloud', 'authorization', 'compliance'],
    definition:
      'FedRAMP (Federal Risk and Authorization Management Program) is the US government\'s standardized approach to security assessment, authorization, and continuous monitoring for cloud services used by federal agencies. Cloud service providers must achieve FedRAMP authorization (Low, Moderate, or High impact level) before federal agencies can use their services.',
    whyItMatters:
      'If you sell software to US federal agencies, FedRAMP is mandatory — not optional. The authorization process takes 12-24 months and costs $1-3M for a large provider. FedRAMP Moderate (the most common) requires 325 security controls. Once authorized, the provider can be used by all federal agencies ("authorize once, use everywhere"), making FedRAMP a major market enabler.',
    analogy:
      'Like the TSA PreCheck approval process for cloud vendors — TSA Pre-Check is a rigorous background check that, once approved, grants expedited access through all US airports. FedRAMP is the security clearance that, once granted, opens the door to every federal agency without each agency doing its own security review.',
    soundsSmartToSay:
      '"We need to decide between FedRAMP In-Process status with a sponsoring agency or the path through the FedRAMP Marketplace independently — agency sponsorship is faster but limits us to that agency until we complete full authorization."',
    commonConfusions: [
      'FedRAMP authorization vs ATO: A FedRAMP authorization from the PMO makes a cloud service available to all agencies. An Agency ATO (Authority to Operate) is agency-specific. FedRAMP P-ATO replaces the need for individual agency ATOs.',
      'FISMA vs FedRAMP: FISMA (Federal Information Security Management Act) governs security for federal information systems built and operated by agencies. FedRAMP governs security for commercial cloud services used by agencies. Different scope, overlapping control frameworks.',
    ],
    relatedTerms: ['ATO', 'FISMA', 'NIST 800-53', 'Cloud Security'],
  },
  {
    id: 'gov-shadow-it',
    domain: 'governance',
    title: 'Shadow IT',
    subtitle: 'Unsanctioned technology outside IT\'s visibility and control',
    difficulty: 'beginner',
    tags: ['governance', 'risk', 'SaaS sprawl'],
    definition:
      'Shadow IT refers to technology systems, software, and services used within an organization without explicit approval from the IT department. This includes employees using personal cloud storage (Dropbox, Google Drive) for work files, teams adopting SaaS tools without procurement review, or developers spinning up cloud infrastructure outside the approved account.',
    whyItMatters:
      'Shadow IT creates security risks (data in unvetted systems), compliance violations (PII outside approved data stores), and operational risks (critical business data in personal accounts that leave with the employee). With SaaS tools available to any employee with a credit card, shadow IT has exploded — Gartner estimates enterprises use 3x more SaaS than IT officially knows about.',
    analogy:
      'Like employees using personal vehicles for company deliveries without telling fleet management — the company has no insurance coverage, no maintenance records, and no visibility into what is being delivered where. If the driver gets in an accident, the company is liable but had no control.',
    soundsSmartToSay:
      '"We should deploy a CASB (Cloud Access Security Broker) to discover shadow SaaS usage — I\'d rather have visibility and a fast-track approval process than a policy nobody follows because the approved alternatives take six weeks to procure."',
    commonConfusions: [
      'The response to shadow IT should be discoverability and fast legitimate paths, not prohibition. Employees use shadow IT because approved tools don\'t meet their needs or the approval process is too slow. Fixing the process reduces shadow IT more than security policies.',
      'Shadow IT is not inherently malicious. Most shadow IT use is well-intentioned — people solving real problems with available tools. The risk is in the lack of governance, not the intent.',
    ],
    relatedTerms: ['CASB', 'SaaS Governance', 'Data Loss Prevention', 'Cloud Security'],
  },
  {
    id: 'gov-finops',
    domain: 'governance',
    title: 'FinOps (Cloud Cost Governance)',
    subtitle: 'Bringing financial accountability to cloud spending',
    difficulty: 'intermediate',
    tags: ['cloud costs', 'FinOps', 'governance'],
    definition:
      'FinOps (Financial Operations) is the practice of bringing financial accountability and collaboration to cloud spending. It involves real-time cost visibility (tagging resources, chargeback/showback to teams), optimization (rightsizing, reserved instances, spot usage), and forecasting. It requires collaboration between engineering, finance, and product teams.',
    whyItMatters:
      'Cloud spend is the fastest-growing line item on most IT budgets, and without governance it grows uncontrolled. Teams spin up resources and forget them — idle EC2 instances, data transfer costs nobody owns, and over-provisioned databases. FinOps makes every team financially accountable for the infrastructure they consume.',
    analogy:
      'Like individual utility billing in a shared office building versus a flat monthly fee. When each tenant pays for their own electricity (chargeback), they turn off the lights. When electricity is covered in rent (no visibility), lights stay on all weekend.',
    soundsSmartToSay:
      '"We\'re spending $80k/month on compute and 40% of instances are oversized based on CloudWatch metrics. A FinOps review with rightsizing recommendations would cut that by $30k without any performance impact."',
    commonConfusions: [
      'FinOps is not just cost-cutting — it is about optimizing the value delivered per dollar spent. Sometimes the right answer is spending more on reliability improvements that reduce on-call costs and customer churn.',
      'Tagging governance is the foundation of FinOps. Without consistent tags (team, environment, project, cost center), you cannot allocate costs accurately, and the entire chargeback/showback model breaks down.',
    ],
    relatedTerms: ['Cloud Cost Optimization', 'Reserved Instances', 'Chargeback', 'Rightsizing'],
  },
  {
    id: 'gov-data-retention',
    domain: 'governance',
    title: 'Data Retention Policy',
    subtitle: 'How long to keep data and when to delete it',
    difficulty: 'beginner',
    tags: ['data governance', 'compliance', 'privacy'],
    definition:
      'A data retention policy defines how long different categories of data should be kept and when they must be deleted. Retention periods are driven by legal requirements (SOX requires financial records for 7 years, HIPAA requires certain records for 6 years), contractual obligations, and business need. Data held beyond its retention period creates unnecessary legal liability.',
    whyItMatters:
      'Keeping data longer than necessary creates compounding risk — old data is a liability in litigation discovery, breach exposure, and privacy regulations (GDPR\'s right to erasure conflicts with indefinite retention). Structured retention policies ensure you keep what you need, can demonstrate compliance, and routinely delete what you don\'t.',
    analogy:
      'Like a document shredding schedule in a law office — legal holds apply for active cases, standard business records are kept for 7 years, and personal correspondence is shredded after one year. Keeping everything forever wastes storage and creates discovery liability.',
    soundsSmartToSay:
      '"We need to reconcile our retention policy with our GDPR obligations — we have a 7-year audit log retention requirement from SOX and a right-to-erasure request from a European user. Those two requirements conflict, and we need legal guidance on how to handle it."',
    commonConfusions: [
      'Retention policy and backup policy are different. Backups protect against data loss within the retention window. Retention policy determines when data should be permanently deleted — including from backups.',
      'Legal holds override retention schedules. When litigation is reasonably anticipated, all potentially relevant data must be preserved regardless of the normal retention schedule. Automating deletion without a legal hold check is a litigation risk.',
    ],
    relatedTerms: ['GDPR', 'Legal Hold', 'Data Classification', 'Backup Policy'],
  },
  {
    id: 'gov-security-awareness',
    domain: 'governance',
    title: 'Security Awareness Training',
    subtitle: 'Making employees the first line of defense',
    difficulty: 'beginner',
    tags: ['training', 'phishing', 'human risk'],
    definition:
      'Security awareness training educates employees about cybersecurity risks and best practices — phishing recognition, password hygiene, safe browsing, reporting incidents, and social engineering tactics. It combines formal training (annual e-learning), simulated phishing campaigns, and just-in-time nudges to build security habits across the workforce.',
    whyItMatters:
      'Over 90% of successful cyberattacks start with a human action — a phishing click, a weak password, or sharing credentials. Technology controls can detect and block many attacks, but a well-trained workforce is the critical last layer of defense. SOC 2, ISO 27001, and HIPAA all require documented security awareness programs.',
    analogy:
      'Like mandatory safety training in a factory — hard hats, safety goggles, and lockout/tagout procedures do not replace training workers to recognize and avoid hazards. Equipment protects against known hazards; training enables workers to handle novel situations safely.',
    soundsSmartToSay:
      '"Simulated phishing campaigns are more effective than passive training — if 15% of employees click the simulated phishing link, we have a measurable baseline and can target the highest-risk groups with additional training."',
    commonConfusions: [
      'Annual compliance training checkboxes are not effective awareness programs. Continuous, role-specific training with simulated attacks and behavioral nudges is what actually changes behavior.',
      'Blame and shame after a phishing click backfires — employees hide future incidents rather than reporting them. A just-culture approach (training, not punishment, for first-time clicks) improves incident reporting rates.',
    ],
    relatedTerms: ['Phishing', 'Social Engineering', 'Compliance Training', 'Security Culture'],
  },
  {
    id: 'gov-tabletop-exercise',
    domain: 'governance',
    title: 'Tabletop Exercise',
    subtitle: 'Simulating an incident to test your response plan',
    difficulty: 'intermediate',
    tags: ['incident response', 'resilience', 'training'],
    definition:
      'A tabletop exercise is a structured, discussion-based simulation of an incident scenario (ransomware attack, data breach, natural disaster) where key stakeholders work through their response in a facilitated session. Participants make decisions, discover gaps, and identify improvements without the pressure of a real incident. It is the least expensive form of disaster recovery testing.',
    whyItMatters:
      'Most incident response plans fail their first real test because they exist only on paper. A tabletop exercise forces teams to discuss "what would we actually do?" — exposing assumptions, communication gaps, unclear decision authority, and missing contacts before a real crisis makes those gaps costly. Regulators and cyber insurers increasingly require evidence of tabletop exercises.',
    analogy:
      'Like a military war game — commanders simulate a battle scenario, make tactical decisions against a hypothetical enemy, and debrief on what worked and what failed without any real casualties. The learning transfers to real operations without the cost.',
    soundsSmartToSay:
      '"Our last tabletop revealed we don\'t have an out-of-band communication channel for when email and Slack are compromised — that\'s a simple gap to fix, but it would have been catastrophic to discover it during an actual ransomware event."',
    commonConfusions: [
      'Tabletop exercises are not full DR tests. A tabletop is a discussion; a DR test actually fails over systems. Both are needed: tabletops are cheap and frequent, DR tests are expensive but validate technical recovery.',
      'The most valuable output of a tabletop is not the exercise itself but the gap list generated. Assign owners and deadlines to every identified gap or the exercise produces no lasting improvement.',
    ],
    relatedTerms: ['Incident Response Plan', 'Business Continuity Planning', 'Disaster Recovery', 'Red Team'],
  },
  {
    id: 'gov-cis-controls',
    domain: 'governance',
    title: 'CIS Controls',
    subtitle: 'Prioritized security best practices from the Center for Internet Security',
    difficulty: 'intermediate',
    tags: ['security framework', 'controls', 'best practices'],
    definition:
      'The CIS (Center for Internet Security) Critical Security Controls are 18 prioritized security best practices designed to defend against the most common attack vectors. They are organized into three Implementation Groups (IG1 = basic hygiene for all organizations, IG2 = for organizations with more risk, IG3 = for sensitive/high-risk organizations). IG1 alone addresses roughly 85% of common attacks.',
    whyItMatters:
      'Unlike NIST or ISO frameworks, CIS Controls are ranked by impact — they tell you what to do first. For organizations without a dedicated security team, implementing CIS IG1 (18 controls) is the most cost-effective way to dramatically reduce risk. They also map to NIST CSF, SOC 2, and ISO 27001, making them a practical starting point for compliance.',
    analogy:
      'Like a triage list for securing a building — before installing biometric access readers (advanced), make sure all the doors lock (IG1: basic hygiene). The CIS controls prevent you from investing in sophisticated defenses while leaving obvious gaps unaddressed.',
    soundsSmartToSay:
      '"Before we pursue SOC 2, let\'s assess our CIS IG1 controls — email security, multi-factor authentication, patching, and endpoint protection. If we can\'t pass IG1, we\'re not ready for a SOC 2 audit."',
    commonConfusions: [
      'CIS Controls vs CIS Benchmarks: CIS Controls are high-level security practices. CIS Benchmarks are detailed technical configuration guidelines for specific systems (AWS, Windows, Kubernetes). Both are from CIS but serve different purposes.',
      'CIS Controls have evolved — CIS Controls v8 (2021) reorganized from 20 to 18 controls, shifting from device-centric to activity-centric. Older references to "Top 20 CIS Controls" reflect the v7 structure.',
    ],
    relatedTerms: ['NIST CSF', 'Security Baseline', 'Vulnerability Management', 'Asset Inventory'],
  },
  {
    id: 'gov-supply-chain-risk',
    domain: 'governance',
    title: 'Software Supply Chain Risk',
    subtitle: 'Managing security risk in third-party code and tools',
    difficulty: 'intermediate',
    tags: ['supply chain', 'open source', 'SBOM'],
    definition:
      'Software supply chain risk encompasses the security risks introduced by third-party code (open-source libraries, commercial components, development tools, CI/CD pipelines) incorporated into your software. Attackers increasingly target supply chain vectors — compromising npm packages, CI/CD systems, or build tools to inject malicious code into software at scale.',
    whyItMatters:
      'The SolarWinds attack (2020) compromised 18,000 organizations by injecting malware into a software update. Log4Shell affected millions of applications relying on a single widely-used Java library. Your application is only as secure as every library in your dependency tree. A Software Bill of Materials (SBOM) is now considered a security hygiene baseline.',
    analogy:
      'Like food safety for software — a restaurant is responsible for every ingredient it serves, not just the dishes it prepares. If a supplier delivers contaminated produce (malicious package), the restaurant is held accountable for making customers sick. Auditing your suppliers (dependency scanning) and knowing every ingredient (SBOM) is how you prevent contamination.',
    soundsSmartToSay:
      '"We should generate an SBOM as part of every build and check it against the CISA Known Exploited Vulnerabilities catalog — we need to know what\'s in our software before regulators or attackers tell us."',
    commonConfusions: [
      'An SBOM lists what\'s in your software; it does not automatically make it secure. An SBOM is the inventory; you still need vulnerability scanning against that inventory to identify risks.',
      'Supply chain risk is not just open-source libraries. Build pipelines (GitHub Actions, Jenkins), developer tools, code signing processes, and software distribution channels are all supply chain attack vectors.',
    ],
    relatedTerms: ['SBOM', 'Dependency Scanning', 'SolarWinds', 'DevSecOps'],
  },
  {
    id: 'gov-privacy-impact-assessment',
    domain: 'governance',
    title: 'Privacy Impact Assessment',
    subtitle: 'Evaluating privacy risks before building or changing systems',
    difficulty: 'intermediate',
    tags: ['privacy', 'GDPR', 'design'],
    definition:
      'A Privacy Impact Assessment (PIA), also called a Data Protection Impact Assessment (DPIA) under GDPR, is a structured evaluation of how a new system or process collects, uses, and protects personal data — conducted before the system is built or changed. It identifies privacy risks, evaluates their severity, and documents the controls applied to mitigate them.',
    whyItMatters:
      'GDPR mandates DPIAs for high-risk processing activities (large-scale monitoring, sensitive data processing, systematic profiling). Beyond compliance, PIAs catch privacy design failures early — when they are cheap to fix — rather than after launch when re-architecture is expensive and data regulators are involved.',
    analogy:
      'Like a structural engineering review before construction — a civil engineer evaluates whether the building design can support the intended load before breaking ground. A PIA evaluates whether the data design can support privacy requirements before writing the first line of code.',
    soundsSmartToSay:
      '"We need to run a DPIA before we launch this behavioral analytics feature — we\'re processing location data at scale, which triggers the GDPR Article 35 requirement for a formal assessment."',
    commonConfusions: [
      'A DPIA is required under GDPR only for "high-risk" processing — but many organizations conduct PIAs for all new systems involving personal data as a best practice, even when not legally required.',
      'A PIA is not a one-time document. When the system changes significantly (new data collected, new third parties, new use cases), the PIA should be updated or a new assessment conducted.',
    ],
    relatedTerms: ['GDPR', 'Data Classification', 'Privacy by Design', 'Data Processing Agreement'],
  },
  {
    id: 'gov-ai-governance',
    domain: 'governance',
    title: 'AI Governance',
    subtitle: 'Policies and controls for responsible AI deployment',
    difficulty: 'intermediate',
    tags: ['AI', 'governance', 'risk', 'compliance'],
    definition:
      'AI governance encompasses the policies, processes, and controls that ensure AI systems are developed and deployed responsibly — addressing bias and fairness, explainability, data privacy, intellectual property, model risk, and regulatory compliance. It includes AI use-case approval processes, model cards, bias testing, and monitoring for model drift in production.',
    whyItMatters:
      'The EU AI Act (2024) classifies AI systems by risk level and mandates specific controls for high-risk applications (hiring decisions, credit scoring, medical diagnosis). Beyond regulation, AI systems fail in novel ways — bias encoded in training data, hallucinations in LLMs, unexpected behavior at distribution shift. Without governance, organizations expose themselves to reputational, legal, and operational risk.',
    analogy:
      'Like pharmaceutical drug approval — you do not bring a new drug to market by testing it internally and shipping immediately. It goes through efficacy testing (does it work?), safety trials (what are the harms?), regulatory review (does it meet standards?), and post-market surveillance (how does it perform in the real world?). AI governance applies the same rigor to high-stakes AI deployments.',
    soundsSmartToSay:
      '"Before we put this AI model into our hiring workflow, we need a bias audit — if the model was trained on historical hiring decisions, it may have encoded historical biases that could expose us to EEOC violations."',
    commonConfusions: [
      'AI governance is not the same as AI safety (the long-term existential risk field). Enterprise AI governance focuses on near-term risks: bias, privacy, accuracy, IP, and regulatory compliance of today\'s AI deployments.',
      'Model risk management from financial services is the closest analogue for AI governance. Banks have managed model risk (algorithmic trading models, credit scoring models) for decades — their frameworks (SR 11-7) are a useful starting point for enterprise AI governance.',
    ],
    relatedTerms: ['EU AI Act', 'Model Risk', 'Responsible AI', 'Bias Testing'],
  },
  {
    id: 'gov-cyber-insurance',
    domain: 'governance',
    title: 'Cyber Insurance',
    subtitle: 'Financial protection against cyber incident costs',
    difficulty: 'intermediate',
    tags: ['risk transfer', 'insurance', 'financial risk'],
    definition:
      'Cyber insurance (also called cyber liability insurance) transfers financial risk of cyber incidents — ransomware payments, breach notification costs, legal liability, business interruption losses, and regulatory fines — to an insurer. Policies cover first-party losses (your own costs) and third-party liability (claims from customers or partners harmed by your breach). Premium pricing and coverage limits are determined by the organization\'s security controls.',
    whyItMatters:
      'The average cost of a data breach in 2024 exceeded $4.5M. Ransomware payments average $1-2M and recovery costs often exceed $10M. Cyber insurance does not prevent incidents but ensures they do not bankrupt the organization. Increasingly, underwriters require specific controls (MFA, EDR, backup isolation, incident response plans) as prerequisites for coverage.',
    analogy:
      'Like fire insurance for a building — it does not prevent fires (that\'s the sprinkler system), but it ensures the business can rebuild after a fire. Insurers set requirements (fire codes, sprinklers, alarm systems) for coverage, and the requirements are reasonable safeguards that reduce both the insurer\'s and building owner\'s exposure.',
    soundsSmartToSay:
      '"Our cyber insurance renewal questionnaire asks whether we have MFA on all remote access and email — if we answer no, we\'ll either lose coverage or see premiums triple. This is now a business driver for our MFA rollout."',
    commonConfusions: [
      'Cyber insurance does not cover all cyber losses. Many policies exclude acts of war (NotPetya was initially contested as a nation-state act), known vulnerabilities not patched within a certain period, and insider threats. Read the exclusions carefully.',
      'Having cyber insurance does not reduce the need for security controls — underwriters increasingly require them, and rates increase dramatically for organizations with poor controls. Insurance is a last resort, not a substitute for security.',
    ],
    relatedTerms: ['Business Continuity Planning', 'Incident Response', 'Risk Management', 'Ransomware'],
  },
  {
    id: 'gov-segregation-of-duties',
    domain: 'governance',
    title: 'Segregation of Duties',
    subtitle: 'No single person controls an entire process end to end',
    difficulty: 'beginner',
    tags: ['access control', 'fraud prevention', 'SOX'],
    definition:
      'Segregation of Duties (SoD) is the principle that no single individual should have end-to-end control of a sensitive process or transaction — splitting tasks between multiple people to prevent fraud and error. In IT, this means the developer who writes the code should not also be the one who approves and deploys it to production, and the person who creates a vendor should not also approve payments to that vendor.',
    whyItMatters:
      'Without SoD, a single malicious or negligent employee can commit fraud, cause data loss, or make unauthorized changes with no check. SOX compliance specifically requires SoD for financial processes — a single employee with access to both create invoices and approve payments is a material control weakness that auditors flag.',
    analogy:
      'Like the two-person rule for nuclear launch authority — no single person, regardless of rank, can launch a nuclear weapon alone. A second authorized person must be present and concur. The check is not about distrust of individuals; it is about removing the possibility of unilateral action for high-consequence decisions.',
    soundsSmartToSay:
      '"Our developer team currently has deploy-to-production access for their own code — that\'s an SoD violation for SOX. We need a separate deployment approver or an automated deploy pipeline that neither the developer nor ops team can bypass."',
    commonConfusions: [
      'SoD is not the same as least privilege. Least privilege limits what a single person can do. SoD distributes a single process across multiple people. You need both: least privilege so people only have what they need, SoD so critical processes require multiple parties.',
      'SoD conflicts in small teams are real and common. A startup of five engineers cannot truly segregate all duties. The compensating control is enhanced monitoring, logging, and regular independent review of privileged actions.',
    ],
    relatedTerms: ['RBAC', 'Least Privilege', 'SOX', 'Four-Eyes Principle'],
  },
];
