import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-900 via-green-900 to-stone-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo and Social */}
          <div>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/ladaroca_405?igsh=b3c1NjZzMnZwZnF3" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-orange-400 mb-4">
              Contato
            </h3>
            <div className="space-y-3">
              <a 
                href="tel:+5561985310492" 
                className="flex items-center gap-3 text-amber-100 hover:text-orange-400 transition-colors"
              >
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>(61) 98531-0492</span>
              </a>
              <div className="flex items-start gap-3 text-amber-100">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
                <span>
                  Qr 405 conjunto 02 lote 04<br />
                  Samambaia Norte<br />
                  Brasília - DF, 72319-202
                </span>
              </div>
            </div>
          </div>
          
          {/* WhatsApp CTA */}
          <div>
            <h3 className="text-xl font-semibold text-orange-400 mb-4">
              Fale Conosco
            </h3>
            <p className="text-amber-100 mb-4">
              Tire suas dúvidas ou saiba como ajudar
            </p>
            <Button 
              onClick={() => window.open('https://wa.me/5561985310492', '_blank')}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>
        
        {/* Bottom Section */}
        <div className="text-center text-sm text-amber-200">
          <p>
            &copy; {new Date().getFullYear()} Lá da Roça. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}