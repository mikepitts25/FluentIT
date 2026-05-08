import type { Card } from '../types';

export const cyberCards: Card[] = [
  {
    id: 'cyber-siem',
    domain: 'cyber',
    title: 'SIEM',
    subtitle: 'Security Information and Event Management',
    difficulty: 'beginner',
    tags: ['logging', 'monitoring', 'detection'],
    definition:
      'A SIEM aggregates and correlates security log data from across your entire environment — servers, firewalls, endpoints, cloud — into one place, then alerts on suspicious patterns.',
    whyItMatters:
      'Without a SIEM, security teams are blind. It is the central nervous system of a SOC, turning thousands of raw log events per second into actionable alerts.',
    analogy:
      'Think of it like a NOC dashboard, but instead of tracking uptime and bandwidth, it is tracking authentication failures, lateral movement, and privilege escalations.',
    soundsSmartToSay:
      '"We need to make sure the SIEM tuning is reducing false positives before we can trust the alert queue."',
    commonConfusions: [
      'SIEM vs SOAR: A SIEM detects and alerts. A SOAR automatically responds — SOAR acts on what the SIEM finds.',
      'SIEM vs log aggregation: A plain log aggregator stores logs. A SIEM adds correlation rules, threat intelligence, and alerting on top.',
    ],
    relatedTerms: ['SOAR', 'SOC', 'EDR', 'UEBA'],
  },
  {
    id: 'cyber-zero-trust',
    domain: 'cyber',
    title: 'Zero Trust',
    subtitle: 'Never trust, always verify',
    difficulty: 'beginner',
    tags: ['architecture', 'identity', 'access'],
    definition:
      'Zero Trust is a security model where no user, device, or network connection is trusted by default — even inside the corporate network. Every access request is verified based on identity, device health, and context.',
    whyItMatters:
      'The old "castle and moat" model assumed everything inside the firewall was safe. Zero Trust acknowledges that breaches happen and limits blast radius by requiring verification at every hop.',
    analogy:
      "Like a hospital where every door requires your badge — even between wings. You don't get blanket access once you're past the front desk.",
    soundsSmartToSay:
      '"Our VPN-only model is not Zero Trust — lateral movement is still possible once someone is on the network."',
    commonConfusions: [
      'Zero Trust is not a product you buy — it is an architecture you design. Vendors sell "Zero Trust" tools, but the model requires policy, identity, and enforcement across the whole environment.',
      'Zero Trust does not mean Zero Usability — well-implemented Zero Trust is invisible to users most of the time.',
    ],
    relatedTerms: ['Identity Provider', 'ZTNA', 'Microsegmentation', 'MFA'],
  },
  {
    id: 'cyber-edr',
    domain: 'cyber',
    title: 'EDR',
    subtitle: 'Endpoint Detection and Response',
    difficulty: 'beginner',
    tags: ['endpoint', 'detection', 'response'],
    definition:
      'EDR is an agent installed on every laptop, server, and workstation that continuously records process activity, file changes, and network connections — and can automatically isolate a device if it detects an attack.',
    whyItMatters:
      'Traditional antivirus catches known malware. EDR catches unknown and in-progress attacks by looking at behavior, not just signatures. In a breach, it is the difference between detecting on day 1 vs. day 200.',
    analogy:
      "Like having CCTV with motion alerts on every endpoint. If something weird happens on a laptop at 2am, you know about it instantly.",
    soundsSmartToSay:
      '"We need EDR coverage on all endpoints before we can claim we have real-time visibility into the estate."',
    commonConfusions: [
      'EDR vs antivirus: Antivirus blocks known bad files. EDR monitors live behavior and can respond — roll back changes, kill processes, isolate the host.',
      'EDR vs XDR: XDR correlates across endpoints, network, and cloud. EDR is endpoint-only.',
    ],
    relatedTerms: ['XDR', 'SIEM', 'Threat Hunting', 'IOC'],
  },
  {
    id: 'cyber-pentest',
    domain: 'cyber',
    title: 'Penetration Testing',
    subtitle: 'Authorized adversarial simulation',
    difficulty: 'beginner',
    tags: ['offensive', 'assessment', 'red team'],
    definition:
      'A penetration test is an authorized, scoped attack on your own systems by security professionals to find exploitable vulnerabilities before real attackers do.',
    whyItMatters:
      'Vulnerability scanners find known CVEs. A skilled pentester finds the path an attacker would actually take — chaining multiple weaknesses together to compromise a system.',
    analogy:
      "Like hiring a locksmith to try to break into your building — with your permission — and then tell you every weak point they found.",
    soundsSmartToSay:
      '"A vulnerability scan is not the same as a pentest — we need human-led adversarial testing to understand the real attack surface."',
    commonConfusions: [
      'Pentest vs vulnerability scan: A scan is automated and finds known issues. A pentest is human-led and finds how those issues chain together into a real attack.',
      'Pentest vs red team: A red team engagement is longer, stealthier, and simulates a full APT. A pentest is scoped and usually faster.',
    ],
    relatedTerms: ['Red Team', 'Bug Bounty', 'CVE', 'Attack Surface'],
  },
  {
    id: 'cyber-mfa',
    domain: 'cyber',
    title: 'MFA',
    subtitle: 'Multi-Factor Authentication',
    difficulty: 'beginner',
    tags: ['identity', 'authentication', 'access'],
    definition:
      'MFA requires users to prove identity using two or more independent factors: something you know (password), something you have (phone/hardware token), or something you are (biometric).',
    whyItMatters:
      "Passwords get stolen, leaked, and guessed constantly. MFA means a stolen password alone can't compromise an account — attackers also need the second factor.",
    analogy:
      'Like an ATM — your PIN (something you know) plus your card (something you have). One factor stolen alone is not enough.',
    soundsSmartToSay:
      '"SMS-based MFA is better than nothing but is phishable. We should push to TOTP or hardware keys for privileged accounts."',
    commonConfusions: [
      'SMS MFA vs authenticator app: SMS codes can be intercepted via SIM-swapping. Authenticator apps (TOTP) and hardware keys are significantly more phishing-resistant.',
      'MFA vs SSO: SSO lets you log in once and access multiple systems. MFA secures that login. They are often used together.',
    ],
    relatedTerms: ['SSO', 'FIDO2', 'Phishing', 'Identity Provider'],
  },
  {
    id: 'cyber-threat-intel',
    domain: 'cyber',
    title: 'Threat Intelligence',
    subtitle: 'Evidence-based knowledge about adversaries',
    difficulty: 'intermediate',
    tags: ['intel', 'IOC', 'attribution'],
    definition:
      'Threat intelligence is curated, contextualized information about threat actors, their TTPs (tactics, techniques, procedures), and indicators of compromise (IOCs) like malicious IP addresses and file hashes.',
    whyItMatters:
      'It shifts security from reactive to proactive — knowing what adversaries targeting your industry are doing lets you defend against attacks before they hit you.',
    analogy:
      'Like getting a law enforcement bulletin about known car thieves operating in your area, with their methods — so you can take specific precautions.',
    soundsSmartToSay:
      '"We need to operationalize our threat intel — feeding IOCs into the SIEM automatically rather than reading PDF reports."',
    commonConfusions: [
      'Strategic vs tactical intel: Strategic intel informs leadership decisions. Tactical intel (malicious IPs, hashes) feeds directly into security tools.',
      'Threat intel is not just feeds — raw IOC feeds need enrichment and context to be actionable.',
    ],
    relatedTerms: ['IOC', 'TTP', 'MITRE ATT&CK', 'ISAC'],
  },
  {
    id: 'cyber-iam',
    domain: 'cyber',
    title: 'IAM',
    subtitle: 'Identity and Access Management',
    difficulty: 'beginner',
    tags: ['identity', 'access', 'authorization'],
    definition:
      'IAM is the framework of policies and technology for controlling who can access what resources, under what conditions. It covers authentication (who are you?), authorization (what can you do?), and auditing (what did you do?).',
    whyItMatters:
      "Compromised identities are the #1 attack vector. Strong IAM means even if credentials are stolen, the attacker can't do much — least privilege limits the blast radius.",
    analogy:
      "Like a building's keycard and access control system — different employees have keys to different areas, access logs are kept, and the system can revoke access instantly.",
    soundsSmartToSay:
      '"We need to enforce least privilege in our IAM policies — most service accounts have far more permissions than they need."',
    commonConfusions: [
      'IAM vs PAM: IAM covers all identities. PAM specifically handles admin and root-level accounts with extra controls.',
      'Cloud IAM vs on-prem: AWS IAM, Azure AD, GCP IAM are cloud-native identity systems — different from on-prem Active Directory, though they can be federated.',
    ],
    relatedTerms: ['PAM', 'RBAC', 'Least Privilege', 'Active Directory'],
  },
  {
    id: 'cyber-vuln-mgmt',
    domain: 'cyber',
    title: 'Vulnerability Management',
    subtitle: 'Systematic discovery and remediation of weaknesses',
    difficulty: 'beginner',
    tags: ['patching', 'CVE', 'risk'],
    definition:
      'Vulnerability management is the continuous process of scanning systems for known security weaknesses (CVEs), prioritizing them by risk, and tracking remediation through patching or mitigation.',
    whyItMatters:
      'Unpatched vulnerabilities are how most attacks start. A structured VM program ensures the most critical exposures get fixed first, reducing attack surface systematically.',
    analogy:
      "Like a building safety inspection program — regularly checking for code violations, prioritizing fire hazards over cosmetic issues, and tracking that repairs actually get done.",
    soundsSmartToSay:
      '"Our CVSS scores alone don\'t reflect real risk — we need to factor in exploitability and asset criticality when prioritizing patches."',
    commonConfusions: [
      'CVSS score vs actual risk: A CVSS 9.8 vulnerability on an internal-only server may be less urgent than a CVSS 7 on an internet-facing system.',
      'Vulnerability management vs patch management: VM identifies and prioritizes. Patch management deploys the fixes. Both are needed.',
    ],
    relatedTerms: ['CVE', 'CVSS', 'Patch Management', 'Attack Surface'],
  },
  {
    id: 'cyber-soc',
    domain: 'cyber',
    title: 'SOC',
    subtitle: 'Security Operations Center',
    difficulty: 'beginner',
    tags: ['operations', 'monitoring', 'incident response'],
    definition:
      'A SOC is the centralized team responsible for continuously monitoring, detecting, analyzing, and responding to security incidents. It operates around the clock with analysts at multiple tiers who triage alerts and escalate real threats.',
    whyItMatters:
      'Buying security tools without a SOC to operate them is like buying a fire alarm system with no fire department. The SOC turns tooling investments into actual protection.',
    analogy:
      'The SOC is the security equivalent of a NOC. The NOC watches availability and performance; the SOC watches for adversaries. Both run 24/7 and both escalate when severity demands it.',
    soundsSmartToSay:
      '"Standing up a SOC is not just hiring analysts — we need defined runbooks, proper SIEM tuning, and clear escalation paths or we will drown in alert fatigue."',
    commonConfusions: [
      'SOC vs SIEM: A SIEM is a tool. The SOC is the team and process that uses the SIEM to protect the organization.',
      'In-house SOC vs MDR: A managed detection and response provider is essentially an outsourced SOC — useful when you cannot staff 24/7 coverage internally.',
    ],
    relatedTerms: ['SIEM', 'SOAR', 'Incident Response', 'MDR'],
  },
  {
    id: 'cyber-dlp',
    domain: 'cyber',
    title: 'DLP',
    subtitle: 'Data Loss Prevention',
    difficulty: 'intermediate',
    tags: ['data protection', 'compliance', 'policy'],
    definition:
      'DLP is a set of tools and policies that detect and prevent sensitive data — credit card numbers, source code, PII, health records — from leaving the organization through unauthorized channels like email, USB drives, or cloud uploads.',
    whyItMatters:
      'A single data breach can trigger regulatory fines, lawsuits, and irreparable brand damage. DLP gives the business verifiable proof that sensitive data is being controlled, often a hard requirement for PCI-DSS, HIPAA, and GDPR.',
    analogy:
      'Like baggage screening at an airport — everything leaving the perimeter gets scanned, and items that match a prohibited pattern get stopped.',
    soundsSmartToSay:
      '"DLP only works if we have solid data classification first — you cannot protect what you have not labeled."',
    commonConfusions: [
      'DLP vs encryption: Encryption protects data in transit. DLP prevents data from being sent to the wrong place entirely — they are complementary.',
      'Network DLP vs endpoint DLP: Network DLP inspects traffic at the perimeter. Endpoint DLP monitors local actions like copying to USB. A complete program needs both.',
    ],
    relatedTerms: ['Data Classification', 'CASB', 'Insider Threat', 'Encryption'],
  },
  {
    id: 'cyber-soar',
    domain: 'cyber',
    title: 'SOAR',
    subtitle: 'Security Orchestration, Automation and Response',
    difficulty: 'intermediate',
    tags: ['automation', 'incident response', 'orchestration'],
    definition:
      'SOAR platforms connect security tools together and automate repetitive response workflows called playbooks — so when an alert fires, actions like enriching IOCs, creating tickets, isolating hosts, and notifying stakeholders happen in seconds instead of hours.',
    whyItMatters:
      'SOC analysts are expensive and overwhelmed by alert volume. SOAR multiplies their effectiveness by automating the mechanical steps of incident response, letting humans focus on judgment calls.',
    analogy:
      'SOAR is like Ansible or Terraform for security operations. Instead of writing a playbook to configure servers, you write a playbook to respond to a phishing alert.',
    soundsSmartToSay:
      '"We should not automate a bad process — before building SOAR playbooks, we need to document and validate our manual runbooks."',
    commonConfusions: [
      'SOAR vs SIEM: A SIEM detects and alerts. SOAR takes action on those alerts. They are deployed together.',
      'Playbook vs runbook: In SOAR, a playbook is an automated workflow. A runbook is a human-readable document. SOAR converts runbooks into playbooks.',
    ],
    relatedTerms: ['SIEM', 'Incident Response', 'Playbook', 'SOC'],
  },
  {
    id: 'cyber-pki',
    domain: 'cyber',
    title: 'PKI',
    subtitle: 'Public Key Infrastructure',
    difficulty: 'advanced',
    tags: ['cryptography', 'certificates', 'trust'],
    definition:
      'PKI is the full ecosystem of certificate authorities (CAs), digital certificates, key pairs, and policies that enable trusted, encrypted communication. It is the foundation that makes TLS/HTTPS, code signing, email encryption, and mutual authentication work at scale.',
    whyItMatters:
      'Every HTTPS connection, VPN tunnel, and signed software update depends on PKI. A misconfigured or compromised internal CA can silently undermine the trust model for your entire environment.',
    analogy:
      'PKI works like a passport system. A certificate authority is the government that issues passports. When you present your passport at a border (a TLS handshake), the other party trusts your identity because they trust the issuing government.',
    soundsSmartToSay:
      '"We need to audit our certificate lifecycle — expired or mis-issued internal CA certs are a ticking time bomb for outages and trust chain failures."',
    commonConfusions: [
      'Public CA vs internal CA: Public CAs are trusted by browsers. Internal CAs issue certificates for internal services — they require manual trust distribution.',
      'Certificate vs key: A certificate is a public document binding an identity to a public key. The private key proves ownership. Never confuse the two.',
    ],
    relatedTerms: ['TLS', 'Certificate Authority', 'X.509', 'Mutual TLS'],
  },
  {
    id: 'cyber-mitre-attack',
    domain: 'cyber',
    title: 'MITRE ATT&CK Framework',
    subtitle: 'A knowledge base of adversary tactics and techniques',
    difficulty: 'intermediate',
    tags: ['framework', 'threat modeling', 'TTPs'],
    definition:
      'MITRE ATT&CK is a publicly available knowledge base that catalogs the real-world tactics, techniques, and procedures that adversaries use across the attack lifecycle. It is organized into matrices covering enterprise, mobile, and cloud environments.',
    whyItMatters:
      'ATT&CK gives security teams a common language and a structured way to evaluate detection coverage. By mapping SIEM rules against the matrix, you can identify specific gaps in your detection posture.',
    analogy:
      'Like ITIL for offensive security — it is the standardized taxonomy that everyone references. Just as ITIL gives you a shared vocabulary for incident vs. problem vs. change, ATT&CK gives vocabulary for credential dumping vs. pass-the-hash.',
    soundsSmartToSay:
      '"We mapped our detection coverage against MITRE ATT&CK and found we have almost no visibility into the Persistence and Defense Evasion columns — that should drive our next tooling investment."',
    commonConfusions: [
      'ATT&CK vs kill chain: The Lockheed Martin kill chain is a linear, high-level model. ATT&CK is granular and non-linear with hundreds of specific techniques.',
      'Tactic vs technique: A tactic is the adversary\'s goal (e.g., "Credential Access"). A technique is how they achieve it (e.g., "OS Credential Dumping").',
    ],
    relatedTerms: ['Threat Intelligence', 'TTP', 'Kill Chain', 'Threat Hunting'],
  },
  {
    id: 'cyber-ransomware',
    domain: 'cyber',
    title: 'Ransomware',
    subtitle: 'Malware that encrypts your data for extortion',
    difficulty: 'beginner',
    tags: ['malware', 'extortion', 'incident response'],
    definition:
      'Ransomware is malware that encrypts a victim\'s files and demands payment for the decryption key. Modern variants also exfiltrate data before encrypting, enabling "double extortion" where attackers threaten to leak stolen data even if backups exist.',
    whyItMatters:
      'Ransomware is the single most financially damaging cyber threat today. A successful attack can halt operations for weeks, and total cost typically dwarfs the ransom amount.',
    analogy:
      'Imagine arriving at work to find someone has changed every lock in the building, put all your filing cabinets in a vault, and left a note demanding payment — and they also have copies of all your documents.',
    soundsSmartToSay:
      '"Paying the ransom does not guarantee recovery and funds the next attack. Our best defense is tested, offline backups with validated restore procedures."',
    commonConfusions: [
      'Backups alone do not solve it: Double extortion means attackers leak stolen data even if you restore from backups.',
      'Ransomware is a business model: Ransomware-as-a-Service (RaaS) operations run like businesses with affiliates, customer support, and negotiation teams.',
    ],
    relatedTerms: ['Incident Response', 'Backup', 'Phishing', 'EDR'],
  },
  {
    id: 'cyber-supply-chain-security',
    domain: 'cyber',
    title: 'Supply Chain Security',
    subtitle: 'Securing the chain of trust in your dependencies',
    difficulty: 'advanced',
    tags: ['third-party risk', 'software supply chain', 'SBOM'],
    definition:
      'Supply chain security focuses on identifying and mitigating risks introduced through third-party software, hardware, services, and vendors. This includes open-source libraries in your code, SaaS platforms with API access, managed service providers with network access, and firmware in hardware.',
    whyItMatters:
      'Attacks like SolarWinds and Log4Shell demonstrated that compromising one supplier can cascade to thousands of downstream organizations simultaneously. Regulators now mandate SBOMs and third-party risk assessments.',
    analogy:
      'In manufacturing, a single contaminated ingredient can trigger a recall across every product that uses it. If a malicious package lands in a shared library, every application depending on it is compromised.',
    soundsSmartToSay:
      '"We need to generate SBOMs for our production applications and continuously monitor our dependency tree for newly disclosed vulnerabilities — point-in-time audits are not enough."',
    commonConfusions: [
      'Supply chain security is not just vendor questionnaires — it requires continuous monitoring, SBOM analysis, and technical validation of software integrity.',
      'SBOM is not a one-time artifact: An SBOM is only useful if generated automatically on every build and continuously cross-referenced against vulnerability databases.',
    ],
    relatedTerms: ['SBOM', 'Third-Party Risk', 'SCA', 'Zero Trust'],
  },
  {
    id: 'cyber-xdr',
    domain: 'cyber',
    title: 'XDR',
    subtitle: 'Extended Detection and Response',
    difficulty: 'intermediate',
    tags: ['detection', 'response', 'correlation'],
    definition:
      'XDR extends detection-and-response beyond endpoints by natively integrating telemetry from endpoints, network traffic, cloud workloads, email, and identity into a single platform with unified correlation and automated response.',
    whyItMatters:
      'Attackers move laterally across network segments, escalate privileges in the identity system, and exfiltrate through cloud storage. XDR closes visibility gaps between siloed tools and gives analysts a single correlated view of an attack.',
    analogy:
      'If EDR is a security camera on every door, XDR is a unified surveillance system covering doors, hallways, parking lot, and loading dock — with a control room that automatically correlates footage across cameras.',
    soundsSmartToSay:
      '"We are getting alerts from EDR, the firewall, and our cloud SIEM but nobody is correlating them — XDR would give us cross-domain detection without building all the integration ourselves."',
    commonConfusions: [
      'XDR vs EDR: EDR monitors endpoints only. XDR correlates across endpoints, network, cloud, email, and identity.',
      'Open XDR vs native XDR: Native XDR uses a single vendor\'s tools. Open XDR integrates across multiple vendors — trading depth of integration for vendor flexibility.',
    ],
    relatedTerms: ['EDR', 'SIEM', 'SOC', 'Threat Detection'],
  },
  {
    id: 'cyber-phishing',
    domain: 'cyber',
    title: 'Phishing',
    subtitle: 'Social engineering attacks delivered via email',
    difficulty: 'beginner',
    tags: ['social engineering', 'email', 'credential theft'],
    definition:
      'Phishing is a social engineering attack where attackers send fraudulent emails that appear to be from trusted sources, tricking recipients into clicking malicious links, downloading malware, or submitting credentials. Spear phishing targets specific individuals using personalized information.',
    whyItMatters:
      'Phishing is the #1 initial attack vector — the most common way ransomware and data breaches begin. Technical controls help but cannot fully stop it because it exploits human psychology, not software vulnerabilities.',
    analogy:
      'Like a con artist posing as your bank calling to "verify" your account information. The technology (phone or email) is just the delivery mechanism — the attack is really about manipulating trust.',
    soundsSmartToSay:
      '"Phishing simulation results are a lagging indicator — we need to measure time-to-report, not just click rate, to understand whether our security culture is actually improving."',
    commonConfusions: [
      'Phishing vs spear phishing: Generic phishing is mass-sent with minimal personalization. Spear phishing is targeted — the attacker researches the victim and crafts a convincing pretext.',
      'Phishing vs vishing vs smishing: Phishing is email, vishing is voice calls, smishing is SMS. All are social engineering; only the channel differs.',
    ],
    relatedTerms: ['Social Engineering', 'BEC', 'DMARC', 'Security Awareness'],
  },
  {
    id: 'cyber-casb',
    domain: 'cyber',
    title: 'CASB',
    subtitle: 'Cloud Access Security Broker',
    difficulty: 'intermediate',
    tags: ['cloud security', 'SaaS', 'visibility'],
    definition:
      'A CASB is a security policy enforcement point between users and cloud services. It provides visibility into what SaaS applications are being used (including shadow IT), enforces data policies, detects threats in cloud activity, and ensures compliance with governance requirements.',
    whyItMatters:
      'Employees use dozens of unauthorized SaaS apps — uploading sensitive data to personal Dropbox, sharing via consumer Google Drive. A CASB discovers this shadow IT and enforces DLP policies before data leaves your control.',
    analogy:
      'Like a customs checkpoint at every airport in your country — not just the border crossing. Every piece of data heading to a cloud service passes through the CASB, which checks it against your policies.',
    soundsSmartToSay:
      '"We discovered 400 unsanctioned cloud apps in our CASB discovery scan — most of them have access to corporate data and none of them went through IT procurement."',
    commonConfusions: [
      'CASB vs firewall: A firewall controls access to networks. A CASB understands the content and context of cloud service interactions — it can block a file upload to Dropbox while allowing a read operation.',
      'Inline CASB vs API-mode CASB: Inline intercepts traffic in real time but requires traffic routing. API mode uses cloud provider APIs to scan after the fact — simpler to deploy but cannot block in real time.',
    ],
    relatedTerms: ['DLP', 'Shadow IT', 'Zero Trust', 'SASE'],
  },
  {
    id: 'cyber-sso',
    domain: 'cyber',
    title: 'SSO and SAML',
    subtitle: 'Log in once, access everything',
    difficulty: 'beginner',
    tags: ['identity', 'authentication', 'federation'],
    definition:
      'Single Sign-On (SSO) lets users authenticate once and access multiple applications without logging in again. SAML (Security Assertion Markup Language) is the XML-based protocol that enterprise SSO uses to pass authentication assertions between the identity provider (IdP) and service providers (SPs).',
    whyItMatters:
      'SSO reduces password fatigue, enables centralized access control, and means IT can de-provision a user in one place and lose access to all connected systems instantly. It is a foundational identity security control.',
    analogy:
      'Like a master hotel key that opens your room, the gym, the pool, and the business center. You authenticate at check-in once; after that, the key works everywhere in the hotel.',
    soundsSmartToSay:
      '"We should enforce SSO for all SaaS applications — any app where employees use separate credentials is a de-provisioning risk and an audit gap."',
    commonConfusions: [
      'SAML vs OIDC/OAuth: SAML is the older enterprise standard using XML. OIDC is the modern standard using JSON and is better suited for mobile and API access. Many organizations run both.',
      'SSO vs password manager: A password manager stores and fills passwords for independent accounts. SSO eliminates separate passwords entirely by federating authentication through a central IdP.',
    ],
    relatedTerms: ['Identity Provider', 'SAML', 'OIDC', 'MFA'],
  },
  {
    id: 'cyber-threat-modeling',
    domain: 'cyber',
    title: 'Threat Modeling',
    subtitle: 'Systematically identifying security risks at design time',
    difficulty: 'intermediate',
    tags: ['design', 'risk', 'STRIDE'],
    definition:
      'Threat modeling is a structured process for identifying potential threats, attack vectors, and mitigations for a system — typically done during the design phase, before code is written. Common frameworks include STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) and PASTA.',
    whyItMatters:
      'Fixing security issues at design time costs 100x less than fixing them in production. Threat modeling forces teams to think like attackers before building, surfacing structural flaws that no amount of patching can fix later.',
    analogy:
      'Like a structural engineer who stress-tests blueprints for load-bearing failures before construction begins. You do not wait for the building to collapse to discover that the foundation was wrong.',
    soundsSmartToSay:
      '"We should add threat modeling to our design review process — if a service handles PII, the architecture should be reviewed through STRIDE before anyone writes code."',
    commonConfusions: [
      'Threat modeling vs risk assessment: A risk assessment is broad and organizational. Threat modeling is system-specific and technical — focused on how an adversary could attack a specific application or architecture.',
      'STRIDE vs PASTA: STRIDE enumerates threat categories from the attacker\'s perspective. PASTA is a risk-centric methodology that aligns threats to business objectives. STRIDE is more developer-accessible.',
    ],
    relatedTerms: ['STRIDE', 'Attack Surface', 'Security Architecture', 'Secure by Design'],
  },
  {
    id: 'cyber-tls',
    domain: 'cyber',
    title: 'TLS / Encryption in Transit',
    subtitle: 'Protecting data as it moves across the network',
    difficulty: 'beginner',
    tags: ['encryption', 'HTTPS', 'certificates'],
    definition:
      'TLS (Transport Layer Security) encrypts network traffic between two endpoints so that interceptors cannot read or modify it. HTTPS is HTTP over TLS. Mutual TLS (mTLS) requires both parties to authenticate with certificates — used for service-to-service communication.',
    whyItMatters:
      'Without TLS, passwords, tokens, and sensitive data travel in plaintext — readable by anyone on the same network. TLS is the minimum baseline for any production system that handles user data.',
    analogy:
      'Like sealing a letter in an envelope vs sending a postcard. Anyone handling a postcard can read it. An envelope (TLS) hides the contents and a wax seal (certificate) proves who sent it.',
    soundsSmartToSay:
      '"We should enforce TLS 1.2 as the minimum and disable TLS 1.0/1.1 — they have known vulnerabilities and no modern client should require them."',
    commonConfusions: [
      'TLS vs SSL: SSL is the deprecated predecessor to TLS. People still say "SSL" colloquially but TLS 1.2+ is what is actually in use.',
      'TLS terminates at the load balancer vs end-to-end: If TLS terminates at a load balancer, traffic from the load balancer to backend services may be unencrypted. Re-encrypting to the backend (TLS passthrough or backend TLS) closes that gap.',
    ],
    relatedTerms: ['PKI', 'Certificate Authority', 'mTLS', 'HTTPS'],
  },
  {
    id: 'cyber-encryption-rest',
    domain: 'cyber',
    title: 'Encryption at Rest',
    subtitle: 'Protecting data when it is stored, not moving',
    difficulty: 'beginner',
    tags: ['encryption', 'data protection', 'key management'],
    definition:
      'Encryption at rest protects data stored on disk, in databases, or in object storage by encrypting it with a key. Even if physical media or storage is stolen, the data is unreadable without the encryption key. Key management (where keys are stored and how they are rotated) is the harder problem.',
    whyItMatters:
      'Compliance frameworks (HIPAA, PCI-DSS, SOC 2) require encryption at rest for sensitive data. More importantly, it protects against physical theft of hardware and unauthorized access at the infrastructure layer.',
    analogy:
      'Like a safe deposit box at a bank — even if someone breaks into the vault, they cannot read the contents without your specific key.',
    soundsSmartToSay:
      '"Enabling disk encryption on S3 or RDS is one checkbox — the harder question is where the encryption keys live and who can access them. Key management is where encryption either works or fails."',
    commonConfusions: [
      'Encryption at rest vs encryption in transit: At rest protects stored data. In transit protects data moving over a network. Both are needed — encrypting only one layer leaves a gap.',
      'Platform-managed vs customer-managed keys: AWS/GCP/Azure can manage encryption keys for you (simpler). Customer-managed keys (CMK with KMS/HSM) give you more control but require careful key lifecycle management.',
    ],
    relatedTerms: ['KMS', 'HSM', 'TLS', 'Key Rotation'],
  },
  {
    id: 'cyber-pam',
    domain: 'cyber',
    title: 'PAM',
    subtitle: 'Privileged Access Management',
    difficulty: 'intermediate',
    tags: ['privileged access', 'identity', 'admin'],
    definition:
      'PAM is a security discipline focused on controlling, monitoring, and auditing privileged accounts — root, admin, service accounts, and any credential that can make significant changes to systems. PAM tools like CyberArk, BeyondTrust, and HashiCorp Vault manage privileged credentials, enforce just-in-time access, and record privileged sessions.',
    whyItMatters:
      'Privileged accounts are the keys to the kingdom. A compromised admin account can exfiltrate all data, deploy malware, or destroy infrastructure. PAM ensures privileged access is time-limited, audited, and requires explicit approval rather than persistent standing access.',
    analogy:
      'Like a nuclear launch protocol — no single person has standing authority to act alone. Two-person control, time-limited access, and a complete audit trail ensure privileged actions are accountable.',
    soundsSmartToSay:
      '"We should move to just-in-time privileged access — standing admin rights that nobody needs 95% of the time create unnecessary risk. Grant admin access on demand, for the duration of the task."',
    commonConfusions: [
      'PAM vs IAM: IAM manages all identities broadly. PAM is a subset that adds extra controls specifically for high-privilege accounts — session recording, credential vaulting, and approval workflows.',
      'PAM is not just for humans: Service accounts, API keys, and automation credentials are also "privileged" and should be managed through PAM or a secrets manager.',
    ],
    relatedTerms: ['IAM', 'Just-in-Time Access', 'Secrets Management', 'Least Privilege'],
  },
  {
    id: 'cyber-ztna',
    domain: 'cyber',
    title: 'ZTNA',
    subtitle: 'Zero Trust Network Access — replacing the VPN',
    difficulty: 'intermediate',
    tags: ['access', 'zero trust', 'remote access'],
    definition:
      'ZTNA (Zero Trust Network Access) grants users access to specific applications based on identity, device posture, and context — not network location. Unlike a VPN that gives broad network access once connected, ZTNA creates an authenticated, encrypted tunnel to a specific app without exposing the underlying network.',
    whyItMatters:
      'VPNs give attackers who compromise credentials broad internal network access. ZTNA limits access to exactly what a user needs — a compromised credential for a specific app cannot be used to reach unrelated systems.',
    analogy:
      'Like app-specific badges at a secure facility instead of a master keycard. Your badge opens the marketing suite but nothing else — even if stolen, an attacker can only access marketing, not the data center.',
    soundsSmartToSay:
      '"Our VPN gives remote workers full network access to our entire data center. ZTNA would give them access only to the three applications they actually need — dramatically reducing our lateral movement risk."',
    commonConfusions: [
      'ZTNA vs VPN: VPN grants network-level access. ZTNA grants application-level access. The difference in blast radius is enormous.',
      'ZTNA vs Zero Trust: ZTNA is the network access component of a Zero Trust architecture. Full Zero Trust also covers identity, devices, workloads, and data — ZTNA is one piece.',
    ],
    relatedTerms: ['Zero Trust', 'VPN', 'Identity Provider', 'SASE'],
  },
  {
    id: 'cyber-microsegmentation',
    domain: 'cyber',
    title: 'Microsegmentation',
    subtitle: 'Workload-level network policies to stop lateral movement',
    difficulty: 'advanced',
    tags: ['network security', 'east-west', 'containment'],
    definition:
      'Microsegmentation applies network security policies at the individual workload level — between specific VMs, containers, or processes — rather than at the network perimeter. Each workload only communicates with explicitly permitted peers, making lateral movement after a breach extremely difficult.',
    whyItMatters:
      'Traditional firewalls stop north-south traffic (internet to internal). Most breaches succeed because east-west traffic (server to server inside the data center) is uncontrolled. Microsegmentation puts a firewall around every workload.',
    analogy:
      'Like giving every employee their own office with a locked door instead of an open floor plan. A thief who sneaks into one office cannot freely move to every other desk — they face a locked door at every step.',
    soundsSmartToSay:
      '"After the initial breach, the attacker moved to 40 systems in 20 minutes because east-west traffic was completely uncontrolled. Microsegmentation would have contained the blast radius to the first compromised host."',
    commonConfusions: [
      'Microsegmentation vs VLAN segmentation: VLANs create broad network zones. Microsegmentation enforces policies between individual workloads within those zones — far more granular.',
      'Software-defined microsegmentation (Illumio, VMware NSX, Guardicore) works at the hypervisor or OS level and does not require network hardware changes.',
    ],
    relatedTerms: ['Zero Trust', 'Network Segmentation', 'Lateral Movement', 'East-West Traffic'],
  },
  {
    id: 'cyber-bug-bounty',
    domain: 'cyber',
    title: 'Bug Bounty',
    subtitle: 'Paying researchers to find your vulnerabilities',
    difficulty: 'beginner',
    tags: ['offensive', 'crowdsourced', 'vulnerability'],
    definition:
      'A bug bounty program invites external security researchers to find and responsibly disclose vulnerabilities in your systems in exchange for monetary rewards. Programs run through platforms like HackerOne and Bugcrowd, with scope, reward tiers, and rules of engagement defined by the organization.',
    whyItMatters:
      'Your internal security team has blind spots. Thousands of external researchers with diverse expertise will find vulnerabilities your team misses. Bug bounty is a cost-effective way to continuously test your attack surface with real adversarial creativity.',
    analogy:
      'Like a city offering a reward for tips about unsafe buildings. Instead of one inspector, you get the eyes of the entire public. Responsible disclosure rules ensure reporters bring findings to you, not to criminals.',
    soundsSmartToSay:
      '"A bug bounty program is only valuable if we can actually triage and remediate reports quickly — slow response times kill researcher engagement and mean unpatched vulnerabilities sit open longer."',
    commonConfusions: [
      'Bug bounty vs pentest: Pentest is a time-boxed engagement with a specific scope and dedicated testers. Bug bounty is continuous and open to any qualified researcher — broader coverage but less systematic.',
      'Bug bounty vs responsible disclosure: A vulnerability disclosure policy (VDP) tells researchers how to report issues but offers no reward. Bug bounty adds financial incentive, attracting more researchers.',
    ],
    relatedTerms: ['Penetration Testing', 'CVE', 'Responsible Disclosure', 'Attack Surface'],
  },
  {
    id: 'cyber-cspm',
    domain: 'cyber',
    title: 'CSPM',
    subtitle: 'Cloud Security Posture Management',
    difficulty: 'intermediate',
    tags: ['cloud security', 'misconfiguration', 'compliance'],
    definition:
      'CSPM tools continuously scan cloud environments for misconfigurations, policy violations, and compliance gaps — finding things like public S3 buckets, overly permissive IAM roles, unencrypted databases, and missing logging. They map findings to compliance frameworks like CIS, SOC 2, and PCI-DSS.',
    whyItMatters:
      'The majority of cloud breaches are caused by misconfiguration, not zero-days. CSPM acts as a continuous compliance auditor for your cloud environment, catching the "I forgot to turn on encryption" mistakes before an attacker finds them.',
    analogy:
      'Like a building inspector who lives in your office and continuously checks that every door is locked, every fire exit is clear, and every electrical panel is properly covered — rather than just doing an annual inspection.',
    soundsSmartToSay:
      '"We have 200 findings in our CSPM dashboard but they are not prioritized by exposure — a public S3 bucket with customer data is more urgent than a missing tag on a dev instance."',
    commonConfusions: [
      'CSPM vs CWPP: CSPM checks cloud configuration and compliance. CWPP (Cloud Workload Protection Platform) secures workloads — running containers, VMs, and serverless functions — with runtime protection.',
      'CSPM vs manual audits: CSPM gives continuous visibility. Manual audits give point-in-time snapshots. You need both — CSPM catches drift; audits validate whether the policies themselves are correct.',
    ],
    relatedTerms: ['Cloud Security', 'Misconfiguration', 'IAM', 'Compliance'],
  },
  {
    id: 'cyber-sast-dast',
    domain: 'cyber',
    title: 'SAST and DAST',
    subtitle: 'Static and dynamic application security testing',
    difficulty: 'intermediate',
    tags: ['appsec', 'testing', 'devSecOps'],
    definition:
      'SAST (Static Application Security Testing) analyzes source code without running it to find security vulnerabilities like SQL injection patterns, hardcoded credentials, and insecure cryptography. DAST (Dynamic Application Security Testing) attacks a running application from the outside — like an automated penetration tester — finding vulnerabilities that only appear at runtime.',
    whyItMatters:
      'Application vulnerabilities are the #1 breach vector. SAST catches security bugs at the code level before deployment. DAST validates the running application and finds issues SAST misses like authentication bypasses, session management flaws, and API vulnerabilities.',
    analogy:
      'SAST is like proofreading a recipe before cooking — catching spelling errors and wrong measurements. DAST is tasting the dish after cooking — finding flavors that are wrong even though the recipe looked correct on paper.',
    soundsSmartToSay:
      '"We run SAST in CI so developers get immediate feedback, and DAST against staging before every release — together they cover different vulnerability classes that neither catches alone."',
    commonConfusions: [
      'SAST vs code review: SAST is automated tool analysis. Code review is human analysis. Both find different issues — SAST is fast and consistent; humans catch logic flaws and business logic bypasses.',
      'DAST vs pentest: DAST is automated and runs continuously. A pentest is human-led and finds chained vulnerabilities that automated tools miss. Both are needed.',
    ],
    relatedTerms: ['DevSecOps', 'Shift Left', 'OWASP', 'CI/CD Security'],
  },
  {
    id: 'cyber-credential-stuffing',
    domain: 'cyber',
    title: 'Credential Stuffing',
    subtitle: 'Using breached passwords to attack other sites',
    difficulty: 'beginner',
    tags: ['authentication', 'breaches', 'bots'],
    definition:
      'Credential stuffing is an automated attack where attackers take username/password pairs leaked from one data breach and try them against other services at scale. Because users reuse passwords, a breach at any site becomes ammunition for attacks on banking, email, and SaaS applications.',
    whyItMatters:
      'Billions of credentials are available in breach datasets. Automated tools can try millions of combinations per hour. If even 0.5% of attempts succeed, that is thousands of compromised accounts from a single attack campaign.',
    analogy:
      'Like a criminal who steals a master key ring from a locksmith and tries every key on every house in the neighborhood. Most keys will not fit, but password reuse means some will.',
    soundsSmartToSay:
      '"We need to rate-limit login attempts and implement breached-password detection — if a user chooses a password that appears in known breach datasets, we should block it at signup."',
    commonConfusions: [
      'Credential stuffing vs brute force: Brute force tries random passwords. Credential stuffing uses real credentials from breaches — much more efficient because attackers already know real username/password combinations.',
      'MFA stops credential stuffing: Even if attackers have valid credentials, MFA prevents successful authentication. This is the single most effective control against credential stuffing.',
    ],
    relatedTerms: ['MFA', 'Password Spraying', 'Account Takeover', 'Have I Been Pwned'],
  },
  {
    id: 'cyber-dmarc',
    domain: 'cyber',
    title: 'DMARC / SPF / DKIM',
    subtitle: 'Email authentication to stop spoofing and phishing',
    difficulty: 'intermediate',
    tags: ['email security', 'authentication', 'anti-spoofing'],
    definition:
      'SPF (Sender Policy Framework) lists which servers are authorized to send email for a domain. DKIM (DomainKeys Identified Mail) cryptographically signs emails so recipients can verify they were not tampered with. DMARC (Domain-based Message Authentication Reporting and Conformance) ties SPF and DKIM together with a policy — telling receivers what to do with emails that fail authentication.',
    whyItMatters:
      'Email spoofing is the foundation of phishing. Without DMARC, anyone can send email pretending to be from your domain. DMARC in enforcement mode (p=reject) makes it technically impossible for attackers to spoof your domain in email.',
    analogy:
      'Like a company letterhead with a watermark and a notary seal. SPF checks that the letter came from an authorized office. DKIM verifies the signature matches. DMARC is the policy that says: "reject any letter that fails both checks."',
    soundsSmartToSay:
      '"We have DMARC in monitor mode but have not moved to enforcement — until p=reject is active, we are collecting data but not actually blocking spoofed emails."',
    commonConfusions: [
      'SPF, DKIM, and DMARC are complementary: SPF alone can be bypassed. DKIM alone can be bypassed. DMARC coordinates both and adds reporting and enforcement.',
      'DMARC enforcement breaks legitimate email: Moving to p=reject requires first auditing all legitimate sending sources (marketing tools, HR systems, CRMs) to ensure they are aligned.',
    ],
    relatedTerms: ['Phishing', 'Email Security', 'Anti-Spoofing', 'BEC'],
  },
  {
    id: 'cyber-insider-threat',
    domain: 'cyber',
    title: 'Insider Threat',
    subtitle: 'Malicious or negligent actions from within the organization',
    difficulty: 'intermediate',
    tags: ['user behavior', 'data loss', 'monitoring'],
    definition:
      'An insider threat is a security risk that originates from within the organization — employees, contractors, or partners who misuse their authorized access, either maliciously (data theft, sabotage) or negligently (accidentally emailing PII, clicking phishing links). UEBA (User and Entity Behavior Analytics) tools detect anomalous behavior patterns.',
    whyItMatters:
      'Insiders already have authorized access, so perimeter controls do not stop them. A disgruntled employee with legitimate database access can exfiltrate millions of records without triggering standard security alerts.',
    analogy:
      'Like an employee who has a legitimate badge to access the server room — external security controls will not stop them. You need behavioral monitoring (did they access files outside their normal pattern?) and data controls (DLP) instead.',
    soundsSmartToSay:
      '"UEBA flags anomalous access patterns — we should investigate this account that accessed 50,000 customer records at 2am when it normally runs batch reports on 200."',
    commonConfusions: [
      'Insider threat vs external breach: Most headline breaches are external attacks. But insiders are harder to detect because their activity looks authorized on the surface.',
      'Malicious vs negligent: Most insider incidents are accidental — employees mishandling data, not adversarial exfiltration. Controls must address both.',
    ],
    relatedTerms: ['UEBA', 'DLP', 'Access Reviews', 'Least Privilege'],
  },
  {
    id: 'cyber-waf',
    domain: 'cyber',
    title: 'WAF',
    subtitle: 'Web Application Firewall — protecting HTTP traffic',
    difficulty: 'intermediate',
    tags: ['web security', 'OWASP', 'filtering'],
    definition:
      'A WAF (Web Application Firewall) inspects HTTP/HTTPS traffic to and from a web application and blocks requests that match attack patterns — SQL injection, XSS, path traversal, CSRF, and other OWASP Top 10 vulnerabilities. It operates at Layer 7 and understands application-layer protocols.',
    whyItMatters:
      'Network firewalls block by IP and port — they cannot distinguish a legitimate POST request from a SQL injection. A WAF understands the content of HTTP requests and can block application-layer attacks that network firewalls miss.',
    analogy:
      'Like a customs agent who checks the contents of packages, not just the address on the label. A network firewall checks addresses. A WAF opens and inspects every package for contraband.',
    soundsSmartToSay:
      '"A WAF is a compensating control, not a substitute for fixing the vulnerability — it buys time for patching but should not be the only protection against SQL injection."',
    commonConfusions: [
      'WAF vs NGFW: A NGFW adds application awareness to a network firewall. A WAF is specifically optimized for HTTP/HTTPS inspection and understands web application logic.',
      'Signature-based vs behavioral WAF: Traditional WAFs match known attack signatures. Modern WAFs use ML to detect anomalous request patterns — better at catching novel attacks and customized payloads.',
    ],
    relatedTerms: ['OWASP Top 10', 'SQL Injection', 'XSS', 'DDoS Protection'],
  },
  {
    id: 'cyber-cloud-security',
    domain: 'cyber',
    title: 'Shared Responsibility Model',
    subtitle: 'Understanding who is responsible for what in the cloud',
    difficulty: 'beginner',
    tags: ['cloud security', 'compliance', 'responsibility'],
    definition:
      'The shared responsibility model divides security obligations between the cloud provider and the customer. The provider secures the infrastructure (hardware, hypervisor, physical facilities). The customer secures their data, access controls, application configuration, and OS patches depending on the service model (IaaS vs PaaS vs SaaS).',
    whyItMatters:
      'A common misconception is that moving to the cloud means the provider handles all security. In reality, customers remain responsible for most of the security controls that matter — identity, data protection, network configuration, and application security.',
    analogy:
      'Like renting office space. The landlord secures the building structure, roof, and common areas. The tenant is responsible for their own door locks, who has keys, what is stored inside, and whether their equipment is insured.',
    soundsSmartToSay:
      '"The shared responsibility model means the cloud provider has never been breached — we were breached because a misconfigured S3 bucket was publicly accessible. That was our configuration, our responsibility."',
    commonConfusions: [
      'Responsibility shifts by service model: On IaaS you own OS and above. On PaaS you own application and data. On SaaS you own data and access management. The higher up the stack, the more the provider handles.',
      'The provider securing "the cloud" does not mean your data in the cloud is secure — it means the physical infrastructure is secure. Your data is only as secure as your configuration.',
    ],
    relatedTerms: ['CSPM', 'IAM', 'Cloud Governance', 'Data Security'],
  },
  {
    id: 'cyber-container-security',
    domain: 'cyber',
    title: 'Container Security',
    subtitle: 'Securing images, registries, and runtime workloads',
    difficulty: 'intermediate',
    tags: ['containers', 'kubernetes', 'DevSecOps'],
    definition:
      'Container security covers the full lifecycle of containerized workloads: scanning images for vulnerabilities during build, securing the registry, enforcing pod security policies in Kubernetes, monitoring runtime behavior for anomalies, and ensuring container isolation. Tools include Trivy, Falco, OPA/Gatekeeper, and Aqua.',
    whyItMatters:
      'Container images are often built on base images with hundreds of vulnerable packages. A compromised container can escape isolation, pivot to the node, and reach other workloads. Security must be embedded at build, deploy, and runtime.',
    analogy:
      'Like quarantining shipped goods at every step — inspect the package contents (image scanning), secure the warehouse (registry), enforce what can be unpacked (admission control), and monitor for suspicious activity after delivery (runtime security).',
    soundsSmartToSay:
      '"We should add image scanning to the CI pipeline and block deployments of images with critical CVEs — and enforce that containers run as non-root by default through pod security admission."',
    commonConfusions: [
      'Image scanning vs runtime security: Image scanning finds known vulnerabilities at build time. Runtime security detects attacks happening inside a running container. You need both.',
      'Container isolation is not a security boundary: Containers share the host kernel. A kernel exploit or misconfigured privilege can break out of a container. Defense in depth still applies.',
    ],
    relatedTerms: ['DevSecOps', 'Kubernetes Security', 'OPA', 'Image Scanning'],
  },
  {
    id: 'cyber-security-awareness',
    domain: 'cyber',
    title: 'Security Awareness Training',
    subtitle: 'Building a human firewall across the organization',
    difficulty: 'beginner',
    tags: ['training', 'human factor', 'culture'],
    definition:
      'Security awareness training educates employees about cyber threats — phishing, social engineering, password hygiene, data handling — so they can recognize and respond appropriately. Effective programs go beyond annual CBT compliance modules to include simulated phishing, just-in-time learning, and measurable behavior change.',
    whyItMatters:
      'Technical controls stop most automated attacks. Humans stop the attacks that bypass technology — a well-trained employee who reports a suspicious email prevents breaches that the best firewall cannot block.',
    analogy:
      'Like safety training in a factory — you can install safety equipment everywhere, but workers who understand why they wear hard hats and follow lockout/tagout procedures prevent the accidents that equipment alone cannot catch.',
    soundsSmartToSay:
      '"Compliance-only security training does not change behavior — we need simulated phishing with immediate, personalized feedback so employees learn in context, not from an annual 45-minute video."',
    commonConfusions: [
      'Awareness vs training: Awareness creates attention to risks. Training builds skills to respond. Both are needed — knowing phishing exists is not the same as being able to recognize a sophisticated spear phish.',
      'Phishing simulations should not be punitive: The goal is learning, not catching people. Shaming employees who click creates fear and reduces the likelihood they will report real incidents.',
    ],
    relatedTerms: ['Phishing', 'Social Engineering', 'Security Culture', 'Human Risk'],
  },
  {
    id: 'cyber-incident-response',
    domain: 'cyber',
    title: 'Incident Response',
    subtitle: 'Structured process for detecting and containing security breaches',
    difficulty: 'intermediate',
    tags: ['IR', 'breach response', 'forensics'],
    definition:
      'Incident response (IR) is the structured process for detecting, containing, eradicating, and recovering from security incidents. The NIST IR lifecycle has four phases: Preparation, Detection & Analysis, Containment/Eradication/Recovery, and Post-Incident Activity (lessons learned). An IR plan defines roles, playbooks, communication procedures, and escalation paths.',
    whyItMatters:
      'Breaches are not if but when. Organizations with mature IR capabilities contain breaches in hours; those without them contain them in weeks — the difference is measured in millions of dollars and tens of thousands of records exfiltrated.',
    analogy:
      'Like emergency room triage: the faster you stop the bleeding, assess the patient, and coordinate the right specialists, the better the outcome. An IR plan is the ER protocol that makes chaos into a practiced procedure.',
    soundsSmartToSay:
      '"Mean Time to Contain (MTTC) is the metric that matters most — how long an attacker can dwell in our environment before we kick them out determines how much damage they can do."',
    commonConfusions: [
      'IR vs disaster recovery: DR restores operations after failures (outages, hardware). IR responds to adversarial events (breaches, malware). They overlap in the recovery phase but have different detection and analysis phases.',
      'Incident response requires pre-positioned resources: Contracts with IR retainer firms, forensic tooling access, and legal/PR contacts need to be in place before the breach, not discovered during it.',
    ],
    relatedTerms: ['DFIR', 'SOC', 'Containment', 'Post-Mortem'],
  },
  {
    id: 'cyber-darkweb-monitoring',
    domain: 'cyber',
    title: 'Dark Web Monitoring',
    subtitle: 'Detecting your data for sale before you know it was stolen',
    difficulty: 'intermediate',
    tags: ['threat intelligence', 'data breach', 'monitoring'],
    definition:
      'Dark web monitoring services continuously scan criminal forums, marketplaces, and paste sites for mentions of your organization\'s credentials, data, brand, or infrastructure details. Early warning of exposed credentials allows organizations to force password resets and investigate potential breaches before attackers fully exploit the data.',
    whyItMatters:
      'Organizations are often unaware of breaches for months. Dark web monitoring can provide early warning when stolen credentials appear for sale, allowing proactive response — often before attackers have monetized the data.',
    analogy:
      'Like subscribing to alerts that notify you when your personal information appears in breach databases. Except at organizational scale — you want to know when an employee\'s corporate credentials appear on a criminal forum.',
    soundsSmartToSay:
      '"We got an alert from our dark web monitoring service that 400 employee credentials from a third-party breach were circulating. We force-rotated all of them before any account takeover attempts were detected."',
    commonConfusions: [
      'Dark web monitoring vs data loss prevention: DLP prevents data from leaving. Dark web monitoring detects data that has already left — through any vector, including third-party breaches.',
      'Dark web monitoring is intelligence, not prevention: Seeing your data on the dark web means the breach already happened. The value is early detection to limit additional exposure.',
    ],
    relatedTerms: ['Threat Intelligence', 'Credential Stuffing', 'Breach Notification', 'OSINT'],
  },
  {
    id: 'cyber-devsecops',
    domain: 'cyber',
    title: 'DevSecOps',
    subtitle: 'Shifting security left into the development pipeline',
    difficulty: 'intermediate',
    tags: ['shift left', 'automation', 'pipeline security'],
    definition:
      'DevSecOps integrates security practices — SAST, dependency scanning, secret detection, container scanning, infrastructure-as-code checks — directly into the CI/CD pipeline, making security a continuous automated check rather than a final gate before release.',
    whyItMatters:
      'When security reviews only happen at the end of a release cycle, they become bottlenecks that teams either wait weeks for or bypass. DevSecOps makes security checks as fast as unit tests — catching issues at commit time.',
    analogy:
      'Like building safety checks into every station on an assembly line instead of a single final inspection. Problems caught at station 2 cost almost nothing. Problems caught at the end cost everything.',
    soundsSmartToSay:
      '"We shifted security left — every PR runs SAST, dependency scanning, and secret detection automatically. Security issues block merge, not production deployments."',
    commonConfusions: [
      'Shift-left does not mean shift-only-left: DevSecOps adds checks early but keeps runtime protections (WAF, RASP, runtime scanning) — security everywhere, not just at build time.',
      'DevSecOps is culture, not just tools: Adding scanners to the pipeline without developer education and ownership creates ignored alerts, not improved security.',
    ],
    relatedTerms: ['SAST', 'DAST', 'CI/CD', 'Supply Chain Security'],
  },
  {
    id: 'cyber-network-forensics',
    domain: 'cyber',
    title: 'Digital Forensics',
    subtitle: 'Preserving and analyzing evidence after an incident',
    difficulty: 'advanced',
    tags: ['forensics', 'evidence', 'investigation'],
    definition:
      'Digital forensics is the practice of collecting, preserving, analyzing, and presenting digital evidence following a security incident or legal investigation. It follows a strict chain of custody and uses forensic imaging to preserve evidence integrity. Key areas include disk forensics, memory forensics, network forensics, and log analysis.',
    whyItMatters:
      'After a breach, you need to know what happened, how, when, and what data was accessed. Without forensic evidence, you cannot answer regulators, customers, or insurers — and you cannot prevent the same attack from happening again.',
    analogy:
      'Like a crime scene investigation: you do not touch or move evidence until it is properly documented and collected. Digital forensics applies the same discipline to hard drives, memory dumps, and log files.',
    soundsSmartToSay:
      '"Before we wipe and rebuild that compromised server, we need to capture a forensic image — once we rebuild, we lose all evidence of how the attacker got in and what they did."',
    commonConfusions: [
      'Forensics vs incident response: IR focuses on containing and eradicating the threat quickly. Forensics focuses on preserving and analyzing evidence thoroughly — sometimes these goals conflict (eradication destroys evidence).',
      'Live forensics vs dead-box: Live forensics captures volatile data (memory, running processes, network connections) from a running system. Dead-box forensics images a powered-off disk. Both are needed for complete investigation.',
    ],
    relatedTerms: ['Incident Response', 'Chain of Custody', 'Memory Analysis', 'Log Analysis'],
  },
  {
    id: 'cyber-owasp',
    domain: 'cyber',
    title: 'OWASP Top 10',
    subtitle: 'The most critical web application security risks',
    difficulty: 'beginner',
    tags: ['web security', 'appsec', 'vulnerabilities'],
    definition:
      'The OWASP Top 10 is a regularly updated list of the most critical web application security risks, including SQL injection, broken authentication, cross-site scripting (XSS), security misconfiguration, and insecure deserialization. It is the reference standard for secure application development and security testing.',
    whyItMatters:
      'Most web application breaches exploit vulnerabilities from this list. The OWASP Top 10 is the baseline against which developers, security tools (SAST, WAF), and code reviews should check every application.',
    analogy:
      'Like the most common causes of car accidents — rear-end collisions, running red lights, distracted driving. Knowing the top causes lets you focus safety training and engineering where it matters most.',
    soundsSmartToSay:
      '"Every developer on our team should understand at least the OWASP Top 10 — you cannot write secure code if you don\'t know what SQL injection or XSS looks like."',
    commonConfusions: [
      'OWASP Top 10 is not exhaustive — it covers the most common risks, not every possible vulnerability. Use it as a minimum checklist, not the complete security standard.',
      'The list updates roughly every 3-4 years. The 2021 version reorganized categories significantly (Broken Access Control moved to #1). Always reference the current version.',
    ],
    relatedTerms: ['SQL Injection', 'XSS', 'CSRF', 'WAF'],
  },
  {
    id: 'cyber-honeypot',
    domain: 'cyber',
    title: 'Honeypots and Deception Technology',
    subtitle: 'Luring attackers into traps to detect and study them',
    difficulty: 'advanced',
    tags: ['detection', 'deception', 'threat hunting'],
    definition:
      'A honeypot is a decoy system designed to attract attackers — looking like a valuable target but actually being a trap. Any interaction with a honeypot is inherently suspicious. Modern deception technology scales this with honeytokens (fake credentials), honeyfiles (fake sensitive documents), and deception networks that blend traps throughout production.',
    whyItMatters:
      'Traditional security looks for known bad behavior. Deception technology flips this — any interaction with a honeypot or honeytoken is definitionally malicious, enabling detection with near-zero false positives and revealing attacker techniques in a safe environment.',
    analogy:
      'Like a dye pack in a cash drawer — the money looks real, but touching it marks the thief. A honeytoken in a database looks like a real credential but triggers an alert the instant it is used.',
    soundsSmartToSay:
      '"We deployed honeytokens in our S3 buckets — fake AWS credentials that look real but trigger alerts the moment anyone tries to use them. It is our most reliable indicator of a breach."',
    commonConfusions: [
      'Honeypots vs production decoys: Research honeypots capture and study attacker tools. Production honeypots (now called deception technology) operate inside your real environment to detect active intrusions.',
      'Honeypots do not stop attacks — they detect them. An attacker who interacts with a honeypot is already inside your network. The value is early detection and intelligence, not prevention.',
    ],
    relatedTerms: ['Threat Hunting', 'Deception Technology', 'Lateral Movement Detection', 'UEBA'],
  },
  {
    id: 'cyber-soc2-audit',
    domain: 'cyber',
    title: 'Security Audit',
    subtitle: 'Independent verification of security controls',
    difficulty: 'beginner',
    tags: ['audit', 'compliance', 'assurance'],
    definition:
      'A security audit is an independent assessment of an organization\'s security controls, policies, and practices. External audits are conducted by third parties and produce reports used for compliance (SOC 2, ISO 27001) or vendor assurance. Internal audits identify gaps before external reviews.',
    whyItMatters:
      'Self-attestation only goes so far. External audits provide independent assurance to customers, regulators, and board members that security controls are real and operating effectively.',
    analogy:
      'Like a financial audit by an external accounting firm. The company prepares their accounts (security controls), the auditor independently tests them, and the resulting opinion tells third parties how much to trust the books.',
    soundsSmartToSay:
      '"We need to do an internal readiness assessment before the external SOC 2 audit — we want to find and remediate control gaps ourselves, not have auditors discover them first."',
    commonConfusions: [
      'Audit vs assessment vs pentest: An audit tests whether controls exist and operate. An assessment evaluates risk and maturity. A pentest actively attempts to compromise systems.',
      'SOC 2 report vs certification: SOC 2 produces an auditor opinion (attestation report), not a certification. ISO 27001 produces a certification. The distinction matters when customers ask which one you have.',
    ],
    relatedTerms: ['SOC 2', 'ISO 27001', 'GRC', 'Compliance'],
  },
  {
    id: 'cyber-network-monitoring',
    domain: 'cyber',
    title: 'Network Detection and Response (NDR)',
    subtitle: 'Monitoring network traffic for threats and anomalies',
    difficulty: 'intermediate',
    tags: ['network security', 'traffic analysis', 'detection'],
    definition:
      'NDR tools monitor and analyze network traffic — both perimeter (north-south) and internal (east-west) — using behavioral analytics and ML to detect threats that bypass endpoint and perimeter controls. They identify lateral movement, command-and-control communication, data exfiltration, and network anomalies.',
    whyItMatters:
      'EDR sees what happens on endpoints. NDR sees what happens on the network — including communication between devices that EDR agents might miss or might not be installed on (IoT, OT, network devices).',
    analogy:
      'Like wiretapping the corridors and hallways of a building instead of just watching each individual room. You see who is talking to whom, what they are carrying, and which way they are moving — revealing coordinated activities that room-level cameras miss.',
    soundsSmartToSay:
      '"Our SIEM gets firewall logs but no actual traffic analysis — NDR would give us behavioral detection for lateral movement and C2 communication that firewall rules alone cannot catch."',
    commonConfusions: [
      'NDR vs IDS/IPS: Traditional IDS/IPS matches signatures. NDR uses behavioral analytics and ML to detect anomalies that have no signature — better for novel attacks and insider threats.',
      'NDR vs SIEM: A SIEM correlates logs from multiple sources. NDR specifically analyzes network traffic using deep packet inspection and flow analysis — providing network-native detection.',
    ],
    relatedTerms: ['EDR', 'XDR', 'Network Security', 'Behavioral Analytics'],
  },
  {
    id: 'cyber-identity-governance',
    domain: 'cyber',
    title: 'Identity Governance',
    subtitle: 'Controlling, reviewing, and certifying who has access to what',
    difficulty: 'intermediate',
    tags: ['identity', 'access certification', 'governance'],
    definition:
      'Identity governance is the set of processes for managing identity lifecycle, access certification, separation of duties, and policy enforcement across all users and systems. Tools like SailPoint and Saviynt automate access reviews, flag excessive permissions, and produce audit reports for compliance.',
    whyItMatters:
      'Access accumulates over time — employees change roles, projects end, but permissions persist. Identity governance creates visibility into who has access to what and ensures that access is periodically reviewed and revoked when no longer needed.',
    analogy:
      'Like a building security review every quarter: check which badge profiles exist, who still works here, and whether each person still needs the rooms their badge opens. Revoke access that no longer matches job requirements.',
    soundsSmartToSay:
      '"Our access reviews are manual and quarterly — by the time we finish reviewing, the data is already stale. We need automated continuous access certification, especially for privileged accounts."',
    commonConfusions: [
      'Identity governance vs IAM: IAM manages authentication and authorization day-to-day. Identity governance adds oversight, review, and attestation — the audit and compliance layer on top of IAM.',
      'Access certification vs access review: An access certification is the formal process where managers attest that their employees\' access is appropriate. An access review can be informal or automated. Certifications are required for compliance.',
    ],
    relatedTerms: ['IAM', 'RBAC', 'Access Reviews', 'Least Privilege'],
  },
];
