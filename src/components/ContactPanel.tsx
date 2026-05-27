import type { ContactContent } from '../data/types';

type ContactPanelProps = {
  contact: ContactContent;
};

const isRealEmail = (email?: string) => Boolean(email && !/example\./i.test(email));

const ContactPanel = ({ contact }: ContactPanelProps) => {
  const hasForm = Boolean(contact.formUrl);
  const hasEmail = isRealEmail(contact.email);

  return (
    <div className="contact-panel">
      <p>{contact.note}</p>
      <div className="contact-actions">
        {hasForm ? (
          <a className="button-primary" href={contact.formUrl} target="_blank" rel="noreferrer">
            Google Form
          </a>
        ) : null}
        {hasEmail ? (
          <a className="button-secondary" href={`mailto:${contact.email}`}>
            이메일
          </a>
        ) : null}
        {!hasForm && !hasEmail ? <span className="muted-label">문의 채널 준비 중</span> : null}
      </div>
    </div>
  );
};

export default ContactPanel;
