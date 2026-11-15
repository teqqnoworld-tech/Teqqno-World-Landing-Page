import React, { useState } from 'react';

interface SampleKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SampleKitModal: React.FC<SampleKitModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [interests, setInterests] = useState<string[]>([
    'Paper GSM Swatches (350-400 GSM)',
    'Spot UV & Foil Samples',
    'Polo Shirt Fabric Swatches',
  ]);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const sampleOptions = [
    'Paper GSM Swatches (130 to 400 GSM)',
    'Spot UV & Metallic Hot Foil Samples',
    'Polo Shirt & T-Shirt Fabric Swatches (220 GSM)',
    'Rigid Box & Presentation Packaging Mockups',
    'Roll-Up Standee & Star Flex Print Samples',
    'Laser Engraved Metal Pen Sample',
  ];

  const toggleInterest = (opt: string) => {
    if (interests.includes(opt)) {
      setInterests(interests.filter((i) => i !== opt));
    } else {
      setInterests([...interests, opt]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `*TeqqnoWorld Physical Sample Box Request*
-----------------------------
*Name:* ${name}
*Company:* ${company}
*Phone / WhatsApp:* ${phone}
*Office Delivery Address:* ${address}
*Requested Swatches:*
${interests.map((item) => `• ${item}`).join('\n')}
-----------------------------
Please confirm dispatch of the corporate evaluation swatch kit.`;

    setTimeout(() => {
      window.open(`https://wa.me/918309394934?text=${encodeURIComponent(message)}`, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#151518] border border-[#26262B] rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative">
        {/* Header */}
        <div className="sticky top-0 bg-[#151518]/95 backdrop-blur-md px-6 py-4 border-b border-[#26262B] flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#1F1F22] flex items-center justify-center text-[#FF7A00] border border-[#26262B]">
              <span className="material-symbols-outlined text-lg">inventory_2</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Request Physical Swatch & Sample Kit</h3>
              <p className="text-[11px] text-[#B8B8C0]">Touch and verify print substrates and fabric quality before bulk ordering</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#1F1F22] text-[#B8B8C0] hover:text-white flex items-center justify-center border border-[#26262B]"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div className="p-4 rounded-xl bg-[#0B0B0D] border border-[#26262B] flex items-start gap-3">
            <span className="material-symbols-outlined text-[#FF7A00] text-xl shrink-0 mt-0.5">
              local_shipping
            </span>
            <div className="text-xs text-[#B8B8C0] leading-relaxed">
              <strong className="text-white block mb-0.5">Complimentary for Corporate Procurement & Enterprises</strong>
              Our sample presentation box includes calibrated paper swatches, tactile velvet coatings, gold foiling strips, polo fabric swatches, and a laser-marked metal pen dispatched right to your office address.
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase font-bold text-[#B8B8C0] mb-2 tracking-wider">
                Select Samples Needed:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {sampleOptions.map((opt, i) => {
                  const isChecked = interests.includes(opt);
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => toggleInterest(opt)}
                      className={`p-2.5 rounded-lg border text-left text-xs transition-all flex items-center justify-between ${
                        isChecked
                          ? 'bg-[#FF7A00]/10 border-[#FF7A00] text-white'
                          : 'bg-[#0B0B0D] border-[#26262B] text-[#B8B8C0]'
                      }`}
                    >
                      <span className="text-[11px] leading-tight font-medium">{opt}</span>
                      <span className="material-symbols-outlined text-sm text-[#FF7A00]">
                        {isChecked ? 'check_box' : 'check_box_outline_blank'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-[11px] uppercase font-bold text-[#B8B8C0] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#0B0B0D] border border-[#26262B] rounded-lg px-3 py-2 text-xs text-white focus:border-[#FF7A00] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase font-bold text-[#B8B8C0] mb-1">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ZenScale Technologies"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-[#0B0B0D] border border-[#26262B] rounded-lg px-3 py-2 text-xs text-white focus:border-[#FF7A00] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase font-bold text-[#B8B8C0] mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#0B0B0D] border border-[#26262B] rounded-lg px-3 py-2 text-xs text-white focus:border-[#FF7A00] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase font-bold text-[#B8B8C0] mb-1">
                  Office Delivery Address & Pincode *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Street, Area, Hyderabad - 500081"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-[#0B0B0D] border border-[#26262B] rounded-lg px-3 py-2 text-xs text-white focus:border-[#FF7A00] focus:outline-none"
                />
              </div>
            </div>

            {submitted && (
              <div className="p-3 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                <span className="material-symbols-outlined text-base">check_circle</span>
                <span>Request received! Opening WhatsApp to confirm dispatch schedule...</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-lg bg-[#FF7A00] hover:bg-[#ff8a1a] text-white text-xs sm:text-sm font-semibold transition-all custom-glow active:scale-[0.99] cursor-pointer"
            >
              Dispatch Free Corporate Swatch Box
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
