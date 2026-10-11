export type Block =
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      orientation?: "landscape" | "portrait";
      fit?: "cover" | "contain";
    }
  | { type: "text"; eyebrow?: string; heading?: string; paragraphs: string[] }
  | {
      type: "image-row";
      images: { src: string; alt: string; caption?: string }[];
      orientation?: "landscape" | "portrait";
      fit?: "cover" | "contain";
    }
  | { type: "quote"; eyebrow?: string; quote: string; attribution?: string }
  | { type: "list"; eyebrow?: string; heading?: string; items: string[] }
  | {
      type: "steps";
      heading?: string;
      steps: {
        label: string;
        icon: "camera" | "clipboard" | "swatch" | "spark";
      }[];
    }
  | {
      type: "numbered-grid";
      heading?: string;
      description?: string;
      items: {
        image: { src: string; alt: string };
        title: string;
        caption: string;
      }[];
    }
  | {
      type: "funnel";
      eyebrow?: string;
      heading?: string;
      description?: string;
      steps: { label: string; value: number }[];
    }
  | {
      type: "quote-grid";
      eyebrow?: string;
      heading?: string;
      description?: string;
      quotes: string[];
    }
  | {
      type: "decision";
      number: string;
      heading: string;
      paragraphs: string[];
      result?: string;
      note?: string;
      image: { src: string; alt: string };
      imageSide: "left" | "right";
    };

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
  status?: string;
  liveUrl?: { href: string; label: string };
  stats?: { value: string; label: string }[];
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
      "OSAZ uses computer vision to read a selfie and match a tinted sunscreen shade. Most people never reached the recommendation — I audited the funnel, talked to users, and redesigned the survey and dashboard around trust.",
    hook: "Every fix that moved the numbers made the product more honest.",
    year: "2025",
    role: "UX/UI Designer (sole designer)",
    team: "CTO, 2 engineers, 3 marketing specialists",
    timeline: "8 weeks",
    client: "OSAZ",
    status: "Shipped to 100% of users",
    stats: [
      { value: "↑26%", label: "Survey completion" },
      { value: "↑22%", label: "Product conversions" },
      { value: "↑37%", label: "AI trust score" },
      { value: "↓18%", label: "Photo-step drop-off" },
    ],
    coverImage: {
      src: "/images/osaz/thumb.png",
      alt: "OSAZ skin-type survey screens, one with an option selected and one with its definition expanded, shown on two phones against a red gradient background",
    },
    coverOrientation: "portrait",
    thumbImage: {
      src: "/images/osaz/thumb.png",
      alt: "OSAZ skin-type survey screens, one with an option selected and one with its definition expanded, shown on two phones against a red gradient background",
    },
    thumbTone: "light",
    summary:
      "A funnel audit and four research-backed decisions turned a selfie-based AI skin analysis into a flow people actually finish.",
    featured: true,
    blocks: [
      {
        type: "text",
        eyebrow: "Background",
        paragraphs: [
          "OSAZ uses computer vision to analyze a selfie and recommend a tinted sunscreen shade. The original flow — a selfie, a short set of skin questions, then an AI-generated profile — ran on a third-party survey platform (Reliabl) bolted onto the OSAZ product. As the sole designer on the team, I was asked to find out why so few people were finishing it, and fix it.",
        ],
      },
      {
        type: "text",
        eyebrow: "Problem framing",
        heading: "Why so many people dropped off",
        paragraphs: [
          "I audited the flow end to end and pulled the funnel data myself. Fewer than half of users made it past the photo step, and only 2.3% completed a purchase. Something in the first few screens was losing almost everyone.",
        ],
      },
      {
        type: "funnel",
        heading: "What the audit found",
        description:
          "Share of users reaching each step, before the redesign. The biggest single loss was at the photo step.",
        steps: [
          { label: "Photo step passed", value: 43.2 },
          { label: "Survey completed", value: 18.7 },
          { label: "Reached dashboard", value: 10.4 },
          { label: "Clicked “Shop”", value: 4.9 },
          { label: "Completed purchase", value: 2.3 },
        ],
      },
      {
        type: "quote-grid",
        eyebrow: "User interviews",
        heading: "What users told me",
        description:
          "To understand why people dropped off, I talked to users directly. Their answers matched what I'd found in the audit.",
        quotes: [
          "When I opened the survey it immediately turned on my camera and I didn't understand why.",
          "The options looked like tags, so I didn't even realize they were the answers.",
          "The shade names were confusing. I didn't really know which one matched me.",
          "The results showed a condition I didn't even select.",
        ],
      },
      {
        type: "list",
        eyebrow: "Current journey",
        heading: "Four problems behind the numbers",
        items: [
          "No consent — the camera opened with no explanation, at the most sensitive step of the journey",
          "Answers that didn't look like answers — choices were styled as small decorative tags",
          "Vague shade names like “Cinnamon Kiss” gave people nothing to judge a match by",
          "Results that broke trust — the dashboard listed conditions people hadn't selected, buttons like Retake didn't work, and the shop link sent people to Instagram",
        ],
      },
      {
        type: "image",
        src: "/images/osaz/redesign/old-pain.png",
        alt: "Old OSAZ skin-tone and skin-type screens, powered by Reliabl, annotated with the pain points: unintuitive shade names and answer options that read as decorative tags",
        caption: "The original survey, powered by a third-party platform (Reliabl).",
        fit: "contain",
      },
      {
        type: "image",
        src: "/images/osaz/redesign/old-dash.png",
        alt: "Old OSAZ results dashboard annotated: AI-predicted conditions that didn't match the user's answers, and long, text-heavy ingredient recommendations",
        caption: "The original results dashboard.",
        fit: "contain",
      },
      {
        type: "list",
        eyebrow: "Goals",
        heading: "What the redesign had to do",
        items: [
          "Make every screen instantly understandable",
          "Earn trust in the AI by explaining the photo step and showing results that match the person's answers",
          "Make the shade match and the sunscreen recommendation obvious",
          "Remove steps that weren't needed",
        ],
      },
      {
        type: "text",
        eyebrow: "Final solution",
        heading: "Four changes to the survey",
        paragraphs: [],
      },
      {
        type: "decision",
        number: "01",
        heading: "Ask before opening the camera",
        paragraphs: [
          "Before the camera turns on, a short screen explains why the photo is needed, how to frame it, and asks for agreement to the terms. It also mentions that finishing the survey earns OSAZ reward points. People now choose to take the photo instead of being surprised by it.",
        ],
        result: "Photo-step drop-off fell 18%.",
        image: {
          src: "/images/osaz/redesign/consent.png",
          alt: "OSAZ photo-consent screen explaining why the selfie is needed before the camera opens",
        },
        imageSide: "right",
      },
      {
        type: "decision",
        number: "02",
        heading: "Replace tags with full-width answers",
        paragraphs: [
          "Each question gets its own screen, with large tappable options that read as answers. Selecting one highlights it and reveals a send button beside it, so people confirm before moving on. A progress bar shows how far along they are.",
        ],
        note: "Tapping an option changes its color to show it's selected. The send button appears beside the option to submit the answer.",
        image: {
          src: "/images/osaz/redesign/age.png",
          alt: "OSAZ age question with a full-width option selected and a send button revealed beside it",
        },
        imageSide: "left",
      },
      {
        type: "decision",
        number: "03",
        heading: "Show the shade, name it plainly",
        paragraphs: [
          "The selfie pre-selects a tone on a ten-step strip, with a plain label such as “Medium-Deep Brown” instead of a marketing name. The copy says it's a best guess, and people can adjust it now or later.",
        ],
        note: "Shade match is pre-selected from the selfie. Users can manually adjust it to their preference.",
        image: {
          src: "/images/osaz/shade-match.png",
          alt: "OSAZ shade-match screen with a ten-step skin-tone strip and Medium-Deep Brown selected",
        },
        imageSide: "right",
      },
      {
        type: "decision",
        number: "04",
        heading: "Explain skin terms in place",
        paragraphs: [
          "Terms like “combination skin” or “keloids” made people hesitate. An info icon on each option opens a short definition inside the option itself, so nobody has to leave the question to understand it.",
        ],
        note: "The touch target for info icons is limited to the icon, so tapping elsewhere still selects the option.",
        image: {
          src: "/images/osaz/redesign/skintype-expanded.png",
          alt: "OSAZ skin-type question with the definition of oily skin expanded in place",
        },
        imageSide: "left",
      },
      {
        type: "image-row",
        orientation: "portrait",
        images: [
          {
            src: "/images/osaz/redesign/revisit.png",
            alt: "OSAZ welcome-back screen for resuming an unfinished survey",
            caption: "Resume where you left off.",
          },
          {
            src: "/images/osaz/selfie.png",
            alt: "OSAZ guided selfie screen",
            caption: "Guided selfie.",
          },
          {
            src: "/images/osaz/redesign/acne.png",
            alt: "OSAZ acne question with an inline information note",
            caption: "Shared context, in place.",
          },
          {
            src: "/images/osaz/redesign/account.png",
            alt: "OSAZ create-account screen shown after the survey",
            caption: "Sign-up comes after the survey, not before.",
          },
        ],
      },
      {
        type: "text",
        eyebrow: "Solution integration",
        heading: "Results that match what people said",
        paragraphs: [
          "The redesigned dashboard leads with one clear skin-analysis card, with a note that the result is not medical advice. Below it sits the matched shade and a single recommended product. Long ingredient text became a collapsible “Do's and Don'ts” section, and purchase happens in the product with Subscribe & Save or a one-time option and a floating cart — instead of sending people to Instagram.",
        ],
      },
      {
        type: "image",
        orientation: "portrait",
        src: "/images/osaz/results.png",
        alt: "Redesigned OSAZ dashboard showing a single skin-analysis card naming a likely condition, with retake and share links",
        caption: "One skin-analysis card, with a disclaimer that it isn't medical advice.",
      },
      {
        type: "image-row",
        orientation: "portrait",
        images: [
          {
            src: "/images/osaz/redesign/pricing.png",
            alt: "OSAZ product card with shade selection and Subscribe & Save or one-time purchase",
            caption: "Shade, plan, price.",
          },
          {
            src: "/images/osaz/redesign/cart.png",
            alt: "OSAZ floating cart with two items and a checkout total",
            caption: "In-app cart.",
          },
          {
            src: "/images/osaz/redesign/retake.png",
            alt: "OSAZ retake-survey confirmation dialog",
            caption: "A working retake, with a nudge.",
          },
        ],
      },
      {
        type: "image",
        src: "/images/osaz/redesign/new-dash-desktop.png",
        alt: "Redesigned OSAZ dashboard on desktop, showing the skin-analysis card and recommended TINT sunscreen",
        caption: "The same dashboard, reflowed for desktop.",
        fit: "contain",
      },
      {
        type: "quote",
        eyebrow: "Outcome",
        quote: "AI trust score up 37%. Product conversions up 22%.",
      },
      {
        type: "text",
        paragraphs: [
          "The redesign was tested with existing users, then rolled out gradually so we could measure each change across the whole flow.",
        ],
      },
      {
        type: "text",
        eyebrow: "Design system",
        heading: "A small system so the team could ship fast",
        paragraphs: [
          "I set up brand and semantic color tokens, a type hierarchy, an 8-point spacing scale, and the core components: skin-analysis cards, ingredient guidance, buttons, and the cart. Every screen in the handoff file has notes for behavior a static frame can't show, which kept the two engineers moving without waiting on me.",
        ],
      },
      {
        type: "image",
        src: "/images/osaz/redesign/components.png",
        alt: "OSAZ component library: skin-analysis cards, ingredient guidance, button states, and the cart",
        fit: "contain",
      },
      {
        type: "list",
        eyebrow: "Reflection",
        heading: "What I learned",
        items: [
          "Trust was the real problem. Every fix that moved the numbers made the product more honest: asking before using the camera, naming shades plainly, and showing results that match the person's answers.",
          "Quick conversations with users pinpointed issues the funnel could only hint at.",
          "Working closely with the CTO and engineers from week one kept the redesign feasible inside eight weeks.",
        ],
      },
      {
        type: "list",
        heading: "Next steps",
        items: [
          "Improve the clarity and accuracy of the AI analysis itself",
          "Keep testing the mobile flow for consistency",
          "Deepen personalization to lift conversions further",
        ],
      },
    ],
    result: [
      "OSAZ's redesigned survey and dashboard shipped to 100% of users after an eight-week redesign: survey completion up 26%, product conversions up 22%, AI trust score up 37%, and photo-step drop-off down 18% — measured by testing with existing users, then rolling out gradually.",
      "A note on image quality: the pricing card and the retake-confirmation screen are still cropped from a zoomed screenshot capture, so they read softer than the rest of this page — I'll swap them for full-resolution exports once I have them. Everything else here is a full-resolution screen.",
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
    role: "Product Designer",
    team: "3 product designers and an engineer, with Mayo Clinic oncologists",
    timeline: "October – December 2024",
    client: "Arizona State University × Mayo Clinic",
    status: "Presented to Mayo Clinic oncologists",
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
        eyebrow: "Background",
        paragraphs: [
          "When we began the Curo project, we were driven by a simple but powerful question: how might we make it easier for cancer patients to share how they truly feel during treatment?",
          "Cancer treatment is incredibly taxing — not only physically, but emotionally. We learned that patients often struggle to communicate their side effects clearly and consistently, which makes it harder for clinicians to respond in time. In many cases, important symptoms go unreported. This gap inspired our mission.",
          "We conducted deep user research — interviews, observations, and testing — to understand the emotional and cognitive load patients face. Every insight shaped how Curo looks and feels, from tone of voice to button placement, with the goal of reducing friction and promoting emotional safety.",
        ],
      },
      {
        type: "text",
        eyebrow: "Problem framing",
        heading: "The problem",
        paragraphs: [
          "Patients undergoing cancer treatment are asked to complete long, jargon-heavy questionnaires, so symptom reporting is inconsistent, late, and often incomplete. Clinicians are left with noisy, unstructured data that makes it hard to link symptoms to drugs or spot escalation in time to intervene.",
        ],
      },
      {
        type: "list",
        eyebrow: "Literature review",
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
        eyebrow: "Field research",
        heading: "Observership at Mayo Clinic",
        paragraphs: [
          "For primary research, we had the opportunity to shadow Dr. Irbaz Riaz at Mayo Clinic. We met and spoke with patients directly, and came to understand the real-life problems with symptom reporting and toxicity tracking first-hand — not just from literature.",
          "Altogether, the research behind Curo drew on dozens of papers and clinical sources, interviews with 6 oncologists, and conversations with 11 patients.",
        ],
      },
      {
        type: "image-row",
        images: [
          {
            src: "/images/curo/screen1.png",
            alt: "Statue outside the Mayo Clinic building visited during the observership",
            caption: "On site at Mayo Clinic.",
          },
          {
            src: "/images/curo/screen2.png",
            alt: "Mayo Clinic ID badge held up in front of the Mayo Clinic Main Entrance sign",
            caption: "Credentialed for the observership.",
          },
          {
            src: "/images/curo/screen3.png",
            alt: "Standing outside the Mayo Clinic Cancer Center building in Phoenix",
            caption: "Outside the Mayo Clinic Cancer Center, Phoenix.",
          },
        ],
      },
      {
        type: "text",
        eyebrow: "Research findings",
        heading: "What patients and providers need",
        paragraphs: [
          "65% of adults find healthcare overwhelming and spend roughly 8 hours a month coordinating care — complex scheduling, unclear medical instructions, and the stress of navigating the system. Providers, meanwhile, are working against outdated tools, high administrative load, and burnout.",
          "On the technology side, the clearest opportunities were user-friendly scheduling, telemedicine (77% patient preference), AI-assisted scheduling, and multilingual support — all pointing toward the same conclusion: reduce friction wherever the patient or the clinician has to work around the tool instead of with it.",
        ],
      },
      {
        type: "image",
        src: "/images/curo/strategies.png",
        alt: "Diagram of five strategies to improve patient experience: enhancing communication, patient education and engagement, empathy and emotional support, care coordination and continuity, and physical environment and amenities",
        caption: "The five strategies we designed around to improve patient experience.",
        fit: "contain",
      },
      {
        type: "text",
        eyebrow: "User personas",
        heading: "Who we designed for",
        paragraphs: [
          "Two personas anchored every decision: an oncologist who needs an accurate, low-effort signal from his patients, and a patient who needs symptom reporting that doesn't feel like homework.",
        ],
      },
      {
        type: "image-row",
        fit: "contain",
        images: [
          {
            src: "/images/curo/screen4.png",
            alt: "Persona slide for Dr. Daniel, a 47-year-old oncologist, listing his pain points and needs",
            caption: "Dr. Daniel, oncologist.",
          },
          {
            src: "/images/curo/screen5.png",
            alt: "Persona slide for John Davidson, a 54-year-old retired teacher and patient, listing his pain points and needs",
            caption: "John Davidson, patient.",
          },
        ],
      },
      {
        type: "list",
        eyebrow: "Objectives",
        heading: "Objectives and use case",
        items: [
          "AI Conversational Symptom Tracker — an AI-powered chatbot that guides patients through a short, personalized conversation to report symptoms accurately",
          "Interval-based data collection — patients report at predefined intervals, adjustable to their treatment plan",
          "Reporting for healthcare providers — symptom severity and frequency over time, with cross-patient toxicity trends for a given drug compared to published data",
        ],
      },
      {
        type: "image",
        src: "/images/curo/group464.png",
        alt: "Sample chatbot conversation between Remi and a patient named Sarah checking in about fatigue during Docetaxel treatment",
        caption: "A sample conversation: Remi checking in with a patient on Docetaxel.",
        fit: "contain",
      },
      {
        type: "text",
        eyebrow: "Synthesis",
        heading: "Affinity mapping",
        paragraphs: [
          "We sorted everything from the research — interview notes, observations, feature ideas — into clusters for the patient app and the doctor's portal, so the feature list came from evidence rather than assumption.",
        ],
      },
      {
        type: "image",
        src: "/images/curo/group454.png",
        alt: "Affinity map clustering research findings into groups like user flow, doctor features, chat features, and patient monitoring",
        caption: "Grouping research findings into patient-app and doctor-portal feature clusters.",
        fit: "contain",
      },
      {
        type: "text",
        eyebrow: "Journey mapping",
        heading: "Patient's and doctor's journey",
        paragraphs: [
          "We mapped mood, pain points, and opportunities across the full reporting workflow for both personas — from receiving the survey through to treatment feedback.",
        ],
      },
      {
        type: "image-row",
        fit: "contain",
        images: [
          {
            src: "/images/curo/frame7.png",
            alt: "Emily's patient journey map showing mood, pain points, and opportunities from receiving the survey through seeking an alternative solution",
            caption: "Emily's journey, as a patient.",
          },
          {
            src: "/images/curo/frame6.png",
            alt: "Dr. Daniel's journey map showing mood, pain points, and opportunities from distributing the survey through exploring an alternative solution",
            caption: "Dr. Daniel's journey, as a clinician.",
          },
        ],
      },
      {
        type: "text",
        eyebrow: "Information architecture",
        heading: "Structuring two different apps",
        paragraphs: [
          "Curo is really two products sharing one data model: a doctor's portal built around reports and patients, and a patient's application built around the chatbot, treatment, and notes.",
        ],
      },
      {
        type: "image-row",
        fit: "contain",
        images: [
          {
            src: "/images/curo/group3.png",
            alt: "Information architecture diagram for the doctor's portal: dashboard, schedule, reports (drug and patient statistics), patients, inbox",
            caption: "Doctor's portal.",
          },
          {
            src: "/images/curo/group4.png",
            alt: "Information architecture diagram for the patient's application: home page (treatment, resources, notes, reports, chatbot), schedule, reports, user profile",
            caption: "Patient's application.",
          },
        ],
      },
      {
        type: "text",
        eyebrow: "From sketch to screen",
        paragraphs: [
          "Before any of it was pixels, it was paper. The home screen's task list, the bottom nav, and the chatbot — nicknamed Remi — all started as a hand-drawn sketch: what Remi says first, where voice versus typed versus image input lives, how a patient gets from 'I want to report my symptoms' to actually sending them.",
        ],
      },
      {
        type: "image-row",
        fit: "contain",
        images: [
          {
            src: "/images/curo/aa.png",
            alt: "Hand-drawn paper wireframe sketch of the Curo home screen, chatbot flow, and symptom report screens",
            caption: "Early sketches of the home screen, chatbot flow, and symptom reporting.",
          },
          {
            src: "/images/curo/img8597.png",
            alt: "Hand-drawn paper sketch working out the clinician chart-review layout and reports structure",
            caption: "Working out the clinician-facing chart review and reports structure.",
          },
        ],
      },
      {
        type: "image",
        src: "/images/curo/screen6.png",
        alt: "Low-fidelity wireframes showing appointments at a glance, a conversational survey, and a 3D body model for marking where pain is located",
        caption:
          "Low-fidelity wireframes: appointments at a glance, the conversational survey, and a 3D body map for marking pain location.",
        fit: "contain",
      },
      {
        type: "text",
        eyebrow: "Design decisions",
        paragraphs: [
          "Every decision traced back to the same goal: reduce the burden on patients while giving clinicians a clearer signal. The conversational tracker replaces a long generic survey with a short, adaptive conversation. The clinician-facing reports replace raw survey exports with filterable, scannable toxicity tables so a drug's side-effect pattern is visible at a glance.",
        ],
      },
      {
        type: "image-row",
        orientation: "portrait",
        images: [
          {
            src: "/images/curo/group452.png",
            alt: "Curo mobile app treatment plan screen listing active medications",
            caption: "Treatment plan.",
          },
          {
            src: "/images/curo/group453.png",
            alt: "Curo mobile app screen in the symptom-reporting flow",
            caption: "Symptom report.",
          },
          {
            src: "/images/curo/group456.png",
            alt: "Curo mobile app Notes screen showing a dated log of symptom entries, including one with an attached photo",
            caption: "Symptom notes.",
          },
        ],
      },
      {
        type: "text",
        eyebrow: "Reporting dashboard",
        heading: "A clearer signal for clinicians",
        paragraphs: [
          "Raw survey exports became filterable, scannable tables — by drug and by patient — that a clinician can drill into for the full toxicity picture.",
        ],
      },
      {
        type: "image-row",
        fit: "contain",
        images: [
          {
            src: "/images/curo/frame2.png",
            alt: "Clinician-facing Curo dashboard showing a filterable drug toxicity report table",
            caption: "Drug reports, filterable by class, route, and toxicity grade.",
          },
          {
            src: "/images/curo/frame3.png",
            alt: "Clinician-facing Curo dashboard showing a filterable patient toxicity report table",
            caption: "Patient reports, filterable by cancer stage and toxicity grade.",
          },
        ],
      },
      {
        type: "image",
        src: "/images/curo/screen7.png",
        alt: "Drug detail page for Docetaxel showing its mechanism of action, therapeutic uses, risk factors, and a body map of common toxicities",
        caption: "Drilling into a single drug — Docetaxel — for its mechanism, toxicities, and risk factors.",
        fit: "contain",
      },
      {
        type: "image",
        src: "/images/curo/screen8.png",
        alt: "A patient's symptom frequency and severity chart, compared across treatment cycles",
        caption: "A patient's symptom frequency and severity, compared across treatment cycles.",
        fit: "contain",
      },
    ],
    result: [
      "Curo may have started as a student project, but the reaction it received made it feel like something much more.",
      "The highlight came when we presented Curo at ASU to a group of doctors from Mayo Clinic. Their response was more than we could've hoped for — they loved it. Their excitement and positive feedback validated the three months we'd spent interviewing, researching, designing, and prototyping with Mayo Clinic oncologists.",
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
        eyebrow: "Background",
        paragraphs: [
          "I created Lighthouse to give people access to an extensive library with minimal friction. After surveying people about their reading habits, I found that a large number of people run into problems with existing book apps and stop using them soon after — the opportunity wasn't more books, it was fewer obstacles.",
        ],
      },
      {
        type: "list",
        eyebrow: "Scope",
        heading: "What I was responsible for",
        items: [
          "Market research and competitive analysis",
          "User survey, personas, and empathy and journey mapping",
          "Storyboarding and a full user-flow diagram",
          "Low-fi wireframes, alignment and grid, and a style guide",
          "Hi-fi design and a working prototype",
        ],
      },
      {
        type: "text",
        eyebrow: "Design process",
        heading: "Design thinking",
        paragraphs: [
          "I worked the project through five stages — Empathize, Define, Ideate, Design, Test — rather than jumping straight to screens.",
        ],
      },
      {
        type: "image",
        src: "/images/lighthouse/group264.png",
        alt: "Design thinking process diagram: Empathize, Define, Ideate, Design, Test",
        fit: "contain",
      },
      {
        type: "list",
        eyebrow: "Market research",
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
        eyebrow: "Competitive analysis",
        paragraphs: [
          "I researched competitors in the App Store and catalogued what worked and what didn't, so my own decisions traced back to a real gap rather than a guess.",
        ],
      },
      {
        type: "image",
        src: "/images/lighthouse/group152.png",
        alt: "Three screens from a competitor book app: a search grid of book covers, a genre list over photo backgrounds, and an audiobook detail page",
        caption: "Competitor 1 — search, genre browsing, and an audiobook detail page.",
        fit: "contain",
      },
      {
        type: "list",
        heading: "What it got right",
        items: [
          "You can save your time by purchasing books from the app just in one click.",
          "Wide variety of books divided into categories. Easy to find new books.",
          "A player that explains how to use the app.",
        ],
      },
      {
        type: "list",
        heading: "Where it fell short",
        items: [
          "Catalog is overloaded with images, hence it is arduous to read genres' names.",
          "Users struggle with cancelling their subscriptions.",
          "You cannot use the app unless you sign up.",
        ],
      },
      {
        type: "image",
        src: "/images/lighthouse/group265.png",
        alt: "Three screens from a second competitor book app: a bestseller list, a category grid, and an empty 'My books' state",
        caption: "Competitor 2 — bestsellers, category browsing, and an empty bookshelf state.",
        fit: "contain",
      },
      {
        type: "list",
        heading: "What it got right",
        items: [
          "Simple, pleasant design with big headings and moderate contrast.",
          "A clear hierarchy that's easy to navigate, with clear icons and interesting photography.",
        ],
      },
      {
        type: "list",
        heading: "Where it fell short",
        items: [
          "Book descriptions are overloaded, which significantly complicates understanding what the book is about.",
          "Some parts of the application are difficult to navigate.",
          "A lot of books load for a long time.",
        ],
      },
      {
        type: "quote-grid",
        eyebrow: "User research",
        heading: "Notable comments from users",
        quotes: [
          "In review section writes “request failed”. It is important for me to read reviews before.",
          "I took a free trial month and canceled the automatic subscription, but the program still calculated the money for the trial period.",
          "The interface is very confusing and not user-friendly.",
          "The notifications are inconsistent; sometimes I get them, and sometimes I don't.",
          "I love the personalized recommendations; they always match my interests.",
          "Offline reading mode is a lifesaver for my daily commute.",
          "The app frequently loses my place in the book, which is really frustrating.",
        ],
      },
      {
        type: "text",
        eyebrow: "Survey",
        heading: "What people told us",
        paragraphs: [
          "The research showed that book apps in the App Store have real, fixable problems — the opportunity was in making an existing category work better, not inventing a new one. To ground that, I surveyed people who use book apps directly.",
        ],
      },
      {
        type: "image",
        src: "/images/lighthouse/group267.png",
        alt: "User survey results: pie charts for age range, gender, willingness to buy paper books, and app usage frequency, plus tag clouds for favorite e-book qualities and most important app features",
        fit: "contain",
      },
      {
        type: "image",
        src: "/images/lighthouse/group272.png",
        alt: "Reading-habit statistics: 35% of the world read more due to coronavirus, 75% of US citizens read at least a book in the last year, 30% of Americans read e-books instead of paperback, people aged 15-44 read 10 minutes or less per day on average, and just 6 minutes of daily reading matters for children's development",
        caption: "Supporting research on reading habits, from outside sources.",
        fit: "contain",
      },
      {
        type: "text",
        eyebrow: "User persona",
        heading: "Who I designed for",
        paragraphs: [
          "Alice Collins is an ambitious writer working in advertising. Between work, yoga, and teaching English to foreign students, she wants to read more but rarely finds the time — she needs an app that makes reading and buying books convenient enough to fit into what's left of her day.",
        ],
      },
      {
        type: "quote",
        quote: "It's the possibility of having a dream come true that makes life interesting.",
        attribution: "Alice Collins, 48 — Austin, TX",
      },
      {
        type: "image",
        src: "/images/lighthouse/group277.png",
        alt: "Persona card for Alice Collins, 48, a writer in Austin, Texas, listing her goals and pains",
        fit: "contain",
      },
      {
        type: "text",
        eyebrow: "Empathy map",
        heading: "Getting inside Alice's head",
        paragraphs: [
          "Before mapping her journey, I mapped what Alice says and does, sees, thinks and feels, and hears — to separate what she says she wants from what's actually driving her.",
        ],
      },
      {
        type: "image",
        src: "/images/lighthouse/group205.png",
        alt: "Empathy map for Alice: says and does, sees, thinks and feels, and hears",
        fit: "contain",
      },
      {
        type: "text",
        eyebrow: "Journey mapping",
        heading: "Searching, reading, commenting",
        paragraphs: [
          "I mapped Alice's actions, thoughts, and the opportunities at each stage, from first deciding to find a book through to posting a review.",
        ],
      },
      {
        type: "image",
        src: "/images/lighthouse/group279.png",
        alt: "User journey map across five stages — searching for a book, reading/listening/buying, and commenting — with actions, thoughts, and opportunities at each step",
        fit: "contain",
      },
      {
        type: "text",
        eyebrow: "User flow",
        paragraphs: [
          "From there I mapped the full flow — login and registration branching into home, search, bookshelf, book club, and profile — so every screen I designed had a clear place in the whole app.",
        ],
      },
      {
        type: "image",
        src: "/images/lighthouse/group280.png",
        alt: "Full user flow diagram for the Lighthouse app covering login, registration, home, search, bookshelf, book club, and profile",
        caption: "End-to-end user flow, from onboarding through every core tab.",
        fit: "contain",
      },
      {
        type: "text",
        eyebrow: "Style guide",
        heading: "Type, color, and imagery",
        paragraphs: [
          "The primary typeface is Lufga, a clean, modern sans-serif — Bold for headlines and subheadings, Regular and Medium for body text. The palette leans on a soft, warm yellow for cheerfulness and friendliness, paired with a purple that reads as creative and a little luxurious. Imagery follows the same palette: warm, high-quality photography that reads as calm and inspired rather than staged.",
        ],
      },
      {
        type: "image",
        src: "/images/lighthouse/group281.png",
        alt: "Style guide showing the Lufga typeface at four weights, a five-color palette (plum, cream, yellow, charcoal, gray), and four mood photographs",
        fit: "contain",
      },
      {
        type: "text",
        eyebrow: "Wireframes",
        heading: "Low-fidelity first",
        paragraphs: [
          "Before any visual design, I laid out the home feed, an author page, category browsing, the bookshelf's quotes tab, and podcast discovery as plain gray-box wireframes — structure and hierarchy first, styling later.",
        ],
      },
      {
        type: "image",
        src: "/images/lighthouse/group418.png",
        alt: "Low-fidelity wireframes for the home feed, author page, categories, bookshelf quotes tab, and podcast discovery",
        fit: "contain",
      },
      {
        type: "text",
        eyebrow: "Hi-fi design",
        heading: "From wireframe to working prototype",
        paragraphs: [
          "The wireframes became a full prototype: onboarding and genre selection, a home feed with quotes and trending books, an author page, a book detail page, a bookshelf with a dedicated quotes tab, and a purchase flow.",
        ],
      },
      {
        type: "image",
        src: "/images/lighthouse/group257.png",
        alt: "Hi-fidelity onboarding flow: welcome screen, account creation, genre selection, book selection, and joining a book club",
        caption: "Onboarding: welcome, account creation, genre and book picks, and joining a book club.",
        fit: "contain",
      },
      {
        type: "image",
        src: "/images/lighthouse/group420.png",
        alt: "Hi-fidelity home feed, quotes list, author page, book detail page, and popular podcasts screen",
        caption: "The home feed, quotes, an author page, a book detail page, and podcasts.",
        fit: "contain",
      },
      {
        type: "image",
        src: "/images/lighthouse/group421.png",
        alt: "Hi-fidelity bookshelf screens: a book list grid, a quotes tab, and a single quote detail with tags",
        caption: "The bookshelf — book list, quotes, and a single quote's detail view.",
        fit: "contain",
      },
      {
        type: "image",
        src: "/images/lighthouse/group423.png",
        alt: "Three high-fidelity Lighthouse screens for the purchase flow: address, order summary, and payment",
        caption: "The purchase flow — address, order summary, and payment.",
        fit: "contain",
      },
      {
        type: "image",
        src: "/images/lighthouse/lighthouse.png",
        alt: "Illustration of a lighthouse rising from an open book, waves breaking against its pages",
        fit: "contain",
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
    liveUrl: { href: "https://azwaterbot.org/", label: "Visit the live Waterbot" },
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
        eyebrow: "Background",
        paragraphs: [
          "The Colorado River system supplies 36% of Arizona's total water use and has experienced extensive drought for nineteen years, leaving reservoir levels at Lake Mead historically low. Arizona has responded with strategies like underground water storage and reclaimed water — and Waterbot exists to help residents access water-related information, track usage, and navigate the challenges of scarcity.",
        ],
      },
      {
        type: "image",
        src: "/images/waterbot/screen4.png",
        alt: "Arizona Long-Term Drought map for June 2024, showing severe to exceptional drought conditions across much of the state",
        caption: "Arizona's long-term drought conditions, June 2024 — the problem Waterbot exists to help residents navigate.",
        fit: "contain",
      },
      {
        type: "text",
        eyebrow: "Research",
        heading: "Who we talked to",
        paragraphs: [
          "We engaged a diverse group of native Arizona residents through interviews and usability tests on questions people actually wanted answered, from clean water initiatives to drinking water safety to how Arizona's situation compares to California's.",
          "Locations: Phoenix, Prescott, Northern Arizona, and Tucson. Profiles: students, long-term residents of seven-plus years, business owners, and government officials.",
        ],
      },
      {
        type: "list",
        heading: "What people asked it",
        items: [
          "What are clean water projects in Arizona?",
          "How safe is the water in Arizona to drink?",
          "Is it safe to swim in Lake Johnson?",
          "Do we have the same water shortage issue in Arizona as in California?",
          "What is the current water conservation policy in Arizona?",
        ],
      },
      {
        type: "quote-grid",
        heading: "What testers said",
        quotes: [
          "It's cool how the chatbot collects all the data and puts it in a brief answer.",
          "I didn't expect to get such specific answers to my questions. I was excited and happy about that.",
        ],
      },
      {
        type: "text",
        eyebrow: "Storytelling",
        heading: "Three residents, three different needs",
        paragraphs: [
          "Sarah, a busy mother, sought information on clean water initiatives but wanted links for further exploration. Jessica, a former Californian, found the chatbot's brief answers on drinking water safety inadequate for sharing with her family. Michael, questioning the quality of his filtered water, discovered parallels to California's water shortages but desired more resources.",
          "Their experiences pointed to the same gap: a community eager for information on water conservation, with the chatbot serving as a vital link to help them advocate for sustainable practices — if it gave them enough to work with.",
        ],
      },
      {
        type: "text",
        eyebrow: "Observations",
        heading: "What usability testing surfaced",
        paragraphs: [
          "Participants shared their daily water usage and the challenges they ran into finding water-related information. Each person interacted with Waterbot differently, which gave us five distinct, specific problems to design against.",
        ],
      },
      {
        type: "text",
        heading: "01 — Accuracy",
        paragraphs: [
          "Users face a significant challenge, as there is no readily available resource to verify the accuracy of information Waterbot provides.",
        ],
      },
      {
        type: "image",
        src: "/images/waterbot/screen1.png",
        alt: "Waterbot chatbot response about Arizona's water sources, annotated as part of the accuracy observation",
        caption: "Suggestion: add a “Resources” link after a response, so people can verify what they're told.",
        fit: "contain",
      },
      {
        type: "text",
        heading: "02 — New-chat navigation",
        paragraphs: [
          "Users frequently struggle to locate the “New Chat” button, particularly when they're already engaged in a prompt search.",
        ],
      },
      {
        type: "image",
        src: "/images/waterbot/screen2.png",
        alt: "Waterbot interface with the New Chat button highlighted, annotated as part of the new-chat-navigation observation",
        caption: "Suggestion: move “New Chat” closer to the prompt area for easier access.",
        fit: "contain",
      },
      {
        type: "text",
        heading: "03 — Resource-link navigation",
        paragraphs: [
          "Users have difficulty returning to the main site after clicking a resource link, since those links redirect within the same tab.",
        ],
      },
      {
        type: "image",
        src: "/images/waterbot/spei_chart.png",
        alt: "Browser screenshot showing a Waterbot resource link navigating to the Arizona Department of Water Resources website in the same tab",
        caption: "Suggestion: open resource links in a new tab, so people don't lose the conversation with Waterbot.",
        fit: "contain",
      },
      {
        type: "list",
        heading: "04 — Response length, and 05 — trust and transparency",
        items: [
          "Users favor concise answers over lengthy explanations, though some prefer more detail depending on what they're looking for. Suggestion: a filtering feature with tabs for concise, balanced, and detailed responses, plus a 'know more' button for people who want it.",
          "Users don't always prefer links, often out of concern about what they might encounter or a link failing — though some do want them for further reading. Suggestion: make links opt-in rather than automatic, so people choose whether to use them as a reference.",
        ],
      },
      {
        type: "text",
        eyebrow: "Recommendations",
        paragraphs: [
          "Based on severity, we recommended addressing these in order: optimize “New Chat” button placement, introduce resource links and tags, enhance error messaging, and rethink the interface more broadly. Beyond fixing usability issues, these changes were meant to help Waterbot build its own identity, separate from the generic mental model of ChatGPT or Google.",
        ],
      },
      {
        type: "text",
        eyebrow: "Prototype",
        heading: "The redesign",
        paragraphs: [
          "We built Figma wireframes for the redesign: the prompt area moved left to follow natural eye movement, the right panel collapses into a hamburger menu on smaller screens, “New Chat” sits at the top of the search area for easy access, resource tags appear inline to build trust, and an accordion panel holds a “How It Works” section and FAQ for quick answers to common questions.",
        ],
      },
    ],
    result: [
      "Waterbot is a real, shipped tool — built with support from ASU's Arizona Water Innovation Initiative and Impact Water Arizona — and this was a usability study and redesign proposal against the live product, not a conceptual exercise.",
      "The redesign proposal was shared by my professor on LinkedIn, who highlighted its innovative, practical approach to a civic tool Arizona residents actually use.",
    ],
  },
  {
    slug: "asu-health-literacy",
    title: "ASU Health Literacy",
    category: "Healthcare · Public Health",
    tagline:
      "A website helping people understand health information through easy-to-read resources and tools — a project whose design direction helped secure the funding that moved it into development.",
    hook: "Our vision: all Arizonans have better access to reliable, understandable health information to make well-informed health decisions.",
    year: "2024",
    role: "UX/UI Design",
    team: "ASU Learning Enterprise team",
    timeline: "Ongoing — in development",
    client: "Arizona State University Learning Enterprise",
    stats: [
      {
        value: "90%",
        label: "of American adults struggle with health information that uses unfamiliar or complex terms",
      },
      {
        value: "$7,798",
        label: "a year — what someone with limited health literacy could expect to spend",
      },
    ],
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
        eyebrow: "Background",
        paragraphs: [
          "Health literacy is crucial for public health — it lets people understand health information, navigate the healthcare system, and make informed decisions. Despite medical advances, many people struggle with basic health information, leading to poorer outcomes and higher costs. Improving health literacy means better, more equitable healthcare access.",
        ],
      },
      {
        type: "quote",
        quote:
          "Health literacy is the ability to find, understand, and use quality information and services to inform health-related decisions and actions.",
        attribution: "ASU Health Literacy",
      },
      {
        type: "image",
        src: "/images/health-literacy/dschool.webp",
        alt: "The Empathize, Define, Ideate, Prototype, Test design-thinking process diagram",
        caption: "The process we followed, from empathizing with patients through testing a redesign.",
        fit: "contain",
      },
      {
        type: "text",
        eyebrow: "Research",
        heading: "Empathize",
        paragraphs: [
          "I took part in a health-related workshop with ASU healthcare representatives, where we conducted empathy mapping together — focused on understanding the challenges and needs people have around health literacy, with the aim of developing solutions that improve their healthcare experience.",
        ],
      },
      {
        type: "image",
        src: "/images/health-literacy/img6194.jpg",
        alt: "Photo from the ASU health literacy workshop with healthcare representatives",
        caption: "Workshop with ASU healthcare representatives, conducting empathy mapping together.",
      },
      {
        type: "list",
        heading: "What we heard — says, thinks, does, feels",
        items: [
          "Says: “I’m far from the clinic.” “I don’t know the warning signs.” “I’m pregnant — my doctor says I have two things I don’t understand.”",
          "Thinks: “I wonder what these headaches are?” “How does a traditional understanding of health conflict with what the clinic tells me?” “How can I consistently go to appointments?”",
          "Does: Asks friends and family about their experience. Uses a blood pressure cuff at home. Sets her clocks differently for daylight savings.",
          "Feels: Overwhelmed, intimidated, dealing with headaches, and worried about her baby.",
        ],
      },
      {
        type: "image",
        src: "/images/health-literacy/screen1.png",
        alt: "Empathy map board for a 45-year-old Arizona resident who immigrated from Mexico, built during the workshop",
        caption: "The empathy-mapping board those notes were pulled from.",
        fit: "contain",
      },
      {
        type: "image-row",
        images: [
          {
            src: "/images/health-literacy/img6233.jpg",
            alt: "Close-up of a 'Says' empathy-map board from a parallel breakout group, with notes about a caregiving dynamic with a spouse",
            caption: "A parallel breakout group mapped a different persona — notes on dismissing a doctor's advice and a caregiving spouse.",
          },
          {
            src: "/images/health-literacy/img6235.jpg",
            alt: "Close-up of a 'Feels' empathy-map board with notes including 'fear,' 'loss of power,' and 'emasculation'",
            caption: "That same group's 'Feels' quadrant, surfacing themes of vulnerability and stigma around men's health.",
          },
        ],
        fit: "contain",
      },
      {
        type: "text",
        heading: "A persona to design for",
        paragraphs: [
          "From these sessions, we synthesized a persona to center the redesign on: Maria Gomez, a 45-year-old housekeeper in Arizona managing a recent Type 2 diabetes diagnosis and hypertension, with no primary care provider and limited access to Spanish-speaking healthcare.",
          "Her challenges were concrete — medication instructions she couldn't fully understand in English, and a real knowledge gap around managing diabetes because of the language barrier. Her goals were just as concrete: manage her health effectively, get advice that respects her cultural background, and understand her own care without relying solely on family to translate.",
        ],
      },
      {
        type: "image",
        src: "/images/health-literacy/persona2.jpg",
        alt: "User persona: Maria Gomez, 45, a housekeeper in Arizona managing newly diagnosed Type 2 diabetes and hypertension",
        fit: "contain",
      },
      {
        type: "text",
        eyebrow: "Ideate",
        paragraphs: [
          "During the Ideation stage, we generated creative ideas for improving health literacy based on insights from the empathy mapping workshop. Our goal was to develop user-friendly solutions that address the identified challenges.",
          "We brainstormed various features, such as educational videos, multilingual support, and easy-to-read printed materials, to ensure that health information is accessible and comprehensible for all.",
          "This stage involved collaborative thinking, refining concepts, and prioritizing ideas that empower individuals to manage their health more effectively.",
        ],
      },
      {
        type: "list",
        heading: "What we proposed",
        items: [
          "An application with different language options, educational videos, and appointment scheduling.",
          "Trained bilingual volunteers or professionals to help overcome language barriers.",
          "A portal where prescriptions are centralized and can be picked up anytime, rather than during a single pickup window.",
          "A community to turn to for help, plus telehealth clinics and urgent care services.",
          "More in-depth health education.",
          "Guidelines or papers to hand off to patients at the end of their visit.",
          "Educational workshops in every city.",
        ],
      },
      {
        type: "image",
        src: "/images/health-literacy/screen2.png",
        alt: "Ideation sticky notes generated during the workshop",
        caption: "Raw ideation notes from the session.",
        fit: "contain",
      },
      {
        type: "text",
        eyebrow: "Design",
        heading: "From wireframes to a working site",
        paragraphs: [
          "The first version was built from scratch — low-fidelity wireframes establishing structure, then high-fidelity prototypes refining visuals and interactivity. After collecting feedback, we made significant changes to improve usability and aesthetics.",
          "For the second version, I worked closely with the development team through several meetings to make sure the updated layout and features were technically feasible, then designed the mobile version so the experience stayed consistent while optimized for smaller screens.",
        ],
      },
      {
        type: "image",
        src: "/images/health-literacy/screen3.png",
        alt: "Five high-fidelity desktop page designs for the ASU Learner Health site: homepage, a course page, a news feed, an article, and a nutrition hub",
        caption: "High-fidelity desktop designs — homepage, course pages, news, and content hubs.",
        fit: "contain",
      },
      {
        type: "image",
        src: "/images/health-literacy/screen4.png",
        alt: "Three high-fidelity mobile page designs for the ASU Health Literacy site: the landing page, the stats and goals section, and course and contact cards",
        caption: "The mobile version of the Health Literacy landing page, optimized for smaller screens.",
        fit: "contain",
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
    hook: "Videos do more than just inform — they inspire, educate, and create lasting impact, one video at a time.",
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
        eyebrow: "Background",
        paragraphs: [
          "Learning Sparks Studio was created to bridge the gap between traditional education and modern learning experiences by harnessing the power of video — helping ASU professors share their expertise with a global audience.",
          "Welcome to Learning Sparks Studio, where creativity meets learning science to ignite educational transformations: a world where videos do more than just inform, but inspire, educate, and create lasting impact.",
        ],
      },
      {
        type: "image",
        src: "/images/learning-sparks/design-thinking.png",
        alt: "The Empathize, Define, Ideate, Prototype, Test design-thinking process diagram",
        caption: "The design-thinking process behind the research.",
        fit: "contain",
      },
      {
        type: "text",
        eyebrow: "Research",
        heading: "Empathize",
        paragraphs: [
          "Research included empathy mapping, a user journey map, and an interview with a professor persona about integrating video into teaching — covering excitement about the format, the time and technical challenges of producing it, and the features that would make a video platform worth adopting, like quizzes, polls, and engagement analytics.",
        ],
      },
      {
        type: "image",
        src: "/images/learning-sparks/empathy-map.png",
        alt: "Empathy map for Learning Sparks Studio, covering what a professor persona thinks, feels, does, hears, says, and sees",
        fit: "contain",
      },
      {
        type: "image",
        src: "/images/learning-sparks/pains-gains.png",
        alt: "Pains and gains board: fears, frustrations, and obstacles on one side, needs, goals, and motivations on the other",
        caption: "Pains and gains mapped during the same session.",
        fit: "contain",
      },
      {
        type: "text",
        heading: "A persona to design for",
        paragraphs: [
          "From this research, we built a persona to center the design on: Sarah Tompson, a 35-year-old university professor at ASU with over ten years of teaching experience, based in Tempe and holding a PhD in Education. She's tech-savvy, passionate about innovative teaching methods, and always looking for new ways to engage her students.",
        ],
      },
      {
        type: "quote",
        quote:
          "Education should be dynamic and accessible. I want my students to feel excited about learning, no matter where they are.",
        attribution: "Sarah Tompson, persona — university professor, ASU",
      },
      {
        type: "image",
        src: "/images/learning-sparks/user-persona.png",
        alt: "User persona: Sarah Tompson, 35, a university professor at ASU with a PhD in Education",
        fit: "contain",
      },
      {
        type: "list",
        heading: "Her goals and pain points",
        items: [
          "Goals: Create engaging, accessible educational content; reach a wider audience, including online and global learners; stay current with the latest educational technology.",
          "Pain points: Limited time to create high-quality video content on her own; ensuring content is accessible to students with disabilities; balancing teaching responsibilities with content creation.",
        ],
      },
      {
        type: "text",
        heading: "Mapping her journey",
        paragraphs: [
          "We mapped Sarah's journey from first hearing about Learning Sparks Studio through daily use — her actions and touchpoints at each phase, and how her confidence shifts from overwhelmed to validated as she moves from awareness through onboarding into regular use.",
        ],
      },
      {
        type: "image",
        src: "/images/learning-sparks/sarah.png",
        alt: "User journey map for Sarah Tompson, from awareness through consideration, decision, onboarding, and daily usage",
        caption: "Sarah's journey from first hearing about the studio to confident daily use.",
        fit: "contain",
      },
      {
        type: "text",
        eyebrow: "Design",
        heading: "A working prototype",
        paragraphs: [
          "We help create content that delivers a global learning reach as well as powerful marketable value — the process leads faculty through content ideation and development from end to end.",
          "We work to develop content that meets the aims and objectives of each project. From scriptwriting to communication coaching, cinematic production, and showcasing strategy, we support every stage.",
          "Our content-creation method is built on the principles of learning science. The design team works with faculty and partners to develop a format and creation pathway that fits them, characterized by flexibility, versatility, creativity, and innovation.",
        ],
      },
      {
        type: "steps",
        heading: "The six-stage process",
        steps: [
          { icon: "spark", label: "Vision" },
          { icon: "clipboard", label: "Ideation" },
          { icon: "swatch", label: "Creation" },
          { icon: "camera", label: "Coaching" },
          { icon: "camera", label: "Production" },
          { icon: "spark", label: "Distribution" },
        ],
      },
      {
        type: "list",
        heading: "Video styles",
        items: [
          "Trailer / Sizzle — a 1–2 minute cinematic piece for open-access platforms, built for market lead generation.",
          "Distilled video — a tight 2–4 minute cut.",
          "Promotional video — a punchy 30-second spot.",
          "Expansive video — a full 6-plus minute deep dive.",
        ],
      },
      {
        type: "quote-grid",
        heading: "What professors said",
        quotes: [
          "Thanks to the team for making the whole process easy to navigate, and the recording session professional, smooth, and supportive. — Rajesh Buch, PhD, MBA",
          "I had a blast — just a great team of people, continually giving me positive feedback. They made it easy and I am grateful for their support. — Punya Mishra, Professor of Social Sciences",
          "It was my absolute pleasure working with you. Your team was incredibly professional, and I had a blast. Looking forward to the next steps. — Robert LiKamWa, Professor of Anthropology",
        ],
      },
      {
        type: "image",
        src: "/images/learning-sparks/main.jpg",
        alt: "The Learning Sparks Studio prototype site, from the hero through about, process, video styles, portfolio, and testimonials",
        caption: "The working prototype — from hero through video styles and testimonials.",
        fit: "contain",
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
