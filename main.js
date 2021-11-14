var textDiv;
var buttonYes;
var buttonNo;
var questionText;

window.onload = function() {
  textDiv = document.getElementById('text');
  buttonYes = document.getElementById('yes');
  questionText = document.getElementById('question')
  buttonNo = document.getElementById('no');

  buttonYes.onclick = function() {
    showPanel("И девочка съела призрака");
    buttonYes.style.display = 'none';
    buttonNo.style.display = 'none';
    questionText.style.display = 'none';
  }

  buttonNo.onclick = function() {
    showPanel("И призрак съел девочку");
    buttonNo.style.display = 'none';
    buttonYes.style.display = 'none';
    questionText.style.display = 'none';
  }
}


function showPanel(newText) {
  textDiv.innerText = newText;
}
