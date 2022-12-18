function calculate() {
    let total = score.innerHTML;
    let questionArray = document.getElementsByClassName("question");
    let answerArray = document.getElementsByClassName("answer");

    for (i = 0; i < questionArray.length; i++) {
        let question = questionArray[i].innerHTML;
        let correctanswer = eval(question);
        let useranswer = answerArray[i].value;

        console.log("parseInt(useranswer) : " + parseInt(useranswer));
        console.log("correctanswer: " + correctanswer);

        // 채점
        if (useranswer == "" || isNaN(useranswer)) { // 아무것도 안 적었을 때
            total = total - 5;
            questionArray[i].style.textDecoration = "line-through";
        } else if (parseInt(useranswer) == correctanswer) { // 정답
            total = total + 3;
            questionArray[i].style.textDecoration = "none";
        } else { // 오답
            total = total - 5;
            questionArray[i].style.textDecoration = "line-through";
        }
    }
    document.getElementById("score").innerHTML = total;
}
