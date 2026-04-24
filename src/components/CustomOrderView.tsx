import { useState, type ReactNode } from 'react';
import { motion } from 'motion/react';
import { Upload, ChevronRight, Edit2, Droplet, Layers, Grid, Brush } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const FLAVORS = [
  "Madagascar Vanilla", "Rich Chocolate", "Red Velvet", 
  "Lemon Elderflower", "Earl Grey Lavender"
];

const SIZES = [
  { label: "6 Inch", sub: "Serves 8-10", price: 45 },
  { label: "8 Inch", sub: "Serves 14-18", price: 65 },
  { label: "10 Inch", sub: "Serves 25-30", price: 85 },
  { label: "2-Tier", sub: "Serves 35+", price: 150 }
];

const FROSTINGS = [
  { label: "Swiss Meringue Buttercream", icon: <Droplet size={20} /> },
  { label: "Smooth Fondant", icon: <Layers size={20} /> },
  { label: "Semi-Naked", icon: <Grid size={20} /> },
  { label: "Textured Palette Knife", icon: <Brush size={20} /> }
];

export default function CustomOrderView() {
  const [flavor, setFlavor] = useState(FLAVORS[0]);
  const [size, setSize] = useState(SIZES[1]);
  const [frosting, setFrosting] = useState(FROSTINGS[0].label);
  const [description, setDescription] = useState("");

  return (
    <div className="flex flex-col w-full bg-background transition-colors duration-500 min-h-screen">
      <div className="pt-24 pb-20 px-8 max-w-7xl mx-auto w-full">
      {/* Hero Header */}
      <section className="relative w-full h-100 rounded-[40px] overflow-hidden mb-12 shadow-ambient">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDAmiIhSXlU3ojiatmwgObgBwNJd0aU0Gc0CXMpRfUQBJ4WAxDxPw9zxt-4DdYzFfobJuHWgzn9steFxx2Ywt-hpaABTVM_tecEZUrrTXOX1cBpqcd1GpuMCg9tPVhpPUbmQ5mnnE4SP9pAk7DUCckiC6Pqvg758Wn2Y2oOeoPXT5OjdRfxDL7BCIc47H_eS7AojfPAc8Qm9h_IVmoe7N69Ds3KcFZh37TFRiGaNznSbva_vjby-gjP_h5Y1vFR3ZXvQ4ucScDCYK3O')" }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl glass-panel p-10 rounded-3xl border border-white/50"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-4">Design Your Dream Cake</h1>
            <p className="text-text-muted text-lg">
              From classic elegance to whimsical creations, let's build the perfect centerpiece for your celebration.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Form Column */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          
          {/* Step 1: Base Flavor */}
          <StepSection number={1} title="Base Flavor">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {FLAVORS.map(f => (
                <SelectCard 
                  key={f}
                  label={f}
                  selected={flavor === f}
                  onClick={() => setFlavor(f)}
                />
              ))}
            </div>
          </StepSection>

          {/* Step 2: Size & Tiering */}
          <StepSection number={2} title="Size & Tiering">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {SIZES.map(s => (
                <SelectCard 
                  key={s.label}
                  label={s.label}
                  sub={s.sub}
                  selected={size.label === s.label}
                  onClick={() => setSize(s)}
                />
              ))}
            </div>
          </StepSection>

          {/* Step 3: Frosting Style */}
          <StepSection number={3} title="Frosting Style">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FROSTINGS.map(f => (
                <SelectCard 
                  key={f.label}
                  label={f.label}
                  icon={f.icon}
                  selected={frosting === f.label}
                  onClick={() => setFrosting(f.label)}
                  horizontal
                />
              ))}
            </div>
          </StepSection>

          {/* Step 4: Inspiration */}
          <StepSection number={4} title="Design Inspiration">
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-bold text-text-muted mb-3 uppercase tracking-wider">Describe your vision</label>
                <textarea 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-surface border border-border rounded-3xl p-6 text-text-main placeholder:text-text-dim focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all resize-none shadow-sm min-h-40"
                  placeholder="Colors, themes, floral requests, or specific references..."
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-text-muted mb-3 uppercase tracking-wider">Upload References</label>
                <div className="w-full border-2 border-dashed border-border rounded-4xl p-12 flex flex-col items-center justify-center gap-6 bg-surface hover:bg-stone-50 hover:border-primary/50 transition-all cursor-pointer group">
                  <div className="w-20 h-20 rounded-full bg-secondary-container flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Upload size={32} />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-lg text-text-main">Click to upload or drag and drop</p>
                    <p className="text-text-dim mt-1">PNG, JPG up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </StepSection>
        </div>

        {/* Summary Column */}
        <div className="lg:col-span-4 lg:sticky lg:top-24">
          <div className="bg-surface rounded-[40px] p-10 shadow-ambient border border-border">
            <h3 className="text-2xl font-bold text-text-main border-b border-border pb-6 mb-8">Your Creation</h3>
            
            <div className="space-y-6 mb-12">
              <SummaryRow label="Flavor" value={flavor} />
              <SummaryRow label="Size" value={size.label} price={`$${size.price}`} />
              <SummaryRow label="Frosting" value={frosting} price="Incl." />
            </div>

            <div className="border-t border-zinc-100 pt-8 mb-10">
              <div className="flex justify-between items-end">
                <span className="text-zinc-500 font-medium">Estimated Total</span>
                <span className="text-4xl font-bold text-primary">~${size.price}</span>
              </div>
              <p className="text-xs text-zinc-400 mt-4 leading-relaxed font-medium">
                *Final price depends on design complexity, additional fillings, and delivery fees.
              </p>
            </div>

            <button className="w-full py-5 bg-primary text-white rounded-full font-bold text-lg shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
              Submit Request
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

interface SelectCardProps {
  label: string;
  sub?: string;
  icon?: ReactNode;
  selected: boolean;
  onClick: () => void;
  horizontal?: boolean;
}

interface SummaryRowProps {
  label: string;
  value: string;
  price?: string;
}

function StepSection({ number, title, children }: { number: number; title: string; children: ReactNode }) {
  return (
    <section className="bg-surface rounded-[40px] p-10 shadow-sm border border-zinc-100">
      <div className="flex items-center gap-4 mb-8">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-container text-primary font-bold text-lg">
          {number}
        </span>
        <h2 className="text-3xl font-bold text-text-main">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function SelectCard({ label, sub, icon, selected, onClick, horizontal }: SelectCardProps) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "relative rounded-3xl p-6 transition-all duration-300 border flex items-center text-left",
        horizontal ? "flex-row gap-6 h-24" : "flex-col justify-center text-center gap-2 min-h-27.5",
        selected 
          ? "bg-primary-container border-primary ring-1 ring-primary shadow-lg shadow-primary/5" 
          : "bg-surface border-border text-text-muted hover:border-primary/30 hover:bg-surface-container-high"
      )}
    >
      {icon && <div className={cn("transition-colors", selected ? "text-primary" : "text-zinc-400")}>{icon}</div>}
      <div className="flex flex-col">
        <span className={cn("font-bold text-sm uppercase tracking-wider", selected ? "text-primary" : "text-zinc-800")}>{label}</span>
        {sub && <span className="text-xs text-zinc-400 font-medium mt-1 uppercase tracking-tight">{sub}</span>}
      </div>
      {selected && (
        <motion.div 
          layoutId="check"
          className="absolute top-3 right-3 w-4 h-4 bg-primary rounded-full"
        />
      )}
    </button>
  );
}

function SummaryRow({ label, value, price }: SummaryRowProps) {
  return (
    <div className="flex justify-between items-start group">
      <div className="flex flex-col">
        <span className="text-[10px] font-bold text-text-dim uppercase tracking-[0.2em] mb-1">{label}</span>
        <span className="text-text-main font-bold">{value}</span>
      </div>
      <div className="flex items-center gap-3">
        {price && <span className="text-sm font-bold text-zinc-400">{price}</span>}
        <button className="text-primary opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-primary-container rounded-lg">
          <Edit2 size={14} />
        </button>
      </div>
    </div>
  );
}
