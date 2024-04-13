// In Next.js, this file would be called: app/providers.jsx
'use client';

import '../lib/dayj';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// We can not useState or useRef in a server component, which is why we are
// extracting this part out into it's own file with 'use client' on top
import { PropsWithChildren, useState } from 'react';
import { ThemeProvider } from './theme-provider';

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
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}
