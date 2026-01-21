import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-6 md:py-8 bg-foreground"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-primary-foreground/60 text-xs sm:text-sm mb-2">
            © 2024 Formação Técnica Express em Ar-Condicionado. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-primary-foreground/40">
            <a href="#" className="hover:text-primary-foreground/60 transition-colors">
              Termos de Uso
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="#" className="hover:text-primary-foreground/60 transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
