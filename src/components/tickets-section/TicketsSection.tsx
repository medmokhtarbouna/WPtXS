
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

const TicketsSection = () => {
  const ticketTiers = [
    {
      name: 'Student',
      price: '$199',
      originalPrice: '$299',
      badge: 'Early Bird',
      badgeColor: 'bg-green-100 text-green-800',
      features: [
        'Access to all sessions',
        'Networking events',
        'Digital event materials',
        'Certificate of attendance',
        'Student verification required'
      ],
      popular: false
    },
    {
      name: 'Startup',
      price: '$499',
      originalPrice: '$699',
      badge: 'Early Bird',
      badgeColor: 'bg-green-100 text-green-800',
      features: [
        'Everything in Student',
        'Startup showcase participation',
        'Mentor speed sessions',
        'Investor meetups',
        'Exhibition space access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$899',
      originalPrice: '$1,199',
      badge: 'Most Popular',
      badgeColor: 'bg-blue-100 text-blue-800',
      features: [
        'Access to all sessions',
        'VIP networking events',
        'Premium lunch included',
        'Workshop access',
        'Exhibition hall access',
        'Digital + physical materials'
      ],
      popular: true
    },
    {
      name: 'Corporate',
      price: '$1,499',
      originalPrice: '$1,999',
      badge: 'Premium',
      badgeColor: 'bg-purple-100 text-purple-800',
      features: [
        'Everything in Professional',
        'Private meeting rooms',
        'Dedicated account manager',
        'Custom branding opportunities',
        'Team registration (up to 5)',
        'Post-event content access'
      ],
      popular: false
    },
    {
      name: 'Academic',
      price: '$299',
      originalPrice: '$399',
      badge: 'Research Focus',
      badgeColor: 'bg-orange-100 text-orange-800',
      features: [
        'Access to all sessions',
        'Research poster sessions',
        'Academic networking',
        'Digital materials',
        'University affiliation required'
      ],
      popular: false
    },
    {
      name: 'VIP Executive',
      price: '$2,499',
      originalPrice: '$3,499',
      badge: 'Exclusive',
      badgeColor: 'bg-gold-100 text-gold-800',
      features: [
        'Everything in Corporate',
        'Executive roundtables',
        'Private speaker dinners',
        'Airport transfers',
        'Luxury accommodation package',
        'Exclusive after-party access'
      ],
      popular: false
    }
  ];

  return (
    <section
      id="about"
      className="relative py-20 
      
     bg-[#f1f5f7]
      
      

      dark:bg-[#111827] transition-colors duration-300"
    >
      {/* Subtle radial spotlight */}
      <div className="pointer-events-none absolute inset-0 dark:bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.1),transparent)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl text-base-text mb-8">
          Choose Your Pass
        </h2>
        <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full" />
        <p className="mx-auto max-w-2xl text-base-muted leading-relaxed dark:text-white/90 ">
          Select the perfect ticket tier for your needs. Early bird pricing available 
            until July 15st, 2025.
        </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 md:mx-20 mx-4">
          {ticketTiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`
                 bg-white/80 dark:bg-white/5
                backdrop-blur-sm

                border
                 border-teal-300 dark:border-white/10
                rounded-xl 
                hover:scale-[1.02] hover:backdrop-blur-md
                hover:cursor-pointer
                transform 
                shadow-lg
                shadow-gray-500/10
                hover:shadow-teal-500/20
                
                dark:shadow-none
                
                
                
                relative hover:shadow-xl transition-all duration-300 ${
                tier.popular ? 'ring-2 ring-teal-500 transform scale-105' : 'hover:-translate-y-2'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-teal-500 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-2">
                  <Badge className={tier.badgeColor}>
                    {tier.badge}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-teal-300">
                  {tier.name}
                </CardTitle>
                <div className="mt-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {tier.price}
                    </span>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 line-through">
                        {tier.originalPrice}
                      </div>
                      <div className="text-xs text-teal-400 font-medium">
                        Save {((parseInt(tier.originalPrice.replace('$', '')) - parseInt(tier.price.replace('$', ''))) / parseInt(tier.originalPrice.replace('$', '')) * 100).toFixed(0)}%
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <svg 
                        className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      <span className="text-sm text-gray-700 dark:text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    tier.popular 
                      ? 'bg-teal-500 hover:bg-teal-600 dark:hover:bg-teal-400' 
                      : 'bg-teal-500 hover:bg-teal-600 dark:hover:bg-teal-400'
                  } text-white`}
                  size="lg"
                >
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default TicketsSection;
