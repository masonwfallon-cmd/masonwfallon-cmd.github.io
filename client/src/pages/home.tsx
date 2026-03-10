import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Clock, MapPin, Star, Sparkles, Settings, DollarSign, Shield, Menu, X } from "lucide-react";
import { FaFacebookF, FaTshirt, FaWind, FaHandsWash, FaHome, FaSoap, FaTruck } from "react-icons/fa";
import { useState } from "react";
import { useLocation } from "wouter";


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const callBusiness = () => {
    window.open('tel:4108671694');
  };

  const getDirections = () => {
    window.open('https://www.google.com/maps/search/5471+Deale+Churchton+Rd+Churchton+MD+20733');
  };

  const openFacebook = () => {
    window.open('https://www.facebook.com/people/Fresh-Start-Laundry-Co/61557575921146/', '_blank');
  };

  const goToPickupOrder = () => {
    setLocation("/pickup");
  };

  return (
    <div className="font-inter bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="/logo.jpg" 
                alt="Fresh Start Laundry Co. Logo" 
                className="h-12 w-auto"
                data-testid="img-company-logo"
              />
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <div className="flex items-center text-gray-600">
                <Phone className="text-fresh-blue mr-2 h-4 w-4" />
                <span data-testid="text-phone-header">(410) 867-1694</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="text-fresh-blue mr-2 h-4 w-4" />
                <span data-testid="text-hours-header">Open 7:30am–6pm Daily</span>
              </div>
            </div>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4 space-y-4">
              <div className="flex items-center text-gray-600">
                <Phone className="text-fresh-blue mr-2 h-4 w-4" />
                <span data-testid="text-phone-mobile">(410) 867-1694</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="text-fresh-blue mr-2 h-4 w-4" />
                <span data-testid="text-hours-mobile">Open 7:30am–6pm Daily</span>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fresh-blue-light to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" data-testid="text-hero-title">
                Your <span className="text-fresh-blue">Fresh Start</span> 
                <br />Begins Here
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed" data-testid="text-hero-description">
                Professional laundromat services in Churchton, MD. Clean facilities, modern equipment, and affordable pricing for all your laundry needs.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <Button 
                  onClick={scrollToServices} 
                  className="bg-fresh-blue text-white px-8 py-4 font-semibold hover:bg-fresh-blue-dark shadow-lg"
                  data-testid="button-view-services"
                >
                  View Our Services
                </Button>
                <Button 
                  onClick={goToPickupOrder}
                  className="bg-fresh-blue-dark text-white px-8 py-4 font-semibold hover:bg-fresh-blue shadow-lg border-2 border-fresh-blue-dark"
                  data-testid="button-hero-pickup"
                >
                  <FaTruck className="mr-2 h-4 w-4" />
                  Schedule Pickup & Delivery
                </Button>
                <Button 
                  variant="outline"
                  onClick={callBusiness}
                  className="border-2 border-fresh-blue text-fresh-blue px-8 py-4 font-semibold hover:bg-fresh-blue hover:text-white"
                  data-testid="button-call-now"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="/logo.jpg" 
                alt="Fresh Start Laundry Co. Logo" 
                className="rounded-2xl shadow-2xl w-full h-auto max-w-md mx-auto"
                data-testid="img-hero-logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="text-services-title">
              Complete Laundry Services
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-services-description">
              From self-service washing to professional cleaning with complimentary pickup and delivery, we offer comprehensive laundry solutions at competitive prices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Wash & Fold Service */}
            <Card className="hover:shadow-lg transition-shadow" data-testid="card-service-washfold">
              <CardContent className="p-6">
                <div className="text-fresh-blue text-3xl mb-4">
                  <FaHandsWash />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3" data-testid="text-service-washfold-title">Wash & Fold Service</h4>
                <p className="text-gray-600 mb-4" data-testid="text-service-washfold-description">Professional wash, dry, and fold service with flexible options.</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Adults & Kids Clothes</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-adults-kids">$1.50/lb</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">No Fold</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-no-fold">$1.25/lb</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dry & Fold</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-dry-fold">$1.00/lb</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tablecloths, Towels, Bedding</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-linens">$1.60/lb</span>
                  </div>
                  <div className="border-t pt-2 mt-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Minimum (10 lbs drop-off)</span>
                      <span className="font-semibold text-fresh-blue" data-testid="text-price-minimum-dropoff">$15.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Minimum (15 lbs pickup)</span>
                      <span className="font-semibold text-fresh-blue" data-testid="text-price-minimum-pickup">$24.00</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comforters */}
            <Card className="hover:shadow-lg transition-shadow" data-testid="card-service-comforters">
              <CardContent className="p-6">
                <div className="text-fresh-blue text-3xl mb-4">
                  <FaHome />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3" data-testid="text-service-comforters-title">Comforters</h4>
                <p className="text-gray-600 mb-4" data-testid="text-service-comforters-description">Professional cleaning for all comforter sizes and materials.</p>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-700 mb-2">Down Comforters:</div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Twin</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-down-twin">$13.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Full</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-down-full">$15.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Queen</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-down-queen">$17.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">King</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-down-king">$20.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">California King</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-cal-king">$25.00</span>
                  </div>
                  <div className="text-sm font-medium text-gray-700 mb-2 mt-3">Polyester Comforters:</div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Twin</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-poly-twin">$10.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Full</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-poly-full">$13.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Queen</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-poly-queen">$15.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">King</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-poly-king">$18.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Blankets & Throws */}
            <Card className="hover:shadow-lg transition-shadow" data-testid="card-service-blankets">
              <CardContent className="p-6">
                <div className="text-fresh-blue text-3xl mb-4">
                  <FaTshirt />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3" data-testid="text-service-blankets-title">Blankets & Throws</h4>
                <p className="text-gray-600 mb-4" data-testid="text-service-blankets-description">Clean and fresh blankets for every occasion.</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Small Throw Blanket</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-small-throw">$6.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Medium Throw Blanket</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-medium-throw">$10.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Large Throw Blanket</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-large-throw">$12.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pillows */}
            <Card className="hover:shadow-lg transition-shadow" data-testid="card-service-pillows">
              <CardContent className="p-6">
                <div className="text-fresh-blue text-3xl mb-4">
                  <FaSoap />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3" data-testid="text-service-pillows-title">Pillows</h4>
                <p className="text-gray-600 mb-4" data-testid="text-service-pillows-description">Professional pillow cleaning for all sizes and materials.</p>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-700 mb-2">Down Pillows:</div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Small</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-down-pillow-small">$7.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Medium</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-down-pillow-medium">$12.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">California King</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-down-pillow-cal">$15.00</span>
                  </div>
                  <div className="text-sm font-medium text-gray-700 mb-2 mt-3">Polyester Pillows:</div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Small</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-poly-pillow-small">$5.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Medium</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-poly-pillow-medium">$8.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">California King</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-poly-pillow-cal">$10.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sleeping Bags & Special Items */}
            <Card className="hover:shadow-lg transition-shadow" data-testid="card-service-special">
              <CardContent className="p-6">
                <div className="text-fresh-blue text-3xl mb-4">
                  <FaWind />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3" data-testid="text-service-special-title">Sleeping Bags & Special Items</h4>
                <p className="text-gray-600 mb-4" data-testid="text-service-special-description">Specialized cleaning for outdoor and unique items.</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Down Sleeping Bag</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-down-sleeping">$20.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Polyester Sleeping Bag</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-poly-sleeping">$15.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Boat Cover</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-boat-cover">$20-$30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Car Cover</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-car-cover">$25.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pet Bed</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-pet-bed">$15-$24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sofa Covers</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-sofa-covers">$18-$25</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pickup & Delivery Service */}
            <Card className="hover:shadow-lg transition-shadow" data-testid="card-service-pickup-delivery">
              <CardContent className="p-6">
                <div className="text-fresh-blue text-3xl mb-4">
                  <FaTruck />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3" data-testid="text-service-pickup-title">Pickup & Delivery</h4>
                <p className="text-gray-600 mb-4" data-testid="text-service-pickup-description">Complimentary pickup and delivery service for your convenience.</p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">All Items</span>
                    <span className="font-semibold text-fresh-blue" data-testid="text-price-pickup-delivery">$1.60/lb</span>
                  </div>
                  <div className="mt-3 p-3 bg-fresh-blue-light rounded-lg">
                    <p className="text-sm text-fresh-blue font-medium">Free pickup and delivery within service area</p>
                  </div>
                  <Button
                    onClick={goToPickupOrder}
                    className="w-full mt-2 bg-fresh-blue text-white font-semibold hover:bg-fresh-blue-dark"
                    data-testid="button-service-pickup-order"
                  >
                    Schedule Pickup & Delivery
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hours and Location */}
      <section className="py-16 lg:py-24 bg-fresh-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg" data-testid="card-business-hours">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="text-fresh-blue text-3xl mr-4">
                    <Clock className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900" data-testid="text-hours-title">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium" data-testid="text-days">Monday - Sunday</span>
                    <span className="text-gray-900 font-semibold" data-testid="text-hours">7:30am - 6:00pm</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-fresh-blue-light rounded-lg">
                  <p className="text-sm text-gray-600" data-testid="text-hours-note">
                    <Clock className="inline h-4 w-4 text-fresh-blue mr-2" />
                    Last wash accepted 1 hour before closing
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg" data-testid="card-location-contact">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="text-fresh-blue text-3xl mr-4">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900" data-testid="text-location-title">Location & Contact</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="text-fresh-blue mt-1 mr-3 h-5 w-5" />
                      <div>
                        <p className="text-gray-900 font-medium" data-testid="text-address-street">5471 Deale Churchton Rd</p>
                        <p className="text-gray-600" data-testid="text-address-city">Churchton, MD 20733</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="text-fresh-blue mr-3 h-5 w-5" />
                      <a 
                        href="tel:4108671694" 
                        className="text-gray-900 font-medium hover:text-fresh-blue transition-colors"
                        data-testid="link-phone"
                      >
                        (410) 867-1694
                      </a>
                    </div>
                    <div className="flex items-center">
                      <FaFacebookF className="text-fresh-blue mr-3 h-5 w-5" />
                      <a 
                        href="#" 
                        onClick={(e) => { e.preventDefault(); openFacebook(); }}
                        className="text-gray-900 font-medium hover:text-fresh-blue transition-colors"
                        data-testid="link-facebook"
                      >
                        Follow us on Facebook
                      </a>
                    </div>
                  </div>
                  <div>
                    <iframe
                      src="https://maps.google.com/maps?width=100%&height=200&hl=en&q=5471%20Deale%20Churchton%20Rd,%20Churchton,%20MD%2020733&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg shadow-sm"
                      data-testid="iframe-google-maps"
                    ></iframe>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center">
                    <MapPin className="text-fresh-blue mr-3 h-5 w-5" />
                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); getDirections(); }}
                      className="text-gray-900 font-medium hover:text-fresh-blue transition-colors"
                      data-testid="link-directions"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="text-features-title">
              Why Choose Fresh Start Laundry?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-features-description">
              We're committed to providing the best laundry experience in Churchton with modern equipment and exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-testid="feature-clean">
              <div className="bg-fresh-blue-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-fresh-blue h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2" data-testid="text-feature-clean-title">Always Clean</h4>
              <p className="text-gray-600" data-testid="text-feature-clean-description">Spotless facilities maintained to the highest standards daily.</p>
            </div>

            <div className="text-center" data-testid="feature-equipment">
              <div className="bg-fresh-blue-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="text-fresh-blue h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2" data-testid="text-feature-equipment-title">Modern Equipment</h4>
              <p className="text-gray-600" data-testid="text-feature-equipment-description">State-of-the-art washers and dryers for superior cleaning results.</p>
            </div>

            <div className="text-center" data-testid="feature-pricing">
              <div className="bg-fresh-blue-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="text-fresh-blue h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2" data-testid="text-feature-pricing-title">Fair Pricing</h4>
              <p className="text-gray-600" data-testid="text-feature-pricing-description">Competitive rates with no hidden fees or surprises.</p>
            </div>

            <div className="text-center" data-testid="feature-security">
              <div className="bg-fresh-blue-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-fresh-blue h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2" data-testid="text-feature-security-title">Safe & Secure</h4>
              <p className="text-gray-600" data-testid="text-feature-security-description">Well-lit, monitored facility for your peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="text-testimonials-title">
              What Our Customers Say
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-testimonials-description">
              Don't just take our word for it - hear from our satisfied customers who trust us with their laundry needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="hover:shadow-lg transition-shadow" data-testid="card-testimonial-1">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic" data-testid="text-testimonial-1-quote">
                  "Fresh Start has been a lifesaver! Their pickup and delivery service is so convenient, and my clothes always come back perfectly clean and folded. The staff is friendly and professional."
                </p>
                <div className="flex items-center">
                  <div className="bg-fresh-blue-light w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-fresh-blue font-semibold">SM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900" data-testid="text-testimonial-1-name">Sarah M.</p>
                    <p className="text-gray-500 text-sm" data-testid="text-testimonial-1-location">Churchton Resident</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="hover:shadow-lg transition-shadow" data-testid="card-testimonial-2">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic" data-testid="text-testimonial-2-quote">
                  "I've been using Fresh Start for over a year now. Their comforter cleaning service is exceptional - my down comforter looks and feels like new every time. Great pricing too!"
                </p>
                <div className="flex items-center">
                  <div className="bg-fresh-blue-light w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-fresh-blue font-semibold">MJ</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900" data-testid="text-testimonial-2-name">Mike J.</p>
                    <p className="text-gray-500 text-sm" data-testid="text-testimonial-2-location">Deale, MD</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="hover:shadow-lg transition-shadow" data-testid="card-testimonial-3">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic" data-testid="text-testimonial-3-quote">
                  "Clean facility, modern equipment, and always helpful staff. Fresh Start makes doing laundry actually pleasant. The wash and fold service saves me so much time!"
                </p>
                <div className="flex items-center">
                  <div className="bg-fresh-blue-light w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-fresh-blue font-semibold">LR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900" data-testid="text-testimonial-3-name">Lisa R.</p>
                    <p className="text-gray-500 text-sm" data-testid="text-testimonial-3-location">Tracys Landing, MD</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-fresh-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6" data-testid="text-cta-title">
            Ready for Your Fresh Start?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto" data-testid="text-cta-description">
            Visit us today in Churchton, MD and experience the difference professional laundry care makes. No appointment necessary!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={callBusiness}
              className="bg-white text-fresh-blue px-8 py-4 font-semibold hover:bg-gray-100 shadow-lg"
              data-testid="button-cta-call"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call (410) 867-1694
            </Button>
            <Button 
              onClick={getDirections}
              className="bg-white text-fresh-blue border-2 border-white px-8 py-4 font-semibold hover:bg-gray-100 shadow-lg"
              data-testid="button-cta-directions"
            >
              <MapPin className="mr-2 h-4 w-4" />
              Get Directions
            </Button>
            <Button 
              onClick={goToPickupOrder}
              className="bg-fresh-blue-dark text-white px-8 py-4 font-semibold hover:bg-fresh-blue shadow-lg"
              data-testid="button-cta-pickup"
            >
              Schedule Pickup & Delivery
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-fresh-blue" data-testid="text-footer-company">Fresh Start Laundry Co.</h4>
              <p className="text-gray-300 mb-4" data-testid="text-footer-description">
                Your trusted neighborhood laundromat in Churchton, MD. Professional laundry services with a personal touch.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4" data-testid="text-footer-contact-title">Contact Info</h5>
              <div className="space-y-2 text-gray-300">
                <p data-testid="text-footer-address">5471 Deale Churchton Rd, Churchton, MD 20733</p>
                <p data-testid="text-footer-phone">(410) 867-1694</p>
                <p data-testid="text-footer-hours">Open Daily: 7:30am - 6:00pm</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4" data-testid="text-footer-social-title">Connect With Us</h5>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); openFacebook(); }}
                  className="text-gray-300 hover:text-fresh-blue transition-colors"
                  data-testid="link-footer-facebook"
                >
                  <FaFacebookF className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p data-testid="text-copyright">&copy; 2026 Fresh Start Laundry Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
