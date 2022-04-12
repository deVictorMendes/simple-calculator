const btn = document.getElementsByClassName('item-btn')
const displayNum = document.getElementsByClassName('display-num')

for(let i = 0 ; i < btn.length ; i++){
    let element = btn[i]
    let result = displayNum[0].innerHTML
    
    element.addEventListener('click', ()=>{
        if(element.textContent === 'C'){
            displayNum[0].innerHTML = ''
        }else{
            if(element.textContent === '='){
                displayNum[0].innerHTML = eval(result)
            }else{
                result = displayNum[0].innerHTML += element.textContent
            }
        }
    })
}