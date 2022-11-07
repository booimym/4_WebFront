document.getElementById("inputId").addEventListener("change",function(){

    const regEx = /^[a-z][a-zA-Z\d\_\-]{5,13}$/;

    if(regEx.test(this.value)){

        this.style.backgroundColor = "springgreen";
    } else {
        this.style.backgroundColor = "red";
        this.style.color = "white";
    }


});
const inputPw = document.getElementById("inputPw");
const inputPwConfirm = document.getElementById("inputPwConfirm");
const pwMessage =  document.getElementById("pwMessage");
inputPwConfirm.addEventListener("keyup",function(){

    if(inputPw.value.trim().length == 0){

        if(inputPwConfirm.value.length != 0){

            inputPwConfirm.value = "";
            alert("비밀번호를 입력해주세요");
            inputPw.focus();

        }
    }
});
    
    // if(inputPw.value.trim().length != 0){
    //     if(inputPw.value == inputPwConfirm.value){
    //         pwMessage.innerText = "비밀번호 일치";
    //         
    
    //         pwMessage.classList.remove("error");

    //     } else {
    //         pwMessage.innerText = "비밀번호 불일치";
    //         pwMessage.classList.add("error");
    //         pwMessage.classList.remove("confirm");

    //     }
    // } else {
    //     pwMessage.innerText = "";
    // }  


inputPw.addEventListener("keyup",function(){

    /* if(inputPw.value.trim().length != 0){ */
        if(inputPw.value == inputPwConfirm.value){
            pwMessage.innerText = "비밀번호 일치";
            pwMessage.classList.add("confirm");
            pwMessage.classList.remove("error");
        } else {
            pwMessage.innerText = "비밀번호 불일치";
            pwMessage.classList.add("error");
            pwMessage.classList.remove("confirm");
        }
   /*  } else {
        pwMessage.innerText = "";
    } */
});    

inputPwConfirm.addEventListener("keyup",function(){

    // if(inputPw.value.trim().length != 0){
        if(inputPw.value == inputPwConfirm.value){
            pwMessage.innerText = "비밀번호 일치";
            pwMessage.classList.add("confirm");
            pwMessage.classList.remove("error");
        } else {
            pwMessage.innerText = "비밀번호 불일치";
            pwMessage.classList.add("error");
            pwMessage.classList.remove("confirm");
        }
    // }
});



const inputName = document.getElementById("inputName");
const nameMessage = document.getElementById("nameMessage");
const regEx1 = /^[가-힣]{2,5}$/;

inputName.addEventListener("input",function(){

    if(regEx1.test(this.value)){

        nameMessage.innerText = "정상입력";
        nameMessage.classList.add("confirm");
        nameMessage.classList.remove("error");
    } else {
        nameMessage.innerText = "한글만 입력하세요";
        nameMessage.classList.add("error");
        nameMessage.classList.remove("confirm");

    }

});

function validatee(){

    const gender = document.getElementsByName("gender");
    const tel = document.getElementById("inputTel");
    const regEx2 = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

    if(!gender[0].checked && !gender[1].checked){
        alert("성별을 선택해주세요");
        return false;

    }

    if(!regEx2.test(tel.value)){
        alert("전화번호의 형식이 올바르지 않습니다.");
        return false;
    }

    return true;


}


