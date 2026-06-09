import type { HeroContent, ProfileSummaryContent, SkillGroupContent, WorkCaseContent } from '../data/types';
import { chip, darkChip, eyebrow, pageContainer } from './uiClasses';

type ResumeDashboardProps = {
  hero: HeroContent;
  profileSummary: ProfileSummaryContent;
  workCases: WorkCaseContent[];
  skillGroups: SkillGroupContent[];
};

const ResumeDashboard = ({ hero, profileSummary, workCases, skillGroups }: ResumeDashboardProps) => {
  const recentExperiences = workCases.slice(0, 4);
  const primarySkills = skillGroups.flatMap((group) => group.items).slice(0, 8);

  return (
    <section className={pageContainer} id="top" aria-label="Career summary">
      <div className="overflow-hidden rounded-[32px] border border-stone-300/90 bg-[#fffaf3]/95 shadow-[0_28px_100px_rgba(45,35,20,0.12)] print:rounded-none print:border-stone-400 print:bg-white print:shadow-none">
        <div className="grid min-h-[560px] lg:grid-cols-[0.95fr_1.25fr_1fr] print:min-h-0 print:grid-cols-3">
          <div className="flex flex-col justify-center border-b border-stone-300 p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10 print:border-stone-400 print:p-5">
            <p className={eyebrow}>Career Portfolio</p>
            <h1 className="mt-7 max-w-[8ch] text-[clamp(3rem,6vw,6rem)] font-black leading-[0.88] tracking-[-0.09em] text-stone-950 print:mt-4 print:text-4xl">
              {hero.name}
            </h1>
            <p className="mt-6 max-w-sm text-2xl font-black leading-tight tracking-[-0.05em] text-stone-950 sm:text-3xl print:text-xl">
              {hero.title}
            </p>
            <p className="mt-5 max-w-sm text-base font-extrabold leading-relaxed text-teal-800 print:text-sm print:text-black">
              {hero.subtitle}
            </p>
          </div>

          <div className="flex flex-col justify-center border-b border-stone-300 p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10 print:border-stone-400 print:p-5">
            <h2 className="max-w-3xl text-2xl font-black leading-snug tracking-[-0.045em] text-stone-950 sm:text-3xl print:text-xl">
              {profileSummary.headline}
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700 print:text-sm print:leading-6">{hero.summary}</p>
            <ul className="mt-5 grid gap-2 text-sm font-bold leading-7 text-stone-700 print:text-xs print:leading-5">
              {profileSummary.lines.map((line) => (
                <li className="grid grid-cols-[0.75rem_minmax(0,1fr)] gap-2" key={line}>
                  <span className="mt-3 h-px bg-stone-500 print:bg-black" aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="flex flex-col justify-center p-7 sm:p-9 lg:p-10 print:p-5" aria-label="Recent career entries">
            <div className="flex items-end justify-between gap-4 border-b border-stone-300 pb-4 print:border-stone-400">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-stone-500 print:text-black">Recent</p>
              <strong className="text-xl font-black tracking-[-0.05em] text-stone-950">{recentExperiences.length} cases</strong>
            </div>
            <ul className="mt-4 grid gap-0 divide-y divide-stone-300 print:divide-stone-400">
              {recentExperiences.map((workCase) => (
                <li className="py-3" key={workCase.title}>
                  <p className="text-xs font-black text-stone-500 print:text-black">{workCase.period}</p>
                  <p className="mt-1 text-sm font-black leading-snug text-stone-950">
                    {workCase.title} ? {workCase.role}
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="grid gap-6 border-t border-stone-300 p-7 sm:p-8 lg:grid-cols-[1fr_1.45fr_1.25fr] print:grid-cols-3 print:border-stone-400 print:p-5">
          <section>
            <h2 className="text-sm font-black tracking-[-0.02em] text-stone-950">Strengths</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {profileSummary.strengths.map((strength) => (
                <li className={chip} key={strength}>{strength}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-sm font-black tracking-[-0.02em] text-stone-950">Work cases</h2>
            <ul className="mt-3 grid gap-1 text-sm font-black leading-6 text-stone-700 print:text-xs">
              {recentExperiences.slice(0, 3).map((workCase) => (
                <li key={workCase.title}>{workCase.title}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-sm font-black tracking-[-0.02em] text-stone-950">Skill context</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {primarySkills.map((skill) => (
                <li className={darkChip} key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ResumeDashboard;
