// 형변환 확인하기

// const bt1 = document.querySelector(".btn1");
const bt1 = document.getElementsByClassName("btn1")[0];

bt1.addEventListener("click",function(){
    console.log("parseInt('123') : " + parseInt('123'));
    console.log("parseInt('3.14') : " + parseInt('3.14'));
    console.log("-----------------------------------------");

    console.log("parseFloat('123') : " + parseFloat('123'));
    console.log("parseFloat('3.14') : " + parseFloat('3.14'));
    console.log("-----------------------------------------");

    console.log("Number('123') : " + Number('123'));
    console.log("Number('3.14') : " + Number('3.14'));
})


// inNaN(값)
const input2 = document.getElementById("input2");
const btn2 = document.getElementById("btn2");

btn2.addEventListener("click",function(){

    if(isNaN(input2.value)){
        alert("숫자가 아닙니다.")
    } else {
        alert("숫자입니다.")
    }

})

//Math확인

const input3 = document.getElementById("input3");

document.getElementById("btn3").addEventListener("click",function(){

    console.log("Math.ceil : " +  Math.ceil(input3.value));
    console.log("Math.floor : " + Math.floor(input3.value));
    console.log("Math.trunc : " + Math.trunc(input3.value));
    console.log("Math.round : " + Math.round(input3.value));

})

//Math.random()확인
document.getElementById("btn4").addEventListener("click",function(){

    // rgb 색상 랜덤 대입( 0 ~ 255 )
    const r = Math.floor(Math.random() * 256); // 0 <= ran < 256.0 
                                               //(실수라서 Math.floor등을 써서 소수점 아래 없애는 작업 필요...)
                                               //그래야 정수범위를 얻어냄!!!
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    document.querySelector("body").style.backgroundColor
    = "rgb("+r+","+g+" ,"+b+")"
})