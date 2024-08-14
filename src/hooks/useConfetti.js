import { useState, useCallback } from 'react';

const useConfetti = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const triggerConfetti = useCallback(() => {
    setIsConfettiActive(true);
    setTimeout(() => setIsConfettiActive(false), 5000); // Stop after 5 seconds
  }, []);

  return { isConfettiActive, triggerConfetti };
};

export default useConfetti;