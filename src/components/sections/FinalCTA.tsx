import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CHECKOUT_URL = "https://pay.kiwify.com.br/12V2Qkq";

export const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-card rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-card rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 md:mb-6">
            Pronto para começar sua nova carreira?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-8 md:mb-10 max-w-2xl mx-auto px-4">
            Junte-se a centenas de alunos que já estão faturando com serviços de ar-condicionado.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button variant="cta" size="xl" className="w-full sm:w-auto text-sm sm:text-base" asChild>
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                Quero Garantir Minha Vaga Agora
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </a>
            </Button>
          </motion.div>

          <p className="text-primary-foreground/60 text-xs sm:text-sm mt-6">
            🔒 Pagamento 100% seguro • Garantia de 7 dias
          </p>
        </motion.div>
      </div>
    </section>
  );
};
