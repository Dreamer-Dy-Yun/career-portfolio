import { documentPanel, eyebrow, headingTitle, pageContainer, sectionHeading } from './uiClasses';

type CoverLetterProps = {
  paragraphs: string[];
};

const CoverLetter = ({ paragraphs }: CoverLetterProps) => {
  if (paragraphs.length === 0) {
    return null;
  }

  return (
    <section className={pageContainer} aria-labelledby="cover-letter-title">
      <div className={documentPanel}>
        <div className={sectionHeading}>
          <p className={eyebrow}>Self Introduction</p>
          <h2 className={headingTitle} id="cover-letter-title">
            자기소개
          </h2>
        </div>
        <div className="grid max-w-5xl gap-4 text-base font-semibold leading-8 text-stone-700 print:text-sm print:leading-6">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoverLetter;
