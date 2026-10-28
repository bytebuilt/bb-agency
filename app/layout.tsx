import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ByteBuilt® — Digital experiences with intent',
  description: 'ByteBuilt is an independent digital studio building distinctive websites, digital products, and brand experiences for ambitious businesses.',
  keywords: ['digital agency', 'web design', 'web development', 'digital experiences', 'ByteBuilt'],
  openGraph: { title: 'ByteBuilt® — Digital experiences with intent', description: 'We turn ambitious ideas into digital experiences people remember.', type: 'website' },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
