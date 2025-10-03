import React from 'react';
import { Heart, Award, Users, Clock } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const About = () => {

  const stats = [
    { icon: Heart, value: '1000+', label: 'Happy Pets' },
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: Users, value: '50+', label: 'Expert Staff' },
    { icon: Clock, value: '24/7', label: 'Emergency Care' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080" 
            alt="Pet care team background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center hero-content">
            <h1 className="text-5xl font-bold mb-6">About PawPals</h1>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto">
              Where every tail wag matters and every pet is family
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <ScrollAnimation>
        <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animationType="slideLeft">
              <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-lg">
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
                  every service we provide. Your pet's happiness and well-being is our top priority.
                </p>
              </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="slideRight">
              <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Pet care team" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Floating heart */}
              <div className="absolute -top-6 -right-6 bg-pink-500 text-white p-4 rounded-full shadow-lg animate-pulse">
                <Heart className="h-8 w-8 fill-current" />
              </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        </section>
      </ScrollAnimation>

      {/* Mission & Values */}
      <ScrollAnimation>
        <section className="py-20 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animationType="fade">
            <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission & Values</h2>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animationType="stagger">
            <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-teal-100 text-teal-600 p-3 rounded-full mr-4">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide exceptional pet care services that strengthen the bond between pets and their owners, 
                while ensuring every animal receives the love, attention, and professional care they deserve.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-pink-100 text-pink-600 p-3 rounded-full mr-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Values</h3>
              </div>
              <ul className="text-gray-600 text-lg space-y-2">
                <li>• Compassionate care for every pet</li>
                <li>• Professional excellence in all services</li>
                <li>• Building trust with pet families</li>
                <li>• Continuous learning and improvement</li>
              </ul>
            </div>
            </div>
          </ScrollAnimation>
        </div>
        </section>
      </ScrollAnimation>

      {/* Stats Section */}
      <ScrollAnimation>
        <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animationType="fade">
            <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">By the Numbers</h2>
            <p className="text-xl text-gray-600">Our commitment to excellence speaks for itself</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animationType="stagger">
            <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-teal-400 to-blue-500 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-10 w-10" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
            </div>
          </ScrollAnimation>
        </div>
        </section>
      </ScrollAnimation>

      {/* Team Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gradient-to-r from-yellow-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animationType="fade">
            <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Passionate professionals dedicated to your pet's well-being</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animationType="stagger">
            <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <img 
                src="https://images.pexels.com/photos/5731846/pexels-photo-5731846.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Veterinarian" 
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Dr. Sarah Johnson</h3>
              <p className="text-teal-600 font-medium mb-3">Lead Veterinarian</p>
              <p className="text-gray-600">15+ years of experience in pet healthcare and surgery</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <img 
                src="https://images.pexels.com/photos/7516350/pexels-photo-7516350.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Groomer" 
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mike Rodriguez</h3>
              <p className="text-pink-600 font-medium mb-3">Master Groomer</p>
              <p className="text-gray-600">Certified professional groomer specializing in breed-specific cuts</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <img 
                src="https://images.pexels.com/photos/8434641/pexels-photo-8434641.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Trainer" 
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Emily Chen</h3>
              <p className="text-orange-600 font-medium mb-3">Pet Behavior Specialist</p>
              <p className="text-gray-600">Expert in positive reinforcement training techniques</p>
            </div>
            </div>
          </ScrollAnimation>
        </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default About;