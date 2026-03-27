import { MapPin, ShoppingBasket, Navigation, Store, Clock } from 'lucide-react';
import { Button } from './ui/button';

export function FairLocation() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Store className="h-8 w-8 text-orange-600" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-900">
              Nossas Lojas
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-stone-700 max-w-2xl mx-auto">
            Visite-nos em uma de nossas quatro localizações em Brasília
          </p>
          <div className="w-24 h-1 bg-orange-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Loja Principal */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-green-200 hover:shadow-2xl transition-shadow duration-300 h-full">
            <div className="space-y-5 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center gap-3 pb-4 border-b-2 border-green-100">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Store className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-900">
                  Loja Principal
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-stone-600 text-sm leading-relaxed h-[60px] flex items-center">
                Nossa loja em Samambaia oferece produtos caseiros e naturais. Também serve como ponto de arrecadação de doações.
              </p>
              
              {/* Horário */}
              <div className="flex items-start gap-3 bg-green-50 p-3 rounded-lg h-[90px]">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <Clock className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-green-900 text-sm mb-1">
                    Horário de Funcionamento
                  </h4>
                  <p className="text-stone-700 text-xs">
                    <strong>Domingo a Domingo</strong><br />
                    8h às 19h
                  </p>
                </div>
              </div>
              
              {/* Endereço */}
              <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg h-[100px]">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-green-900 text-sm mb-1">
                    Endereço
                  </h4>
                  <p className="text-stone-700 text-xs leading-relaxed">
                    Qr 405 conjunto 02 lote 04<br />
                    Samambaia Norte<br />
                    Brasília - DF, 72319-202
                  </p>
                </div>
              </div>
              
              {/* Map */}
              <div className="relative rounded-xl overflow-hidden shadow-md mt-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.8!2d-48.100774!3d-15.874558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bd298a250f3bb%3A0xa7044537640f1923!2sL%C3%A1%20Da%20Ro%C3%A7a%20Produtos%20Caseiros%20E%20Naturais!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Loja Lá da Roça - Samambaia"
                  className="w-full"
                />
              </div>
              
              {/* Button */}
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm"
                size="lg"
                onClick={() => window.open('https://www.google.com/maps/place/L%C3%A1+Da+Ro%C3%A7a+Produtos+Caseiros+E+Naturais/@-15.8781565,-48.1058058,16z/data=!4m10!1m2!2m1!1sla+da+ro%C3%A7a!3m6!1s0x935bd298a250f3bb:0xa7044537640f1923!8m2!3d-15.8746788!4d-48.1006157!15sCgtsYSBkYSByb8OnYVoNIgtsYSBkYSByb8OnYZIBEWhlYWx0aF9mb29kX3N0b3JlmgEkQ2hkRFNVaE5NRzluUzBWT2VqYzVTazgzYkdKTWJURkJSUkFC4AEA-gEECAAQPg!16s%2Fg%2F11fn7_6hfh?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D', '_blank')}
              >
                <Navigation className="mr-2 h-4 w-4" />
                Ver no Mapa
              </Button>
            </div>
          </div>

          {/* Feira Vicente Pires */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-orange-200 hover:shadow-2xl transition-shadow duration-300 h-full">
            <div className="space-y-5 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center gap-3 pb-4 border-b-2 border-orange-100">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <ShoppingBasket className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-orange-900">
                  Feira Vicente Pires
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-stone-600 text-sm leading-relaxed h-[60px] flex items-center">
                Nossa banca na Feira do Produtor de Vicente Pires com produtos frescos, caseiros e direto da roça.
              </p>
              
              {/* Horário */}
              <div className="flex items-start gap-3 bg-orange-50 p-3 rounded-lg h-[90px]">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  <Clock className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-orange-900 text-sm mb-1">
                    Horário de Funcionamento
                  </h4>
                  <p className="text-stone-700 text-xs">
                    <strong>Terça a Domingo</strong><br />
                    7h às 17h
                  </p>
                </div>
              </div>
              
              {/* Endereço */}
              <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg h-[100px]">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-orange-900 text-sm mb-1">
                    Endereço
                  </h4>
                  <p className="text-stone-700 text-xs leading-relaxed">
                    St. Hab. Vicente Pires 04 A<br />
                    Vicente Pires<br />
                    Brasília - DF, 72006-253
                  </p>
                </div>
              </div>
              
              {/* Map */}
              <div className="relative rounded-xl overflow-hidden shadow-md mt-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.2!2d-48.015312!3d-15.8129879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a32337b765cdd%3A0x157113a959aae8d8!2sProducer%20Fair%20Vicente%20Pires!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Feira do Produtor Vicente Pires"
                  className="w-full"
                />
              </div>
              
              {/* Button */}
              <Button 
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm"
                size="lg"
                onClick={() => window.open('https://www.google.com/maps/place/Producer+Fair+Vicente+Pires/@-15.8130313,-48.0161146,19z/data=!4m12!1m5!3m4!2zMTXCsDQ4JzQ2LjgiUyA0OMKwMDAnNTUuMCJX!8m2!3d-15.8130074!4d-48.0152779!3m5!1s0x935a32337b765cdd:0x157113a959aae8d8!8m2!3d-15.8129879!4d-48.015312!16s%2Fg%2F1ptxlb_js?hl=en&entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D', '_blank')}
              >
                <Navigation className="mr-2 h-4 w-4" />
                Ver no Mapa
              </Button>
            </div>
          </div>

          {/* Feira 102 Sul */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-amber-200 hover:shadow-2xl transition-shadow duration-300 h-full">
            <div className="space-y-5 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center gap-3 pb-4 border-b-2 border-amber-100">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <ShoppingBasket className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-amber-900">
                  Feira 102 Sul
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-stone-600 text-sm leading-relaxed h-[60px] flex items-center">
                Toda quinta-feira você encontra nossa banca na Asa Sul com produtos frescos e caseiros.
              </p>
              
              {/* Horário */}
              <div className="flex items-start gap-3 bg-amber-50 p-3 rounded-lg h-[90px]">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                  <Clock className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-amber-900 text-sm mb-1">
                    Horário de Funcionamento
                  </h4>
                  <p className="text-stone-700 text-xs">
                    <strong>Quinta-feira</strong><br />
                    17h às 22h
                  </p>
                </div>
              </div>
              
              {/* Endereço */}
              <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg h-[100px]">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-amber-900 text-sm mb-1">
                    Endereço
                  </h4>
                  <p className="text-stone-700 text-xs leading-relaxed">
                    EQS 102/103 Sul Lote B<br />
                    Asa Sul<br />
                    Brasília - DF, 70330-400
                  </p>
                </div>
              </div>
              
              {/* Map */}
              <div className="relative rounded-xl overflow-hidden shadow-md mt-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.5!2d-47.891!3d-15.804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDQ4JzE0LjQiUyA0N8KwNTMnMjcuNiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Feira 102 Sul"
                  className="w-full"
                />
              </div>
              
              {/* Button */}
              <Button 
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm"
                size="lg"
                onClick={() => window.open('https://www.google.com/maps/search/Instituto%20Reciclando%20o%20Futuro/@-15.80402660369873,-47.89099884033203,17z?hl=en', '_blank')}
              >
                <Navigation className="mr-2 h-4 w-4" />
                Ver no Mapa
              </Button>
            </div>
          </div>

          {/* Feira 202 Sul */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-teal-200 hover:shadow-2xl transition-shadow duration-300 h-full">
            <div className="space-y-5 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center gap-3 pb-4 border-b-2 border-teal-100">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <ShoppingBasket className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-teal-900">
                  Feira 202 Sul
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-stone-600 text-sm leading-relaxed h-[60px] flex items-center">
                Toda sexta-feira você encontra nossa banca na 202 Sul com produtos frescos e caseiros.
              </p>
              
              {/* Horário */}
              <div className="flex items-start gap-3 bg-teal-50 p-3 rounded-lg h-[90px]">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                  <Clock className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-teal-900 text-sm mb-1">
                    Horário de Funcionamento
                  </h4>
                  <p className="text-stone-700 text-xs">
                    <strong>Sexta-feira</strong><br />
                    17h às 22h
                  </p>
                </div>
              </div>
              
              {/* Endereço */}
              <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg h-[100px]">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-teal-900 text-sm mb-1">
                    Endereço
                  </h4>
                  <p className="text-stone-700 text-xs leading-relaxed">
                    54V7+P7H Brasília<br />
                    Brasília - DF
                  </p>
                </div>
              </div>
              
              {/* Map */}
              <div className="relative rounded-xl overflow-hidden shadow-md mt-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.3!2d-47.8867699!3d-15.8056857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDQ4JzIwLjUiUyA0N8KwNTMnMTIuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Feira 202 Sul"
                  className="w-full"
                />
              </div>
              
              {/* Button */}
              <Button 
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm"
                size="lg"
                onClick={() => window.open('https://www.google.com/maps/place/15%C2%B048\'20.5%22S+47%C2%B853\'12.4%22W/@-15.8056857,-47.8893448,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-15.8056857!4d-47.8867699?hl=en&entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D', '_blank')}
              >
                <Navigation className="mr-2 h-4 w-4" />
                Ver no Mapa
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}