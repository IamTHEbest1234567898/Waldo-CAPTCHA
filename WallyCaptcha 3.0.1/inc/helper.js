var checkedArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var captcha;
var counter = 0;

function complete() {
  window.top.postMessage("hidePopUp", "*");
}

function failed() {
  window.top.postMessage("fail", "*");
}

function reset() {
  counter += 1;
  if (counter > 3) {
    failed();
  }
  document.getElementById("section_1").style.clipPath = "inset(0px calc(66% + 3px) calc(66% + 3px) 0px)";
  document.getElementById("section_2").style.clipPath = "inset(0px calc(33% + 3px) calc(66% + 3px) calc(33% + 3px))";
  document.getElementById("section_3").style.clipPath = "inset(0px 0px calc(66% + 3px) calc(66% + 3px))";
  document.getElementById("section_4").style.clipPath = "inset(calc(33% + 3px) calc(66% + 3px) calc(33% + 3px) 0px)";
  document.getElementById("section_5").style.clipPath = "inset(calc(33% + 3px) calc(33% + 3px) calc(33% + 3px) calc(33% + 3px))";
  document.getElementById("section_6").style.clipPath = "inset(calc(33% + 3px) 0px calc(33% + 3px) calc(66% + 3px))";
  document.getElementById("section_7").style.clipPath = "inset(calc(66% + 3px) calc(66% + 3px) 0px 0px)";
  document.getElementById("section_8").style.clipPath = "inset(calc(66% + 3px) calc(33% + 3px) 0px calc(33% + 3px))";
  document.getElementById("section_9").style.clipPath = "inset(calc(66% + 3px) 0px 0px calc(66% + 3px))";

  document.getElementById("section_1_check").style.display = "none";
  document.getElementById("section_2_check").style.display = "none";
  document.getElementById("section_3_check").style.display = "none";
  document.getElementById("section_4_check").style.display = "none";
  document.getElementById("section_5_check").style.display = "none";
  document.getElementById("section_6_check").style.display = "none";
  document.getElementById("section_7_check").style.display = "none";
  document.getElementById("section_8_check").style.display = "none";
  document.getElementById("section_9_check").style.display = "none";

  checkedArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}

