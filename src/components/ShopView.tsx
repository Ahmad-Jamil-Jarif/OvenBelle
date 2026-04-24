import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Search } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const CATEGORIES = ["All Sweets", "Celebration", "Wedding", "Cupcakes", "Seasonal"];

const PRODUCTS = [
  {
    id: 1,
    name: "Rose Elegance",
    price: 120,
    category: "Wedding",
    desc: "Classic vanilla sponge with delicate rose-infused buttercream.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9tH0RsYVcXG4gbfAPlZ-DnPHc5sbzgqIG47us9tmf2Q2cQnl4RMo0dRSw8g5CTZc90y-u4IU5usuD0Jeq4-gl7ZkMau8F-w44N0fJJCgwVUF8MUkMWX0jeN_Cdv4520BIUnLvpjgqyVOWhLOSVfz8BRJ5nmUpOewzLxOYywPmsGZWKMaUwGNPlUQ83M_YgmzP7-eorAQpzucnh8PjnsaSnFGAtbM63cA2fDrybNWDYN7bEK_ggWlNd_fMfleLMMRfsUFU8tuASytG"
  },
  {
    id: 2,
    name: "Midnight Truffle",
    price: 85,
    category: "Celebration",
    desc: "Rich dark chocolate ganache layered between moist cocoa sponge.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC39-AJq-Re2TZ8Q9CfN32Q-uliVKFIhWuS385YX3NsYQUkwm8g5Oae38spzrH0mtCKKRn6x26aD2TVT3Rext0SOEDSjeSmABRwr20mm005MqmaTiQfiGTHsobeyzk0ZVyEi1k-Ro-QApcbIqHu5B_ZPdcJh8we87y1UX1eChgeKE1cwRiNECGOBGF0CEqFiWsH8cKeJi3rDkZU4WsYoeGX0JqIAHaKdlyz-f-IfXjFzoX-Sxbw8AnpOmSNVWcs9lmi0vd9xpV96-Ou"
  },
  {
    id: 3,
    name: "Summer Berry",
    price: 65,
    category: "Seasonal",
    desc: "Light genoise sponge layered with fresh seasonal berries and Chantilly cream.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAg6X2HxQrRxcL_WC8lTM8jQ_rnHcJ2RiRJzkRqIZtk0PXts5otqO8aUfeKxhhkG1EqJsPKFdIC3SAsRI8KDCk9SYrKIBVbl6W9OEYB2csQrQ__KQesacDju8dw-mdrlMbOqQKZ78nuOQUUR59demIQD9Frww8XCm3YPuT5xtAi7Epk13bG97oWRxIw6DugvzBMZOzaqFq13jPsY1cpHdOXsiTJFNJ8PGivhElv6VnxP0ZsVi-_jMWj9woDpAx8bBbYilafFF0CUAG5"
  },
  {
    id: 4,
    name: "Pastel Palette Cupcakes",
    price: 45,
    category: "Cupcakes",
    desc: "Box of 12 signature cupcakes in assorted flavors with Swiss meringue buttercream.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8GR0L5P3RzvD8uZmthPCHBtqGSDWWht3op9F4MLuM774I3OFHm_P7dXjR8lW1yUlxrfbML-mRS98PFR-VvMfrL3Ug_NxAmR_fOCxebXJSnK_z4VLtivx7xJsJob3cBDcDHG8BeWNQIzikodKTGqSlpWBRQgOAO_7xZ1Xews7fHlizF8HinT9P5_4NR4ryIdPsthh-Un9Nt_66fOG5a9PReBBHB9jBHhF839kaozWyJGRPa5BeRds7SUqZP-OH3V7Vqp5z053nBTIb"
  },
  {
    id: 5,
    name: "Amalfi Lemon",
    price: 55,
    category: "Seasonal",
    desc: "Zesty lemon drizzle cake with a tart lemon curd center and rustic frosting.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5G5wfAL7FTbSuMzx16FqR5wwKFbCnFQe5f7raTyqDvGcHLsPcuqZKkGpusytUMZiqsaBi3kqMiu4Fi6k7m5R8RdQi26Jpt0HseC-ub7rVHLgNmIHkGAd1L1hFaiG-qau187wfWrM1nI4_t9LntjI5nSirrVXTIzr7CYp8lZHF0RDZmaj7bHOWbhhDFXLmVa-GydPmLsnsX-WNE4snt2rrydUs2bJHl45H7qOJg95TBNOg_MKeE9XLDcBkvm0oCGupAW00dZC9osWb"
  },
  {
    id: 6,
    name: "Kyoto Matcha",
    price: 75,
    category: "Celebration",
    desc: "Premium ceremonial grade matcha sponge with white chocolate ganache.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgmn9ZdoceIjDTgXanjw2O01FvTCfxCoVzjYqSW1kuJiSdjz1w1jruTpsDbd_cx1MyPCtjFoixoIs9jXldG51WDFig_gzCNWYnJ7QLxfp6kiSOq6K7NViWN59DvNEI836W0R21fF8DrDQ2KZ1RVQ6yT4H3yB1ossaWKOQmSi1TbCZcqSE1TkAkx4DqiYBH1BfsJmecvgdJHCqhZy3kxWT8ylHhjLSowUVxw4Y7bNOokjTxaVggdlUsmalUK7qS49jJbgybuvC8ulMS"
  }
];

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  desc: string;
  image: string;
}

export default function ShopView() {
  const [activeCategory, setActiveCategory] = useState("All Sweets");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === "All Sweets" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full min-h-screen pt-24 pb-20 px-8 max-w-7xl mx-auto bg-background transition-colors duration-500">
      {/* Search and Title */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-primary mb-2">Our Creations</h1>
          <p className="text-text-muted">Meticulously crafted with passion and fine ingredients.</p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
          <input 
            type="text" 
            placeholder="Search sweets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-surface border border-border rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3 justify-center mb-16">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 border",
              activeCategory === cat 
                ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105" 
                : "bg-surface text-text-muted border-border hover:border-primary/50 hover:text-primary"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map(product => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-zinc-400">
          <Search size={48} className="mb-4 opacity-20" />
          <p className="text-xl">No sweets found matching your search.</p>
        </div>
      )}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8 }}
      className="bg-surface rounded-4xl overflow-hidden shadow-ambient hover:shadow-ambient-hover transition-all duration-500 flex flex-col group border border-border"
    >
      <div className="relative h-80 overflow-hidden bg-surface-container">
        <img 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          src={product.image}
        />
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-4 py-1 rounded-full text-sm font-bold text-primary shadow-sm border border-white/50">
          ${product.price}
        </div>
      </div>
      <div className="p-8 flex flex-col h-full bg-secondary-container/10">
        <h3 className="text-2xl font-bold text-text-main mb-2">{product.name}</h3>
        <p className="text-text-muted mb-8 line-clamp-2 leading-relaxed h-[3.2rem]">
          {product.desc}
        </p>
        <button className="w-full py-4 px-6 bg-primary-container text-on-primary-container font-bold rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group/btn hover:shadow-lg hover:shadow-primary/10">
          <ShoppingCart size={18} className="group-hover/btn:scale-110 transition-transform" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
