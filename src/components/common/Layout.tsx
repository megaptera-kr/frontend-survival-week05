import { ReactNode } from 'react';
import Header from './Header';

type Props = {
  title: string;
  children: ReactNode;
}
export default function Layout({ title, children }:Props) {
  return (
    <main className="container my-12">
      <Header title={title} />
      <section className="w-full flex gap-4">
        {children}
      </section>
    </main>
  );
}