function getCAPTCHA() {
  if (captcha >= 0) {
    captcha += 1;
    captcha = captcha % 10;
    if (captcha == 0) {
      captcha = 1;
    }
  } else {
    captcha = Math.floor(Math.random() * 9 + 1);
  }
  if (captcha == 1) {
    document.getElementById("section_1").src = "img/Wally-1.jpg";
    document.getElementById("section_2").src = "img/Wally-1.jpg";
    document.getElementById("section_3").src = "img/Wally-1.jpg";
    document.getElementById("section_4").src = "img/Wally-1.jpg";
    document.getElementById("section_5").src = "img/Wally-1.jpg";
    document.getElementById("section_6").src = "img/Wally-1.jpg";
    document.getElementById("section_7").src = "img/Wally-1.jpg";
    document.getElementById("section_8").src = "img/Wally-1.jpg";
    document.getElementById("section_9").src = "img/Wally-1.jpg";
    reset();
  }
  else if (captcha == 2) {
    document.getElementById("section_1").src = "img/Wally-2.jpg";
    document.getElementById("section_2").src = "img/Wally-2.jpg";
    document.getElementById("section_3").src = "img/Wally-2.jpg";
    document.getElementById("section_4").src = "img/Wally-2.jpg";
    document.getElementById("section_5").src = "img/Wally-2.jpg";
    document.getElementById("section_6").src = "img/Wally-2.jpg";
    document.getElementById("section_7").src = "img/Wally-2.jpg";
    document.getElementById("section_8").src = "img/Wally-2.jpg";
    document.getElementById("section_9").src = "img/Wally-2.jpg";
    reset();
  }
  else if (captcha == 3) {
    document.getElementById("section_1").src = "img/Wally-3.jpg";
    document.getElementById("section_2").src = "img/Wally-3.jpg";
    document.getElementById("section_3").src = "img/Wally-3.jpg";
    document.getElementById("section_4").src = "img/Wally-3.jpg";
    document.getElementById("section_5").src = "img/Wally-3.jpg";
    document.getElementById("section_6").src = "img/Wally-3.jpg";
    document.getElementById("section_7").src = "img/Wally-3.jpg";
    document.getElementById("section_8").src = "img/Wally-3.jpg";
    document.getElementById("section_9").src = "img/Wally-3.jpg";
    reset();
  }
  else if (captcha == 4) {
    document.getElementById("section_1").src = "img/Wally-4.jpg";
    document.getElementById("section_2").src = "img/Wally-4.jpg";
    document.getElementById("section_3").src = "img/Wally-4.jpg";
    document.getElementById("section_4").src = "img/Wally-4.jpg";
    document.getElementById("section_5").src = "img/Wally-4.jpg";
    document.getElementById("section_6").src = "img/Wally-4.jpg";
    document.getElementById("section_7").src = "img/Wally-4.jpg";
    document.getElementById("section_8").src = "img/Wally-4.jpg";
    document.getElementById("section_9").src = "img/Wally-4.jpg";
    reset();
  }
  else if (captcha == 5) {
    document.getElementById("section_1").src = "img/Wally-5.jpg";
    document.getElementById("section_2").src = "img/Wally-5.jpg";
    document.getElementById("section_3").src = "img/Wally-5.jpg";
    document.getElementById("section_4").src = "img/Wally-5.jpg";
    document.getElementById("section_5").src = "img/Wally-5.jpg";
    document.getElementById("section_6").src = "img/Wally-5.jpg";
    document.getElementById("section_7").src = "img/Wally-5.jpg";
    document.getElementById("section_8").src = "img/Wally-5.jpg";
    document.getElementById("section_9").src = "img/Wally-5.jpg";
    reset();
  }
  else if (captcha == 6) {
    document.getElementById("section_1").src = "img/Wally-6.jpg";
    document.getElementById("section_2").src = "img/Wally-6.jpg";
    document.getElementById("section_3").src = "img/Wally-6.jpg";
    document.getElementById("section_4").src = "img/Wally-6.jpg";
    document.getElementById("section_5").src = "img/Wally-6.jpg";
    document.getElementById("section_6").src = "img/Wally-6.jpg";
    document.getElementById("section_7").src = "img/Wally-6.jpg";
    document.getElementById("section_8").src = "img/Wally-6.jpg";
    document.getElementById("section_9").src = "img/Wally-6.jpg";
    reset();
  }
  else if (captcha == 7) {
    document.getElementById("section_1").src = "img/Wally-7.jpg";
    document.getElementById("section_2").src = "img/Wally-7.jpg";
    document.getElementById("section_3").src = "img/Wally-7.jpg";
    document.getElementById("section_4").src = "img/Wally-7.jpg";
    document.getElementById("section_5").src = "img/Wally-7.jpg";
    document.getElementById("section_6").src = "img/Wally-7.jpg";
    document.getElementById("section_7").src = "img/Wally-7.jpg";
    document.getElementById("section_8").src = "img/Wally-7.jpg";
    document.getElementById("section_9").src = "img/Wally-7.jpg";
    reset();
  }
  else if (captcha == 8) {
    document.getElementById("section_1").src = "img/Wally-8.jpg";
    document.getElementById("section_2").src = "img/Wally-8.jpg";
    document.getElementById("section_3").src = "img/Wally-8.jpg";
    document.getElementById("section_4").src = "img/Wally-8.jpg";
    document.getElementById("section_5").src = "img/Wally-8.jpg";
    document.getElementById("section_6").src = "img/Wally-8.jpg";
    document.getElementById("section_7").src = "img/Wally-8.jpg";
    document.getElementById("section_8").src = "img/Wally-8.jpg";
    document.getElementById("section_9").src = "img/Wally-8.jpg";
    reset();
  }
  else if (captcha == 9) {
    document.getElementById("section_1").src = "img/Wally-9.jpg";
    document.getElementById("section_2").src = "img/Wally-9.jpg";
    document.getElementById("section_3").src = "img/Wally-9.jpg";
    document.getElementById("section_4").src = "img/Wally-9.jpg";
    document.getElementById("section_5").src = "img/Wally-9.jpg";
    document.getElementById("section_6").src = "img/Wally-9.jpg";
    document.getElementById("section_7").src = "img/Wally-9.jpg";
    document.getElementById("section_8").src = "img/Wally-9.jpg";
    document.getElementById("section_9").src = "img/Wally-9.jpg";
    reset();
  }
}

