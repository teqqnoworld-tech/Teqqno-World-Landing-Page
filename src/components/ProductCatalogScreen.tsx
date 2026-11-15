import React, { useState, useMemo } from 'react';
import { Product, ProductCategory } from '../types';
import { CATEGORIES, PRODUCTS } from '../data/catalogData';
import { AnimatedIcon } from './AnimatedIcon';

interface ProductCatalogScreenProps {
  onSelectProductForQuote: (product: Product) => void;
  onOpenSampleKit?: () => void;
}

export const ProductCatalogScreen: React.FC<ProductCatalogScreenProps> = ({
  onSelectProductForQuote,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');

  // Filter products by category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return PRODUCTS;
    }
    return PRODUCTS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="py-16 md:py-24 border-b border-[#26262B] bg-[#0B0B0D] relative" id="products">
      {/* Background ambient accents */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#FF7A00]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF7A00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151518] border border-[#26262B] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse" />
            <span className="text-xs font-semibold text-[#B8B8C0] uppercase tracking-wider">
              Comprehensive B2B Catalog
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Commercial Printing & Branding Materials
          </h2>
          <p className="text-base sm:text-lg text-[#B8B8C0] mt-3 max-w-2xl leading-relaxed">
            Explore our full production-ready catalog: from high-precision business cards, brochures, and flex banners to complete corporate brand guideline manuals and merchandise.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="bg-[#151518] rounded-xl p-3 sm:p-4 border border-[#26262B] mb-10 shadow-xl">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none overscroll-x-contain touch-pan-x">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as ProductCategory)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer group ${
                    isSelected
                      ? 'bg-[#FF7A00] text-white font-semibold shadow-md shadow-[#FF7A00]/20'
                      : 'bg-[#1F1F22] border border-[#26262B] text-[#B8B8C0] hover:text-white hover:border-[#FF7A00]/50'
                  }`}
                >
                  <AnimatedIcon
                    name={cat.icon}
                    animation={isSelected ? 'wiggle' : 'float'}
                    color={isSelected ? 'text-white' : 'text-[#FF7A00]'}
                    size="text-base"
                  />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Catalog Results Status */}
        <div className="flex items-center justify-between mb-6 text-xs text-[#B8B8C0]">
          <div>
            Showing <span className="font-semibold text-white">{filteredProducts.length}</span> verified product lines
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>All machinery running • In-house production</span>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-[#151518] rounded-xl p-12 border border-[#26262B] text-center max-w-lg mx-auto">
            <AnimatedIcon name="inventory_2" animation="pulse" color="text-[#B8B8C0]" size="text-4xl" className="mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">No Products in this Category</h3>
            <p className="text-sm text-[#B8B8C0] mb-6">
              We may still manufacture this custom spec! You can contact our production team directly or browse all products.
            </p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="px-5 py-2.5 rounded-lg bg-[#FF7A00] text-white text-xs font-semibold cursor-pointer"
            >
              View All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#151518] rounded-xl border border-[#26262B] card-border-hover overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with Placeholder Fallback & Badges */}
                  <div className="h-32 sm:h-44 md:h-52 w-full bg-[#0E0E11] relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={`${product.name} - TeqqnoWorld Commercial Printing & Branding Hyderabad`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center p-2 text-center bg-[#151518]">
                      <AnimatedIcon name="image" animation="float" color="text-[#FF7A00]/50" size="text-2xl sm:text-4xl" className="mb-1" />
                      <span className="text-[10px] sm:text-xs text-[#B8B8C0] font-medium line-clamp-1">{product.name}</span>
                    </div>

                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-md text-[9px] sm:text-[10px] font-bold text-[#FF7A00] border border-[#FF7A00]/40">
                        {product.badge}
                      </span>
                    )}

                    {/* Category Label Chip */}
                    <span className="hidden sm:inline-block absolute top-2 right-2 px-1.5 py-0.5 rounded bg-[#1F1F22]/90 backdrop-blur-md text-[9px] sm:text-[10px] text-white/90 border border-[#26262B] font-medium">
                      {product.categoryLabel}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-2.5 sm:p-4 pb-2 sm:pb-3">
                    <h3 className="text-xs sm:text-base font-bold text-white group-hover:text-[#FF7A00] transition-colors leading-snug line-clamp-1 sm:line-clamp-none">
                      {product.name}
                    </h3>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-2.5 sm:p-4 pt-0 border-t border-transparent">
                  <div className="mt-1 sm:mt-2">
                    <a
                      href={`https://wa.me/918309394934?text=${encodeURIComponent(`Hello TeqqnoWorld, I would like to get an instant quote for ${product.name}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 sm:py-2.5 px-2 rounded-lg bg-[#FF7A00] hover:bg-[#ff8a1a] text-white text-[10px] sm:text-xs font-semibold transition-all shadow-md shadow-[#FF7A00]/20 flex items-center justify-center gap-1 active:scale-95 cursor-pointer group"
                    >
                      <AnimatedIcon name="calculate" animation="wiggle" color="text-white" size="text-xs sm:text-sm" />
                      <span>Instant Quote</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
