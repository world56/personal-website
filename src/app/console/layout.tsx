import React from "react";
import Script from "next/script";
import NavbaNavigationr from "@/components/Navigation/Console";

interface TypeConsoleProps {
  children?: React.ReactNode;
}

const Layout: React.FC<TypeConsoleProps> = ({ children }) => (
  <>
    <NavbaNavigationr />
    <main className="md:ml-62.5 md:mt-14 ml-auto mb-19.5 mr-0 w-257 relative">
      {children}
    </main>
    <Script src="/lib/tinymce/tinymce.min.js" />
    <Script src="/lib/tinymce/models/dom/model.min.js" />
    <Script src="/lib/tinymce/themes/silver/theme.min.js" />
    <Script src="/lib/tinymce/icons/default/icons.min.js" />
    <Script src="/lib/tinymce/plugins/link/plugin.min.js" />
    <Script src="/lib/tinymce/plugins/table/plugin.min.js" />
    <Script src="/lib/tinymce/plugins/lists/plugin.min.js" />
    <Script src="/lib/tinymce/plugins/image/plugin.min.js" />
    <Script src="/lib/tinymce/plugins/advlist/plugin.min.js" />
    <Script src="/lib/tinymce/plugins/checklist/plugin.min.js" />
    <Script src="/lib/tinymce/plugins/editimage/plugin.min.js" />
    <Script src="/lib/tinymce/plugins/pageembed/plugin.min.js" />
    <Script src="/lib/tinymce/plugins/codesample/plugin.min.js" />
    <Script src="/lib/tinymce/plugins/searchreplace/plugin.min.js" />
  </>
);

export default Layout;
