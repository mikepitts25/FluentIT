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
  {
    id: 'net-vlan',
    domain: 'networking',
    title: 'VLAN',
    subtitle: 'Virtual LAN — logical network segmentation on shared hardware',
    difficulty: 'beginner',
    tags: ['segmentation', 'switching', 'L2'],
    definition:
      'A VLAN (Virtual Local Area Network) divides a single physical switch into multiple isolated broadcast domains, so devices on different VLANs cannot communicate without a router — even if they share the same switch hardware. Each VLAN gets its own broadcast traffic, ARP table, and subnet.',
    whyItMatters:
      'VLANs let you isolate sensitive systems (PCI payment terminals, IoT devices, guest Wi-Fi) without buying separate switches for each group. They reduce broadcast noise, improve security posture, and simplify compliance scoping by shrinking the boundary of what auditors need to examine.',
    analogy:
      'Think of it like floors in an office building — everyone shares the same physical building and elevator shafts, but each floor has its own key card access. You need to go through the lobby (router) to get from one floor to another.',
    soundsSmartToSay:
      '"We should put the IP phones on a separate voice VLAN with QoS marking so broadcast storms on the data VLAN don\'t take down the phone system."',
    commonConfusions: [
      'VLAN vs subnet: A VLAN is a Layer 2 (switching) concept. A subnet is a Layer 3 (IP) concept. In practice they are almost always paired 1:1, but they are technically independent.',
      'VLANs do not replace firewalls. Traffic routed between VLANs still needs ACLs or firewall rules — a router will happily forward inter-VLAN traffic unless you tell it not to.',
    ],
    relatedTerms: ['802.1Q', 'Trunk Port', 'Broadcast Domain', 'Network Segmentation'],
  },
  {
    id: 'net-nat',
    domain: 'networking',
    title: 'NAT',
    subtitle: 'Network Address Translation — mapping private IPs to public IPs',
    difficulty: 'beginner',
    tags: ['routing', 'IP', 'addressing'],
    definition:
      'NAT translates private IP addresses (e.g., 192.168.x.x) to public IP addresses as traffic leaves your network, allowing many internal devices to share a smaller pool of public IPs. The router maintains a translation table that maps internal source addresses and ports to external ones so return traffic can be routed back correctly.',
    whyItMatters:
      'IPv4 addresses are exhausted — without NAT, every device would need its own public IP. NAT also provides a basic layer of obscurity by hiding internal addressing from the internet. In cloud environments, NAT gateways are critical for allowing private subnet resources to reach the internet for updates and API calls without being directly exposed.',
    analogy:
      'Like a company receptionist who handles all outgoing mail — every letter from any employee goes out with the company\'s return address on it. When a reply comes back, the receptionist looks at a log to figure out which employee it belongs to and routes it to the right desk.',
    soundsSmartToSay:
      '"Our Lambda functions in the private subnet need a NAT gateway to call external APIs — without it they have no outbound internet path, even though they don\'t need inbound access."',
    commonConfusions: [
      'SNAT vs DNAT: Source NAT (SNAT) rewrites the source IP on outbound traffic — this is what your home router does. Destination NAT (DNAT) rewrites the destination IP on inbound traffic — this is how port forwarding and load balancers work.',
      'NAT is not a security feature. It obscures internal IPs but does not inspect or filter traffic. A firewall is still required for actual access control.',
    ],
    relatedTerms: ['Private IP', 'Public IP', 'PAT', 'NAT Gateway'],
  },
  {
    id: 'net-dhcp',
    domain: 'networking',
    title: 'DHCP',
    subtitle: 'Dynamic Host Configuration Protocol — automatic IP assignment',
    difficulty: 'beginner',
    tags: ['addressing', 'protocol', 'automation'],
    definition:
      'DHCP automatically assigns IP addresses, subnet masks, default gateways, and DNS servers to devices when they join a network. The server leases addresses from a defined pool for a configurable duration, and clients must renew the lease before it expires or lose their address.',
    whyItMatters:
      'Manually assigning IPs to hundreds or thousands of devices is operationally impossible and error-prone. DHCP eliminates IP conflicts, enables device mobility (laptops moving between floors), and centralizes network configuration so changes like a new DNS server propagate automatically at next lease renewal.',
    analogy:
      'Like checking into a hotel — the front desk assigns you a room number (IP), tells you the Wi-Fi password (DNS), points you to the elevator (gateway), and your room is yours for the length of your stay (lease). When you check out, the room goes back into the pool.',
    soundsSmartToSay:
      '"Set the DHCP lease time shorter on the guest network — we want IPs recycled quickly so the /24 pool doesn\'t exhaust during conference days."',
    commonConfusions: [
      'DHCP reservation vs static IP: A DHCP reservation assigns the same IP to a specific MAC address every time via the DHCP server. A static IP is configured directly on the device itself. Reservations are easier to manage centrally.',
      'Rogue DHCP servers can hand out wrong IPs and gateways — effectively a man-in-the-middle attack. DHCP snooping on managed switches prevents this.',
    ],
    relatedTerms: ['IP Address', 'Lease', 'DHCP Relay', 'DHCP Snooping'],
  },
  {
    id: 'net-zero-trust',
    domain: 'networking',
    title: 'Zero Trust Networking',
    subtitle: 'Never trust, always verify — identity-based access',
    difficulty: 'intermediate',
    tags: ['security', 'architecture', 'identity'],
    definition:
      'Zero Trust Networking is a security model that eliminates implicit trust based on network location. Instead of assuming devices inside the corporate network are safe, every request is authenticated, authorized, and encrypted regardless of where it originates. Access decisions are based on identity, device posture, and context — not IP address or subnet.',
    whyItMatters:
      'Traditional perimeter security assumes everything inside the firewall is trusted, but breaches, insider threats, and cloud adoption have made that model obsolete. Zero Trust reduces blast radius by granting least-privilege access per application, which means a compromised laptop cannot freely move laterally across the entire network.',
    analogy:
      'Like a building where every single door requires badge access and verifies your identity — not just the front entrance. Even if someone tailgates through the lobby, they still cannot open any office door, server room, or supply closet without proving who they are.',
    soundsSmartToSay:
      '"Moving to Zero Trust means we replace our VPN with per-app ZTNA policies — users authenticate to each application individually, and network location becomes irrelevant to access decisions."',
    commonConfusions: [
      'Zero Trust is an architecture philosophy, not a product you buy. Vendors sell components (ZTNA, microsegmentation, identity providers), but no single product delivers "Zero Trust" end-to-end.',
      'Zero Trust does not mean "no firewall." Firewalls still play a role, but they are supplemented with identity-aware proxies, microsegmentation, and continuous verification.',
    ],
    relatedTerms: ['ZTNA', 'Microsegmentation', 'Identity Provider', 'Least Privilege'],
  },
  {
    id: 'net-network-segmentation',
    domain: 'networking',
    title: 'Network Segmentation',
    subtitle: 'Dividing networks into isolated zones to contain threats',
    difficulty: 'intermediate',
    tags: ['security', 'architecture', 'compliance'],
    definition:
      'Network segmentation divides a network into smaller, isolated segments with controlled access between them. This is accomplished through VLANs, subnets, firewalls, and access control lists — creating security boundaries that limit which systems can communicate with each other.',
    whyItMatters:
      'In a flat network, a single compromised host can reach every other system. Segmentation contains breaches by limiting lateral movement — an attacker who compromises a workstation in the HR segment cannot directly reach the database servers in the production segment. It also simplifies compliance: PCI DSS scope shrinks dramatically when cardholder data is isolated.',
    analogy:
      'Like watertight compartments in a ship hull — if one compartment floods, the bulkheads prevent water from spreading to the rest of the ship.',
    soundsSmartToSay:
      '"Our PCI audit scope covers the entire data center because it is a flat network — segmenting the cardholder data environment into its own zone would reduce our compliance surface by 80%."',
    commonConfusions: [
      'Segmentation vs microsegmentation: Traditional segmentation divides the network into broad zones (DMZ, production, corporate). Microsegmentation enforces policies between individual workloads — even two VMs in the same subnet can have different access rules.',
      'East-west traffic (server-to-server within the data center) is often unsegmented. Most breaches exploit lateral movement through this unmonitored east-west traffic.',
    ],
    relatedTerms: ['VLAN', 'Microsegmentation', 'DMZ', 'Lateral Movement'],
  },
  {
    id: 'net-mpls',
    domain: 'networking',
    title: 'MPLS',
    subtitle: 'Multiprotocol Label Switching — private WAN with traffic engineering',
    difficulty: 'advanced',
    tags: ['WAN', 'routing', 'carrier'],
    definition:
      'MPLS is a carrier-grade routing technology that forwards packets using short labels instead of long IP addresses, creating predetermined paths (Label Switched Paths) through the provider\'s network. This enables traffic engineering, guaranteed QoS, and the ability to create private virtual networks (VPNs) over shared provider infrastructure.',
    whyItMatters:
      'MPLS has been the gold standard for enterprise WAN connectivity for decades because it offers SLA-backed latency, jitter, and packet loss guarantees that the public internet cannot match. Mission-critical applications like real-time trading, healthcare systems, and voice/video rely on MPLS for predictable performance.',
    analogy:
      'Like an express toll lane on a highway — your packets get a fast-pass sticker (label) at the entrance, and every toll booth (router) along the way just reads the sticker and forwards you without looking up your full destination address.',
    soundsSmartToSay:
      '"Our MPLS circuits are costing us $4,000 per site per month for 100 Mbps — we should evaluate SD-WAN with broadband primary and MPLS failover, which could cut WAN costs by 60% while improving aggregate bandwidth."',
    commonConfusions: [
      'MPLS is not the same as a dedicated line or leased line. MPLS runs on shared provider infrastructure with logical separation. A dedicated line is a physically separate circuit.',
      'MPLS does not encrypt traffic. It provides logical isolation but not confidentiality. If encryption is required, you still need IPsec or TLS over the MPLS circuit.',
    ],
    relatedTerms: ['SD-WAN', 'LSP', 'Traffic Engineering', 'BGP'],
  },
  {
    id: 'net-ipv6-migration',
    domain: 'networking',
    title: 'IPv6 Migration',
    subtitle: 'Transitioning from IPv4 to the next-generation internet protocol',
    difficulty: 'advanced',
    tags: ['addressing', 'protocol', 'migration'],
    definition:
      'IPv6 migration is the process of transitioning networks, applications, and infrastructure from IPv4 (32-bit, ~4.3 billion addresses) to IPv6 (128-bit, ~340 undecillion addresses). Migration strategies include dual-stack (running both protocols simultaneously), tunneling (encapsulating IPv6 in IPv4), and translation (NAT64/DNS64) to bridge the two protocols during coexistence.',
    whyItMatters:
      'IPv4 address exhaustion is real — ARIN ran out of free addresses in 2015. Cloud providers charge for public IPv4 addresses. Major networks including mobile carriers are IPv6-first, and services that are IPv4-only face connectivity issues and higher costs as IPv6 adoption accelerates.',
    analogy:
      'Like migrating from 7-digit phone numbers to 10-digit — everything still works during the transition if you have the right area code handling, but eventually everyone needs to use the new format.',
    soundsSmartToSay:
      '"We should deploy dual-stack now so our services are reachable over both IPv4 and IPv6 — AWS is charging for public IPv4 addresses and mobile carriers are increasingly IPv6-only."',
    commonConfusions: [
      'IPv6 is not just "more addresses." It also eliminates NAT, simplifies headers for faster routing, mandates IPsec support, and introduces stateless address autoconfiguration (SLAAC).',
      'Dual-stack does not mean double the work forever. It is a transition strategy — you run both protocols, migrate services, and eventually decommission IPv4.',
    ],
    relatedTerms: ['Dual-Stack', 'NAT64', 'SLAAC', 'CIDR'],
  },
  {
    id: 'net-qos',
    domain: 'networking',
    title: 'QoS',
    subtitle: 'Quality of Service — prioritizing critical network traffic',
    difficulty: 'intermediate',
    tags: ['performance', 'traffic', 'policy'],
    definition:
      'QoS is a set of technologies that classify, mark, and prioritize network traffic so that latency-sensitive or business-critical applications get preferential treatment over best-effort traffic. It uses mechanisms like traffic shaping, policing, queuing, and DSCP marking to guarantee bandwidth and control latency for prioritized flows.',
    whyItMatters:
      'Network bandwidth is shared and finite. Without QoS, a large file transfer or backup job can saturate a link and cause VoIP calls to drop or video conferences to freeze. QoS ensures that revenue-generating and user-facing traffic is protected during congestion.',
    analogy:
      'Like a hospital emergency room triage system — patients are classified by severity (DSCP marking), and critical cases get seen first regardless of arrival order. A heart attack patient (VoIP packet) is prioritized over a sprained ankle (bulk download) even if the ankle arrived first.',
    soundsSmartToSay:
      '"We need to configure DSCP marking at the campus edge so voice traffic is tagged EF (Expedited Forwarding) and gets priority queuing across the WAN — otherwise our MPLS QoS SLAs are meaningless if traffic arrives unmarked."',
    commonConfusions: [
      'QoS does not create bandwidth — it manages the bandwidth you already have. If a 100 Mbps link is consistently saturated, QoS determines which traffic suffers, but upgrading the link may still be necessary.',
      'QoS is only effective end-to-end if every device in the path honors the markings. A single router that ignores DSCP tags breaks the entire QoS chain.',
    ],
    relatedTerms: ['DSCP', 'Traffic Shaping', 'Jitter', 'MPLS'],
  },
  {
    id: 'net-sase',
    domain: 'networking',
    title: 'SASE',
    subtitle: 'Secure Access Service Edge — networking and security delivered from the cloud',
    difficulty: 'intermediate',
    tags: ['security', 'cloud networking', 'zero trust'],
    definition:
      'SASE (Secure Access Service Edge, pronounced "sassy") converges wide area networking (SD-WAN) with cloud-delivered security services (SWG, CASB, ZTNA, FWaaS) into a single, unified cloud-native platform. Users and branch offices connect to the nearest SASE point of presence (PoP), which applies security policies before routing traffic to its destination.',
    whyItMatters:
      'Traditional security models backhauled all traffic through a central data center to apply security controls — catastrophically inefficient when most traffic goes to SaaS apps in the cloud. SASE moves security to the cloud edge, close to users, eliminating backhaul and improving both security and performance for distributed workforces.',
    analogy:
      'Like toll booths moving from the city center to every highway on-ramp — instead of routing all cars through a central checkpoint downtown (backhaul), each on-ramp (SASE PoP) checks credentials and enforces speed limits. Traffic flows directly to its destination with security applied at the edge, not the center.',
    soundsSmartToSay:
      '"Our users in Singapore are backhauling Teams traffic through our London data center for security inspection — SASE would apply the same policies at a local PoP, cutting latency from 300ms to 30ms."',
    commonConfusions: [
      'SASE vs SSE: SSE (Security Service Edge) is the security-only subset of SASE (SWG, CASB, ZTNA, FWaaS) without the SD-WAN networking component. Gartner defined SSE as the security portion; SASE includes both networking and security.',
      'SASE is not a single product from one vendor — it requires integrating multiple capabilities. Some vendors (Zscaler, Palo Alto, Cisco) offer comprehensive platforms; others require combining best-of-breed components.',
    ],
    relatedTerms: ['SD-WAN', 'ZTNA', 'CASB', 'Zero Trust'],
  },
  {
    id: 'net-ztna',
    domain: 'networking',
    title: 'Network ZTNA',
    subtitle: 'Zero Trust Network Access — replace VPN with per-app identity-based access',
    difficulty: 'intermediate',
    tags: ['zero trust', 'remote access', 'security'],
    definition:
      'ZTNA (Zero Trust Network Access) is a security framework that provides application-specific remote access based on user identity and device posture — rather than placing users "inside the network" as a VPN does. Users authenticate with their identity provider, device health is validated, and access is granted only to the specific applications they are authorized for.',
    whyItMatters:
      'Traditional VPN gives a remote user broad network access — once connected, they can reach internal systems they don\'t need. A compromised VPN credential or device means the attacker has the same broad access. ZTNA grants access only to specific applications per user, dramatically reducing the blast radius of a credential compromise.',
    analogy:
      'Like the difference between giving a hotel guest a master key (VPN — access to all rooms) versus a key that only opens their specific room and the gym (ZTNA — access only to what they need). Even if a thief steals the key, they can only access two rooms instead of the entire hotel.',
    soundsSmartToSay:
      '"Our developers only need SSH to specific servers and our internal Confluence — ZTNA would give them exactly those two access paths without putting them on the same network segment as HR databases and financial systems."',
    commonConfusions: [
      'ZTNA is not just a rebranded VPN. VPNs create a network tunnel with broad access. ZTNA creates application-level proxied access without network-level visibility — users cannot scan or probe the internal network.',
      'ZTNA requires a strong identity and device management foundation. If your IdP is weak or devices aren\'t managed, ZTNA has no trust anchor — the zero trust model starts with verified identity.',
    ],
    relatedTerms: ['Zero Trust', 'VPN', 'SSO', 'Device Posture'],
  },
  {
    id: 'net-http3-quic',
    domain: 'networking',
    title: 'HTTP/3 and QUIC',
    subtitle: 'The next web protocol — built on UDP for lower latency',
    difficulty: 'intermediate',
    tags: ['protocol', 'web', 'performance'],
    definition:
      'HTTP/3 is the third version of the HTTP protocol, built on QUIC instead of TCP. QUIC is a transport protocol that runs over UDP, implementing its own reliable delivery, congestion control, and TLS 1.3 encryption. It eliminates TCP\'s head-of-line blocking problem and reduces connection establishment from 2-3 RTTs (TCP + TLS) to 1 RTT (or 0-RTT for resumed connections).',
    whyItMatters:
      'HTTP/2 improved parallelism over HTTP/1.1 but suffers from TCP head-of-line blocking — one lost packet stalls all streams. QUIC handles each stream independently, so a single lost packet only affects that stream. On lossy networks (mobile, satellite), HTTP/3 dramatically outperforms HTTP/2 because packet loss no longer cascades across all requests.',
    analogy:
      'Like replacing a single-lane road (HTTP/1.1) with a multi-lane highway (HTTP/2), then discovering that a breakdown in any lane blocks all lanes. HTTP/3 builds separate independent roads for each stream — a breakdown on one road doesn\'t affect the others.',
    soundsSmartToSay:
      '"We should enable QUIC on our CDN edge — on mobile networks with 2-5% packet loss, QUIC\'s per-stream loss recovery provides noticeably better page load times than HTTP/2."',
    commonConfusions: [
      'QUIC is not unencrypted like UDP — it mandates TLS 1.3. The "unreliable" reputation of UDP does not apply to QUIC, which implements its own reliability mechanisms above UDP.',
      'HTTP/3 adoption requires support from both client and server. Browsers have supported it for years; server/load balancer support varies. Cloudflare, Nginx (with patches), and Caddy support HTTP/3.',
    ],
    relatedTerms: ['TCP', 'UDP', 'TLS', 'CDN'],
  },
  {
    id: 'net-mtls',
    domain: 'networking',
    title: 'Mutual TLS (mTLS)',
    subtitle: 'Both sides prove their identity — not just the server',
    difficulty: 'intermediate',
    tags: ['security', 'encryption', 'authentication'],
    definition:
      'Mutual TLS (mTLS) is an extension of TLS where both the client and the server present and verify certificates. Standard TLS only verifies the server\'s identity (the client checks the server\'s cert). mTLS adds client authentication — the server also verifies the client\'s certificate before establishing the connection.',
    whyItMatters:
      'mTLS provides strong, cryptographic service-to-service authentication in microservices architectures. Instead of using API keys or tokens (which can be stolen), services authenticate using short-lived certificates managed by a certificate authority. Service meshes like Istio automatically provision and rotate mTLS certificates, making zero trust networking practical at scale.',
    analogy:
      'Like a two-factor security checkpoint where both the visitor (client) and the guard (server) show their IDs to each other. Standard TLS is the visitor seeing the building\'s credentials on the door; mTLS is both parties showing IDs to each other before the door opens.',
    soundsSmartToSay:
      '"A service mesh with automatic mTLS gives us mutual authentication and encryption for every service-to-service call — no API keys to rotate, no tokens to leak, and the control plane handles certificate issuance and rotation automatically."',
    commonConfusions: [
      'mTLS vs API keys: Both authenticate clients to services. API keys are static shared secrets (easier to implement, easier to leak). mTLS uses asymmetric cryptography (harder to implement, much harder to compromise at scale).',
      'mTLS requires a PKI (Public Key Infrastructure) to issue, distribute, and revoke certificates. Service meshes automate this; doing it manually at scale is operationally complex.',
    ],
    relatedTerms: ['TLS', 'Service Mesh', 'Certificate Authority', 'Zero Trust'],
  },
  {
    id: 'net-sdn',
    domain: 'networking',
    title: 'Software-Defined Networking (SDN)',
    subtitle: 'Separating the control plane from the data plane for programmable networks',
    difficulty: 'advanced',
    tags: ['architecture', 'automation', 'data center'],
    definition:
      'SDN separates the network control plane (decisions about where traffic goes) from the data plane (the actual forwarding of packets) and centralizes control logic in a software controller. Network devices become simple forwarding hardware; the controller programmatically configures routing, security policies, and traffic engineering across the entire network through APIs.',
    whyItMatters:
      'Traditional networks require configuring each device individually via CLI — slow, error-prone, and not scalable for cloud-scale data centers. SDN enables network-as-code: provisioning network policies programmatically, implementing consistent security rules across hundreds of switches instantly, and automating failover that would take hours of manual CLI work.',
    analogy:
      'Like the difference between a distributed traffic light system (each light makes its own timing decisions) and a centralized traffic management center (one system optimizes all signals city-wide based on real-time traffic). SDN is the centralized control room for your network.',
    soundsSmartToSay:
      '"Our data center network runs VMware NSX — it\'s SDN for our virtualized workloads. Microsegmentation policies are defined once in the controller and applied automatically to every VM, regardless of which physical host it lands on."',
    commonConfusions: [
      'SDN does not mean the physical network disappears. Physical switches and routers still forward packets; SDN changes who controls them (software controller rather than distributed per-device CLI configuration).',
      'OpenFlow was the original SDN protocol for controller-to-switch communication. Modern SDN implementations often use vendor APIs, NETCONF/YANG, or gRPC rather than OpenFlow.',
    ],
    relatedTerms: ['NFV', 'Network Automation', 'OpenFlow', 'VXLAN'],
  },
  {
    id: 'net-vxlan',
    domain: 'networking',
    title: 'VXLAN',
    subtitle: 'Virtual Extensible LAN — scaling Layer 2 over Layer 3 networks',
    difficulty: 'advanced',
    tags: ['overlay network', 'virtualization', 'data center'],
    definition:
      'VXLAN (Virtual Extensible LAN) is a network overlay technology that encapsulates Layer 2 Ethernet frames inside Layer 3 UDP packets, allowing virtual Layer 2 networks to span across Layer 3 boundaries (routers and subnets). It extends the VLAN limit from 4,096 to 16 million segments, making it the standard overlay for cloud and data center virtual networking.',
    whyItMatters:
      'Cloud providers need to give each tenant isolated, custom network topologies across shared physical infrastructure — all without running separate physical cables for every customer. VXLAN creates virtual "overlay" networks on top of the shared "underlay" network, giving each tenant private Layer 2 connectivity regardless of physical location.',
    analogy:
      'Like putting letters inside packages — VXLAN takes your network frame (letter) and wraps it in an IP packet (envelope with a courier address). The courier (physical network) only sees the outer envelope and delivers it; the recipient unwraps it to find the original letter.',
    soundsSmartToSay:
      '"Our Kubernetes overlay network uses VXLAN encapsulation so pods on different nodes can communicate as if they\'re on the same L2 segment — even though they\'re on different physical servers in different subnets."',
    commonConfusions: [
      'VXLAN vs VLAN: VLANs have a 4,096 segment limit and cannot span routers. VXLAN has a 16 million segment limit and crosses routers by encapsulating in UDP. VXLAN is how clouds and large data centers scale beyond VLAN limits.',
      'VXLAN adds overhead — the outer UDP/IP headers add bytes to every packet. MTU must be increased to accommodate the encapsulation or fragmentation causes performance degradation.',
    ],
    relatedTerms: ['Overlay Network', 'VLAN', 'Kubernetes Networking', 'SDN'],
  },
  {
    id: 'net-ddos',
    domain: 'networking',
    title: 'DDoS Mitigation',
    subtitle: 'Absorbing and filtering distributed denial-of-service attacks',
    difficulty: 'intermediate',
    tags: ['security', 'availability', 'attacks'],
    definition:
      'DDoS (Distributed Denial of Service) attacks flood a target with traffic from thousands of compromised hosts (a botnet), exhausting bandwidth, connection tables, or application resources. Mitigation involves scrubbing centers (filtering attack traffic at scale), rate limiting, anycast-based traffic distribution, and BGP blackholing (announcing the target IP as unreachable to drop traffic at upstream providers).',
    whyItMatters:
      'A well-executed DDoS attack can take an unprotected service offline in minutes. Modern attacks exceed 1 Tbps — more bandwidth than most organizations can absorb. Cloud providers (AWS Shield, Cloudflare, Akamai) provide always-on DDoS protection at the network edge where they have the capacity to absorb attacks before they reach your infrastructure.',
    analogy:
      'Like crowd control at a stadium — during a normal event, all gates are open for normal entry. During a rush attempt (DDoS), security scales up rapidly, identifies suspicious crowds (botnet traffic), redirects or denies them through a separate channel, while legitimate ticket holders (real users) continue entering normally.',
    soundsSmartToSay:
      '"We should put Cloudflare in front of our origin servers — their anycast network absorbs volumetric DDoS attacks at 296 cities worldwide before traffic reaches our infrastructure."',
    commonConfusions: [
      'DDoS vs DoS: DoS (Denial of Service) is an attack from a single source — easily blocked by firewalling that IP. DDoS attacks from thousands of sources simultaneously — you cannot block all source IPs without blocking legitimate traffic.',
      'Rate limiting alone does not stop DDoS. A volumetric flood can exhaust your bandwidth before rate limiting can process the packets. Network-layer mitigation (upstream scrubbing) is required for large attacks.',
    ],
    relatedTerms: ['Anycast', 'CDN', 'Rate Limiting', 'BGP Blackhole'],
  },
  {
    id: 'net-cdn',
    domain: 'networking',
    title: 'CDN Edge Networking',
    subtitle: 'Content Delivery Network — serving content close to users',
    difficulty: 'beginner',
    tags: ['performance', 'caching', 'availability'],
    definition:
      'A CDN (Content Delivery Network) is a geographically distributed network of servers (edge nodes or PoPs) that cache and serve content — images, video, JavaScript, HTML, API responses — from locations close to end users. Instead of every user fetching from your origin server, they fetch from the nearest CDN edge node, dramatically reducing latency.',
    whyItMatters:
      'A user in Tokyo fetching content from a server in Virginia experiences 150ms of network latency before the first byte. From a Tokyo CDN edge node, that drops to under 10ms. CDNs also absorb DDoS attacks, reduce origin server load, and improve availability by serving cached content even when the origin is down.',
    analogy:
      'Like a chain of convenience stores versus one warehouse. Instead of every customer driving to the central warehouse (origin), local convenience stores (CDN edge nodes) stock the most popular items nearby. Fast for customers, reduced load on the warehouse.',
    soundsSmartToSay:
      '"Our static assets should have long cache TTLs at the CDN edge — content-addressed filenames (hash in the URL) mean we can cache forever since the URL changes when the content changes."',
    commonConfusions: [
      'CDN vs load balancer: A load balancer distributes traffic across backend instances for capacity. A CDN caches content at distributed edge nodes for latency. They solve different problems and work together.',
      'CDNs cache more than just images. API response caching, edge compute (Cloudflare Workers, Lambda@Edge), and WebSocket termination are all CDN capabilities that extend beyond static content delivery.',
    ],
    relatedTerms: ['Edge Computing', 'Cache-Control', 'Anycast', 'TLS Termination'],
  },
  {
    id: 'net-reverse-proxy',
    domain: 'networking',
    title: 'Reverse Proxy',
    subtitle: 'Sitting in front of servers to handle requests on their behalf',
    difficulty: 'beginner',
    tags: ['proxy', 'architecture', 'security'],
    definition:
      'A reverse proxy is a server that sits in front of backend servers and intercepts client requests on their behalf. It handles SSL/TLS termination, load balancing, caching, request routing, compression, and rate limiting — the backend servers only see requests from the proxy, not directly from clients. Nginx, HAProxy, and Caddy are common reverse proxy implementations.',
    whyItMatters:
      'A reverse proxy allows you to place backend servers in a private network, hiding their topology from the internet. It also centralizes SSL certificate management, compression, and caching — capabilities you only need to implement once in the proxy rather than in every backend service.',
    analogy:
      'Like a receptionist at a large company — external callers (clients) call the main number (proxy), the receptionist handles pleasantries, verifies identity, and transfers to the right department (backend). External callers never know the internal extension numbers (backend IPs) or how many people work at the company.',
    soundsSmartToSay:
      '"We terminate TLS at the Nginx reverse proxy layer — backend app servers use plain HTTP between the proxy and themselves inside the VPC, reducing CPU overhead on application nodes while maintaining end-to-end encryption from the client\'s perspective."',
    commonConfusions: [
      'Forward proxy vs reverse proxy: A forward proxy sits in front of clients (users) and makes requests on their behalf — used for caching, content filtering, and anonymization. A reverse proxy sits in front of servers and receives requests on their behalf.',
      'Reverse proxy vs load balancer: All load balancers are reverse proxies, but not all reverse proxies do load balancing. A reverse proxy in front of a single server handles TLS and caching; a load balancer with multiple backends distributes traffic.',
    ],
    relatedTerms: ['Load Balancer', 'TLS Termination', 'Nginx', 'API Gateway'],
  },
  {
    id: 'net-cidr',
    domain: 'networking',
    title: 'CIDR and Subnetting',
    subtitle: 'Dividing IP address space into manageable chunks',
    difficulty: 'intermediate',
    tags: ['IP addressing', 'routing', 'planning'],
    definition:
      'CIDR (Classless Inter-Domain Routing) is the notation for expressing IP address ranges as address/prefix-length (e.g., 10.0.0.0/24 means the first 24 bits are the network, leaving 8 bits for host addresses — 256 IPs). Subnetting is the process of dividing a larger IP block into smaller subnets for different purposes (web servers, databases, management, etc.).',
    whyItMatters:
      'Proper subnetting is fundamental to cloud networking. Every VPC, subnet, security group, and routing table decision in AWS, Azure, or GCP requires understanding CIDR. Choosing subnets too small (running out of IPs) or too large (wasted addresses) has lasting operational consequences since cloud subnets cannot be resized without reconstruction.',
    analogy:
      'Like dividing a large plot of land into building lots — the overall CIDR block (10.0.0.0/16 = 65,536 addresses) is the total land, and subnets (/24 = 256 addresses each) are individual lots. You allocate lots by purpose: residential (web tier), commercial (app tier), industrial (database tier).',
    soundsSmartToSay:
      '"We should allocate at least /20 subnets for each availability zone — Kubernetes nodes need a /24 worth of IPs per node, and if we start with /24 subnets we\'ll run out when the cluster scales."',
    commonConfusions: [
      'The "/X" in CIDR is the prefix length, not the number of hosts. /24 = 256 total IPs (254 usable — network and broadcast are reserved). /16 = 65,536 IPs. Each increment in prefix length halves the address space.',
      'Private IP ranges (RFC 1918): 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 are reserved for private use and not routable on the public internet. All internal/cloud networking uses these ranges.',
    ],
    relatedTerms: ['VPC', 'Subnet', 'IP Address', 'Routing Table'],
  },
  {
    id: 'net-wireguard',
    domain: 'networking',
    title: 'WireGuard',
    subtitle: 'Modern, fast, simple VPN with a minimal codebase',
    difficulty: 'intermediate',
    tags: ['VPN', 'encryption', 'tunnel'],
    definition:
      'WireGuard is a modern VPN protocol designed to be faster, simpler, and more secure than IPsec and OpenVPN. It uses state-of-the-art cryptography (ChaCha20, Curve25519, BLAKE2s), has only ~4,000 lines of code (compared to OpenVPN\'s 70,000+), operates at the kernel level for performance, and establishes connections in milliseconds with built-in roaming support.',
    whyItMatters:
      'IPsec is secure but complex to configure and audit. OpenVPN is flexible but slow and based on older cryptographic primitives. WireGuard\'s small, auditable codebase, modern cryptography, and high performance have made it the preferred choice for site-to-site VPNs, remote access (Tailscale is built on WireGuard), and cloud provider VPN offerings.',
    analogy:
      'Like comparing a new efficient car (WireGuard) to a reliable but complex classic car (IPsec) — the new car has fewer moving parts, uses better engineering principles, achieves better performance, and is easier to verify that nothing is wrong under the hood.',
    soundsSmartToSay:
      '"For our site-to-site mesh, WireGuard with a control plane like Tailscale or Netmaker gives us automatic peer discovery, key management, and routing — without the operational complexity of managing IPsec configurations on every router."',
    commonConfusions: [
      'WireGuard does not include a built-in key distribution mechanism — it uses pre-shared or asymmetric keys that must be distributed out-of-band. Tools like Tailscale and Netmaker add the orchestration layer WireGuard deliberately leaves out.',
      'WireGuard is not a complete VPN solution by itself — it is a protocol. You need additional software (wg-quick, Tailscale, Netmaker) to manage peers, routing, and key rotation in production.',
    ],
    relatedTerms: ['VPN', 'IPsec', 'Tailscale', 'Zero Trust'],
  },
  {
    id: 'net-ospf',
    domain: 'networking',
    title: 'OSPF',
    subtitle: 'Open Shortest Path First — interior gateway routing protocol',
    difficulty: 'advanced',
    tags: ['routing', 'protocol', 'IGP'],
    definition:
      'OSPF (Open Shortest Path First) is a link-state routing protocol used within a single autonomous system (interior gateway protocol). Each router shares its link state information with all routers in the same OSPF area, building a complete topology map. Dijkstra\'s shortest path algorithm calculates the best route to every destination. OSPF converges quickly and scales to large enterprise networks.',
    whyItMatters:
      'OSPF is the dominant interior routing protocol in enterprise networks. It automatically discovers neighbors, calculates optimal paths, and converges when topology changes — no manual static routes required. Understanding OSPF is essential for enterprise network troubleshooting: convergence delays, OSPF area design, and redistribution between routing protocols.',
    analogy:
      'Like a city road network where every traffic light reports road conditions to a central traffic system, which then recalculates optimal routes for all drivers. OSPF is the protocol by which routers share link conditions with each other and collectively calculate the best path to every destination.',
    soundsSmartToSay:
      '"The OSPF neighbor relationship is dropping because the hello timers are mismatched — both routers need the same hello and dead intervals to form adjacency."',
    commonConfusions: [
      'OSPF vs BGP: OSPF is an interior protocol (within one AS, designed for fast convergence). BGP is an exterior protocol (between autonomous systems, designed for policy control). They solve different problems and often run simultaneously — OSPF for internal routing, BGP for external connectivity.',
      'OSPF areas: Large OSPF deployments use area design to reduce route computation overhead. Area 0 (backbone) is required; all other areas must connect to Area 0. Improper area design causes suboptimal routing or excessive LSA flooding.',
    ],
    relatedTerms: ['BGP', 'Routing Protocol', 'Link State', 'Autonomous System'],
  },
  {
    id: 'net-ntp',
    domain: 'networking',
    title: 'NTP (Network Time Protocol)',
    subtitle: 'Keeping all clocks synchronized across distributed systems',
    difficulty: 'beginner',
    tags: ['time synchronization', 'protocol', 'distributed systems'],
    definition:
      'NTP (Network Time Protocol) synchronizes the clocks of networked computers to a common time source (UTC). NTP servers are organized in strata: Stratum 0 (atomic clocks/GPS), Stratum 1 (directly connected to Stratum 0), Stratum 2 (synchronized to Stratum 1), etc. Clients query NTP servers and adjust their clocks to within milliseconds of accurate time.',
    whyItMatters:
      'Distributed systems depend on accurate time. Kerberos authentication fails if clocks differ by more than 5 minutes. TLS certificate validation checks time. Log correlation across servers requires synchronized clocks — a 30-second clock skew makes correlating events across systems nearly impossible. Billing, audit trails, and database replication all depend on accurate, synchronized time.',
    analogy:
      'Like an orchestra conductor setting the tempo for all musicians — each instrument (server) synchronizes to the conductor\'s beat (time source). If musicians drift out of sync (clock skew), the piece sounds wrong. The conductor (NTP server) continuously corrects drift to keep everyone in time.',
    soundsSmartToSay:
      '"We\'re seeing intermittent Kerberos authentication failures in the office — check the NTP sync status on the domain controllers. A clock skew over 5 minutes on any machine breaks Kerberos tickets."',
    commonConfusions: [
      'NTP vs PTP: NTP achieves millisecond accuracy, which is sufficient for most applications. PTP (Precision Time Protocol) achieves microsecond or nanosecond accuracy for specialized workloads (high-frequency trading, industrial control, 5G).',
      'Cloud instances often have their own time synchronization mechanisms (AWS Time Sync Service, Azure Time Sync). Use the cloud provider\'s time service inside VMs rather than external NTP servers — it accounts for virtualization overhead and is more accurate.',
    ],
    relatedTerms: ['Time Synchronization', 'Kerberos', 'Log Correlation', 'Distributed Systems'],
  },
  {
    id: 'net-radius',
    domain: 'networking',
    title: 'RADIUS and 802.1X',
    subtitle: 'Network access authentication for wired and wireless connections',
    difficulty: 'intermediate',
    tags: ['authentication', 'access control', 'Wi-Fi'],
    definition:
      'RADIUS (Remote Authentication Dial-In User Service) is a client-server protocol that centralizes authentication, authorization, and accounting (AAA) for network access. 802.1X is the IEEE standard for port-based network access control that uses RADIUS as its backend — requiring devices to authenticate before being allowed to send traffic on a wired or wireless network segment.',
    whyItMatters:
      'Without 802.1X, anyone who plugs into a network port or connects to Wi-Fi with the correct SSID and password gets access. With 802.1X, every device must present credentials (username/password, certificate) that are validated by a RADIUS server before the switch port or wireless AP allows traffic. This is how enterprise Wi-Fi works and how PCI DSS requires network access to be controlled.',
    analogy:
      'Like a hotel room lock that requires keycard programming (802.1X authentication) before it opens, versus a combination lock where anyone who knows the code gets in (WPA2-PSK with shared password). The keycard system can grant different access levels per guest and instantly revoke access — the combination lock cannot.',
    soundsSmartToSay:
      '"We should move our corporate Wi-Fi from WPA2-PSK to 802.1X — a shared Wi-Fi password is a liability. With 802.1X, each user authenticates with their Active Directory credentials and we can see exactly who is connected from the RADIUS logs."',
    commonConfusions: [
      'RADIUS vs LDAP/AD: RADIUS is the authentication protocol for network access (Wi-Fi, VPN, switches). LDAP/Active Directory stores the user credentials. RADIUS typically validates credentials against AD in the background.',
      '802.1X and RADIUS are sometimes confused with each other. 802.1X is the access control framework (supplicant → authenticator → authentication server). RADIUS is the protocol used between the authenticator (switch/AP) and the authentication server.',
    ],
    relatedTerms: ['802.1X', 'Active Directory', 'EAP', 'Network Access Control'],
  },
  {
    id: 'net-network-automation',
    domain: 'networking',
    title: 'Network Automation',
    subtitle: 'Managing network configuration with code instead of CLI',
    difficulty: 'intermediate',
    tags: ['automation', 'infrastructure as code', 'DevOps'],
    definition:
      'Network automation uses software (Ansible, Python with NAPALM/Netmiko, Terraform, APIs) to configure, validate, and manage network devices programmatically — replacing manual CLI configuration. Network configurations are stored in version control, changes are reviewed like code, and deployment is automated and idempotent.',
    whyItMatters:
      'Manual network configuration via CLI is slow, error-prone, and unauditable at scale. A single typo in a BGP route filter can take down internet connectivity for an enterprise. Network automation applies the same rigor as software development — version control, peer review, automated testing, and consistent deployment — to network changes that are traditionally the most fragile and manual part of infrastructure.',
    analogy:
      'Like replacing hand-crafted artisan furniture with CNC machining — the craftsman\'s skill is encoded into a precise program (network automation script) that produces identical results every time, scales to mass production (hundreds of switches), and produces a record of exactly what was built.',
    soundsSmartToSay:
      '"We should encode our network device configurations in Ansible playbooks and store them in git — right now the running configs in production drift from what we think they are, and a git diff between intended and actual state would catch that."',
    commonConfusions: [
      'Network automation does not require replacing all hardware with SDN. Ansible can configure traditional Cisco/Juniper/Arista devices via SSH the same way a human would, just consistently and at scale.',
      'NETCONF/YANG and RESTCONF are structured configuration protocols designed for automation, replacing screen-scraping SSH sessions. Modern network devices support these alongside CLI.',
    ],
    relatedTerms: ['Ansible', 'NETCONF', 'Infrastructure as Code', 'SDN'],
  },
  {
    id: 'net-microsegmentation',
    domain: 'networking',
    title: 'Network Microsegmentation',
    subtitle: 'Per-workload security policies, not just network zones',
    difficulty: 'advanced',
    tags: ['security', 'zero trust', 'east-west'],
    definition:
      'Microsegmentation enforces granular security policies at the individual workload level — applying firewall rules between specific application tiers, containers, or VMs rather than just between broad network zones. Each workload has its own security policy defining exactly which other workloads can communicate with it and on which ports, regardless of network proximity.',
    whyItMatters:
      'Traditional segmentation creates coarse zones (DMZ, production, corporate) with unrestricted traffic within zones. If an attacker compromises one web server, they can reach all other web servers and the database servers in the same zone. Microsegmentation limits lateral movement to zero — the compromised web server can only talk to what its policy explicitly allows.',
    analogy:
      'Like individual apartment door locks versus floor-level access control. Traditional segmentation locks the elevator to each floor (zone isolation). Microsegmentation also locks every apartment door — even if an attacker gets onto your floor, they cannot enter any apartment without its specific key.',
    soundsSmartToSay:
      '"NSX microsegmentation lets us apply the principle of least privilege at the VM level — the web tier can only reach the app tier on port 8080, and the app tier can only reach the database on port 5432. An attacker on the web tier cannot reach the database even if it\'s in the same datacenter."',
    commonConfusions: [
      'Microsegmentation is not just for east-west traffic — it can also apply to north-south traffic within a datacenter. Any communication path that bypasses the perimeter firewall needs microsegmentation controls.',
      'Microsegmentation requires a comprehensive understanding of legitimate traffic flows. Apply it incrementally: start in monitor mode to learn traffic patterns before enforcing policies that block unexpected flows.',
    ],
    relatedTerms: ['Network Segmentation', 'Zero Trust', 'East-West Traffic', 'NSX'],
  },
  {
    id: 'net-packet-capture',
    domain: 'networking',
    title: 'Packet Capture',
    subtitle: 'Recording network traffic for troubleshooting and analysis',
    difficulty: 'intermediate',
    tags: ['troubleshooting', 'Wireshark', 'debugging'],
    definition:
      'Packet capture records network traffic at the byte level — capturing every packet traversing a network interface. Wireshark is the dominant GUI tool for capture and analysis; tcpdump is the command-line equivalent. Captures can be filtered by protocol, IP address, port, or content and analyzed to diagnose connectivity issues, performance problems, and security incidents.',
    whyItMatters:
      'When application logs say "connection failed" but don\'t say why, packet capture shows exactly what happened at the network level: SYN sent, RST received (connection refused), SYN timeout (firewall silently dropped), or TLS handshake failure. It is the ground truth of network troubleshooting — if you can see the packets, you can diagnose any network issue.',
    analogy:
      'Like a flight data recorder ("black box") for your network — every packet is recorded in sequence with timestamps. When something goes wrong, you review the recording to see exactly what happened, in what order, and where the communication broke down.',
    soundsSmartToSay:
      '"Let\'s take a pcap on both sides of the firewall simultaneously — if we see the SYN on the inside interface but not the outside, the firewall is dropping it. If we see it on both sides but no SYN-ACK, the server is rejecting the connection."',
    commonConfusions: [
      'Encrypted traffic (TLS/HTTPS) shows as unreadable ciphertext in a packet capture — you see the connection, handshake, and packet timing, but not the payload. Decryption requires the server\'s private key or session keys.',
      'Promiscuous mode vs port mirroring: Promiscuous mode captures traffic on one interface (your machine\'s traffic plus broadcast). Port mirroring (SPAN port) copies all switch traffic to a monitor port — needed to capture traffic between other devices.',
    ],
    relatedTerms: ['Wireshark', 'tcpdump', 'SPAN Port', 'Network Troubleshooting'],
  },
  {
    id: 'net-anycast',
    domain: 'networking',
    title: 'Anycast',
    subtitle: 'The same IP address announced from multiple global locations',
    difficulty: 'advanced',
    tags: ['routing', 'CDN', 'DDoS'],
    definition:
      'Anycast is a routing technique where the same IP address is announced by multiple servers in different geographic locations via BGP. Clients connect to the topologically closest server (based on BGP path selection), automatically receiving service from the nearest location without DNS-based geographic routing.',
    whyItMatters:
      'CDNs and DDoS mitigation services (Cloudflare, Akamai) use anycast to serve content from the nearest edge node and to absorb DDoS attacks across many locations simultaneously. DNS resolvers (1.1.1.1, 8.8.8.8) use anycast so queries are handled by the nearest server globally — reducing latency to sub-10ms regardless of where the user is.',
    analogy:
      'Like a taxi company where all taxis have the same phone number, but when you call, the dispatcher connects you to the nearest available taxi. The caller doesn\'t know or care which taxi — just the closest, fastest one.',
    soundsSmartToSay:
      '"Cloudflare\'s DDoS protection works because their anycast network distributes attack traffic across 296 cities — an attack targeting one IP is spread across Cloudflare\'s entire global capacity rather than concentrating at your origin."',
    commonConfusions: [
      'Anycast vs unicast vs multicast: Unicast is one sender to one specific receiver. Multicast is one sender to a group of subscribed receivers. Anycast is one sender to the nearest of many identical receivers — the network selects which one.',
      'Anycast uses BGP to advertise the same prefix from multiple locations. Client packets are routed to whichever origin BGP sees as "closest" based on shortest AS path or other metrics — not necessarily geographic proximity.',
    ],
    relatedTerms: ['BGP', 'CDN', 'DDoS Mitigation', 'DNS'],
  },
  {
    id: 'net-dnssec',
    domain: 'networking',
    title: 'DNSSEC',
    subtitle: 'Cryptographic signatures to prevent DNS spoofing',
    difficulty: 'advanced',
    tags: ['DNS', 'security', 'cryptography'],
    definition:
      'DNSSEC (DNS Security Extensions) adds cryptographic signatures to DNS records. DNS resolvers that support DNSSEC can verify that the DNS responses they receive are authentic and untampered — preventing DNS cache poisoning attacks where an attacker injects fraudulent DNS responses to redirect users to malicious servers.',
    whyItMatters:
      'Without DNSSEC, an attacker who can poison a DNS cache can redirect users of a legitimate domain to a malicious server (e.g., directing bank.com to an attacker\'s phishing site). DNSSEC ensures that DNS responses are cryptographically signed by the domain owner — any modification invalidates the signature.',
    analogy:
      'Like a notarized document versus a regular letter. A regular letter (unvalidated DNS) can be forged. A notarized document (DNSSEC-signed response) can be verified against the notary\'s public records — a forged notarization is detectable.',
    soundsSmartToSay:
      '"DNSSEC signing alone isn\'t sufficient without validation — we need recursive resolvers that actually check the signatures. Most enterprise recursive resolvers support DNSSEC validation; cloud providers\' resolvers (Route 53) do too."',
    commonConfusions: [
      'DNSSEC prevents DNS spoofing but not other DNS attacks like DDoS amplification (using DNS as an amplifier for volumetric attacks) or DNS tunneling (using DNS queries for covert data exfiltration).',
      'DNSSEC vs DoH/DoT: DNSSEC authenticates the content of DNS responses (preventing forgery). DNS over HTTPS (DoH) and DNS over TLS (DoT) encrypt DNS queries in transit (preventing surveillance). They solve different problems and complement each other.',
    ],
    relatedTerms: ['DNS', 'DNS Cache Poisoning', 'DoH', 'PKI'],
  },
];
