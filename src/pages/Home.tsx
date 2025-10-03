import React from 'react';
import { ArrowRight, Scissors, GraduationCap, Home as HomeIcon, Stethoscope, Heart, Award, Users, Clock, Star, Check, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';

const Home = () => {

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    petType: '',
    service: '',
    date: '',
    message: ''
  });

  const services = [
    { icon: Scissors, title: 'Pet Grooming', description: 'Professional grooming for your furry friends', color: 'bg-pink-100 text-pink-600' },
    { icon: GraduationCap, title: 'Pet Training', description: 'Expert training programs for all ages', color: 'bg-yellow-100 text-yellow-600' },
    { icon: HomeIcon, title: 'Pet Boarding', description: 'Safe and comfortable boarding services', color: 'bg-teal-100 text-teal-600' },
    { icon: Stethoscope, title: 'Vet Care', description: 'Complete veterinary healthcare', color: 'bg-orange-100 text-orange-600' }
  ];

  const stats = [
    { icon: Heart, value: '1000+', label: 'Happy Pets', color: 'text-pink-600' },
    { icon: Award, value: '5+', label: 'Years Experience', color: 'text-yellow-600' },
    { icon: Users, value: '50+', label: 'Expert Staff', color: 'text-teal-600' },
    { icon: Clock, value: '24/7', label: 'Emergency Care', color: 'text-orange-600' }
  ];

  const pricingPlans = [
    {
      name: 'Basic Care',
      price: '$99',
      period: '/month',
      features: [
        'Monthly grooming session',
        'Basic health checkup',
        'Nail trimming',
        'Ear cleaning',
        'Email support'
      ],
      color: 'border-gray-200',
      buttonColor: 'bg-gray-600 hover:bg-gray-700'
    },
    {
      name: 'Premium Care',
      price: '$199',
      period: '/month',
      features: [
        'Bi-weekly grooming sessions',
        'Comprehensive health exams',
        'Training sessions (4/month)',
        'Dental care',
        'Priority booking',
        '24/7 phone support'
      ],
      color: 'border-teal-500 ring-2 ring-teal-500',
      buttonColor: 'bg-teal-500 hover:bg-teal-600',
      popular: true
    },
    {
      name: 'Ultimate Care',
      price: '$299',
      period: '/month',
      features: [
        'Weekly grooming sessions',
        'Complete veterinary care',
        'Unlimited training sessions',
        'Boarding discounts (20%)',
        'Emergency care included',
        'Dedicated care manager'
      ],
      color: 'border-purple-200',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll contact you soon to confirm your booking.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      petType: '',
      service: '',
      date: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080" 
            alt="Happy pets background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Your Pet's
                  <span className="block text-yellow-300">Best Friend</span>
                </h1>
                <p className="text-xl text-blue-100">
                  Professional pet care services with love, expertise, and a whole lot of tail wags!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-yellow-400 hover:bg-yellow-300 text-gray-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-lg"
                >
                  Book Service Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button 
                  onClick={() => {
                    const message = encodeURIComponent("Hi! I'd like to book a service for my pet.");
                    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
                  }}
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                >
                  WhatsApp Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <ScrollAnimation>
        <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animationType="fade">
            <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Pet Services</h2>
            <p className="text-xl text-gray-600">Everything your furry friend needs, all in one place</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animationType="stagger">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
            </div>
          </ScrollAnimation>

          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center shadow-lg"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
        </section>
      </ScrollAnimation>

      {/* Happy Pets Section */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Happy Pets, Happy Owners</h2>
            <p className="text-xl text-gray-600">See the joy we bring to pets and their families</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-stagger">
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img 
                src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Groomed dog" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold">Professional Grooming</h3>
                <p className="text-sm opacity-90">Looking fresh and feeling great!</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img 
                src="https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Dog training" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold">Expert Training</h3>
                <p className="text-sm opacity-90">Learning new tricks every day!</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img 
                src="https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Healthy pet" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold">Complete Care</h3>
                <p className="text-sm opacity-90">Healthy and happy always!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-lg">
                  <Heart className="h-5 w-5 text-pink-500 mr-2 fill-current" />
                  <span className="text-sm font-semibold text-gray-700">Our Story</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  Where Every Pet is
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
                    Family
                  </span>
                </h2>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2019 by a team of passionate pet lovers, PawPals started with a simple mission: 
                    to provide the best possible care for every pet that walks through our doors.
                  </p>
                  <p>
                    What began as a small grooming salon has grown into a comprehensive pet care center, 
                    offering everything from professional grooming and training to boarding and veterinary services.
                  </p>
                  <p>
                    We believe every pet deserves to be treated like family, and that's exactly how we approach 
                    every service we provide.
                  </p>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 animate-stagger">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                    <img 
                      src="https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=600" 
                      alt="Pet care team" 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-semibold">Expert Care</p>
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                    <img 
                      src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600" 
                      alt="Happy pets" 
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                </div>

                <div className="space-y-4 mt-8">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                    <img 
                      src="https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=600" 
                      alt="Pet training" 
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                    <img 
                      src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600" 
                      alt="Groomed pet" 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-semibold">Happy Results</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-pink-400 to-purple-500 text-white p-4 rounded-full shadow-xl animate-pulse">
                <Heart className="h-8 w-8 fill-current" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-teal-400 to-blue-500 text-white p-4 rounded-full shadow-xl animate-bounce">
                <Award className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Packages Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-teal-100 to-blue-100 px-4 py-2 rounded-full mb-6">
              <Star className="h-5 w-5 text-teal-600 mr-2 fill-current" />
              <span className="text-sm font-semibold text-teal-700">Care Packages</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Choose the Perfect
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                Care Plan
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive care packages designed to keep your pet healthy, happy, and looking their best
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-3xl shadow-xl border-2 ${plan.color} p-8 relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-5xl font-bold text-gray-800">{plan.price}</span>
                    <span className="text-gray-600 ml-2 text-lg">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">Everything your pet needs</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="bg-green-100 rounded-full p-1 mr-3">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full ${plan.buttonColor} text-white py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg`}>
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Service Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Booking Form */}
            <ScrollAnimation animationType="slideLeft">
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-2 rounded-full mb-4">
                  <MessageCircle className="h-5 w-5 text-pink-600 mr-2" />
                  <span className="text-sm font-semibold text-pink-700">Book Service</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  Schedule Your Pet's
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
                    Perfect Day
                  </span>
                </h2>
                <p className="text-gray-600">
                  Ready to pamper your pet? Let's schedule the perfect service for your furry friend!
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Pet Type *
                    </label>
                    <select
                      name="petType"
                      required
                      value={formData.petType}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
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
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    >
                      <option value="">Select service</option>
                      <option value="grooming">Pet Grooming</option>
                      <option value="training">Pet Training</option>
                      <option value="boarding">Pet Boarding</option>
                      <option value="vet">Veterinary Care</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                    placeholder="Tell us about your pet's special needs or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Book Service Now
                </button>

                {/* WhatsApp Button */}
                <div className="text-center pt-4">
                  <p className="text-gray-600 mb-4">Need immediate assistance?</p>
                  <button
                    type="button"
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
              </form>
              </div>
            </ScrollAnimation>

            {/* Happy Pets Images */}
            <ScrollAnimation animationType="slideRight">
              <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Your Pets Will Love Us!</h3>
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

              <div className="bg-gradient-to-r from-pink-100 to-yellow-100 rounded-2xl p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Why Choose PawPals?</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Experienced, certified professionals
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Safe, clean, and comfortable environment
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Personalized care for each pet
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Convenient booking and flexible scheduling
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Affordable prices with no hidden fees
                  </li>
                </ul>
              </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Home;