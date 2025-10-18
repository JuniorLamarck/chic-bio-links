import LinkButton from "@/components/LinkButton";
import AccordionButton from "@/components/AccordionButton";
import { Accordion } from "@/components/ui/accordion";
import botao01 from "@/assets/botao01.png";
import botao02 from "@/assets/botao02.png";
import botao03 from "@/assets/botao03.png";
import botao04 from "@/assets/botao04.png";
import logo from "@/assets/logo.png";
import fundo from "@/assets/fundo.png";

const Index = () => {
  return (
    <div className="min-h-screen noise-bg relative">
      {/* Background decorativo */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <img 
          src={fundo} 
          alt="Background decorativo"
          className="absolute left-0 top-0 h-full w-auto object-cover object-left opacity-40"
        />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10">
        {/* Logo */}
        <div className="pt-8 pb-6 px-4 flex justify-center">
          <img 
            src={logo} 
            alt="Logo"
            className="w-32 h-32 md:w-[270px] md:h-[270px] lg:w-[326px] lg:h-[326px] object-contain animate-fade-in"
          />
        </div>

        {/* Container dos botões */}
        <main className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
            <LinkButton 
              image={botao01}
              alt="Entre em contato"
              to="https://wa.me/message/A46TTJMTGMA3B1"
              delay={100}
            />
            
            <Accordion type="single" collapsible className="space-y-4 md:space-y-6">
              <AccordionButton 
                image={botao02}
                alt="Plano de saúde e suas negativas"
                value="plano-saude"
                content="Informações sobre planos de saúde e como lidar com negativas de procedimentos e tratamentos. Entenda seus direitos e como proceder em casos de recusa."
                delay={200}
              />
              
              <AccordionButton 
                image={botao03}
                alt="Autismo e seus direitos"
                value="autismo"
                content="Conheça os direitos das pessoas com autismo e suas famílias. Informações sobre tratamentos, educação inclusiva e benefícios garantidos por lei."
                delay={300}
              />
              
              <AccordionButton 
                image={botao04}
                alt="Quem sou eu"
                value="sobre"
                content="Saiba mais sobre minha trajetória profissional, experiência na área jurídica e como posso ajudar você e sua família."
                delay={400}
              />
            </Accordion>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
