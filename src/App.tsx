import { useEffect, useState } from 'react';
import CareerTimeline from './components/CareerTimeline';
import Footer from './components/Footer';
import Header from './components/Header';
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
        <section className="profile-hero" aria-labelledby="profile-title">
          <div className="profile-copy">
            <p className="eyebrow">Career Profile</p>
            <h1 id="profile-title">{content.hero.name}</h1>
            <p className="profile-title">{content.hero.title}</p>
            <p className="profile-subtitle">{content.hero.subtitle}</p>
            <p className="profile-description">{content.hero.description}</p>
            {content.hero.keywords.length > 0 ? (
              <ul className="keyword-list" aria-label="Profile keywords">
                {content.hero.keywords.map((keyword) => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="profile-summary" aria-label="Profile positioning">
            <span>Focus</span>
            <strong>업무 흐름과 데이터 구조화</strong>
            <p>기술 스택보다 먼저 입력, 상태, 검증, 책임 경계를 정리하는 방향으로 경력을 보여준다.</p>
          </div>
        </section>

        <section className="career-section" aria-labelledby="career-title">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2 id="career-title">Career Timeline</h2>
            <p>시작일과 종료일을 기준으로 겹치는 경력은 자동으로 병행 표기한다.</p>
          </div>
          <CareerTimeline experiences={content.experiences} />
        </section>

        {hasRealContact(content.contact) ? (
          <section className="contact-section" aria-labelledby="contact-title">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 id="contact-title">Contact</h2>
            </div>
            <div className="contact-actions">
              {content.contact.formUrl ? (
                <a className="action-link" href={content.contact.formUrl} rel="noreferrer" target="_blank">
                  Google Form 열기
                </a>
              ) : null}
              {content.contact.email ? (
                <a className="action-link" href={`mailto:${content.contact.email}`}>
                  이메일 보내기
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
