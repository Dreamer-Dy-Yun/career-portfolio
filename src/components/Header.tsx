type HeaderProps = {
  siteTitle: string;
};

const Header = ({ siteTitle }: HeaderProps) => {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Go to top">
        {siteTitle}
      </a>
      <span>이력서 · 자기소개서 · 경력기술서</span>
    </header>
  );
};

export default Header;
