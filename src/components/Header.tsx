const navItems = [
  { href: '#identity', label: '정체성' },
  { href: '#evidence-index', label: '근거' },
  { href: '#projects', label: '프로젝트' },
  { href: '#career-base', label: '경력 기반' },
  { href: '#contact', label: '연락처' },
];

const Header = () => {
  return (
    <header className="header site-header">
      <div className="header-inner">
        <a className="brand" href="#hero">
          윤대영
        </a>
        <nav aria-label="메인 메뉴">
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
