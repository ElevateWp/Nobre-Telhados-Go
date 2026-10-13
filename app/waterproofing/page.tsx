import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Infiltrações e impermeabilização',
  description: 'Avaliação de infiltrações e pontos de entrada de água no telhado.',
  pathname: '/waterproofing/',
});

export default function ConstructionMaterialsPage() {
  return <ProductCategoryPage slug="waterproofing" />;
}
