type FooterProps = {
  contentSource: 'local' | 'google-sheet';
};

const Footer = ({ contentSource }: FooterProps) => {
  return (
    <footer className="site-footer">
      <span>Yun Dae-Young&apos;s Portfolio</span>
      <span>데이터: {contentSource === 'google-sheet' ? 'Google Sheets' : '기본 경력 데이터'}</span>
    </footer>
  );
};

export default Footer;
