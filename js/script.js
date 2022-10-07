var radioContainer = document.querySelectorAll(".box-radio")
let inRadios = document.querySelectorAll('.box-radio input')

for(i = 0; i < radioContainer.length; i++){
    radioContainer[i].addEventListener('click', (e)=>{

        let attr = document.createAttribute("checked")


        for(i = 0; i < radioContainer.length; i++){
            inRadios[i].removeAttribute('checked')
            radioContainer[i].style.backgroundColor = "hsl(183, 100%, 15%)"
            radioContainer[i].style.color = "white"
        }

        e.target.style.backgroundColor = "#9FE8DF";
        e.target.style.color = "hsl(183, 100%, 15%)";
        e.target.firstChild.nextSibling.children[0].setAttributeNode(attr)
        console.log(e.target.firstChild.nextSibling.children[0]);

    })
}


let numberPeople = document.getElementById("numberPeople")
numberPeople.addEventListener('change', ()=>{
    

    //declaring input elements
    let bill = Number(document.getElementById('inBill').value)
    let numberPeopleValue = Number(numberPeople.value);
    let customPorcentage = Number(document.getElementById("stCustom").value)
    let reset = document.getElementById('resetBtn')

    //declaring output elements
    let tip = document.getElementById('tip');
    let total = document.getElementById('total_value')

    if(bill == "" || numberPeople == ""){
        alert("Input Correct Values")
    } else {
        
        var porcentage
        let st5 = document.getElementById("st5")
        let st10 = document.getElementById("st10")
        let st15 = document.getElementById("st15")
        let st25 = document.getElementById("st25")
        let st50 = document.getElementById("st50")
        

        if(st5.checked){
           porcentage = 0.5 * bill;
        } else if (st10.checked){
            porcentage = 0.10 * bill; 
        } else if(st15.checked){
            porcentage = 0.15 * bill;
        } else if(st25.checked){
            porcentage = 0.25 * bill;
        } else if(st50.checked){
            porcentage = 0.50 * bill;
        } else {
            porcentage = (customPorcentage / 100) * bill
        }

        totalTip = porcentage / numberPeopleValue
        totalPerson = (bill + porcentage) / numberPeopleValue;
        total.innerText = "$" + totalPerson.toFixed(2);
        tip.innerText = "$" + totalTip.toFixed(2);
        reset.style.backgroundColor = "#2BBFA9"
        

    }

})


//reset

let reset = document.getElementById('resetBtn')
.addEventListener('click', ()=>{

    
    let reset = document.getElementById('resetBtn')

    //declaring input elements
    let bill = document.getElementById('inBill')

    //declaring output elements
    let tip = document.getElementById('tip');
    let total = document.getElementById('total_value')

    bill.value = "";
    numberPeople.value = "";
    tip.innerText = "$0.00";
    total.innerHTML = "$0.00";

    for(i = 0; i < radioContainer.length; i++){
        inRadios[i].removeAttribute('checked')
        radioContainer[i].style.backgroundColor = "hsl(183, 100%, 15%)"
        radioContainer[i].style.color = "white"
    }

    reset.style.backgroundColor = "#2bbfa96b"

})