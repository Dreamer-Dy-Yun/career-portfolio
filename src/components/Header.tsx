import { pageContainer } from './uiClasses';

type HeaderProps = {
  siteTitle: string;
};

const Header = ({ siteTitle }: HeaderProps) => (
  <header className="sticky top-0 z-40 border-b border-stone-300/80 bg-[#fbf8f1]/92 backdrop-blur print:static print:border-stone-400 print:bg-white print:backdrop-blur-none">
    <div className={`${pageContainer} flex items-center justify-between gap-4 py-4 text-sm font-black text-stone-950 sm:py-5`}>
      <a
        className="tracking-[-0.03em] hover:text-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
        href="#top"
        aria-label="Go to top"
      >
        {siteTitle}
      </a>
      <span className="hidden text-right text-xs font-extrabold text-stone-500 sm:inline">
        이력서 · 자기소개서 · 경력기술서
      </span>
    </div>
  </header>
);

export default Header;
