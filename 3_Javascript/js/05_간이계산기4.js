

    const num1 = document.getElementById("num1"); //요소를 추적하는 거지 값이나 속성을 추적하는 것은 아님...
    const num2 = document.getElementById("num2");
    const outcome = document.getElementById("result");

function cal(op){//op에는 +- 등등 중 하나가 전달되어짐

    const n1 = Number(num1.value);
    const n2 = Number(num2.value);
    const op = btn.innerText;

    // eval(" 코드 형식의 문자열 ")
    //  -> 매개변수의 문자열을 js코드로 해석/수행하는 함수
    // -> 속도가 느림 + 보안 이슈로 인해 사용 지양

    // result.innerText = eval(n1+op+n2);

    // 해결 방법 : new Function() 사용

    result.innerText = new Function("return" + n1+op+n2)();



}