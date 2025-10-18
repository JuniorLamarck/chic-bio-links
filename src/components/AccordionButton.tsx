import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface AccordionButtonProps {
  image: string;
  alt: string;
  value: string;
  content: string;
  delay?: number;
}

const AccordionButton = ({ image, alt, value, content, delay = 0 }: AccordionButtonProps) => {
  return (
    <div 
      className="w-full animate-fade-in max-w-[323px] md:max-w-[480px] mx-auto"
      style={{ animationDelay: `${delay}ms` }}
    >
      <AccordionItem value={value} className="border-0">
        <AccordionTrigger className="hover:no-underline p-0 [&[data-state=open]>div>img]:opacity-100 relative z-10">
          <div className="w-full rounded-2xl overflow-hidden button-bg-shadow hover-zoom">
            <img 
              src={image} 
              alt={alt}
              className="w-full h-auto object-cover"
            />
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-0 pb-0 relative z-0">
          <div className="glass-effect rounded-b-2xl p-6">
            <p className="text-foreground text-sm md:text-base leading-relaxed">
              {content}
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </div>
  );
};

export default AccordionButton;
