type HeaderProps = {
  siteTitle: string;
};

const navItems = [
  { label: 'Position', href: '#roles' },
  { label: 'Thinking Pattern', href: '#principles' },
  { label: 'Evidence', href: '#projects' },
  { label: 'Career', href: '#career' },
  { label: 'Stack', href: '#skills' },
  { label: '문의', href: '#contact' },
];

const Header = ({ siteTitle }: HeaderProps) => {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Go to top">
        {siteTitle}
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;