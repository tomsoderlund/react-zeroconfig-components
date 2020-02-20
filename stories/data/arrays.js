export const stringArray = ['Apple', 'Banana', 'Citrus']

export const objectArray = [
  { name: 'Sam Lowry', value: 0, age: 40 },
  { name: 'Jill Layton', value: 1, age: 29 },
  { name: 'Harry Tuttle', value: 2, age: 42 },
  { name: 'Mrs. Ida Lowry', value: 3, age: 65 },
  { name: 'Mr. Kurtzmann', value: 4, age: 55 }
]

export const objectArrayWithDisabled = objectArray.map((person, index) => Object.assign({}, person, (index === 2 ? { disabled: true } : undefined)))
