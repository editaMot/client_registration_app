import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (endpoint) => {
  // State
  const [clients, setClients] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Side effects
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(endpoint);

        setClients(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    })();
  }, [endpoint]);

  return { clients, isLoading, error };
};

export default useFetch;
