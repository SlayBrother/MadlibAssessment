import React, { useState } from 'react';

// Mock API function to generate a story
const generateStory = ({ noun1, noun2, adverb, color }) => {
  return `Once upon a time, there was a ${color} ${noun1} who ${adverb} loved a ${noun2}.`;
};

const FormComponent = ({ setStory }) => {
  const [words, setWords] = useState({
    noun1: '',
    noun2: '',
    adverb: '',
    color: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWords({ ...words, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const story = generateStory(words);
    setStory(story);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="noun1" value={words.noun1} onChange={handleChange} placeholder="Noun 1" />
        <input type="text" name="noun2" value={words.noun2} onChange={handleChange} placeholder="Noun 2" />
        <input type="text" name="adverb" value={words.adverb} onChange={handleChange} placeholder="Adverb" />
        <input type="text" name="color" value={words.color} onChange={handleChange} placeholder="Color" />
        <button type="submit">Get Story</button>
      </form>
    </div>
  );
};

export default FormComponent;