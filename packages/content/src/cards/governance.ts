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
      'ISO 27001 is an international standard that specifies requirements for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS). It provides a systematic approach to managing sensitive information through risk assessment, security controls, and ongoing monitoring. Organizations can be formally certified against ISO 27001 by an accredited third-party auditor.',
    whyItMatters:
      'ISO 27001 certification is often a prerequisite for doing business internationally, especially in Europe and Asia-Pacific markets. It demonstrates to customers, partners, and regulators that your organization takes a structured, risk-based approach to information security rather than treating it as an afterthought.',
    analogy:
      'Like getting a building up to code — an architect (security team) designs to meet structural standards (ISO 27001 controls), a building inspector (auditor) certifies compliance, and you must maintain the building over time (continuous improvement) or lose your certificate of occupancy.',
    soundsSmartToSay:
      '"ISO 27001 gives us the ISMS framework, but the real value is in Annex A controls — we should map our existing SOC 2 controls to Annex A to identify gaps rather than starting from scratch."',
    commonConfusions: [
      'ISO 27001 vs SOC 2: ISO 27001 is a certification (you pass or fail) recognized internationally. SOC 2 is an attestation report (opinion from an auditor) primarily used in North America. Many mature organizations pursue both.',
      'ISO 27001 vs ISO 27002: ISO 27001 defines the requirements for an ISMS. ISO 27002 provides detailed implementation guidance for the security controls listed in Annex A. Think of 27001 as the "what" and 27002 as the "how."',
      'Certification is not one-and-done — ISO 27001 requires annual surveillance audits and a full recertification audit every three years to maintain the credential.',
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
      'Business Continuity Planning (BCP) is the process of creating systems, procedures, and policies that ensure critical business functions continue operating during and after a significant disruption — whether that is a natural disaster, cyberattack, or major infrastructure failure. It includes business impact analysis, recovery strategies, and regular testing of continuity plans.',
    whyItMatters:
      'Downtime costs enterprises thousands to millions of dollars per hour. BCP forces organizations to identify which systems and processes are truly critical, define acceptable recovery times (RTO) and data loss thresholds (RPO), and build resilience before a disaster — not during one.',
    analogy:
      'Like a hospital backup generator — the hospital (business) identifies life-critical systems (ICU, OR), installs backup power (recovery strategy), and tests the generator monthly (BCP drill) so that when the grid fails, patients stay alive. You would never wait for a blackout to find out if the generator works.',
    soundsSmartToSay:
      '"Our BCP needs to define RTOs per business function, not per system — the CFO cares that payroll runs on time, not whether the specific VM hosting it recovers in two hours."',
    commonConfusions: [
      'BCP vs DR (Disaster Recovery): BCP is the broader business strategy for maintaining operations. DR is the technical subset focused on recovering IT systems and data. DR is one component of a BCP, not a synonym.',
      'BCP is not just an IT responsibility — it covers people, processes, facilities, and supply chains. IT owns the disaster recovery plan, but the business owns the continuity plan.',
      'Testing matters more than the document: An untested BCP is just a wish list. Organizations should run tabletop exercises, simulated failovers, and full-scale DR tests at least annually.',
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
      'Without audit trails, you cannot answer basic security questions — "Who accessed this data?" "Who approved this change?" "When was this configuration modified?" Every compliance framework (SOC 2, ISO 27001, HIPAA) requires audit logging, and forensic investigations are impossible without them.',
    analogy:
      'Like a security camera system in a building — it does not prevent theft by itself, but it records who entered which rooms, when, and what they carried out. When something goes missing, you can rewind the footage. If the camera has gaps or can be edited, it is worthless as evidence.',
    soundsSmartToSay:
      '"Our audit logs need to be written to immutable storage with separate access controls — if an attacker can delete the audit trail, they can cover their tracks and we lose all forensic capability."',
    commonConfusions: [
      'Audit logs vs application logs: Application logs are for debugging (stack traces, performance metrics). Audit logs are for accountability (user actions, access events, configuration changes). They serve different audiences and have different retention requirements.',
      'Immutability is essential — audit logs that can be modified or deleted by administrators are not trustworthy for compliance or forensics. Use write-once storage or centralized SIEM systems with separate access controls.',
      'Retention periods vary by regulation: HIPAA requires 6 years, SOX requires 7 years, GDPR may conflict by requiring deletion. Know your requirements before setting retention policies.',
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
      'A CMDB (Configuration Management Database) is a centralized repository that stores information about all significant IT assets (Configuration Items or CIs) and the relationships between them. CIs include servers, applications, databases, network devices, cloud resources, and the dependencies connecting them. The CMDB serves as the single source of truth for IT infrastructure.',
    whyItMatters:
      'When a server goes down, you need to instantly know what applications depend on it, who owns them, and what business processes are affected. Without a CMDB, incident response relies on tribal knowledge that walks out the door when employees leave. It is also essential for change management — you cannot assess the blast radius of a change without knowing what depends on what.',
    analogy:
      'Like a wiring diagram for a building — an electrician (IT ops) needs to know which circuit breaker (server) powers which outlets (applications) before flipping a switch (making a change). Without the diagram, every maintenance task is a guessing game that risks knocking out power to the wrong floor.',
    soundsSmartToSay:
      '"A CMDB is only valuable if it stays current — we should auto-populate CIs from our cloud provider APIs and container orchestration platform rather than relying on manual data entry that goes stale within weeks."',
    commonConfusions: [
      'A CMDB is not an asset inventory — an asset inventory tracks ownership and cost (finance perspective). A CMDB tracks configuration and relationships (operations perspective). They overlap but serve different purposes.',
      'CMDBs fail when treated as a one-time project. The data decays rapidly if not continuously updated through automated discovery and integration with CI/CD pipelines, cloud APIs, and monitoring tools.',
      'CI (Configuration Item) in CMDB is unrelated to CI (Continuous Integration) in DevOps — same acronym, completely different concepts. Context determines meaning.',
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
      'Zero Trust Compliance is the practice of aligning a Zero Trust Architecture — where no user, device, or network segment is inherently trusted — with regulatory and audit requirements. It involves mapping zero trust principles (verify explicitly, use least privilege, assume breach) to specific compliance controls, and providing auditors with evidence that continuous verification replaces traditional perimeter-based security.',
    whyItMatters:
      'Traditional compliance models assume a trusted internal network with perimeter defenses, but zero trust eliminates that assumption. Organizations adopting zero trust must demonstrate to auditors that continuous authentication, micro-segmentation, and dynamic access policies satisfy the same control objectives — often exceeding them. Failing to bridge this gap means either audit findings or abandoning modern security architecture.',
    analogy:
      'Like upgrading from a castle-with-moat security model to an airport security model, then proving to regulators that the new approach is actually safer. In a castle (perimeter security), once you cross the moat you roam freely. In an airport (zero trust), every person is checked at every gate, every boarding pass is verified, and every bag is scanned — but your auditor\'s checklist was written for castles.',
    soundsSmartToSay:
      '"Our zero trust implementation actually gives us stronger compliance evidence — we have continuous verification logs at every access point instead of annual attestations that a firewall rule exists."',
    commonConfusions: [
      'Zero trust is not a product you buy — it is an architectural principle. Vendors sell "zero trust solutions," but real zero trust requires rethinking identity, network, device, and workload trust across the entire stack.',
      'Zero trust does not mean zero access — it means every access request is verified based on identity, device posture, location, and behavior. Authorized users still get seamless access; the verification happens behind the scenes.',
      'Compliance frameworks are catching up: NIST SP 800-207 defines zero trust architecture, and FedRAMP now references it. But many auditors still use perimeter-based mental models, so teams must translate zero trust controls into traditional control language.',
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
      'SLI (Service Level Indicator) is a metric that measures service behavior, such as latency or error rate. SLO (Service Level Objective) is an internal target for that metric, such as "99.9% of requests under 200ms." SLA (Service Level Agreement) is a contractual commitment to customers with consequences (usually financial penalties) if the SLO is breached. Together they form a hierarchy: SLIs feed SLOs, and SLOs underpin SLAs.',
    whyItMatters:
      'Without SLIs, you cannot objectively measure reliability. Without SLOs, engineering has no target and either over-invests in reliability (wasting resources) or under-invests (degrading user experience). Without SLAs, customers have no enforceable guarantee. Getting this hierarchy right aligns engineering effort with business commitments.',
    analogy:
      'Like a shipping company: the SLI is tracking data showing actual delivery times, the SLO is the internal goal to deliver 99% of packages within 2 days, and the SLA is the customer-facing guarantee of 3-day delivery with a refund if missed. The SLA is deliberately looser than the SLO to provide a safety margin.',
    soundsSmartToSay:
      '"Our SLO should be tighter than our SLA — if we target 99.95% internally but promise 99.9% externally, we have an error budget cushion before we breach the contractual commitment."',
    commonConfusions: [
      'SLO vs SLA: An SLO is an internal engineering target with no contractual penalties. An SLA is an external legal commitment. You should always set your SLO tighter than your SLA to avoid breaching customer contracts.',
      'Not everything needs an SLA — internal services and non-revenue-critical systems typically have SLOs but no SLAs. Reserve SLAs for customer-facing contractual commitments.',
      '"Five nines" (99.999%) sounds impressive but allows only 5.26 minutes of downtime per year. Each additional nine is exponentially more expensive. Most services do not need — and cannot achieve — five nines.',
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
      'Your security is only as strong as your weakest vendor. Major breaches — Target, SolarWinds, MOVEit — originated through third-party vendors. Regulators hold you responsible for your vendors\' data handling, not the vendors themselves. A robust VRM program prevents you from inheriting risks you did not know you had.',
    analogy:
      'Like vetting a subcontractor on a construction project — the general contractor (your company) is liable if the electrician (vendor) does shoddy wiring (has a security breach) that burns down the building (compromises customer data). You check their credentials before hiring, inspect their work during the project, and maintain insurance in case something goes wrong.',
    soundsSmartToSay:
      '"We need to tier our vendors by data access and criticality — a vendor processing customer PII gets a full security assessment, while a vendor supplying office furniture gets a basic financial check. Not every vendor needs the same scrutiny."',
    commonConfusions: [
      'Vendor risk assessment is not a one-time event — vendors\' security postures change, and a vendor that passed assessment two years ago may have had turnover, acquisitions, or breaches since. Continuous monitoring and periodic reassessment are essential.',
      'SOC 2 reports are a starting point, not a finish line — a vendor having SOC 2 does not mean they are secure. Read the report for exceptions, qualified opinions, and whether the scope covers the services you actually use.',
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
      'The NIST Cybersecurity Framework (CSF) is a voluntary framework developed by the National Institute of Standards and Technology that organizes cybersecurity activities into six core functions: Govern, Identify, Protect, Detect, Respond, and Recover. It provides a common language for managing cybersecurity risk and allows organizations to assess their current maturity, set target profiles, and prioritize improvements.',
    whyItMatters:
      'NIST CSF gives organizations a structured, non-prescriptive way to evaluate and improve their cybersecurity posture without mandating specific technologies. It is widely adopted across industries and increasingly referenced by regulators and cyber insurance providers. Using NIST CSF enables conversations between technical teams and executives in a shared vocabulary, making security investment decisions more rational and defensible.',
    analogy:
      'Like a fitness assessment framework — instead of prescribing a specific workout (technology), it defines fitness categories (Identify, Protect, Detect, Respond, Recover), helps you measure your current level in each, set target goals, and track progress. A marathon runner and a weightlifter use the same framework but arrive at very different programs.',
    soundsSmartToSay:
      '"Let\'s map our current controls to NIST CSF and build a target profile — that gives us a gap analysis we can prioritize by risk and present to leadership as a phased investment roadmap rather than an all-or-nothing security ask."',
    commonConfusions: [
      'NIST CSF vs NIST 800-53: CSF is a high-level risk management framework for any organization. NIST 800-53 is a detailed catalog of hundreds of specific security controls primarily for US federal agencies. CSF references 800-53 controls but is far more accessible and flexible.',
      'NIST CSF 2.0 (released 2024) added "Govern" as a sixth core function, emphasizing that cybersecurity governance — strategy, roles, policies, and oversight — underpins all other functions. References to five functions are outdated.',
      'The framework is voluntary for private sector — but in practice, cyber insurance questionnaires, customer security assessments, and regulatory guidance increasingly map to NIST CSF, making it a de facto requirement for many organizations.',
    ],
    relatedTerms: ['NIST 800-53', 'Risk Framework', 'CIS Controls', 'Cyber Resilience'],
  },
  {
    id: 'gov-iso27001',
    domain: 'governance',
    title: 'ISO 27001',
    subtitle: 'The international standard for information security management',
    difficulty: 'beginner',
    tags: ['certification', 'security', 'standards'],
    definition:
      'ISO 27001 is an international standard that specifies requirements for establishing, implementing, and maintaining an Information Security Management System (ISMS). Certification requires an external audit proving that your security controls, risk management, and continuous improvement processes meet the standard.',
    whyItMatters:
      'ISO 27001 certification is often a prerequisite for enterprise sales, especially in Europe and Asia. It signals to customers that your organization has a systematic approach to protecting information — not just ad-hoc security measures.',
    analogy:
      'Like ISO 9001 (quality management) but for information security. Just as a factory gets ISO 9001 to prove its manufacturing processes are consistent, a tech company gets ISO 27001 to prove its security processes are systematic and auditable.',
    soundsSmartToSay:
      '"ISO 27001 gives us the management framework — we still need to map specific technical controls to something like NIST 800-53 or CIS Controls for implementation guidance."',
    commonConfusions: [
      'ISO 27001 vs SOC 2: ISO 27001 is a certification (pass/fail audit against the standard). SOC 2 is an attestation report (auditor describes what they found). ISO 27001 is more common internationally; SOC 2 is dominant in the US SaaS market.',
      'ISO 27001 vs ISO 27002: ISO 27001 defines the ISMS requirements (what you must do). ISO 27002 provides guidance on security controls (how to do it). You certify against 27001, and use 27002 as an implementation reference.',
    ],
    relatedTerms: ['SOC 2', 'ISMS', 'Risk Assessment', 'Security Controls'],
  },
  {
    id: 'gov-bcp',
    domain: 'governance',
    title: 'Business Continuity Planning',
    subtitle: 'Keep the business running when systems fail',
    difficulty: 'intermediate',
    tags: ['disaster', 'resilience', 'planning'],
    definition:
      'Business Continuity Planning (BCP) is the process of defining how an organization will continue operating during and after a major disruption — natural disaster, ransomware attack, cloud outage, or pandemic. It covers critical business functions, recovery time objectives (RTOs), and recovery point objectives (RPOs).',
    whyItMatters:
      'Downtime costs money — from $5,000/minute for small businesses to $300,000/minute for financial services. BCP ensures the organization has tested plans, not just theoretical procedures, for maintaining critical operations during the worst-case scenario.',
    analogy:
      'Like a fire evacuation plan for your business operations. You do not wait for a fire to figure out how to get everyone out safely. BCP identifies the exits (recovery procedures), assigns roles (incident commanders), and runs drills (tabletop exercises) before disaster strikes.',
    soundsSmartToSay:
      '"Our BCP needs to be tested, not just written — a tabletop exercise that simulates a ransomware attack will reveal gaps that look fine on paper but fail under pressure."',
    commonConfusions: [
      'BCP vs DR (Disaster Recovery): DR is the technical plan for recovering IT systems (restore from backup, failover to secondary site). BCP is the broader business plan that includes DR plus manual workarounds, communication plans, and business process continuity.',
      'RTO vs RPO: RTO (Recovery Time Objective) is how long you can afford to be down. RPO (Recovery Point Objective) is how much data you can afford to lose. A 4-hour RTO means you need systems back within 4 hours. A 1-hour RPO means you need backups at least every hour.',
    ],
    relatedTerms: ['Disaster Recovery', 'RTO/RPO', 'Incident Response', 'Ransomware'],
  },
  {
    id: 'gov-audit-trail',
    domain: 'governance',
    title: 'Audit Trail',
    subtitle: 'A tamper-evident log of who did what and when',
    difficulty: 'beginner',
    tags: ['compliance', 'logging', 'accountability'],
    definition:
      'An audit trail is a chronological, tamper-resistant log of every significant action in a system — user logins, configuration changes, data access, approval workflows, and privilege escalations. It provides accountability and is required by virtually every compliance framework.',
    whyItMatters:
      'When an incident happens, the first question is "who changed what?" Without an audit trail, you cannot answer that question — and you cannot pass a SOC 2, PCI-DSS, HIPAA, or GDPR audit without one.',
    analogy:
      'Like CCTV footage for your IT systems. You might not watch the footage every day, but when something goes wrong — a data breach, an unauthorized change, a compliance question — the footage is the evidence that proves what happened.',
    soundsSmartToSay:
      '"Our audit logs need to be immutable and stored separately from the systems they monitor — if an attacker compromises the system, they should not be able to cover their tracks by deleting the audit trail."',
    commonConfusions: [
      'Audit trail vs application logs: Application logs are for debugging (errors, performance). Audit trails are for accountability (who did what). They may live in the same logging system but serve different purposes and have different retention requirements.',
      'Audit trail completeness: An audit trail that logs 90% of actions is not compliant — it must capture every significant action. Gaps create plausible deniability and fail audits.',
    ],
    relatedTerms: ['Compliance', 'SIEM', 'Access Control', 'Data Governance'],
  },
  {
    id: 'gov-cmdb',
    domain: 'governance',
    title: 'CMDB',
    subtitle: 'Configuration Management Database',
    difficulty: 'intermediate',
    tags: ['itil', 'inventory', 'configuration'],
    definition:
      'A CMDB is a centralized database that tracks all IT assets (servers, applications, network devices, cloud resources) and their relationships. Each entry is a Configuration Item (CI) with attributes like owner, environment, dependencies, and status — providing a map of your entire IT landscape.',
    whyItMatters:
      'You cannot manage what you cannot see. A CMDB answers critical questions during incidents ("what depends on this server?"), change management ("what will break if we upgrade this?"), and audit ("what assets store PII?"). Without it, these answers live in tribal knowledge.',
    analogy:
      'Like a wiring diagram for your entire IT environment. An electrician needs to know which circuits connect to which outlets before making changes. A CMDB shows which servers connect to which databases and which applications depend on which services.',
    soundsSmartToSay:
      '"Our CMDB is only useful if it reflects reality — we need to auto-discover assets from AWS, Azure, and our on-prem network and reconcile them weekly, not rely on manual updates."',
    commonConfusions: [
      'CMDB vs asset management: Asset management tracks physical and financial information (purchase date, warranty, cost center). A CMDB tracks configuration and relationships (dependencies, environment, owner). Many tools do both.',
      'CMDB accuracy is the hard part: A CMDB that is 80% accurate can be worse than no CMDB — people make decisions based on wrong data. Auto-discovery, reconciliation, and owner accountability are essential to keep it current.',
    ],
    relatedTerms: ['ITIL', 'Change Management', 'Configuration Management', 'Asset Management'],
  },
  {
    id: 'gov-zero-trust-compliance',
    domain: 'governance',
    title: 'Zero Trust Compliance',
    subtitle: 'Compliance in a perimeterless world',
    difficulty: 'advanced',
    tags: ['zero-trust', 'compliance', 'architecture'],
    definition:
      'Zero Trust Compliance aligns zero trust security principles — verify explicitly, use least privilege, assume breach — with regulatory requirements. It involves mapping zero trust controls (identity verification, microsegmentation, continuous monitoring) to compliance frameworks like SOC 2, HIPAA, PCI-DSS, and FedRAMP.',
    whyItMatters:
      'Compliance frameworks were written for perimeter-based architectures — "segment the network," "control access points." Zero Trust achieves the same outcomes differently (identity-based controls, microsegmentation), and organizations need to demonstrate compliance in this new model.',
    analogy:
      'Like building codes being updated for new construction methods. When buildings moved from brick to steel, the codes needed to adapt — the safety goals stayed the same, but how you prove compliance changed. Zero Trust is the new construction method for security.',
    soundsSmartToSay:
      '"Our PCI audit scope shrinks dramatically with Zero Trust — if every transaction is authenticated and encrypted at the application layer, network-level segmentation becomes less critical for compliance."',
    commonConfusions: [
      'Zero Trust does not automatically mean compliant: Zero Trust architecture provides strong security controls, but you still need to document, audit, and prove those controls satisfy specific compliance requirements.',
      'Not all compliance frameworks recognize Zero Trust yet: Some auditors still expect traditional network-based controls. The NIST Zero Trust Architecture (SP 800-207) provides authoritative guidance for mapping Zero Trust to compliance.',
    ],
    relatedTerms: ['Zero Trust', 'SOC 2', 'NIST 800-207', 'Microsegmentation'],
  },
  {
    id: 'gov-sla-slo-sli',
    domain: 'governance',
    title: 'SLA / SLO / SLI',
    subtitle: 'The three levels of service reliability',
    difficulty: 'beginner',
    tags: ['reliability', 'metrics', 'agreements'],
    definition:
      'SLIs (Service Level Indicators) are metrics that measure service reliability (latency, error rate, availability). SLOs (Service Level Objectives) are internal targets for those metrics (99.9% availability). SLAs (Service Level Agreements) are contractual commitments with penalties if SLOs are violated.',
    whyItMatters:
      'SLIs/SLOs/SLAs create a shared language between engineering, product, and business. Engineering knows what reliability means quantitatively. Product knows the cost of downtime. Business knows what to promise customers. Without them, "reliable" is vague.',
    analogy:
      'SLI is the speedometer reading. SLO is the speed limit you set for yourself. SLA is the speed limit posted by law with a fine for violations. You measure (SLI), set internal goals (SLO), and make external commitments (SLA) — in that order.',
    soundsSmartToSay:
      '"Our SLO should be stricter than our SLA — if we only alert when we breach the SLA, we have no buffer. We need the SLO to give us warning time."',
    commonConfusions: [
      'SLO vs SLA: An SLO is an internal engineering target with no contractual consequences. An SLA is a business commitment with financial penalties. Your SLO should be tighter than your SLA so you catch issues before they become contractual violations.',
      'More nines is not always better: 99.99% availability allows only 4.3 minutes of downtime per month. The engineering cost to go from 99.9% to 99.99% is enormous. Set SLOs based on what users actually need, not vanity.',
    ],
    relatedTerms: ['Error Budget', 'SRE', 'Uptime', 'Observability'],
  },
  {
    id: 'gov-vendor-risk',
    domain: 'governance',
    title: 'Vendor Risk Management',
    subtitle: 'Assess the risk of your third-party dependencies',
    difficulty: 'intermediate',
    tags: ['third-party', 'risk', 'assessment'],
    definition:
      'Vendor risk management is the process of evaluating, monitoring, and mitigating risks introduced by third-party vendors — SaaS providers, cloud platforms, contractors, and open-source libraries. It includes security questionnaires, SOC 2 report reviews, contract terms, and ongoing monitoring.',
    whyItMatters:
      'Your security is only as strong as your weakest vendor. A breach at a SaaS provider you share data with is effectively your breach — customers blame you, regulators audit you, and your data is exposed. Most major breaches in recent years involved a third-party vector.',
    analogy:
      'Like checking a restaurant\'s health inspection score before eating there. You do not just trust that the kitchen is clean — you verify. Vendor risk management is the health inspection for every company you share data with or depend on.',
    soundsSmartToSay:
      '"We need a vendor tiering model — tier 1 vendors that process customer data get a full security review and SOC 2 requirement. Tier 3 vendors that handle no sensitive data get a lighter review."',
    commonConfusions: [
      'Vendor risk management vs procurement: Procurement handles pricing and contracts. Vendor risk management assesses security, compliance, and operational risks. Both should happen before signing, but they are different disciplines.',
      'SOC 2 report review is not rubber-stamping: Reading a SOC 2 report means checking the auditor\'s exceptions, understanding the scope of the audit, and verifying that the controls are relevant to how you use the vendor — not just confirming the report exists.',
    ],
    relatedTerms: ['SOC 2', 'Third-Party Risk', 'Security Questionnaire', 'Supply Chain'],
  },
  {
    id: 'gov-nist-csf',
    domain: 'governance',
    title: 'NIST Cybersecurity Framework',
    subtitle: 'The five pillars of cyber risk management',
    difficulty: 'advanced',
    tags: ['framework', 'risk', 'federal'],
    definition:
      'The NIST Cybersecurity Framework (CSF) organizes security activities into five functions: Identify (know your assets and risks), Protect (implement safeguards), Detect (monitor for threats), Respond (contain incidents), and Recover (restore operations). Version 2.0 added Govern as a sixth function.',
    whyItMatters:
      'NIST CSF is the most widely adopted cybersecurity framework globally. It provides a common language for assessing cyber maturity, prioritizing investments, and communicating risk to executive leadership — without prescribing specific technologies.',
    analogy:
      'Like a fitness framework with five categories: diet (Identify), exercise (Protect), health monitoring (Detect), first aid (Respond), and rehabilitation (Recover). The framework tells you what areas to cover; you choose the specific activities based on your situation.',
    soundsSmartToSay:
      '"We should map our current controls to NIST CSF to identify gaps — especially in Detect and Respond, which are usually underfunded compared to Protect."',
    commonConfusions: [
      'NIST CSF vs NIST 800-53: CSF is a high-level risk management framework (5–6 functions, ~100 subcategories). NIST 800-53 is a detailed catalog of ~1,000 specific security controls. CSF tells you what to address; 800-53 tells you how.',
      'The framework is voluntary for private sector — but in practice, cyber insurance questionnaires, customer security assessments, and regulatory guidance increasingly map to NIST CSF, making it a de facto requirement for many organizations.',
    ],
    relatedTerms: ['NIST 800-53', 'Risk Framework', 'CIS Controls', 'Cyber Resilience'],
  },
];
