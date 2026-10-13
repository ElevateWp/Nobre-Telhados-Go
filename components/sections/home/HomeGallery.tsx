import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const GALLERY_IMAGES = [
  { src: '/images/nobre-roof-01.jpg', alt: 'Calha e telhado ondulado em uma inspeção' },
  { src: '/images/nobre-roof-02.jpg', alt: 'Dano visível em uma telha durante a avaliação' },
  { src: '/images/nobre-roof-03.jpg', alt: 'Estrutura de madeira preparada para reforma do telhado' },
  { src: '/images/nobre-roof-04.jpg', alt: 'Telhado ondulado em serviço de manutenção' },
  { src: '/images/nobre-roof-05.jpg', alt: 'Resíduos de telhas removidas durante o reparo' },
  { src: '/images/nobre-roof-06.jpg', alt: 'Profissionais realizando reparo em telhado' },
  { src: '/images/nobre-roof-07.jpg', alt: 'Telhado de telhas cerâmicas' },
  { src: '/images/nobre-roof-08.jpg', alt: 'Telhado residencial com telhas cerâmicas' },
  { src: '/images/nobre-roof-09.jpg', alt: 'Estrutura de telhado com acabamento em madeira' },
  { src: '/images/nobre-roof-10.jpg', alt: 'Profissional trabalhando na calha do telhado' },
  { src: '/images/nobre-roof-11.png', alt: 'Equipe trabalhando na estrutura de um telhado' },
];

export default function HomeGallery() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#F5B800] block mb-2 font-medium uppercase tracking-wider">
            Nobre Telhados Go
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#202124]">
            Serviços e projetos de telhados
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-6">
          {GALLERY_IMAGES.slice(0, 2).map((item, index) => (
            <AnimateOnScroll
              key={item.src}
              animation={index === 0 ? 'fade-right' : 'fade-down'}
              duration={0.85}
              className={`${index === 0 ? 'md:col-span-5' : 'md:col-span-7'} min-h-[300px] md:min-h-[420px] relative bg-[#F5F7FA] overflow-hidden border border-[#E1E5EA] shadow-sm`}
            >
              <MediaParallax speed={index === 0 ? 0.06 : 0.08} className="w-full h-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </MediaParallax>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {GALLERY_IMAGES.slice(2).map((item, index) => (
            <AnimateOnScroll
              key={item.src}
              animation="zoom-in"
              duration={0.8}
              delay={(index % 3) * 0.1}
              className="aspect-[4/3] relative bg-[#F5F7FA] overflow-hidden border border-[#E1E5EA] shadow-sm"
            >
              <MediaParallax speed={0.05 + (index % 3) * 0.01} className="w-full h-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </MediaParallax>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
