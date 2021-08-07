/* eslint-disable max-len */
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFighter } from '../../state/customHooks';
import { updateFighter } from '../../services/fetchApi';

const EditFighterForm = () => {
  
  const { id } = useParams();
  const fighter = useFighter(id);
  console.log('hi', fighter);

  const [name, setName] = useState(fighter);
  const [japanese, setJapanese] = useState(fighter);
  const [origin, setOrigin] = useState(fighter);
  const [birthplace, setBirthplace] = useState(fighter);
  const [style, setStyle] = useState(fighter);
  const [image, setImage] = useState(fighter);
  const [powers, setPowers] = useState(fighter);
  const [job, setJob] = useState(fighter);
  const [quote, setQuote] = useState(fighter);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const editedFighter = await updateFighter(fighter, id);
    console.log(editedFighter);
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>
          <span>Name</span>
          <input name="name" required placeholder="Enter a name" value={name} onChange={((e) => setName(e.target.value))}/>
        </label>
      </p>

      <p>
        <label>
          <span>Japanese</span>
          <input name="japanese" required placeholder="Japanese name" value={japanese} onChange={((e) => setJapanese(e.target.value))}/>
        </label>
      </p>

      <p>
        <label>
          <span>Original Appearance</span>
          <input name="origin" required placeholder="Original Appearance" value={origin} onChange={((e) => setOrigin(e.target.value))}/>
        </label>
      </p>

      <p>
        <label>
          <span>Birthplace</span>
          <input name="birthplace" required placeholder="Birthplace (Country of Origin)" value={birthplace} onChange={((e) => setBirthplace(e.target.value))}/>
        </label>
      </p>

      <p>
        <label>
          <span>Image</span>
          <input name="image" required placeholder="Image Source URL" value={image} onChange={((e) => setImage(e.target.value))}/>
        </label>
      </p>

      <p>
        <label>
          <span>Fighting Style</span>
          <input name="style" required placeholder="Fighting Style" value={style} onChange={((e) => setStyle(e.target.value))}/>
        </label>
      </p>

      <p>
        <label>
          <span>Job/Occupation</span>
          <input name="job" required placeholder="Job" value={job} onChange={((e) => setJob(e.target.value))}/>
        </label>
      </p>

      <p>
        <label>
          <span>Powers and Abilities</span>
          <input name="poweres" required placeholder="Powers/Abilities" value={powers} onChange={((e) => setPowers(e.target.value))}/>
        </label>
      </p>

      <p>
        <label>
          <span>Quote</span>
          <input name="quote" required placeholder="Quote" value={quote} onChange={((e) => setQuote(e.target.value))}/>
        </label>
      </p>
      

      <p>
        <button>Edit Fighter</button>
      </p>

    </form>

  );
};

export default EditFighterForm;
