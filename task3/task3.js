const object = {
    name: 'Aidana',
    surname: 'Nurlanbekova',
    age: '21'
}
const JsonUser = JSON.stringify(object)
localStorage.setItem('object', JsonUser);
const data = localStorage.getItem('object');
console.log(JSON.parse(data));

function delAll (){
    localStorage.clear()
}
function del (){
    localStorage.removeItem(`${document.getElementById('keyStage').value}`, JsonUser)
}
function set (){
    localStorage.setItem(`${document.getElementById('localStage').value}`, JsonUser)
}
document.getElementById('delete_all').addEventListener('click', delAll)
document.getElementById('deleteKey').addEventListener('click', del)
document.getElementById('btnStage').addEventListener('click',set)