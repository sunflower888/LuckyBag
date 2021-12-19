function w3_open(){
    document.getElementById("U01").style.display="none";
    document.getElementById("U02").style.display="none";
    document.getElementById("U03").style.display="none";
    document.getElementById("U04").style.display="none";
    document.getElementById("CL").style.display="block";
    document.getElementById("OP").style.display="none";
}
function w3_close(){
    document.getElementById("U01").style.display="block";
    document.getElementById("U02").style.display="block";
    document.getElementById("U03").style.display="block";
    document.getElementById("U04").style.display="block";
    document.getElementById("CL").style.display="none";
    document.getElementById("OP").style.display="block";
}
function u01(){
    document.getElementById("U01").style.display="block";
}
function u01_1(){
    document.getElementById("U01").style.display="none";
}
function u02(){
    document.getElementById("U02").style.display="block";
}
function u02_1(){
    document.getElementById("U02").style.display="none";
}
function u03(){
    document.getElementById("U03").style.display="block";
}
function u03_1(){
    document.getElementById("U03").style.display="none";
}
function u04(){
    document.getElementById("U04").style.display="block";
}
function u04_1(){
    document.getElementById("U04").style.display="none";
}

function cartAppend(e) {  
    const x = document.getElementById(e);
    //const ec = x.cloneNode(true); //클론
    const ele = document.getElementById("cart");
    ele.appendChild(x);
}
function cartRemove(e) {
    const x = document.getElementById(e);
    const cart = document.getElementById("cart");
    const list = document.getElementById("g01");
    list.appendChild(x); //dom에 element 추가
    cart.removeChild(x) ; //dom에 element 삭제
}
function cartRemove1(e) {
    const x = document.getElementById(e);
    const cart = document.getElementById("cart");
    const list = document.getElementById("g02");
    list.appendChild(x); //dom에 element 추가
    cart.removeChild(x) ; //dom에 element 삭제
}
function cartRemove2(e) {
    const x = document.getElementById(e);
    const cart = document.getElementById("cart");
    const list = document.getElementById("g03");
    list.appendChild(x); //dom에 element 추가
    cart.removeChild(x) ; //dom에 element 삭제
}
function c01(){
    document.getElementById("cart").style.display="block";
}
function c01_1(){
    document.getElementById("cart").style.display="none";
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

function getGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showLocation);
    }
}
function showLocation(location) {
    let lat=0.0, log=0.0;
    lat = location.coords.latitude;
    long = location.coords.longitude;
    var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(lat, long), 
    level: 3
};
var map = new kakao.maps.Map(container, options);
// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(lat, long); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
}