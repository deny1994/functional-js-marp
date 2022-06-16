// map(), filter(), reduce()

const data = [
  { id: 1, firstName: 'Luke', lastName: 'Skywalker', age: 30 },
  { id: 3, firstName: 'Darth', lastName: 'Vader', age: 50 },
  { id: 4, firstName: 'Obi-wan', lastName: 'Kenobi', age: 56 },
  { id: 5, firstName: 'Anakin', lastName: 'Skywalker', age: 13 },
];

const userMapper = ({ firstName, lastName, ...rest }) => ({
  name: [firstName, lastName].join(' '),
  ...rest,
});

const isAdult = ({ age }) => age >= 18;

const map_ = data.map(userMapper);

const reduce_ = data.reduce((accumulator, { age }) => accumulator + age, 0);

const filter_ = data.filter(isAdult);

const reduceMap_ = data.reduce(
  (accumulator, current) => [...accumulator, userMapper(current)],
  [],
);

const reduceFilter_ = data.reduce((accumulator, current) => {
  if (isAdult(current)) {
    return [...accumulator, current];
  } else {
    return accumulator;
  }
}, []);

console.log(map_);
console.log(reduceMap_);
console.log(reduce_);
console.log(filter_);
console.log(reduceFilter_);

// High-order function

const sum = (arg1) => (arg2) => arg1 + arg2;

const sum5 = sum(5);

const sum_ = (arg1, arg2) => arg1 + arg2;

sum_(5, 7);

console.log(sum5(7) === sum(5)(7));
