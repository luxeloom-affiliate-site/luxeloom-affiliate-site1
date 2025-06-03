
// LuxeLoom – Amazon Affiliate Website & App Prototype

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function LuxeLoom() {
  const featuredProducts = [
    {
      id: 1,
      title: "Boho Woven Throw Pillow Set",
      image: "https://m.media-amazon.com/images/I/81v9D3DhdgL._AC_SL1500_.jpg",
      url: "https://www.amazon.com/dp/B085RWTW4M/?tag=yourtag-20",
    },
    {
      id: 2,
      title: "Mid-Century Modern Table Lamp",
      image: "https://m.media-amazon.com/images/I/71+8cvkznJL._AC_SL1500_.jpg",
      url: "https://www.amazon.com/dp/B07ZQ6Y2NS/?tag=yourtag-20",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 p-4">
      <header className="flex items-center justify-between py-4">
        <h1 className="text-3xl font-bold text-gray-800">LuxeLoom</h1>
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-2 top-2.5 text-gray-400" size={20} />
          <Input placeholder="Search home décor..." className="pl-8" />
        </div>
      </header>

      <main>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Featured Finds</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-xl transition">
              <img src={product.image} alt={product.title} className="w-full rounded-t-2xl" />
              <CardContent className="p-4">
                <h3 className="font-medium text-lg text-gray-800 mb-2">{product.title}</h3>
                <a href={product.url} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">View on Amazon</Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="text-center text-sm text-gray-500 mt-10">
        <p>&copy; 2025 LuxeLoom. As an Amazon Associate, we earn from qualifying purchases.</p>
      </footer>
    </div>
  );
}
