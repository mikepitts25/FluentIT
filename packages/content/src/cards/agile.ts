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
];
