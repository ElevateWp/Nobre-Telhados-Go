import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Limpeza de telhados',
  description: 'Limpeza profissional de telhados e remoção de resíduos acumulados.',
  pathname: '/roof-cleaning/',
});

export default function CurbsidePickupPage() {
  return <ProductCategoryPage slug="roof-cleaning" />;
}
