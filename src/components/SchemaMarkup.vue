<script setup lang="ts">
import { onMounted } from 'vue';
import data from '@/data/data';

// Create and inject JSON-LD schema markup into the document head
onMounted(() => {
  // LocalBusiness schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Apotome Labs',
    description: 'A digital agency in Trinidad, Colorado specializing in web development, mobile apps, UI/UX design, e-commerce, SEO, and AI solutions.',
    url: 'https://apotomelabs.com',
    logo: 'https://apotomelabs.com/logo.png',
    image: 'https://apotomelabs.com/agency/agency1.jpg',
    telephone: '+1-719-555-1234', // Replace with actual phone number
    email: 'contact@apotomelabs.com', // Replace with actual email
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main Street', // Replace with actual address
      addressLocality: 'Trinidad',
      addressRegion: 'CO',
      postalCode: '81082',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.1697, // Trinidad, CO coordinates
      longitude: -104.5005
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/apotomelabs',
      'https://www.instagram.com/apotomelabs',
      'https://www.linkedin.com/company/apotome-labs'
    ]
  };

  // Service schemas
  const serviceSchemas = data.services.list.map(service => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.desc,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Apotome Labs',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Trinidad',
        addressRegion: 'CO',
        addressCountry: 'US'
      }
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 37.1697,
        longitude: -104.5005
      },
      geoRadius: '50000'
    },
    serviceType: service.name
  }));

  // Review schemas
  const reviewSchemas = data.reviews.list.map(review => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewBody: review.content,
    author: {
      '@type': 'Person',
      name: review.name
    },
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: 'Apotome Labs',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Trinidad',
        addressRegion: 'CO',
        addressCountry: 'US'
      }
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5'
    }
  }));

  // Inject schemas into the document head
  const schemas = [localBusinessSchema, ...serviceSchemas, ...reviewSchemas];

  schemas.forEach(schema => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
});
</script>

<template>
  <!-- This component doesn't render anything -->
</template>
