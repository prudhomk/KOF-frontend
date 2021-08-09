/* eslint-disable max-len */
import React from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { updateFighter } from '../../services/fetchApi.js';
import { useFighter } from '../../state/customHooks';

const EditFormPage = () => {
  const { id } = useParams();
  
  const history = useHistory();
  // useEffect(() => { fetchFighter(id);}, []);
  const fighter = useFighter(id);
  console.log('fighter', fighter);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateFighter({ name, japanese, origin, birthplace, style, image, powers, job, quote }, id);
    history.push(`/${id}`);
  };

  const [name, setName] = useState('');
  const [japanese, setJapanese] = useState('');
  const [origin, setOrigin] = useState('');
  const [birthplace, setBirthplace] = useState('');
  const [style, setStyle] = useState('');
  const [image, setImage] = useState('');
  const [powers, setPowers] = useState('');
  const [job, setJob] = useState('');
  const [quote, setQuote] = useState('');

  return (
    <div>
      <h2>Edit Fighter Info</h2>
      <form onSubmit={handleUpdate}>
        <p>
          <label>
            <span>Name</span>
            <input  name="name" required placeholder="Enter a name" value={name} onChange={((e) => setName(e.target.value))}/>
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
    </div>
  );
};

export default EditFormPage;
