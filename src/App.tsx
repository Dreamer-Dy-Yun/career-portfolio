import { useEffect, useState } from 'react';
import CareerTimeline from './components/CareerTimeline';
import ContactPanel from './components/ContactPanel';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import RoleGrid from './components/RoleGrid';
import Section from './components/Section';
import SkillCloud from './components/SkillCloud';
import { fallbackContent } from './data/portfolioContent';
import type { PortfolioContent } from './data/types';
import { loadPortfolioContent } from './services/contentLoader';

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
      <main>
        <Hero hero={content.hero} />
        <Section id="roles" eyebrow="Role Fit" title="Position">
          <RoleGrid roles={content.roles} />
        </Section>
        <Section id="projects" eyebrow="Project Work" title="Evidence">
          <ProjectGrid projects={content.projects} />
        </Section>
        <Section id="career" eyebrow="Career" title="경력 이력">
          <CareerTimeline experiences={content.experiences} />
        </Section>
        <Section id="skills" eyebrow="Stack" title="기술 스택">
          <SkillCloud skillGroups={content.skillGroups} />
        </Section>
        <Section id="contact" eyebrow="Contact" title="문의">
          <ContactPanel contact={content.contact} />
        </Section>
      </main>
      <Footer contentSource={contentSource} />
    </div>
  );
};

export default App;
