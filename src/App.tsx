import { useEffect, useMemo, useState } from 'react';
import CareerTimeline from './components/CareerTimeline';
import ContactPanel from './components/ContactPanel';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import OperatingPrinciples from './components/OperatingPrinciples';
import PageSection from './components/PageSection';
import ProjectGrid from './components/ProjectGrid';
import RoleGrid from './components/RoleGrid';
import SkillCloud from './components/SkillCloud';
import { fallbackContent } from './data/portfolioContent';
import type { PortfolioContent } from './data/types';
import { loadPortfolioContent } from './services/contentLoader';

const App = () => {
  const [content, setContent] = useState<PortfolioContent>(fallbackContent);
  const [contentSource, setContentSource] = useState<'local' | 'google-sheet'>('local');
  const hasContactForm = Boolean(content.contact.formUrl?.trim());
  const [activePageId, setActivePageId] = useState(() => window.location.hash.replace('#/', '') || 'home');

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

  useEffect(() => {
    const handleHashChange = () => {
      setActivePageId(window.location.hash.replace('#/', '') || 'home');
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const pages = useMemo(
    () => [
      {
        id: 'home',
        label: 'Home',
        element: (
          <PageSection id="home" variant="hero">
            <Hero hero={content.hero} />
          </PageSection>
        ),
      },
      {
        id: 'position',
        label: 'Position',
        element: (
          <PageSection id="position" eyebrow="Role Fit" title="Position">
            <RoleGrid roles={content.roles} />
          </PageSection>
        ),
      },
      {
        id: 'thinking',
        label: 'Thinking Pattern',
        element: (
          <PageSection id="thinking" eyebrow="Thinking Pattern" title="How I Structure Problems">
            <OperatingPrinciples principles={content.operatingPrinciples ?? fallbackContent.operatingPrinciples} />
          </PageSection>
        ),
      },
      {
        id: 'evidence',
        label: 'Evidence',
        element: (
          <PageSection id="evidence" eyebrow="Project Work" title="Evidence">
            <ProjectGrid projects={content.projects} />
          </PageSection>
        ),
      },
      {
        id: 'career',
        label: 'Career',
        element: (
          <PageSection id="career" eyebrow="Career" title="Career">
            <CareerTimeline experiences={content.experiences} />
          </PageSection>
        ),
      },
      {
        id: 'stack',
        label: 'Stack',
        element: (
          <PageSection id="stack" eyebrow="Stack" title="Stack">
            <SkillCloud skillGroups={content.skillGroups} />
          </PageSection>
        ),
      },
      ...(hasContactForm
        ? [
            {
              id: 'contact',
              label: '문의',
              element: (
                <PageSection id="contact" eyebrow="Contact" title="문의">
                  <ContactPanel contact={content.contact} />
                </PageSection>
              ),
            },
          ]
        : []),
    ],
    [content, hasContactForm],
  );

  const activePage = pages.find((page) => page.id === activePageId) ?? pages[0];

  return (
    <div className="site-shell">
      <Header activePageId={activePage.id} pages={pages.map(({ id, label }) => ({ id, label }))} siteTitle={content.siteTitle} />
      <main className="page-frame" aria-live="polite">
        {activePage.element}
      </main>
      <Footer contentSource={contentSource} />
    </div>
  );
};

export default App;
