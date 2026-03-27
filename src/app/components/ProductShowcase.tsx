import { ShoppingBasket, Leaf } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const products = [
  {
    id: 1,
    name: 'Legumes e Verduras Frescos',
    description: 'Direto da roça para sua mesa',
    image: 'https://images.unsplash.com/photo-1657288089316-c0350003ca49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBmYXJtJTIwcHJvZHVjZXxlbnwxfHx8fDE3NzQzODg5MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    name: 'Pães Artesanais',
    description: 'Feitos com carinho todos os dias',
    image: 'https://images.unsplash.com/photo-1670843837159-ddae2ec115d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMGJyZWFkJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NzQ0MDA2NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    name: 'Mel Natural',
    description: 'Puro e sem aditivos',
    image: 'https://images.unsplash.com/photo-1645549826194-1956802d83c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25leSUyMGphciUyMG5hdHVyYWx8ZW58MXx8fHwxNzc0MzQyMjk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    name: 'Ovos Caipiras',
    description: 'Frescos e saborosos',
    image: 'https://images.unsplash.com/photo-1664339307400-9c22e5f44496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ2dzJTIwYmFza2V0JTIwZnJlc2h8ZW58MXx8fHwxNzc0NDAwNjYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 5,
    name: 'Queijos Artesanais',
    description: 'Tradição e qualidade',
    image: 'https://images.unsplash.com/photo-1773919685006-2d329149f44b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlc2UlMjB3aGVlbCUyMGZhcm18ZW58MXx8fHwxNzc0NDAwNjY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 6,
    name: 'Conservas Caseiras',
    description: 'Sabor que lembra a vovó',
    image: 'https://images.unsplash.com/photo-1675795940449-5d44300dfbbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzZXJ2ZWQlMjBmcnVpdHMlMjBqYXJzfGVufDF8fHx8MTc3NDQwMDY2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function ProductShowcase() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="h-8 w-8 text-green-600" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900">
              Nossos Produtos da Roça
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-stone-700 max-w-3xl mx-auto">
            Parte da renda dos nossos produtos apoia a logística das doações e fortalece nossa missão solidária
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Product Image */}
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-stone-700">
                  {product.description}
                </p>
              </div>
              
              {/* Leaf decoration */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Leaf className="h-5 w-5 text-white" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Info Banner */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 sm:p-10 shadow-xl text-center">
            <ShoppingBasket className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Compre e Faça o Bem
            </h3>
            <p className="text-white text-lg leading-relaxed">
              Cada produto que você compra ajuda a manter nossa operação funcionando e 
              garante que mais cestas básicas cheguem às famílias que precisam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
