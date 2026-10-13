import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import ProcedurePin from '@/components/sections/treatment/ProcedurePin';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import Accordion, { AccordionItem } from '@/components/ui/Accordion';
import JsonLd from '@/components/ui/JsonLd';
import { CLINIC_INFO, SERVICES } from '@/lib/clinic-data';
import { generateFaqSchema } from '@/lib/seo';

const categoryImages: Record<string, { src: string; alt: string }> = {
  'roof-repairs': { src: '/images/nobre-roof-02.jpg', alt: 'Telha danificada que precisa de avaliação' },
  'gutter-cleaning': { src: '/images/nobre-roof-01.jpg', alt: 'Calha e telhado ondulado em manutenção' },
  'roof-renovation': { src: '/images/nobre-roof-03.jpg', alt: 'Estrutura de telhado em reforma' },
  'waterproofing': { src: '/images/nobre-roof-04.jpg', alt: 'Telhado ondulado em manutenção' },
  'roof-cleaning': { src: '/images/nobre-roof-07.jpg', alt: 'Telhado residencial de telhas cerâmicas' },
  'storm-damage': { src: '/images/nobre-roof-10.jpg', alt: 'Profissional trabalhando na calha do telhado' },
};

const categoryGalleries: Record<string, { src: string; alt: string }[]> = {
  'roof-repairs': [
    { src: '/images/nobre-roof-02.jpg', alt: 'Área de telha avaliada para reparo' },
    { src: '/images/nobre-roof-05.jpg', alt: 'Telhas removidas durante o trabalho' },
    { src: '/images/nobre-roof-06.jpg', alt: 'Equipe trabalhando no telhado' },
  ],
  'gutter-cleaning': [
    { src: '/images/nobre-roof-01.jpg', alt: 'Calha ao lado de telhado ondulado' },
    { src: '/images/nobre-roof-10.jpg', alt: 'Profissional trabalhando junto à calha' },
    { src: '/images/nobre-roof-06.jpg', alt: 'Equipe trabalhando em telhado' },
  ],
  'roof-renovation': [
    { src: '/images/nobre-roof-03.jpg', alt: 'Estrutura de madeira em reforma' },
    { src: '/images/nobre-roof-09.jpg', alt: 'Estrutura interna de telhado' },
    { src: '/images/nobre-roof-08.jpg', alt: 'Telhado residencial de telhas cerâmicas' },
  ],
  'waterproofing': [
    { src: '/images/nobre-roof-04.jpg', alt: 'Telhado ondulado' },
    { src: '/images/nobre-roof-01.jpg', alt: 'Calha e telhado em avaliação' },
    { src: '/images/nobre-roof-10.jpg', alt: 'Trabalho na linha do telhado' },
  ],
  'roof-cleaning': [
    { src: '/images/nobre-roof-07.jpg', alt: 'Telhado de telhas cerâmicas' },
    { src: '/images/nobre-roof-08.jpg', alt: 'Cobertura residencial com telhas cerâmicas' },
    { src: '/images/nobre-roof-06.jpg', alt: 'Equipe trabalhando sobre a cobertura' },
  ],
  'storm-damage': [
    { src: '/images/nobre-roof-05.jpg', alt: 'Telhas retiradas em área de trabalho' },
    { src: '/images/nobre-roof-06.jpg', alt: 'Equipe trabalhando no telhado' },
    { src: '/images/nobre-roof-11.png', alt: 'Profissionais trabalhando na estrutura de um telhado' },
  ],
};

const preparationTips = [
  {
    title: 'Descreva o que percebeu',
    description: 'Conte quando a infiltração, o transbordamento ou outro sinal aparece e quais áreas parecem afetadas.',
  },
  {
    title: 'Compartilhe fotos seguras',
    description: 'Imagens feitas do chão ou de dentro do imóvel podem ajudar a equipe a entender a situação antes da avaliação.',
  },
  {
    title: 'Informe detalhes do imóvel',
    description: 'Conte o tipo de cobertura, se houve reparos anteriores e como é o acesso ao telhado, caso saiba essas informações.',
  },
];

