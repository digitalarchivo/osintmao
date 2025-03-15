'use client';

import { ReactNode } from 'react';
import LoadingScreen from '@/components/LoadingScreen';

export default function ClientBody({ children }: { children: ReactNode }) {
  return (
    <body className="antialiased" suppressHydrationWarning>
      <LoadingScreen />
      {children}
    </body>
  );
}
