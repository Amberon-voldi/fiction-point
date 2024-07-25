"use client"
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

import SectionSlider from '@/components/SectionSlider';

export default function Home() {
  const mostRecentPopular = [
    { id: 1, title: 'Solo Leveling: Ragnarok', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 2, title: 'Juvenile Law', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 3, title: 'The Hero Became', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 4, title: 'From Goblin to Goblin', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 5, title: 'The Beginning After the End', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 6, title: 'Magic Academy\'s', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
  ];

  const recentlyAdded = [
    { title: 'To Do List - Kare to Kanojo no Kyori', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg', chapters: 55, updated: '8 hours ago' },
    { title: 'Miss Makeover', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg', chapters: 5, updated: '8 hours ago' },
  ];

  const [reading, setReading] = useState([
    { id: 1, title: 'Solo Leveling: Ragnarok', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 2, title: 'Juvenile Law', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 3, title: 'The Hero Became', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 4, title: 'From Goblin to Goblin', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 5, title: 'The Beginning After the End', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 6, title: 'Magic Academy\'s', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
  ]);

  const [newSeries, setNewSeries] = useState([
    { id: 1, title: 'Solo Leveling: Ragnarok', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 2, title: 'Juvenile Law', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 3, title: 'The Hero Became', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 4, title: 'From Goblin to Goblin', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 5, title: 'The Beginning After the End', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 6, title: 'Magic Academy\'s', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
  ]);

  const [onGoing, setOnGoing] = useState([
    { id: 1, title: 'Solo Leveling: Ragnarok', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 2, title: 'Juvenile Law', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 3, title: 'The Hero Became', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 4, title: 'From Goblin to Goblin', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 5, title: 'The Beginning After the End', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 6, title: 'Magic Academy\'s', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
  ]);

  const [completed, setCompleted] = useState([
    { id: 1, title: 'Solo Leveling: Ragnarok', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 2, title: 'Juvenile Law', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 3, title: 'The Hero Became', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 4, title: 'From Goblin to Goblin', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 5, title: 'The Beginning After the End', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
    { id: 6, title: 'Magic Academy\'s', imgSrc: 'https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg' },
  ]);

  const sections = [
    { title: 'Reading', data: reading },
    { title: 'New Series', data: newSeries },
    { title: 'On Going', data: onGoing },
    { title: 'Completed', data: completed },
  ];

  return (
    <>
    <Navbar />
    <div className="container mx-auto p-4 text-white">


      <div className="flex flex-row gap-4">
        <div className="w-1/4">
          {sections.map((section, index) => (
            <div key={index} className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{section.title}</h2>
              </div>
              <SectionSlider items={section.data} />
            </div>
          ))}
        </div>

        <div className="mt-8 w-3/4">
          <h2 className="text-xl font-semibold">Top 10</h2>
          <div className="flex flex-col space-y-2 mt-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img
                  src="https://us-a.tapas.io/sa/a5/d50c5840-3a2e-40bf-b47f-d464b1df4a2d_z.jpg"
                  alt="Series Name"
                  className="w-10 h-14 rounded-lg"
                />
                <div className="flex-1">
                  <p className="font-semibold">Series Name</p>
                  <p className="text-gray-400">5+</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
