let block = document.getElementById('block');
let button = document.getElementById('btn');
let button_delete = document.getElementById('btn-delete');
let input = document.getElementById('input')
store = window.localStorage;
 store.getItem("queue") ? block.innerHTML = store.getItem("queue"): '';
const Localstore = ()=>{
    store.setItem("queue", block.innerHTML)
}
const addItem = ()=>{
    block.childElementCount <19 ?(input.value ? block.insertAdjacentHTML("afterbegin",`<div class='item ms-1 pe-2 ps-2 border border-dark '>${input.value}</div>`)
    :alert('Error')) : alert('maximum');
    Localstore()
    input.value ="";
}
button.addEventListener('click', (event)=>{
    addItem();
})
button_delete.addEventListener('click', (event)=>{
block.removeChild(block.lastElementChild)
localStorage.clear();
localStorage.setItem('queue',block.innerHTML);
})
document.addEventListener('keydown',(e)=>{
    if(e.keyCode == 13){
      addItem();
    }
})


