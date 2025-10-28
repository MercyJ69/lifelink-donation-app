import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About LifeLink
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
            Connecting hearts, saving lives through compassionate organ, tissue, fluid, and blood donation
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                LifeLink was founded with a simple yet powerful mission: to ensure that no life is lost due to medical shortages of organs, tissues, fluids, or blood. We recognized the critical gap between generous donors and those in desperate medical need, and we set out to bridge that gap through technology and community engagement.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                Our platform was born from the understanding that every second counts in medical emergencies. We've created a comprehensive system that connects registered donors of all types with hospitals and patients in real-time, ensuring that organ transplants, tissue repairs, fluid transfusions, and blood transfusions are always within reach.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                Today, we're proud to be part of a growing network of heroes – ordinary people doing extraordinary things by giving the gift of life in countless ways. Together, we're not just saving lives; we're building a society where medical hopelessness becomes hope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
            Our Core Values
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <div className="bg-red-100 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Compassion</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We believe in the power of human kindness and empathy to create positive change in people's lives.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <div className="bg-red-100 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Urgency</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We understand that every moment matters in medical emergencies and work tirelessly to respond quickly.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <div className="bg-red-100 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We maintain the highest standards of transparency, reliability, and ethical conduct in all our operations.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <div className="bg-red-100 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Community</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We foster a strong sense of community among donors, recipients, and healthcare providers.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <div className="bg-red-100 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We leverage technology to create efficient solutions that make blood donation accessible and convenient.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <div className="bg-red-100 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We strive for excellence in every aspect of our service, ensuring quality and reliability at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
            How LifeLink Works
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Register</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Sign up as a donor by providing your details, blood type, and contact information.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Get Notified</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Receive alerts when your blood type is needed in your area for emergencies.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Donate</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Visit the nearest blood bank or hospital to make your life-saving donation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Save Lives</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Your donation helps save lives and makes you a hero in someone's life story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Join Our Life-Saving Community
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 text-red-100 max-w-2xl mx-auto">
            Be part of something bigger. Register today and become a hero.
          </p>
          <Link
            to="/register"
            className="inline-block bg-white text-red-600 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-red-50 transition-all shadow-xl"
          >
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
