//계산
function calculate() {
  let total = parseInt(score.innerHTML); // total 변수를 정수로 저장
  let questionArray = document.getElementsByClassName("question");
  let answerArray = document.getElementsByClassName("answer");

  for (i = 0; i < questionArray.length; i++) {
    let question = questionArray[i].innerHTML;
    let correctanswer = eval(question);
    let useranswer = answerArray[i].value;

    // 채점
    if (useranswer === "") { // 아무것도 안적었을 때
      total = total - 5;
      questionArray[i].style.textDecoration = "line-through";
    } else if (parseInt(useranswer) === correctanswer) { // 정답
      total = total + 3;
      questionArray[i].style.textDecoration = "none";
    } else { // 오답
      total = total - 5;
      questionArray[i].style.textDecoration = "line-through";
    }
  }
  document.getElementById("score").innerHTML = total;
}
