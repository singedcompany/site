import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

const CHECKOUT_URL = "https://pay.kiwify.com.br/12V2Qkq";

const features = [
  "Acesso vitalício ao curso completo",
  "3 módulos com aulas práticas",
  "Lista de ferramentas com links",
  "Scripts de vendas prontos",
  "Estratégia de anúncios para Facebook",
  "Suporte no WhatsApp",
  "Atualizações gratuitas",
  "Certificado de conclusão",
];

export const PricingSection = () => {
  return (
    <section className="py-16 md:py-24 section-light">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 md:mb-10"
          >
            <span className="inline-block bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full text-xs sm:text-sm mb-4">
              OFERTA ESPECIAL
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Escolha seu <span className="text-gradient">plano</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-card rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 card-elevated border-2 border-primary/20 relative overflow-hidden"
          >
            {/* Popular badge */}
            <div className="absolute top-0 right-0 bg-accent text-accent-foreground font-bold px-4 sm:px-6 py-1.5 sm:py-2 rounded-bl-2xl text-xs sm:text-sm">
              MAIS POPULAR
            </div>

            <div className="text-center mb-6 md:mb-8 pt-4 sm:pt-0">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
                Formação Técnica Express em Ar-Condicionado
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Tudo que você precisa para começar a ganhar dinheiro
              </p>
            </div>

            <div className="flex flex-col items-center mb-6 md:mb-8">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-muted-foreground line-through text-base md:text-lg">
                  R$ 297
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-muted-foreground text-lg md:text-xl">R$</span>
                <span className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-foreground">
                  147
                </span>
              </div>
              <p className="text-muted-foreground mt-2 text-sm md:text-base">
                ou <strong>3x de R$ 57</strong>
              </p>
            </div>

            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-success" />
                  </div>
                  <span className="text-foreground text-sm md:text-base">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button variant="cta" size="xl" className="w-full text-sm sm:text-base" asChild>
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                Quero Começar Agora
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </a>
            </Button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 text-xs md:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Compra segura</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Acesso imediato</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
