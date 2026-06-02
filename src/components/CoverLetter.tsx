type CoverLetterProps = {
  paragraphs: string[];
};

const CoverLetter = ({ paragraphs }: CoverLetterProps) => {
  if (paragraphs.length === 0) {
    return null;
  }

  return (
    <section className="document-section" aria-labelledby="cover-letter-title">
      <div className="section-title">
        <p className="eyebrow">Self Introduction</p>
        <h2 id="cover-letter-title">자기소개</h2>
      </div>
      <div className="prose-block">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default CoverLetter;
