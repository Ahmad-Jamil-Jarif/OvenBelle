import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Navigation, Camera, Globe } from 'lucide-react';

const LOCATIONS = [
  {
    id: 1,
    name: "Flagship - Covent Garden",
    address: "24 Maiden Ln, London WC2E 7JS",
    phone: "+44 20 7240 1234",
    hours: "Mon-Sat: 8am - 8pm | Sun: 9am - 6pm",
    description: "Our charming original location in the heart of London. Stop by for our full menu of artisanal pastries and custom cake consultations.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyt0ZTL3yExZsOsdk8Qz-P6ArIXpL2cqAvtGARmzOL87HLaWoe-0AC8GJowCN2B08Z08NnUXfnap0dzExYr4uqCyFJOQ6O7sZDrmhP4waN8IEDI6MlPY6EvGDrD8rzfq7HD_Gt4BqrBKSCUJHfbKBB1wYaEfslWH4K_3xvmptwWTjOAzo--W1SXHngu654ByyODPdw3st-mLBvw1o4qzpBAX4f9r2uF1k2fyvzw0nrIjsnJKdCGPRTDno6RdDt9nUAxLi1aeW4E60a"
  },
  {
    id: 2,
    name: "OvenBelle Corner - Chelsea",
    address: "156 King's Rd, London SW3 4UP",
    phone: "+44 20 7352 5678",
    hours: "Mon-Sun: 9am - 7pm",
    description: "A cozy neighborhood spot specializing in seasonal cupcakes and our signature afternoon tea boxes.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArH0kD9cbRXfB0b3qMvTTpGMrwgOZVJD8NnwdPSl-bzOQ7ao57VCeN3V03bJfcNoxtoYjmTLrzzInQZ2jK7Pn2cQonTrdW-p-2usSmF_vyuoYOgg8aDH1X_JQgXebd7yQ80a6uRdM1ncwqXfcckfeDA22-b1HAsPEKtmo1Vj4pPbZRJn0KFnUzX4xSMAvJkSvM4zg28h7bY4OKuXqtiXtmoXb71iin5uripO1w17X-Xk0yeQ85k5t7XPtRfq5AHJkmLHeUMI8bsp-I"
  }
];

export default function LocationsView() {
  return (
    <div className="flex flex-col w-full bg-background transition-colors duration-500">
      {/* Hero Section */}
      <section className="h-100 w-full flex flex-col items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[15s] scale-105"
          style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAyt0ZTL3yExZsOsdk8Qz-P6ArIXpL2cqAvtGARmzOL87HLaWoe-0AC8GJowCN2B08Z08NnUXfnap0dzExYr4uqCyFJOQ6O7sZDrmhP4waN8IEDI6MlPY6EvGDrD8rzfq7HD_Gt4BqrBKSCUJHfbKBB1wYaEfslWH4K_3xvmptwWTjOAzo--W1SXHngu654ByyODPdw3st-mLBvw1o4qzpBAX4f9r2uF1k2fyvzw0nrIjsnJKdCGPRTDno6RdDt9nUAxLi1aeW4E60a)' }}
        />
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-xs" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">Visit OvenBelle</h1>
          <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto uppercase tracking-[0.3em]">
            Warmth in every corner
          </p>
        </motion.div>
      </section>

      {/* Locations Content */}
      <section className="py-20 px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Location Cards */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-2">Our Locations</h2>
              <p className="text-text-muted text-lg">Find the sweet spot nearest to you.</p>
            </div>

            <div className="space-y-8">
              {LOCATIONS.map((loc, idx) => (
                <motion.div 
                  key={loc.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-surface rounded-[40px] p-8 shadow-ambient border border-zinc-100 group hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3 h-48 rounded-3xl overflow-hidden shadow-sm">
                      <img src={loc.image} alt={loc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="md:w-2/3 flex flex-col justify-center gap-4">
                      <h3 className="text-2xl font-bold text-text-main">{loc.name}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 text-text-muted">
                          <MapPin size={18} className="text-primary shrink-0" />
                          <span className="text-sm font-medium">{loc.address}</span>
                        </div>
                        <div className="flex items-center gap-3 text-text-muted">
                          <Clock size={18} className="text-primary shrink-0" />
                          <span className="text-sm font-medium">{loc.hours}</span>
                        </div>
                        <div className="flex items-center gap-3 text-text-muted">
                          <Phone size={18} className="text-primary shrink-0" />
                          <span className="text-sm font-medium">{loc.phone}</span>
                        </div>
                      </div>
                      <div className="flex gap-4 mt-2">
                        <button className="flex-1 py-3 bg-primary text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/10">
                          <Navigation size={16} />
                          Directions
                        </button>
                        <button className="px-5 py-3 border border-border text-text-muted rounded-2xl hover:border-primary hover:text-primary transition-all active:scale-95">
                          <Camera size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive "Map" Placeholder & Connect */}
          <div className="lg:sticky lg:top-28 space-y-12">
            <div className="bg-surface-container-high rounded-[48px] p-4 shadow-ambient h-125 relative overflow-hidden group">
              {/* Map Placeholder Graphic */}
              <div className="absolute inset-0 bg-surface-container opacity-50 bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-size-[20px_20px]" />
              <div className="relative h-full w-full bg-surface/80 backdrop-blur-sm rounded-[40px] flex flex-col items-center justify-center text-center p-8 border border-border">
                 <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
                    <MapPin size={48} className="text-primary" />
                 </div>
                 <h3 className="text-2xl font-bold text-text-main mb-4">Interactive Map</h3>
                 <p className="text-text-muted max-w-xs mb-8">
                   Explore all our locations and nearby treats in our interactive map view.
                 </p>
                 <button className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:opacity-90 transition-colors">
                   Open Map Integration
                 </button>

                 {/* Stylized Map Markers */}
                 <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-primary rounded-full shadow-[0_0_0_8px_rgba(121,84,101,0.2)] animate-bounce" />
                 <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-tertiary rounded-full shadow-[0_0_0_8px_rgba(131,78,104,0.2)]" />
              </div>
            </div>

            {/* Social Connect */}
            <div className="bg-primary/5 rounded-[40px] p-10 border border-primary/10">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                <Sparkles size={24} />
                Connect With Us
              </h3>
              <p className="text-text-muted mb-8 leading-relaxed">
                Follow our daily bakes, behind-the-scenes magic, and special announcements on social media.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center text-primary shadow-sm hover:shadow-ambient hover:-translate-y-1 transition-all">
                  <Globe size={28} />
                </a>
                <div className="flex-1 flex flex-col justify-center px-4">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest leading-none">Handle</span>
                  <span className="text-lg font-bold text-zinc-800">@ovenbelle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Banner */}
      <section className="px-8 pb-20 max-w-7xl mx-auto w-full">
        <div className="bg-surface-container-highest rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary/20 blur-[100px] rounded-full" />
           
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">Private Event or Wholesale?</h2>
           <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10">
             We love partnering with local businesses and catering for private celebrations. Get in touch for a bespoke quote.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
             <button className="px-10 py-4 bg-primary text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-primary/20">
               Contact Events Team
             </button>
             <button className="px-10 py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
               Wholesale Inquiries
             </button>
           </div>
        </div>
      </section>
    </div>
  );
}

function Sparkles({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}
