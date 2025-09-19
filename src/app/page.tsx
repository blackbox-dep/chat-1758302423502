"use client";

import { Button } from "/components/ui/button";
import { Card, CardContent } from "/components/ui/card";
import { Input } from "/components/ui/input";
import { 
  Menu, 
  X, 
  ArrowRight, 
  Play, 
  Star, 
  Shield, 
  Clock, 
  Users,
  Search,
  Home,
  Settings,
  User
} from "lucide-react";
import { useState } from "react";

export default function UberLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState('ride');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');

  const services = [
    {
      id: 'ride',
      name: 'Ride',
      description: 'Go anywhere with Uber',
      icon: '🚗'
    },
    {
      id: 'delivery',
      name: 'Delivery', 
      description: 'Request a delivery',
      icon: '📦'
    },
    {
      id: 'package',
      name: 'Package',
      description: 'Send packages',
      icon: '📮'
    }
  ];

  const rideOptions = [
    {
      name: 'UberX',
      description: 'Affordable, everyday rides',
      time: '2 min',
      price: '$8.50',
      capacity: '4',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d6c3ac45-814f-4b41-8b0e-6e4f8bb9acc0.png'
    },
    {
      name: 'UberXL',
      description: 'Affordable rides for groups up to 6',
      time: '3 min',
      price: '$12.30',
      capacity: '6',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fc92c12b-3735-48c5-9a5c-f66e1d264e67.png'
    },
    {
      name: 'Comfort',
      description: 'Newer cars with extra legroom',
      time: '5 min',
      price: '$11.20',
      capacity: '4',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/49f7508b-d336-4cc0-9c68-e41bb60a818c.png'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Always available',
      description: 'Get a ride in minutes, day or night'
    },
    {
      icon: Shield,
      title: 'Safe and reliable',
      description: 'Background-checked drivers and real-time tracking'
    },
    {
      icon: Star,
      title: 'Highly rated',
      description: '5-star service with millions of happy riders'
    },
    {
      icon: Users,
      title: 'For everyone',
      description: 'Rides for individuals, groups, and accessibility needs'
    }
  ];

  const cities = [
    'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia',
    'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-black text-black">Uber</div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">Company</a>
              <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">Safety</a>
              <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">Help</a>
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-900 hover:text-gray-600">
                <User className="w-4 h-4 mr-2" />
                Log in
              </Button>
              <Button className="bg-black text-white hover:bg-gray-800">
                Sign up
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-gray-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#" className="block px-3 py-2 text-gray-900 hover:text-gray-600">Company</a>
                <a href="#" className="block px-3 py-2 text-gray-900 hover:text-gray-600">Safety</a>
                <a href="#" className="block px-3 py-2 text-gray-900 hover:text-gray-600">Help</a>
                <div className="flex flex-col space-y-2 px-3 py-2">
                  <Button variant="ghost" className="justify-start">
                    <User className="w-4 h-4 mr-2" />
                    Log in
                  </Button>
                  <Button className="bg-black text-white hover:bg-gray-800">
                    Sign up
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bbdaa1b8-62ab-42b3-bc60-128a96179646.png" 
            alt="Modern city street with cars and urban skyline during golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Hero Content */}
            <div className="text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
                Go anywhere with Uber
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-gray-200">
                Request a ride, hop in, and go.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4">
                  <Play className="w-5 h-5 mr-2" />
                  Get started
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black px-8 py-4">
                  Learn more
                </Button>
              </div>
            </div>

            {/* Right Column - Ride Request Form */}
            <div className="bg-white rounded-lg shadow-2xl p-6 lg:p-8">
              {/* Service Tabs */}
              <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
                      activeService === service.id
                        ? 'bg-white shadow-sm text-black'
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <span>{service.icon}</span>
                      <span>{service.name}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Location Inputs */}
              <div className="space-y-4 mb-6">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                  </div>
                  <Input
                    type="text"
                    placeholder="Pickup location"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="pl-10 py-4 text-lg border-gray-300 focus:border-black"
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-3 h-3 border-2 border-black rounded-sm"></div>
                  </div>
                  <Input
                    type="text"
                    placeholder="Dropoff location"
                    value={dropoffLocation}
                    onChange={(e) => setDropoffLocation(e.target.value)}
                    className="pl-10 py-4 text-lg border-gray-300 focus:border-black"
                  />
                </div>
              </div>

              {/* Request Button */}
              <Button 
                className="w-full bg-black text-white hover:bg-gray-800 py-4 text-lg font-medium"
                disabled={!pickupLocation || !dropoffLocation}
              >
                Request now
              </Button>

              {/* Schedule Option */}
              <div className="mt-4 text-center">
                <button className="text-gray-600 hover:text-black text-sm underline">
                  Schedule for later
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ride Options Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Choose your ride
            </h2>
            <p className="text-xl text-gray-600">
              No matter where you're going, we've got the perfect ride for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rideOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <img 
                      src={option.image} 
                      alt={`${option.name} vehicle - modern sedan suitable for ${option.capacity} passengers`}
                      className="w-20 h-12 object-cover rounded"
                    />
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">{option.price}</div>
                      <div className="text-sm text-gray-600">{option.time} away</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{option.name}</h3>
                  <p className="text-gray-600 mb-2">{option.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    {option.capacity} seats
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Why choose Uber?
            </h2>
            <p className="text-xl text-gray-600">
              We're committed to making every trip safe, affordable, and convenient
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Available in 600+ cities
            </h2>
            <p className="text-xl text-gray-600">
              Uber is available in thousands of cities around the world
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cities.map((city, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer"
              >
                <span className="font-medium text-gray-900">{city}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
              View all cities
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Sign up and get your first ride
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <div className="flex items-center space-x-4">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/08f1e685-4fad-4b76-9bd3-f521186dd0ba.png" 
                alt="Download Uber app from Apple App Store"
                className="h-12"
              />
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/82b471e1-79c9-4017-9702-85d12d2c28a5.png" 
                alt="Get Uber app on Google Play Store"
                className="h-12"
              />
            </div>
          </div>

          <p className="text-gray-400">
            Or sign up on the web to request rides from your computer
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="text-2xl font-black text-black mb-4">Uber</div>
              <p className="text-gray-600">
                Visit Help Center
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">About us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Our offerings</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Newsroom</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Investors</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">Ride</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Drive</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Deliver</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Eat</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Uber for Business</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Uber Freight</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Global citizenship</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">Safety</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Diversity and Inclusion</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Sustainability</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-600 hover:text-black text-sm">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-black text-sm">Accessibility</a>
              <a href="#" className="text-gray-600 hover:text-black text-sm">Terms</a>
            </div>
            <div className="text-gray-600 text-sm">
              © 2025 Uber Technologies Inc.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
