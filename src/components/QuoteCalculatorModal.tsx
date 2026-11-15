import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/catalogData';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: Product | null;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  onClose,
  initialProduct,
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    initialProduct?.id || PRODUCTS[0].id
  );
  const [quantity, setQuantity] = useState<number>(500);
  const [selectedFinishes, setSelectedFinishes] = useState<string[]>([]);
  const [isRushTurnaround, setIsRushTurnaround] = useState<boolean>(false);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [deliveryCity, setDeliveryCity] = useState('Hyderabad');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setSelectedProductId(initialProduct.id);
      // set sensible default quantity based on lowest tier
      if (initialProduct.pricingTiers && initialProduct.pricingTiers.length > 0) {
        setQuantity(initialProduct.pricingTiers[0].quantity);
      }
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const currentProduct = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  // Calculate unit price from tiers
  const getBaseUnitPrice = (qty: number): number => {
    const tiers = [...currentProduct.pricingTiers].sort((a, b) => b.quantity - a.quantity);
    for (const tier of tiers) {
      if (qty >= tier.quantity) {
        return tier.unitPrice;
      }
    }
    return tiers[tiers.length - 1]?.unitPrice || 10;
  };

  const baseUnitPrice = getBaseUnitPrice(quantity);
  const finishAddonCostPerUnit = selectedFinishes.length * (baseUnitPrice * 0.12);
  const subtotal = quantity * (baseUnitPrice + finishAddonCostPerUnit);
  const rushFee = isRushTurnaround ? subtotal * 0.2 : 0;
  const taxableAmount = subtotal + rushFee;
  const gst = taxableAmount * 0.18;
  const grandTotal = taxableAmount + gst;

  const toggleFinish = (finishName: string) => {
    if (selectedFinishes.includes(finishName)) {
      setSelectedFinishes(selectedFinishes.filter((f) => f !== finishName));
    } else {
      setSelectedFinishes([...selectedFinishes, finishName]);
    }
  };

  const handleWhatsAppSend = () => {
    const message = `*TeqqnoWorld Quote Request*
-----------------------------
*Product:* ${currentProduct.name} (${currentProduct.categoryLabel})
*Quantity:* ${quantity.toLocaleString()} Units
*Base Unit Price:* ₹${baseUnitPrice.toFixed(2)}
*Selected Finishes:* ${selectedFinishes.length > 0 ? selectedFinishes.join(', ') : 'Standard Finishing'}
*Turnaround:* ${isRushTurnaround ? '⚡ Express 24-48h Rush' : currentProduct.turnaround}
*Subtotal:* ₹${subtotal.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
*Est. Total (incl. 18% GST):* ₹${grandTotal.toLocaleString('en-IN', { maximumFractionDigits: 0 })}

*Client Name:* ${clientName || 'Not specified'}
*Phone:* ${clientPhone || 'Not specified'}
*Company:* ${clientCompany || 'Corporate Client'}
*Delivery City:* ${deliveryCity}
-----------------------------
Please confirm availability and dispatch pro-forma invoice.`;

    const url = `https://wa.me/918309394934?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // automatically open whatsapp with summary
      handleWhatsAppSend();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#151518] border border-[#26262B] rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative">
        {/* Header */}
        <div className="sticky top-0 bg-[#151518]/95 backdrop-blur-md px-6 py-4 border-b border-[#26262B] flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#1F1F22] flex items-center justify-center text-[#FF7A00] border border-[#26262B]">
              <span className="material-symbols-outlined text-lg">calculate</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">
                Instant Price & Volume Estimator
              </h3>
              <p className="text-[11px] text-[#B8B8C0]">
                Commercial wholesale pricing configured with live finishing calculations
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#1F1F22] text-[#B8B8C0] hover:text-white flex items-center justify-center border border-[#26262B] transition-colors"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Configurator Controls */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Product Selection */}
            <div>
              <label className="block text-xs uppercase font-bold text-[#B8B8C0] mb-2 tracking-wider">
                1. Select Item from Catalog
              </label>
              <select
                value={selectedProductId}
                onChange={(e) => {
                  setSelectedProductId(e.target.value);
                  const p = PRODUCTS.find((prod) => prod.id === e.target.value);
                  if (p?.pricingTiers?.[0]) {
                    setQuantity(p.pricingTiers[0].quantity);
                  }
                  setSelectedFinishes([]);
                }}
                className="w-full bg-[#0B0B0D] border border-[#26262B] rounded-lg px-3.5 py-3 text-white text-sm focus:border-[#FF7A00] focus:outline-none focus:ring-1 focus:ring-[#FF7A00]"
              >
                {PRODUCTS.map((prod) => (
                  <option key={prod.id} value={prod.id}>
                    [{prod.categoryLabel}] {prod.name} (MOQ: {prod.moq})
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Quantity Tier Selection */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs uppercase font-bold text-[#B8B8C0] tracking-wider">
                  2. Order Quantity: <span className="text-[#FF7A00] text-sm">{quantity.toLocaleString()} Units</span>
                </label>
                <span className="text-[11px] text-[#B8B8C0]">
                  Unit Rate: <strong className="text-white">₹{baseUnitPrice.toFixed(2)}</strong>
                </span>
              </div>

              {/* Quick Preset Buttons */}
              <div className="grid grid-cols-4 gap-2 mb-3">
                {currentProduct.pricingTiers.map((tier) => (
                  <button
                    key={tier.quantity}
                    type="button"
                    onClick={() => setQuantity(tier.quantity)}
                    className={`py-2 px-2 rounded text-xs font-semibold transition-all ${
                      quantity === tier.quantity
                        ? 'bg-[#FF7A00] text-white shadow-sm'
                        : 'bg-[#0B0B0D] border border-[#26262B] text-[#B8B8C0] hover:text-white hover:border-[#FF7A00]/50'
                    }`}
                  >
                    {tier.quantity.toLocaleString()}
                  </button>
                ))}
              </div>

              {/* Slider for smooth custom quantities */}
              <input
                type="range"
                min={currentProduct.pricingTiers[0]?.quantity || 50}
                max={(currentProduct.pricingTiers[currentProduct.pricingTiers.length - 1]?.quantity || 5000) * 2}
                step={currentProduct.pricingTiers[0]?.quantity || 50}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full accent-[#FF7A00] cursor-pointer"
              />
            </div>

            {/* Step 3: Material Finishes & Addons */}
            {currentProduct.finishes && currentProduct.finishes.length > 0 && (
              <div>
                <label className="block text-xs uppercase font-bold text-[#B8B8C0] mb-2 tracking-wider">
                  3. Select Finishing Add-Ons (Optional)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentProduct.finishes.map((finish, i) => {
                    const isSelected = selectedFinishes.includes(finish);
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => toggleFinish(finish)}
                        className={`p-3 rounded-lg border text-left text-xs transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#FF7A00]/10 border-[#FF7A00] text-white'
                            : 'bg-[#0B0B0D] border-[#26262B] text-[#B8B8C0] hover:border-[#FF7A00]/40'
                        }`}
                      >
                        <span className="font-medium">{finish}</span>
                        <span className="material-symbols-outlined text-base text-[#FF7A00]">
                          {isSelected ? 'check_box' : 'check_box_outline_blank'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 4: Turnaround Option */}
            <div className="p-3.5 rounded-lg bg-[#0B0B0D] border border-[#26262B] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#FF7A00]">bolt</span>
                <div>
                  <span className="text-xs font-bold text-white block">Express Turnaround Request</span>
                  <span className="text-[11px] text-[#B8B8C0]">Expedited 24-48 hour slot (+20% rush fee)</span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={isRushTurnaround}
                onChange={(e) => setIsRushTurnaround(e.target.checked)}
                className="w-4 h-4 accent-[#FF7A00] rounded cursor-pointer"
              />
            </div>

            {/* Client Details Inputs */}
            <form onSubmit={handleFormSubmit} className="space-y-3 pt-2">
              <label className="block text-xs uppercase font-bold text-[#B8B8C0] tracking-wider">
                4. Your Contact Details for Pro-Forma Invoice
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="bg-[#0B0B0D] border border-[#26262B] rounded-lg px-3 py-2 text-xs text-white focus:border-[#FF7A00] focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp Number *"
                  required
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="bg-[#0B0B0D] border border-[#26262B] rounded-lg px-3 py-2 text-xs text-white focus:border-[#FF7A00] focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Company Name (Optional)"
                  value={clientCompany}
                  onChange={(e) => setClientCompany(e.target.value)}
                  className="bg-[#0B0B0D] border border-[#26262B] rounded-lg px-3 py-2 text-xs text-white focus:border-[#FF7A00] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="City / Delivery Location"
                  value={deliveryCity}
                  onChange={(e) => setDeliveryCity(e.target.value)}
                  className="bg-[#0B0B0D] border border-[#26262B] rounded-lg px-3 py-2 text-xs text-white focus:border-[#FF7A00] focus:outline-none"
                />
              </div>

              {submitted && (
                <div className="p-3 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">check_circle</span>
                  <span>Quote registered! Connecting you to our estimator on WhatsApp...</span>
                </div>
              )}
            </form>
          </div>

          {/* Live Estimate Breakdown Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-[#0B0B0D] rounded-xl p-6 border border-[#26262B] shadow-inner space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-[#26262B]">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  className="w-16 h-16 rounded-lg object-cover border border-[#26262B]"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{currentProduct.name}</h4>
                  <span className="text-[11px] text-[#FF7A00] font-medium block">
                    {currentProduct.categoryLabel}
                  </span>
                  <span className="text-[10px] text-[#B8B8C0]">
                    MOQ: {currentProduct.moq}
                  </span>
                </div>
              </div>

              {/* Price Calculation Lines */}
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between text-[#B8B8C0]">
                  <span>Base Unit Price ({quantity} units):</span>
                  <span className="text-white font-medium">₹{baseUnitPrice.toFixed(2)} / unit</span>
                </div>

                <div className="flex items-center justify-between text-[#B8B8C0]">
                  <span>Base Production Cost:</span>
                  <span className="text-white font-medium">
                    ₹{(quantity * baseUnitPrice).toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </span>
                </div>

                {selectedFinishes.length > 0 && (
                  <div className="flex items-center justify-between text-[#B8B8C0]">
                    <span>Finishes ({selectedFinishes.length} add-ons):</span>
                    <span className="text-white font-medium">
                      +₹{(quantity * finishAddonCostPerUnit).toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                )}

                {isRushTurnaround && (
                  <div className="flex items-center justify-between text-[#FF7A00]">
                    <span>Express Turnaround Fee (20%):</span>
                    <span className="font-medium">
                      +₹{rushFee.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between text-[#B8B8C0] pt-2 border-t border-[#26262B]">
                  <span>Subtotal (Excl. Tax):</span>
                  <span className="text-white font-medium">
                    ₹{taxableAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[#B8B8C0]">
                  <span>Applicable GST (18% B2B Input):</span>
                  <span className="text-white font-medium">
                    ₹{gst.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="pt-4 border-t border-[#26262B] flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#B8B8C0] block">Estimated Total</span>
                  <span className="text-xs text-emerald-400">Includes GST & Quality Check</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-[#FF7A00]">
                    ₹{grandTotal.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </span>
                  <span className="text-[10px] text-[#B8B8C0] block">
                    (₹{(grandTotal / quantity).toFixed(2)} effective / unit)
                  </span>
                </div>
              </div>

              <div className="text-[11px] text-[#B8B8C0] bg-[#151518] p-3 rounded border border-[#26262B] flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#FF7A00]">verified</span>
                <span>Includes free digital soft proof & physical dispatch in Hyderabad</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 mt-4">
              <button
                onClick={handleWhatsAppSend}
                className="w-full py-3.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                <span>Lock Quote via WhatsApp (+91 8309394934)</span>
              </button>

              <button
                onClick={handleFormSubmit}
                className="w-full py-2.5 px-4 rounded-lg bg-[#1F1F22] hover:bg-[#26262B] border border-[#26262B] text-white text-xs font-medium transition-colors"
              >
                Submit for Pro-Forma Invoice & Formal Approval
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
