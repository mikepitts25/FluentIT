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
      'Capacity planning (accounting for PTO, on-call rotations, meetings) is a critical input to sprint planning that teams often skip, leading to chronic overcommitment.',
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
      'Velocity stabilizes after 3-5 sprints. Early sprints with a new team or new domain will have unreliable velocity; do not use them for long-range forecasting.',
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
      'SAFe (Scaled Agile Framework) is a structured framework for applying agile principles at enterprise scale — coordinating dozens or hundreds of teams through constructs like Agile Release Trains (ARTs), Program Increments (PIs), and portfolio-level planning. It layers roles (Release Train Engineer, Solution Architect), ceremonies (PI Planning), and governance on top of team-level agile.',
    whyItMatters:
      'Individual scrum teams can self-organize, but when a product requires 10+ teams working on interconnected services, you need a coordination layer. SAFe provides a standardized approach that large organizations can adopt — though it is controversial because its heavy process can feel antithetical to agile values.',
    analogy:
      'Like the difference between a single-server deployment and a distributed microservices architecture — the core principles (serve requests, handle failures) are the same, but at scale you need service meshes, orchestration layers, and observability tooling that a single server never needed.',
    soundsSmartToSay:
      '"SAFe gives us coordination scaffolding, but we need to be careful not to let the framework become bureaucracy — PI Planning is only valuable if teams actually use it to resolve cross-team dependencies, not just present slide decks."',
    commonConfusions: [
      'SAFe vs agile: Many agile purists criticize SAFe as "agile in name only" because its heavy governance contradicts the Agile Manifesto\'s preference for individuals and interactions over processes and tools. The debate is real and ongoing.',
      'SAFe is not the only scaling framework — LeSS (Large-Scale Scrum), Spotify Model, and Nexus are alternatives. SAFe is the most commercially adopted but also the most prescriptive.',
      'PI Planning (quarterly face-to-face planning) is often cited as SAFe\'s single most valuable practice — many organizations adopt PI Planning without implementing the rest of SAFe.',
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
      'OKRs (Objectives and Key Results) are a goal-setting framework where an Objective states a qualitative goal ("Become the fastest checkout experience in e-commerce") and Key Results define 2-4 measurable outcomes that prove the objective is met ("Reduce checkout time from 45s to 15s"). OKRs cascade from company to team level and are typically set quarterly.',
    whyItMatters:
      'OKRs bridge the gap between strategy and execution. They prevent teams from shipping features that nobody measures ("we built it, but did it matter?") and give leadership visibility into whether teams are working on the highest-impact problems rather than just staying busy.',
    analogy:
      'Like SLOs in site reliability engineering — an SLO defines a measurable target for system health (99.9% uptime), and the error budget tells you if you are on track. OKRs do the same thing for product and business goals: the Objective is the SLO, and Key Results are the metrics you monitor.',
    soundsSmartToSay:
      '"Our key results should measure outcomes, not outputs — \'ship the redesign\' is an output; \'increase conversion rate by 15%\' is the outcome we actually care about."',
    commonConfusions: [
      'OKRs vs KPIs: KPIs are ongoing health metrics you always monitor (revenue, uptime, churn). OKRs are time-bound stretch goals for a specific quarter. A KPI might inform an OKR, but they serve different purposes.',
      'Key Results should be measurable outcomes, not task lists. "Launch feature X" is a task. "Reduce support tickets by 30% via feature X" is a key result. The distinction drives outcome-oriented thinking.',
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
      'Burndown vs burnup chart: A burndown shows remaining work trending toward zero. A burnup shows completed work trending toward the total. Burnup charts are better at showing scope changes because both the completed line and the total scope line are visible.',
      'A "perfect" burndown (actual line matches ideal line exactly) is suspicious — real work is lumpy. Stories finish in bursts, not in smooth daily increments. Consistency over multiple sprints matters more than one perfect chart.',
      'Burndown charts measure story points completed, not effort expended. A team can work hard all sprint and still have a flat burndown if stories are large and none are fully done yet — this is why smaller stories improve flow.',
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
      'Discovery is not just the designer\'s job. The "product trio" (product manager, designer, engineer) should all participate in user interviews so that technical constraints and opportunities surface in real time.',
      'Continuous discovery is not A/B testing. A/B tests validate which variation performs better in production. Discovery happens earlier — testing whether a problem is worth solving and whether a proposed solution resonates before any code is written.',
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
      'Like a pre-flight checklist in aviation — a pilot does not consider the aircraft "ready" just because the engines start. Fuel, instruments, control surfaces, and weather briefing all must be checked. The checklist prevents the most dangerous omissions from being left to memory.',
    soundsSmartToSay:
      '"We need to add security scanning to our Definition of Done — if a story can be marked complete without passing a vulnerability scan, we are accumulating security debt the same way we accumulate tech debt."',
    commonConfusions: [
      'Definition of Done vs acceptance criteria: Acceptance criteria are specific to one story ("user can reset password via email"). The DoD applies to all stories ("code reviewed, tests passing, deployed to staging"). Both must be met for a story to be complete.',
      'The DoD should evolve over time as the team matures. A new team might start with "code reviewed and tests passing." A mature team adds integration tests, performance benchmarks, accessibility checks, and documentation.',
      'A weak DoD creates an illusion of velocity — teams report more points "done" per sprint, but the undone work (testing, documentation, hardening) piles up as hidden debt that eventually must be paid.',
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
      'Adopting scrum at the team level is easy; changing how a 10,000-person organization plans, funds, and measures work is hard. Without transformation at the organizational level, agile teams are trapped in waterfall budgeting cycles, approval gates, and annual planning — making their sprints a performance of agility without the substance.',
    analogy:
      'Like migrating from a monolithic application to microservices — you cannot just break the code into services and declare victory. You also need to change the deployment pipeline, monitoring, team ownership model, and on-call structure. A "microservices" architecture with a monolithic release process is worse than the original monolith.',
    soundsSmartToSay:
      '"Our teams are agile but our funding model is still annual waterfall — we are asking teams to iterate in 2-week sprints inside 12-month budget commitments. Until we move to incremental funding, the transformation is cosmetic."',
    commonConfusions: [
      'Agile transformation is not "install Jira and run standups." It requires changes to organizational structure, budgeting, governance, performance reviews, and leadership behavior. Tool adoption without culture change is often called "cargo cult agile."',
      'Transformations fail most often due to middle management resistance — team-level practitioners embrace agile, executives sponsor it, but middle managers lose positional authority in flat, self-organizing structures and resist the change.',
      'There is no end state — agile transformation is itself iterative. Organizations that declare "we are now agile" and stop changing have missed the point. Continuous improvement applies to the transformation process itself.',
    ],
    relatedTerms: ['Change Management', 'Servant Leadership', 'Value Streams', 'Organizational Design'],
  },
  {
    id: 'agile-burndown',
    domain: 'agile',
    title: 'Burndown Charts',
    subtitle: 'Visualize sprint progress at a glance',
    difficulty: 'beginner',
    tags: ['metrics', 'visualization', 'tracking'],
    definition:
      'A burndown chart plots remaining work (y-axis) against time (x-axis) during a sprint. The ideal line slopes from total planned work to zero. The actual line shows real progress — if it is above the ideal line, the team is behind; below means ahead.',
    whyItMatters:
      'Burndown charts give the team and stakeholders a real-time visual of sprint health without interrupting developers. A flat line mid-sprint signals a blocked story before the sprint review reveals the surprise.',
    analogy:
      'Like a fuel gauge on a road trip. The ideal line assumes steady consumption. If the gauge drops faster than expected, you need gas (more capacity) sooner. If it drops slower, you are doing great. The chart makes the invisible visible.',
    soundsSmartToSay:
      '"The burndown has been flat for three days — let us identify the blockers in standup before we end up carrying stories into next sprint."',
    commonConfusions: [
      'Burndown vs burnup: A burndown shows remaining work decreasing to zero. A burnup shows completed work increasing toward the total. Burnups are better when scope changes mid-sprint because both lines move — the growing gap between total and completed work is visible.',
      'Burndown charts show quantity, not value: A sprint can burn down perfectly while delivering the least important stories first. Combine burndown with sprint goal tracking to ensure the team is delivering value, not just completing tasks.',
    ],
    relatedTerms: ['Velocity', 'Sprint Planning', 'Scrum', 'Sprint Backlog'],
  },
];
