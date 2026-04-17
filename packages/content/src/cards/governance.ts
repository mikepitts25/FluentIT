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
];
