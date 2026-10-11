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
