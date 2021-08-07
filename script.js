

    function percentage(value,percent){
        return (parseInt(value/100))*parseInt(percent);
    }
     console.log(percentage(500,"10%"));


    const valueDisplay=document.querySelector('.value');
    const uservalue =document.querySelector("#val");
    const userpercent=document.querySelector("#per");
    const resultDisplay=document.querySelector(".result");
    const button=document.querySelector(".btn");

//displaying initial value which is o
    let defaultValue=0;
    let defaultpercent=0;

 //creating a function to show results to avoid repetition
    function showresult() {
        
        resultDisplay.innerHTML =`${defaultpercent}% of $${defaultValue} is $${percentage(defaultValue,defaultpercent)}`;  
    }

//displaying initial value 
    valueDisplay.innerHTML = defaultValue;
    showresult();
    
// listening for users input so that we can display in the value
    uservalue.oninput = function () {
        defaultValue =uservalue.value || 0;
        valueDisplay.innerHTML=defaultValue;
        showresult();
    }
// listening for users input so that we can display in the result based on the percentage
    userpercent.oninput = function (){
    defaultpercent = userpercent.value || 0;
    showresult()

}

button.addEventListener('click', function(){
    uservalue.value=0;
    userpercent.value=0;
    valueDisplay.value=0;
    //resultDisplay.value = 0% of $0 is 0;
    
  
})


 
