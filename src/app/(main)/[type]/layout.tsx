import Container from "@/components/Container";
import NotFound from "@/components/Exception/NotFound";

import { POST_PATH } from "@/config/common";

import type { Metadata } from "next";

interface TypeLayoutProps {
  children?: React.ReactNode;
  params: Promise<{ type: string }>;
}

const PATHS = Object.values(POST_PATH);

export async function generateMetadata({
  params,
}: TypeLayoutProps): Promise<Metadata> {
  const { type } = await params;
  if (!PATHS.includes(type)) return {};
  return {
    alternates: { canonical: `/${type}` },
  };
}

const Layout: React.FC<TypeLayoutProps> = async ({ children, params }) => {
  const { type } = await params;

  return PATHS.includes(type) ? (
    children
  ) : (
    <Container>
      <NotFound />
    </Container>
  );
};

export default Layout;
