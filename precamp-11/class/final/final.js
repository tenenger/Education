function changephone1 () {
    const phone1 = document.getElementById('phone1').value

    if (phone1.length === 3) {
        document.getElementById('phone2').focus()
    }
}

function changephone2 () {
    const phone2 = document.getElementById('phone2').value

    if (phone2.length === 4) {
        document.getElementById('phone3').focus()
    }
}

let isstarted = false


const gettoken = () => {

    document.getElementById('makebtn').disabled = true;
    if (isstarted === false){
        let number = String(Math.floor(Math.random() * 1000000)).padStart('6', 0)
        isstarted = true
        document.getElementById('numbmers').innerText = number
        document.getElementById('makebtn').style.color = "#" + number;

        let time = 5;

        document.getElementById('min').innerText = time % 60
        document.getElementById('sec').innerText = time % 60
        const interval = setInterval(function() {
            if (time >= 0) {
                document.getElementById('min').innerText = String(Math.floor(time/60))
                document.getElementById('sec').innerText = String(time % 60).padStart(2, '0')
                time = (time - 1)
            }
            else {
                clearInterval(interval)
                document.getElementById('setbtn').disabled = false;
                document.getElementById('makebtn').disabled = false;
                isstarted = false
            }
        }, 1000)
    }
    else {
        
    }
}

function ok() {
    alert('인증이 완료되었습니다.');
}