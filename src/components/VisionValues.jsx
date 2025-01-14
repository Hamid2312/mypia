import React from 'react';
import vision from '../assets/vision.jpg';
import Footer from './Footer';

const VisionValues = () => {
  return (
    <div> 
      <p className="mt-24 ml-4">Home / About Us / Vision & Values</p>
      
      {/* Image Section */}
      <div className="mt-6">
        <img
          src={vision}
          alt="Vision and Values"
          className="w-full max-w-[96%] mx-auto" // Responsive image
        />
      </div>

      {/* Text Content Section */}
      <div className="ml-12 mt-8">
        <h1 className="text-[#006937] text-3xl font-sans font-bold">Our Vision & Values</h1>

        {/* Vision Section */}
        <div className="mt-8">
          <h2 className="text-[#006937] text-2xl font-bold">Vision</h2>
          <p className="mt-6 mb-6 text-base">PIA’s vision is to be a world-class profitable airline that meets customer expectations through excellent services, on-time performance, innovative products, and absolute safety.</p>
        </div>

        {/* Mission Section */}
        <div className="mt-8">
          <h2 className="text-[#006937] text-2xl font-bold">Mission</h2>
          <p className="mt-6 mb-6 text-base">Employee teams will contribute towards making PIA a global airline of choice through:</p>
          <ul className="list-disc ml-6 mt-4 mb-6">
            <li>Offering quality customer services and innovative products.</li>
            <li>Using state-of-the-art technologies.</li>
            <li>Ensuring cost-effective measures in procurement and operations.</li>
            <li>Developing Safety Culture.</li>
          </ul>
        </div>

        {/* Core Values Section */}
        <div className="mt-8">
          <h2 className="text-[#006937] text-xl font-bold">Core Values</h2>
          <ul className="list-disc ml-6 mt-4">
            <li className="font-bold">Customer Expectations</li>
            <p>(Convenience, Care, Affordability)</p>
            <li className="font-bold">Service</li>
            <p>(Personalized, Courteous, Passionate)</p>
            <li className="font-bold">Innovation</li>
            <p>(New Ideas, Products, Value Added Services)</p>
            <li className="font-bold">Cohesiveness</li>
            <p>(Respect for Individuals, Teamwork, and Effective Communication)</p>
            <li className="font-bold">Integrity</li>
            <p>(Business Ethics, Accountability, and Transparency)</p>
            <li className="font-bold">Reliability</li>
            <p>(Loyalty and Consistency)</p>
            <li className="font-bold">Safety</li>
            <p>(Passengers, Employees, Environment)</p>
            <li className="font-bold">Social Responsibility</li>
            <p>(Welfare, Health, Education)</p>
          </ul>
        </div>

        {/* Company Status Section */}
        <div className="mt-8">
          <h2 className="text-[#006937] text-xl font-bold">Status of Company</h2>
          <p className="text-base">Pakistan International Airlines Corporation Limited (PIACL) incorporated as Company Limited by shares with company registration office Karachi on December 04, 2015...</p>

          <h2 className="text-[#006937] text-xl font-bold mt-6">National Tax No.</h2>
          <p className="text-base">NTN No. 0803450-8</p>

          <h2 className="text-[#006937] text-xl font-bold mt-6">SECP Registration</h2>
          <p className="text-base">SECP Registration: Corporate Universal Identification No: 0096537</p>

          <h2 className="text-[#006937] text-xl font-bold mt-6">Address of Registered Office</h2>
          <p className="text-base">PIAC Head Office, PIA Building, Jinnah International Airport, Karachi – 75200.PAKISTAN</p>

          <h2 className="text-[#006937] text-xl font-bold mt-6">Phone Numbers</h2>
          <p className="text-base">Universal Access Number | 0092 21 111 786 786 (For Customer Service)</p>
          <p className="text-base">PIA Head Office | 0092 21 9904 0000</p>
          <p className="text-base">Investor Relations | 0092 21 9904 4646</p>

          <h2 className="text-[#006937] text-xl font-bold mt-6">Email Address</h2>
          <p className="text-base">General Queries | info@piac.aero</p>
          <p className="text-base">Investor Related Queries | asstt.secretary@piac.aero</p>
        </div>

        {/* Subsidiaries and PIAC Conversion */}
        <div className="mt-8">
          <h2 className="text-[#006937] text-2xl font-bold">Subsidiaries:</h2>
          <ul className="list-disc mt-4 mb-4 ml-14">
            <li>PIA Investments Limited</li>
            <li>Skyrooms (Pvt) Limited</li>
            <li>Distribution Systems Pakistan (Private) Limited-Subsidiaries under Easy Exit Scheme of Securities and Exchange Commission of Pakistan</li>
            <li>PIA Holding (Private) Limited</li>
            <li>PIA Shaver Poultry Breeding Farms (Private) Limited</li>
            <li>PIA Hotels Limited Associated Companies</li>
            <li>Minhal Incorporated Sharjah</li>
          </ul>

          <h2 className="text-[#006937] text-2xl font-bold mt-6">PIAC (CONVERSION) ACT 2016</h2>
          <p className="text-[14px] mb-3">Pakistan International Airlines Corporation (PIAC) has been converted via Pakistan International Airlines Corporation (Conversion) Act, 2016 (Act No. XV of 2016)...</p>
          <p className="text-[14px] mb-3">If you have any questions please contact us at info@piac.aero</p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default VisionValues;
