import { X } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  "Acham que é muito difícil",
  "Não sabem quais ferramentas comprar",
  "Têm medo de errar na instalação",
  "Não sabem como conseguir clientes",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

export const ProblemSection = () => {
  return (
    <section className="py-16 md:py-24 section-alt">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 md:mb-10"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que a maioria das pessoas <span className="text-destructive">não começa?</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10"
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-3 md:gap-4 bg-card border border-destructive/20 rounded-xl p-4 md:p-5"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 md:w-5 md:h-5 text-destructive" />
                </div>
                <span className="text-foreground font-medium text-sm md:text-base">{problem}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card rounded-2xl p-6 md:p-8 border border-primary/20 text-center card-elevated"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full hero-gradient flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-foreground font-medium">
              "Foi por isso que eu criei um <strong className="text-primary">método simples e prático</strong> para você começar rápido."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
