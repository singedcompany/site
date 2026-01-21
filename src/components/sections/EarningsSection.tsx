import { TrendingUp, Briefcase, Droplets, Wrench } from "lucide-react";
import { motion } from "framer-motion";

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

export const EarningsSection = () => {
  return (
    <section className="py-16 md:py-24 hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-card rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-card rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 md:mb-12"
          >
            <span className="inline-block bg-card/10 backdrop-blur-sm border border-card/20 text-primary-foreground font-semibold px-4 py-2 rounded-full text-xs sm:text-sm mb-4">
              POTENCIAL DE GANHO
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Quanto você pode ganhar?
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-10"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-card/10 backdrop-blur-sm border border-card/20 rounded-2xl p-6 md:p-8 text-center"
            >
              <Droplets className="w-10 h-10 md:w-12 md:h-12 text-accent mx-auto mb-3 md:mb-4" />
              <p className="text-primary-foreground/80 mb-2 text-sm md:text-base">
                2 higienizações/dia
              </p>
              <p className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground">
                R$ 300
              </p>
              <p className="text-primary-foreground/60 text-xs md:text-sm mt-2">por dia</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-card/10 backdrop-blur-sm border border-card/20 rounded-2xl p-6 md:p-8 text-center"
            >
              <Wrench className="w-10 h-10 md:w-12 md:h-12 text-accent mx-auto mb-3 md:mb-4" />
              <p className="text-primary-foreground/80 mb-2 text-sm md:text-base">
                1 instalação a cada 2 dias
              </p>
              <p className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground">
                R$ 600
              </p>
              <p className="text-primary-foreground/60 text-xs md:text-sm mt-2">por instalação</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.01 }}
            className="bg-card rounded-2xl p-6 md:p-8 text-center card-elevated"
          >
            <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-success mx-auto mb-3 md:mb-4" />
            <p className="text-muted-foreground mb-2 text-sm md:text-base">Média mensal</p>
            <p className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
              R$ 8.000 <span className="text-muted-foreground text-xl md:text-2xl">a</span> R$ 12.000
            </p>
            <p className="text-base md:text-lg text-muted-foreground flex items-center justify-center gap-2">
              <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
              Sem chefe. No seu próprio ritmo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
