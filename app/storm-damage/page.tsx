import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Reparo após tempestades',
  description: 'Avaliação e reparos em telhados após ventos e chuvas fortes.',
  pathname: '/storm-damage/',
});

export default function MaterialsDeliveryPage() {
  return <ProductCategoryPage slug="storm-damage" />;
}
