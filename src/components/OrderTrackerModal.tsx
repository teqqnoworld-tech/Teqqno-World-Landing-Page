import React, { useState } from 'react';
import { DEMO_TRACKED_ORDERS } from '../data/catalogData';

interface OrderTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderTrackerModal: React.FC<OrderTrackerModalProps> = ({ isOpen, onClose }) => {
  const [jobIdInput, setJobIdInput] = useState('TQW-8841');
  const [searchedOrder, setSearchedOrder] = useState(DEMO_TRACKED_ORDERS['TQW-8841']);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = jobIdInput.trim().toUpperCase();
    if (DEMO_TRACKED_ORDERS[cleanId]) {
      setSearchedOrder(DEMO_TRACKED_ORDERS[cleanId]);
    } else {
      // Create a simulated order for any custom ID typed
      setSearchedOrder({
        orderId: cleanId,
        clientName: 'Corporate Enterprise Client',
        productName: 'Custom Production Batch',
        quantity: 1000,
        estimatedDelivery: 'In Production (Est. 3-4 days)',
        steps: [
          { title: 'Order Intake & Specifications Logged', description: 'Specifications entered into production queue', date: 'Yesterday', status: 'completed' },
          { title: 'Digital Proof Review', description: 'Awaiting client coordinator approval', date: 'Today, 10:00 AM', status: 'current' },
          { title: 'Offset Printing Batch', description: 'Queued on 4-color press', date: 'Tomorrow', status: 'pending' },
          { title: 'Quality Inspection & Dispatch', description: 'Final packaging & delivery', date: 'Est. in 3 days', status: 'pending' },
        ],
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#151518] border border-[#26262B] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        {/* Header */}
        <div className="sticky top-0 bg-[#151518]/95 backdrop-blur-md px-6 py-4 border-b border-[#26262B] flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#1F1F22] flex items-center justify-center text-[#FF7A00] border border-[#26262B]">
              <span className="material-symbols-outlined text-lg">local_shipping</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Live Production & Job Tracker</h3>
              <p className="text-[11px] text-[#B8B8C0]">Track real-time pre-press, proofing, and dispatch status</p>
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
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#B8B8C0] text-sm">
                tag
              </span>
              <input
                type="text"
                placeholder="Enter Job / Order ID (e.g. TQW-8841)..."
                value={jobIdInput}
                onChange={(e) => setJobIdInput(e.target.value)}
                className="w-full bg-[#0B0B0D] border border-[#26262B] rounded-lg pl-9 pr-3 py-2 text-xs sm:text-sm text-white placeholder-[#B8B8C0]/50 focus:border-[#FF7A00] focus:outline-none uppercase"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-[#FF7A00] hover:bg-[#ff8a1a] text-white text-xs font-semibold"
            >
              Track Job
            </button>
          </form>

          {/* Quick Demo Job ID Pills */}
          <div className="flex items-center gap-2 text-[11px] text-[#B8B8C0]">
            <span>Try sample job codes:</span>
            <button
              type="button"
              onClick={() => {
                setJobIdInput('TQW-8841');
                setSearchedOrder(DEMO_TRACKED_ORDERS['TQW-8841']);
              }}
              className="px-2 py-0.5 rounded bg-[#1F1F22] border border-[#26262B] text-[#FF7A00] hover:border-[#FF7A00]/50"
            >
              TQW-8841 (Visiting Cards)
            </button>
            <button
              type="button"
              onClick={() => {
                setJobIdInput('TQW-9102');
                setSearchedOrder(DEMO_TRACKED_ORDERS['TQW-9102']);
              }}
              className="px-2 py-0.5 rounded bg-[#1F1F22] border border-[#26262B] text-[#FF7A00] hover:border-[#FF7A00]/50"
            >
              TQW-9102 (Corporate Polos)
            </button>
          </div>

          {/* Job Overview Summary */}
          {searchedOrder && (
            <div className="bg-[#0B0B0D] p-5 rounded-xl border border-[#26262B] space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-2 pb-3 border-b border-[#26262B]">
                <div>
                  <span className="text-[10px] text-[#FF7A00] uppercase font-bold tracking-wider">
                    Job ID: {searchedOrder.orderId}
                  </span>
                  <h4 className="text-base font-bold text-white mt-0.5">{searchedOrder.productName}</h4>
                  <p className="text-xs text-[#B8B8C0]">Account: {searchedOrder.clientName}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[#B8B8C0] block uppercase font-semibold">Quantity</span>
                  <span className="text-sm font-bold text-white">{searchedOrder.quantity.toLocaleString()} Units</span>
                  <span className="text-[11px] text-emerald-400 block mt-0.5 font-medium">
                    ETA: {searchedOrder.estimatedDelivery}
                  </span>
                </div>
              </div>

              {/* Progress Stepper Timeline */}
              <div className="space-y-4 pt-2">
                {searchedOrder.steps.map((step, idx) => {
                  const isDone = step.status === 'completed';
                  const isCurrent = step.status === 'current';
                  return (
                    <div key={idx} className="flex items-start gap-3.5 relative">
                      {/* Connecting vertical line */}
                      {idx !== searchedOrder.steps.length - 1 && (
                        <div
                          className={`absolute left-3.5 top-7 bottom-0 w-0.5 ${
                            isDone ? 'bg-[#FF7A00]' : 'bg-[#26262B]'
                          }`}
                        />
                      )}

                      {/* Step Indicator Pin */}
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 z-10 ${
                          isDone
                            ? 'bg-[#FF7A00] text-white shadow-sm'
                            : isCurrent
                            ? 'bg-[#FF7A00]/20 border-2 border-[#FF7A00] text-[#FF7A00] animate-pulse'
                            : 'bg-[#1F1F22] border border-[#26262B] text-[#B8B8C0]'
                        }`}
                      >
                        {isDone ? (
                          <span className="material-symbols-outlined text-sm font-bold">check</span>
                        ) : (
                          <span className="text-xs font-bold">{idx + 1}</span>
                        )}
                      </div>

                      {/* Step Info */}
                      <div className="flex-1 pb-4">
                        <div className="flex items-baseline justify-between gap-2">
                          <span
                            className={`text-xs font-semibold ${
                              isDone || isCurrent ? 'text-white' : 'text-[#B8B8C0]'
                            }`}
                          >
                            {step.title}
                          </span>
                          <span className="text-[10px] text-[#B8B8C0] whitespace-nowrap">{step.date}</span>
                        </div>
                        <p className="text-[11px] text-[#B8B8C0] mt-0.5 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Coordinator support contact */}
              <div className="pt-3 border-t border-[#26262B] flex items-center justify-between text-xs">
                <span className="text-[#B8B8C0]">Assigned Production Lead: Ramesh K.</span>
                <a
                  href={`https://wa.me/918309394934?text=Hi%20TeqqnoWorld,%20checking%20status%20for%20order%20${searchedOrder.orderId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF7A00] hover:underline flex items-center gap-1 font-medium"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  <span>Contact Production Coordinator</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
