let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
// in this case age value is assigned via assignment operator to age2
console.log(age, age2);

let name = 'wes';
let name2 = name;
console.log(name,name2);
name = 'wesley';
console.log(name, name2);

// value of variable number boolean string goes into another variable (copy) not reference 


const players = [1,2,3,4,5,6];
const team = players;

// on updating any of the array changes the orignal array
console.log(players, team);
team[3] = 'ii'; 
console.log(players, team);

// make copy of array
const team2 = players.slice();//on passing nothing to slice returns whole copy of array
const team3 = [].concat(players);
const team4 = [...players];
const team5 = Array.from(players);


// simmilar kind of referncing rule holds for objects too

const person = {
    name: 'aniket',
    age: 20
}

// object.assign returns copy of the object passed to it at first arguement it takes in the empty object third arguement is the property you want to override or add
const captain = Object.assign({},person,{ number : 99});
const captain2 = {
    ...person
}
// limitation of object.assign and spred operatoris it is very shallow it means nested objects inside it if they are changes then they refer to the orignal ones from where they are creates
console.log(captain);

const wes = {
    name:'wes',
    age: 100,
    social : {
        'twitter': 'hello',
        'one' : {
            'value': 1
        }
    }
}

console.clear();
const dev = {
    ...wes
}


// if i want to clone all the copies i need to deeply clone the things using deep clone function or use a trick

const dev2 = JSON.parse(JSON.stringify(wes));
