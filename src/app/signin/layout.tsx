import Script from "next/script";

interface TypeSigninProps {
  children?: React.ReactNode;
}

const Layout: React.FC<TypeSigninProps> = ({ children }) => (
  <>
    {children}
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
