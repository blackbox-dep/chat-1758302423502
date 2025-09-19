"use client"
import React, { useState, useEffect } from 'react';
import { Button } from '/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '/components/ui/card';
import { Input } from '/components/ui/input';
import { Label } from '/components/ui/label';
import { MapPin, Navigation, Clock, Star, Phone, MessageCircle, User, CreditCard, Calendar } from 'lucide-react';

interface RideOption {
  id: string;
  name: string;
  description: string;
  price: number;
  eta: string;
  capacity: string;
}

interface Driver {
  name: string;
  rating: number;
  carModel: string;
  carNumber: string;
  phone: string;
  eta: number;
}

const OlaCabWebsite: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'booking' | 'confirmed' | 'tracking'>('home');
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedRide, setSelectedRide] = useState<RideOption | null>(null);
  const [driver, setDriver] = useState<Driver | null>(null);
  const [bookingTime, setBookingTime] = useState<Date>(new Date());

  const rideOptions: RideOption[] = [
    {
      id: 'mini',
      name: 'Ola Mini',
      description: 'AC Hatchback, 4 seats',
      price: 89,
      eta: '3 min',
      capacity: '4 seats'
    },
    {
      id: 'prime',
      name: 'Ola Prime',
      description: 'AC Sedan, 4 seats',
      price: 125,
      eta: '5 min',
      capacity: '4 seats'
    },
    {
      id: 'auto',
      name: 'Ola Auto',
      description: 'Auto Rickshaw, 3 seats',
      price: 45,
      eta: '2 min',
      capacity: '3 seats'
    },
    {
      id: 'bike',
      name: 'Ola Bike',
      description: 'Two Wheeler, 1 seat',
      price: 25,
      eta: '1 min',
      capacity: '1 seat'
    }
  ];

  const mockDriver: Driver = {
    name: 'Rajesh Kumar',
    rating: 4.8,
    carModel: 'Maruti Swift',
    carNumber: 'KA 01 AB 1234',
    phone: '+91 98765 43210',
    eta: 3
  };

  const handleBookRide = () => {
    if (pickup && destination) {
      setCurrentView('booking');
    }
  };

  const handleConfirmRide = (ride: RideOption) => {
    setSelectedRide(ride);
    setDriver(mockDriver);
    setCurrentView('confirmed');
    
    // Simulate driver assignment delay
    setTimeout(() => {
      setCurrentView('tracking');
    }, 3000);
  };

  const handleNewRide = () => {
    setCurrentView('home');
    setPickup('');
    setDestination('');
    setSelectedRide(null);
    setDriver(null);
  };

  useEffect(() => {
    setBookingTime(new Date());
  }, []);

  // Home View - Location Selection
  if (currentView === 'home') {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-primary text-primary-foreground p-4 shadow-lg">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Navigation className="w-5 h-5 text-accent-foreground" />
              </div>
              <h1 className="text-2xl font-bold">Ola Cab</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="secondary" size="sm">
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto p-4">
          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            {/* Booking Form */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    Book Your Ride
                  </CardTitle>
                  <CardDescription>
                    Enter pickup and destination to get started
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="pickup">Pickup Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="pickup"
                        placeholder="Enter pickup location"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="destination">Destination</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="destination"
                        placeholder="Where are you going?"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Now • {bookingTime.toLocaleTimeString('en-US', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}</span>
                  </div>

                  <Button 
                    onClick={handleBookRide}
                    className="w-full"
                    disabled={!pickup || !destination}
                  >
                    Find Rides
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-2">
                      <Clock className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h3 className="font-semibold">Schedule Ride</h3>
                    <p className="text-sm text-muted-foreground">Book for later</p>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                      <CreditCard className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <h3 className="font-semibold">Ride History</h3>
                    <p className="text-sm text-muted-foreground">View past trips</p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative">
              <Card className="h-96 lg:h-full">
                <CardContent className="p-0 h-full">
                  <img 
                    src="undefined/600x400?prompt=Interactive map showing city streets with markers for pickup and destination locations, modern GPS interface with current location indicator&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
                    alt="Interactive map showing city streets with markers for pickup and destination locations" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute top-4 right-4">
                    <Button size="sm" variant="secondary">
                      <Navigation className="w-4 h-4 mr-2" />
                      My Location
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-8">Why Choose Ola?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">Quick Booking</h3>
                  <p className="text-sm text-muted-foreground">
                    Book rides in under 30 seconds with our easy-to-use app
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">Trusted Drivers</h3>
                  <p className="text-sm text-muted-foreground">
                    All drivers are verified and rated by fellow riders
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">Cashless Rides</h3>
                  <p className="text-sm text-muted-foreground">
                    Pay digitally with cards, wallets, or UPI
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Booking View - Ride Selection
  if (currentView === 'booking') {
    return (
      <div className="min-h-screen bg-background">
        <header className="bg-primary text-primary-foreground p-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Button variant="ghost" onClick={() => setCurrentView('home')}>
              ← Back
            </Button>
            <h1 className="text-xl font-semibold">Choose Your Ride</h1>
            <div></div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto p-4">
          {/* Trip Details */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <div className="w-px h-6 bg-border"></div>
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                </div>
                <div className="flex-1 space-y-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Pickup</p>
                    <p className="font-medium">{pickup}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Destination</p>
                    <p className="font-medium">{destination}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Distance</p>
                  <p className="font-medium">5.2 km</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ride Options */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Available Rides</h2>
            
            {rideOptions.map((ride) => (
              <Card key={ride.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                        <img 
                          src="undefined/64x64?prompt=Car icon representing ride option with modern vehicle silhouette&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
                          alt="Car icon representing ride option"
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{ride.name}</h3>
                        <p className="text-sm text-muted-foreground">{ride.description}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">
                            {ride.eta} away
                          </span>
                          <span className="text-xs text-muted-foreground">{ride.capacity}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">₹{ride.price}</p>
                      <Button 
                        onClick={() => handleConfirmRide(ride)}
                        size="sm"
                        className="mt-2"
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Payment Methods */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <CreditCard className="w-5 h-5 text-primary" />
                <span className="font-medium">Cash</span>
                <Button variant="outline" size="sm" className="ml-auto">
                  Change
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Confirmed View - Driver Assignment
  if (currentView === 'confirmed') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <Navigation className="w-8 h-8 text-accent-foreground" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Booking Confirmed!</h2>
            <p className="text-muted-foreground mb-6">Finding a driver for you...</p>
            
            {selectedRide && (
              <div className="bg-muted rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{selectedRide.name}</h3>
                    <p className="text-sm text-muted-foreground">{selectedRide.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">₹{selectedRide.price}</p>
                    <p className="text-sm text-muted-foreground">{selectedRide.eta} away</p>
                  </div>
                </div>
              </div>
            )}

            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Tracking View - Driver Details & Live Tracking
  if (currentView === 'tracking' && driver && selectedRide) {
    return (
      <div className="min-h-screen bg-background">
        <header className="bg-primary text-primary-foreground p-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-xl font-semibold">Your Ride</h1>
            <p className="text-sm opacity-90">Arriving in {driver.eta} minutes</p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto p-4">
          {/* Map View */}
          <Card className="mb-6">
            <CardContent className="p-0">
              <div className="relative h-64">
                <img 
                  src="undefined/600x256?prompt=Live tracking map showing car location moving towards pickup point with route highlighted and estimated arrival time&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
                  alt="Live tracking map showing driver location and route to pickup point"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4 bg-background p-2 rounded-lg shadow-lg">
                  <p className="text-sm font-medium">ETA: {driver.eta} min</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Driver Information */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{driver.name}</h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <span>{driver.rating}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {driver.carModel} • {driver.carNumber}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trip Details */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <div className="w-px h-6 bg-border"></div>
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                </div>
                <div className="flex-1 space-y-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Pickup</p>
                    <p className="font-medium">{pickup}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Destination</p>
                    <p className="font-medium">{destination}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">₹{selectedRide.price}</p>
                  <p className="text-sm text-muted-foreground">{selectedRide.name}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Button variant="destructive" className="w-full">
              Cancel Ride
            </Button>
            <Button variant="outline" onClick={handleNewRide} className="w-full">
              Book Another Ride
            </Button>
          </div>

          {/* Safety Features */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Safety Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" size="sm" className="justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency
                </Button>
                <Button variant="outline" size="sm" className="justify-start">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Share Trip
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return null;
};

export default OlaCabWebsite;
