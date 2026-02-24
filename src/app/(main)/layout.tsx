import React from "react";
import Script from "next/script";
import Personal from "@/components/Personal";
import NavbaNavigationr from "@/components/Navigation/Main";

interface TypeMainProps {
  children?: React.ReactNode;
}

const Layout: React.FC<TypeMainProps> = ({ children }) => (
  <>
    <Personal />
    <main className="md:ml-78 md:w-240 md:mt-14 mb-19.5 mr-0! relative">
      <NavbaNavigationr />
      {children}
    </main>
    <Script src="/lib/welcome" />
  </>
);

export default Layout;
