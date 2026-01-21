import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Preciso ter experiência?",
    answer:
      "Não! O curso foi criado para quem está começando do zero. Você vai aprender passo a passo, desde os fundamentos até técnicas avançadas.",
  },
  {
    question: "Preciso de ferramentas caras?",
    answer:
      "Não. No módulo 2 você recebe uma lista completa de ferramentas com opções acessíveis. Você pode começar com um investimento inicial baixo e ir evoluindo conforme ganha dinheiro.",
  },
  {
    question: "Em quanto tempo posso ganhar dinheiro?",
    answer:
      "Muitos alunos fecham o primeiro serviço já na primeira ou segunda semana. O curso é focado em te colocar para trabalhar o mais rápido possível.",
  },
  {
    question: "Posso trabalhar por conta própria?",
    answer:
      "Sim! O curso é 100% focado em te preparar para trabalhar de forma autônoma. Você aprende não só a técnica, mas também como conseguir clientes e precificar seus serviços.",
  },
  {
    question: "Por quanto tempo tenho acesso ao curso?",
    answer:
      "Acesso vitalício! Uma vez que você compra, o curso é seu para sempre. Além disso, todas as atualizações futuras são gratuitas.",
  },
  {
    question: "E se eu tiver dúvidas durante o curso?",
    answer:
      "Você terá acesso ao nosso grupo exclusivo no WhatsApp onde pode tirar dúvidas diretamente comigo e com outros alunos.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 section-light">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 md:mb-12"
          >
            <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-xs sm:text-sm mb-4">
              DÚVIDAS FREQUENTES
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas <span className="text-gradient">frequentes</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card rounded-xl border border-border/50 overflow-hidden"
                >
                  <AccordionTrigger className="px-4 sm:px-6 py-4 sm:py-5 hover:no-underline hover:bg-muted/50 transition-colors text-left">
                    <span className="font-semibold text-foreground pr-4 text-sm sm:text-base">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 pb-4 sm:pb-5 text-muted-foreground text-sm sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
