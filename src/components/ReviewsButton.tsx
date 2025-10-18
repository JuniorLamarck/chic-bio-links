import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReviewsButtonProps {
  image: string;
  alt: string;
  delay?: number;
}

const ReviewsButton = ({ image, alt, delay = 0 }: ReviewsButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
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
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
          <DialogHeader className="p-4 pb-0">
            <div className="flex items-center justify-between">
              <DialogTitle>Avaliações Google</DialogTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>
          <div className="w-full h-[70vh] overflow-auto">
            <iframe
              src="https://www.google.com/search?q=Odilon+Calixto+Malaquias+J%C3%BAnior&sca_esv=1c2cd5bb0b93bb44&source=hp&ei=n6XzaP6cAdGq1sQP6q_C4AY&iflsig=AOw8s4IAAAAAaPOzryuysoPbS2imgsxfeTmtLa8CAfge&ved=0ahUKEwi-6LaP_K2QAxVRlZUCHeqXEGwQ4dUDCA4&uact=5&oq=Odilon+Calixto+Malaquias+J%C3%BAnior&gs_lp=Egdnd3Mtd2l6IiBPZGlsb24gQ2FsaXh0byBNYWxhcXVpYXMgSsO6bmlvcjIFEAAY7wUyBRAAGO8FMgUQABjvBTIFEAAY7wUyCBAAGIAEGKIESMc1UABYjzFwAXgAkAEBmAGKAaAB0RyqAQQxLjMwuAEDyAEA-AEBmAIfoAKfHMICCxAuGIAEGLEDGIMBwgILEAAYgAQYsQMYgwHCAggQABiABBixA8ICERAuGIAEGLEDGNEDGIMBGMcBwgIFEC4YgATCAgUQABiABMICCBAuGIAEGLEDwgIOEAAYgAQYsQMYgwEYigXCAg4QLhiABBixAxjRAxjHAcICCxAuGIAEGMcBGK8BwgILEC4YgAQYsQMY1ALCAgYQABgWGB7CAgIQJsICBRAhGKABwgIHECEYoAEYCpgDAJIHBDEuMzCgB76yAbIHBDAuMzC4B5scwgcHOC4xMy4xMMgHMg&sclient=gws-wiz&sei=pqXzaMi1HMnU1sQPkry_iQ8#lrd=0xb1a7891768e495:0x280fbfd1b44d44f5,1,,,,"
              className="w-full h-full border-0"
              title="Avaliações Google"
              loading="lazy"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ReviewsButton;
