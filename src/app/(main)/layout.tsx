import Script from "next/script";
import { DBlocal } from "@/lib/db";
import Personal from "@/components/Personal";
import NavbaNavigationr from "@/components/Navigation/Main";

interface TypeMainProps {
  children?: React.ReactNode;
}

const Layout: React.FC<TypeMainProps> = ({ children }) => {
  const config = DBlocal.get();
  const IS_ZH_HANS = config.language === "zh-Hans";
  return (
    <>
      <Personal />
      <main className="md:ml-78.5 md:w-240 md:mt-14 mr-0! relative">
        <NavbaNavigationr />
        {children}
      </main>
      {config.forTheRecord ? (
        <footer className="mb-19.5 md:my-6 mx-auto text-center">
          <a
            target="_blank"
            className="md:pl-76.5 text-zinc-400 text-sm"
            href={IS_ZH_HANS ? "https://beian.miit.gov.cn/" : undefined}
          >
            {config.forTheRecord}
          </a>
        </footer>
      ) : null}
      <Script src="/lib/welcome" />
    </>
  );
};

export default Layout;
