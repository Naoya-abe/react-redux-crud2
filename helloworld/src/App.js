import React from 'react';

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
      name: 'Penguin',
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

Animal.defaultProps = {
  weight: 50,
};

export default App;
