import { Wrench, Droplets, Settings, CheckCircle2, Play } from "lucide-react";
import { motion } from "framer-motion";

const modules = [
  {
    icon: Droplets,
    title: "Módulo 1 — Limpeza e Higienização Profissional",
    description: "Domine as técnicas de limpeza que encantam os clientes",
    lessons: [
      "Desmontagem segura do evaporador e turbina",
      "Técnicas profissionais de limpeza com jato",
      "Eliminação de mau cheiro e bactérias",
      "Aplicação correta de bactericida",
      "Higienização de ar-condicionado automotivo",
      "Produtos recomendados e onde comprar barato",
    ],
    duration: "8 aulas práticas",
  },
  {
    icon: Settings,
    title: "Módulo 2 — Instalação Completa de Split",
    description: "Aprenda a instalar do zero com segurança",
    lessons: [
      "Furação de parede - técnica correta",
      "Tubulação de cobre passo a passo",
      "Conexão elétrica profissional",
      "Processo de vácuo e carga de gás",
      "Teste final e entrega ao cliente",
      "Como evitar os erros mais comuns",
    ],
    duration: "10 aulas práticas",
  },
  {
    icon: Wrench,
    title: "Módulo 3 — Vendas e Captação de Clientes",
    description: "Transforme seu conhecimento em dinheiro",
    lessons: [
      "Quanto cobrar por cada tipo de serviço",
      "Scripts de vendas prontos para WhatsApp",
      "Como criar anúncios no Facebook Ads",
      "Definindo o público certo para seus serviços",
      "Técnicas de negociação e fechamento",
      "Montando seu kit profissional de baixo custo",
    ],
    duration: "6 aulas práticas",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const ModulesSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 section-alt relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 md:mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm mb-4 md:mb-6">
              <Play className="w-4 h-4" />
              CONTEÚDO 100% PRÁTICO
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 px-4">
              3 Módulos que vão te transformar em{" "}
              <span className="text-gradient">Profissional</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              Aulas gravadas mostrando cada detalhe na prática. Sem enrolação, 
              direto ao ponto para você começar a faturar rápido.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4 md:space-y-6"
          >
            {modules.map((module, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-card rounded-2xl md:rounded-3xl border border-border/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-5 sm:p-6 md:p-8"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-4 md:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl md:rounded-2xl hero-gradient flex items-center justify-center flex-shrink-0 shadow-lg">
                    <module.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2">
                      {module.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base mb-1">
                      {module.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary font-medium">
                      <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      {module.duration}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <div
                      key={lessonIndex}
                      className="flex items-start gap-2 sm:gap-3 text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm">{lesson}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Total lessons badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 md:mt-12 flex justify-center px-4"
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 bg-card rounded-xl md:rounded-2xl px-4 sm:px-8 py-4 border border-border/50 shadow-lg">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary">24+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Aulas Práticas</p>
              </div>
              <div className="w-px h-10 sm:h-12 bg-border hidden sm:block" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-accent">3</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Módulos</p>
              </div>
              <div className="w-px h-10 sm:h-12 bg-border hidden sm:block" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-success">7</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Dias p/ Aprender</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
