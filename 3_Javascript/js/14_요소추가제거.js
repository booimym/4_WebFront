

// 1. 추가 버튼 클릭 시 동작
document.getElementById("add").addEventListener("click", function(){

    /* <div class = "row">
            <input type="number" class = "in">

            <span class = "remove">&times;</span>
        </div> */


    // (1) 전체를 감싸는  div 요소부터 생성할랭
    const div = document.createElement("div");

    //(2) 근데 div에는 class가 있자나. class 얘도 추가해야댐....오 이렇게 하는구나!!!
    div.classList.add("row");

    //--------------------------------------------------------------

    // input 요소 생성
    const input = document.createElement("input");

    // input에 in class 추가
    input.classList.add("in");

    //*요소에 속성을 추가하거나 변경할 때 사용하는 함수
    //요소.setAttribute("속성명","속성값");
    // <-> 요소.removeAttribute("속성명") : 속성 제거

    // input에 type= "number" 추가
    input.setAttribute("type","number");

    //-----------------------------------------------------------------

    // span 요소 생성
    const span = document.createElement("span"); // 동적으로 요소 생성

    // span에 remove class 추가
    span.classList.add("remove"); 

    // span에 &times;는 html로만 해석이 되어야지 모양이 나타나기 때문에 innerHTML 써야 됨...
    span.innerHTML = "&times;";

    // span에 click 이벤트 동작을 추가하겠다! (동적 요소에 이벤트 추가)
    span.addEventListener("click", function(){                  
        // alert("동적 요소에 이벤트가 추가됨");

        // 클릭된 x버튼의 부모요소(div,row)를 삭제
        // 요소.remove() : 해당요소를 제거
        this.parentElement.remove();

    })

    //-----------------------------------------------------------------

    // div > input,span 조립
    // div.append(input);
    // div.append(span);
    div.append(input,span);

    //.container에 div를 마지막 자식으로 추가하겠다!
    document.querySelector(".container").append(div);


    input.focus(); //화면에 추가된 input에 포커스


    


});

// 2. 추가버튼으로 생성된 X버튼의 클래스가 "remove"이니까
// "remove" 클래스 요소를 모두 얻어와
// for문으로 하나씩 접근해서 click 이벤트 동작을 추가해야지 하항 이라고 생각했지만 안됨.ㅋ 왜왜왜왜??????
//해석 순서 때문임.
//1) click버튼 누르면 나오는 이벤트......그치 쟤네가 추가가 됨...그쳐
//2) 애초에 처음에 remove가 없자나요 html에.....
// 이미 처음에 나왔을 때, remove함수 실행되고 사라져버렸대 ㅋㅋㅋㅋ

// 처음 HTML 문서 해석 시 remove라는 클래스를 가진 요소가 존재하지 않기 때문에
// 아래 이벤트 동작 추가 구문에 아무 요소에도 적용되지 않는다.

// * 처음부터 있던 HTML요소 == 정적 요소
// * JS로 추가되는 요소 == 동적 요소

// [이 밑에 있는 구문들] : 정적요소.remove에 이벤트 동작을 추가하는 거임.. 그니까 적용이 안되지...
// const remove = document.getElementsByClassName("remove");

// for(let item of remove){
//     item.addEventListener("click", function(){
//         alert("삭제");
//     })
// }

//계산버튼이 클릭되었을 때
//input요소에 작성된 값을 모두 얻어와 합한 후 출력해보쟈!!!!

//const inArr = document.getElementsByClassName("in");
document.getElementById("calc").addEventListener("click", function(){
    // 함수는 ♥호출♥이 됐을 때의 html 기점으로 수행함....
    // 이 계산버튼을 누른 그 시점에서 그 나온 요소들에 대해 input요소들을 얻어와서 계산하는 거임

    //아 그니까...만약에  const inArr = document.getElementsByClassName("in");를 함수 바깥에 써버리면,
    // 처음html을 기점으로 수행하게 되는거임......여러개 input요소 없이......

    const inArr = document.getElementsByClassName("in");
    //console.log(inArr);
    let sum = 0;

    for(let item of inArr){
        sum += Number(item.value);  //(1) input 요소에 작성된 값을 누적~!!
                                    //(2) 걍 sum += item.value하면 안됨. 
                                    //왜냐면 요소에서 읽어온 값 또는 내용은 무조건 string
                                    // -> 필요시 데이터 파싱 진행
    }

    alert("합게 : " + sum);
});
