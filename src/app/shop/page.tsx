'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  externalUrl: string;
  soldOut?: boolean;
  featured?: boolean;
}

// Mock data based on MSCHF's shop products
const products: Product[] = [
  {
    id: 1,
    name: "Made By MSCHF",
    price: "$47.97",
    image: "https://ext.same-assets.com/1991192572/1810495838.png",
    externalUrl: "https://shop.mschf.com/products/made-by-mschf",
    featured: true
  },
  {
    id: 2,
    name: "Blur",
    price: "From $35",
    image: "https://ext.same-assets.com/3603631573/3439908258.png",
    externalUrl: "https://blur.mschf.com",
    featured: true
  },
  {
    id: 3,
    name: "Nanzuka Material Values Long Sleeve",
    price: "$65",
    image: "https://ext.same-assets.com/53986314/4093026419.png",
    externalUrl: "https://shop.mschf.com/products/nanzuka-long-sleeve"
  },
  {
    id: 4,
    name: "Nanzuka Material Values Tee",
    price: "$55",
    image: "https://ext.same-assets.com/3343691919/4197600251.png",
    externalUrl: "https://shop.mschf.com/products/nanzuka-tee"
  },
  {
    id: 5,
    name: "2x4",
    price: "$400",
    image: "https://ext.same-assets.com/1807018579/642324071.png",
    externalUrl: "https://2x4.mschf.com",
    featured: true
  },
  {
    id: 6,
    name: "Moving Blanket Long Coat",
    price: "$450",
    image: "https://ext.same-assets.com/2679378287/525623925.png",
    externalUrl: "https://shop.mschf.com/products/moving-blanket-long-coat",
    soldOut: true
  },
  {
    id: 7,
    name: "Moving Blanket Jacket",
    price: "$250",
    image: "https://ext.same-assets.com/107937004/827746556.png",
    externalUrl: "https://shop.mschf.com/products/moving-blanket-jacket",
    soldOut: true
  },
  {
    id: 8,
    name: "BWD High",
    price: "$200",
    image: "https://ext.same-assets.com/1382109803/1345171836.png",
    externalUrl: "https://shop.mschf.com/products/bwd-high-brown"
  },
  {
    id: 9,
    name: "AC.1",
    price: "$450",
    image: "https://ext.same-assets.com/1968978454/303720546.png",
    externalUrl: "https://shop.mschf.com/products/ac1"
  },
  {
    id: 10,
    name: "Wavy Collection",
    price: "$200",
    image: "https://ext.same-assets.com/1866544960/515722884.png",
    externalUrl: "https://shop.mschf.com/collections/wavy-chain"
  },
];

export default function ShopPage() {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);

  // Get the base path from environment or use empty string
  const basePath = process.env.NODE_ENV === "production" ? "/osintmao" : "";

  const featuredProducts = products.filter(p => p.featured);

  // Auto-rotate featured products
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeatureIndex(prev => (prev + 1) % featuredProducts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredProducts.length]);

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-24 px-4 pb-8">
        <div className="mb-8 text-center">
          <p className="text-red-500 text-lg font-bold">FREE SHIPPING ON ORDERS OVER $250</p>
        </div>

        {/* Featured Products Carousel */}
        <div className="mb-16 relative">
          <h2 className="sr-only">Featured Products</h2>

          <div className="aspect-square max-w-xl mx-auto relative overflow-hidden">
            {featuredProducts.map((product, index) => (
              <a
                key={product.id}
                href={product.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`block absolute inset-0 transition-opacity duration-1000 ${
                  index === activeFeatureIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-4">
                  <h3 className="text-xl">{product.name}</h3>
                  <p>{product.price}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex justify-center mt-4 gap-2">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === activeFeatureIndex ? 'bg-white' : 'bg-gray-600'
                }`}
                onClick={() => setActiveFeatureIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <h1 className="text-2xl mb-8 border-b border-gray-800 pb-2">All Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group"
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <a
                href={product.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative"
              >
                <div
                  className="aspect-square relative overflow-hidden bg-gray-900 mb-4"
                  style={{
                    transform: hoveredProductId === product.id ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.3s ease-in-out'
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="text-center">
                  <h3 className={`text-lg ${hoveredProductId === product.id ? 'underline' : ''}`}>
                    {product.name}
                  </h3>
                  <div className="flex flex-col items-center justify-center">
                    {product.soldOut ? (
                      <span className="text-gray-500">Sold out</span>
                    ) : (
                      <span>{product.price}</span>
                    )}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
