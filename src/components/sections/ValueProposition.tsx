import { Wrench, Droplets, Shield } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Wrench,
    title: "Instalação Profissional",
    items: [
      "Furação de parede",
      "Tubulação de cobre",
      "Vácuo do sistema",
      "Teste final e entrega",
    ],
  },
  {
    icon: Droplets,
    title: "Limpeza Técnica Completa",
    items: [
      "Desmontagem segura",
      "Limpeza do evaporador e turbina",
      "Limpeza do dreno",
      "Montagem e teste",
    ],
  },
  {
    icon: Shield,
    title: "Higienização e Bactericida",
    items: [
      "Eliminação de mau cheiro",
      "Aplicação correta de produtos",
      "Higienização automotiva (bônus)",
      "Certificação de qualidade",
    ],
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

export const ValueProposition = () => {
  return (
    <section className="py-16 md:py-24 section-light">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que você vai aprender <span className="text-gradient">na prática</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Conteúdo completo e direto ao ponto para você dominar os 3 pilares do serviço de ar-condicionado
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-2xl p-6 md:p-8 card-elevated border border-border/50"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl hero-gradient flex items-center justify-center mb-4 md:mb-6">
                <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">
                {feature.title}
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 md:gap-3 text-muted-foreground text-sm md:text-base">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-success mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
