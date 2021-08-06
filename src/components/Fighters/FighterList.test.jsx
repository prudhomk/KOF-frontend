export const fetchFighters = async (page) => {
  const res = await fetch(
    'https:heroku app'
  );
  const fighters = await res.json();

  return fighters;
};

export const fetchFighter = async (id) => {
  const res = await fetch(`api/${id}`);
  return res.json();
}