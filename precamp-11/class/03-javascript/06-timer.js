let isstarted = false


const gettoken = () => {

    // 만약 버튼이 눌리지 않은 상태라면 => gettoken 기능 실행
        // 만약 타이머가 돌기 시작할때 => isstarted를 true로 바꿔준다.
        // 만약 타이머가 종료되면 => isstarted를 false로 바꿔준다.
    // 아니면(타이머가 돌고있는 중) 버튼을 못 누르게 함
    document.getElementById('makebtn').disabled = true;
    if (isstarted === false){
        let number = String(Math.floor(Math.random() * 1000000)).padStart('6', 0)
        isstarted = true
        document.getElementById('numbmers').innerText = number
        document.getElementById('makebtn').style.color = "#" + number;
        document.getElementById('setbtn').disabled = false;

        let time = 10;
        document.getElementById('timer').innerText = time
        time = (time - 1)
        const interval = setInterval(function() {
            if (time >= 0) {
                
                document.getElementById('timer').innerText = String(time).padStart(2, '0')
                time = (time - 1)
            }
            else {
                clearInterval(interval)
                document.getElementById('setbtn').disabled = true;
                document.getElementById('makebtn').disabled = false;
                isstarted = false
            }
        }, 1000)
    }
    else {
        
    }
}
