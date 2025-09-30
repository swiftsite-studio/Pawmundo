import React, { useEffect } from 'react';
import { Scissors, GraduationCap, Home as HomeIcon, Stethoscope, Star, Check } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Scissors,
      title: 'Pet Grooming',
      description: 'Professional grooming services to keep your pet looking and feeling their best',
      features: ['Bath & Brush', 'Nail Trimming', 'Hair Cutting', 'Ear Cleaning'],
      price: '$35 - $85',
      color: 'from-pink-400 to-purple-500',
      bgColor: 'bg-pink-100',
      iconColor: 'text-pink-600'
    },
    {
      icon: GraduationCap,
      title: 'Pet Training',
      description: 'Expert training programs for puppies and adult dogs of all breeds',
      features: ['Basic Obedience', 'House Training', 'Behavior Modification', 'Socialization'],
      price: '$80 - $150',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      icon: HomeIcon,
      title: 'Pet Boarding',
      description: 'Safe and comfortable boarding with 24/7 care and supervision',
      features: ['Climate Controlled', 'Daily Exercise', 'Medication Admin', 'Regular Updates'],
      price: '$45 - $75/night',
      color: 'from-teal-400 to-blue-500',
      bgColor: 'bg-teal-100',
      iconColor: 'text-teal-600'
    },
    {
      icon: Stethoscope,
      title: 'Veterinary Care',
      description: 'Complete veterinary services from routine checkups to emergency care',
      features: ['Health Exams', 'Vaccinations', 'Surgery', 'Emergency Care'],
      price: '$60 - $200',
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Miller',
      pet: 'Golden Retriever - Max',
      rating: 5,
      text: 'PawPals transformed Max from a anxious pup to a confident, well-behaved dog. Their training program is amazing!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'James Wilson',
      pet: 'Persian Cat - Luna',
      rating: 5,
      text: 'Luna always comes back from grooming looking absolutely gorgeous. The staff treats her like their own pet!',
      image: 'https://images.pexels.com/photos/596590/pexels-photo-596590.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Maria Garcia',
      pet: 'Beagle - Buddy',
      rating: 5,
      text: 'When we travel, we never worry about Buddy because we know he\'s in the best hands at PawPals boarding facility.',
      image: 'https://images.pexels.com/photos/1346086/pexels-photo-1346086.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
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

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080" 
            alt="Pet grooming background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center hero-content">
            <h1 className="text-5xl font-bold mb-6">Our Pet Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive care for your beloved pets, delivered with expertise and love
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 animate-stagger">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className={`bg-gradient-to-r ${service.color} p-6`}>
                  <div className="flex items-center text-white">
                    <div className="bg-white/20 p-3 rounded-full mr-4">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="text-xl font-semibold">{service.price}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800">What's Included:</h4>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full mt-6 bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105`}>
                    Book {service.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">What Pet Parents Say</h2>
            <p className="text-xl text-gray-600">Real stories from our happy customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.pet} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.pet}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Care Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect plan for your pet's needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg border-2 ${plan.color} p-8 relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full ${plan.buttonColor} text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105`}>
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;