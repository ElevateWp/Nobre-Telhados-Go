import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Serviços para telhados',
  description: 'Reparos para telhas danificadas, infiltrações e outros pontos do telhado.',
  pathname: '/roof-repairs/',
});

export default function BuildingMaterialsPage() {
  return <ProductCategoryPage slug="roof-repairs" />;
}
