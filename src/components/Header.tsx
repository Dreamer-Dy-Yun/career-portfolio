type HeaderProps = {
  activePageId: string;
  pages: {
    id: string;
    label: string;
  }[];
  siteTitle: string;
};

const Header = ({ activePageId, pages, siteTitle }: HeaderProps) => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#/home" aria-label="Go to home">
          {siteTitle}
        </a>
        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            {pages.map((page) => (
              <li key={page.id}>
                <a aria-current={activePageId === page.id ? 'page' : undefined} href={`#/${page.id}`}>
                  {page.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
