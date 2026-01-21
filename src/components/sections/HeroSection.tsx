import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const CHECKOUT_URL = "https://pay.kiwify.com.br/12V2Qkq";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden hero-gradient py-16 md:py-24 lg:py-32">
      {/* Modern gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse-soft" />
        <div className="absolute bottom-0 right-1/4 w-72 md:w-[500px] h-72 md:h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-card/10 backdrop-blur-md border border-card/20 rounded-full px-3 sm:px-4 py-2 mb-6 md:mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-primary-foreground/90 text-xs sm:text-sm font-medium">
              Vagas Limitadas — Turma de Janeiro
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary-foreground leading-tight mb-4 md:mb-6"
          >
            Aprenda a Instalar, Limpar e Higienizar Ar-Condicionado em{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-accent">7 Dias</span>
              <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-accent/30 -z-0 rounded-full" />
            </span>{" "}
            — Mesmo Começando do Zero
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-8 md:mb-10 max-w-2xl mx-auto px-4"
          >
            Método prático, direto ao ponto e focado em ganhar dinheiro desde a primeira semana.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mb-8 md:mb-10 px-4"
          >
            <Button
              variant="cta"
              size="xl"
              className="w-full sm:w-auto group text-sm sm:text-base"
              asChild
            >
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                Quero Garantir Minha Vaga Agora
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 text-primary-foreground/70 text-xs sm:text-sm px-4"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
              <span>Acesso Vitalício</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
              <span>Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
              <span>Suporte no WhatsApp</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};
