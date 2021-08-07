import { useEffect, useState } from 'react';
import { fetchFighter, fetchFighters } from '../services/fetchApi';

export const useFighters = (page) => {
  const [loading, setLoading] = useState(true);
  const [fighters, setFighters] = useState([]);

  useEffect(() => {
    fetchFighters(page)
      .then(setFighters)
      .finally(() => setLoading(false));
  }, [page]);

  return { fighters, loading };
};

export const useFighter = (id) => {
  const [fighter, setFighter] = useState(null);

  useEffect(() => {
    fetchFighter(id).then(setFighter);
  }, [id]);

  return fighter;
};

