import { Hero } from './components/Hero';
import { DonationInfo } from './components/DonationInfo';
import { Mission } from './components/Mission';
import { FairLocation } from './components/FairLocation';
import { LocationMap } from './components/LocationMap';
import { ProductShowcase } from './components/ProductShowcase';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FairLocation />
      <Mission /> 
      <DonationInfo />
      <LocationMap />
      <Footer />
    </div>
  );
}