function compareArrays(a, b) {
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function check() {
  if (captcha == 1) {
    if (compareArrays(checkedArray, [0, 1, 0, 0, 0, 0, 0, 0, 0])) {
      complete()
    } else {
      getCAPTCHA()
    }
  }
  else if (captcha == 2) {
    if (compareArrays(checkedArray, [0, 0, 0, 0, 0, 0, 1, 0, 0])) {
      complete()
    } else {
      getCAPTCHA()
    }
  }
  else if (captcha == 3) {
    if (compareArrays(checkedArray, [0, 0, 0, 0, 0, 1, 0, 0, 1])) {
      complete()
    } else {
      getCAPTCHA()
    }
  }
  else if (captcha == 4) {
    if (compareArrays(checkedArray, [1, 0, 0, 0, 0, 0, 0, 0, 0])) {
      complete()
    } else {
      getCAPTCHA()
    }
  }
  else if (captcha == 5) {
    if (compareArrays(checkedArray, [0, 1, 0, 0, 0, 0, 0, 0, 0])) {
      complete()
    } else {
      getCAPTCHA()
    }
  }
  else if (captcha == 6) {
    if (compareArrays(checkedArray, [0, 0, 1, 0, 0, 1, 0, 0, 0])) {
      complete()
    } else {
      getCAPTCHA()
    }
  }
  else if (captcha == 7) {
    if (compareArrays(checkedArray, [0, 1, 1, 0, 0, 0, 0, 0, 0])) {
      complete()
    } else {
      getCAPTCHA()
    }
  }
  else if (captcha == 8) {
    if (compareArrays(checkedArray, [0, 0, 0, 0, 0, 0, 0, 1, 0])) {
      complete()
    } else {
      getCAPTCHA()
    }
  }
  else if (captcha == 9) {
      getCAPTCHA()
  }
}

function section_1() {
  if (document.getElementById("section_1").style.clipPath == "inset(10px calc(66% + 13px) calc(66% + 13px) 10px)") {
    document.getElementById("section_1").style.clipPath = "inset(0px calc(66% + 3px) calc(66% + 3px) 0px)";
    document.getElementById("section_1_check").style.display = "none";
    checkedArray[0] = 0;
  } else {
    document.getElementById("section_1").style.clipPath = "inset(10px calc(66% + 13px) calc(66% + 13px) 10px)";
    document.getElementById("section_1_check").style.display = "block";
    checkedArray[0] = 1;
  }
}

function section_2() {
  if (document.getElementById("section_2").style.clipPath == "inset(10px calc(33% + 13px) calc(66% + 13px))") {
    document.getElementById("section_2").style.clipPath = "inset(0px calc(33% + 3px) calc(66% + 3px) calc(33% + 3px))";
    document.getElementById("section_2_check").style.display = "none";
    checkedArray[1] = 0;
  } else {
    document.getElementById("section_2").style.clipPath = "inset(10px calc(33% + 13px) calc(66% + 13px) calc(33% + 13px))";
    document.getElementById("section_2_check").style.display = "block";
    checkedArray[1] = 1;
  }
}

function section_3() {
  if (document.getElementById("section_3").style.clipPath == "inset(10px 10px calc(66% + 13px) calc(66% + 13px))") {
    document.getElementById("section_3").style.clipPath = "inset(0px 0px calc(66% + 3px) calc(66% + 3px))";
    document.getElementById("section_3_check").style.display = "none";
    checkedArray[2] = 0;
  } else {
    document.getElementById("section_3").style.clipPath = "inset(10px 10px calc(66% + 13px) calc(66% + 13px))";
    document.getElementById("section_3_check").style.display = "block";
    checkedArray[2] = 1;
  }
}

function section_4() {
  if (document.getElementById("section_4").style.clipPath == "inset(calc(33% + 13px) calc(66% + 13px) calc(33% + 13px) 10px)") {
    document.getElementById("section_4").style.clipPath = "inset(calc(33% + 3px) calc(66% + 3px) calc(33% + 3px) 0px)";
    document.getElementById("section_4_check").style.display = "none";
    checkedArray[3] = 0;
  } else {
    document.getElementById("section_4").style.clipPath = "inset(calc(33% + 13px) calc(66% + 13px) calc(33% + 13px) 10px)";
    document.getElementById("section_4_check").style.display = "block";
    checkedArray[3] = 1;
  }
}

function section_5() {
  if (document.getElementById("section_5").style.clipPath == "inset(calc(33% + 13px))") {
    document.getElementById("section_5").style.clipPath = "inset(calc(33% + 3px) calc(33% + 3px) calc(33% + 3px) calc(33% + 3px))";
    document.getElementById("section_5_check").style.display = "none";
    checkedArray[4] = 0;
  } else {
    document.getElementById("section_5").style.clipPath = "inset(calc(33% + 13px) calc(33% + 13px) calc(33% + 13px) calc(33% + 13px))";
    document.getElementById("section_5_check").style.display = "block";
    checkedArray[4] = 1;
  }
}

function section_6() {
  if (document.getElementById("section_6").style.clipPath == "inset(calc(33% + 13px) 10px calc(33% + 13px) calc(66% + 13px))") {
    document.getElementById("section_6").style.clipPath = "inset(calc(33% + 3px) 0px calc(33% + 3px) calc(66% + 3px))";
    document.getElementById("section_6_check").style.display = "none";
    checkedArray[5] = 0;
  } else {
    document.getElementById("section_6").style.clipPath = "inset(calc(33% + 13px) 10px calc(33% + 13px) calc(66% + 13px))";
    document.getElementById("section_6_check").style.display = "block";
    checkedArray[5] = 1;
  }
}

function section_7() {
  if (document.getElementById("section_7").style.clipPath == "inset(calc(66% + 13px) calc(66% + 13px) 10px 10px)") {
    document.getElementById("section_7").style.clipPath = "inset(calc(66% + 3px) calc(66% + 3px) 0px 0px)";
    document.getElementById("section_7_check").style.display = "none";
    checkedArray[6] = 0;
  } else {
    document.getElementById("section_7").style.clipPath = "inset(calc(66% + 13px) calc(66% + 13px) 10px 10px)";
    document.getElementById("section_7_check").style.display = "block";
    checkedArray[6] = 1;
  }
}

function section_8() {
  if (document.getElementById("section_8").style.clipPath == "inset(calc(66% + 13px) calc(33% + 13px) 10px)") {
    document.getElementById("section_8").style.clipPath = "inset(calc(66% + 3px) calc(33% + 3px) 0px calc(33% + 3px))";
    document.getElementById("section_8_check").style.display = "none";
    checkedArray[7] = 0;
  } else {
    document.getElementById("section_8").style.clipPath = "inset(calc(66% + 13px) calc(33% + 13px) 10px calc(33% + 13px))";
    document.getElementById("section_8_check").style.display = "block";
    checkedArray[7] = 1;
  }
}

function section_9() {
  if (document.getElementById("section_9").style.clipPath == "inset(calc(66% + 13px) 10px 10px calc(66% + 13px))") {
    document.getElementById("section_9").style.clipPath = "inset(calc(66% + 3px) 0px 0px calc(66% + 3px))";
    document.getElementById("section_9_check").style.display = "none";
    checkedArray[8] = 0;
  } else {
    document.getElementById("section_9").style.clipPath = "inset(calc(66% + 13px) 10px 10px calc(66% + 13px))";
    document.getElementById("section_9_check").style.display = "block";
    checkedArray[8] = 1;
  }
}
