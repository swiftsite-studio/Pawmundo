import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petType: '',
    service: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll contact you soon to confirm your booking.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      info: '123 Pet Street, Happy City, HC 12345',
      color: 'text-teal-600 bg-teal-100'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '(555) 123-PETS',
      color: 'text-pink-600 bg-pink-100'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'hello@pawpals.com',
      color: 'text-yellow-600 bg-yellow-100'
    },
    {
      icon: Clock,
      title: 'Hours',
      info: 'Mon-Sat: 8AM-8PM, Sun: 10AM-6PM',
      color: 'text-orange-600 bg-orange-100'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080" 
            alt="Pet training background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center hero-content">
            <h1 className="text-5xl font-bold mb-6">Book Your Pet's Service</h1>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto">
              Ready to pamper your pet? Let's schedule the perfect service for your furry friend!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <ScrollAnimation>
        <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animationType="stagger">
            <div className="grid md:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.info}</p>
              </div>
            ))}
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Booking Form */}
            <ScrollAnimation animationType="slideLeft">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Book a Service</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pet Type *
                    </label>
                    <select
                      name="petType"
                      required
                      value={formData.petType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select pet type</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="bird">Bird</option>
                      <option value="rabbit">Rabbit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select service</option>
                      <option value="grooming">Pet Grooming</option>
                      <option value="training">Pet Training</option>
                      <option value="boarding">Pet Boarding</option>
                      <option value="vet">Veterinary Care</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your pet's special needs or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Book Service Now
                </button>
              </form>

              {/* WhatsApp Button */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">Need immediate assistance?</p>
                <button
                  onClick={() => {
                    const message = encodeURIComponent("Hi! I'd like to book a service for my pet.");
                    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center shadow-lg"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat on WhatsApp
                </button>
              </div>
            </div>
            </ScrollAnimation>
            </div>

            {/* Happy Pets Images */}
            <ScrollAnimation animationType="slideRight">
              <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Pets Will Love Us!</h2>
                <p className="text-lg text-gray-600 mb-8">
                  See the happiness and care we bring to every pet that visits us. 
                  Your furry friend will be treated like family from the moment they walk in.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                    <img 
                      src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400" 
                      alt="Happy dog after grooming" 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">Fresh & Clean!</p>
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                    <img 
                      src="https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=400" 
                      alt="Healthy cat" 
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 text-white">
                      <p className="text-xs font-medium">Healthy & Happy</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mt-8">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                    <img 
                      src="https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=400" 
                      alt="Dog training session" 
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 text-white">
                      <p className="text-xs font-medium">Learning & Playing</p>
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                    <img 
                      src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=400" 
                      alt="Well-groomed pet" 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">Pampered & Loved!</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </ScrollAnimation>
              <div className="bg-gradient-to-r from-pink-100 to-yellow-100 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Why Choose PawPals?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Experienced, certified professionals</li>
                  <li>• Safe, clean, and comfortable environment</li>
                  <li>• Personalized care for each pet</li>
                  <li>• Convenient booking and flexible scheduling</li>
                  <li>• Affordable prices with no hidden fees</li>
                </ul>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;