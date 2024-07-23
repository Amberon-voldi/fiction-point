"use client"
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  const mostRecentPopular = [
    { id: 1, title: 'Solo Leveling: Ragnarok', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 2, title: 'Juvenile Law', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 3, title: 'The Hero Became', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 4, title: 'From Goblin to Goblin', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 5, title: 'The Beginning After the End', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 6, title: 'Magic Academy\'s scen...', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
  ];

  const recentlyAdded = [
    { title: 'To Do List - Kare to Kanojo no Kyori', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg', chapters: 55, updated: '8 hours ago' },
    { title: 'Miss Makeover', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg', chapters: 5, updated: '8 hours ago' },
    // Add more items here...
  ];

  return (
    <>
      <Navbar />
      <div className=" flex flex-row container mx-auto p-4 gap-4">


        <div className="w-full h-full mt-6">
          <h2 className="text-purple-400 text-xl font-semibold">New Series</h2>
          <div className="grid grid-cols-3 gap-4 mt-4 h-full">
            {mostRecentPopular.map((comic) => (
              <div key={comic.id} className="relative h-full">
                <Image src={comic.imgSrc} alt={comic.title} width={300} height={400} className="rounded" />
                <div className="absolute items-center justify-center bottom-0  bg-black bg-opacity-50 w-full text-center text-white py-2">
                  {comic.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-red-400 text-xl font-semibold">Top 10</h2>
          <div className="flex flex-col gap-4 mt-4">
            {recentlyAdded.map((comic, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Image src={comic.imgSrc} alt={comic.title} width={60} height={80} className="rounded" />
                <div>
                  <p className="text-white">{comic.title}</p>
                  <p className="text-gray-400">{comic.updated}, {comic.chapters} chapters</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
