import { Shield } from "lucide-react";
import { motion } from "framer-motion";

export const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-20 section-alt">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 card-elevated border border-success/20 flex flex-col md:flex-row items-center gap-6 md:gap-8"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0"
            >
              <Shield className="w-10 h-10 md:w-12 md:h-12 text-success" />
            </motion.div>
            <div className="text-center md:text-left">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2 md:mb-3">
                Garantia Incondicional de 7 Dias
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
                Se você não gostar do curso por qualquer motivo, basta enviar um e-mail em até 7 dias e devolvemos <strong>100% do seu dinheiro</strong>. Sem perguntas, sem burocracia.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
