"use client";

import { useParams, redirect } from "next/navigation";

import { POST_TYPE, POST_PATH } from "@/config/common";

interface TypeLayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<TypeLayoutProps> = ({ children }) => {
  const params = useParams<{ type: keyof typeof POST_TYPE }>();
  if (Object.values(POST_PATH).includes(params?.type!)) {
    return children;
  } else {
    return redirect("/console/post/life");
  }
};

export default Layout;
