import React, { useState } from 'react';
import { AnimatedIcon } from './AnimatedIcon';

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('Commercial Printing Services');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `*TeqqnoWorld Quote Inquiry*
-----------------------------
*Name:* ${fullName}
*Phone / WhatsApp:* ${phone}
*Company:* ${company || 'N/A'}
*Service / Product Required:* ${service}
*Project Specifications:*
${details}
-----------------------------
Please review and reply with pricing & production timeline.`;

    setTimeout(() => {
      const url = `https://wa.me/918309394934?text=${encodeURIComponent(message)}`;
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.click();
    }, 800);
  };

  return (
    <section className="py-12 sm:py-20 md:py-24 border-b border-[#26262B] bg-[#0B0B0D]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          {/* Left: Contact & Location Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151518] border border-[#26262B] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
                <span className="text-xs font-semibold text-[#B8B8C0] uppercase tracking-wider">
                  Direct Channels
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                Let's Discuss Your Next Campaign
              </h2>
              <p className="text-sm text-[#B8B8C0] mb-8 leading-relaxed">
                Drop by our Hyderabad production hub or message our commercial sales team directly for urgent requests and sample inspections.
              </p>

              <div className="space-y-4">
                {/* Primary Address */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#151518] border border-[#26262B] group">
                  <div className="w-9 h-9 rounded-lg bg-[#0B0B0D] border border-[#26262B] group-hover:border-[#FF7A00] flex items-center justify-center text-[#FF7A00] shrink-0 mt-0.5 icon-radar-halo">
                    <AnimatedIcon name="factory" animation="float" color="text-[#FF7A00]" size="text-lg" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold text-white">Primary Facility & Office</p>
                      <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-[#FF7A00]/15 text-[#FF7A00] border border-[#FF7A00]/30">Primary</span>
                    </div>
                    <p className="text-xs text-[#B8B8C0] mt-1 leading-relaxed">
                      Sri Datta Plaza, Plot No. 14, Ameenpur Road, Behind HDFC Bank, Padmaja Nagar, Suraksha Colony, Bandam Kommu, Chanda Nagar, Hyderabad, Telangana – 502032
                    </p>
                  </div>
                </div>

                {/* Secondary Address */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#151518] border border-[#26262B] group">
                  <div className="w-9 h-9 rounded-lg bg-[#0B0B0D] border border-[#26262B] group-hover:border-[#FF7A00] flex items-center justify-center text-[#FF7A00] shrink-0 mt-0.5 icon-radar-halo">
                    <AnimatedIcon name="storefront" animation="float" color="text-[#FF7A00]" size="text-lg" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold text-white">Secondary Address</p>
                      <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-[#26262B] text-[#B8B8C0] border border-[#3E3E46]">Branch</span>
                    </div>
                    <p className="text-xs text-[#B8B8C0] mt-1 leading-relaxed">
                      Shop No-504, 5th Floor, Above Vijetha Super Market, Bachupally Mallampet Road, Bachupally, Hyderabad – 500090
                    </p>
                  </div>
                </div>

                {/* Phone / WhatsApp with Animated Ringing Phone */}
                <div className="flex items-start gap-3.5 px-1 pt-1 group">
                  <div className="w-9 h-9 rounded-lg bg-[#151518] border border-[#26262B] group-hover:border-[#FF7A00] flex items-center justify-center text-[#FF7A00] shrink-0 mt-0.5 icon-radar-halo">
                    <AnimatedIcon name="call" animation="ring" color="text-[#FF7A00]" size="text-lg" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Phone & WhatsApp Direct</p>
                    <p className="text-xs text-[#B8B8C0] mt-0.5">
                      <a className="text-white hover:text-[#FF7A00] transition-colors font-medium text-sm inline-flex items-center gap-1.5" href="tel:+918309394934">
                        <span>+91 8309394934</span>
                      </a>
                    </p>
                  </div>
                </div>

                {/* Hours with Animated Clock */}
                <div className="flex items-start gap-3.5 px-1 group">
                  <div className="w-9 h-9 rounded-lg bg-[#151518] border border-[#26262B] group-hover:border-[#FF7A00] flex items-center justify-center text-[#FF7A00] shrink-0 mt-0.5 icon-radar-halo">
                    <AnimatedIcon name="schedule" animation="wiggle" color="text-[#FF7A00]" size="text-lg" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Production & Office Hours</p>
                    <p className="text-xs text-[#B8B8C0] mt-0.5">
                      Monday – Saturday: 9:30 AM – 8:30 PM (IST)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Box */}
            <div className="mt-8 p-6 rounded-xl bg-[#151518] border border-[#26262B] group">
              <p className="text-sm font-bold text-white mb-1">Prefer an instant WhatsApp conversation?</p>
              <p className="text-xs text-[#B8B8C0] mb-4">
                Share files, artwork, size specifications, and queries directly with an active estimator.
              </p>
              <a
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold transition-all shadow-md group"
                href="https://wa.me/918309394934?text=Hello%20TeqqnoWorld,%20I%20have%20an%20urgent%20print%20inquiry."
                rel="noopener noreferrer"
                target="_blank"
              >
                <AnimatedIcon name="chat" animation="pulse" color="text-white" size="text-lg" />
                <span>Open WhatsApp Chat (+91 8309394934)</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Quote Form */}
          <div className="lg:col-span-7" id="contact-quote">
            <div className="bg-[#151518] p-4 sm:p-8 md:p-10 rounded-2xl border border-[#26262B] shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Request an Instant Free Quote</h3>
              <p className="text-xs sm:text-sm text-[#B8B8C0] mb-8">
                Fill out the brief specifications below. Our estimators respond within 2-4 hours with a formal proposal.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold text-[#B8B8C0] uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      className="w-full bg-[#0B0B0D] border border-[#26262B] rounded-lg px-4 py-3 text-white placeholder-[#B8B8C0]/40 focus:border-[#FF7A00] focus:outline-none focus:ring-1 focus:ring-[#FF7A00] text-sm"
                      placeholder="e.g. Ramesh Varma"
                      required
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[#B8B8C0] uppercase mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      className="w-full bg-[#0B0B0D] border border-[#26262B] rounded-lg px-4 py-3 text-white placeholder-[#B8B8C0]/40 focus:border-[#FF7A00] focus:outline-none focus:ring-1 focus:ring-[#FF7A00] text-sm"
                      placeholder="+91 98765 43210"
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold text-[#B8B8C0] uppercase mb-2">
                      Company / Business Name (Optional)
                    </label>
                    <input
                      className="w-full bg-[#0B0B0D] border border-[#26262B] rounded-lg px-4 py-3 text-white placeholder-[#B8B8C0]/40 focus:border-[#FF7A00] focus:outline-none focus:ring-1 focus:ring-[#FF7A00] text-sm"
                      placeholder="e.g. Novus Technologies"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[#B8B8C0] uppercase mb-2">
                      Service / Product Required *
                    </label>
                    <select
                      className="w-full bg-[#0B0B0D] border border-[#26262B] rounded-lg px-4 py-3 text-white focus:border-[#FF7A00] focus:outline-none focus:ring-1 focus:ring-[#FF7A00] text-sm"
                      required
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    >
                      {/* SERVICES */}
                      <optgroup label="📋 All Services & Solutions">
                        <option value="Commercial Printing Services">Commercial Printing (Cards, Flyers, Catalogues)</option>
                        <option value="Promotional Merch & Apparel">Promotional Merch & Apparel (Polos, Caps, Umbrellas)</option>
                        <option value="Corporate Branding & Signage">Corporate Branding & Outdoor Signage</option>
                        <option value="Corporate Executive Gifting">Corporate Executive Gifting & Onboarding Kits</option>
                        <option value="Design & Brand Identity">Design & Brand Identity (Logos & Collaterals)</option>
                        <option value="Business Support & Registration">Business Support & Registration (GST, MSME, Trademark)</option>
                        <option value="Digital Marketing Services">Digital Marketing Services (Meta Ads, Google Ads, SEO)</option>
                        <option value="Multiple Integrated Corporate Solutions">Multiple Integrated Corporate Solutions</option>
                      </optgroup>

                      {/* PRINTING PRODUCTS */}
                      <optgroup label="📄 Paper & Print Products">
                        <option value="Visiting Card">Visiting Card (Velvet, Spot UV, Foil)</option>
                        <option value="Billbook">Billbook & Invoices (NCR Carbonless)</option>
                        <option value="Pamplets & Flyers">Pamplets & Marketing Flyers</option>
                        <option value="Catalogue & Brochure">Catalogue & Folded Brochures</option>
                        <option value="ID Card Lanyards Print">ID Card & Satin Lanyards Print</option>
                        <option value="Table Calendar">Table Calendar (Desktop Easel)</option>
                        <option value="Wall Calendar">Wall Hanging Calendar</option>
                      </optgroup>

                      {/* APPAREL & PROMOTIONAL MERCH */}
                      <optgroup label="👕 Apparel & Promotional Merchandise">
                        <option value="Polo Tshirt Printing">Polo Tshirt Printing (220 GSM Bio-Washed)</option>
                        <option value="Round Neck Tshirt Printing">Round Neck Tshirt Printing (180 GSM Cotton)</option>
                        <option value="Hoodies Printing">Hoodies Printing (340 GSM Heavy Fleece)</option>
                        <option value="Cap Printing">Cap Printing (6-Panel Twill Embroidery)</option>
                        <option value="Coffee Mug Printing">Coffee Mug Printing (350ml Ceramic)</option>
                        <option value="Nonwoven Bags">Nonwoven Eco Shopping Bags</option>
                        <option value="Promotional Umbrella">Promotional Handheld Umbrella</option>
                      </optgroup>

                      {/* EXHIBITION & SIGNAGE PRODUCTS */}
                      <optgroup label="🚩 Exhibition & Outdoor Signage">
                        <option value="Premium Roll-Up Standee">Premium Roll-Up Standee (80x200 cm)</option>
                        <option value="Flex & Vinyle Print">Flex & Vinyle Print (Star Flex, Glow Sign)</option>
                        <option value="Clipon Led Board">Clipon Led Board (Snap Frame Light Box)</option>
                        <option value="Demo Tent Canopy">Demo Tent Canopy (10x10 FT Pop-Up Booth)</option>
                        <option value="Gazebo">Gazebo (Folding Promotional Tent)</option>
                        <option value="Promotional Table">Promotional Table / Sampling Counter</option>
                        <option value="Garden Umbrella">Garden Umbrella (6-8 FT Standing)</option>
                        <option value="Feather Flag">Feather Flag / Sail Advertising Flag</option>
                      </optgroup>

                      {/* CORPORATE GIFTING */}
                      <optgroup label="🎁 Corporate Gifting">
                        <option value="Corporate Gifting Hampers">Corporate Gifting (Onboarding & Client Hampers)</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#B8B8C0] uppercase mb-2">
                    Brief Project Details & Quantity *
                  </label>
                  <textarea
                    className="w-full bg-[#0B0B0D] border border-[#26262B] rounded-lg p-4 text-white placeholder-[#B8B8C0]/40 focus:border-[#FF7A00] focus:outline-none focus:ring-1 focus:ring-[#FF7A00] text-sm"
                    placeholder="Specify estimated quantities, preferred dimensions, deadlines, or paper/fabric requirements..."
                    required
                    rows={4}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                  />
                </div>

                {submitted && (
                  <div className="p-4 rounded-lg bg-[#1F1F22] border border-[#FF7A00]/50 text-white flex items-center gap-3">
                    <AnimatedIcon name="check_circle" animation="sparkle" color="text-[#FF7A00]" size="text-xl" />
                    <span className="text-xs text-[#E4E1E6]">
                      Thank you! Your inquiry has been registered. Our estimator is connecting with you on WhatsApp right now.
                    </span>
                  </div>
                )}

                <button
                  className="w-full py-4 rounded-lg bg-[#FF7A00] hover:bg-[#ff8a1a] text-white text-xs sm:text-sm font-semibold transition-all custom-glow active:scale-[0.99] cursor-pointer shadow-lg shadow-[#FF7A00]/25 flex items-center justify-center gap-2 group"
                  type="submit"
                >
                  <span>Submit Inquiry & Connect on WhatsApp</span>
                  <AnimatedIcon name="send" animation="nudge" color="text-white" size="text-sm" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
