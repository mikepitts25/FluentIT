import type { Card } from '../types';

export const agileCards: Card[] = [
  {
    id: 'agile-scrum',
    domain: 'agile',
    title: 'Scrum',
    subtitle: 'Iterative delivery in fixed-length sprints',
    difficulty: 'beginner',
    tags: ['framework', 'sprints', 'team'],
    definition:
      'Scrum is an agile framework where a cross-functional team delivers work in fixed-length iterations called sprints (typically 2 weeks). Each sprint has planning, daily standups, a review (demo), and a retrospective. A product owner prioritizes the backlog; a scrum master facilitates.',
    whyItMatters:
      'Scrum is the most widely used agile framework in software teams. Understanding its ceremonies, roles, and artifacts is essential for working in any scrum team — and for knowing when to question whether it\'s the right fit.',
    analogy:
      'Like cooking a multi-course dinner in rounds — every 2 weeks you plan a course (sprint planning), taste-test daily (standup), serve and get feedback (review), and discuss how to improve the kitchen workflow (retro).',
    soundsSmartToSay:
      '"If we can\'t commit to all these stories in the sprint, we need to negotiate scope — velocity is a measure, not a target to be stretched."',
    commonConfusions: [
      'Scrum vs Agile: Agile is a set of values and principles (the Agile Manifesto). Scrum is one specific framework that implements agile. Kanban, XP, and SAFe are other agile frameworks.',
      'Scrum Master vs Project Manager: A scrum master facilitates and removes blockers — they don\'t assign tasks or manage timelines. A PM manages scope, schedule, and budget.',
    ],
    relatedTerms: ['Sprint', 'Product Owner', 'Backlog', 'Velocity'],
  },
  {
    id: 'agile-kanban',
    domain: 'agile',
    title: 'Kanban',
    subtitle: 'Continuous flow with WIP limits',
    difficulty: 'beginner',
    tags: ['flow', 'WIP', 'board'],
    definition:
      'Kanban is an agile method focused on continuous delivery (no sprints) with explicit work-in-progress (WIP) limits. Work items flow through columns on a board (To Do → In Progress → Review → Done). Limiting WIP prevents multitasking and exposes bottlenecks.',
    whyItMatters:
      'Kanban is ideal for teams with unpredictable work (ops, support, maintenance). WIP limits are the core insight — they force focus, expose bottlenecks, and improve throughput by reducing context switching.',
    analogy:
      'Like a highway with metered on-ramps — limiting how many cars enter (WIP limit) prevents traffic jams (overloaded developers) and keeps traffic flowing smoothly (predictable delivery).',
    soundsSmartToSay:
      '"Our cycle time is creeping up because we have 15 items in progress — we need to enforce WIP limits and finish what we started before pulling new work."',
    commonConfusions: [
      'Kanban vs Scrum: Scrum batches work into sprints. Kanban flows continuously. Scrum has prescribed roles (PO, SM). Kanban doesn\'t prescribe roles. Many teams blend both ("Scrumban").',
      'A Kanban board without WIP limits is just a to-do list — the WIP limits are what make it Kanban. Without them, you lose the bottleneck visibility and flow optimization.',
    ],
    relatedTerms: ['WIP Limit', 'Cycle Time', 'Lead Time', 'Scrumban'],
  },
  {
    id: 'agile-user-stories',
    domain: 'agile',
    title: 'User Stories',
    subtitle: 'Requirements written from the user\'s perspective',
    difficulty: 'beginner',
    tags: ['requirements', 'backlog', 'acceptance'],
    definition:
      'A user story captures a requirement in the format: "As a [role], I want [capability] so that [benefit]." It focuses on the user\'s goal, not the technical implementation. Acceptance criteria define when the story is done.',
    whyItMatters:
      'User stories keep the team focused on delivering value to users rather than building features nobody asked for. The format forces clarity about who benefits, what they need, and why it matters.',
    analogy:
      'Like a customer request at a restaurant: "As a diner with a nut allergy, I want allergen labels on the menu so that I can eat safely." The kitchen decides how to implement it; the customer states what they need.',
    soundsSmartToSay:
      '"This story is too big to estimate — let\'s split it into smaller stories that can each be delivered and tested independently within a sprint."',
    commonConfusions: [
      'User story vs task: A user story is a deliverable piece of user value. Tasks are the technical work items that implement the story. One story may have multiple tasks (design, code, test, deploy).',
      'Story points estimate complexity, not time. A 5-point story takes more effort than a 3-point story, but how many hours is team-dependent. Points are for relative estimation.',
    ],
    relatedTerms: ['Acceptance Criteria', 'Story Points', 'Epic', 'Backlog Refinement'],
  },
  {
    id: 'agile-retro',
    domain: 'agile',
    title: 'Retrospective',
    subtitle: 'The team improvement feedback loop',
    difficulty: 'beginner',
    tags: ['improvement', 'feedback', 'ceremony'],
    definition:
      'A retrospective is a regular team meeting (typically after each sprint) where the team reflects on what went well, what didn\'t, and what to change. The output is a small number of concrete action items to improve the next iteration.',
    whyItMatters:
      'Teams that don\'t retro repeat the same mistakes. Teams that retro well improve continuously. The key is psychological safety — people must feel safe raising problems — and following through on action items.',
    analogy:
      'Like a sports team watching game film after a match — reviewing plays that worked, plays that failed, and agreeing on specific practice drills (action items) for the next game.',
    soundsSmartToSay:
      '"We keep identifying the same problem in retros but never action it — let\'s assign owners and deadlines to our top action item this time."',
    commonConfusions: [
      'Retro vs review: A sprint review demos completed work to stakeholders (external-facing). A retro examines team process and practices (internal-facing). Both happen at sprint end.',
      'Retros only work with psychological safety — if people fear blame, they won\'t surface real problems. A good facilitator creates safety through structured formats and anonymous input.',
    ],
    relatedTerms: ['Continuous Improvement', 'Kaizen', 'Sprint Review', 'Action Items'],
  },
  {
    id: 'agile-cicd-devops',
    domain: 'agile',
    title: 'DevOps Culture',
    subtitle: 'Breaking down the wall between dev and ops',
    difficulty: 'beginner',
    tags: ['culture', 'collaboration', 'delivery'],
    definition:
      'DevOps is a cultural movement that breaks down silos between development (build software) and operations (run software). Teams own their services end-to-end — "you build it, you run it" — enabled by automation, CI/CD, and shared responsibility for reliability.',
    whyItMatters:
      'Before DevOps, dev teams threw code over the wall to ops teams. Bugs were everyone else\'s problem. DevOps means the team that writes the code also deploys, monitors, and is paged when it breaks — creating strong incentives to build reliable software.',
    analogy:
      'Like a restaurant where the chef also serves and cleans tables — when you experience the full lifecycle, you cook differently. You use fewer dishes (simpler architecture) and clean as you go (good logging, monitoring).',
    soundsSmartToSay:
      '"DevOps is not a team or a title — it\'s a set of practices. If you have a \'DevOps team\' that sits between dev and ops, you\'ve just renamed the silo."',
    commonConfusions: [
      'DevOps is not just CI/CD tooling — it is a culture change. Tools enable DevOps practices, but buying Jenkins doesn\'t make you DevOps any more than buying a guitar makes you a musician.',
      'DevOps vs SRE: DevOps is a broad cultural philosophy. SRE (Site Reliability Engineering) is Google\'s specific implementation with defined practices like error budgets and SLOs. SRE is one way to do DevOps.',
    ],
    relatedTerms: ['CI/CD', 'SRE', 'Infrastructure as Code', 'Blameless Postmortem'],
  },
  {
    id: 'agile-estimation',
    domain: 'agile',
    title: 'Estimation',
    subtitle: 'Story points, t-shirt sizes, and forecasting delivery',
    difficulty: 'beginner',
    tags: ['planning', 'velocity', 'forecasting'],
    definition:
      'Agile estimation sizes work items by relative complexity (story points, t-shirt sizes) rather than absolute hours. Team velocity (average points completed per sprint) is then used to forecast how many sprints a set of stories will take.',
    whyItMatters:
      'Stakeholders need delivery forecasts. Developers resist hour-based estimates because they are always wrong. Story points + velocity is the pragmatic middle ground — acknowledging uncertainty while providing useful forecasts.',
    analogy:
      'Like estimating a road trip by difficulty rather than hours: "Mountain pass is harder than highway" is more reliable than "it takes exactly 4 hours" — because you can\'t predict traffic, weather, or stops.',
    soundsSmartToSay:
      '"Velocity is descriptive, not prescriptive — using it as a performance target incentivizes point inflation and destroys its forecasting value."',
    commonConfusions: [
      'Story points are relative, not absolute: A 5-point story is roughly twice as complex as a 3-point story for your team. Different teams will size the same work differently.',
      'The Fibonacci sequence (1, 2, 3, 5, 8, 13) is commonly used because larger numbers are inherently less precise — the gap between 8 and 13 reflects genuine uncertainty about large stories.',
    ],
    relatedTerms: ['Velocity', 'Story Points', 'Planning Poker', 'Burndown Chart'],
  },
  {
    id: 'agile-technical-pm',
    domain: 'agile',
    title: 'Technical Program Management',
    subtitle: 'Coordinating complex cross-team technical initiatives',
    difficulty: 'intermediate',
    tags: ['coordination', 'dependencies', 'cross-team'],
    definition:
      'Technical Program Management (TPM) coordinates large-scale technical initiatives that span multiple teams, systems, and timelines — like platform migrations, new product launches, or compliance deadlines. TPMs manage dependencies, risks, and communication across engineering organizations.',
    whyItMatters:
      'Individual scrum teams can self-organize. But when 5 teams need to coordinate a database migration that affects 12 services with a regulatory deadline, someone needs to map dependencies, identify risks, and keep everyone aligned.',
    analogy:
      'Like an air traffic controller — individual pilots (teams) fly their planes, but the controller ensures they don\'t collide, sequences landings, and reroutes when weather (blockers) appears.',
    soundsSmartToSay:
      '"We need to map the dependency graph for this migration — if Team A\'s API change is on the critical path, we need to ensure they ship before Team B starts their integration work."',
    commonConfusions: [
      'TPM vs PM vs scrum master: A PM owns the product roadmap (what to build). A scrum master facilitates one team. A TPM coordinates execution across many teams on complex technical programs.',
      'TPMs don\'t write code but need deep technical understanding — enough to identify when a team\'s estimate is unrealistic, when an architectural dependency creates risk, or when a proposed solution won\'t scale.',
    ],
    relatedTerms: ['Dependency Graph', 'Critical Path', 'Risk Register', 'Gantt Chart'],
  },
  {
    id: 'agile-postmortem',
    domain: 'agile',
    title: 'Blameless Postmortem',
    subtitle: 'Learning from failures without pointing fingers',
    difficulty: 'beginner',
    tags: ['incidents', 'learning', 'culture'],
    definition:
      'A blameless postmortem is a structured review after an incident that focuses on what happened, why it happened, and how to prevent it — without blaming individuals. The assumption is that people acted with good intentions given what they knew; the system allowed the failure.',
    whyItMatters:
      'If people fear punishment for mistakes, they hide them. Hidden mistakes mean no learning. Blameless postmortems create a culture where failures are surfaced quickly and turned into systemic improvements — making the entire organization more resilient.',
    analogy:
      'Like an aviation crash investigation — investigators never blame the pilot personally. They study cockpit design, training procedures, and communication protocols to make the entire system safer for everyone.',
    soundsSmartToSay:
      '"The question isn\'t \'who caused this\' — it\'s \'what about our system allowed a single person\'s action to cause a customer-facing outage?\'"',
    commonConfusions: [
      'Blameless does not mean accountability-free — individuals still own follow-up action items. It means we focus on fixing systems and processes, not punishing the person who happened to push the button.',
      'Postmortem vs incident review: A postmortem is a deeper analysis, often written up and shared widely. An incident review may be a quicker team discussion. High-severity incidents deserve full postmortems.',
    ],
    relatedTerms: ['Incident Response', 'SRE', 'Root Cause Analysis', 'Psychological Safety'],
  },
  {
    id: 'agile-sprint-planning',
    domain: 'agile',
    title: 'Sprint Planning',
    subtitle: 'Deciding what to deliver in the next iteration',
    difficulty: 'beginner',
    tags: ['ceremony', 'sprints', 'planning'],
    definition:
      'Sprint planning is a time-boxed ceremony at the start of each sprint where the team selects items from the prioritized backlog, discusses how to implement them, and commits to a sprint goal. The product owner explains priorities and answers questions; the team decides how much work they can realistically take on based on their capacity and historical velocity.',
    whyItMatters:
      'Without sprint planning, teams either overcommit (leading to burnout and missed deadlines) or undercommit (wasting capacity). Good sprint planning aligns the team on a shared goal, surfaces unknowns early, and gives stakeholders a credible forecast of what will ship.',
    analogy:
      'Like a network engineer planning a maintenance window — you assess how many changes you can safely deploy in the downtime window, sequence them by dependency, and leave buffer for rollback. Overloading the window is how outages happen.',
    soundsSmartToSay:
      '"Let\'s focus on a sprint goal rather than a laundry list of stories — if we have a clear objective, we can make better trade-off decisions mid-sprint when surprises come up."',
    commonConfusions: [
      'Sprint planning is not a status meeting — it is a collaborative design session where the team breaks down work, identifies risks, and negotiates scope with the product owner.',
      'The team commits to a sprint goal, not to every individual story. If a story turns out to be harder than expected, the goal guides which stories to drop or defer.',
    ],
    relatedTerms: ['Sprint Goal', 'Backlog Refinement', 'Velocity', 'Capacity Planning'],
  },
  {
    id: 'agile-velocity',
    domain: 'agile',
    title: 'Velocity',
    subtitle: 'Measuring team throughput over time',
    difficulty: 'beginner',
    tags: ['metrics', 'forecasting', 'sprints'],
    definition:
      'Velocity is the average number of story points a team completes per sprint, calculated over several recent sprints. It serves as a forecasting tool — if the team averages 30 points per sprint, a 120-point epic will take roughly 4 sprints. Velocity is descriptive (what the team has done), not prescriptive (what they should do).',
    whyItMatters:
      'Velocity gives product managers a data-driven way to forecast delivery dates and make scope decisions. When leadership asks "when will this be done?", velocity turns that into a range rather than a guess — enabling realistic roadmap commitments.',
    analogy:
      'Like monitoring network throughput on a link — you measure average Mbps over time to plan capacity. You would never "mandate" a 10 Gbps link to carry 15 Gbps; similarly, you should not mandate a 30-point team to deliver 45 points.',
    soundsSmartToSay:
      '"Velocity is a planning input, not a performance metric — the moment you use it to compare teams or set targets, teams inflate their estimates and the number becomes meaningless."',
    commonConfusions: [
      'Velocity is team-specific and cannot be compared across teams. Team A\'s "5-point story" may be completely different from Team B\'s. Cross-team comparison incentivizes gaming.',
      'A rising velocity does not necessarily mean the team is improving — it can indicate point inflation. Look at outcomes delivered to users, not points completed.',
    ],
    relatedTerms: ['Story Points', 'Sprint Planning', 'Burndown Chart', 'Throughput'],
  },
  {
    id: 'agile-safe',
    domain: 'agile',
    title: 'SAFe (Scaled Agile)',
    subtitle: 'Scaling agile practices across large enterprises',
    difficulty: 'advanced',
    tags: ['framework', 'enterprise', 'scaling'],
    definition:
      'SAFe (Scaled Agile Framework) is a structured framework for applying agile principles at enterprise scale — coordinating dozens or hundreds of teams through constructs like Agile Release Trains (ARTs), Program Increments (PIs), and portfolio-level planning. It layers roles, ceremonies (PI Planning), and governance on top of team-level agile.',
    whyItMatters:
      'Individual scrum teams can self-organize, but when a product requires 10+ teams working on interconnected services, you need a coordination layer. SAFe provides a standardized approach that large organizations can adopt — though its heavy process can feel antithetical to agile values.',
    analogy:
      'Like the difference between a single-server deployment and a distributed microservices architecture — the core principles are the same, but at scale you need orchestration layers and observability tooling that a single server never needed.',
    soundsSmartToSay:
      '"SAFe gives us coordination scaffolding, but we need to be careful not to let the framework become bureaucracy — PI Planning is only valuable if teams actually use it to resolve cross-team dependencies, not just present slide decks."',
    commonConfusions: [
      'SAFe vs agile: Many agile purists criticize SAFe as "agile in name only" because its heavy governance contradicts the Agile Manifesto\'s preference for individuals and interactions over processes and tools.',
      'SAFe is not the only scaling framework — LeSS (Large-Scale Scrum), Spotify Model, and Nexus are alternatives. SAFe is the most commercially adopted but also the most prescriptive.',
    ],
    relatedTerms: ['Agile Release Train', 'PI Planning', 'LeSS', 'Spotify Model'],
  },
  {
    id: 'agile-okrs',
    domain: 'agile',
    title: 'OKRs',
    subtitle: 'Aligning teams around measurable outcomes',
    difficulty: 'intermediate',
    tags: ['goals', 'alignment', 'outcomes'],
    definition:
      'OKRs (Objectives and Key Results) are a goal-setting framework where an Objective states a qualitative goal ("Become the fastest checkout experience in e-commerce") and Key Results define 2-4 measurable outcomes that prove the objective is met. OKRs cascade from company to team level and are typically set quarterly.',
    whyItMatters:
      'OKRs bridge the gap between strategy and execution. They prevent teams from shipping features that nobody measures and give leadership visibility into whether teams are working on the highest-impact problems rather than just staying busy.',
    analogy:
      'Like SLOs in site reliability — an SLO defines a measurable target for system health (99.9% uptime). OKRs do the same for product and business goals: the Objective is the SLO, and Key Results are the metrics you monitor.',
    soundsSmartToSay:
      '"Our key results should measure outcomes, not outputs — \'ship the redesign\' is an output; \'increase conversion rate by 15%\' is the outcome we actually care about."',
    commonConfusions: [
      'OKRs vs KPIs: KPIs are ongoing health metrics you always monitor (revenue, uptime, churn). OKRs are time-bound stretch goals for a specific quarter. A KPI might inform an OKR, but they serve different purposes.',
      'OKRs are meant to be ambitious — achieving 70% of a stretch OKR is often considered success. Teams that consistently hit 100% are setting their OKRs too conservatively.',
    ],
    relatedTerms: ['KPIs', 'North Star Metric', 'Quarterly Planning', 'Strategy Alignment'],
  },
  {
    id: 'agile-burndown-charts',
    domain: 'agile',
    title: 'Burndown Charts',
    subtitle: 'Visualizing remaining work over time',
    difficulty: 'beginner',
    tags: ['metrics', 'visualization', 'tracking'],
    definition:
      'A burndown chart plots the amount of work remaining (y-axis, typically in story points) against time (x-axis, typically days in a sprint). An ideal burndown line slopes steadily downward from the total committed points to zero by sprint end. The actual line shows real progress — revealing whether the team is ahead, behind, or blocked.',
    whyItMatters:
      'Burndown charts give the team and stakeholders an at-a-glance view of sprint health. A flat line mid-sprint signals a blocker before the sprint review. An upward spike means scope was added. Without this visibility, problems surface only at the end when it is too late to course-correct.',
    analogy:
      'Like a disk usage dashboard in infrastructure monitoring — you can see the trend line and predict when you will run out of capacity. A flat burndown is like flat disk usage: nothing is being consumed, which means either work is stuck or something is misconfigured.',
    soundsSmartToSay:
      '"The burndown has been flat for three days — that usually means we have a blocker that is not surfacing in standups. Let\'s dig into what is actually preventing stories from moving to done."',
    commonConfusions: [
      'Burndown vs burnup chart: A burndown shows remaining work trending toward zero. A burnup shows completed work trending toward the total. Burnup charts are better at showing scope changes because both lines are visible.',
      'A "perfect" burndown (actual line matches ideal line exactly) is suspicious — real work is lumpy. Stories finish in bursts, not in smooth daily increments. Consistency over multiple sprints matters more than one perfect chart.',
    ],
    relatedTerms: ['Velocity', 'Sprint Goal', 'Scope Creep', 'Cumulative Flow Diagram'],
  },
  {
    id: 'agile-continuous-discovery',
    domain: 'agile',
    title: 'Continuous Discovery',
    subtitle: 'Ongoing user research embedded in delivery cycles',
    difficulty: 'intermediate',
    tags: ['discovery', 'user-research', 'product'],
    definition:
      'Continuous discovery is the practice of conducting small, frequent user research activities (weekly interviews, prototype tests, data analysis) throughout the development cycle — rather than doing a large research phase upfront. Product teams maintain a continuous feedback loop: discover opportunities, test assumptions with users, and feed validated insights into the delivery backlog.',
    whyItMatters:
      'Teams that only do discovery at project kickoff often build the wrong thing because assumptions go stale. Continuous discovery reduces the risk of investing months of engineering effort in features that users do not want or cannot use, catching misalignment in days instead of quarters.',
    analogy:
      'Like continuous monitoring vs periodic audits in security — a SIEM that ingests logs in real time catches threats faster than a quarterly penetration test. Similarly, weekly user interviews catch product-market misalignment before you ship an entire feature nobody needs.',
    soundsSmartToSay:
      '"We should not gate discovery behind a design phase — if the product trio is interviewing one user a week, we can validate assumptions in parallel with delivery instead of doing a 6-week research project upfront."',
    commonConfusions: [
      'Continuous discovery does not mean skipping strategy — it means validating strategy continuously. You still need a product vision and roadmap; discovery tests whether your planned solutions actually solve user problems.',
      'Continuous discovery is not A/B testing. A/B tests validate which variation performs better in production. Discovery happens earlier — testing whether a problem is worth solving before any code is written.',
    ],
    relatedTerms: ['Product Trio', 'Opportunity Solution Tree', 'Dual-Track Agile', 'Jobs to Be Done'],
  },
  {
    id: 'agile-definition-of-done',
    domain: 'agile',
    title: 'Definition of Done',
    subtitle: 'The shared quality checklist for completed work',
    difficulty: 'beginner',
    tags: ['quality', 'standards', 'completeness'],
    definition:
      'The Definition of Done (DoD) is a team-agreed checklist of criteria that every work item must meet before it is considered complete — typically including code review, unit tests passing, documentation updated, deployed to staging, and acceptance criteria verified. It ensures "done" means the same thing to every team member and stakeholder.',
    whyItMatters:
      'Without a shared DoD, "done" is ambiguous — one developer means "code written," another means "tested and deployed." This leads to hidden work, technical debt, and sprint-end surprises. A clear DoD makes quality non-negotiable and prevents incomplete work from being counted as progress.',
    analogy:
      'Like a pre-flight checklist in aviation — a pilot does not consider the aircraft "ready" just because the engines start. Fuel, instruments, control surfaces, and weather briefing all must be checked.',
    soundsSmartToSay:
      '"We need to add security scanning to our Definition of Done — if a story can be marked complete without passing a vulnerability scan, we are accumulating security debt the same way we accumulate tech debt."',
    commonConfusions: [
      'Definition of Done vs acceptance criteria: Acceptance criteria are specific to one story ("user can reset password via email"). The DoD applies to all stories ("code reviewed, tests passing, deployed to staging"). Both must be met.',
      'The DoD should evolve over time as the team matures. A new team might start with "code reviewed and tests passing." A mature team adds integration tests, performance benchmarks, accessibility checks, and documentation.',
    ],
    relatedTerms: ['Acceptance Criteria', 'Technical Debt', 'Code Review', 'Quality Gate'],
  },
  {
    id: 'agile-transformation',
    domain: 'agile',
    title: 'Agile Transformation',
    subtitle: 'Shifting an entire organization to agile ways of working',
    difficulty: 'advanced',
    tags: ['change-management', 'culture', 'enterprise'],
    definition:
      'Agile transformation is the organizational change initiative of adopting agile values, principles, and practices across an enterprise — not just in engineering, but in product management, finance, HR, and leadership. It involves restructuring teams around value streams, changing funding models from project-based to product-based, and shifting leadership from command-and-control to servant leadership.',
    whyItMatters:
      'Adopting scrum at the team level is easy; changing how a 10,000-person organization plans, funds, and measures work is hard. Without transformation at the organizational level, agile teams are trapped in waterfall budgeting cycles, approval gates, and annual planning.',
    analogy:
      'Like migrating from a monolithic application to microservices — you cannot just break the code into services and declare victory. You also need to change the deployment pipeline, monitoring, team ownership model, and on-call structure.',
    soundsSmartToSay:
      '"Our teams are agile but our funding model is still annual waterfall — we are asking teams to iterate in 2-week sprints inside 12-month budget commitments. Until we move to incremental funding, the transformation is cosmetic."',
    commonConfusions: [
      'Agile transformation is not "install Jira and run standups." It requires changes to organizational structure, budgeting, governance, performance reviews, and leadership behavior. Tool adoption without culture change is often called "cargo cult agile."',
      'Transformations fail most often due to middle management resistance — team-level practitioners embrace agile, executives sponsor it, but middle managers lose positional authority in flat, self-organizing structures and resist the change.',
    ],
    relatedTerms: ['Change Management', 'Servant Leadership', 'Value Streams', 'Organizational Design'],
  },
  {
    id: 'agile-dual-track',
    domain: 'agile',
    title: 'Dual-Track Agile',
    subtitle: 'Running discovery and delivery in parallel',
    difficulty: 'intermediate',
    tags: ['discovery', 'delivery', 'product', 'process'],
    definition:
      'Dual-track agile runs two parallel streams simultaneously: a discovery track (researching user problems, testing hypotheses, validating solutions) and a delivery track (engineering, building, and shipping validated features). Discovery feeds the delivery track with work that has already been validated with users, reducing the risk of building the wrong thing.',
    whyItMatters:
      'Most teams either skip discovery entirely (ship features users don\'t want) or stop delivery while doing discovery (too slow). Dual-track keeps both running simultaneously — the discovery track ensures the delivery backlog is always stocked with validated, high-value work.',
    analogy:
      'Like a pipeline and a supply chain running in parallel — the factory (delivery track) keeps producing, while the supply chain (discovery track) ensures raw materials (validated ideas) are always ready for the next production run.',
    soundsSmartToSay:
      '"Our delivery team is building quickly, but they\'re shipping features that aren\'t moving the needle — we need a discovery track running 1-2 sprints ahead of delivery to validate demand before we build."',
    commonConfusions: [
      'Dual-track agile vs sequential discovery: Sequential discovery means no delivery until research is complete — months of research before a line of code is written. Dual-track runs both simultaneously so research informs the next sprint, not the next quarter.',
      'Not all stories need full discovery: Bugs, infrastructure work, and regulatory requirements don\'t require user validation. Discovery is most valuable for new features and capability investments where user need is uncertain.',
    ],
    relatedTerms: ['Continuous Discovery', 'User Stories', 'Sprint Planning', 'MVP'],
  },
  {
    id: 'agile-story-mapping',
    domain: 'agile',
    title: 'User Story Mapping',
    subtitle: 'Visualizing the full user journey to plan releases',
    difficulty: 'intermediate',
    tags: ['planning', 'user journey', 'backlog', 'visualization'],
    definition:
      'User story mapping is a visual planning technique where stories are arranged in a two-dimensional grid: the horizontal axis represents the user\'s journey through the product (activities in sequence), and the vertical axis shows different levels of detail (must-have vs nice-to-have). Teams use it to identify MVP scope and plan releases by slicing horizontally across the map.',
    whyItMatters:
      'A flat backlog loses context — stories are ordered by priority but their relationship to the user\'s complete journey is invisible. Story mapping restores that context, making it obvious which stories together deliver a complete end-to-end experience vs which are isolated improvements.',
    analogy:
      'Like planning a road trip on a map rather than a to-do list — you can see the route (user journey), the stops along the way (activities), and which roads are paved vs dirt tracks (must-have vs nice-to-have), making it obvious which path gets you to the destination most reliably.',
    soundsSmartToSay:
      '"Let\'s build a story map before we start writing individual stories — until we can see the full user journey on the wall, we won\'t know which stories together constitute a shippable slice."',
    commonConfusions: [
      'Story mapping vs a backlog: A backlog is a ranked list. A story map is a two-dimensional visualization that shows user flow and dependency. You derive the backlog from the story map, not the other way around.',
      'Story maps show the walking skeleton first — the minimum set of stories that deliver a working end-to-end flow, even if thin and imperfect. Everything below the walking skeleton line is enhancement.',
    ],
    relatedTerms: ['User Stories', 'MVP', 'Backlog Refinement', 'Release Planning'],
  },
  {
    id: 'agile-prioritization',
    domain: 'agile',
    title: 'Prioritization Frameworks',
    subtitle: 'RICE, MoSCoW, and ICE for deciding what to build next',
    difficulty: 'intermediate',
    tags: ['prioritization', 'RICE', 'MoSCoW', 'product', 'decision-making'],
    definition:
      'Prioritization frameworks provide structured methods for ranking work by value and effort. RICE scores items by Reach × Impact × Confidence ÷ Effort. MoSCoW categorizes work as Must Have, Should Have, Could Have, Won\'t Have. ICE scores Impact × Confidence × Ease. These tools move prioritization from gut feel and politics to data-driven decisions.',
    whyItMatters:
      'Without a framework, whoever shouts loudest wins the backlog. Stakeholders from sales, customer success, and engineering all have legitimate competing demands. A scoring framework makes the trade-offs explicit, distributes decision-making, and creates a rationale you can defend to stakeholders who didn\'t get their feature.',
    analogy:
      'Like a hospital triage system — patients (features) arrive simultaneously, but the system applies clear criteria (severity, treatability, resource consumption) to determine order of care, so the team focuses on what saves the most lives (delivers the most value) first.',
    soundsSmartToSay:
      '"Let\'s score these items with RICE before the roadmap meeting — without a framework, this becomes a political debate instead of a business decision."',
    commonConfusions: [
      'Prioritization frameworks are inputs, not oracles: RICE scores are only as good as the estimates behind them. Reach estimates can be wildly off; confidence scores are subjective. Use frameworks to structure discussion, not replace judgment.',
      'MoSCoW must-haves vs gold-plating: Teams often call too many things "Must Have." A true must-have is something that makes the release non-viable without it — not just "important." If everything is a must-have, you have no framework.',
    ],
    relatedTerms: ['Product Roadmap', 'OKRs', 'User Stories', 'MVP'],
  },
  {
    id: 'agile-value-stream-mapping',
    domain: 'agile',
    title: 'Value Stream Mapping',
    subtitle: 'Visualizing the end-to-end flow from idea to customer value',
    difficulty: 'advanced',
    tags: ['lean', 'flow', 'waste', 'value stream', 'process'],
    definition:
      'Value Stream Mapping (VSM) is a lean technique that visualizes every step in the process of delivering value — from customer request to deployed feature. It maps both value-adding activities and waste (waiting, rework, handoffs, approvals). The goal is to identify and eliminate bottlenecks and non-value-adding steps to reduce lead time.',
    whyItMatters:
      'Organizations often find that only 10-15% of total lead time is actual development work — the rest is waiting for approvals, handoffs between teams, or rework from quality issues. VSM makes this invisible waste visible and creates a shared picture of the end-to-end system, which is necessary before any part of it can be improved.',
    analogy:
      'Like auditing a supply chain from raw materials to customer delivery — you might discover that a product spends 2 days in production but 10 days waiting in warehouses between steps. Speeding up production does nothing; the bottleneck is the warehousing (waiting/handoffs).',
    soundsSmartToSay:
      '"Before we invest in another CI/CD optimization, let\'s map the full value stream — I suspect our deployment automation is fast but features sit in code review and QA queues for weeks, which is where the real lead time is hidden."',
    commonConfusions: [
      'VSM vs process mapping: Process maps show how work flows. Value stream maps add time data — both processing time and wait time for each step — making waste quantifiable rather than just visible.',
      'Current-state vs future-state VSM: You always draw the current state first (reality), then design the future state (target). The gap between them becomes your improvement roadmap. Jumping to future state without understanding current state produces idealistic but unachievable plans.',
    ],
    relatedTerms: ['Lean', 'Flow Efficiency', 'DORA Metrics', 'Agile Transformation'],
  },
  {
    id: 'agile-team-topologies',
    domain: 'agile',
    title: 'Team Topologies',
    subtitle: 'Four team types for fast, sustainable software delivery',
    difficulty: 'advanced',
    tags: ['team design', 'Conway\'s Law', 'platform', 'stream-aligned'],
    definition:
      'Team Topologies (Matthew Skelton & Manuel Pais, 2019) defines four fundamental team types: Stream-aligned teams (deliver value directly to customers), Platform teams (provide internal products that enable stream-aligned teams), Enabling teams (help other teams develop new capabilities), and Complicated Subsystem teams (own areas requiring deep specialist knowledge). Three interaction modes — collaboration, X-as-a-Service, and facilitating — determine how teams work together.',
    whyItMatters:
      'Conway\'s Law states that systems mirror the communication structures of the organizations that build them. Poorly designed team structures produce tangled architectures and slow delivery — too many dependencies, too many handoffs, too much coordination overhead. Team Topologies provides a vocabulary and model for designing team structures that enable fast, independent delivery.',
    analogy:
      'Like urban planning for software organizations — if you design a city (org) without thinking about traffic flow (team communication), you get gridlock (dependencies). Team Topologies is the urban planning framework that shapes team boundaries to minimize coordination costs and maximize flow.',
    soundsSmartToSay:
      '"Our stream-aligned teams are constantly blocked on the platform team because the platform team is being treated as a cost center rather than an internal product team with its own roadmap. That\'s a Team Topologies anti-pattern."',
    commonConfusions: [
      'Platform team vs DevOps team: A platform team builds and maintains internal developer platforms (CI/CD, observability, cloud abstractions) as self-service products. A "DevOps team" that acts as a gate between dev and prod is an anti-pattern — it just renames the silo.',
      'Stream-aligned teams are not the same as feature teams: Both own end-to-end delivery, but stream-aligned teams are aligned to a specific value stream (customer segment, product area, or journey) and own their service in production — not just feature development.',
    ],
    relatedTerms: ['Conway\'s Law', 'Platform Engineering', 'DevOps Culture', 'Agile Transformation'],
  },
  {
    id: 'agile-dora-metrics',
    domain: 'agile',
    title: 'DORA Metrics',
    subtitle: 'Four metrics that predict software delivery performance',
    difficulty: 'intermediate',
    tags: ['metrics', 'DevOps', 'delivery', 'performance', 'DORA'],
    definition:
      'DORA (DevOps Research and Assessment) identified four key metrics that distinguish high-performing software organizations: Deployment Frequency (how often code is deployed to production), Lead Time for Changes (time from commit to production), Change Failure Rate (percentage of deployments causing production failures), and Time to Restore Service (MTTR after a failure). Elite performers deploy multiple times per day with sub-hour lead times.',
    whyItMatters:
      'Without objective metrics, software delivery "performance" is based on opinion and anecdote. DORA metrics provide industry-validated benchmarks backed by 7 years of research across 32,000+ organizations — giving leadership and engineers a shared, objective measure of delivery capability.',
    analogy:
      'Like four vital signs for software delivery health — deployment frequency is heart rate (how active), lead time is reaction time (how fast), change failure rate is error rate (how accurate), and MTTR is recovery rate (how resilient). Together they paint a complete health picture.',
    soundsSmartToSay:
      '"Our deployment frequency is once per month and our lead time is 3 weeks — by DORA standards, we\'re in the low-performer category. The bottleneck isn\'t engineering speed; it\'s our manual approval gates and long-running test suite."',
    commonConfusions: [
      'DORA metrics measure outcomes, not activities: You cannot game them by deploying broken code frequently. Deployment frequency only matters alongside change failure rate — high frequency with high failure rate is not elite performance.',
      'DORA metrics are lagging indicators: They tell you how you have been performing, not why. Use them alongside leading indicators (code review wait time, test coverage, deployment pipeline duration) to identify root causes.',
    ],
    relatedTerms: ['CI/CD', 'DevOps Culture', 'MTTR', 'Value Stream Mapping'],
  },
  {
    id: 'agile-mvp',
    domain: 'agile',
    title: 'MVP (Minimum Viable Product)',
    subtitle: 'The smallest thing you can build to test a hypothesis',
    difficulty: 'beginner',
    tags: ['product', 'lean', 'validation', 'MVP'],
    definition:
      'An MVP is the minimum version of a product that delivers enough value to attract early adopters and validate core assumptions — with the minimum investment of time and money. The goal is not to ship a polished product but to learn whether the core value hypothesis is true before scaling the investment.',
    whyItMatters:
      'Most product failures are not engineering failures — they are failures to validate demand. Teams spend 12 months building something nobody wants. An MVP surfaces that misalignment after weeks, preserving the budget and team energy for something that actually solves the problem.',
    analogy:
      'Like building a landing page before a product — if nobody signs up for the waitlist, you have learned that your pitch doesn\'t resonate without writing a line of application code. The landing page is the MVP for "does anyone want this?"',
    soundsSmartToSay:
      '"An MVP is not a bad version of the full product — it\'s a well-designed experiment. We need to agree on the hypothesis we\'re testing and the success metric before we write a single line of code."',
    commonConfusions: [
      'MVP vs MMP (Minimum Marketable Product): An MVP is an internal learning tool — it may never ship publicly. An MMP is the smallest thing worth putting in front of real customers. Many teams confuse the two and ship broken MVPs as if they were finished products.',
      '"MVP" is not an excuse for shipping bad UX: The minimum refers to scope (fewer features), not quality. An MVP with a confusing or broken experience teaches you nothing valid — users bounce because of the UX, not because they don\'t want the product.',
    ],
    relatedTerms: ['Lean Startup', 'Hypothesis-Driven Development', 'Dual-Track Agile', 'Product Roadmap'],
  },
  {
    id: 'agile-jtbd',
    domain: 'agile',
    title: 'Jobs to Be Done (JTBD)',
    subtitle: 'Why customers hire your product — not who they are',
    difficulty: 'intermediate',
    tags: ['product', 'user research', 'innovation', 'JTBD'],
    definition:
      'Jobs to Be Done is a theory of consumer motivation that says customers "hire" products to accomplish a specific job — a functional, emotional, or social outcome they need. The insight is that demographics predict nothing about what someone will buy, but the job they\'re trying to accomplish predicts everything. Understanding the job explains when and why customers switch products.',
    whyItMatters:
      'Features built without understanding the job often miss the mark. JTBD shifts the question from "who is our user?" (persona) to "what are they trying to accomplish and what obstacles do they face?" (job). This surfaces product opportunities that demographics and surveys miss.',
    analogy:
      'Like understanding why people buy a 1/4-inch drill — they don\'t want a drill, they want a 1/4-inch hole. And they don\'t want the hole either — they want to hang a picture so their spouse is happy. The product (drill) is hired for the job (hanging a picture); a better wall anchor might take the job from the drill.',
    soundsSmartToSay:
      '"Before we design this feature, let\'s define the job — what specific outcome is the user trying to accomplish, what are they currently hiring to do that job, and why is that solution inadequate?"',
    commonConfusions: [
      'JTBD vs user personas: Personas segment users by demographics and attributes. JTBD segments by the job being done. A 65-year-old retired executive and a 25-year-old student might "hire" the same product for the same job — personas would never group them together.',
      'Functional vs emotional jobs: The functional job is what the product does mechanically. The emotional job is how the user wants to feel. A security product\'s functional job is blocking threats; the emotional job is feeling confident, not worried. Both matter for product design.',
    ],
    relatedTerms: ['Continuous Discovery', 'User Stories', 'MVP', 'Product Roadmap'],
  },
  {
    id: 'agile-north-star',
    domain: 'agile',
    title: 'North Star Metric',
    subtitle: 'The single metric that best captures core product value',
    difficulty: 'intermediate',
    tags: ['metrics', 'product', 'strategy', 'alignment'],
    definition:
      'A North Star Metric is the single metric that best captures the core value a product delivers to customers — the leading indicator that, if it grows, the business grows. Examples: Spotify\'s is time spent listening, Airbnb\'s is nights booked, Slack\'s is messages sent per active team. All team OKRs and feature decisions should tie back to moving the North Star.',
    whyItMatters:
      'Without a North Star, teams optimize local metrics (conversion rate, session length) that can be gamed without delivering real value. A well-chosen North Star forces every team to ask "does this move the needle on what actually matters?" before building anything.',
    analogy:
      'Like a compass heading for a ship — every navigation decision (feature, experiment, team allocation) is evaluated against whether it keeps the ship on course. Without the heading, teams row harder but not necessarily toward the destination.',
    soundsSmartToSay:
      '"Our North Star should be weekly active users who complete at least one concept card — that\'s the behavior that predicts retention and revenue, not total sign-ups which can be inflated by growth hacks."',
    commonConfusions: [
      'North Star vs revenue metric: Revenue is a lagging indicator and a consequence, not the cause, of delivering value. A North Star should be a leading indicator — if it grows this week, revenue will grow next quarter. Revenue as a North Star produces short-term thinking.',
      'One North Star vs many: If you have multiple North Stars, you have no North Star — just a list of metrics. The discipline is choosing one and accepting the trade-offs. Sub-metrics (inputs to the North Star) are fine; multiple competing primary metrics are not.',
    ],
    relatedTerms: ['OKRs', 'KPIs', 'DORA Metrics', 'Product Roadmap'],
  },
  {
    id: 'agile-psychological-safety',
    domain: 'agile',
    title: 'Psychological Safety',
    subtitle: 'The foundation of high-performing teams',
    difficulty: 'beginner',
    tags: ['culture', 'teams', 'performance', 'safety'],
    definition:
      'Psychological safety is the team climate where individuals feel safe to speak up, ask questions, admit mistakes, and raise concerns without fear of humiliation, punishment, or rejection. Google\'s Project Aristotle found it to be the single strongest predictor of team effectiveness — more important than individual talent, experience, or compensation.',
    whyItMatters:
      'Without psychological safety, teams suppress bad news (incidents are hidden), don\'t raise risks (failures are larger than necessary), and avoid innovation (nobody suggests ideas that might fail). With it, teams learn faster, identify problems earlier, and improve continuously.',
    analogy:
      'Like the difference between a cockpit where the co-pilot speaks up when the pilot is about to make a dangerous mistake (safe) vs one where crew authority gradient prevents it (unsafe). Aviation analyzed hundreds of crashes attributable to silence. The same dynamic plays out in software teams daily.',
    soundsSmartToSay:
      '"If nobody in retro is raising uncomfortable topics, the problem isn\'t that everything is fine — it\'s that the environment isn\'t safe enough for people to surface the real issues."',
    commonConfusions: [
      'Psychological safety vs comfort: A psychologically safe team is not a comfortable one where nobody is challenged. It is one where people feel safe taking risks, disagreeing, and being wrong. High standards and psychological safety coexist — they are not opposites.',
      'Psychological safety vs trust: Trust is about believing people will do what they say. Psychological safety is specifically about whether it is safe to take interpersonal risks — to speak up, disagree, or admit not knowing something.',
    ],
    relatedTerms: ['Blameless Postmortem', 'Retrospective', 'Agile Transformation', 'Working Agreements'],
  },
  {
    id: 'agile-working-agreements',
    domain: 'agile',
    title: 'Working Agreements',
    subtitle: 'Explicit team norms that prevent conflict and build trust',
    difficulty: 'beginner',
    tags: ['culture', 'norms', 'team', 'collaboration'],
    definition:
      'Working agreements are explicit, team-generated norms about how the team will work together — meeting etiquette, communication channels, code review expectations, definition of "on-call," and how to handle disagreements. They are created collaboratively, visible to everyone, and revisited regularly.',
    whyItMatters:
      'Most team conflicts are about violated implicit expectations, not genuine value differences. Working agreements make expectations explicit, preventing unnecessary friction. When a new member joins or a conflict arises, the team has a shared reference point rather than a debate about unspoken rules.',
    analogy:
      'Like the rules of the road in a new country — even experienced drivers need to know whether to drive on the left or right, what local signs mean, and what courtesies are expected. Without agreement, everyone drives by their own rules and accidents happen.',
    soundsSmartToSay:
      '"Before our new engineers start, let\'s update our working agreements — they should cover code review SLAs, how we handle production incidents, and when it\'s appropriate to override a peer\'s architectural decision."',
    commonConfusions: [
      'Working agreements vs team policies: Policies are imposed top-down. Working agreements are co-created by the team — which is what gives them legitimacy. A team that didn\'t create the agreement doesn\'t own it and won\'t follow it.',
      'Working agreements need maintenance: Agreements created at team formation become stale. Revisit them every quarter or when the team composition changes significantly. Stale agreements are worse than none because they create the illusion of shared understanding.',
    ],
    relatedTerms: ['Psychological Safety', 'Retrospective', 'Definition of Done', 'Team Topologies'],
  },
  {
    id: 'agile-technical-debt',
    domain: 'agile',
    title: 'Technical Debt',
    subtitle: 'The cost of cutting corners — and how to manage it',
    difficulty: 'beginner',
    tags: ['tech debt', 'quality', 'refactoring', 'trade-offs'],
    definition:
      'Technical debt is the implied cost of future rework required because shortcuts were taken during development — suboptimal design choices, missing tests, outdated dependencies, or hardcoded hacks. Like financial debt, it accrues interest: the longer it goes unaddressed, the more expensive future changes become.',
    whyItMatters:
      'Unchecked technical debt slows delivery — features that should take 3 days take 3 weeks because the team is fighting the code. Debt is not inherently bad (sometimes the deliberate shortcut is the right call) but it must be tracked, communicated to stakeholders, and scheduled for repayment.',
    analogy:
      'Like taking out a loan to build a house faster — the loan (shortcut) gets you there sooner, but you pay interest (slower future development) until it\'s repaid. Ignore the debt too long and the interest payments (rework, bugs, slowdowns) exceed any speed gain from the original shortcut.',
    soundsSmartToSay:
      '"We need to add technical debt to the backlog as first-class items with business justification — if we can\'t explain the cost of not addressing a debt item, we\'ll never get it prioritized."',
    commonConfusions: [
      'Not all tech debt is bad: Ward Cunningham, who coined the term, described deliberate debt as acceptable when taken consciously. The problem is accidental debt (poor decisions without intent) and unacknowledged debt (shortcuts that nobody knows about).',
      'Tech debt vs bugs: A bug is incorrect behavior. Tech debt is correct-but-suboptimal implementation. Both slow teams down, but they have different root causes and different remediation strategies.',
    ],
    relatedTerms: ['Definition of Done', 'Refactoring', 'Sprint Planning', 'Code Review'],
  },
  {
    id: 'agile-spike',
    domain: 'agile',
    title: 'Technical Spike',
    subtitle: 'Time-boxed research to answer a specific technical question',
    difficulty: 'beginner',
    tags: ['research', 'uncertainty', 'learning', 'sprint'],
    definition:
      'A spike is a time-boxed investigation into a technical or product question where the outcome is knowledge, not a deliverable feature. Spikes are used when a story cannot be estimated because a key uncertainty needs to be resolved first — "which database can handle our write throughput?" or "can we integrate with the legacy API?" A spike has a fixed time limit and a clear question to answer.',
    whyItMatters:
      'Forcing engineers to estimate work they don\'t understand produces garbage estimates. A spike converts unknown work into known work by investing a short, bounded period of exploration. The knowledge gained makes downstream estimation accurate and avoids mid-sprint surprises.',
    analogy:
      'Like a geological survey before breaking ground on a building — before committing to the full construction timeline, you spend two days drilling test holes to understand what\'s underground. The survey is a spike: time-boxed, question-focused, and its output is knowledge that enables accurate planning.',
    soundsSmartToSay:
      '"We can\'t estimate this story accurately until we understand whether the third-party API can support our event volume. Let\'s spike it for half a sprint and come back with a prototype and a recommendation."',
    commonConfusions: [
      'Spikes are not gold-plating: A spike has a fixed duration and a specific question. It ends when the time is up or the question is answered — not when the engineer is satisfied with the exploration. The output is a decision, not production code.',
      'Spike output: The deliverable from a spike is a recommendation and the disposal of the proof-of-concept code. Spike code is not production-quality and should not be merged as-is — it is learning material that informs a proper implementation story.',
    ],
    relatedTerms: ['Estimation', 'Sprint Planning', 'Backlog Refinement', 'Technical Debt'],
  },
  {
    id: 'agile-cycle-time',
    domain: 'agile',
    title: 'Cycle Time & Lead Time',
    subtitle: 'How long does it actually take to deliver work?',
    difficulty: 'intermediate',
    tags: ['flow', 'metrics', 'kanban', 'lead time'],
    definition:
      'Cycle time measures how long work takes from when active development starts to when it is delivered. Lead time measures from when work is requested (added to backlog) to when it is delivered. The gap between them is queue time — work waiting to be started. Reducing lead time without reducing cycle time means clearing the queue but not improving delivery speed.',
    whyItMatters:
      'Cycle time and lead time are concrete delivery metrics that expose process bottlenecks invisible in story points and velocity. A team with 2-day cycle time but 30-day lead time has a massive backlog problem — not a development speed problem. Fixing the wrong thing wastes the quarter.',
    analogy:
      'Like ordering food at a restaurant — lead time starts when you sit down (request). Cycle time starts when the kitchen begins cooking your order (active work). The wait between sitting down and the kitchen starting is queue time (backlog). A fast kitchen (short cycle time) does not help if orders sit for 30 minutes before being picked up.',
    soundsSmartToSay:
      '"Our cycle time is 2 days but our lead time is 3 weeks — that means features sit in the backlog for weeks before anyone starts them. The bottleneck is prioritization and intake, not engineering execution."',
    commonConfusions: [
      'Cycle time vs velocity: Velocity measures how many points a team delivers per sprint. Cycle time measures how long individual items take to flow through the system. You can have high velocity and long cycle time (completing many items slowly) or low velocity and short cycle time (completing fewer items quickly). Both matter.',
      'Lead time vs time-to-market: Lead time typically measures within the development process. Time-to-market includes everything from initial idea to customer availability — business decisions, market timing, legal review, release coordination.',
    ],
    relatedTerms: ['Kanban', 'Flow Efficiency', 'WIP Limit', 'DORA Metrics'],
  },
  {
    id: 'agile-cumulative-flow',
    domain: 'agile',
    title: 'Cumulative Flow Diagram',
    subtitle: 'Spotting bottlenecks in your delivery pipeline',
    difficulty: 'intermediate',
    tags: ['flow', 'visualization', 'kanban', 'metrics'],
    definition:
      'A Cumulative Flow Diagram (CFD) is a stacked area chart showing the number of work items in each stage of the workflow over time (To Do, In Progress, Review, Done). The width of each band shows how many items are in that stage. A widening band indicates a bottleneck — work is piling up at that stage faster than it is flowing through.',
    whyItMatters:
      'Burndown charts show total remaining work but hide where the work is stuck. A CFD reveals the structural bottlenecks in your process — if the "In Review" band is consistently wider than all others, the review process is limiting throughput.',
    analogy:
      'Like a traffic report showing congestion zone by zone on a highway — you can see that traffic is moving freely on the on-ramp (To Do), jamming at a merge point (In Progress), clearing out after the bottleneck (Review), and reaching the destination (Done). The CFD tells you exactly where to apply the intervention.',
    soundsSmartToSay:
      '"The CFD shows the review column has been widening for three weeks — that\'s our systemic bottleneck. Adding a WIP limit to the review stage and rotating review responsibility will have more impact than adding another developer."',
    commonConfusions: [
      'CFD vs burndown: A burndown shows total remaining work declining over a sprint. A CFD shows the distribution of work across stages over extended time periods. CFDs are most useful for Kanban teams; burndowns for Scrum.',
      'Reading the CFD: The vertical distance between the top of the Done band and the top of the To Do band is your lead time. The average width of any band is the average time items spend in that stage (Little\'s Law).',
    ],
    relatedTerms: ['Kanban', 'Burndown Charts', 'Cycle Time', 'WIP Limit'],
  },
  {
    id: 'agile-backlog-refinement',
    domain: 'agile',
    title: 'Backlog Refinement',
    subtitle: 'Grooming stories so the team is always sprint-ready',
    difficulty: 'beginner',
    tags: ['backlog', 'grooming', 'refinement', 'scrum'],
    definition:
      'Backlog refinement (also called grooming) is the ongoing process of reviewing, estimating, and ordering backlog items so the team has a ready supply of well-defined, appropriately-sized stories for upcoming sprints. Stories are broken down, acceptance criteria clarified, dependencies identified, and estimates added — ideally 1-2 sprints ahead of when they will be worked.',
    whyItMatters:
      'Poorly refined backlogs cause sprint planning to run long, estimates to be wildly off, and stories to be blocked mid-sprint when definition gaps appear. A well-groomed backlog means sprint planning is fast, commitments are reliable, and engineers can start work immediately without discovery delays.',
    analogy:
      'Like a restaurant\'s mise en place — chefs prep and organize all ingredients before service begins so that cooking (development) can happen smoothly and at pace when orders (sprint work) arrive, without stopping to prep mid-service.',
    soundsSmartToSay:
      '"Our sprint planning runs two hours every time because stories aren\'t refined — we need to invest an hour in refinement mid-sprint so planning is a 30-minute confirmation, not a discovery session."',
    commonConfusions: [
      'Refinement is not a ceremony owned only by the product owner: The whole team should participate — engineers add technical breakdown, designers add UX detail, QA adds acceptance criteria. Single-owner refinement produces stories that engineering can\'t implement without further discovery.',
      'Refinement vs planning: Refinement happens continuously mid-sprint (asynchronously or in dedicated sessions). Planning is the formal sprint kickoff where the team commits to a sprint goal. Planning consumes the output of refinement.',
    ],
    relatedTerms: ['Sprint Planning', 'User Stories', 'Definition of Done', 'Estimation'],
  },
  {
    id: 'agile-epic',
    domain: 'agile',
    title: 'Epics & Features',
    subtitle: 'Grouping related stories into meaningful deliverables',
    difficulty: 'beginner',
    tags: ['planning', 'backlog', 'epic', 'feature', 'hierarchy'],
    definition:
      'An epic is a large body of work that spans multiple sprints and is broken down into smaller stories for delivery. A feature is a customer-facing capability (often used in SAFe). The hierarchy typically goes: Initiative → Epic → Feature → Story → Task. Epics provide planning units for roadmaps; stories are delivery units for sprints.',
    whyItMatters:
      'Roadmaps communicate in epics and features — telling stakeholders "we\'re building checkout v2" not "we\'re writing 47 user stories." Epics group related work so teams can reason about progress toward a meaningful outcome without drowning in story-level detail.',
    analogy:
      'Like a book — a chapter (epic) contains many pages (stories), and a page contains many sentences (tasks). You plan a publication schedule at the chapter level, not the sentence level, while execution happens sentence by sentence.',
    soundsSmartToSay:
      '"We should only put epics on the public roadmap — when customers ask what\'s coming, they want to know about the capability (checkout redesign), not the 40 individual stories it comprises."',
    commonConfusions: [
      'Epic size varies widely: Some teams define epics as "anything bigger than one sprint." Others treat an epic as a major product initiative spanning a quarter. The definition matters less than consistency — pick a level and stick to it.',
      'Epics are not features are not stories: In SAFe, Features and Epics are distinct levels of a defined hierarchy. In many Scrum teams, "feature" and "epic" are used interchangeably. Know which system your organization uses.',
    ],
    relatedTerms: ['User Stories', 'Product Roadmap', 'Sprint Planning', 'Backlog Refinement'],
  },
  {
    id: 'agile-three-amigos',
    domain: 'agile',
    title: 'Three Amigos',
    subtitle: 'Aligning product, dev, and QA before writing a line of code',
    difficulty: 'beginner',
    tags: ['collaboration', 'requirements', 'BDD', 'three amigos'],
    definition:
      'The Three Amigos is a practice where a product owner (or BA), developer, and tester review a story together before it is worked — to clarify requirements, identify edge cases, and define acceptance criteria from three different perspectives. The meeting is typically short (15-30 minutes per story) and happens during backlog refinement.',
    whyItMatters:
      'Each role sees different risks: the product owner sees business value, the developer sees technical constraints and implementation options, and the tester sees edge cases and failure modes. Without all three perspectives, teams write code that misses requirements, overlooks edge cases, or is untestable. The Three Amigos surfaces these misalignments before any code is written.',
    analogy:
      'Like a pre-construction meeting between the architect (product owner), builder (developer), and building inspector (tester) — reviewing blueprints together before breaking ground to ensure the building will meet code, be constructable, and satisfy the owner\'s intent. Discovering a flaw in blueprints is cheap; discovering it in a finished wall is expensive.',
    soundsSmartToSay:
      '"This story has three open questions about edge cases — let\'s do a Three Amigos session with QA and the PO before we start development, otherwise we\'ll discover these mid-sprint and blow the estimate."',
    commonConfusions: [
      'Three Amigos is not a meeting just for big stories: It is most valuable for stories where there is any ambiguity about requirements, edge cases, or testability. Short, simple stories with clear acceptance criteria don\'t need a full session — a quick async review may suffice.',
      'The three roles are perspectives, not job titles: The "amigo" representing testing might be a developer who writes automated tests on a team without dedicated QA. The practice is about perspectives, not headcount.',
    ],
    relatedTerms: ['Backlog Refinement', 'User Stories', 'Acceptance Criteria', 'Definition of Done'],
  },
  {
    id: 'agile-pi-planning',
    domain: 'agile',
    title: 'PI Planning',
    subtitle: 'Quarterly face-to-face planning for scaled agile',
    difficulty: 'advanced',
    tags: ['SAFe', 'planning', 'PI', 'ART', 'enterprise'],
    definition:
      'PI Planning (Program Increment Planning) is a SAFe ceremony where all teams in an Agile Release Train (ART) meet face-to-face (or virtually) for 2 days every 8-12 weeks to align on a shared vision, identify cross-team dependencies, set team PI objectives, and commit to a program board. The output is a synchronized plan for the next Program Increment across all teams.',
    whyItMatters:
      'At scale, teams unknowingly build features that depend on work other teams haven\'t planned. PI Planning surfaces these dependencies on a physical program board before the increment starts, turning potential mid-increment blockers into planned work items. It is often described as the highest-ROI practice in SAFe.',
    analogy:
      'Like pre-production planning for a film with multiple crews — all directors, cinematographers, and production designers meet before filming begins to align on the script (vision), identify shared locations and props (dependencies), and create a master shooting schedule (program board). Discovering conflicts on the day of filming is far more expensive than catching them in pre-production.',
    soundsSmartToSay:
      '"PI Planning is worth the logistics investment — it\'s the only time all our teams see the full dependency map at once. Teams that skip it spend the rest of the PI resolving blockers they could have caught in 2 days of planning."',
    commonConfusions: [
      'PI Planning vs sprint planning: Sprint planning is a single team\'s 2-hour ceremony for one sprint. PI Planning is all teams, 2 full days, covering 4-6 sprints across an entire ART. They operate at completely different scales.',
      'PI Planning without SAFe: Many organizations adopt PI Planning without implementing the rest of SAFe — quarterly cross-team alignment planning is valuable on its own. The ceremony is the most commonly borrowed SAFe practice outside full SAFe implementations.',
    ],
    relatedTerms: ['SAFe', 'Agile Release Train', 'Sprint Planning', 'Technical Program Management'],
  },
  {
    id: 'agile-hypothesis-driven',
    domain: 'agile',
    title: 'Hypothesis-Driven Development',
    subtitle: 'Treating features as experiments with measurable outcomes',
    difficulty: 'intermediate',
    tags: ['experimentation', 'product', 'lean', 'validation'],
    definition:
      'Hypothesis-driven development frames every feature as a testable hypothesis: "We believe [feature] will cause [outcome] because [assumption]. We will know we are right when we observe [metric]." Teams build the minimum to test the hypothesis, measure the outcome, and decide to persevere, pivot, or abandon — rather than assuming the feature is valuable because stakeholders requested it.',
    whyItMatters:
      'Most features don\'t deliver the business outcomes they were designed to produce. Hypothesis-driven development makes this explicit before and after — creating a culture where teams learn from failures quickly and double down on what works, rather than shipping feature after feature into a void.',
    analogy:
      'Like clinical drug trials — you don\'t approve a drug because the doctor believes it works. You define the hypothesis ("this drug reduces blood pressure by X"), run a controlled trial, measure the result, and make decisions based on evidence. Hypothesis-driven development applies the same scientific method to product features.',
    soundsSmartToSay:
      '"Before we build this, let\'s write the hypothesis — what metric will move if we\'re right, by how much, and in what timeframe? If we can\'t define that, we\'re not ready to build yet."',
    commonConfusions: [
      'Hypothesis-driven development vs A/B testing: A/B testing is a tool that tests which variation of something performs better. Hypothesis-driven development is a broader approach to framing all product work as experiments — A/B testing is one validation method within it.',
      'A hypothesis is not a requirement: A requirement says "build this." A hypothesis says "we believe building this will cause X." The distinction forces teams to think about outcomes, not just outputs, and creates accountability for whether the feature delivered value.',
    ],
    relatedTerms: ['MVP', 'Lean Startup', 'OKRs', 'Continuous Discovery'],
  },
  {
    id: 'agile-flow-efficiency',
    domain: 'agile',
    title: 'Flow Efficiency',
    subtitle: 'The ratio of active work time to total elapsed time',
    difficulty: 'advanced',
    tags: ['lean', 'flow', 'waste', 'efficiency'],
    definition:
      'Flow efficiency is the percentage of total lead time that a work item is being actively worked on (vs waiting). Formula: active time ÷ (active time + wait time) × 100. Most organizations achieve 5-15% flow efficiency — a feature that takes 30 days lead time might involve only 2-3 days of actual work. High-performing teams target 40%+.',
    whyItMatters:
      'Flow efficiency exposes the uncomfortable truth that most delay in software delivery is waiting, not working. Adding more developers to a system with 10% flow efficiency accomplishes little — the bottleneck is handoffs, approvals, and queue time, not development speed. You cannot hire your way out of a flow problem.',
    analogy:
      'Like measuring the efficiency of a car sitting at traffic lights vs actually driving — if you drive for 6 minutes and sit at lights for 54 minutes in a 60-minute commute, adding a faster car (more engineers) saves seconds. Removing traffic lights (reducing wait time) saves 45 minutes.',
    soundsSmartToSay:
      '"Our lead time is 4 weeks but our average cycle time is 2 days — that\'s 5% flow efficiency. Before we discuss hiring, let\'s map where the 3.5 weeks of wait time is going. It\'s almost certainly approvals and queues."',
    commonConfusions: [
      'Flow efficiency vs utilization: High developer utilization (everyone busy) and high flow efficiency (work flows quickly) are often in tension. Queuing theory shows that utilization above 80% causes exponentially increasing wait times. Teams optimized for individual busyness often have terrible flow efficiency.',
      'Flow efficiency vs velocity: Velocity measures how many points a team delivers per sprint. Flow efficiency measures how quickly individual items move through the system. A team can have high velocity and poor flow efficiency (doing many things slowly).',
    ],
    relatedTerms: ['Cycle Time', 'Value Stream Mapping', 'WIP Limit', 'Lean'],
  },
  {
    id: 'agile-product-roadmap',
    domain: 'agile',
    title: 'Product Roadmap',
    subtitle: 'Communicating where the product is going and why',
    difficulty: 'intermediate',
    tags: ['roadmap', 'strategy', 'planning', 'communication'],
    definition:
      'A product roadmap is a high-level visual plan that communicates the product direction, priorities, and goals over time. Modern agile roadmaps are outcome-oriented (organized by themes or goals, not by specific features or dates) and explicitly acknowledge uncertainty by using time horizons (now/next/later) rather than hard quarterly commitments.',
    whyItMatters:
      'Stakeholders need to understand the product direction to make investment, partnership, and hiring decisions. Engineering needs enough context to make good architectural choices. Without a roadmap, every stakeholder meeting becomes a feature negotiation with no shared context for why the team is working on what it is.',
    analogy:
      'Like a ship\'s navigation chart vs GPS turn-by-turn — a roadmap shows the destination and the general route, but not every tack in between. Conditions change; the route adapts. What doesn\'t change is the destination (product vision) and the current heading (near-term priorities).',
    soundsSmartToSay:
      '"Our roadmap should be organized by outcome, not feature — instead of \'build checkout v2,\' the theme should be \'reduce checkout abandonment by 30%.\' That framing invites better solutions and doesn\'t lock us into a specific implementation."',
    commonConfusions: [
      'Roadmap vs backlog: A backlog is a list of work items ready for development (near-term, detailed). A roadmap communicates strategic direction (longer-term, outcome-oriented). They operate at different levels of abstraction and serve different audiences.',
      'Date-based vs outcome-based roadmaps: Date-based roadmaps ("Feature X in Q3") create predictability pressure that forces scope cuts or schedule slips. Outcome-based roadmaps ("reduce checkout friction — now/next/later") communicate intent without false precision.',
    ],
    relatedTerms: ['OKRs', 'Prioritization Frameworks', 'Epics', 'North Star Metric'],
  },
];
