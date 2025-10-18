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
        <div className="pt-8 pb-5 px-4 flex justify-center">
          <img 
            src={logo} 
            alt="Logo"
            className="w-[166px] h-[166px] md:w-[270px] md:h-[270px] lg:w-[326px] lg:h-[326px] object-contain animate-fade-in"
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
                content={
                  <section className="sobre-mim space-y-4">
                    <p>Prazer, me chamo <strong>Odilon Calixto M. Júnior</strong> <em>(mas pode me chamar de Júnior)</em>, sou advogado e conduzo cada caso unindo <strong>escuta, método e direção</strong>. Antes de qualquer medida, paro para entender a história, o que é urgente e o que não pode esperar. Meu compromisso é transformar preocupação em clareza, com acolhimento, sem perder a objetividade.</p>

                    <p>No meu atendimento, <strong>comunicação clara</strong> e presença são prioridades. Explico cada etapa do caminho, por que ela é necessária e o que se espera dela. Sem juridiquês desnecessário, sem promessas vazias. A intenção é que <strong>cada pessoa que me procura</strong> se sinta segura para decidir, sabendo exatamente onde está pisando.</p>

                    <p>Trabalho com disciplina e previsibilidade. <strong>Planejamento estratégico, prazos definidos e registro de decisões</strong> fazem parte da rotina. Antecipar riscos, organizar documentos e alinhar expectativas não são detalhes, são cuidados que tornam o processo mais leve e eficiente para <strong>cada pessoa que me procura</strong>.</p>

                    <p>Minha postura é <strong>determinada e responsável</strong>. Quando assumo uma demanda, atuo com foco e critério, respeitando a ética e a viabilidade jurídica. Persistência, aqui, significa ir até onde for preciso, e do jeito certo, para proteger interesses legítimos.</p>

                    <p>Se a busca é por acolhimento sem abrir mão de profissionalismo, este é o lugar. A proposta é orientar com calma, <strong>atuar com firmeza</strong> quando necessário e conduzir o que precisa ser feito com respeito e transparência, para que <strong>cada pessoa que me procura</strong> avance com <strong>decisões bem orientadas</strong>.</p>
                  </section>
                }
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
