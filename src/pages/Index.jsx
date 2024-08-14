import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Sparkles } from 'lucide-react';
import useConfetti from '@/hooks/useConfetti';
import Confetti from '@/components/Confetti';

const Index = () => {
  const [name, setName] = useState('');
  const [showGreeting, setShowGreeting] = useState(false);
  const { toast } = useToast();
  const { isConfettiActive, triggerConfetti } = useConfetti();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowGreeting(true);
    triggerConfetti();
    toast({
      title: "Hello there!",
      description: `Welcome to our fun app, ${name || 'friend'}!`,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <Confetti isActive={isConfettiActive} />
      <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Fun Hello World!</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full"
          />
          <Button type="submit" className="w-full">
            Say Hello <Sparkles className="ml-2 h-4 w-4" />
          </Button>
        </form>
        {showGreeting && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-center"
          >
            <h2 className="text-2xl font-semibold text-gray-700">
              Hello, {name || 'World'}!
            </h2>
            <p className="mt-2 text-gray-600">Welcome to our awesome app!</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Index;