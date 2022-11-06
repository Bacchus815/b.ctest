// 해야할것
// 1. 첫번째,두번째 네모칸에 값 입력한걸 인식하게만들기
// 2. 플레이버튼활성화
// 3. You chose 뒤에는 두번째 네모칸에 입력한 값 그대로 받아오기
// 4.machine cohse 뒤에는 랜덤값 받아오기
// 5.if문으로 3,4 chose값이 동일할 시에는 won 아닐시에는 lose가 오게 만들기
const selectInput = document.querySelector("#userSelectNumber input");

const playInput = document.querySelector("#guessTheNumber input");
const playButton = document.querySelector("#guessTheNumber button");
let ke = document.getElementById("numberB");

function keyupEvent() {
  document.getElementById("selectNumber").innerHTML = selectNumber;
}


function playBtnClick() {
  console.log("");
}
playInput.addEventListener("keyup", keyupEvent);
playButton.addEventListener("click", playBtnClick);

const gameResult = document.getElementById("gameResult");

//1. 2. 0 and blank (blank= 변수로 할당해서 이후 machine chose에 사용)
//guess the number 뒤 blank를 변수로 주고 you chose 뒤에 out put 함수확인

//4. 랜덤값 만들기
const randomGame = Math.floor(Math.random() * 40) + 1;
//40자리에 사용자 입력값 넣을거임 대체할거 찾기
console.log(randomGame);

//5. if문 chose값
