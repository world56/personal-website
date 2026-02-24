import NotFound from "@/components/NotFound";
import Container from "@/components/Container";

import { POST_PATH } from "@/config/common";

interface TypeLayoutProps {
  children?: React.ReactNode;
  params: Promise<{ type: string }>;
}

const PATHS = Object.values(POST_PATH);

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
