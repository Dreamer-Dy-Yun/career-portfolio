type HeaderProps = {
  siteTitle: string;
};

const navItems = [
  { label: 'Position', href: '#roles' },
  { label: 'Evidence', href: '#projects' },
  { label: 'Career', href: '#career' },
  { label: 'Stack', href: '#skills' },
  { label: '문의', href: '#contact' },
];

const Header = ({ siteTitle }: HeaderProps) => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="첫 화면으로 이동">
          {siteTitle}
        </a>
        <nav aria-label="주요 섹션">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
