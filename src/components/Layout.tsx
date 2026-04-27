import type { PropsWithChildren } from 'react';

export function Layout({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen bg-paper px-5 py-6 text-ink sm:px-8">
      <div className="mx-auto w-full max-w-3xl">{children}</div>
    </main>
  );
}
