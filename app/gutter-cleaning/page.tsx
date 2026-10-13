import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Limpeza de calhas',
  description: 'Serviços de limpeza de calhas para remover folhas e resíduos acumulados.',
  pathname: '/gutter-cleaning/',
});

export default function ConcretePipesPage() {
  return <ProductCategoryPage slug="gutter-cleaning" />;
}
