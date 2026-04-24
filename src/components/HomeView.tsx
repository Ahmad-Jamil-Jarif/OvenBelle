import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Award, Leaf, Sparkles, Truck, ArrowRight, Star, Heart } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function HomeView() {
  return (
    <div className="flex flex-col w-full bg-background transition-colors duration-500">
      {/* Editorial Hero Section */}
      <section className="relative min-h-[90vh] w-full flex items-center overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col pt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-12 bg-primary/30" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/60">Established 2015</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-[100px] font-serif leading-[0.9] text-text-main mb-8"
            >
              Artisan <br />
              <span className="italic font-light text-primary">Confectionery</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-text-muted max-w-xl mb-12 font-serif italic leading-relaxed"
            >
              Where every cake is a canvas, and every ingredient tells a story of uncompromising craftsmanship.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6 items-center"
            >
              <NavLink to="/menu" className="group relative px-10 py-5 bg-primary text-white rounded-full font-bold shadow-2xl shadow-primary/20 hover:scale-105 transition-all active:scale-95 flex items-center gap-3 overflow-hidden">
                <span className="relative z-10">Explore Our Menu</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </NavLink>
              <NavLink to="/custom" className="px-10 py-5 border border-primary/20 text-primary rounded-full font-bold hover:bg-primary/5 hover:border-primary transition-all active:scale-95">
                Design a Custom Cake
              </NavLink>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-3/4 w-full rounded-[100px] overflow-hidden shadow-ambient"
            >
              <img 
                alt="Signature Cake" 
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9tH0RsYVcXG4gbfAPlZ-DnPHc5sbzgqIG47us9tmf2Q2cQnl4RMo0dRSw8g5CTZc90y-u4IU5usuD0Jeq4-gl7ZkMau8F-w44N0fJJCgwVUF8MUkMWX0jeN_Cdv4520BIUnLvpjgqyVOWhLOSVfz8BRJ5nmUpOewzLxOYywPmsGZWKMaUwGNPlUQ83M_YgmzP7-eorAQpzucnh8PjnsaSnFGAtbM63cA2fDrybNWDYN7bEK_ggWlNd_fMfleLMMRfsUFU8tuASytG"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </motion.div>
            
            {/* Floating Decorative Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-tertiary-container rounded-full blur-3xl opacity-40" 
            />
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 glass-panel p-6 rounded-3xl border border-white/50 shadow-xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Star fill="currentColor" size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-text-main">Best of 2026</div>
                  <div className="text-xs text-text-dim font-medium">Bakery Awards</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Texture/Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-container/10 -skew-x-12 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-10 left-8 hidden md:flex flex-col gap-8">
          <div className="vertical-text text-xs font-bold uppercase tracking-widest text-primary/40 h-32 flex items-center">Scroll to discover</div>
          <div className="w-px h-12 bg-primary/20 mx-auto" />
        </div>
      </section>

      {/* Signature Collections - Bento Style Grid */}
      <section className="py-32 px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif text-text-main mb-6">Signature Collections</h2>
            <p className="text-text-muted text-lg">From architectural wedding cakes to intimate celebration sets, each creation is designed to be the centerpiece of your memories.</p>
          </div>
          <NavLink to="/menu" className="flex items-center gap-2 font-bold text-primary hover:gap-4 transition-all pb-1 border-b-2 border-primary/20">
            View All Creations <ArrowRight size={18} />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-2 gap-8 h-auto md:h-200">
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-8 md:row-span-1 relative rounded-[48px] overflow-hidden group shadow-ambient"
          >
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAmiIhSXlU3ojiatmwgObgBwNJd0aU0Gc0CXMpRfUQBJ4WAxDxPw9zxt-4DdYzFfobJuHWgzn9steFxx2Ywt-hpaABTVM_tecEZUrrTXOX1cBpqcd1GpuMCg9tPVhpPUbmQ5mnnE4SP9pAk7DUCckiC6Pqvg758Wn2Y2oOeoPXT5OjdRfxDL7BCIc47H_eS7AojfPAc8Qm9h_IVmoe7N69Ds3KcFZh37TFRiGaNznSbva_vjby-gjP_h5Y1vFR3ZXvQ4ucScDCYK3O" alt="Wedding" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent p-12 flex flex-col justify-end">
              <span className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Collection 01</span>
              <h3 className="text-4xl font-serif text-white">The Wedding Edit</h3>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-4 md:row-span-2 relative rounded-[48px] overflow-hidden group shadow-ambient"
          >
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8GR0L5P3RzvD8uZmthPCHBtqGSDWWht3op9F4MLuM774I3OFHm_P7dXjR8lW1yUlxrfbML-mRS98PFR-VvMfrL3Ug_NxAmR_fOCxebXJSnK_z4VLtivx7xJsJob3cBDcDHG8BeWNQIzikodKTGqSlpWBRQgOAO_7xZ1Xews7fHlizF8HinT9P5_4NR4ryIdPsthh-Un9Nt_66fOG5a9PReBBHB9jBHhF839kaozWyJGRPa5BeRds7SUqZP-OH3V7Vqp5z053nBTIb" alt="Pastries" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent p-12 flex flex-col justify-end">
              <span className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Collection 02</span>
              <h3 className="text-4xl font-serif text-white">OvenBelle Daily</h3>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-4 md:row-span-1 relative rounded-[48px] overflow-hidden group shadow-ambient"
          >
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC39-AJq-Re2TZ8Q9CfN32Q-uliVKFIhWuS385YX3NsYQUkwm8g5Oae38spzrH0mtCKKRn6x26aD2TVT3Rext0SOEDSjeSmABRwr20mm005MqmaTiQfiGTHsobeyzk0ZVyEi1k-Ro-QApcbIqHu5B_ZPdcJh8we87y1UX1eChgeKE1cwRiNECGOBGF0CEqFiWsH8cKeJi3rDkZU4WsYoeGX0JqIAHaKdlyz-f-IfXjFzoX-Sxbw8AnpOmSNVWcs9lmi0vd9xpV96-Ou" alt="Dark Truffle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent p-10 flex flex-col justify-end">
              <span className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Collection 03</span>
              <h3 className="text-3xl font-serif text-white">The Midnight Series</h3>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-4 md:row-span-1 bg-primary text-white rounded-[48px] p-10 flex flex-col justify-between shadow-ambient"
          >
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
              <Heart fill="currentColor" size={28} />
            </div>
            <div>
              <h3 className="text-3xl font-serif mb-4">Gifts with Love</h3>
              <p className="text-white/70 mb-6">Curated boxes for the ones you cherish most.</p>
              <button className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                Shop Gifting <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Crafted with Integrity Section */}
      <section className="py-32 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="grid grid-cols-2 gap-4 h-150"
              >
                <div className="space-y-4 pt-12">
                   <div className="h-70 rounded-[100px] overflow-hidden shadow-lg">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg6X2HxQrRxcL_WC8lTM8jQ_rnHcJ2RiRJzkRqIZtk0PXts5otqO8aUfeKxhhkG1EqJsPKFdIC3SAsRI8KDCk9SYrKIBVbl6W9OEYB2csQrQ__KQesacDju8dw-mdrlMbOqQKZ78nuOQUUR59demIQD9Frww8XCm3YPuT5xtAi7Epk13bG97oWRxIw6DugvzBMZOzaqFq13jPsY1cpHdOXsiTJFNJ8PGivhElv6VnxP0ZsVi-_jMWj9woDpAx8bBbYilafFF0CUAG5" className="w-full h-full object-cover" />
                   </div>
                   <div className="h-50 rounded-[100px] bg-tertiary/10 flex items-center justify-center p-8 text-center px-12">
                      <p className="text-sm font-bold text-tertiary italic">"Baking is a science, but serving is an art form."</p>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="h-87.5 rounded-[100px] overflow-hidden shadow-lg">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyt0ZTL3yExZsOsdk8Qz-P6ArIXpL2cqAvtGARmzOL87HLaWoe-0AC8GJowCN2B08Z08NnUXfnap0dzExYr4uqCyFJOQ6O7sZDrmhP4waN8IEDI6MlPY6EvGDrD8rzfq7HD_Gt4BqrBKSCUJHfbKBB1wYaEfslWH4K_3xvmptwWTjOAzo--W1SXHngu654ByyODPdw3st-mLBvw1o4qzpBAX4f9r2uF1k2fyvzw0nrIjsnJKdCGPRTDno6RdDt9nUAxLi1aeW4E60a" className="w-full h-full object-cover" />
                   </div>
                </div>
              </motion.div>
            </div>
            
            <div className="order-1 lg:order-2 flex flex-col">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6">Our Philosophy</span>
              <h2 className="text-5xl md:text-6xl font-serif text-text-main mb-8 leading-tight">Crafted with Heart & Integrity</h2>
              <div className="space-y-12">
                <FeatureCard 
                  icon={<Leaf size={24} />} 
                  title="Organic & Sustainable" 
                  desc="We partner with local farms for seasonal fruits, organic flours, and grass-fed dairy." 
                />
                <FeatureCard 
                  icon={<Award size={24} />} 
                  title="Time-Honored Techniques" 
                  desc="Slow-fermented doughs and small-batch buttercreams made daily, never rushed." 
                />
                <FeatureCard 
                  icon={<Truck size={24} />} 
                  title="White-Glove Delivery" 
                  desc="Trained handlers ensuring your custom centerpiece arrives in pristine condition." 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-surface-container border-y border-border overflow-hidden relative">
         <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
            <Sparkles className="mx-auto mb-10 text-primary/30" size={48} />
            <blockquote className="text-3xl md:text-4xl font-serif italic text-text-main leading-relaxed mb-8">
              "We believe that a truly great cake doesn't just taste wonderful—it creates a space for connection, celebration, and quiet moments of joy."
            </blockquote>
            <cite className="not-italic font-bold uppercase tracking-widest text-primary text-xs">— Elara Thorne, Master Patissier</cite>
         </div>
      </section>

      {/* About Ovenbelle Section */}
      <section className="py-32 px-8 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10"
              >
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6 block">Our Legacy</span>
                <h2 className="text-5xl md:text-6xl font-serif text-text-main mb-8 leading-tight">About OvenBelle</h2>
                <div className="w-20 h-1 bg-primary/20 mb-10" />
                <p className="text-xl text-text-muted italic font-serif leading-relaxed mb-8">
                  At Ovenbelle, we believe baking is more than just making cakes—it’s about creating moments of joy, warmth, and beauty.
                </p>
              </motion.div>
              
              {/* Decorative background circle */}
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            </div>

            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
              >
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-text-main uppercase tracking-widest">The Name</h3>
                  <p className="text-text-muted leading-relaxed">
                    The name Ovenbelle comes from two simple ideas: the comfort of the oven and the elegance of beauty. Together, they represent what we stand for—beautiful creations, freshly baked with love.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-text-main uppercase tracking-widest">Our Specialty</h3>
                  <p className="text-text-muted leading-relaxed">
                    We specialize in handcrafted cakes and desserts that are made with care, creativity, and high-quality ingredients. Every cake is designed to not only taste amazing but also to look stunning.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-text-main uppercase tracking-widest">Every Occasion</h3>
                  <p className="text-text-muted leading-relaxed">
                    From birthdays and weddings to small personal moments, Ovenbelle is here to make every occasion a little sweeter. Each order is prepared fresh, with attention to detail and a passion for perfection.
                  </p>
                </div>
                <div className="p-8 bg-surface-container rounded-3xl border border-border flex flex-col justify-center">
                  <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3">Our Mission</span>
                  <p className="text-xl font-serif italic text-text-main">
                    "To turn your sweetest moments into unforgettable memories."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-serif text-text-main mb-2">{title}</h4>
        <p className="text-text-muted leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
