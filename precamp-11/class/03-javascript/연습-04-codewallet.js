if(1+1 === 2) {
    console.log('정답입니다.')
    } else {
    console.log('틀렸습니다.')
    }
    // VM386:2 정답입니다.
    // undefined
    if(true) {
    console.log('정답입니다.')
    } else {
    console.log('틀렸습니다.')
    }
    // VM463:2 정답입니다.
    // undefined
    if(false) {
    console.log('정답입니다.')
    } else {
    console.log('틀렸습니다.')
    } 
    // VM537:4 틀렸습니다.
    // undefined
    const pw1 = 123
    // undefined
    const pw2 = 456
    // undefined
    if(pw1 ===pw2) {
    alert('비밀번호가 일치합니다.')
    }
    else {
    alert('비밀번호가 틀립니다.')
    }
    // undefined
    setInterval(function(){console.log('1초가 지났습니다.')},  1000)

    setTimeout(function(){console.log('펑')}, 10000)