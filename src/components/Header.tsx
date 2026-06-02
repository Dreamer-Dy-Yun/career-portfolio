type HeaderProps = {
  siteTitle: string;
};

const Header = ({ siteTitle }: HeaderProps) => {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Go to top">
        {siteTitle}
      </a>
      <span>Google Sheets 기반 경력 데이터</span>
    </header>
  );
};

export default Header;
