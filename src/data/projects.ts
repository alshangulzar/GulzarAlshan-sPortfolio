export type Block =
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      orientation?: "landscape" | "portrait";
    }
  | { type: "text"; heading?: string; paragraphs: string[] }
  | {
      type: "image-row";
      images: { src: string; alt: string; caption?: string }[];
      orientation?: "landscape" | "portrait";
    }
  | { type: "quote"; quote: string; attribution?: string }
  | { type: "list"; heading?: string; items: string[] };

export interface Project {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  hook?: string;
  year: string;
  role: string;
  team: string;
  timeline: string;
  client: string;
  coverImage: { src: string; alt: string };
  coverOrientation?: "landscape" | "portrait";
  coverVideo?: string;
  thumbImage: { src: string; alt: string };
  thumbTone: "light" | "dark";
  summary: string;
  featured: boolean;
  blocks: Block[];
  result: string[];
}

export function tagsFor(project: Project): string[] {
  return project.category.split(" · ").map((t) => t.trim());
}

export const projects: Project[] = [
  {
    slug: "osaz",
    title: "OSAZ",
    category: "Beauty · AI",
    tagline:
      "An AI-powered skincare app that reads a selfie and a short survey to recommend personalized skincare and a shade match — designed around diverse and melanin-rich skin tones from the first screen.",
    hook: "What if your skincare app actually understood your skin tone?",
    year: "2025",
    role: "UX/UI Design",
    team: "Design collaboration",
    timeline: "Prototype",
    client: "OSAZ",
    coverImage: {
      src: "/images/osaz/results.png",
      alt: "OSAZ results screen showing a predicted skin condition and shade match",
    },
    coverOrientation: "portrait",
    thumbImage: {
      src: "/images/osaz/thumb.png",
      alt: "OSAZ selfie and skin-analysis results screens shown on two phones against a pink background",
    },
    thumbTone: "light",
    summary:
      "A selfie-based AI skincare assessment, built to represent diverse skin tones well from onboarding onward.",
    featured: true,
    blocks: [
      {
        type: "text",
        heading: "The problem",
        paragraphs: [
          "Most skincare apps treat skin tone as an afterthought — a single generic recommendation flow that doesn't account for how differently skin conditions present, and how differently shade-matching works, across melanin-rich skin. OSAZ starts from the opposite assumption: skin analysis has to be personalized from the very first screen, not bolted on later.",
        ],
      },
      {
        type: "image",
        orientation: "portrait",
        src: "/images/osaz/selfie.png",
        alt: "OSAZ onboarding screen prompting the user to take a selfie in good lighting",
        caption: "Onboarding opens with a selfie — the input the AI analysis is built on.",
      },
      {
        type: "list",
        heading: "A survey built for nuance",
        items: [
          "Age, gender, and ethnicity — framed as inputs to personalization, not demographic boilerplate",
          "Skin type, pigmentation, acne, keloids, sensitivity, eczema, and elasticity",
          "Skin goals, current skincare routine, and ingredient preferences",
          "Pregnancy status and allergies, so recommendations stay safe as well as personalized",
        ],
      },
      {
        type: "image-row",
        orientation: "portrait",
        images: [
          {
            src: "/images/osaz/pigmentation.png",
            alt: "OSAZ survey screen asking about skin pigmentation level",
          },
          {
            src: "/images/osaz/ethnicity.png",
            alt: "OSAZ survey screen with an inclusive list of ethnicity options",
          },
        ],
      },
      {
        type: "text",
        heading: "Shade-matching the user can trust",
        paragraphs: [
          "Rather than silently assigning a shade, OSAZ shows its work: the AI proposes a match from the selfie, and the user can see exactly where it landed on the scale and adjust it themselves. Letting people correct the system — instead of asking them to simply accept it — is what turns an AI guess into something people are willing to trust.",
        ],
      },
      {
        type: "image",
        orientation: "portrait",
        src: "/images/osaz/shade-match.png",
        alt: "OSAZ shade-match screen with an adjustable skin tone scale and a selected shade",
        caption: "An adjustable AI shade match, not a locked-in guess.",
      },
      {
        type: "text",
        heading: "From survey to recommendation",
        paragraphs: [
          "The selfie and survey feed a results screen that states a likely skin condition in plain language, shows the matched shade, and moves straight into product recommendations — turning a long intake flow into a single, legible payoff.",
        ],
      },
      {
        type: "image",
        orientation: "portrait",
        src: "/images/osaz/results.png",
        alt: "OSAZ results screen showing a predicted skin condition, shade match, and product recommendations",
        caption: "The payoff screen: a plain-language skin read, shade match, and recommendations.",
      },
    ],
    result: [
      "OSAZ exists as a high-fidelity prototype, built around a conviction that AI skincare tools earn trust through transparency and inclusion, not just accuracy — an adjustable shade match, an ethnicity question asked directly, and skin-condition language a non-dermatologist can actually read.",
    ],
  },
  {
    slug: "curo",
    title: "Curo",
    category: "Healthcare · AI",
    tagline:
      "A patient-centered platform developed with Mayo Clinic and ASU to collect cancer-treatment toxicity data through simple, conversational AI surveys — making it easier to track symptoms, support timely care, and improve treatment decisions.",
    hook: "What if tracking the side effects of cancer treatment felt more like being heard — and less like filling out a form?",
    year: "2025",
    role: "UX/UI Design, Research",
    team: "Team of 3",
    timeline: "4 months",
    client: "Arizona State University × Mayo Clinic",
    coverImage: {
      src: "/images/curo/thumb.png",
      alt: "Curo app and clinician dashboard shown on a phone and laptop",
    },
    thumbImage: {
      src: "/images/curo/thumb.png",
      alt: "Curo app and clinician dashboard shown on a phone and laptop",
    },
    thumbTone: "dark",
    summary:
      "Conversational AI symptom tracking for cancer patients, built with Mayo Clinic oncologists.",
    featured: true,
    blocks: [
      {
        type: "text",
        heading: "Background and motivation",
        paragraphs: [
          "When we began the Curo project, we were driven by a simple but powerful question: how might we make it easier for cancer patients to share how they truly feel during treatment?",
          "Cancer treatment is incredibly taxing — not only physically, but emotionally. We learned that patients often struggle to communicate their side effects clearly and consistently, which makes it harder for clinicians to respond in time. In many cases, important symptoms go unreported. This gap inspired our mission.",
          "We conducted deep user research — interviews, observations, and testing — to understand the emotional and cognitive load patients face. Every insight shaped how Curo looks and feels, from tone of voice to button placement, with the goal of reducing friction and promoting emotional safety.",
        ],
      },
      {
        type: "list",
        heading: "What the literature told us about PRO-CTCAE reporting",
        items: [
          "124 different symptoms to track, measured in inconsistent ways (0–4 scales or yes/no) with no simple way to combine scores",
          "Weekly data collection produces an overwhelming amount of data, raising the risk patients stop responding",
          "Opportunity: simple bar charts and a 'picture book' style view of symptom frequency",
          "Opportunity: group changes into Got Better / Stayed the Same / Got Worse, with side-by-side treatment comparisons and timelines",
        ],
      },
      {
        type: "text",
        heading: "Observership at Mayo Clinic",
        paragraphs: [
          "For primary research, we had the opportunity to shadow Dr. Irbaz Riaz at Mayo Clinic. We met and spoke with patients directly, and came to understand the real-life problems with symptom reporting and toxicity tracking first-hand — not just from literature.",
        ],
      },
      {
        type: "image",
        src: "/images/curo/screen1.png",
        alt: "Statue outside the Mayo Clinic building visited during the observership",
        caption: "On site at Mayo Clinic during the observership with Dr. Irbaz Riaz.",
      },
      {
        type: "list",
        heading: "Objectives and use case",
        items: [
          "AI Conversational Symptom Tracker — an AI-powered chatbot that guides patients through a short, personalized conversation to report symptoms accurately",
          "Interval-based data collection — patients report at predefined intervals, adjustable to their treatment plan",
          "Reporting for healthcare providers — symptom severity and frequency over time, with cross-patient toxicity trends for a given drug compared to published data",
        ],
      },
      {
        type: "image",
        src: "/images/curo/frame6.png",
        alt: "Doctor's journey map showing mood, pain points, and opportunities across the symptom-review workflow",
        caption: "Doctor's journey map, built from the Mayo Clinic observership and interviews.",
      },
      {
        type: "image",
        src: "/images/curo/screen4.png",
        alt: "Persona slide for Dr. Daniel, an oncologist, listing pain points and needs",
        caption: "One of the clinician personas that shaped Curo's reporting view.",
      },
      {
        type: "text",
        heading: "From sketch to screen",
        paragraphs: [
          "Before any of it was pixels, it was paper. The home screen's task list, the bottom nav, and the chatbot — nicknamed Remi — all started as a hand-drawn sketch: what Remi says first, where voice versus typed versus image input lives, how a patient gets from 'I want to report my symptoms' to actually sending them.",
        ],
      },
      {
        type: "image",
        src: "/images/curo/aa.png",
        alt: "Hand-drawn paper wireframe sketch of the Curo home screen, chatbot flow, and symptom report screens",
        caption: "Early paper wireframes for the home screen, the Remi chatbot flow, and symptom reporting.",
      },
      {
        type: "text",
        heading: "Design decisions",
        paragraphs: [
          "Every decision traced back to the same goal: reduce the burden on patients while giving clinicians a clearer signal. The conversational tracker replaces a long generic survey with a short, adaptive conversation. The clinician-facing reports replace raw survey exports with filterable, scannable toxicity tables so a drug's side-effect pattern is visible at a glance.",
        ],
      },
      {
        type: "image-row",
        images: [
          {
            src: "/images/curo/group452.png",
            alt: "Curo mobile app treatment plan screen listing active medications",
          },
          {
            src: "/images/curo/group453.png",
            alt: "Curo mobile app screen in the symptom-reporting flow",
          },
        ],
      },
      {
        type: "image",
        src: "/images/curo/frame2.png",
        alt: "Clinician-facing Curo dashboard showing a filterable drug toxicity report table",
        caption: "The clinician reporting dashboard — filterable by drug class, dosage, and toxicity grade.",
      },
    ],
    result: [
      "Curo may have started as a student project, but the reaction it received made it feel like something much more.",
      "The highlight came when we presented Curo at ASU to a group of doctors from Mayo Clinic. Their response was more than we could've hoped for — they loved it. Their excitement and positive feedback validated the four months we'd spent interviewing, researching, designing, and prototyping as a team of three.",
    ],
  },
  {
    slug: "lighthouse",
    title: "Lighthouse",
    category: "Consumer · Mobile",
    tagline:
      "A reading app offering personalized book recommendations, a diverse library, and community book clubs — designed end-to-end to fix the friction that makes people quit other book apps.",
    year: "2023",
    role: "Solo — research, UX/UI design, prototyping",
    team: "Solo project",
    timeline: "2 months",
    client: "Personal / academic portfolio project",
    coverImage: {
      src: "/images/lighthouse/thumb.png",
      alt: "Three Lighthouse app screens showing onboarding, quotes, and podcast discovery",
    },
    thumbImage: {
      src: "/images/lighthouse/thumb.png",
      alt: "Three Lighthouse app screens showing onboarding, quotes, and podcast discovery",
    },
    thumbTone: "dark",
    summary:
      "A solo, research-led case study in personalized reading — from competitive teardown to a full purchase flow.",
    featured: true,
    blocks: [
      {
        type: "text",
        heading: "Background and motivation",
        paragraphs: [
          "I created Lighthouse to give people access to an extensive library with minimal friction. After surveying people about their reading habits, I found that a large number of people run into problems with existing book apps and stop using them soon after — the opportunity wasn't more books, it was fewer obstacles.",
        ],
      },
      {
        type: "list",
        heading: "Problems → solutions",
        items: [
          "Buying books is costly → one-click purchase from within the app",
          "Visual design of many book apps is unsatisfying → a soft, eye-comfortable interface",
          "Hard to discover new books → a dedicated quotes and highlights section",
          "No local book clubs → an in-app book club people can join and discuss in",
        ],
      },
      {
        type: "text",
        heading: "Competitive analysis",
        paragraphs: [
          "I researched competitors in the App Store and catalogued what worked and what didn't. Strong apps used one-click purchasing, clearly categorized catalogs, and short onboarding walkthroughs. Weaker ones buried genres under image-heavy catalogs, made subscriptions hard to cancel, or forced sign-up before any browsing.",
        ],
      },
      {
        type: "quote",
        quote:
          "I love the personalized recommendations; they always match my interests. Offline reading mode is a lifesaver for my daily commute.",
        attribution: "From user review research",
      },
      {
        type: "quote",
        quote:
          "The app frequently loses my place in the book, which is really frustrating.",
        attribution: "From user review research",
      },
      {
        type: "text",
        heading: "Research, flows, and wireframes",
        paragraphs: [
          "The process moved from a user survey and persona through an empathy map, journey map, and user flow, into a style guide, wireframes, and a working prototype covering onboarding, the home feed, the purchase flow, and a personal bookshelf.",
        ],
      },
      {
        type: "image",
        src: "/images/lighthouse/group280.png",
        alt: "Full user flow diagram for the Lighthouse app covering login, registration, home, search, bookshelf, book club, and profile",
        caption: "End-to-end user flow, from onboarding through every core tab.",
      },
      {
        type: "image",
        src: "/images/lighthouse/group423.png",
        alt: "Three high-fidelity Lighthouse screens for the purchase flow: address, order summary, and payment",
        caption: "The purchase flow — address, order summary, and payment.",
      },
    ],
    result: [
      "Lighthouse was a two-month project and my entry piece for university applications. It played a pivotal role in shaping my academic path, contributing to acceptances from universities across the United States, the United Kingdom, and Germany.",
      "More than the visuals, it was a demonstration of owning a full design-thinking process solo — research, synthesis, design, and a working prototype — on a real-world problem.",
    ],
  },
  {
    slug: "asu-waterbot",
    title: "ASU Waterbot",
    category: "AI · Civic / Sustainability",
    tagline:
      "A usability study and redesign proposal for Arizona State University's AI water-conservation chatbot — built to help Arizona residents navigate drought and water scarcity with information they can trust.",
    year: "2024",
    role: "UX Research, Redesign Proposal",
    team: "Research team",
    timeline: "Academic research project",
    client: "Arizona State University — Julie Ann Wrigley Global Futures Laboratory",
    coverImage: {
      src: "/images/waterbot/thumb.png",
      alt: "Arizona Water Chatbot interface shown on a laptop",
    },
    thumbImage: {
      src: "/images/waterbot/thumb.png",
      alt: "Arizona Water Chatbot interface shown on a laptop",
    },
    thumbTone: "light",
    summary:
      "Usability testing and a redesign proposal for ASU's AI chatbot on Arizona water conservation.",
    featured: true,
    blocks: [
      {
        type: "text",
        heading: "Background and motivation",
        paragraphs: [
          "The Colorado River system supplies 36% of Arizona's total water use and has experienced extensive drought for nineteen years, leaving reservoir levels at Lake Mead historically low. Arizona has responded with strategies like underground water storage and reclaimed water — and Waterbot exists to help residents access water-related information, track usage, and navigate the challenges of scarcity.",
        ],
      },
      {
        type: "text",
        heading: "Research",
        paragraphs: [
          "We engaged a diverse group of native Arizona residents — students, long-term residents of seven-plus years, business owners, and government officials across Phoenix, Prescott, Northern Arizona, and Tucson — through interviews and usability tests on questions people actually wanted answered, from clean water initiatives to drinking water safety to how Arizona's situation compares to California's.",
        ],
      },
      {
        type: "quote",
        quote:
          "It's cool how the chatbot collects all the data and puts it in a brief answer.",
        attribution: "Usability test participant",
      },
      {
        type: "list",
        heading: "What usability testing surfaced",
        items: [
          "Accuracy — no way to verify Waterbot's answers → add a 'Resources' link after each response",
          "New-chat navigation — the 'New Chat' button was hard to find mid-conversation → move it closer to the prompt area",
          "Resource links opened in the same tab, losing the conversation → open them in a new tab instead",
          "Response-length preference varied by user → add concise / balanced / detailed filter tabs and a 'know more' button",
          "Trust and transparency — some users avoided links entirely → make links opt-in rather than automatic",
        ],
      },
      {
        type: "image",
        src: "/images/waterbot/screen3.png",
        alt: "Annotated screenshot highlighting a resource link in the Waterbot interface that navigates away from the chat",
        caption: "Annotating the resource-link issue surfaced in usability testing.",
      },
      {
        type: "text",
        heading: "Redesign proposal",
        paragraphs: [
          "Based on severity, we recommended addressing the New Chat placement first, then resource links, error messaging, and the broader interface. We built Figma wireframes for the redesign: the prompt area moved left to follow natural eye movement, the right panel collapses into a hamburger menu for smaller screens, 'New Chat' sits at the top of the search area, resource tags build trust, and an accordion panel holds a 'How It Works' section and FAQ — deliberately separating Waterbot's identity from the generic ChatGPT/Google mental model.",
        ],
      },
    ],
    result: [
      "The Waterbot redesign proposal was recently shared by my professor on LinkedIn, who highlighted its innovative, practical approach to a real civic tool used by Arizona residents.",
    ],
  },
  {
    slug: "asu-health-literacy",
    title: "ASU Health Literacy",
    category: "Healthcare · Public Health",
    tagline:
      "A website helping people understand health information through easy-to-read resources and tools — a project whose design direction helped secure the funding that moved it into development.",
    year: "2024",
    role: "UX/UI Design",
    team: "ASU Learning Enterprise team",
    timeline: "Ongoing — in development",
    client: "Arizona State University Learning Enterprise",
    coverImage: {
      src: "/images/health-literacy/thumb.png",
      alt: "ASU Health Literacy website shown on a laptop with clinicians in the background photo",
    },
    thumbImage: {
      src: "/images/health-literacy/thumb.png",
      alt: "ASU Health Literacy website shown on a laptop with clinicians in the background photo",
    },
    thumbTone: "dark",
    summary:
      "A health-literacy resource site whose design helped secure funding from ASU Learning Enterprise leadership.",
    featured: true,
    blocks: [
      {
        type: "text",
        heading: "Background and motivation",
        paragraphs: [
          "Health literacy is crucial for public health — it lets people understand health information, navigate the healthcare system, and make informed decisions. Despite medical advances, many people struggle with basic health information, leading to poorer outcomes and higher costs. Improving health literacy means better, more equitable healthcare access.",
        ],
      },
      {
        type: "text",
        heading: "Empathize",
        paragraphs: [
          "I took part in a health-related workshop with healthcare representatives, where we conducted empathy mapping together, focused on understanding the challenges and needs people have around health literacy.",
        ],
      },
      {
        type: "list",
        heading: "What people said, thought, and felt",
        items: [
          "Says: 'I don't understand medical terms. I need simpler instructions.'",
          "Thinks: 'Am I doing this right? What if I miss something important?'",
          "Feels: Frustrated, anxious, and overwhelmed by complex health information",
          "Wants: Clear explanations, bilingual support, and easy-to-use health management tools",
        ],
      },
      {
        type: "image",
        src: "/images/health-literacy/img6194.jpg",
        alt: "Photo from the ASU health literacy workshop with healthcare representatives",
      },
      {
        type: "text",
        heading: "Design",
        paragraphs: [
          "The first version was built from scratch — low-fidelity wireframes establishing structure, then high-fidelity prototypes refining visuals and interactivity. After collecting feedback, we made significant changes to improve usability and aesthetics.",
          "For the second version, I worked closely with the development team through several meetings to make sure the updated layout and features were technically feasible, then designed the mobile version so the experience stayed consistent while optimized for smaller screens.",
        ],
      },
      {
        type: "image-row",
        images: [
          {
            src: "/images/health-literacy/screen3.png",
            alt: "High-fidelity desktop design for the ASU Health Literacy website",
          },
          {
            src: "/images/health-literacy/screen4.png",
            alt: "High-fidelity mobile design for the ASU Health Literacy website",
          },
        ],
      },
    ],
    result: [
      "Design played a critical role in the project's future — it was directly tied to whether it would receive funding. After presenting the design direction through multiple stakeholder meetings, my manager and the President of Learning Enterprise responded very positively, which helped the project secure funding.",
      "Following approval, we ran a collaborative workshop with health representatives that brought valuable insight back into the design, and a journal publication related to the project was recently released. The project is currently in development.",
    ],
  },
  {
    slug: "learning-sparks-studio",
    title: "Learning Sparks Studio",
    category: "EdTech · Video",
    tagline:
      "Part of ASU, Learning Sparks Studio creates engaging video content that helps professors share their lessons with a global audience.",
    year: "2024",
    role: "UX/UI Design",
    team: "ASU Learning Enterprise, multidisciplinary team",
    timeline: "Ongoing — development & video production",
    client: "Arizona State University Learning Enterprise",
    coverImage: {
      src: "/images/learning-sparks/thumb.png",
      alt: "Learning Sparks Studio concept thumbnail",
    },
    thumbImage: {
      src: "/images/learning-sparks/thumb.png",
      alt: "Learning Sparks Studio concept thumbnail",
    },
    thumbTone: "dark",
    summary:
      "Bridging traditional ASU lectures and video-first learning, built with a multidisciplinary studio team.",
    featured: false,
    blocks: [
      {
        type: "text",
        heading: "Background",
        paragraphs: [
          "Learning Sparks Studio was created to bridge the gap between traditional education and modern learning experiences by harnessing the power of video — helping ASU professors share their expertise with a global audience.",
        ],
      },
      {
        type: "text",
        heading: "Research",
        paragraphs: [
          "Research included empathy mapping, a user journey map, and an interview with a professor persona about integrating video into teaching — covering excitement about the format, the time and technical challenges of producing it, and the features that would make a video platform worth adopting, like quizzes, polls, and engagement analytics.",
        ],
      },
      {
        type: "image",
        src: "/images/learning-sparks/empathy-map.png",
        alt: "Empathy map for Learning Sparks Studio",
      },
    ],
    result: [
      "Learning Sparks Studio deepened my skills in collaborative design, content strategy, and user research under real-world constraints, working alongside a multidisciplinary team at Learning Enterprise. The project is currently in its development and video production phase, with filming for the first set of educational videos underway.",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const secondaryProjects = projects.filter((p) => !p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
