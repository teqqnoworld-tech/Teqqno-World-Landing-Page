import React, { useState, useRef, useEffect } from 'react';

interface GenuineGoogleReview {
  id: string;
  name: string;
  initial: string;
  initialBg: string;
  subtitle?: string;
  date: string;
  rating: number;
  content: string;
  ownerResponse?: string;
}

// 100% genuine reviews taken directly from Teqqnoworld Google My Business profile
const GENUINE_REVIEWS: GenuineGoogleReview[] = [
  {
    id: 'rev-aman',
    name: 'Aman Kumar Dhaka',
    initial: 'A',
    initialBg: '#1976D2',
    subtitle: 'Local Guide · 59 reviews',
    date: '6 months ago',
    rating: 5,
    content:
      'I recently got visiting cards printed for my company from TeqqnoWorld in Chandanagar. Overall, the experience was quite good. The print quality of the cards was impressive, with clear text and a professional finish. The staff was cooperative and responsive, helping with the design and making necessary adjustments as per my requirements. Delivery was also on time, which is important for business needs. Pricing felt reasonable compared to the quality provided.',
  },
  {
    id: 'rev-jyoshna',
    name: 'jyoshna reddy',
    initial: 'J',
    initialBg: '#7B1FA2',
    subtitle: 'Local Guide · 9 reviews',
    date: '7 months ago',
    rating: 5,
    content:
      'Sumit was really talented and helpful in designing the cards the way i need them. Thank u so much sumit',
    ownerResponse: 'Thank you so much mam....for your valuable feedback..',
  },
  {
    id: 'rev-chaitanya',
    name: 'chaitanya asoori',
    initial: 'C',
    initialBg: '#E65100',
    subtitle: '6 reviews · 6 photos',
    date: '8 months ago',
    rating: 5,
    content: 'Service is good. Mr summit, he deals with client with professionalism..',
    ownerResponse:
      'Thank you so much for your kind words! We’re glad you had a great experience with Teqqnoworld. Looking forward to serving you again.',
  },
  {
    id: 'rev-swati',
    name: 'Swati Priya',
    initial: 'S',
    initialBg: '#546E7A',
    subtitle: '1 review',
    date: '8 months ago',
    rating: 5,
    content: 'Excellent printing quality and fast delivery. Highly recommended!',
  },
  {
    id: 'rev-seema',
    name: 'Syed Seema',
    initial: 'S',
    initialBg: '#00897B',
    subtitle: '2 reviews',
    date: '8 months ago',
    rating: 5,
    content: 'Good nd genuine app with reasonable price and fast delivery',
  },
  {
    id: 'rev-fara',
    name: 'Fara Faaju',
    initial: 'F',
    initialBg: '#283593',
    subtitle: '2 reviews',
    date: '8 months ago',
    rating: 5,
    content: 'Very good service sir',
    ownerResponse: 'Thank you for your valuable review.',
  },
  {
    id: 'rev-bannoth',
    name: 'Bannoth Naanu Ssingh',
    initial: 'B',
    initialBg: '#4E342E',
    subtitle: '1 review · 1 photo',
    date: '8 months ago',
    rating: 5,
    content: 'They handled my company registration without any tension',
    ownerResponse:
      'Thank you for choosing Teqqnoworld. We truly appreciate your support and are happy to know you are satisfied with our services.',
  },
  {
    id: 'rev-aadarsh',
    name: 'Aadarsh Multiservices',
    initial: 'A',
    initialBg: '#0D47A1',
    subtitle: '5 reviews · 2 photos',
    date: '8 months ago',
    rating: 5,
    content: 'Excellent service, highly professional, highly recommended',
  },
];

const GMB_REVIEW_LINK = 'https://share.google/pePJ5Yafbt3RtDnb3';

