import type { Card } from '../types';

export const networkingCards: Card[] = [
  {
    id: 'net-bgp',
    domain: 'networking',
    title: 'BGP',
    subtitle: 'Border Gateway Protocol — the routing protocol of the internet',
    difficulty: 'intermediate',
    tags: ['routing', 'internet', 'protocol'],
    definition:
      'BGP is the routing protocol that exchanges routing information between autonomous systems (ISPs, enterprises, cloud providers) and determines how packets travel across the internet.',
    whyItMatters:
      'BGP is how the internet decides which path your traffic takes. Misconfigured BGP (BGP hijacking) can redirect entire countries\' traffic. Cloud providers use BGP for direct connects and peering.',
    analogy:
      'Like a GPS for the entire internet — except every country manages its own road signs and they all have to negotiate with each other about which routes they advertise.',
    soundsSmartToSay:
      '"The cloud provider\'s BGP session is dropping — we need to check whether our AS path filters are accepting their route advertisements."',
    commonConfusions: [
      'iBGP vs eBGP: iBGP runs within one autonomous system (e.g., between your routers). eBGP runs between different autonomous systems (e.g., between you and your ISP).',
      'BGP is a path vector protocol, not a distance vector or link-state protocol. It chooses routes based on policy and AS path attributes, not just hop count or link cost.',
    ],
    relatedTerms: ['ASN', 'AS Path', 'Route Advertising', 'MPLS'],
  },
  {
    id: 'net-dns',
    domain: 'networking',
    title: 'DNS',
    subtitle: 'The internet\'s phone book',
    difficulty: 'beginner',
    tags: ['resolution', 'records', 'protocol'],
    definition:
      'DNS (Domain Name System) translates human-readable domain names (example.com) into IP addresses that routers can use. It is a distributed, hierarchical database with billions of records.',
    whyItMatters:
      'Everything on the internet starts with DNS. A misconfigured DNS record takes down services. DNS is also a common attack vector (DNS poisoning, DNS tunneling) and exfiltration channel.',
    analogy:
      'Like a phone directory — you look up a name and get a phone number. Except the directory is distributed across thousands of servers globally with caching and TTLs.',
    soundsSmartToSay:
      '"Check the TTL on that record — if it\'s set to 3600 (1 hour), a DNS change will take an hour to propagate globally."',
    commonConfusions: [
      'DNS record types: A (IPv4 address), AAAA (IPv6), CNAME (alias), MX (mail), TXT (verification/SPF/DKIM), NS (nameserver). Knowing the difference matters for configuration.',
      'DNS caching: Resolvers cache records for the TTL duration. Lowering TTL before a cutover and raising it after is standard practice for zero-downtime migrations.',
    ],
    relatedTerms: ['TTL', 'Resolver', 'Authoritative DNS', 'Split Horizon DNS'],
  },
  {
    id: 'net-tcp-udp',
    domain: 'networking',
    title: 'TCP vs UDP',
    subtitle: 'Reliable vs fast transport protocols',
    difficulty: 'beginner',
    tags: ['transport', 'protocol', 'reliability'],
    definition:
      'TCP provides reliable, ordered delivery with acknowledgment and retransmission — guaranteed delivery but with overhead. UDP is connectionless and fast with no guarantees — packets may arrive out of order or not at all.',
    whyItMatters:
      'Choosing TCP vs UDP is a fundamental design decision. HTTP/HTTPS, databases, and file transfers use TCP. Real-time video, DNS queries, and gaming use UDP. QUIC (HTTP/3) rebuilds TCP features on UDP for better web performance.',
    analogy:
      'TCP is like certified mail — tracked, confirmed, and resent if lost. UDP is like a postcard — dropped in the mailbox, no confirmation, sometimes lost but much faster.',
    soundsSmartToSay:
      '"For our telemetry pipeline, UDP is fine — losing a few metrics is acceptable. For financial transactions, we need TCP guarantees."',
    commonConfusions: [
      'UDP is not always "unreliable" in practice — at the application layer you can add your own reliability. QUIC and WebRTC do this.',
      'TCP\'s three-way handshake (SYN, SYN-ACK, ACK) adds latency. This is one reason multiplexed protocols like HTTP/2 and QUIC were created.',
    ],
    relatedTerms: ['QUIC', 'HTTP/3', 'Port', 'Socket'],
  },
  {
    id: 'net-load-balancer',
    domain: 'networking',
    title: 'Load Balancer',
    subtitle: 'Distributing traffic across multiple servers',
    difficulty: 'beginner',
    tags: ['availability', 'traffic', 'L4 L7'],
    definition:
      'A load balancer sits in front of a group of servers and distributes incoming requests across them. It performs health checks and stops sending traffic to unhealthy servers — enabling both scale and high availability.',
    whyItMatters:
      'A single server has limits on CPU, memory, and connections. A load balancer lets you add servers to handle more traffic and removes failed servers automatically — users never see a single point of failure.',
    analogy:
      'Like a maitre d\' at a restaurant — directing arriving guests to the tables with capacity, skipping the sections where servers are overwhelmed, and never seating anyone at a closed table.',
    soundsSmartToSay:
      '"We need sticky sessions for our stateful app — the L7 load balancer needs to route the same user to the same backend every time."',
    commonConfusions: [
      'L4 vs L7 load balancer: L4 (transport layer) routes based on IP and port — fast but dumb. L7 (application layer) can route based on URL paths, headers, and cookies — smarter but more overhead.',
      'Load balancer vs API gateway: An API gateway does load balancing but also adds auth, rate limiting, and request transformation. Not always interchangeable.',
    ],
    relatedTerms: ['Health Check', 'Round Robin', 'Sticky Sessions', 'API Gateway'],
  },
  {
    id: 'net-firewall',
    domain: 'networking',
    title: 'Firewall',
    subtitle: 'Network traffic policy enforcement',
    difficulty: 'beginner',
    tags: ['security', 'traffic', 'policy'],
    definition:
      'A firewall enforces rules about which network traffic is allowed or denied — based on source/destination IP, port, protocol, and (for stateful firewalls) connection state. It is the gatekeeper between network segments.',
    whyItMatters:
      'Without firewalls, every service on your network is reachable from everywhere. Firewalls create security boundaries and limit what an attacker can reach if they breach one part of your network.',
    analogy:
      'Like a border checkpoint — it checks your credentials (source/destination/port) and decides if you are allowed through, turning back unauthorized traffic.',
    soundsSmartToSay:
      '"Our security groups are our firewall in AWS — we need to audit the rules regularly because port 22 being open to 0.0.0.0/0 is never acceptable."',
    commonConfusions: [
      'Stateful vs stateless firewall: A stateful firewall tracks connection state (allows return traffic automatically). A stateless firewall evaluates every packet independently — you must explicitly allow return traffic.',
      'NGFW (Next-Generation Firewall) adds application awareness, IDS/IPS, and TLS inspection on top of traditional packet filtering.',
    ],
    relatedTerms: ['ACL', 'Security Group', 'NGFW', 'DMZ'],
  },
  {
    id: 'net-vpn',
    domain: 'networking',
    title: 'VPN',
    subtitle: 'Encrypted tunnel over public networks',
    difficulty: 'beginner',
    tags: ['encryption', 'remote access', 'tunnel'],
    definition:
      'A VPN creates an encrypted tunnel over a public network (the internet) so that traffic between two points is private and secure — as if it were traveling over a dedicated private line.',
    whyItMatters:
      'Without a VPN, traffic over the internet is visible to ISPs, governments, and attackers on the same network. VPNs protect remote access and site-to-site connections between offices and cloud.',
    analogy:
      'Like a pneumatic tube running under a public street — packages travel in a sealed, tamper-evident tube. Anyone watching the street sees the tube but cannot read what is inside.',
    soundsSmartToSay:
      '"Traditional VPN gives too much network access once connected. We should move to ZTNA — per-application access instead of full network access."',
    commonConfusions: [
      'Consumer VPN vs corporate VPN: Consumer VPNs hide traffic from your ISP. Corporate VPNs connect employees to internal systems. Completely different use cases.',
      'VPN vs ZTNA: VPN gives broad network access to the connected device. ZTNA grants access to specific applications based on identity and device posture — a key Zero Trust component.',
    ],
    relatedTerms: ['ZTNA', 'IPsec', 'WireGuard', 'Split Tunneling'],
  },
  {
    id: 'net-sdwan',
    domain: 'networking',
    title: 'SD-WAN',
    subtitle: 'Software-Defined Wide Area Networking',
    difficulty: 'intermediate',
    tags: ['WAN', 'routing', 'branch'],
    definition:
      'SD-WAN uses software to intelligently route traffic across multiple WAN connections (MPLS, broadband, LTE) based on real-time performance metrics — optimizing for cost, latency, and reliability.',
    whyItMatters:
      'Traditional MPLS WAN is expensive and rigid. SD-WAN lets enterprises use cheaper broadband for most traffic, reserve MPLS for sensitive applications, and centrally manage all branch routing policies.',
    analogy:
      'Like a smart navigation app that routes you based on real-time traffic — it uses the highway when it\'s clear, switches to side streets when the highway jams, prioritizing your commute automatically.',
    soundsSmartToSay:
      '"Our branch offices are on MPLS-only, which is expensive and has single points of failure — SD-WAN with broadband failover would improve both cost and resilience."',
    commonConfusions: [
      'SD-WAN vs MPLS: MPLS is a private circuit with guaranteed QoS but high cost. SD-WAN can use MPLS as one of many transports and supplement with cheaper links.',
      'SD-WAN vs SASE: SASE (Secure Access Service Edge) combines SD-WAN with cloud-delivered security (SWG, CASB, ZTNA). SD-WAN alone is just the network layer.',
    ],
    relatedTerms: ['MPLS', 'SASE', 'QoS', 'Branch Networking'],
  },
  {
    id: 'net-osi',
    domain: 'networking',
    title: 'OSI Model',
    subtitle: 'The 7-layer framework for network communication',
    difficulty: 'beginner',
    tags: ['fundamentals', 'model', 'layers'],
    definition:
      'The OSI model describes network communication as 7 layers: Physical (cables), Data Link (Ethernet/MAC), Network (IP), Transport (TCP/UDP), Session, Presentation, and Application (HTTP/DNS/TLS). Each layer serves the one above it.',
    whyItMatters:
      'The OSI model is the common language for diagnosing network problems. "Is this an L2 or L3 issue?" immediately narrows troubleshooting scope — it tells you whether to look at MAC addresses or IP routing.',
    analogy:
      'Like a postal system — the envelope is the physical layer, addressing is the network layer, the postal service is the transport layer, and your letter\'s language is the application layer. Each layer does its job without caring about the others.',
    soundsSmartToSay:
      '"The load balancer is operating at L7 — it can make routing decisions based on HTTP headers, not just IP and port."',
    commonConfusions: [
      'The OSI model is a reference model, not a strict implementation. TCP/IP (the real internet) uses a 4-layer model that roughly maps to OSI layers 3-7.',
      '"L3 switch" means it can do IP routing. "L4 load balancer" routes on TCP/UDP port. "L7 firewall" inspects application payloads. These are practical shorthand references to OSI layers.',
    ],
    relatedTerms: ['TCP/IP', 'MAC Address', 'IP Address', 'Packet'],
  },
];
