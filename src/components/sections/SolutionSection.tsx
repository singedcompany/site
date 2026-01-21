import { Zap, DollarSign, Target, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Zap,
    title: "Aprenda Fazendo",
    description: "Aulas 100% práticas gravadas mostrando cada detalhe",
  },
  {
    icon: DollarSign,
    title: "Kit Acessível",
    description: "Lista de equipamentos de baixo custo para começar",
  },
  {
    icon: Target,
    title: "Clientes Prontos",
    description: "Estratégias de anúncios e scripts de vendas inclusos",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const SolutionSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 section-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 md:mb-12"
          >
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm mb-4 md:mb-6">
              <Zap className="w-4 h-4" />
              A SOLUÇÃO
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 px-4">
              O Método{" "}
              <span className="text-gradient">Ar Profissional 7D</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              Um passo a passo completo, do zero ao primeiro cliente pagante, 
              com aulas práticas, listas de ferramentas e scripts de vendas.
            </p>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-8 md:mb-10"
          >
            <div className="inline-flex items-center gap-3 bg-card rounded-2xl p-4 sm:p-5 shadow-xl border border-border/50">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-foreground">7 Dias</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Para dominar</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center text-center bg-card/50 rounded-2xl p-5 sm:p-6 border border-border/30 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
