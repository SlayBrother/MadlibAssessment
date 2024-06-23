import React, { useState } from 'react';
import FormComponent from './FormComponent';
import Story from './Story';

const Madlib = () => {
  const [story, setStory] = useState('');

  return (
    <div>
      <h2>Fill in the Blanks</h2>
      <FormComponent setStory={setStory} />
      <Story story={story} />
    </div>
  );
};

export default Madlib;