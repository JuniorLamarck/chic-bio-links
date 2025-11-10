import LinkButton from "@/components/LinkButton";
import AccordionButton from "@/components/AccordionButton";
import ReviewsButton from "@/components/ReviewsButton";
import { Accordion } from "@/components/ui/accordion";
import { EtherealShadow } from "@/components/ui/ethereal-shadow";
import botao01 from "@/assets/botao01.png";
import botao02 from "@/assets/botao02.png";
import botao03 from "@/assets/botao03.png";
import botao04 from "@/assets/botao04.png";
import botao05 from "@/assets/botao05.png";
import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <div className="min-h-screen noise-bg relative">
      {/* Background animado */}
      <EtherealShadow
        color="rgba(40, 40, 40, 0.9)"
        animation={{ scale: 95, speed: 8 }}
        noise={{ opacity: 0.7, scale: 1 }}
        sizing="fill"
      />
      
      {/* Overlay escuro para contraste */}
      <div className="fixed inset-0 bg-black/30 pointer-events-none z-[1]" />

      {/* Conteúdo principal */}
      <div className="relative z-10">
        {/* Logo */}
        <div className="pt-8 pb-5 px-4 flex justify-center">
          <img 
            src={logo} 
            alt="Logo"
            className="w-[216px] h-[216px] md:w-[270px] md:h-[270px] lg:w-[326px] lg:h-[326px] object-contain animate-fade-in"
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
                    <h1 className="text-xl md:text-2xl font-bold mb-4">Te ajuda a defender o que é seu por direito</h1>

                    <p>
                      Prazer, me chamo Odilon Calixto M. Júnior
                      <em> (mas pode me chamar de <strong>Júnior</strong>)</em>.
                      Sabe quando as pessoas falam que o diferencial do trabalho delas é a
                      "qualidade do serviço que entregam"? Então, pra mim, um
                      <strong> serviço de qualidade, é o mínimo que um profissional deve entregar</strong>.
                    </p>

                    <p>
                      Em todos os meus anos como advogado, meu trabalho é conduzido pela
                      <strong> escuta, método e direção</strong>. Antes de qualquer medida, é necessário
                      compreender a história, identificar o que é urgente e o que não pode esperar.
                    </p>

                    <p>
                      <strong>Meu compromisso é transformar preocupação em clareza com acolhimento e objetividade.</strong>
                    </p>

                    <p>
                      Gosto de priorizar a comunicação clara e previsível, até porque, meu trabalho é guiado com
                      planejamento estratégico, prazos definido e registro de decisões. Antecipar riscos, organizar documentos
                      e alinhar expectativas, são cuidados que tornam o processo mais leve e eficiente para cada pessoa que me procura.
                    </p>

                    <p>
                      Gosto de dizer que minha postura é determinada e responsável, até porque, quando assumo qualquer demanda,
                      atuo com <strong>foco e critério, respeitando a ética e a viabilidade jurídica</strong>. A proposta é orientar
                      com calma, atuar com firmeza quando necessário e conduzir o que precisa ser feito com respeito e transparência,
                      para que cada pessoa que me procura avance com decisões bem orientadas.
                    </p>
                  </section>
                }
                delay={400}
              />
            </Accordion>

            <ReviewsButton 
              image={botao05}
              alt="Veja as avaliações"
              delay={500}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
