import { useEffect, useState } from 'react';
import CareerTimeline from './components/CareerTimeline';
import CoverLetter from './components/CoverLetter';
import Footer from './components/Footer';
import Header from './components/Header';
import ResumeDashboard from './components/ResumeDashboard';
import SkillSummary from './components/SkillSummary';
import WorkCases from './components/WorkCases';
import { fallbackContent } from './data/portfolioContent';
import type { ContactContent, PortfolioContent } from './data/types';
import { loadPortfolioContent } from './services/contentLoader';

const hasRealContact = (contact: ContactContent) => {
  return Boolean(contact.formUrl?.trim() || contact.email?.trim());
};

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
    <div className="site-shell">
      <Header siteTitle={content.siteTitle} />
      <main className="career-profile">
        <ResumeDashboard
          hero={content.hero}
          profileSummary={content.profileSummary}
          experiences={content.experiences}
          workCases={content.workCases}
          skillGroups={content.skillGroups}
        />
        <CareerTimeline experiences={content.experiences} workCases={content.workCases} />
        <CoverLetter paragraphs={content.selfIntroduction} />
        <WorkCases workCases={content.workCases} />
        <SkillSummary skillGroups={content.skillGroups} />

        {hasRealContact(content.contact) ? (
          <section className="document-section contact-section" aria-labelledby="contact-title">
            <div className="section-title">
              <p className="eyebrow">Contact</p>
              <h2 id="contact-title">문의</h2>
            </div>
            <div className="contact-actions">
              {content.contact.formUrl ? (
                <a className="action-link" href={content.contact.formUrl} rel="noreferrer" target="_blank">
                  Google Form
                </a>
              ) : null}
              {content.contact.email ? (
                <a className="action-link" href={`mailto:${content.contact.email}`}>
                  Email
                </a>
              ) : null}
            </div>
          </section>
        ) : null}
      </main>
      <Footer contentSource={contentSource} />
    </div>
  );
};

export default App;
