import React, { useState } from 'react';

import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const HomeScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      name: "John Okafor",
      role: "Business Owner",
      text: "Amazing Property Nigeria made my dream of owning a luxury home in Lagos a reality. Their professional team guided me through every step of the process."
    },
    {
      name: "Sarah Adebayo",
      role: "Tech Entrepreneur",
      text: "The team's professionalism and attention to detail made my property search seamless. I couldn't be happier with my new home in Victoria Island."
    },
    {
      name: "Michael Eze",
      role: "Corporate Executive",
      text: "Their market knowledge and expertise helped me find the perfect investment property in Abuja. Highly recommended for serious property buyers."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const PropertyCard = ({ title, specs, price }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src="https://img.freepik.com/free-photo/office-buildings_1127-3158.jpg?t=st=1736290699~exp=1736294299~hmac=093cf74eb389f7418b9fa49f4710c227e96b9555b0a89b818b7eead75c8f67f3&w=740" alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-2">{specs}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-custom">{price}</span>
          <button className="rounded-md bg-brown-500 text-white px-4 py-2">View Details</button>
        </div>
      </div>
    </div>
  );

  const NeighborhoodCard = ({ name, price }) => (
    <div className="relative group overflow-hidden rounded-lg">
      <img 
        src="https://img.freepik.com/premium-photo/aerial-view-parque-vicentina-aranha-sao-jose-dos-campos-brazil-chapel-old-sanatorium_361869-1563.jpg?w=826"
        alt={name}
        className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
        <div className="absolute bottom-6 left-6">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-white/80">{price}</p>
        </div>
      </div>
    </div>
  );

  const ContactInfo = ({ icon, text }) => (
    <div className="flex items-start">
      <i className={`fas fa-${icon} text-custom mt-1`} />
      <p className="ml-4 text-gray-300">{text}</p>
    </div>
  );

  return (
    <div className="font-Popins bg-gray-50">
      {/* Navigation */}
      <header className="fixed w-full bg-white shadow-sm z-50">
        <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src="amslogo.jpg" alt="Amazing Property Nigeria" className="h-8" />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-custom font-medium">Home</a>
              <a href="#" className="text-gray-600 hover:text-custom font-medium">Properties</a>
              <a href="#" className="text-gray-600 hover:text-custom font-medium">About Us</a>
              <a href="#" className="text-gray-600 hover:text-custom font-medium">Contact</a>
              <button className="rounded-md bg-brown-500 text-white px-6 py-2 font-medium">Search Properties</button>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-8xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Discover Your Dream Property in Nigeria
                </h1>
                <p className="text-xl text-gray-600">
                  Find the perfect home that matches your lifestyle and aspirations with Nigeria's most trusted real estate partner.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                      <select className="w-full border-gray-300 rounded-md">
                        <option>Apartment</option>
                        <option>House</option>
                        <option>Villa</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <select className="w-full border-gray-300 rounded-md">
                        <option>Lagos</option>
                        <option>Abuja</option>
                        <option>Port Harcourt</option>
                      </select>
                    </div>
                  </div>
                  <button className="rounded-md w-full bg-brown-500 text-white py-3 font-medium">
                    Search Properties
                  </button>
                </div>
              </div>
              <div>
                <img src="https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661456.jpg?t=st=1736290604~exp=1736294204~hmac=df8e5f10e5642a110694ca94361479948d04e3965f34e0b8e8df86e25fc0aa7f&w=740" alt="Luxury Property" className="w-full rounded-lg shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Featured Properties</h2>
              <p className="mt-4 text-gray-600">Explore our handpicked selection of premium properties</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Luxury Apartment in Lekki",
                  specs: "3 Beds • 2 Baths • 1,500 sqft",
                  price: "₦75,000,000"
                },
                {
                  title: "Modern Villa in Abuja",
                  specs: "5 Beds • 4 Baths • 3,200 sqft",
                  price: "₦150,000,000"
                },
                {
                  title: "Exclusive Penthouse in Victoria Island",
                  specs: "4 Beds • 3 Baths • 2,800 sqft",
                  price: "₦200,000,000"
                }
              ].map((property, index) => (
                <PropertyCard key={index} {...property} />
              ))}
            </div>
          </div>
        </section>

            {/* tour video */}
            <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Experience Luxury Living</h2>
              <p className="mt-4 text-gray-400">Take a virtual tour of our premium properties</p>
            </div>
            <div className="aspect-w-16 aspect-h-9">

            <iframe  className='w-full h-[500px]' src="https://www.youtube.com/embed/jax9crvnKmg?si=pOmYMUMWZo-mWP_x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              {/* <iframe 
                className="rounded-lg"
                src="https://youtu.be/embed/jax9crvnKmg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              /> */}
            </div>
          </div>
        </section>


        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Amazing Property Nigeria</h2>
                <p className="text-gray-600 mb-8">
                  With over 15 years of experience in the Nigerian real estate market, we've helped thousands of families find their perfect homes. 
                  Our commitment to excellence and customer satisfaction has made us the most trusted name in property.
                </p>
                <div className="grid grid-cols-3 gap-8">
                  {[
                    { value: "15+", label: "Years Experience" },
                    { value: "5000+", label: "Properties Sold" },
                    { value: "98%", label: "Happy Clients" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl font-bold text-custom">{stat.value}</div>
                      <div className="text-gray-600 mt-2">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img src="https://img.freepik.com/free-photo/black-businessman-happy-expression_1194-2795.jpg?t=st=1736290923~exp=1736294523~hmac=f6eaf25e592195ba467c799934b1ecffd94d1f86d0b1585cb3f2a4a5d3d5550c&w=740" alt="Our Team" className="rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </section>



        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
              <p className="mt-4 text-gray-600">Read testimonials from our satisfied customers</p>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-lg shadow-lg mx-auto max-w-2xl">
                <div className="flex items-center mb-4">
                  <img src="https://img.freepik.com/free-photo/happy-african-american-young-man-colorful-shirt-wearing-glasses-looking-camera-smiling-cheerfully_141793-108881.jpg?t=st=1736294911~exp=1736298511~hmac=f1db48fb26c0c8f06489d2107663891f2c92acc2ca485549cb69ff78858013a2&w=740" alt="Client" className="w-16 h-16 rounded-full" />
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-900">{testimonials[currentSlide].name}</h4>
                    <p className="text-gray-600">{testimonials[currentSlide].role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonials[currentSlide].text}</p>
              </div>
              <div className="flex justify-center mt-6 space-x-2">
                <button 
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                >
                  ←
                </button>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentSlide === index ? 'bg-brown-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
                <button 
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Neighborhoods */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Featured Neighborhoods</h2>
              <p className="mt-4 text-gray-600">Explore Nigeria's most sought-after locations</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Lekki", price: "Starting from ₦50M" },
                { name: "Abuja", price: "Starting from ₦75M" },
                { name: "Victoria Island", price: "Starting from ₦100M" }
              ].map((neighborhood, index) => (
                <NeighborhoodCard key={index} {...neighborhood} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-8xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Contact Us</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="input w-full bg-gray-800 border-gray-700 rounded-md text-white" 
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="input w-full bg-gray-800 border-gray-700 rounded-md text-white" 
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea 
                      className="textarea w-full bg-gray-800 border-gray-700 rounded-md text-white" 
                      rows={4} 
                      placeholder="Your message"
                    />
                  </div>
                  <button className="btn rounded-md w-full bg-brown-500 text-white py-3 font-medium">
                    Send Message
                  </button>
                </form>
              </div>
              <div>
                <div className="bg-gray-800 p-8 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-6">Visit Our Office</h3>
                  <div className="space-y-4">
                    {[
                      { icon: "map-marker-alt", text: "40, Block ZA, Ikotun-egbe road, near Ikotun Roundabout, Alimosho, Lagos 100266" },
                      { icon: "phone", text: " +2348131389646" },
                      { icon: "envelope", text: "info@amazingpropertynigeria.com" }
                    ].map((contact, index) => (
                      <ContactInfo key={index} {...contact} />
                    ))}
                  </div>
                  <div className="mt-8">
                    <img src="https://img.freepik.com/premium-photo/aerial-view-parque-vicentina-aranha-sao-jose-dos-campos-brazil-chapel-old-sanatorium_361869-1563.jpg?w=826" alt="Office Location" className="w-full rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="amslogo.jpg" alt="Amazing Property Nigeria" className="h-8 mb-6" />
              <p className="text-gray-400">Your trusted partner in finding the perfect property in Nigeria.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Properties</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <ul className="space-x-2 flex items-center ">
                <li><a href="#" className="text-gray-400 hover:text-white text-xl"><FaFacebook/></a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-xl"><FaLinkedin/></a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-xl"><FaTwitter/></a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-xl"><FaYoutube/></a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Amazing Property Nigeria. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeScreen;