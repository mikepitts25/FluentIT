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
];
