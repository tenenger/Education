let students = ["철수", "영희", '도우너', '말포이', '도비', '그루트']

// undefined
for (let cnt = 0; cnt < students.lenght; cnt++) {
    console.log(students[cnt] + '님 안녕하세요')
}
// undefined
for (let cnt = 0; cnt < students.length; cnt++) {
    console.log(students[cnt] + '님 안녕하세요')
}
// VM4147:2 철수님 안녕하세요
// VM4147:2 영희님 안녕하세요
// VM4147:2 도우너님 안녕하세요
// VM4147:2 말포이님 안녕하세요
// VM4147:2 도비님 안녕하세요
// VM4147:2 그루트님 안녕하세요
// undefined
let persons = [
    {name:'철수', age:18},
{name:'영희', age:22},
{name:'동규', age:23},
{name:'몰라', age:24},
{name:'뭐지', age:25},
]
for (let i=0; i<persons.length; i++) {
    if(persons[i].age > 19) {
        console.log(persons[i].name + '님은 성인입니다.')
    }else {
        console.log(persons[i].name + '님은 미성년자입니다.')
    }
}
// VM4875:5 철수님은 미성년자입니다.
// VM4875:3 영희님은 성인입니다.
// VM4875:3 동규님은 성인입니다.
// VM4875:3 몰라님은 성인입니다.
// VM4875:3 뭐지님은 성인입니다.