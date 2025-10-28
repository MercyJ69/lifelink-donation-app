import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Save Lives Through Organ, Tissue & Blood Donation
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-red-100">
                Every donation counts. Be a hero today through organ donation, tissue donation, blood donation, or sharing life-saving fluids. Help save lives in your community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/register"
                  className="bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-red-50 transition-all shadow-lg"
                >
                  Become a Donor
                </Link>
                <Link
                  to="/about"
                  className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-red-600 transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 max-w-md w-full">
                <div className="text-center">
                  <svg
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-4 sm:mb-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">One Donation</h3>
                  <p className="text-lg sm:text-xl text-red-100">Can Save 3 Lives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-2">10K+</div>
              <p className="text-gray-600 text-sm sm:text-base">Registered Donors</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-2">25K+</div>
              <p className="text-gray-600 text-sm sm:text-base">Lives Saved</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-2">50+</div>
              <p className="text-gray-600 text-sm sm:text-base">Partner Hospitals</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-2">24/7</div>
              <p className="text-gray-600 text-sm sm:text-base">Emergency Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-red-600 mx-auto"></div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="bg-red-600 text-white rounded-full p-6 sm:p-8">
                    <svg
                      className="w-12 h-12 sm:w-16 sm:h-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                    To create a comprehensive lifeline network connecting generous donors with those in critical medical need through organ, tissue, fluid, and blood donation programs, ensuring no life is lost due to preventable shortages.
                  </p>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    We strive to build a community of compassionate individuals who understand the power of giving organs, tissues, and life-saving fluids, and are committed to making a difference in emergency situations and chronic care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Vision
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-red-600 mx-auto"></div>
            </div>
            <div className="bg-gradient-to-br from-white to-red-50 rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
              <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="bg-red-600 text-white rounded-full p-6 sm:p-8">
                    <svg
                      className="w-12 h-12 sm:w-16 sm:h-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                    A future where every person in medical need has immediate access to compatible organs, tissues, fluids, and blood through a comprehensive national donation network powered by technology and compassion.
                  </p>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    We envision a society where organ, tissue, fluid, and blood donation are regular practices, medical shortages are eliminated, and every emergency is met with a prompt, life-saving response.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Become a Donor?
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-red-600 mx-auto mb-4"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Your donation can save lives in countless ways - from emergency organ transplants to routine blood transfusions and tissue repairs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-red-50 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="bg-red-600 text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4 mx-auto md:mx-0">
                <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 text-center md:text-left">
                Save Lives
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center md:text-left">
                One donation can save up to three lives. Your contribution directly helps patients in surgeries, trauma care, and cancer treatments.
              </p>
            </div>

            <div className="bg-red-50 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="bg-red-600 text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4 mx-auto md:mx-0">
                <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 text-center md:text-left">
                Health Benefits
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center md:text-left">
                Regular blood donation helps maintain healthy iron levels, reduces the risk of heart disease, and provides a free mini health check-up.
              </p>
            </div>

            <div className="bg-red-50 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="bg-red-600 text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4 mx-auto md:mx-0">
                <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 text-center md:text-left">
                Community Impact
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center md:text-left">
                Join a community of heroes making a real difference. Blood cannot be manufactured – it can only come from generous donors like you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-red-100 max-w-3xl mx-auto">
            Join thousands of donors who are saving lives every day. Registration takes less than 5 minutes.
          </p>
          <Link
            to="/register"
            className="inline-block bg-white text-red-600 px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-red-50 transition-all shadow-xl transform hover:scale-105"
          >
            Register as a Donor Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
