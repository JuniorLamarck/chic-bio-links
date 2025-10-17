import LinkButton from "@/components/LinkButton";
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
        {/* Header com logo */}
        <header className="pt-8 pb-12 px-4 flex justify-center">
          <img 
            src={logo} 
            alt="Logo"
            className="w-32 h-32 md:w-42 md:h-42 lg:w-52 lg:h-52 object-contain animate-fade-in"
          />
        </header>

        {/* Container dos botões */}
        <main className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 buttons-container-shadow px-[5px] py-8 rounded-3xl">
            <LinkButton 
              image={botao01}
              alt="Entre em contato"
              to="/contato"
              delay={100}
            />
            
            <LinkButton 
              image={botao02}
              alt="Plano de saúde e suas negativas"
              to="/plano-saude"
              delay={200}
            />
            
            <LinkButton 
              image={botao03}
              alt="Autismo e seus direitos"
              to="/autismo"
              delay={300}
            />
            
            <LinkButton 
              image={botao04}
              alt="Quem sou eu"
              to="/sobre"
              delay={400}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
