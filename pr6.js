const input = document.querySelector("#text");
const todoli = document.querySelector(".todo");



input.addEventListener("keyup",
function(event){
    if(event.key == "Enter"){
        addtodo(this.value);
        this.value = ""
    }
})

const addtodo = function(item){
    const liitems = document.createElement("li");
    liitems.innerHTML = `
    ${item}
        <ion-icon name="close-outline" class="close"></ion-icon>
    `;
   

    liitems.addEventListener("click",
    function(){
        this.classList.toggle("done");
    })

    liitems.querySelector(".close").addEventListener("click",function(){
        liitems.remove()
    })

    todoli.appendChild(liitems)
}
