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
      'Access port vs trunk port: An access port carries traffic for one VLAN (end devices plug in here). A trunk port carries tagged traffic for multiple VLANs (switch-to-switch links).',
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
      'PAT (Port Address Translation) is the most common form of NAT — it maps many internal IPs to one public IP by also translating source ports. When people say "NAT," they usually mean PAT.',
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
      'Like checking into a hotel — the front desk assigns you a room number (IP), tells you the Wi-Fi password (DNS), points you to the elevator (gateway), and your room is yours for the length of your stay (lease). When you check out, the room goes back into the pool for the next guest.',
    soundsSmartToSay:
      '"Set the DHCP lease time shorter on the guest network — we want IPs recycled quickly so the /24 pool doesn\'t exhaust during conference days."',
    commonConfusions: [
      'DHCP reservation vs static IP: A DHCP reservation assigns the same IP to a specific MAC address every time via the DHCP server. A static IP is configured directly on the device itself, bypassing DHCP entirely. Reservations are easier to manage centrally.',
      'DHCP relay: DHCP uses broadcast, which does not cross routers. A DHCP relay agent (ip helper-address) forwards DHCP requests across subnets so you do not need a DHCP server on every VLAN.',
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
      'Like a building where every single door requires badge access and verifies your identity — not just the front entrance. Even if someone tailgates through the lobby, they still cannot open any office door, server room, or supply closet without proving who they are and that they are authorized for that specific room.',
    soundsSmartToSay:
      '"Moving to Zero Trust means we replace our VPN with per-app ZTNA policies — users authenticate to each application individually, and network location becomes irrelevant to access decisions."',
    commonConfusions: [
      'Zero Trust is an architecture philosophy, not a product you buy. Vendors sell components (ZTNA, microsegmentation, identity providers), but no single product delivers "Zero Trust" end-to-end.',
      'Zero Trust does not mean "no firewall." Firewalls still play a role, but they are supplemented with identity-aware proxies, microsegmentation, and continuous verification rather than being the sole security boundary.',
      'Zero Trust applies to more than networking — it extends to data, workloads, and identities. The networking layer (ZTNA, microsegmentation) is one pillar of a broader Zero Trust strategy.',
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
      'In a flat network, a single compromised host can reach every other system. Segmentation contains breaches by limiting lateral movement — an attacker who compromises a workstation in the HR segment cannot directly reach the database servers in the production segment. It also simplifies compliance: PCI DSS scope shrinks dramatically when cardholder data is isolated in its own segment.',
    analogy:
      'Like watertight compartments in a ship hull — if one compartment floods, the bulkheads prevent water from spreading to the rest of the ship. The Titanic had compartments but they were not sealed at the top, which is exactly what happens when segmentation rules have overly permissive exceptions.',
    soundsSmartToSay:
      '"Our PCI audit scope covers the entire data center because it is a flat network — segmenting the cardholder data environment into its own zone would reduce our compliance surface by 80%."',
    commonConfusions: [
      'Segmentation vs microsegmentation: Traditional segmentation divides the network into broad zones (DMZ, production, corporate). Microsegmentation enforces policies between individual workloads — even two VMs in the same subnet can have different access rules.',
      'Segmentation is only effective if the rules between segments are actually restrictive. A firewall between two segments that allows "any-any" traffic provides zero security benefit.',
      'East-west traffic (server-to-server within the data center) is often unsegmented. Most breaches exploit lateral movement through this unmonitored east-west traffic, not north-south traffic crossing the perimeter.',
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
      'MPLS has been the gold standard for enterprise WAN connectivity for decades because it offers SLA-backed latency, jitter, and packet loss guarantees that the public internet cannot match. Mission-critical applications like real-time trading, healthcare systems, and voice/video rely on MPLS for predictable performance — though SD-WAN is increasingly replacing it for cost savings.',
    analogy:
      'Like an express toll lane on a highway — your packets get a fast-pass sticker (label) at the entrance, and every toll booth (router) along the way just reads the sticker and forwards you without looking up your full destination address. The provider guarantees your lane will not be congested.',
    soundsSmartToSay:
      '"Our MPLS circuits are costing us $4,000 per site per month for 100 Mbps — we should evaluate SD-WAN with broadband primary and MPLS failover, which could cut WAN costs by 60% while improving aggregate bandwidth."',
    commonConfusions: [
      'MPLS is not the same as a dedicated line or leased line. MPLS runs on shared provider infrastructure with logical separation (like VLANs for WANs). A dedicated line is a physically separate circuit.',
      'MPLS L3 VPN vs L2 VPN: L3 VPN (most common) means the provider participates in your routing — they run BGP with you. L2 VPN extends your Ethernet across the WAN — the provider is transparent and you handle all routing.',
      'MPLS does not encrypt traffic. It provides logical isolation but not confidentiality. If encryption is required (e.g., for compliance), you still need IPsec or TLS over the MPLS circuit.',
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
      'IPv4 address exhaustion is real — ARIN ran out of free addresses in 2015. Cloud providers charge for public IPv4 addresses (AWS started charging $3.60/month per address in 2024). Major networks including mobile carriers and large enterprises are IPv6-first, and services that are IPv4-only may face connectivity issues, higher costs, and performance penalties as IPv6 adoption accelerates.',
    analogy:
      'Like migrating from 7-digit phone numbers to 10-digit — everything still works during the transition if you have the right area code handling, but eventually everyone needs to use the new format. The challenge is that some old phone systems only understand 7 digits and need adapters to participate.',
    soundsSmartToSay:
      '"We should deploy dual-stack now so our services are reachable over both IPv4 and IPv6 — AWS is charging for public IPv4 addresses and mobile carriers are increasingly IPv6-only, which means IPv4-only services have a cost and reachability disadvantage."',
    commonConfusions: [
      'IPv6 is not just "more addresses." It also eliminates NAT (every device gets a globally routable address), simplifies headers for faster routing, mandates IPsec support, and introduces stateless address autoconfiguration (SLAAC) as an alternative to DHCP.',
      'Dual-stack does not mean double the work forever. It is a transition strategy — you run both protocols, migrate services, and eventually decommission IPv4. The risk is that dual-stack without proper governance becomes permanent technical debt.',
      'IPv6 addresses look intimidating (2001:0db8:85a3::8a2e:0370:7334) but follow consistent rules. Leading zeros are dropped, consecutive zero groups collapse to "::", and /64 is the standard subnet size (compared to variable CIDR in IPv4).',
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
      'QoS is a set of technologies that classify, mark, and prioritize network traffic so that latency-sensitive or business-critical applications get preferential treatment over best-effort traffic. It uses mechanisms like traffic shaping, policing, queuing, and DSCP marking to guarantee bandwidth, limit latency, and control jitter for prioritized flows.',
    whyItMatters:
      'Network bandwidth is shared and finite. Without QoS, a large file transfer or backup job can saturate a link and cause VoIP calls to drop or video conferences to freeze. QoS ensures that revenue-generating and user-facing traffic is protected during congestion — you would never want a nightly database sync to degrade a customer-facing API.',
    analogy:
      'Like a hospital emergency room triage system — patients are classified by severity (DSCP marking), and critical cases get seen first regardless of arrival order. A heart attack patient (VoIP packet) is prioritized over a sprained ankle (bulk download) even if the ankle arrived first. The total capacity of the ER has not changed, but outcomes improve dramatically.',
    soundsSmartToSay:
      '"We need to configure DSCP marking at the campus edge so voice traffic is tagged EF (Expedited Forwarding) and gets priority queuing across the WAN — otherwise our MPLS QoS SLAs are meaningless if traffic arrives unmarked."',
    commonConfusions: [
      'QoS does not create bandwidth — it manages the bandwidth you already have. If a 100 Mbps link is consistently saturated, QoS determines which traffic suffers, but upgrading the link may still be necessary.',
      'DSCP (Differentiated Services Code Point) vs CoS (Class of Service): DSCP operates at Layer 3 (IP header) and survives routing. CoS (802.1p) operates at Layer 2 (VLAN tag) and is stripped when traffic leaves the switched network. Both are used together in enterprise networks.',
      'QoS is only effective end-to-end if every device in the path honors the markings. A single router that ignores DSCP tags breaks the entire QoS chain — this is why managed WAN services like MPLS are preferred for QoS-dependent applications.',
    ],
    relatedTerms: ['DSCP', 'Traffic Shaping', 'Jitter', 'MPLS'],
  },
  {
    id: 'net-vlan',
    domain: 'networking',
    title: 'VLAN',
    subtitle: 'Virtual LANs — segment without new hardware',
    difficulty: 'beginner',
    tags: ['segmentation', 'switching', 'layer-2'],
    definition:
      'A VLAN (Virtual LAN) is a logical grouping of switch ports that creates separate broadcast domains on the same physical switch. Devices on different VLANs cannot communicate without a router, even if they share the same physical cable.',
    whyItMatters:
      'VLANs are the foundation of network segmentation. They isolate departments, guest Wi-Fi, IoT devices, and server tiers without buying separate switches — reducing broadcast storms and containing security incidents to a single segment.',
    analogy:
      'Like floors in an office building connected by a single elevator (router). People on the same floor can talk freely, but reaching another floor requires going through the elevator — which can enforce access rules.',
    soundsSmartToSay:
      '"We should put the IoT devices on their own VLAN — if a smart thermostat gets compromised, it should not be on the same broadcast domain as our servers."',
    commonConfusions: [
      'VLAN vs subnet: A VLAN is a Layer 2 (switching) concept. A subnet is a Layer 3 (routing) concept. In practice they map 1:1, but they operate at different layers — you assign a subnet to a VLAN.',
      'VLAN vs VPC: A VPC is a cloud-provider construct for network isolation. A VLAN is the physical-network equivalent. Many cloud VPCs are implemented using VLANs under the hood.',
    ],
    relatedTerms: ['Subnet', 'Network Segmentation', 'Trunk Port', 'VPC'],
  },
  {
    id: 'net-nat',
    domain: 'networking',
    title: 'NAT',
    subtitle: 'Network Address Translation',
    difficulty: 'beginner',
    tags: ['ip', 'routing', 'translation'],
    definition:
      'NAT translates private IP addresses (like 10.0.x.x or 192.168.x.x) to public IPs before packets leave your network, and translates them back on return. It lets thousands of devices share a handful of public IPs and hides internal network structure from the internet.',
    whyItMatters:
      'IPv4 addresses are exhausted — without NAT, every device would need a public IP. NAT is what makes your home router work with one public IP, and it is equally critical in enterprise and cloud networks (NAT gateways in VPCs).',
    analogy:
      'Like a company receptionist who takes calls. External callers dial one main number (public IP), and the receptionist routes them to the right internal extension (private IP). The caller never sees the extension number.',
    soundsSmartToSay:
      '"Our NAT gateway is a single point of failure and a bandwidth bottleneck — we should deploy one per AZ for both resilience and throughput."',
    commonConfusions: [
      'NAT vs firewall: NAT translates addresses; a firewall filters traffic. They often run on the same device (your home router does both) but serve different purposes.',
      'SNAT vs DNAT: Source NAT changes the source IP (outbound traffic). Destination NAT changes the destination IP (port forwarding for inbound traffic). Most people mean SNAT when they say "NAT."',
    ],
    relatedTerms: ['IPv4', 'VPC', 'Private IP', 'Port Forwarding'],
  },
  {
    id: 'net-dhcp',
    domain: 'networking',
    title: 'DHCP',
    subtitle: 'Automatic IP address assignment',
    difficulty: 'beginner',
    tags: ['ip', 'configuration', 'protocol'],
    definition:
      'DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses, subnet masks, gateways, and DNS servers to devices when they join a network. Without it, every device would need manual IP configuration.',
    whyItMatters:
      'Managing static IPs for thousands of devices is impossible at scale. DHCP is the protocol that makes "plug it in and it works" possible — from laptops connecting to Wi-Fi to containers getting IPs in a Kubernetes pod network.',
    analogy:
      'Like a hotel front desk assigning room numbers. You walk in (connect to the network), the front desk (DHCP server) gives you a room (IP address) for a set duration (lease time), and reclaims it when you check out.',
    soundsSmartToSay:
      '"The DHCP lease time is too short — clients are renewing every 30 minutes, which is creating unnecessary broadcast traffic. Let us increase it to 8 hours for the office VLAN."',
    commonConfusions: [
      'DHCP vs static IP: DHCP assigns addresses dynamically. Servers, printers, and infrastructure devices typically use static IPs (or DHCP reservations) so their address never changes.',
      'DHCP vs DNS: DHCP assigns IPs. DNS resolves names to IPs. They work together — many DHCP servers can auto-register DNS records for the IPs they assign (Dynamic DNS).',
    ],
    relatedTerms: ['DNS', 'IP Address', 'Subnet', 'Lease Time'],
  },
  {
    id: 'net-zero-trust-networking',
    domain: 'networking',
    title: 'Zero Trust Networking',
    subtitle: 'Identity-based access, not network-based',
    difficulty: 'intermediate',
    tags: ['security', 'identity', 'architecture'],
    definition:
      'Zero Trust Networking replaces the traditional perimeter model (trusted inside, untrusted outside) with identity-based access controls where every connection is authenticated and authorized regardless of network location. Tools like BeyondCorp, Zscaler, and Tailscale implement this model.',
    whyItMatters:
      'VPNs put users "inside the network" and then trust them broadly. Zero Trust Networking grants access to specific applications based on user identity, device health, and context — so a compromised device on the VPN cannot laterally move to other resources.',
    analogy:
      'Like switching from a building keycard (one badge gets you everywhere inside) to per-room biometric locks. Being in the building does not grant access — every door checks who you are and whether you should be there.',
    soundsSmartToSay:
      '"We should evaluate a Zero Trust proxy to replace our VPN — our users only need access to five apps, not the entire network."',
    commonConfusions: [
      'Zero Trust Networking vs Zero Trust Security: Zero Trust Security is the broader philosophy. Zero Trust Networking applies it specifically to network access — replacing VPNs and network perimeters with identity-aware proxies.',
      'Zero Trust does not mean no network segmentation: You still segment networks, but you do not rely on segmentation alone for security. Defense in depth means both network controls and identity controls.',
    ],
    relatedTerms: ['Zero Trust', 'BeyondCorp', 'VPN', 'mTLS'],
  },
  {
    id: 'net-segmentation',
    domain: 'networking',
    title: 'Network Segmentation',
    subtitle: 'Contain the blast radius',
    difficulty: 'intermediate',
    tags: ['security', 'architecture', 'isolation'],
    definition:
      'Network segmentation divides a network into isolated zones — using VLANs, subnets, firewalls, or microsegmentation — so that a compromise in one zone cannot easily spread to others. Each zone has its own access rules and traffic policies.',
    whyItMatters:
      'A flat network is an attacker\'s dream — one compromised machine gives access to everything. Segmentation limits lateral movement, protects sensitive data zones (PCI, HIPAA), and is required by most compliance frameworks.',
    analogy:
      'Like bulkheads on a ship. If one compartment floods (gets compromised), the bulkheads prevent water (the attacker) from sinking the entire ship. Each segment is a watertight compartment.',
    soundsSmartToSay:
      '"Our PCI environment needs to be segmented from the rest of the network — the fewer systems in scope, the smaller our audit surface."',
    commonConfusions: [
      'Segmentation vs microsegmentation: Traditional segmentation uses VLANs and firewalls between zones. Microsegmentation (tools like Illumio, VMware NSX) enforces policies between individual workloads, even within the same zone.',
      'Segmentation reduces — it does not eliminate — risk: An attacker who compromises a machine in the same segment as the target can still move laterally within that segment. Segmentation limits scope, not capability.',
    ],
    relatedTerms: ['VLAN', 'Firewall', 'Microsegmentation', 'Zero Trust'],
  },
  {
    id: 'net-mpls',
    domain: 'networking',
    title: 'MPLS',
    subtitle: 'Multi-Protocol Label Switching',
    difficulty: 'advanced',
    tags: ['wan', 'carrier', 'routing'],
    definition:
      'MPLS is a carrier-grade routing technique that forwards packets using short labels instead of long IP addresses, enabling traffic engineering, guaranteed QoS, and predictable latency across wide-area networks. It is the backbone of most enterprise WAN services.',
    whyItMatters:
      'Before SD-WAN, MPLS was the only way to get reliable, low-latency connectivity between branch offices with SLA guarantees. It is still dominant in industries where deterministic performance matters — financial trading, real-time voice, and industrial control.',
    analogy:
      'Like an express lane system on a highway. Instead of reading every road sign (IP address) at every intersection, MPLS slaps a colored sticker (label) on each car at the on-ramp, and every toll booth just reads the sticker to route it — faster and with guaranteed lane priority.',
    soundsSmartToSay:
      '"We are evaluating SD-WAN to replace some MPLS circuits — the cost per megabit is 5x lower, and for non-latency-sensitive traffic, the SLA tradeoff is acceptable."',
    commonConfusions: [
      'MPLS vs SD-WAN: MPLS is a carrier-managed WAN with guaranteed SLAs but high cost. SD-WAN overlays intelligence on cheaper internet links but without guaranteed latency. Most enterprises are in a hybrid transition.',
      'MPLS vs VPN: A site-to-site VPN encrypts traffic over the internet. MPLS is a private carrier network — traffic never touches the public internet. MPLS provides better performance guarantees but at higher cost.',
    ],
    relatedTerms: ['SD-WAN', 'WAN', 'QoS', 'Traffic Engineering'],
  },
  {
    id: 'net-ipv6',
    domain: 'networking',
    title: 'IPv6 Migration',
    subtitle: 'The address space upgrade the internet needs',
    difficulty: 'advanced',
    tags: ['ip', 'migration', 'addressing'],
    definition:
      'IPv6 replaces IPv4\'s 4.3 billion addresses with 340 undecillion (3.4×10³⁸) addresses, eliminating the need for NAT and enabling end-to-end connectivity. Migration typically runs both protocols simultaneously (dual-stack) during the transition period.',
    whyItMatters:
      'IPv4 addresses are exhausted and increasingly expensive. Major cloud providers and mobile carriers already run IPv6 natively. New services and IoT deployments that ignore IPv6 will face addressing constraints and growing connectivity gaps.',
    analogy:
      'Like switching from a 7-digit phone number system to a 15-digit one. The old system ran out of numbers, but the transition takes years because every phone (device), switchboard (router), and phone book (DNS) needs to understand both formats.',
    soundsSmartToSay:
      '"We should deploy dual-stack now — running IPv4-only is technical debt that gets more expensive to fix as more traffic goes IPv6-native."',
    commonConfusions: [
      'IPv6 is not just "more addresses": IPv6 also simplifies routing (no NAT), mandates IPsec support, improves multicast, and enables stateless address autoconfiguration (SLAAC) — it is a protocol redesign, not just bigger numbers.',
      'Dual-stack vs tunneling: Dual-stack runs both IPv4 and IPv6 natively. Tunneling (6to4, Teredo) encapsulates IPv6 inside IPv4 — it is a workaround for networks that do not support IPv6 natively.',
    ],
    relatedTerms: ['NAT', 'Dual-Stack', 'SLAAC', 'IPv4'],
  },
  {
    id: 'net-qos',
    domain: 'networking',
    title: 'QoS',
    subtitle: 'Quality of Service — prioritizing what matters',
    difficulty: 'intermediate',
    tags: ['performance', 'traffic', 'prioritization'],
    definition:
      'QoS (Quality of Service) is a set of techniques that prioritize certain types of network traffic over others. By classifying and queuing packets, QoS ensures latency-sensitive traffic (voice, video, trading) gets bandwidth priority over bulk traffic (backups, downloads).',
    whyItMatters:
      'When a network link is saturated, all traffic suffers equally without QoS. A backup job flooding the pipe should not make the CEO\'s video call stutter. QoS prevents bandwidth-hungry applications from starving critical ones.',
    analogy:
      'Like a hospital emergency room triage. Everyone arrives at the same ER (network link), but critical patients (voice, video) are seen immediately while stable patients (file transfers) wait. The total capacity does not change — just the priority.',
    soundsSmartToSay:
      '"We need to classify our traffic and set DSCP markings so the WAN routers can prioritize voice and real-time control traffic during congestion."',
    commonConfusions: [
      'QoS does not add bandwidth: QoS prioritizes traffic within existing capacity. If the link is always saturated, you need more bandwidth — QoS just ensures what you have goes to the right places.',
      'QoS is only effective end-to-end if every device in the path honors the markings. A single router that ignores DSCP tags breaks the entire QoS chain — this is why managed WAN services like MPLS are preferred for QoS-dependent applications.',
    ],
    relatedTerms: ['DSCP', 'Traffic Shaping', 'Jitter', 'MPLS'],
  },
];
