type FooterProps = {
  contentSource: 'local' | 'google-sheet';
};

const Footer = ({ contentSource }: FooterProps) => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>Yun Dae-Young&apos;s Portfolio</span>
        <span>content: {contentSource === 'google-sheet' ? 'Google Sheets' : 'local seed'}</span>
      </div>
    </footer>
  );
};

export default Footer;