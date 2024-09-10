// Lab1


let user = {
    name: 'zyad',
    email: 'zyadt870@@gmail.com',
    id: '011086768655',
    address: {
      city: 'Jeddah',
      zipCode: '21921',
      street: 'King Abdulaziz st',
    },
    skill: ['Debug', 'Time managment', 'Leadership'],
    available: false,
    isAvailable: function () {
      return true ? this.available === true : false;
    },
  };
  
  console.log(user);  
  console.log(`Name: ${user.name}\n`);
  
  console.log(`Id before: ${user.id}`);
  user.id = '2040875';
  console.log(`Id After: ${user.id}`);
  
  delete user.email;
  console.log(user);
  
  console.log(`\navailable = ${user.isAvailable()}`);
  user.available = true;
  console.log(`\navailable = ${user.isAvailable()}`);
  
  console.log(user.address);
  
  console.log(user.address['city']);
  console.log(user.skill[2]);
  
  console.log(user.skill.join(' , '));





// ------------------------------- Lab2 -------------------------------

characters = [
    {
      name: 'Luke Skywalker',
      height: 177,
      gender: 'male',
      mass: 77,
      eye_color: 'brown',
    },
    {
      name: 'Leia Organa',
      height: 160,
      gender: 'female',
      mass: 56,
      eye_color: 'blue',
    },
    {
      name: 'Han Solo',
      height: 180,
      gender: 'male',
      mass: 80,
      eye_color: 'brown',
    },
    {
      name: 'Chewie',
      height: 222,
      gender: 'male',
      mass: 190,
      eye_color: 'black',
    },
    {
      name: 'kevien',
      height: 106,
      gender: 'male',
      mass: 32.2,
      eye_color: 'red',
    },
  ];
  
  let blueEyeColor = characters.find(
    (character) => character.eye_color === 'blue'
  );
  let firstName = blueEyeColor ? blueEyeColor.name.split(' ')[0] : null;
  
  console.log(firstName);
  
  let mass50 = characters.find((character) => {
    if (character.mass > 50) {
      return character;
    }
  });
  
  console.log(mass50.gender);
  
  let height200 = characters.filter((character) => character.height < 200);
  
  console.log(height200);
  
  let maleCharacter = characters.filter((character) => {
    return character.gender === 'male';
  });
  
  console.log(`/n)`;
  console.log(maleCharacter);
  
  let namesOnly = [];
  
  characters.forEach((e) => {
    namesOnly.push(e.name);
  });
  console.log(namesOnly);
  
  let heightOnly = [];
  
  characters.forEach((e) => {
    heightOnly.push(e.height);
  });
  
  console.log(`/n)`;
  console.log(heightOnly);
  
  let sortedByMass = characters.sort((e1, e2) => {
    return e1.mass - e2.mass;
  });
  console.log("/n");
  console.log(sortedByMass);
  
  let sortedByHeight = characters.sort((e1, e2) => {
    return e2.height - e1.height;
  });
  
  console.log(`/n)`;
  console.log(sortedByHeight);
  
  console.log(`/n)`;
  console.log(characters.every((e) => e.mass > 45));
  
  console.log(`/n)`;
  console.log(characters.every((e) => e.height > 200));
  
  console.log("/n");
  console.log(characters.some((e) => e.eye_color === 'blue'));
  
  console.log("/n");
  console.log(characters.some((e) => e.height > 210));
