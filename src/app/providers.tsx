// In Next.js, this file would be called: app/providers.jsx
'use client';

import '../lib/dayj';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
// We can not useState or useRef in a server component, which is why we are
// extracting this part out into it's own file with 'use client' on top
import { type PropsWithChildren, useState } from 'react';

export default function Providers({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60 * 1000,
        },
      },
    });
  });

  return (
    <NuqsAdapter>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </NuqsAdapter>
  );
}
