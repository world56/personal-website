"use client";

import {
  QueryCache,
  QueryClient,
  MutationCache,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import { promptError } from "@/lib/utils";

interface TypeQueryProviderProps {
  children?: React.ReactNode;
}

const QueryProvider: React.FC<TypeQueryProviderProps> = ({ children }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            staleTime: 30 * 1000,
            gcTime: 3 * 60 * 1000,
            refetchOnWindowFocus: false,
          },
        },
        mutationCache: new MutationCache({
          onError: promptError,
        }),
        queryCache: new QueryCache({
          onError: (e) => {
            if (e?.message === "NEXT_REDIRECT") return;
            promptError(e);
          },
        }),
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
