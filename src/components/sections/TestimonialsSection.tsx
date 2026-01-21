import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "João Silva",
    location: "São Paulo, SP",
    text: "Fechei minha primeira instalação na segunda semana! O método é muito claro e direto ao ponto.",
    rating: 5,
  },
  {
    name: "Carlos Oliveira",
    location: "Belo Horizonte, MG",
    text: "Já fiz R$ 2.400 no primeiro mês. Nunca imaginei que seria tão rápido começar a ganhar.",
    rating: 5,
  },
  {
    name: "Roberto Santos",
    location: "Rio de Janeiro, RJ",
    text: "Saí do zero para atender 3 clientes por semana. O suporte no WhatsApp ajuda muito!",
    rating: 5,
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

export const TestimonialsSection = () => {
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
          <span className="inline-block bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full text-xs sm:text-sm mb-4">
            PROVA SOCIAL
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Resultados de <span className="text-gradient">alunos</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Veja o que nossos alunos estão conquistando
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-card rounded-2xl p-5 md:p-6 card-elevated border border-border/50 relative"
            >
              <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-3 md:mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 md:w-5 md:h-5 text-accent fill-accent"
                  />
                ))}
              </div>
              <p className="text-foreground mb-4 md:mb-6 relative z-10 text-sm md:text-base">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold text-sm md:text-base">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm md:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
