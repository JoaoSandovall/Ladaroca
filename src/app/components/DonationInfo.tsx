import { Heart, Package, ShirtIcon, Droplets, Clock, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function DonationInfo() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full mb-6">
              <Heart className="h-8 w-8 text-white" fill="white" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Ponto de Arrecadação de Doações
            </h2>
            <p className="text-lg sm:text-xl text-stone-700 leading-relaxed max-w-3xl mx-auto">
              Nossa loja em Samambaia agora é um ponto oficial para arrecadação de doações. Aproveite sua vinda para buscar seus produtos e ajude quem precisa.
            </p>
          </motion.div>

          {/* What We're Receiving */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-green-900 mb-8 text-center">
              O que estamos recebendo:
            </h3>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {/* Food */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-orange-200 hover:border-orange-400 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Package className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-green-900">Alimentos</h4>
                </div>
                <p className="text-stone-700">
                  Cestas básicas e itens não perecíveis.
                </p>
              </div>

              {/* Clothing */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-orange-200 hover:border-orange-400 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShirtIcon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-green-900">Vestuário</h4>
                </div>
                <p className="text-stone-700">
                  Roupas, calçados e cobertores em bom estado.
                </p>
              </div>

              {/* Hygiene */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-orange-200 hover:border-orange-400 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Droplets className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-green-900">Higiene</h4>
                </div>
                <p className="text-stone-700">
                  Produtos de limpeza e higiene pessoal.
                </p>
              </div>
            </div>
          </motion.div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl p-8 sm:p-10 border-2 border-green-200"
          >
            <p className="text-lg text-stone-700 mb-8 leading-relaxed">
              Nossa loja em Samambaia agora tem um espaço reservado para doações diretas de alimentos, roupas e itens básicos.
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-green-900 mb-6">
              Como funciona:
            </h3>

            <div className="space-y-6 mb-8">
              <div className="bg-white/60 rounded-xl p-6">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  Para quem precisa:
                </h4>
                <p className="text-stone-700 leading-relaxed">
                  Os itens doados ficam disponíveis no balcão/prateleira. É só chegar e pegar o que for necessário para o seu uso.
                </p>
              </div>

              <div className="bg-white/60 rounded-xl p-6">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  Para quem quer ajudar:
                </h4>
                <p className="text-stone-700 leading-relaxed">
                  Basta deixar sua doação (cesta básica, agasalho, higiene) no ponto indicado.
                </p>
              </div>

              <div className="bg-white/60 rounded-xl p-6">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  Sem burocracia:
                </h4>
                <p className="text-stone-700 leading-relaxed">
                  A loja apenas cede o espaço para a comunidade se ajudar. A gestão é direta entre quem doa e quem precisa.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-green-900 mb-2">
                    Local de Entrega
                  </h4>
                  <p className="text-stone-700">
                    Qr 405 conjunto 02 lote 04<br />
                    Samambaia Norte<br />
                    Brasília - DF, 72319-202
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-green-900 mb-2">
                    Horário
                  </h4>
                  <p className="text-stone-700">
                    Segunda a Sábado<br />
                    das 7:30 às 18:30
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}