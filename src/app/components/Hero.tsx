import { Heart } from 'lucide-react';
import logoImage from '../../assets/8fa5730c85133c6e604c796be1ccf4e810fac86e.png';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with earthy overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-green-50"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-amber-800 via-orange-700 to-green-800 bg-clip-text text-transparent">
                Lá da Roça
              </h1>
              
              <p className="text-lg sm:text-xl text-stone-700 mb-6 leading-relaxed">
                Somos produtores e distribuidores de alimentos caseiros legítimos. Nossa loja principal se situa na Samambaia. Além da loja física, estamos presentes semanalmente com bancadas próprias nas feiras de Vicente Pires e da Asa Sul.
              </p>
              
              <p className="text-lg sm:text-xl text-stone-700 leading-relaxed">
                Nosso compromisso é entregar o que há de melhor na produção artesanal diretamente para a mesa da comunidade, sem intermediários desnecessários e com foco na qualidade real do produto do campo.
              </p>
            </motion.div>
            
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-md aspect-square bg-gradient-to-br from-amber-100 to-orange-100 p-8 flex items-center justify-center">
                <img 
                  src={logoImage} 
                  alt="Lá da Roça" 
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#ffffff"/>
        </svg>
      </div>
    </section>
  );
}