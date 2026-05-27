const navItems = [
  { href: '#hero', label: '홈' },
  { href: '#current-focus', label: '현재 포커스' },
  { href: '#application-summary', label: '지원자 요약' },
  { href: '#why-fits', label: '적합성' },
  { href: '#evidence-index', label: '근거 지표' },
  { href: '#technical-review', label: '기술 리뷰 요약' },
  { href: '#strengths', label: '핵심 강점' },
  { href: '#projects', label: '주요 프로젝트' },
  { href: '#skills', label: '기술 스택' },
  { href: '#timeline', label: '경력 타임라인' },
  { href: '#narrative', label: '경력 스토리' },
  { href: '#contact', label: '연락처' },
];

const Header = () => {
  return (
    <header className="header site-header">
      <div className="header-inner">
        <a className="brand" href="#hero">
          Yun Dae-Young
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
