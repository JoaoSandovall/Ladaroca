import { Users, Heart, Home } from 'lucide-react';

export function Mission() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
              Quem Somos e Nossa Missão
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Content */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 sm:p-10 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-green-800 mb-3">
                    Uma Loja Familiar com Raízes na Terra
                  </h3>
                  <p className="text-stone-700 leading-relaxed">
                    Há mais de 10 anos, nossa família cultiva e comercializa produtos da roça – frescos, caseiros e cheios de sabor. 
                    O que começou como uma pequena loja de bairro cresceu com o carinho e a confiança dos nossos clientes. 
                    Acreditamos que o alimento é mais do que nutrição: é conexão, memória e cuidado.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 sm:p-10 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-green-800 mb-3">
                    Por Que Decidimos Apoiar a Comunidade
                  </h3>
                  <p className="text-stone-700 leading-relaxed mb-4">
                    Ao longo dos anos, conhecemos de perto as dificuldades enfrentadas por muitas famílias do nosso bairro. 
                    Ver crianças sem acesso a uma alimentação básica nos moveu a fazer mais do que vender produtos – 
                    queremos ser parte da solução.
                  </p>
                  <p className="text-stone-700 leading-relaxed">
                    Transformamos nossa loja em um <strong className="text-orange-600">Hub de Solidariedade Comunitária</strong>. 
                    Aqui, você pode entregar doações, saber que elas serão bem cuidadas e distribuídas para quem mais precisa.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 sm:p-10 shadow-lg border-2 border-orange-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-amber-900 mb-3">
                    Nossa Visão
                  </h3>
                  <p className="text-stone-700 leading-relaxed">
                    Acreditamos em uma comunidade onde ninguém passa fome, onde o excedente de uns pode alimentar a necessidade de outros, 
                    e onde cada gesto de solidariedade fortalece os laços entre vizinhos. 
                    <span className="text-orange-600 font-semibold"> Juntos, somos mais fortes.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}