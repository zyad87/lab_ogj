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