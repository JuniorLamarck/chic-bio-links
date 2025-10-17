import { Link } from "react-router-dom";

interface LinkButtonProps {
  image: string;
  alt: string;
  to: string;
  delay?: number;
}

const LinkButton = ({ image, alt, to, delay = 0 }: LinkButtonProps) => {
  return (
    <Link 
      to={to}
      className="block w-full animate-fade-in hover-zoom max-w-[384px] md:max-w-[480px] mx-auto"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="rounded-3xl overflow-hidden button-bg-shadow">
        <img 
          src={image} 
          alt={alt}
          className="w-full h-auto object-cover"
        />
      </div>
    </Link>
  );
};

export default LinkButton;
