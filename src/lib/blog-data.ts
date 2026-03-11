export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "from-code-to-leadership",
    title: "From Writing Code to Leading Teams: My Journey as a Technical Leader",
    description:
      "How I evolved from a junior developer to leading cross-functional teams, managing clients, and owning the full product lifecycle, and what I learned along the way.",
    date: "2026-03-12",
    readTime: "6 min read",
    tags: ["Leadership", "Career", "Engineering", "AI"],
    content: `
## The Beginning: A Developer Who Wanted More

Five years ago, I wrote my first production commit at Codegic. I was an Associate Software Engineer, heads-down in React components and Django views. I loved building things, but I quickly realized that great software isn't just about clean code. It's about understanding the problem deeply, communicating with people, and making decisions that compound.

That realization changed everything.

## Learning to See the Full Picture

At Codegic, I didn't just build features. I started asking *why* we were building them. I sat in on client calls. I questioned architectural decisions. I volunteered to lead sprint planning when no one else would. I built reusable component libraries not because someone told me to, but because I saw the inefficiency and acted on it.

By the time I moved to MTP, I wasn't just a developer anymore. I was the person teams looked to for direction.

## MTP: Where I Became a Builder of Products

At MTP, I worked across multiple products simultaneously: Django and FastAPI backends, React and Next.js frontends, AWS deployments. But what set this chapter apart was scope. I wasn't just assigned tasks; I owned entire product modules.

I dealt directly with clients. I scoped requirements. I planned sprints. I architected systems. I mentored junior developers. And yes, I still wrote a lot of code, because a leader who can't execute is just a manager.

**Key lesson:** The best technical leaders don't stop coding. They code *and* lead.

## DigitLabs: Owning the Full Lifecycle

Today at DigitLabs, I lead the development of an AI-powered chatbot platform from the ground up. But my role goes far beyond writing Django models and Celery tasks.

**Here's what my typical week looks like:**
- **Monday:** Client strategy call. Understanding new requirements, aligning on priorities.
- **Tuesday-Wednesday:** Deep technical work. Architecture, code reviews, building critical features.
- **Thursday:** Team sync. Unblocking developers, reviewing pull requests, planning the next sprint.
- **Friday:** Deployment, monitoring, and maintenance. Making sure everything runs smoothly in production.

I also built AI voice agents (a dental receptionist and an appointment booking system) from concept to production. No product manager told me to do this. I identified the opportunity, planned the architecture, built the product, and deployed it.

## What I've Learned About Leadership

**1. Own the outcome, not just the task.**
Anyone can complete a Jira ticket. A leader ensures the ticket delivers actual business value.

**2. Communicate relentlessly.**
The gap between a good product and a failed project is almost always communication. With clients, with your team, with stakeholders.

**3. Scale yourself through others.**
Early in my career, I tried to do everything myself. Now I build systems and mentor people so the team moves faster than I ever could alone.

**4. Stay technical.**
I've seen too many "leaders" who stopped coding and lost touch with reality. I still write production code every day. It keeps me honest and earns my team's respect.

**5. Think like a CEO.**
Every decision I make, technical or otherwise, I ask: "Does this move the product forward? Does this serve the client? Does this scale?" That mindset changes everything.

## The Scale I Operate At

I'm equally comfortable working:
- **Solo:** end-to-end on a personal project or prototype
- **Team level:** leading 3-5 developers on a product sprint
- **Multi-team:** coordinating across frontend, backend, AI, and DevOps teams to ship complex products

This isn't about titles. It's about capacity. I can zoom in to debug a PostgreSQL query and zoom out to present a product roadmap to a client, all in the same day.

## What's Next

I'm building towards a future where I lead my own product company. Every project I take on, every team I lead, every client I serve, it's all preparation. The technical foundation is solid. The leadership muscle is growing. The vision is clear.

If you're looking for someone who can take your idea from a napkin sketch to a production system, who can lead the team, manage the client, and still write exceptional code, let's talk.

**The best is yet to come.**
    `.trim(),
  },
  {
    slug: "building-ai-voice-agents-from-scratch",
    title: "How I Built AI Voice Agents That Handle Real Phone Calls",
    description:
      "A practical walkthrough of building AI voice agents for dental receptionist and appointment booking use cases, covering speech-to-text, TTS, LLM orchestration, and production deployment.",
    date: "2026-02-18",
    readTime: "8 min read",
    tags: ["AI", "Voice Agents", "Python", "Engineering"],
    content: `
## Why Voice Agents, and Why Dentists?

I got into voice AI because of a problem I kept seeing at DigitLabs. Clients would ask for chatbots, and those worked fine for text. But some businesses, especially medical and dental offices, still run on phone calls. Their front desk staff are overwhelmed. Patients call to book appointments, confirm times, ask about insurance, and nobody picks up half the time.

So I decided to build an AI voice agent that could actually handle real phone calls. Not a toy demo. A production system that answers the phone, understands what the caller needs, and takes action.

## Picking the Right Architecture

The first big decision was the overall pipeline. A voice agent is really four systems stitched together:

- **Speech-to-Text (STT):** Converting the caller's audio into text
- **LLM Processing:** Understanding intent and generating a response
- **Text-to-Speech (TTS):** Converting the response back to natural-sounding audio
- **Telephony Integration:** Actually connecting to phone lines

I evaluated a bunch of STT options. Google Cloud Speech-to-Text was solid but expensive at scale. Whisper (OpenAI's open source model) gave great accuracy, but running it in real time required GPU infrastructure I didn't want to manage early on. I ended up going with Deepgram for STT because their streaming API had consistently low latency, around 300ms, which matters a lot when someone is waiting on the phone.

For TTS, I tested ElevenLabs, Amazon Polly, and Google Cloud TTS. ElevenLabs sounded the most natural by far, but their latency was inconsistent. I went with a hybrid approach: ElevenLabs for the primary voice with Google Cloud TTS as a fallback when latency spiked above 500ms.

The LLM layer uses GPT-4 with carefully tuned system prompts. I tried smaller models first to save cost, but the difference in handling ambiguous requests was night and day.

## The Hard Parts Nobody Warns You About

Building a demo that handles a scripted conversation is easy. Building something that survives real callers is a completely different game.

**Background noise.** People call from their cars, from restaurants, with kids screaming. My first version would hallucinate words from background noise and go off the rails. I added a confidence threshold on the STT output. If the transcription confidence drops below 0.7, the agent asks the caller to repeat instead of guessing.

**Interruptions.** Real people don't wait for the AI to finish talking before they start speaking. They interrupt constantly. I had to implement barge-in detection, which means the agent stops its current TTS output when it detects the caller is speaking. This sounds simple but the timing is tricky. Too sensitive and the agent cuts itself off from its own audio feedback. Too slow and the caller feels ignored.

**Silence handling.** Sometimes callers go quiet. Maybe they're looking at their calendar, maybe they got distracted. I built a tiered silence handler: after 5 seconds, a gentle prompt ("Take your time, I'm still here"). After 15 seconds, a check-in ("Are you still on the line?"). After 30 seconds, a graceful goodbye.

**Call transfers.** When the agent can't handle something, it needs to transfer to a human. This required SIP integration with the office's existing phone system, and every office had a slightly different setup. I ended up building an adapter layer that could handle Twilio, Vonage, and direct SIP connections.

## Calendar Integration Was Its Own Beast

The dental receptionist agent needs to book actual appointments. That means talking to calendar systems in real time during the call.

Most dental offices use practice management software like Dentrix, Eaglesoft, or Open Dental. None of them have modern APIs. Some have ODBC connections, some have proprietary sync tools. I built a middleware service that normalizes calendar operations across different backends into a simple REST API: check availability, create appointment, cancel appointment.

The tricky part is handling conflicts. While the AI is talking to a patient and checking Tuesday at 2pm, the front desk might book that same slot manually. I implemented optimistic locking with a 60-second hold on proposed slots. If the caller confirms within that window, the appointment goes through. If not, the slot releases back to the pool.

## Prompt Engineering for Phone Conversations

Writing prompts for voice is different from writing prompts for chat. Phone conversations are linear. You can't show a list of options on screen. You can't use formatting.

I learned a few things the hard way:

- **Keep responses short.** If the agent talks for more than 15 seconds without a pause, callers zone out. I set a hard limit of 3 sentences per turn.
- **Confirm everything.** "I have you down for Tuesday, February 18th at 2pm with Dr. Martinez. Does that sound right?" Repeating back details catches errors before they become problems.
- **Use natural fillers.** A tiny pause or an "Alright" before a response sounds way more human than an instant reply. I added randomized micro-delays between 200ms and 800ms.
- **Handle off-topic gracefully.** Callers ask random things. "What's your address?" "Do you take Delta Dental?" The agent needs to handle these without losing the conversation thread.

## Deployment and Monitoring

The system runs on AWS with the following setup:

- **ECS Fargate** for the main voice agent service
- **Redis** for session state and slot locking
- **PostgreSQL** for call logs and analytics
- **CloudWatch** for monitoring, with custom metrics for latency at each pipeline stage

I track a few key metrics obsessively:

- **End-to-end latency:** Time from when the caller stops speaking to when the agent starts responding. Target is under 1.5 seconds. We average about 1.1 seconds.
- **Task completion rate:** Percentage of calls where the caller accomplished what they called for. Currently sitting at 73%, up from 41% in the first month.
- **Handoff rate:** How often the agent has to transfer to a human. Started at 45%, now down to 22%.
- **Caller satisfaction:** Post-call survey scores. This one surprised me. Most callers don't even realize they're talking to an AI.

## What I'd Do Differently

If I started over, I'd invest in better testing infrastructure earlier. I spent too long manually testing by calling the agent myself. I eventually built a test harness that simulates calls with pre-recorded audio and validates the agent's responses. Should have done that from day one.

I'd also consider using a purpose-built voice AI framework like Vocode or LiveKit instead of wiring everything together myself. The custom approach gave me more control, but the maintenance overhead is real.

Voice AI is still early. The tools are getting better fast. But building something that works reliably in production, on real phone calls with real people, takes a lot of patient engineering work. There's no shortcut around it.
    `.trim(),
  },
  {
    slug: "scaling-django-for-production-ai-apps",
    title: "Scaling Django for AI-Powered Applications: Lessons from Production",
    description:
      "Real patterns for handling AI workloads in Django, from async task queues with Celery and Redis to database optimization, connection pooling, and monitoring strategies learned building the DigitLabs chatbot platform.",
    date: "2026-01-25",
    readTime: "7 min read",
    tags: ["Django", "Python", "Architecture", "AI"],
    content: `
## Django Gets a Bad Rap for AI Workloads

I keep seeing people online say Django can't handle AI applications. "It's synchronous." "It's too slow." "Just use FastAPI." I've heard it all. And honestly, some of those concerns are valid if you're using Django the same way you'd build a basic CRUD app. But with the right architecture, Django handles AI workloads just fine. I know because I've been running it in production at DigitLabs for our chatbot platform.

Here's what actually works.

## The Core Problem: LLM Calls Are Slow

The fundamental challenge with AI backends is that LLM API calls take anywhere from 2 to 30 seconds. If you make those calls inside a Django view, you're blocking a worker process the entire time. With a typical Gunicorn setup running 4-8 workers, it only takes a handful of concurrent users to exhaust your capacity.

The answer isn't to abandon Django. The answer is to never make LLM calls in your request/response cycle.

## Celery and Redis: The Backbone of Everything

Every AI operation in our system goes through Celery. When a user sends a message to our chatbot, here's what actually happens:

1. The Django view receives the message and validates it. Fast, under 50ms.
2. It creates a database record for the conversation turn with status "processing."
3. It dispatches a Celery task to handle the LLM call.
4. It returns a 202 Accepted response immediately.
5. The frontend polls (or listens via WebSocket) for the result.

The Celery task does the heavy lifting: calling the LLM API, processing the response, running any tool calls, and updating the database with the final answer.

This pattern keeps Django responsive. Our p95 response time on the API is under 100ms because the views never block on AI operations.

**A few Celery configuration lessons I learned the painful way:**

- Set \`task_time_limit\` and \`task_soft_time_limit\`. LLM APIs hang sometimes. Without timeouts, you'll have zombie workers consuming resources forever. I use 120 seconds soft limit and 180 seconds hard limit.
- Use separate queues for different task priorities. We have a "chat" queue for user-facing messages (high priority) and a "batch" queue for background analytics and embedding generation (low priority). Different worker pools, different concurrency settings.
- Set \`task_acks_late=True\` with \`worker_prefetch_multiplier=1\`. This ensures tasks aren't lost if a worker crashes mid-execution. The task stays in Redis until it's actually completed.

## Database Optimization: The Stuff That Actually Matters

Our platform stores conversation histories, analytics data, and embedding metadata. The database (PostgreSQL) became a bottleneck faster than I expected.

**Indexing conversations correctly.** Our most common query pattern is "get recent conversations for a specific chatbot." Simple, right? But without the right composite index, this query was doing sequential scans on a table with millions of rows. A composite index on \`(chatbot_id, created_at DESC)\` brought query time from 800ms to 3ms.

**Partitioning analytics tables.** We store event data for analytics dashboards. After about 6 months, the analytics table hit 50 million rows and even indexed queries were getting slow. I partitioned the table by month using PostgreSQL's native declarative partitioning. Queries that filter by date range now only scan the relevant partitions.

**Avoiding N+1 queries in the API.** Django's ORM makes it really easy to accidentally generate hundreds of queries. I use \`select_related\` and \`prefetch_related\` aggressively, and I added Django Debug Toolbar in development to catch N+1 issues before they reach production. We also use \`.only()\` and \`.defer()\` to avoid loading large text fields (like full conversation transcripts) when we only need metadata.

## Connection Pooling: pgBouncer Saved Us

Django creates a new database connection for every request by default. Under load, we were hitting PostgreSQL's connection limit constantly. The database would reject new connections, and the whole app would grind to a halt.

I added pgBouncer in transaction pooling mode between Django and PostgreSQL. Configuration that works well for us:

- \`default_pool_size = 25\`
- \`max_client_conn = 200\`
- \`pool_mode = transaction\`

This reduced our active database connections from 100+ (one per Gunicorn worker plus Celery workers) to about 25, while actually improving throughput. The connection overhead was a bigger deal than I realized.

One gotcha: Django's persistent connections (\`CONN_MAX_AGE\`) don't play well with pgBouncer in transaction mode. Set \`CONN_MAX_AGE = 0\` in your Django settings when using pgBouncer, or you'll get stale connection errors that are really annoying to debug.

## Caching Strategies That Work

We cache at multiple layers:

- **Redis for session and conversation state.** Active conversation contexts are stored in Redis with a 30-minute TTL. This avoids hitting the database on every message in an ongoing conversation.
- **Django's cache framework for API responses.** Analytics dashboard endpoints that aggregate data are cached for 5 minutes. The data doesn't change that fast, and regenerating those aggregations is expensive.
- **LLM response caching.** For identical prompts (which happen more often than you'd think, especially with system prompts), we cache the LLM response with a content-based hash key. This saves real money on API costs.

One thing I stopped doing: caching at the template level. Our frontend is a separate React app, so Django template caching is irrelevant. If you're still rendering templates, it's worth looking into, but for API-first Django apps, focus your caching on the data layer.

## Monitoring: What to Watch

I use a combination of Sentry, Prometheus, and Grafana. The metrics I actually look at daily:

- **Celery queue depth.** If the chat queue has more than 10 pending tasks, something is wrong. Either the LLM API is slow or we need more workers.
- **Task failure rate.** We aim for under 1% failure rate on chat tasks. Most failures are LLM API timeouts or rate limits.
- **Database query time (p95).** If this creeps above 50ms, I start investigating. Usually it's a missing index or a query that needs optimization.
- **Memory usage per worker.** Python processes can leak memory, especially when processing large conversation contexts. I set \`max_requests = 1000\` in Gunicorn to recycle workers periodically.

Sentry catches exceptions and gives us stack traces with context. Prometheus collects time-series metrics. Grafana dashboards make it visible. Nothing fancy, but it works.

## The "Just Use FastAPI" Crowd

Look, FastAPI is great. I use it for some microservices where async I/O is the core requirement. But Django gives you the admin panel, the ORM, the migration system, the authentication framework, the middleware ecosystem. For a full product with user management, analytics, and complex business logic, Django saves an enormous amount of time.

The key insight is that Django doesn't need to be async to handle AI workloads. It just needs to delegate the slow parts to background workers. That's what Celery is for. This pattern has been battle-tested for over a decade. It works.

Our platform handles thousands of conversations per day on a pretty modest setup: 4 Gunicorn workers, 8 Celery workers, one PostgreSQL instance, one Redis instance. Total infrastructure cost is under $200/month. Try telling me Django doesn't scale.
    `.trim(),
  },
  {
    slug: "why-technical-leaders-should-still-write-code",
    title: "Why I Still Write Code as a Technical Leader (And Why You Should Too)",
    description:
      "Thoughts on staying technical while leading teams, avoiding the meeting trap, earning respect through execution, and finding the right balance between coding and leading.",
    date: "2026-01-08",
    readTime: "5 min read",
    tags: ["Leadership", "Career", "Engineering"],
    content: `
## The Meeting Trap Is Real

There's a pattern I've watched play out multiple times. A strong developer gets promoted to tech lead or engineering manager. Suddenly their calendar fills up with standups, planning sessions, one-on-ones, stakeholder updates, roadmap reviews. Within six months, they haven't written a single line of production code. Within a year, they can't meaningfully review a pull request anymore.

They've become a meeting machine. And the worst part? They often don't realize it's happening until it's too late.

I made a conscious decision early on that this wasn't going to be me.

## Why Coding Keeps You Grounded

When I'm reviewing architecture decisions with my team, I need to know what's actually feasible. Not theoretically feasible. Actually feasible, given our codebase, our dependencies, our deployment setup, and our timeline.

The only way to have that knowledge is to stay in the code.

Last month, a developer on my team proposed migrating our authentication system to a new library. On paper, it looked like a two-day task. Because I'd been working in that part of the codebase recently, I knew about three edge cases that would turn it into a two-week task. We scoped it properly, planned for the edge cases, and it went smoothly. If I'd been disconnected from the code, I would have approved the two-day estimate, and we would have blown the sprint.

This happens constantly. Small technical details that completely change the calculus of a decision. You only catch them if you're close enough to the code to see them.

## Earning Respect Through Execution

I'll be blunt about this. Engineers don't respect leaders who can't do the work. They just don't. You can have all the right management frameworks, run perfect standups, and give great feedback in one-on-ones. But if your team knows you couldn't ship a feature yourself, there's a ceiling on their trust.

When I jump in to help debug a production issue at 11pm, that builds more credibility than any amount of process improvement. When I write a clean, well-tested implementation of a tricky feature, my code review feedback carries more weight because the team knows I'm not just theorizing.

This isn't about ego. It's about effectiveness. A technical leader who codes has more influence over technical outcomes. Period.

## Knowing When to Code and When to Lead

That said, I'm not arguing that tech leads should be the top contributor on every sprint. That would be a different kind of failure. If you're doing all the coding yourself, you're not growing your team.

Here's how I think about it:

- **Code when it's high-risk or high-ambiguity.** New integrations, unfamiliar APIs, security-sensitive features. These are where my experience adds the most value as an individual contributor.
- **Delegate when it's a growth opportunity.** If a junior developer could learn from building a feature, let them build it. Review carefully, provide guidance, but let them do the work.
- **Never code what someone else could code better.** I have team members who are stronger than me in specific areas. Frontend performance, for example. I'm not going to write that code just to prove I can. That's insecurity, not leadership.
- **Protect your coding time.** I block out Tuesday and Wednesday mornings for deep technical work. No meetings. No Slack. Just code. If I don't protect this time, it evaporates.

## My Actual Weekly Balance

Here's roughly how my time breaks down:

- **30% coding.** Writing production features, building prototypes, doing code reviews. This is non-negotiable.
- **25% technical planning.** Architecture discussions, sprint planning, backlog grooming. Making sure we're building the right things the right way.
- **20% people management.** One-on-ones, mentoring, hiring conversations, performance feedback.
- **15% client and stakeholder communication.** Requirement discussions, demos, status updates.
- **10% operational work.** Deployments, monitoring, incident response, documentation.

Some weeks skew heavily toward one category. During a production incident, coding might be 60% of my week. During planning for a new project, client communication might dominate. But over a month, these percentages hold pretty steady.

## The Skills That Transfer Both Ways

Here's something people miss: coding and leading aren't separate skills that compete for time. They reinforce each other.

Writing code makes me a better leader. I understand my team's challenges because I face the same challenges. I can estimate timelines accurately. I can spot when someone is stuck before they tell me, because I recognize the patterns.

Leading makes me a better coder. Managing multiple workstreams taught me to write simpler, more maintainable code because I know someone else will need to understand it. Client conversations gave me a stronger sense of what actually matters in a product, so I make better technical tradeoffs.

## The Uncomfortable Truth

Some organizations want their engineering managers to stop coding entirely. "Focus on the people," they say. "Your job is to remove blockers, not write code."

I understand that philosophy. I just disagree with it.

The best technical leaders I've worked with all share one trait: they can still build. They might not be writing code 8 hours a day, but they're dangerous enough to ship something real when it matters. They can prototype an idea in an afternoon. They can diagnose a production issue without waiting for someone else to look at it.

That's the kind of leader I want to be, and the kind I'd want to work for. Stay technical. Your team will thank you.
    `.trim(),
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
