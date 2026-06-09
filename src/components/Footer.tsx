import { pageContainer } from './uiClasses';

type FooterProps = {
  contentSource: 'local' | 'google-sheet';
};

const Footer = ({ contentSource }: FooterProps) => (
  <footer className="py-8 text-sm font-extrabold text-stone-500 print:hidden">
    <div className={`${pageContainer} flex items-center justify-between gap-4`}>
      <span>Yun Dae-Young&apos;s Portfolio</span>
      <span>데이터: {contentSource === 'google-sheet' ? 'Google Sheets' : '기본 경력 데이터'}</span>
    </div>
  </footer>
);

export default Footer;
