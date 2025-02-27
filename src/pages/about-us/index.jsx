import Header from "@/components/Header";
import Footer from "@/sections/Footer";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <Header lgScreen="lg:w-full" />
      <div className="relative">
        {/* Image */}
        <img
          className="w-full h-[500px] object-cover"
          src="https://images.unsplash.com/photo-1587309492480-eae85a198e08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHRlYW18ZW58MHx8MHx8fDA%3D"
          alt="aboutBanner"
        />

        {/* Gradient Overlay */}
        <div className="absolute z-20 top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
          <h1 className="text-[3vw]  text-white">
            Welcome to Lumora Estates, where passion meets purpose.
          </h1>
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0e291a] to-transparent opacity-70"></div>
      </div>
      <section className="bg-[#0e291a] pt-12 pb-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#cc9a64] sm:text-5xl">About Us</h2>
            <p className="mt-4 text-lg font-athena text-gray-300">
              We are dedicated to providing exceptional real estate solutions
              tailored to your needs.
            </p>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1739382120665-fa6bcf8b7833?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D"
                alt="About Us"
                layout="fill"
                objectFit="cover"
                className="rounded-xl animate-scale-infinite"
              />
            </div>

            {/* Text Section */}
            <div className="space-y-6">
              <h3 className="text-3xl  text-[#cc9a64]">Who We Are</h3>
              <p className="text-lg text-gray-300">
                Welcome to Lumora Estates, where passion meets purpose. Founded
                in 2024, we have swiftly become a trailblazer in the real estate
                sector, transforming challenges into opportunities and turning
                ideas into impactful solutions. As a trusted partner, we drive
                success for our clients through innovation, commitment, and a
                customer-first approach.
              </p>
              <p className="text-lg text-gray-300">
                At the core of our organization is a dynamic team of
                professionals who bring their expertise, creativity, and
                dedication to every project. Together, we strive to make a
                lasting impact, ensuring excellence in all aspects of our
                business.
              </p>
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-[#cc9a64] text-[#0e291a] font-semibold rounded-md hover:bg-[#b88653] transition-colors">
                  Learn More
                </button>
                <button className="px-6 py-3 border border-[#cc9a64] text-[#cc9a64] font-semibold rounded-md hover:bg-[#cc9a64] hover:text-[#0e291a] transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
  {/* First Row: Mission and Vision */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
    {/* Mission */}
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-greenTheme">Our Mission</h2>
      <p className="text-gray-700">
        Our mission is to set the benchmark for excellence in real estate by designing spaces that blend luxury, functionality, and environmental stewardship. We are committed to delivering top-tier real estate solutions and embracing cutting-edge technology to make a meaningful difference.
      </p>
    </div>

    {/* Vision */}
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-greenTheme">Our Vision</h2>
      <p className="text-gray-700">
        To become a recognized leader in the real estate sector by setting new standards for quality and innovation, while building lasting relationships with clients and communities.
      </p>
    </div>
  </div>

  {/* Second Row: Core Values and Expertise */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Core Values */}
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-greenTheme">Core Values</h2>
      <ul className="space-y-4 text-gray-700">
        <li>
          <strong>Customer Centricity:</strong> Our customers are at the heart of everything we do.
        </li>
        <li>
          <strong>Innovation:</strong> We embrace creativity to stay ahead of the curve.
        </li>
        <li>
          <strong>Integrity:</strong> Honesty and transparency define our work ethic.
        </li>
        <li>
          <strong>Sustainability:</strong> We are dedicated to building a greener, more sustainable future.
        </li>
        <li>
          <strong>Teamwork:</strong> Collaboration is key to our success.
        </li>
      </ul>
    </div>

    {/* Expertise */}
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-greenTheme">Our Expertise</h2>
      <ul className="space-y-4 text-gray-700">
        <li>
          <strong>Eco-Luxury Retreats:</strong> Sustainable, boutique properties in scenic locations.
        </li>
        <li>
          <strong>Smart City Development:</strong> Future-ready urban communities with IoT and green solutions.
        </li>
        <li>
          <strong>Pop-Up Spaces:</strong> Short-term rentals for events and retail experiments.
        </li>
        <li>
          <strong>Wellness Real Estate:</strong> Homes designed for wellness, featuring meditation spaces, air purifiers, and biophilic designs.
        </li>
        <li>
          <strong>Adaptive Reuse:</strong> Transforming old buildings into modern, vibrant spaces.
        </li>
      </ul>
    </div>
  </div>
</div>
      <Footer />
    </>
  );
};

export default AboutUs;