export default function ProductCategoryPage({ slug }: { slug: string }) {
  const category = SERVICES.find((item) => item.slug === slug);
  if (!category) return null;

  const image = categoryImages[slug] || categoryImages['roof-repairs'];
  const gallery = categoryGalleries[slug] || categoryGalleries['roof-repairs'];
  const relatedServices = SERVICES.filter((item) => item.slug !== slug).slice(0, 3);
  const faqItems: AccordionItem[] = category.faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
    relatedLink: { href: '/contact/', label: 'Fale com a equipe →' },
  }));

  return (
    <main className="w-full bg-paper">
      <JsonLd data={generateFaqSchema(faqItems)} />

      <section className="border-b border-mist bg-paper-secondary py-14 md:py-20">
        <div className="mx-auto grid max-w-site grid-cols-1 items-center gap-10 px-6 md:px-12 lg:grid-cols-2">
          <div>
            <Breadcrumbs items={[{ name: category.name, path: `/${slug}/` }]} />
            <AnimateOnScroll animation="fade-right">
              <span className="mb-3 mt-8 block font-body text-13 font-medium uppercase tracking-wider text-brand">Nobre Telhados Go · Goiás</span>
              <h1 className="font-display text-41 text-forest-ink md:text-55">{category.name}</h1>
              <p className="mt-5 max-w-xl font-body text-17 leading-relaxed text-forest-light">{category.shortDescription}</p>
              <p className="mt-4 max-w-xl font-body text-15 leading-relaxed text-forest-light">A equipe conversa com você, avalia as condições do telhado e combina o escopo e o orçamento antes de começar.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} variant="forest" size="lg">Ligar para a equipe</Button>
                <Link href="/contact/" className="inline-flex min-h-12 items-center rounded-pill border border-mist px-6 font-body text-15 text-forest-ink hover:border-brand">Fale conosco</Link>
              </div>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="zoom-in" duration={0.8}>
            <div className="relative aspect-[4/3] overflow-hidden border border-mist bg-paper shadow-sm">
              <Image src={image.src} alt={image.alt} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="border-b border-mist py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <AnimateOnScroll animation="fade-up">
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Quando pedir uma avaliação</span>
            <h2 className="max-w-3xl font-display text-33 text-forest-ink md:text-41">Sinais de que o telhado pode precisar de atenção</h2>
            <p className="mt-5 max-w-2xl font-body text-15 leading-relaxed text-forest-light md:text-17">Os sinais abaixo podem ter mais de uma causa. Uma avaliação ajuda a entender as condições do telhado e as opções para o imóvel.</p>
          </AnimateOnScroll>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {category.indications.map((item, index) => (
              <AnimateOnScroll key={item.condition} animation="fade-up" delay={index * 0.1}>
                <article className="h-full border border-mist bg-paper p-6 md:p-7">
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-paper-secondary font-display text-17 text-metallicGold">0{index + 1}</span>
                  <h3 className="font-display text-21 text-forest-ink">{item.condition}</h3>
                  <p className="mt-3 font-body text-15 leading-relaxed text-forest-light">{item.explanation}</p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-secondary py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <AnimateOnScroll animation="fade-right" className="lg:col-span-5">
              <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">O que avaliamos</span>
              <h2 className="font-display text-33 text-forest-ink md:text-41">Um serviço adequado às condições do telhado</h2>
              <p className="mt-5 font-body text-15 leading-relaxed text-forest-light md:text-17">Cada cobertura tem materiais, acesso e necessidades diferentes. A equipe analisa os pontos observados e combina com você o que será realizado.</p>
            </AnimateOnScroll>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {category.benefits.map((benefit, index) => (
                <AnimateOnScroll key={benefit} animation="fade-up" delay={index * 0.08}>
                  <div className="flex h-full gap-4 border border-mist bg-paper p-5">
                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/15 font-body text-13 font-semibold text-metallicGold">✓</span>
                    <p className="font-body text-15 leading-relaxed text-forest-ink">{benefit}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProcedurePin
        steps={category.procedureSteps}
        title={`Como funciona ${category.name.toLowerCase()}`}
        subtitle="Do primeiro contato à revisão final"
        className="bg-paper"
      />

      <section className="border-b border-mist py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <AnimateOnScroll animation="fade-up">
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Prepare-se para conversar com a equipe</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">Informações que ajudam na avaliação</h2>
            <p className="mt-5 max-w-2xl font-body text-15 leading-relaxed text-forest-light md:text-17">Você não precisa acessar o telhado para descrever o que está acontecendo. Alguns detalhes simples ajudam a equipe a entender melhor a sua necessidade.</p>
          </AnimateOnScroll>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {preparationTips.map((tip, index) => (
              <AnimateOnScroll key={tip.title} animation="zoom-in" delay={index * 0.1}>
                <article className="h-full border border-mist bg-paper-secondary p-6 md:p-7">
                  <h3 className="font-display text-21 text-forest-ink">{tip.title}</h3>
                  <p className="mt-3 font-body text-15 leading-relaxed text-forest-light">{tip.description}</p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-mist bg-paper-secondary py-16 md:py-24">
        <div className="mx-auto grid max-w-site gap-10 px-6 md:px-12 lg:grid-cols-12 lg:items-start">
          <AnimateOnScroll animation="fade-right" className="lg:col-span-5">
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Orçamento transparente</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">O que pode influenciar o valor?</h2>
            <p className="mt-5 font-body text-15 leading-relaxed text-forest-light md:text-17">O orçamento é preparado depois que a equipe entende o serviço necessário. Assim, o escopo e os custos podem ser conversados antes do início.</p>
            <p className="mt-4 border-l-2 border-brand bg-paper p-4 font-body text-15 leading-relaxed text-forest-ink">{category.costTransparency.note}</p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" className="lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="border border-mist bg-paper p-6 md:p-7">
                <h3 className="font-display text-21 text-forest-ink">Fatores considerados</h3>
                <ul className="mt-5 space-y-3 font-body text-15 leading-relaxed text-forest-light">
                  {category.costTransparency.factors.map((factor) => <li key={factor} className="flex gap-3"><span className="text-metallicGold">•</span><span>{factor}</span></li>)}
                </ul>
              </div>
              <div className="border border-mist bg-paper p-6 md:p-7">
                <h3 className="font-display text-21 text-forest-ink">O que será combinado</h3>
                <ul className="mt-5 space-y-3 font-body text-15 leading-relaxed text-forest-light">
                  {category.costTransparency.whatIsIncluded.map((item) => <li key={item} className="flex gap-3"><span className="text-metallicGold">•</span><span>{item}</span></li>)}
                </ul>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="border-b border-mist py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <AnimateOnScroll animation="fade-up">
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Registros de telhados</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">Exemplos de serviços e coberturas</h2>
            <p className="mt-4 max-w-2xl font-body text-15 leading-relaxed text-forest-light">Imagens fornecidas pela Nobre Telhados Go. Cada projeto é diferente; o escopo do serviço é definido após a avaliação.</p>
          </AnimateOnScroll>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {gallery.map((item, index) => (
              <AnimateOnScroll key={item.src} animation="zoom-in" delay={index * 0.1}>
                <figure className="relative aspect-[4/3] overflow-hidden border border-mist bg-paper-secondary">
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-700 hover:scale-[1.03]" />
                </figure>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto grid max-w-site gap-10 px-6 md:px-12 lg:grid-cols-12">
          <AnimateOnScroll animation="fade-right" className="lg:col-span-4">
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Dúvidas frequentes</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">Sobre {category.name.toLowerCase()}</h2>
            <p className="mt-5 font-body text-15 leading-relaxed text-forest-light">Veja respostas iniciais sobre avaliação, orçamento e segurança. Para conversar sobre o seu imóvel, fale diretamente com a equipe.</p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" className="lg:col-span-8">
            <Accordion items={faqItems} />
          </AnimateOnScroll>
        </div>
      </section>

      <section className="border-t border-mist bg-paper-secondary py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <AnimateOnScroll animation="fade-up">
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Mais soluções</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">Outros serviços para o seu telhado</h2>
          </AnimateOnScroll>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {relatedServices.map((service, index) => (
              <AnimateOnScroll key={service.slug} animation="fade-up" delay={index * 0.1}>
                <Link href={`/${service.slug}/`} className="group block h-full border border-mist bg-paper p-6 transition-colors hover:border-brand md:p-7">
                  <h3 className="font-display text-21 text-forest-ink transition-colors group-hover:text-metallicGold">{service.name}</h3>
                  <p className="mt-3 font-body text-15 leading-relaxed text-forest-light">{service.shortDescription}</p>
                  <span className="mt-5 inline-block font-body text-13 font-medium text-forest underline underline-offset-4">Ver serviço →</span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-14 text-paper md:py-20">
        <AnimateOnScroll animation="fade-up" className="mx-auto flex max-w-site flex-col justify-between gap-7 px-6 sm:flex-row sm:items-center md:px-12">
          <div>
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-lime">Atendimento em Goiás</span>
            <h2 className="font-display text-26 md:text-33">Quer conversar sobre {category.name.toLowerCase()}?</h2>
            <p className="mt-2 max-w-2xl font-body text-15 leading-relaxed text-paper/75">Ligue para a equipe, conte o que observou e consulte a disponibilidade de avaliação na sua região.</p>
          </div>
          <Button href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} variant="lime" size="lg">Ligar: {CLINIC_INFO.contact.phone}</Button>
        </AnimateOnScroll>
      </section>
    </main>
  );
}
