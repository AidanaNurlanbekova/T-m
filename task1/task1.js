// задание 1

const A = ["Aidana", 'Muba', 'Aidar', 'Dastan'];

const input = document.getElementById('input');
const btn = document.getElementById('btn');

function Poisk (){
    const regex = new RegExp(`${input.value}`, 'gi');
    const result = regex.test(A)
    if (input.value === ''){
        console.log('Пустотаааа')
        return result === false
    }
    if (result === false){
        console.log('Совпадений нет')
    }
    if (result ===  true){
        alert("ООО совпадение")
    }
}

btn.addEventListener('click', Poisk)
