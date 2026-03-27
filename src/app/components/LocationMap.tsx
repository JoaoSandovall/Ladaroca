import { MapPin, Clock, Navigation } from 'lucide-react';
import { Button } from './ui/button';

export function LocationMap() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 mb-4">
            Onde Entregar sua Doação
          </h2>
          <p className="text-lg sm:text-xl text-stone-700 max-w-2xl mx-auto">
            Visite nossa loja e faça parte desta rede de solidariedade
          </p>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
          {/* Map Component */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.8!2d-48.100774!3d-15.874558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bd298a250f3bb%3A0xa7044537640f1923!2sL%C3%A1%20Da%20Ro%C3%A7a%20Produtos%20Caseiros%20E%20Naturais!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, aspectRatio: '4/3' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Lá da Roça"
                className="w-full h-full min-h-[400px]"
              />
            </div>
          </div>
          
          {/* Location Details */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-green-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-900 mb-2">
                    Endereço Completo
                  </h3>
                  <p className="text-stone-700 leading-relaxed">
                    Qr 405 conjunto 02 lote 04<br />
                    Samambaia Norte<br />
                    Brasília - DF<br />
                    CEP: 72319-202
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-900 mb-2">
                    Horário de Funcionamento
                  </h3>
                  <div className="space-y-1 text-stone-700">
                    <p><strong>Segunda a Sexta:</strong> 8h às 18h</p>
                    <p><strong>Sábado:</strong> 8h às 14h</p>
                    <p><strong>Domingo:</strong> Fechado</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-stone-200">
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                  onClick={() => window.open('https://www.google.com/maps/place/L%C3%A1+Da+Ro%C3%A7a+Produtos+Caseiros+E+Naturais/@-15.8781565,-48.1058058,16z/data=!4m10!1m2!2m1!1sla+da+ro%C3%A7a!3m6!1s0x935bd298a250f3bb:0xa7044537640f1923!8m2!3d-15.8746788!4d-48.1006157!15sCgtsYSBkYSByb8OnYVoNIgtsYSBkYSByb8OnYZIBEWhlYWx0aF9mb29kX3N0b3JlmgEkQ2hkRFNVaE5NRzluUzBWT2VqYzVTazgzYkdKTWJURkJSUkFC4AEA-gEECAAQPg!16s%2Fg%2F11fn7_6hfh?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                >
                  <Navigation className="mr-2 h-5 w-5" />
                  Abrir no Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}