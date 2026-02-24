import "./global.css";
import "./global.sass";
import Script from "next/script";
import { DBlocal } from "@/lib/db";
import { Toaster } from "@/components/ui/sonner";
import { NextIntlClientProvider } from "next-intl";
import ThemeProvider from "@/components/ThemeProvider";
import QueryProvider from "@/components/QueryProvider";
import { getLocale, getMessages } from "next-intl/server";

import { API_RESOURCE } from "@/config/common";

export async function generateMetadata() {
  const config = DBlocal.get();
  const favicon = `${API_RESOURCE}${config.favicon}`;
  return {
    title: config.title,
    description: config.description,
    icons: config.favicon ? { icon: favicon, apple: favicon } : undefined,
  };
}

interface TypeLayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<TypeLayoutProps> = async ({ children }) => {
  const [locale, messages] = await Promise.all([getLocale(), getMessages()]);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="md:w-7xl mx-auto! relative! left-0! right-0! px-0!">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <QueryProvider>
            <ThemeProvider
              enableSystem
              attribute="class"
              defaultTheme="system"
              disableTransitionOnChange
            >
              {children}
              <Toaster
                richColors
                closeButton
                expand={false}
                position="top-right"
              />
            </ThemeProvider>
          </QueryProvider>
        </NextIntlClientProvider>
        <Script src="/lib/player/index.js" strategy="lazyOnload" />
      </body>
    </html>
  );
};

export default Layout;
