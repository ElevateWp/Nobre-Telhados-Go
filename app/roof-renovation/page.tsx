import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Reforma de telhados',
  description: 'Reformas de telhados planejadas conforme a avaliação do imóvel.',
  pathname: '/roof-renovation/',
});

export default function DecorativeBlocksPage() {
  return <ProductCategoryPage slug="roof-renovation" />;
}
