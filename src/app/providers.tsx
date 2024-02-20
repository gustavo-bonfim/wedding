// In Next.js, this file would be called: app/providers.jsx
'use client';

import '../lib/dayj';

import { QueryClientProvider } from '@tanstack/react-query';
// We can not useState or useRef in a server component, which is why we are
// extracting this part out into it's own file with 'use client' on top
import { PropsWithChildren } from 'react';
import { getQueryClient } from '~/services/queryClient';
import { ThemeProvider } from './theme-provider';

export default function Providers({ children }: PropsWithChildren) {
  const queryClient = getQueryClient();

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
