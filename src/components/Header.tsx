type HeaderProps = {
  siteTitle: string;
  showContact: boolean;
};

const navItems = [
  { label: 'Position', href: '#roles' },
  { label: 'Thinking Pattern', href: '#principles' },
  { label: 'Evidence', href: '#projects' },
  { label: 'Career', href: '#career' },
  { label: 'Stack', href: '#skills' },
  { label: '문의', href: '#contact', requiresContact: true },
];

const Header = ({ siteTitle, showContact }: HeaderProps) => {
  const visibleNavItems = navItems.filter((item) => !item.requiresContact || showContact);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Go to top">
          {siteTitle}
        </a>
        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            {visibleNavItems.map((item) => (
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
