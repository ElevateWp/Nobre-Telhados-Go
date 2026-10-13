import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeBeforeAfter() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <AnimateOnScroll animation="fade-right" duration={0.85} className="lg:col-span-5">
            <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
              Projetos da Nobre Telhados Go
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
              Reformas, reparos e limpeza de telhados
            </h2>
            <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">
              Confira alguns registros de serviços realizados pela equipe.
            </p>
            <Link
              href="tel:+5562994653540"
              className="font-body text-15 text-forest font-medium hover:underline underline-offset-4"
            >
              Fale com a equipe →
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" duration={0.85} className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/nobre-roof-02.jpg"
                  alt="Telha danificada durante avaliação para reparo"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-[#101820]/85 text-white font-body text-12 px-3 py-1">
                  Avaliação e reparo
                </span>
              </div>
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/nobre-roof-06.jpg"
                  alt="Profissionais trabalhando em um telhado"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-[#101820]/85 text-white font-body text-12 px-3 py-1">
                  Equipe em campo
                </span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
