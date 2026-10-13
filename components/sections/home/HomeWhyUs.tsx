import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const REASONS = [
  {
    title: 'Reforma de telhados',
    description: 'Serviços planejados para a condição e as necessidades de cada telhado.',
  },
  {
    title: 'Limpeza de telhados',
    description: 'Remoção cuidadosa de resíduos acumulados no telhado.',
  },
  {
    title: 'Limpeza de calhas',
    description: 'Limpeza para ajudar a manter o escoamento de água desobstruído.',
  },
  {
    title: 'Reparos',
    description: 'Avaliação de telhas, junções e pontos que precisam de manutenção.',
  },
];

export default function HomeWhyUs() {
  return (
    <section className="relative z-20 w-full bg-paper py-16 md:py-24 lg:py-32 overflow-hidden border-t border-mist">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Columns 1–6: Left-Aligned Editorial Reasons List */}
          <div className="lg:col-span-6">
            <AnimateOnScroll animation="fade-right" duration={0.85}>
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Serviços
              </span>
              <h2 className="font-display text-26 sm:text-33 md:text-41 text-forest-ink mb-8 md:mb-10 leading-tight">
                Cuidado profissional para o seu telhado
              </h2>

              <div className="divide-y divide-mist">
                {REASONS.map((reason, idx) => (
                  <AnimateOnScroll
                    key={reason.title}
                    animation="fade-up"
                    delay={idx * 0.1}
                    className="py-5 sm:py-6 first:pt-0 last:pb-0"
                  >
                    <h3 className="font-display text-17 sm:text-21 text-forest-ink mb-2">
                      {reason.title}
                    </h3>
                    <p className="font-body text-15 text-forest-ink/80 leading-relaxed">
                      {reason.description}
                    </p>
                  </AnimateOnScroll>
                ))}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Store and product photos */}
          <div className="lg:col-span-6">
            <AnimateOnScroll animation="fade-left" duration={0.85}>
              <div className="grid grid-cols-2 gap-3">
                {/* Main large image */}
                <div className="col-span-2 relative aspect-[16/10] bg-mist overflow-hidden border border-mist shadow-sm">
                  <MediaParallax speed={0.06} className="w-full h-full">
                    <Image
                    src="/images/nobre-roof-07.jpg"
                      alt="Telhado cerâmico em um projeto residencial"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </MediaParallax>
                  <div className="absolute bottom-3 left-3 bg-[#202124]/90 backdrop-blur-sm text-paper font-body text-12 px-3 py-1 font-medium">
                    Telhas e reformas
                  </div>
                </div>
                {/* Second product image */}
                <div className="col-span-2 sm:col-span-1 relative aspect-square bg-mist overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="/images/nobre-roof-01.jpg"
                    alt="Avaliação da calha junto ao telhado"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                {/* Product photo */}
                <div className="col-span-2 sm:col-span-1 relative aspect-square bg-[#F5F7FA] overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="/images/nobre-roof-10.jpg"
                    alt="Profissional trabalhando na calha do telhado"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#202124]/80 text-paper font-body text-12 px-3 py-2 text-center">
                    Limpeza e manutenção
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
