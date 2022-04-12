const test = () => {
    console.log('Hello krasotka! How are you?')
}
setTimeout(test,1000)

const div = document.getElementById('div')
const btn = document.createElement('button')
div.append(btn)
btn.innerText = "Good,what about you?"
btn.addEventListener('click', function (){
    const otvet = setTimeout(function (){
        alert ('I am not bad. What are you doing?')
    },1000)
})

const btn1 = document.createElement('button')
div.append(btn1)
btn1.innerText = 'I am eating(kak vsegda) '
btn1.addEventListener('click', function (){
    const otvet2 = setTimeout(function (){
        alert ('ahahhaha, bon appetit')
    },2000)
})

const btn2 = document.createElement('button')
div.append(btn2)
btn2.innerText = 'Thanks'
btn2.addEventListener('click', function (){
    const otvet3 = setTimeout(function (){
        alert(':)')
    },2000)
})


