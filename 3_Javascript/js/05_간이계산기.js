

    const num1 = document.getElementById("num1"); //요소를 추적하는 거지 값이나 속성을 추적하는 것은 아님...
    const num2 = document.getElementById("num2");
    const outcome = document.getElementById("result");
function plus(){

    const sum = Number(num1.value) + Number(num2.value);
    // console.log(sum);
    
     // 출력문 
    //outcome.innerHTML = "<span id = 'result'>" + (Number(num1.value) + Number(num2.value))+"</span>";
    outcome.innerHTML =  sum;
}

// Number()는 빈 문자열을 0으로 나타내줌...



function minus(){
    
    const minus = Number(num1.value) - Number(num2.value);
    //console.log(minus);
    outcome.innerHTML = "<span id = 'result'>" + minus+"</span>";
    
}

function multiple(){
    
    const multiple = Number(num1.value) * Number(num2.value);
    console.log(multiple);
    
    
}

function divide(){
    
    const divide = Number(num1.value) / Number(num2.value);
    console.log(divide);
    
    
}

function etc(){

    const etc = Number(num1.value) % Number(num2.value);
    //console.log(etc);
    outcome.innerHTML = "<span id = 'result'>" + etc+"</span>";
}