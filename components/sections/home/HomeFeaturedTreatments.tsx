import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const FEATURED = [
  {
    eyebrow: 'Reformas e reparos',
    title: 'Avaliação e orçamento',
    description: 'Avaliamos as condições do telhado e explicamos o serviço indicado antes de começar.',
    image: '/images/nobre-roof-03.jpg',
    alt: 'Estrutura de madeira preparada para reforma do telhado',
  },
  {
    eyebrow: 'Limpeza e manutenção',
    title: 'Telhados e calhas',
    description: 'Removemos resíduos acumulados e verificamos os pontos visíveis que precisam de atenção.',
    image: '/images/nobre-roof-10.jpg',
    alt: 'Profissional trabalhando na calha do telhado',
  },
];

export default function HomeFeaturedTreatments() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-brand block mb-2 font-medium uppercase tracking-wider">Nossos serviços</span>
          <h2 className="font-display text-33 md:text-41 text-forest-ink">Soluções para cuidar do telhado</h2>
        </AnimateOnScroll>
        <div className="flex flex-col space-y-20">
          {FEATURED.map((item, index) => (
            <div key={item.title} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <AnimateOnScroll animation="fade-right" duration={0.9} className={`lg:col-span-6 ${index === 0 ? 'order-2 lg:order-1' : ''}`}>
                <span className="font-body text-13 text-forest-ink uppercase tracking-wider block mb-2 font-medium">{item.eyebrow}</span>
                <h3 className="font-display text-26 md:text-33 text-forest-ink mb-4">{item.title}</h3>
                <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">{item.description}</p>
                <div className="p-4 bg-paper-secondary border-l-4 border-brand mb-6 rounded-sm font-body text-13 text-forest-ink/80">
                  Atendimento ágil, cordial e pontual. Serviço e prazo são combinados após a avaliação.
                </div>
                <Button href="tel:+5562994653540" variant="ghost" size="md">Fale com a equipe</Button>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-left" duration={0.9} className={`lg:col-span-6 ${index === 0 ? 'order-1 lg:order-2' : ''}`}>
                <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                  <Image src={item.image} alt={item.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                </div>
              </AnimateOnScroll>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
