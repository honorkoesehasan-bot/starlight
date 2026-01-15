// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://hasan-performnca-lab.netlify.app',
  integrations: [
    starlight({
      title: 'Hasan Performance Lab',
      description: 'E-Commerce-Automatisierung mit n8n + KI. Weniger manueller Kram, mehr Output.',
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: false,
      },
      social: [        linkedin: 'https://www.linkedin.com/in/hasan-k%C3%B6se-955485251/',
                { icon: 'instagram', link: 'https://www.instagram.com/hasan.marketing/' },
      ],
      customCss: [
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'Start',
          link: '/',
        },
        {
          label: 'Leistungen',
          link: '/leistungen',
        },
        {
          label: 'Workflows',
          link: '/workflows',
        },
        {
          label: 'About',
          link: '/about',
        },
        {
          label: 'Kontakt',
          link: '/kontakt',
        },
        {
          label: 'Legal',
          items: [
            { label: 'Impressum', link: '/impressum' },
            { label: 'Datenschutz', link: '/datenschutz' },
          ],
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://hasan-performnca-lab.netlify.app/og-image.jpg',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:card',
            content: 'summary_large_image',
          },
        },
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          content: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Hasan Performance Lab',
            url: 'https://hasan-performnca-lab.netlify.app',
            logo: 'https://hasan-performnca-lab.netlify.app/logo.png',
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'koese.hasan@hotmail.de',
              contactType: 'Customer Service',
            },
            sameAs: [
              'https://www.linkedin.com/in/hasan-k%C3%B6se-955485251/',
              'https://www.instagram.com/hasan.marketing/',
            ],
          }),
        },
      ],
    }),
  ],
});
