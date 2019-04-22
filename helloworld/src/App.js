import React from 'react';
import propTypes from 'prop-types';

const App = () => {
  const animalProfiles = [
    {
      name: 'Micro Pig',
      weight: 20,
    },
    {
      name: 'Lion',
      weight: 100,
    },
    {
      name: 69,
    },
  ];

  console.log(animalProfiles[0].name);

  return (
    <div>
      {animalProfiles.map((profile, index) => {
        return (
          <Animal name={profile.name} weight={profile.weight} key={index} />
        );
      })}
    </div>
  );
};

const Animal = props => {
  return (
    <div>
      I love {props.name}! Max-weight is {props.weight}kg
    </div>
  );
};

Animal.propTypes = {
  name: propTypes.string,
  weight: propTypes.number.isRequired,
};

export default App;
