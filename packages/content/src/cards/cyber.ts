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
      'Think of it like a NOC dashboard (which you probably know), but instead of tracking uptime and bandwidth, it is tracking authentication failures, lateral movement, and privilege escalations.',
    soundsSmartToSay:
      '"We need to make sure the SIEM tuning is reducing false positives before we can trust the alert queue."',
    commonConfusions: [
      'SIEM vs SOAR: A SIEM detects and alerts. A SOAR (Security Orchestration, Automation and Response) automatically responds — SOAR acts on what the SIEM finds.',
      'SIEM vs log aggregation: A plain log aggregator (like ELK) stores logs. A SIEM adds correlation rules, threat intelligence, and alerting on top.',
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
      "Like having CCTV with motion alerts on every endpoint, not just the perimeter. If something weird happens on a laptop at 2am, you know about it instantly.",
    soundsSmartToSay:
      '"We need EDR coverage on all endpoints before we can claim we have real-time visibility into the estate."',
    commonConfusions: [
      'EDR vs antivirus: Antivirus blocks known bad files. EDR monitors live behavior and can respond — roll back changes, kill processes, isolate the host.',
      'EDR vs XDR: XDR (Extended) correlates across endpoints, network, and cloud. EDR is endpoint-only.',
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
      'Like getting a law enforcement bulletin about known car thieves operating in your area, with their methods and the vehicles they target — so you can take specific precautions.',
    soundsSmartToSay:
      '"We need to operationalize our threat intel — feeding IOCs into the SIEM automatically rather than reading PDF reports.',
    commonConfusions: [
      'Strategic vs tactical intel: Strategic intel (e.g., nation-state actors targeting healthcare) informs leadership decisions. Tactical intel (malicious IPs, hashes) feeds directly into security tools.',
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
      'IAM vs PAM: IAM covers all identities. PAM (Privileged Access Management) specifically handles admin and root-level accounts with extra controls.',
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
      'CVSS score vs actual risk: A CVSS 9.8 vulnerability on an internal-only server with no internet exposure may be less urgent than a CVSS 7 on an internet-facing system.',
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
      'A SOC is the centralized team — and often the physical room — responsible for continuously monitoring, detecting, analyzing, and responding to security incidents across an organization. It operates around the clock, staffed by analysts at multiple tiers who triage alerts and escalate real threats.',
    whyItMatters:
      'Buying security tools without a SOC to operate them is like buying a fire alarm system with no fire department. The SOC turns tooling investments into actual protection by ensuring every alert is investigated and every incident gets a response.',
    analogy:
      'If you come from IT operations, the SOC is the security equivalent of a NOC. The NOC watches availability and performance; the SOC watches for adversaries. Both run 24/7, both triage by severity, and both escalate when something exceeds their tier.',
    soundsSmartToSay:
      '"Standing up a SOC is not just hiring analysts — we need defined runbooks, proper SIEM tuning, and clear escalation paths or we will drown in alert fatigue."',
    commonConfusions: [
      'SOC vs SIEM: A SIEM is a tool that collects and correlates logs. The SOC is the team and process that uses the SIEM (among other tools) to protect the organization.',
      'Tier 1 vs Tier 3 analysts: Tier 1 triages alerts, Tier 2 investigates confirmed incidents, and Tier 3 handles advanced threat hunting and forensics. Not every SOC analyst does the same job.',
      'In-house SOC vs MDR: A managed detection and response (MDR) provider is essentially an outsourced SOC — useful when you cannot staff 24/7 coverage internally.',
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
      'DLP is a set of tools and policies that detect and prevent sensitive data — credit card numbers, source code, PII, health records — from leaving the organization through unauthorized channels like email, USB drives, or cloud uploads. It works by classifying data, monitoring how it moves, and enforcing rules that block or flag risky transfers.',
    whyItMatters:
      'A single data breach can trigger regulatory fines, lawsuits, and irreparable brand damage. DLP gives the business verifiable proof that sensitive data is being controlled, which is often a hard requirement for compliance frameworks like PCI-DSS, HIPAA, and GDPR.',
    analogy:
      'Think of it like the baggage screening at an airport — everything leaving the perimeter gets scanned, and items that match a prohibited pattern get stopped. Just as airport security does not care how the contraband got into the bag, DLP does not care whether the exfiltration is malicious or accidental — it blocks it either way.',
    soundsSmartToSay:
      '"DLP only works if we have solid data classification first — you cannot protect what you have not labeled."',
    commonConfusions: [
      'DLP vs encryption: Encryption protects data in transit and at rest from unauthorized reading. DLP prevents data from being sent to the wrong place entirely — they are complementary, not interchangeable.',
      'Network DLP vs endpoint DLP: Network DLP inspects traffic at the perimeter (email gateways, proxies). Endpoint DLP monitors local actions like copying to USB or printing. A complete program needs both.',
      'DLP is not just blocking: Effective DLP programs often start in monitor-only mode to understand data flows before enforcing restrictions — jumping straight to blocking causes operational disruption.',
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
      'SOAR platforms connect your security tools together and automate repetitive response workflows — called playbooks — so that when an alert fires, actions like enriching IOCs, creating tickets, isolating hosts, and notifying stakeholders happen in seconds instead of hours. It combines orchestration (connecting tools), automation (executing without humans), and case management into one platform.',
    whyItMatters:
      'SOC analysts are expensive and overwhelmed by alert volume. SOAR multiplies their effectiveness by automating the mechanical steps of incident response, letting humans focus on judgment calls. Organizations using SOAR typically cut mean time to respond (MTTR) from hours to minutes.',
    analogy:
      'If you have used infrastructure-as-code tools like Ansible or Terraform, SOAR is the same idea applied to security operations. Instead of writing a playbook to configure servers, you write a playbook to respond to a phishing alert — automatically pulling email headers, checking the sender against threat intel, quarantining the message, and resetting the user password.',
    soundsSmartToSay:
      '"We should not automate a bad process — before building SOAR playbooks, we need to document and validate our manual runbooks."',
    commonConfusions: [
      'SOAR vs SIEM: A SIEM detects and alerts. SOAR takes action on those alerts. They are typically deployed together, with the SIEM feeding alerts into the SOAR for automated triage and response.',
      'SOAR does not replace analysts: It handles the repetitive 80% so analysts can focus on the complex 20%. Fully removing humans from the loop is neither the goal nor advisable.',
      'Playbook vs runbook: In SOAR, a playbook is an automated workflow the platform executes. A runbook is a human-readable document describing manual steps. SOAR converts runbooks into playbooks.',
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
      'PKI is the full ecosystem of certificate authorities (CAs), digital certificates, key pairs, and policies that enable entities — users, servers, devices — to establish trusted, encrypted communication. It is the foundation that makes TLS/HTTPS, code signing, email encryption, and mutual authentication work at scale by binding public keys to verified identities.',
    whyItMatters:
      'Every HTTPS connection your organization serves, every VPN tunnel, and every signed software update depends on PKI. A misconfigured or compromised internal CA can silently undermine the trust model for your entire environment, making it a critical — but often under-resourced — piece of infrastructure.',
    analogy:
      'PKI works like a passport system. A certificate authority is the government that issues passports (certificates). When you present your passport at a border (a TLS handshake), the other party trusts your identity because they trust the issuing government. An internal CA is like your company issuing its own employee badges — trusted within the building but not outside.',
    soundsSmartToSay:
      '"We need to audit our certificate lifecycle — expired or mis-issued internal CA certs are a ticking time bomb for outages and trust chain failures."',
    commonConfusions: [
      'Public CA vs internal CA: Public CAs (like Let\'s Encrypt or DigiCert) issue certificates trusted by browsers. Internal CAs issue certificates for internal services, device authentication, and code signing — they require manual trust distribution.',
      'Certificate vs key: A certificate is a public document binding an identity to a public key, signed by a CA. The private key is the secret that proves ownership. Confusing the two leads to dangerous mishandling of key material.',
      'PKI is not just TLS: While HTTPS is the most visible use case, PKI also underpins S/MIME email, smart card authentication, document signing, and device enrollment in MDM systems.',
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
      'MITRE ATT&CK is a publicly available, continuously updated knowledge base that catalogs the real-world tactics (the "why"), techniques (the "how"), and procedures (the specific implementation) that adversaries use across the attack lifecycle. It is organized into matrices covering enterprise, mobile, and cloud environments.',
    whyItMatters:
      'ATT&CK gives security teams a common language and a structured way to evaluate detection coverage. By mapping your SIEM rules and EDR detections against the ATT&CK matrix, you can identify specific gaps — for example, you might detect initial access well but be blind to lateral movement techniques.',
    analogy:
      'If you are familiar with ITIL for IT service management, ATT&CK serves a similar role for offensive security — it is the standardized taxonomy that everyone references. Just as ITIL gives you a shared vocabulary for incident vs. problem vs. change, ATT&CK gives you a shared vocabulary for credential dumping vs. pass-the-hash vs. Kerberoasting.',
    soundsSmartToSay:
      '"We mapped our detection coverage against MITRE ATT&CK and found we have almost no visibility into the Persistence and Defense Evasion columns — that should drive our next tooling investment."',
    commonConfusions: [
      'ATT&CK vs kill chain: The Lockheed Martin kill chain is a linear, high-level model (recon → delivery → exploitation → etc.). ATT&CK is granular and non-linear — it describes hundreds of specific techniques within each phase.',
      'ATT&CK is not a checklist: Covering every technique is neither practical nor the goal. The value is in prioritizing coverage based on the threat actors most relevant to your industry and environment.',
      'Tactic vs technique: A tactic is the adversary\'s goal (e.g., "Credential Access"). A technique is how they achieve it (e.g., "OS Credential Dumping"). Each tactic contains many techniques.',
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
      'Ransomware is a category of malware that encrypts a victim\'s files, databases, or entire systems and demands payment — usually in cryptocurrency — for the decryption key. Modern variants also exfiltrate data before encrypting, enabling "double extortion" where attackers threaten to leak stolen data even if backups exist.',
    whyItMatters:
      'Ransomware is the single most financially damaging cyber threat to organizations today. A successful attack can halt business operations for weeks, and the total cost — including downtime, recovery, legal fees, and reputational harm — typically dwarfs the ransom amount itself.',
    analogy:
      'Imagine arriving at work to find someone has changed every lock in the building, put all your filing cabinets in a vault, and left a note demanding payment for the new keys. Even if you have copies of the documents stored off-site (backups), they are also threatening to post your confidential files publicly if you do not pay.',
    soundsSmartToSay:
      '"Paying the ransom does not guarantee recovery and funds the next attack. Our best defense is tested, offline backups with validated restore procedures."',
    commonConfusions: [
      'Ransomware vs other malware: Not all malware is ransomware. Trojans, worms, and spyware have different objectives. Ransomware specifically encrypts data for extortion.',
      'Backups alone do not solve it: Double extortion means attackers leak stolen data even if you restore from backups. Prevention and detection still matter — backups are the last line of defense, not the only line.',
      'Ransomware is a business model, not just malware: Ransomware-as-a-Service (RaaS) operations run like businesses with affiliates, customer support, and negotiation teams.',
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
      'Supply chain security focuses on identifying and mitigating risks introduced through third-party software, hardware, services, and vendors that your organization depends on. This includes open-source libraries in your code, SaaS platforms with API access to your data, managed service providers with network access, and even firmware in your hardware — any link in the chain can become an attack vector.',
    whyItMatters:
      'Attacks like SolarWinds and the Log4Shell vulnerability demonstrated that compromising one supplier can cascade to thousands of downstream organizations simultaneously. Regulators are now mandating SBOMs (Software Bills of Materials) and third-party risk assessments, and customers increasingly require supply chain security attestations before signing contracts.',
    analogy:
      'In manufacturing, a single contaminated ingredient can trigger a recall across every product that uses it. Software supply chain security is the same principle — if a malicious package lands in a shared library, every application depending on that library is compromised. Just as food safety requires tracking ingredients back to the farm, software security increasingly requires tracking dependencies back to the source.',
    soundsSmartToSay:
      '"We need to generate SBOMs for our production applications and continuously monitor our dependency tree for newly disclosed vulnerabilities — point-in-time audits are not enough."',
    commonConfusions: [
      'Supply chain security is not just vendor questionnaires: Traditional third-party risk management sends spreadsheets to vendors. Modern supply chain security requires continuous monitoring, SBOM analysis, and technical validation of software integrity.',
      'Open-source risk vs commercial risk: Open-source dependencies are often better audited because the code is visible, but they can also be silently hijacked (typosquatting, maintainer takeover). Commercial software can be compromised at the build pipeline (as in SolarWinds). Both require vigilance.',
      'SBOM is not a one-time artifact: An SBOM is only useful if it is generated automatically on every build and continuously cross-referenced against vulnerability databases like the NVD.',
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
      'XDR extends the detection-and-response model beyond endpoints by natively integrating telemetry from endpoints, network traffic, cloud workloads, email, and identity systems into a single platform with unified correlation and automated response. Unlike stitching together separate tools, XDR is designed to correlate signals across domains out of the box.',
    whyItMatters:
      'Attackers do not stay on one endpoint — they move laterally across network segments, escalate privileges in the identity system, and exfiltrate through cloud storage. XDR closes the visibility gaps between siloed tools and gives analysts a single correlated view of an attack, dramatically reducing investigation time.',
    analogy:
      'If EDR is a security camera on every door, XDR is a unified surveillance system covering the doors, hallways, parking lot, and loading dock — with a single control room that automatically correlates footage across cameras. Instead of reviewing five separate feeds, the analyst sees one timeline of the intruder moving through the building.',
    soundsSmartToSay:
      '"We are getting alerts from EDR, the firewall, and our cloud SIEM but nobody is correlating them — an XDR platform would give us cross-domain detection without building all the integration ourselves."',
    commonConfusions: [
      'XDR vs EDR: EDR monitors endpoints only. XDR correlates across endpoints, network, cloud, email, and identity. XDR is the evolution, not just a rebranding.',
      'XDR vs SIEM: A SIEM ingests logs from everything but requires manual rule-writing and tuning. XDR provides pre-built, vendor-curated detections across its integrated data sources, trading flexibility for faster time to value.',
      'Open XDR vs native XDR: Native XDR uses a single vendor\'s tools (e.g., Microsoft Defender suite). Open XDR integrates across multiple vendors. The trade-off is depth of integration vs. vendor flexibility.',
    ],
    relatedTerms: ['EDR', 'SIEM', 'SOC', 'Threat Detection'],
  },
  {
    id: 'cyber-soc',
    domain: 'cyber',
    title: 'SOC',
    subtitle: 'Security Operations Center',
    difficulty: 'beginner',
    tags: ['operations', 'monitoring', 'team'],
    definition:
      'A SOC is the centralized team (and often a physical room) responsible for monitoring, detecting, and responding to security incidents 24/7. Analysts watch dashboards, triage alerts, and escalate confirmed threats.',
    whyItMatters:
      'Technology alone does not stop breaches — someone has to watch the screens. A SOC turns expensive security tools into actual outcomes by staffing trained analysts who can separate real threats from noise.',
    analogy:
      'Like a NOC for security. Just as a Network Operations Center monitors uptime and performance, a SOC monitors for threats and intrusions. Many orgs physically co-locate the two.',
    soundsSmartToSay:
      '"Our SOC is drowning in false positives — we need better SIEM tuning before we add more data sources."',
    commonConfusions: [
      'SOC vs SIEM: The SIEM is a tool; the SOC is the team and processes that use it. You can have a SIEM without a SOC, but you will miss most alerts.',
      'SOC vs CSIRT: A CSIRT (Computer Security Incident Response Team) focuses on incident response after detection. The SOC handles the broader monitoring and detection mission.',
      'In-house vs MSSP: Many companies outsource their SOC to a Managed Security Service Provider rather than building one internally.',
    ],
    relatedTerms: ['SIEM', 'SOAR', 'MSSP', 'Incident Response'],
  },
  {
    id: 'cyber-dlp',
    domain: 'cyber',
    title: 'DLP',
    subtitle: 'Data Loss Prevention',
    difficulty: 'intermediate',
    tags: ['data', 'prevention', 'compliance'],
    definition:
      'DLP is a set of tools and policies that detect and prevent sensitive data — credit card numbers, source code, health records — from leaving the organization through email, USB drives, cloud uploads, or other channels.',
    whyItMatters:
      'Insider threats and accidental data leaks are among the top causes of breaches. DLP is the safety net that catches sensitive data before it walks out the door, and it is often required for regulatory compliance.',
    analogy:
      'Like an airport scanner for data. Just as TSA screens bags for prohibited items before they leave the terminal, DLP scans outbound communications for sensitive patterns before they leave the network.',
    soundsSmartToSay:
      '"We should classify our data first — DLP is only as good as the data classification policies it enforces."',
    commonConfusions: [
      'DLP vs encryption: Encryption protects data in transit or at rest. DLP prevents data from going where it should not go in the first place. They are complementary, not interchangeable.',
      'DLP vs CASB: A CASB (Cloud Access Security Broker) controls access to cloud services. DLP is specifically about preventing sensitive data exfiltration, though CASBs often include DLP features.',
    ],
    relatedTerms: ['Data Classification', 'CASB', 'Insider Threat', 'GDPR'],
  },
  {
    id: 'cyber-soar',
    domain: 'cyber',
    title: 'SOAR',
    subtitle: 'Security Orchestration, Automation and Response',
    difficulty: 'intermediate',
    tags: ['automation', 'response', 'orchestration'],
    definition:
      'SOAR platforms automate repetitive security tasks — like enriching alerts with threat intelligence, isolating compromised hosts, or creating tickets — by wiring together security tools into automated workflows called playbooks.',
    whyItMatters:
      'SOC analysts spend most of their time on repetitive triage. SOAR cuts response times from hours to seconds for common scenarios and frees analysts to focus on complex, novel threats.',
    analogy:
      'Like Ansible or Terraform for security workflows. Just as IaC automates infrastructure provisioning, SOAR automates incident response steps — but the "infrastructure" it orchestrates is your security toolchain.',
    soundsSmartToSay:
      '"We should automate the tier-1 phishing triage playbook in our SOAR so analysts can focus on the alerts that actually need human judgment."',
    commonConfusions: [
      'SOAR vs SIEM: A SIEM detects threats by correlating logs. A SOAR responds to them by automating actions. Most mature SOCs run both — the SIEM feeds the SOAR.',
      'SOAR vs XDR: XDR also provides automated response but is typically a single-vendor solution. SOAR is vendor-agnostic and orchestrates across your entire security stack.',
    ],
    relatedTerms: ['SIEM', 'Playbook', 'SOC', 'Incident Response'],
  },
  {
    id: 'cyber-pki',
    domain: 'cyber',
    title: 'PKI',
    subtitle: 'Public Key Infrastructure',
    difficulty: 'advanced',
    tags: ['encryption', 'certificates', 'trust'],
    definition:
      'PKI is the framework of certificate authorities (CAs), digital certificates, and cryptographic keys that enables secure communication over networks. It is the trust backbone behind HTTPS, email signing, VPNs, and code signing.',
    whyItMatters:
      'Every HTTPS connection your users make relies on PKI. Internal PKI secures service-to-service communication in microservices, mTLS in service meshes, and device authentication in Zero Trust architectures.',
    analogy:
      'Like the passport system for the internet. A CA is the government that issues passports (certificates). When two parties meet, they verify each other by checking that a trusted government issued the other person\'s passport.',
    soundsSmartToSay:
      '"We need to rotate our internal CA before the root cert expires — a lapsed root takes down every service doing mTLS."',
    commonConfusions: [
      'PKI vs encryption: PKI manages trust and identity through certificates. Encryption is the math that scrambles data. PKI provides the keys for encryption, but they are different layers.',
      'Public CA vs internal CA: Let\'s Encrypt issues certificates for public websites. Internal CAs (like HashiCorp Vault or Active Directory CS) issue certificates for internal service-to-service trust.',
      'Certificate vs key: A certificate is a public document that proves identity. A private key is the secret that only the certificate owner holds. Compromising the private key compromises the entire trust chain.',
    ],
    relatedTerms: ['mTLS', 'Certificate Authority', 'TLS', 'Zero Trust'],
  },
  {
    id: 'cyber-mitre-attack',
    domain: 'cyber',
    title: 'MITRE ATT&CK',
    subtitle: 'A common language for adversary behavior',
    difficulty: 'intermediate',
    tags: ['framework', 'threat-modeling', 'detection'],
    definition:
      'MITRE ATT&CK is a knowledge base that catalogs real-world adversary tactics and techniques — from initial access through lateral movement to data exfiltration — organized into a matrix. Security teams use it to map their detection coverage.',
    whyItMatters:
      'Without a common framework, security discussions are vague. ATT&CK gives teams a shared vocabulary to say "we can detect T1566 (Phishing) but have no coverage for T1021 (Remote Services)" — turning security gaps into concrete action items.',
    analogy:
      'Like the OSI model for attacks. Just as the OSI model gives networking teams a shared framework to discuss where a problem lives (Layer 3 vs Layer 7), ATT&CK gives security teams a framework to discuss where their defenses are strong or weak.',
    soundsSmartToSay:
      '"Let us map our SIEM detection rules to the ATT&CK matrix so we can see which tactics we actually have coverage for."',
    commonConfusions: [
      'ATT&CK vs kill chain: The Cyber Kill Chain (Lockheed Martin) is a linear model of attack phases. ATT&CK is a matrix of specific techniques within each phase — it is more granular and practical for detection engineering.',
      'ATT&CK is descriptive, not prescriptive: It tells you what attackers do, not what defenses to deploy. You still need to decide which techniques to prioritize based on your threat model.',
    ],
    relatedTerms: ['Threat Modeling', 'Kill Chain', 'Detection Engineering', 'SIEM'],
  },
  {
    id: 'cyber-ransomware',
    domain: 'cyber',
    title: 'Ransomware',
    subtitle: 'Pay up or lose your data',
    difficulty: 'beginner',
    tags: ['malware', 'incident', 'encryption'],
    definition:
      'Ransomware is malware that encrypts a victim\'s files or systems and demands payment (usually cryptocurrency) for the decryption key. Modern variants also steal data and threaten to publish it (double extortion).',
    whyItMatters:
      'Ransomware is the number one threat to business continuity. A single incident can halt operations for weeks, cost millions in recovery, and trigger regulatory reporting requirements. It is the risk that makes CFOs care about security.',
    analogy:
      'Like someone changing the locks on your data center and mailing you a ransom note. You still own the building, but you cannot get in — and the locksmith (decryption key) only comes if you pay.',
    soundsSmartToSay:
      '"Immutable backups are our best ransomware defense — if the attacker cannot encrypt or delete our backup chain, paying the ransom is off the table."',
    commonConfusions: [
      'Ransomware vs other malware: All ransomware is malware, but not all malware is ransomware. Trojans steal data quietly; ransomware makes itself known because the business model requires the victim to pay.',
      'Paying does not guarantee recovery: Even when victims pay, decryptors sometimes fail or are intentionally slow. Law enforcement generally advises against paying.',
      'Ransomware-as-a-Service (RaaS): Most ransomware is now operated as a franchise — the developers license the malware to affiliates who carry out attacks and split the profits.',
    ],
    relatedTerms: ['Incident Response', 'Backup & DR', 'Phishing', 'Business Continuity'],
  },
  {
    id: 'cyber-supply-chain',
    domain: 'cyber',
    title: 'Supply Chain Security',
    subtitle: 'Trusting the code you did not write',
    difficulty: 'advanced',
    tags: ['dependencies', 'sbom', 'third-party'],
    definition:
      'Supply chain security focuses on protecting the software and hardware components you depend on but did not build — open-source libraries, vendor APIs, CI/CD tools, and hardware firmware. A compromise anywhere in the chain can propagate to your systems.',
    whyItMatters:
      'The SolarWinds and Log4Shell incidents proved that attackers target the supply chain because one compromised library can give access to thousands of downstream organizations simultaneously.',
    analogy:
      'Like food safety in a restaurant. You can run the cleanest kitchen in town, but if your supplier delivers contaminated ingredients, your customers still get sick. SBOMs are the ingredient labels of software.',
    soundsSmartToSay:
      '"We need to generate SBOMs for our releases and set up automated CVE scanning against our dependency tree — we cannot secure what we cannot inventory."',
    commonConfusions: [
      'Supply chain vs dependency management: Dependency management is about version resolution. Supply chain security is about verifying that those dependencies have not been tampered with or backdoored.',
      'SBOM vs vulnerability scan: An SBOM (Software Bill of Materials) is an inventory of components. A vulnerability scan checks that inventory against known CVEs. You need the SBOM first.',
      'First-party vs third-party risk: Your own CI/CD pipeline is also part of your supply chain. A compromised build server can inject malicious code into your own artifacts.',
    ],
    relatedTerms: ['SBOM', 'CVE', 'Dependency Scanning', 'Zero Trust'],
  },
  {
    id: 'cyber-xdr',
    domain: 'cyber',
    title: 'XDR',
    subtitle: 'Extended Detection and Response',
    difficulty: 'intermediate',
    tags: ['detection', 'response', 'platform'],
    definition:
      'XDR is a security platform that unifies detection and response across endpoints, network, cloud, email, and identity into a single correlated view. Unlike bolting a SIEM onto separate tools, XDR natively integrates telemetry for faster, more accurate threat detection.',
    whyItMatters:
      'Security teams drown in alerts from disconnected tools. XDR reduces alert fatigue by correlating signals across domains — a suspicious login, followed by unusual file access, followed by data exfiltration becomes one high-confidence incident instead of three low-priority alerts.',
    analogy:
      'Like unified observability (Datadog, Grafana) but for security. Just as a DevOps team wants metrics, logs, and traces in one pane, a security team wants endpoint, network, and identity telemetry correlated in one platform.',
    soundsSmartToSay:
      '"XDR gives us cross-domain correlation out of the box — we should evaluate whether it can replace our SIEM for detection or if we need both."',
    commonConfusions: [
      'XDR vs EDR: EDR focuses only on endpoints. XDR extends detection and response across endpoints, network, cloud, and identity — the "X" means extended.',
      'XDR vs SIEM: A SIEM ingests logs from anything and requires manual correlation rules. XDR natively integrates a curated set of data sources for tighter, faster correlation — but is usually limited to one vendor ecosystem.',
    ],
    relatedTerms: ['EDR', 'SIEM', 'SOAR', 'SOC'],
  },
];
