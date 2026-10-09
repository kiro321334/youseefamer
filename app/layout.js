import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';
const sg = Space_Grotesk({ subsets: ['latin'], variable: '--font-sg', display: 'swap' });
export const metadata = {
  metadataBase: new URL(site.url), title: site.title, description: site.description, keywords: site.keywords,
  authors: [{ name: site.name }], alternates: { canonical: '/' },
  openGraph: { title: site.title, description: site.description, url: site.url, siteName: site.name, type: 'website', images: [{ url: '/hero.jpg', width: 900, height: 1200, alt: site.name }] },
  twitter: { card: 'summary_large_image', title: site.title, description: site.description, images: ['/hero.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-video-preview': -1 } },
};
export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#0a0b10' };
const ld = { '@context': 'https://schema.org', '@type': 'Person', name: site.name, jobTitle: 'Cinematographer & Camera Operator', url: site.url, image: site.url + '/hero.jpg', email: site.email, sameAs: [site.instagram, site.youtube], knowsAbout: ['Cinematography', 'Event videography', 'Easyrig operation', 'Gimbal operation'], address: { '@type': 'PostalAddress', addressCountry: 'EG' } };
export default function RootLayout({ children }) {
  return (<html lang="en" className={sg.variable}><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />{children}</body></html>);
}
