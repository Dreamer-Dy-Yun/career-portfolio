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
      {contact.note ? <p>{contact.note}</p> : null}
      <div className="contact-actions">
        {hasForm ? (
          <a className="button-primary" href={contact.formUrl} target="_blank" rel="noreferrer">
            Google Form
          </a>
        ) : null}
        {hasEmail ? (
          <a className="button-secondary" href={`mailto:${contact.email}`}>
            Email
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ContactPanel;