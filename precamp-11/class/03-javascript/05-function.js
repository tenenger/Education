const gettoken = () => {
    let number = String(Math.floor(Math.random() * 1000000)).padStart('6', 0)
    document.getElementById('numbmers').innerText = number
    document.getElementById('makebtn').style.color = "#" + number;
}