// JS 코드 지갑!

const classMate = ['철수', '영희', '훈이']
// undefined
classMate[0]
// '철수'
classMate[2]
// '훈이'
classMate.includes('훈이')
// true
classMate.includes('동규')
// false
classMate.push('동규')
// 4
classMate
// (4) ['철수', '영희', '훈이', '동규']
classMate.pop()
// '동규'
classMate
// (3) ['철수', '영희', '훈이']
classMate.length
// 3
const developer = ['돈', '명예', '끈기', '열정', '시간']
// undefined
developer[2]
// '끈기'
let dream = ["커리어점프", "성공", "할수있다"]
// undefined
dream.concat(developer)
// (8) ['커리어점프', '성공', '할수있다', '돈', '명예', '끈기', '열정', '시간']
const sum = dream.concat(developer)
// undefined
developer.concat(dream)
// (8) ['돈', '명예', '끈기', '열정', '시간', '커리어점프', '성공', '할수있다']
const email = 'codecamp@gmail.com'
// undefined
email.split('@')
// (2) ['codecamp', 'gmail.com']
const user_email = email.split('@')[0]
// undefined
const company = email.split('@')[1]
// undefined
const front = user_email.slice(0,4)
// undefined
front_re = front.concat('****')
// 'code****'
const result = front_re.concat('@') + company
// undefined
result
// 'code****@gmail.com'