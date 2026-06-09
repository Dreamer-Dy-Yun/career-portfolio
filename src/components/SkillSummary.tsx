import type { SkillGroupContent } from '../data/types';
import { chip, documentPanel, eyebrow, headingTitle, pageContainer, sectionHeading } from './uiClasses';

type SkillSummaryProps = {
  skillGroups: SkillGroupContent[];
};

const SkillSummary = ({ skillGroups }: SkillSummaryProps) => {
  if (skillGroups.length === 0) {
    return null;
  }

  return (
    <section className={pageContainer} aria-labelledby="skill-title">
      <div className={documentPanel}>
        <div className={sectionHeading}>
          <p className={eyebrow}>Skills</p>
          <h2 className={headingTitle} id="skill-title">
            기술 맥락
          </h2>
        </div>
        <div className="divide-y divide-stone-300 print:divide-stone-400">
          {skillGroups.map((group) => (
            <section className="grid gap-3 py-4 first:pt-0 last:pb-0 md:grid-cols-[14rem_minmax(0,1fr)]" key={group.title}>
              <h3 className="text-base font-black leading-tight tracking-[-0.02em] text-stone-950">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li className={chip} key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSummary;
