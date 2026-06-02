type FooterProps = {
  contentSource: 'local' | 'google-sheet';
};

const Footer = ({ contentSource }: FooterProps) => {
  return (
    <footer className="site-footer">
      <span>Yun Dae-Young&apos;s Portfolio</span>
      <span>content: {contentSource === 'google-sheet' ? 'Google Sheets' : 'local fallback'}</span>
    </footer>
  );
};

export default Footer;
