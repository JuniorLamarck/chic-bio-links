import { Link } from "react-router-dom";

interface LinkButtonProps {
  image: string;
  alt: string;
  to: string;
  delay?: number;
}

const LinkButton = ({ image, alt, to, delay = 0 }: LinkButtonProps) => {
  return (
    <a 
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full animate-fade-in hover-zoom max-w-[323px] md:max-w-[480px] mx-auto"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="rounded-lg overflow-hidden button-bg-shadow">
        <img 
          src={image} 
          alt={alt}
          className="w-full h-auto object-cover"
        />
      </div>
    </a>
  );
};

export default LinkButton;
