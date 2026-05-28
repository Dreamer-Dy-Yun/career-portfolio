import { useEffect, useState } from 'react';
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
      <Header siteTitle={content.siteTitle} showContact={hasContactForm} />
      <main className="page-stack">
        <PageSection id="top" variant="hero">
          <Hero hero={content.hero} />
        </PageSection>
        <PageSection id="roles" eyebrow="Role Fit" title="Position">
          <RoleGrid roles={content.roles} />
        </PageSection>
        <PageSection id="principles" eyebrow="Thinking Pattern" title="How I Structure Problems">
          <OperatingPrinciples principles={content.operatingPrinciples ?? fallbackContent.operatingPrinciples} />
        </PageSection>
        <PageSection id="projects" eyebrow="Project Work" title="Evidence">
          <ProjectGrid projects={content.projects} />
        </PageSection>
        <PageSection id="career" eyebrow="Career" title="Career">
          <CareerTimeline experiences={content.experiences} />
        </PageSection>
        <PageSection id="skills" eyebrow="Stack" title="Stack">
          <SkillCloud skillGroups={content.skillGroups} />
        </PageSection>
        {hasContactForm ? (
          <PageSection id="contact" eyebrow="Contact" title="문의">
            <ContactPanel contact={content.contact} />
          </PageSection>
        ) : null}
      </main>
      <Footer contentSource={contentSource} />
    </div>
  );
};

export default App;
