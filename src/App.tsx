import { useEffect, useState } from 'react';
import CareerTimeline from './components/CareerTimeline';
import CoverLetter from './components/CoverLetter';
import Footer from './components/Footer';
import Header from './components/Header';
import ResumeDashboard from './components/ResumeDashboard';
import SkillSummary from './components/SkillSummary';
import WorkCases from './components/WorkCases';
import { chip, documentPanel, eyebrow, headingTitle, pageContainer, sectionHeading } from './components/uiClasses';
import { fallbackContent } from './data/portfolioContent';
import type { ContactContent, PortfolioContent } from './data/types';
import { loadPortfolioContent } from './services/contentLoader';

const hasRealContact = (contact: ContactContent) => Boolean(contact.formUrl?.trim() || contact.email?.trim());

const App = () => {
  const [content, setContent] = useState<PortfolioContent>(fallbackContent);
  const [contentSource, setContentSource] = useState<'local' | 'google-sheet'>('local');

  useEffect(() => {
    let isMounted = true;

    loadPortfolioContent().then((result) => {
      if (!isMounted) {
        return;
      }

      setContent(result.content);
      setContentSource(result.source);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f2e9] bg-[linear-gradient(90deg,rgba(15,118,110,0.08)_1px,transparent_1px),linear-gradient(180deg,#fbf8f1_0%,#f1eadf_100%)] bg-[length:92px_92px,100%_100%] font-sans text-stone-950 antialiased print:bg-white print:bg-none print:text-black">
      <Header siteTitle={content.siteTitle} />
      <main className="grid gap-6 pb-10 pt-5 sm:gap-7 lg:gap-8 print:block print:space-y-5 print:pb-0 print:pt-0">
        <ResumeDashboard
          hero={content.hero}
          profileSummary={content.profileSummary}
          workCases={content.workCases}
          skillGroups={content.skillGroups}
        />
        <CareerTimeline experiences={content.experiences} workCases={content.workCases} />
        <CoverLetter paragraphs={content.selfIntroduction} />
        <WorkCases workCases={content.workCases} />
        <SkillSummary skillGroups={content.skillGroups} />

        {hasRealContact(content.contact) ? (
          <section className={pageContainer} aria-labelledby="contact-title">
            <div className={documentPanel}>
              <div className={sectionHeading}>
                <p className={eyebrow}>Contact</p>
                <h2 className={headingTitle} id="contact-title">
                  문의
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {content.contact.formUrl ? (
                  <a className={chip} href={content.contact.formUrl} rel="noreferrer" target="_blank">
                    Google Form
                  </a>
                ) : null}
                {content.contact.email ? (
                  <a className={chip} href={`mailto:${content.contact.email}`}>
                    Email
                  </a>
                ) : null}
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <Footer contentSource={contentSource} />
    </div>
  );
};

export default App;
