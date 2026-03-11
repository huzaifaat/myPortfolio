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
      "How I evolved from a junior developer to leading cross-functional teams, managing clients, and owning the full product lifecycle — and what I learned along the way.",
    date: "2026-03-12",
    readTime: "6 min read",
    tags: ["Leadership", "Career", "Engineering", "AI"],
    content: `
## The Beginning: A Developer Who Wanted More

Five years ago, I wrote my first production commit at Codegic. I was an Associate Software Engineer, heads-down in React components and Django views. I loved building things — but I quickly realized that great software isn't just about clean code. It's about understanding the problem deeply, communicating with people, and making decisions that compound.

That realization changed everything.

## Learning to See the Full Picture

At Codegic, I didn't just build features — I started asking *why* we were building them. I sat in on client calls. I questioned architectural decisions. I volunteered to lead sprint planning when no one else would. I built reusable component libraries not because someone told me to, but because I saw the inefficiency and acted on it.

By the time I moved to MTP, I wasn't just a developer anymore. I was the person teams looked to for direction.

## MTP: Where I Became a Builder of Products

At MTP, I worked across multiple products simultaneously — Django and FastAPI backends, React and Next.js frontends, AWS deployments. But what set this chapter apart was scope. I wasn't just assigned tasks; I owned entire product modules.

I dealt directly with clients. I scoped requirements. I planned sprints. I architected systems. I mentored junior developers. And yes, I still wrote a lot of code — because a leader who can't execute is just a manager.

**Key lesson:** The best technical leaders don't stop coding. They code *and* lead.

## DigitLabs: Owning the Full Lifecycle

Today at DigitLabs, I lead the development of an AI-powered chatbot platform from the ground up. But my role goes far beyond writing Django models and Celery tasks.

**Here's what my typical week looks like:**
- **Monday:** Client strategy call — understanding new requirements, aligning on priorities
- **Tuesday-Wednesday:** Deep technical work — architecture, code reviews, building critical features
- **Thursday:** Team sync — unblocking developers, reviewing pull requests, planning the next sprint
- **Friday:** Deployment, monitoring, and maintenance — making sure everything runs smoothly in production

I also built AI voice agents — a dental receptionist and an appointment booking system — from concept to production. No product manager told me to do this. I identified the opportunity, planned the architecture, built the product, and deployed it.

## What I've Learned About Leadership

**1. Own the outcome, not just the task.**
Anyone can complete a Jira ticket. A leader ensures the ticket delivers actual business value.

**2. Communicate relentlessly.**
The gap between a good product and a failed project is almost always communication — with clients, with your team, with stakeholders.

**3. Scale yourself through others.**
Early in my career, I tried to do everything myself. Now I build systems and mentor people so the team moves faster than I ever could alone.

**4. Stay technical.**
I've seen too many "leaders" who stopped coding and lost touch with reality. I still write production code every day. It keeps me honest and earns my team's respect.

**5. Think like a CEO.**
Every decision I make — technical or otherwise — I ask: "Does this move the product forward? Does this serve the client? Does this scale?" That mindset changes everything.

## The Scale I Operate At

I'm equally comfortable working:
- **Solo** — end-to-end on a personal project or prototype
- **Team level** — leading 3-5 developers on a product sprint
- **Multi-team** — coordinating across frontend, backend, AI, and DevOps teams to ship complex products

This isn't about titles. It's about capacity. I can zoom in to debug a PostgreSQL query and zoom out to present a product roadmap to a client — in the same day.

## What's Next

I'm building towards a future where I lead my own product company. Every project I take on, every team I lead, every client I serve — it's all preparation. The technical foundation is solid. The leadership muscle is growing. The vision is clear.

If you're looking for someone who can take your idea from a napkin sketch to a production system — who can lead the team, manage the client, and still write exceptional code — let's talk.

**The best is yet to come.**
    `.trim(),
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
