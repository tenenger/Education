const people = {
    name:'철수',
}
// undefined
const people = {
    name:'철수',
    age:13
}
// undefined
people.age
// 13
people['age']
// 13

const classmates = [
    { name: "철수", age: 13, school: "다람쥐초등학교" },
    { name: "영희", age: 8, school: "공룡초등학교" },
    { name: "훈이", age: 11, school: "거북이초등학교" }
]
// undefined
classmates
// (3) [{…}, {…}, {…}]0: {name: '철수', age: 13, school: '다람쥐초등학교'}1: {name: '영희', age: 8, school: '공룡초등학교'}2: {name: '훈이', age: 11, school: '거북이초등학교'}length: 3[[Prototype]]: Array(0)
classmates[1]
// {name: '영희', age: 8, school: '공룡초등학교'}
classmates[2]['school']
// '거북이초등학교'
let myschool = classmates[2]['school']
// undefined
myschool
// '거북이초등학교'