export const TestimonialsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [expandedReviews, setExpandedReviews] = useState<Record<string, boolean>>({});
  const [showResponse, setShowResponse] = useState<Record<string, boolean>>({});
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const toggleExpand = (id: string) => {
    setExpandedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleOwnerReply = (id: string) => {
    setShowResponse((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const updateScrollState = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 360;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="reviews" className="py-20 md:py-24 border-b border-[#26262B] bg-[#151518]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1F22] border border-[#26262B] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
            <span className="text-xs font-semibold text-[#B8B8C0] uppercase tracking-wider">
              Google Customer Reviews
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
            Verified Reviews on Google
          </h2>
          <p className="text-sm sm:text-base text-[#B8B8C0]">
            100% genuine feedback directly from our verified clients on Google My Business.
          </p>
        </div>

        {/* Google Reviews Widget Container (Exact structure of image_b0f3d3ef.png) */}
        <div className="max-w-5xl mx-auto">
          {/* Header Bar: Google + Excellent + 5.0 Stars + 14 reviews + Write a review */}
          <div className="bg-[#F8F9FA] rounded-2xl p-4 sm:p-5 mb-6 flex flex-wrap items-center justify-between gap-4 border border-gray-200/90 shadow-sm">
            {/* Left: Google Logo + Excellent + 5.0 Stars + 14 reviews */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-sm sm:text-base">
              {/* Google Brand Logo */}
              <div className="flex items-center font-bold tracking-tight text-xl sm:text-2xl mr-1 select-none">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </div>

              {/* Excellent */}
              <span className="font-bold text-gray-900 text-base sm:text-lg">
                Excellent
              </span>

              {/* 5 Yellow Stars with Ambient Sparkle */}
              <div className="flex items-center text-[#FBBC05]">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current icon-anim-sparkle"
                    style={{ animationDelay: `${i * 0.25}s` }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              {/* 5.0 | 14 reviews */}
              <div className="flex items-center gap-1.5 font-semibold text-gray-800 text-sm sm:text-base">
                <span>5.0</span>
                <span className="text-gray-400 font-normal">|</span>
                <span className="text-gray-700 font-medium">14 reviews</span>
              </div>
            </div>

            {/* Right: Write a review Button */}
            <a
              href={GMB_REVIEW_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all shadow-xs cursor-pointer active:scale-95 group"
            >
              <span className="material-symbols-outlined text-base mr-1 text-gray-600 group-hover:text-[#4285F4] icon-anim-wiggle">edit</span>
              <span>Write a review</span>
            </a>
          </div>

          {/* Cards Carousel Slider Container with Floating Navigation Arrows */}
          <div className="relative group">
            {/* Left Scroll Button (Desktop & Tablet only) */}
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous reviews"
              className={`hidden sm:flex absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-700 items-center justify-center shadow-lg hover:bg-gray-50 hover:scale-110 transition-all cursor-pointer ${
                !canScrollLeft ? 'opacity-30 pointer-events-none' : 'opacity-90 hover:opacity-100'
              }`}
            >
              <svg className="w-5 h-5 stroke-current stroke-2 fill-none group-hover:-translate-x-0.5 transition-transform" viewBox="0 0 24 24">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Right Scroll Button (Desktop & Tablet only) */}
            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Next reviews"
              className={`hidden sm:flex absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-700 items-center justify-center shadow-lg hover:bg-gray-50 hover:scale-110 transition-all cursor-pointer ${
                !canScrollRight ? 'opacity-30 pointer-events-none' : 'opacity-90 hover:opacity-100'
              }`}
            >
              <svg className="w-5 h-5 stroke-current stroke-2 fill-none group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Horizontal Scroll Track with Mobile Touch Snapping */}
            <div
              ref={scrollContainerRef}
              className="flex gap-3 sm:gap-5 overflow-x-auto scroll-smooth pb-3 px-1 no-scrollbar select-none snap-x snap-mandatory"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {GENUINE_REVIEWS.map((review) => {
                const isExpanded = !!expandedReviews[review.id];
                const isOwnerReplyVisible = !!showResponse[review.id];
                const isLongText = review.content.length > 120;
                const displayText =
                  isExpanded || !isLongText
                    ? review.content
                    : `${review.content.slice(0, 120)}...`;

                return (
                  <div
                    key={review.id}
                    className="flex-shrink-0 w-[82vw] sm:w-[320px] md:w-[340px] snap-start bg-[#F8F9FA] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow text-left"
                  >
                    <div>
                      {/* Top Row: Google Initial Avatar (Genuine, No stock photo) + Reviewer Name + Date */}
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-xs select-none"
                          style={{ backgroundColor: review.initialBg }}
                        >
                          {review.initial}
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-gray-900 text-sm sm:text-base leading-tight truncate">
                            {review.name}
                          </h4>
                          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-normal">
                            <span>{review.date}</span>
                            {review.subtitle && (
                              <>
                                <span>•</span>
                                <span className="truncate">{review.subtitle}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Second Row: 5 Yellow Stars + Google Blue Verified Badge */}
                      <div className="flex items-center gap-1.5 mb-3">
                        <div className="flex items-center text-[#FBBC05]">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>

                        {/* Google Blue Verified Checkmark Badge */}
                        <div
                          className="w-4 h-4 rounded-full bg-[#1A73E8] flex items-center justify-center text-white ml-0.5"
                          title="Verified Google Review"
                        >
                          <svg
                            className="w-2.5 h-2.5 stroke-current stroke-3 fill-none"
                            viewBox="0 0 24 24"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                      </div>

                      {/* Third Row: Genuine Review Text */}
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        {displayText}
                      </p>

                      {/* Optional Owner Response Accordion */}
                      {review.ownerResponse && isOwnerReplyVisible && (
                        <div className="mt-3 p-3 bg-white rounded-xl border border-gray-200 text-xs text-gray-600">
                          <div className="flex items-center gap-1.5 font-semibold text-gray-900 mb-1">
                            <span className="w-2 h-2 rounded-full bg-[#1A73E8]" />
                            <span>Response from Teqqnoworld (Owner)</span>
                          </div>
                          <p className="italic">"{review.ownerResponse}"</p>
                        </div>
                      )}
                    </div>

                    {/* Bottom Actions: Read more & Owner response toggle */}
                    <div className="pt-3 mt-1 flex items-center justify-between gap-2 border-t border-gray-100">
                      {isLongText ? (
                        <button
                          onClick={() => toggleExpand(review.id)}
                          className="text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                        >
                          {isExpanded ? 'Read less' : 'Read more'}
                        </button>
                      ) : (
                        <span />
                      )}

                      {review.ownerResponse && (
                        <button
                          onClick={() => toggleOwnerReply(review.id)}
                          className="text-[11px] font-medium text-[#1A73E8] hover:underline cursor-pointer"
                        >
                          {isOwnerReplyVisible ? 'Hide owner reply' : 'View owner reply'}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom link to view Google My Business Profile */}
          <div className="mt-8 text-center">
            <a
              href={GMB_REVIEW_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#B8B8C0] hover:text-[#FF7A00] transition-colors group"
            >
              <span>View all 14 reviews on Google My Business</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform icon-anim-nudge">arrow_outward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
