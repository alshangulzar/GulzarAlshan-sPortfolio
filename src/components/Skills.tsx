import { skillGroups } from "@/data/skills";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
      {skillGroups.map((group, i) => (
        <Reveal key={group.title} delay={i * 0.08}>
          <div>
            <h3 className="text-[12px] font-medium uppercase tracking-[0.1em] text-ink-faint">
              {group.title}
            </h3>
            <ul className="mt-5 space-y-3 border-t border-line pt-5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-[15px] leading-relaxed text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
