const navItems = [
  { href: '#hero', label: 'Hero' },
  { href: '#current-focus', label: 'Current Focus' },
  { href: '#application-summary', label: 'Application Summary' },
  { href: '#why-fits', label: 'Why This Profile Fits' },
  { href: '#evidence-index', label: 'Evidence Index' },
  { href: '#technical-review', label: 'Technical Review Summary' },
  { href: '#strengths', label: 'Core Strengths' },
  { href: '#projects', label: 'Featured Projects' },
  { href: '#skills', label: 'Technical Stack' },
  { href: '#timeline', label: 'Career Timeline' },
  { href: '#narrative', label: 'Career Narrative' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  return (
    <header className="header site-header">
      <div className="header-inner">
        <a className="brand" href="#hero">
          Yun Dae-Young
        </a>
        <nav aria-label="Primary Navigation">
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
