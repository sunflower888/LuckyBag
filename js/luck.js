function w3_open(){
    document.getElementaById("U01").style.display="block";
    document.getElementById("U02").style.display="block";
    document.getElementById("U03").style.display="block";
    document.getElementById("U04").style.display="block";
    document.getElementById("U05").style.display="block";
    document.getElementById("CL").style.display="block";
    document.getElementById("OP").style.display="none";
}
function w3_close(){
    document.getElementById("U01").style.display="none";
    document.getElementById("U02").style.display="none";
    document.getElementById("U03").style.display="none";
    document.getElementById("U04").style.display="none";
    document.getElementById("U05").style.display="none";
    document.getElementById("CL").style.display="none";
    document.getElementById("OP").style.display="block";
}

function openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
}

function closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
}

function login(){
    let id = document.getElementById("id").value;
    let pw = document.getElementById("pw").value;
    if(id==="admin"){
        if(pw=="1234"){
            alert (id + "님 로그인되었습니다.")
            document.getElementById("login").innerHTML="<h4>" + id + 
               "님 반갑습니다! </h2>"; 
               document.getElementById("myPage").innerHTML="<h4>" + id + 
                 "님 반갑습니다! </h2>"; 
        } else {
            alert("비밀번호를 확인하세요.");
        }
    }else{
        alert("회원가입 하세요.");
    }
}

function open_mp(){
    if(confirm){
        document.getElementById("mP").value;
    }
    else{
        alert("로그인이 필요합니다.");
    }
}