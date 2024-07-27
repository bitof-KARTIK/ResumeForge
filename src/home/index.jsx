// @/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/custom/Header';
import { Button } from '@/components/ui/button';
import Footer from '@/components/custom/Footer';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <main className="p-8 h-screen bg-gradient-to-r from-green-100 via-green-200 to-green-300">
        <section className="text-center my-10 bg-white/50 backdrop-blur-md border border-white/30 rounded-lg p-8 flex items-center flex-col">
          <img src="/vite.svg" alt="" srcset="" className='h-20 mb-10' />
          <h2 className="text-4xl font-bold mb-4">Welcome to ResumeForge</h2>
          <p className="text-lg mb-8">
            Create a professional resume in minutes with our easy-to-use resume builder.
          </p>
          <div className="space-x-4">
            <Button className="bg-primary text-white px-4 py-2 rounded" onClick={() => navigate('/dashboard')}>
              Create New Resume
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
