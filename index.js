// Display
let display = document.getElementById("display");
let bool = false;
let boolS = false;
// Buttons
// Numbers Row
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");
let btnClear = document.getElementById("back");
// First row of letters
let btnQ = document.getElementById("btnQ");
let btnW = document.getElementById("btnW");
let btnE = document.getElementById("btnE");
let btnR = document.getElementById("btnR");
let btnT = document.getElementById("btnT");
let btnY = document.getElementById("btnY");
let btnU = document.getElementById("btnU");
let btnI = document.getElementById("btnI");
let btnO = document.getElementById("btnO");
let btnP = document.getElementById("btnP");
// Second row of letters
let btnA = document.getElementById("btnA");
let btnS = document.getElementById("btnS");
let btnD = document.getElementById("btnD");
let btnF = document.getElementById("btnF");
let btnG = document.getElementById("btnG");
let btnH = document.getElementById("btnH");
let btnJ = document.getElementById("btnJ");
let btnK = document.getElementById("btnK");
let btnL = document.getElementById("btnL");
let btnColon = document.getElementById("btnColon");
let btnQuote = document.getElementById("btnQuote");
// Third row of letter
let btnZ = document.getElementById("btnZ");
let btnX = document.getElementById("btnX");
let btnC = document.getElementById("btnC");
let btnV = document.getElementById("btnV");
let btnB = document.getElementById("btnB");
let btnN = document.getElementById("btnN");
let btnM = document.getElementById("btnM");
// let btnComma = document.getElementById("btnComma");
// let btnPeriod = document.getElementById("btnPeriod");
// let btnSlash = document.getElementById("btnSlash");
// spacebar and Rturn Buttons

let btnSpace = document.getElementById("space");
let caps = document.getElementById("caps");
let shift = document.getElementById("shift");
let ok = document.getElementById("ok");
let score = document.getElementById("btn-");
let underscore = document.getElementById("btn_");
let enter = document.getElementById("enter");
// let btnRtrn = document.getElementById("btnRtrn");
// Temp variables
let tempTxt = "";

// Functions
// Numbers
const btn1F = () => {
  display.innerHTML = tempTxt + "1";
  tempTxt = tempTxt + "1";
};
const btn2F = () => {
  display.innerHTML = tempTxt + "2";
  tempTxt = tempTxt + "2";
};
const btn3F = () => {
  display.innerHTML = tempTxt + "3";
  tempTxt = tempTxt + "3";
};
const btn4F = () => {
  display.innerHTML = tempTxt + "4";
  tempTxt = tempTxt + "4";
};
const btn5F = () => {
  display.innerHTML = tempTxt + "5";
  tempTxt = tempTxt + "5";
};
const btn6F = () => {
  display.innerHTML = tempTxt + "6";
  tempTxt = tempTxt + "6";
};
const btn7F = () => {
  display.innerHTML = tempTxt + "7";
  tempTxt = tempTxt + "7";
};
const btn8F = () => {
  display.innerHTML = tempTxt + "8";
  tempTxt = tempTxt + "8";
};
const btn9F = () => {
  display.innerHTML = tempTxt + "9";
  tempTxt = tempTxt + "9";
};
const btn0F = () => {
  display.innerHTML = tempTxt + "0";
  tempTxt = tempTxt + "0";
};
const btnClearF = () => {
  if (tempTxt.length > 0) {
    display.innerHTML = tempTxt.substring(0, tempTxt.length - 1);
    tempTxt = tempTxt.substring(0, tempTxt.length - 1);
    return;
  }
  display.innerHTML = "";
  tempTxt = "";
};
// First row of letters
const btnQf = () => {
  if (bool == false) {
    if (boolS == true) {
      display.innerHTML = tempTxt + "Q";
      tempTxt = tempTxt + "Q";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "q";
    tempTxt = tempTxt + "q";
  } else {
    if (boolS == true) {
      display.innerHTML = tempTxt + "q";
      tempTxt = tempTxt + "q";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "Q";
    tempTxt = tempTxt + "Q";
  }
};
const btnWf = () => {
  if (bool == false) {
    if (boolS == true) {
      display.innerHTML = tempTxt + "W";
      tempTxt += "W";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "w";
    tempTxt = tempTxt + "w";
  } else {
    if (boolS == true) {
      display.innerHTML = tempTxt + "w";
      tempTxt += "w";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "W";
    tempTxt = tempTxt + "W";
  }
};
const btnEf = () => {
  if (bool == false) {
    if (boolS == true) {
      display.innerHTML = tempTxt + "E";
      tempTxt += "E";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "e";
    tempTxt = tempTxt + "e";
  } else {
    if (boolS == true) {
      display.innerHTML = tempTxt + "e";
      tempTxt += "e";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "E";
    tempTxt = tempTxt + "E";
  }
};
const btnRf = () => {
  if (bool == false) {
    if (boolS == true) {
      display.innerHTML = tempTxt + "R";
      tempTxt += "R";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "r";
    tempTxt = tempTxt + "r";
  } else {
    if (boolS == true) {
      display.innerHTML = tempTxt + "r";
      tempTxt += "r";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "R";
    tempTxt = tempTxt + "R";
  }
};
const btnTf = () => {
  if (bool == false) {
    if (boolS == true) {
      display.innerHTML = tempTxt + "T";
      tempTxt += "T";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "t";
    tempTxt = tempTxt + "t";
  } else {
    if (boolS == true) {
      display.innerHTML = tempTxt + "t";
      tempTxt += "t";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "T";
    tempTxt = tempTxt + "T";
  }
};
const btnYf = () => {
  if (bool == false) {
    if (boolS == true) {
      display.innerHTML = tempTxt + "Y";
      tempTxt += "Y";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "y";
    tempTxt = tempTxt + "y";
  } else {
    if (boolS == true) {
      display.innerHTML = tempTxt + "y";
      tempTxt += "y";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "Y";
    tempTxt = tempTxt + "Y";
  }
};
const btnUf = () => {
  if (bool == false) {
    if (boolS == true) {
      display.innerHTML = tempTxt + "U";
      tempTxt += "U";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "u";
    tempTxt = tempTxt + "u";
  } else {
    if (boolS == true) {
      display.innerHTML = tempTxt + "u";
      tempTxt += "u";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "U";
    tempTxt = tempTxt + "U";
  }
};
const btnIf = () => {
  if (bool == false) {
    if (boolS == true) {
      display.innerHTML = tempTxt + "I";
      tempTxt += "I";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "i";
    tempTxt = tempTxt + "i";
  } else {
    if (boolS == true) {
      display.innerHTML = tempTxt + "i";
      tempTxt += "i";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "I";
    tempTxt = tempTxt + "I";
  }
};
const btnOf = () => {
  if (bool == false) {
    if (boolS == true) {
      display.innerHTML = tempTxt + "O";
      tempTxt += "O";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "o";
    tempTxt = tempTxt + "o";
  } else {
    if (boolS == true) {
      display.innerHTML = tempTxt + "o";
      tempTxt += "o";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "O";
    tempTxt = tempTxt + "O";
  }
};
const btnPf = () => {
  if (bool == false) {
    if (boolS == true) {
      display.innerHTML = tempTxt + "P";
      tempTxt += "P";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "p";
    tempTxt = tempTxt + "p";
  } else {
    if (boolS == true) {
      display.innerHTML = tempTxt + "p";
      tempTxt += "p";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "P";
    tempTxt = tempTxt + "P";
  }
};
// Second row of letters
const btnAf = () => {
  if (bool == false) {
    if (boolS == true) {
      display.innerHTML = tempTxt + "A";
      tempTxt += "A";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "a";
    tempTxt = tempTxt + "a";
  } else {
    if (boolS == true) {
      display.innerHTML = tempTxt + "a";
      tempTxt += "a";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "A";
    tempTxt = tempTxt + "A";
  }
};
const btnSf = () => {
  if (bool == false) {
    if (boolS == true) {
      display.innerHTML = tempTxt + "S";
      tempTxt += "S";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "s";
    tempTxt = tempTxt + "s";
  } else {
    if (boolS == true) {
      display.innerHTML = tempTxt + "s";
      tempTxt += "s";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "S";
    tempTxt = tempTxt + "S";
  }
};
const btnDf = () => {
  if (bool == false) {
    if (boolS == true) {
      display.innerHTML = tempTxt + "D";
      tempTxt += "D";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "d";
    tempTxt = tempTxt + "d";
  } else {
    if (boolS == true) {
      display.innerHTML = tempTxt + "d";
      tempTxt += "d";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "D";
    tempTxt = tempTxt + "D";
  }
};
const btnFf = () => {
  if (bool == false) {
    if (boolS == true) {
      display.innerHTML = tempTxt + "F";
      tempTxt += "F";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "f";
    tempTxt = tempTxt + "f";
  } else {
    if (boolS == true) {
      display.innerHTML = tempTxt + "f";
      tempTxt += "f";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "F";
    tempTxt = tempTxt + "F";
  }
};
const btnGf = () => {
  if (bool == false) {
    if (boolS == true) {
      display.innerHTML = tempTxt + "G";
      tempTxt += "G";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "g";
    tempTxt = tempTxt + "g";
  } else {
    if (boolS == true) {
      display.innerHTML = tempTxt + "g";
      tempTxt += "g";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "G";
    tempTxt = tempTxt + "G";
  }
};
const btnHf = () => {
  if (bool == false) {
    if (boolS == true) {
      display.innerHTML = tempTxt + "H";
      tempTxt += "H";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "h";
    tempTxt = tempTxt + "h";
  } else {
    if (boolS == true) {
      display.innerHTML = tempTxt + "h";
      tempTxt += "h";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "H";
    tempTxt = tempTxt + "H";
  }
};
const btnJf = () => {
  if (bool == false) {
    if (boolS == true) {
      display.innerHTML = tempTxt + "J";
      tempTxt += "J";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "j";
    tempTxt = tempTxt + "j";
  } else {
    if (boolS == true) {
      display.innerHTML = tempTxt + "j";
      tempTxt += "j";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "J";
    tempTxt = tempTxt + "J";
  }
};
const btnKf = () => {
  if (bool == false) {
    if (boolS == true) {
      display.innerHTML = tempTxt + "K";
      tempTxt += "K";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "k";
    tempTxt = tempTxt + "k";
  } else {
    if (boolS == true) {
      display.innerHTML = tempTxt + "k";
      tempTxt += "k";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "K";
    tempTxt = tempTxt + "K";
  }
};
const btnLf = () => {
  if (bool == false) {
    if (boolS == true) {
      display.innerHTML = tempTxt + "L";
      tempTxt += "L";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "l";
    tempTxt = tempTxt + "l";
  } else {
    if (boolS == true) {
      display.innerHTML = tempTxt + "l";
      tempTxt += "l";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "L";
    tempTxt = tempTxt + "L";
  }
};
const capsf = () => {
  if (bool == false) {
    bool = true;
  } else {
    bool = false;
  }
};

//Third row of letters
const btnZf = () => {
  if (bool == false) {
    if (boolS == true) {
      display.innerHTML = tempTxt + "Z";
      tempTxt += "Z";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "z";
    tempTxt = tempTxt + "z";
  } else {
    if (boolS == true) {
      display.innerHTML = tempTxt + "z";
      tempTxt += "z";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "Z";
    tempTxt = tempTxt + "Z";
  }
};
const btnXf = () => {
  if (bool == false) {
    if (boolS == true) {
      display.innerHTML = tempTxt + "X";
      tempTxt += "X";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "x";
    tempTxt = tempTxt + "x";
  } else {
    if (boolS == true) {
      display.innerHTML = tempTxt + "x";
      tempTxt += "x";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "X";
    tempTxt = tempTxt + "X";
  }
};
const btnCf = () => {
  if (bool == false) {
    if (boolS == true) {
      display.innerHTML = tempTxt + "C";
      tempTxt += "C";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "c";
    tempTxt = tempTxt + "c";
  } else {
    if (boolS == true) {
      display.innerHTML = tempTxt + "c";
      tempTxt += "c";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "C";
    tempTxt = tempTxt + "C";
  }
};
const btnVf = () => {
  if (bool == false) {
    if (boolS == true) {
      display.innerHTML = tempTxt + "V";
      tempTxt += "V";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "v";
    tempTxt = tempTxt + "v";
  } else {
    if (boolS == true) {
      display.innerHTML = tempTxt + "v";
      tempTxt += "v";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "V";
    tempTxt = tempTxt + "V";
  }
};
const btnBf = () => {
  if (bool == false) {
    if (boolS == true) {
      display.innerHTML = tempTxt + "B";
      tempTxt += "B";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "b";
    tempTxt = tempTxt + "b";
  } else {
    if (boolS == true) {
      display.innerHTML = tempTxt + "b";
      tempTxt += "b";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "B";
    tempTxt = tempTxt + "B";
  }
};
const btnNf = () => {
  if (bool == false) {
    if (boolS == true) {
      display.innerHTML = tempTxt + "N";
      tempTxt += "N";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "n";
    tempTxt = tempTxt + "n";
  } else {
    if (boolS == true) {
      display.innerHTML = tempTxt + "n";
      tempTxt += "n";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "N";
    tempTxt = tempTxt + "N";
  }
};
const btnMf = () => {
  if (bool == false) {
    if (boolS == true) {
      display.innerHTML = tempTxt + "M";
      tempTxt += "M";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "m";
    tempTxt = tempTxt + "m";
  } else {
    if (boolS == true) {
      display.innerHTML = tempTxt + "m";
      tempTxt += "m";
      boolS = false;
      return;
    }
    display.innerHTML = tempTxt + "M";
    tempTxt = tempTxt + "M";
  }
};

const spaceF = () => {
  display.innerHTML = tempTxt + " ";
  tempTxt = tempTxt + " ";
};

const shiftF = () => {
  boolS = true;
};

const enterF = () => {
  display.innerHTML = tempTxt + "\n";
  tempTxt = tempTxt + "\n";
};

const okF = () => {
  alert(tempTxt);
};

// OnClicks
// Numbers OnClicks
btn1.onclick = function () {
  btn1F();
};
btn2.onclick = function () {
  btn2F();
};
btn3.onclick = function () {
  btn3F();
};
btn4.onclick = function () {
  btn4F();
};
btn5.onclick = function () {
  btn5F();
};
btn6.onclick = function () {
  btn6F();
};
btn7.onclick = function () {
  btn7F();
};
btn8.onclick = function () {
  btn8F();
};
btn9.onclick = function () {
  btn9F();
};
btn0.onclick = function () {
  btn0F();
};
btnClear.onclick = function () {
  btnClearF();
};
// First row of letter
btnQ.onclick = function () {
  btnQf();
};
btnW.onclick = function () {
  btnWf();
};
btnE.onclick = function () {
  btnEf();
};
btnR.onclick = function () {
  btnRf();
};
btnT.onclick = function () {
  btnTf();
};
btnY.onclick = function () {
  btnYf();
};
btnU.onclick = function () {
  btnUf();
};
btnI.onclick = function () {
  btnIf();
};
btnO.onclick = function () {
  btnOf();
};
btnP.onclick = function () {
  btnPf();
};
// Second row of letters
btnA.onclick = function () {
  btnAf();
};
btnS.onclick = function () {
  btnSf();
};
btnD.onclick = function () {
  btnDf();
};
btnF.onclick = function () {
  btnFf();
};
btnG.onclick = function () {
  btnGf();
};
btnH.onclick = function () {
  btnHf();
};
btnJ.onclick = function () {
  btnJf();
};
btnK.onclick = function () {
  btnKf();
};
btnL.onclick = function () {
  btnLf();
};
caps.onclick = function () {
  capsf();
};

// Third row of letters
btnZ.onclick = function () {
  btnZf();
};
btnX.onclick = function () {
  btnXf();
};
btnC.onclick = function () {
  btnCf();
};
btnV.onclick = function () {
  btnVf();
};
btnB.onclick = function () {
  display.innerHTML = tempTxt + "b";
  tempTxt += "b";
};
btnN.onclick = function () {
  btnNf();
};
btnM.onclick = function () {
  btnMf();
};

//  SpaceBar

btnSpace.onclick = function () {
  display.innerHTML = tempTxt + " ";
  tempTxt += " ";
};

score.onclick = function () {
  display.innerHTML = tempTxt + "-";
  tempTxt += "-";
};

underscore.onclick = function () {
  display.innerHTML = tempTxt + "_";
  tempTxt += "_";
};

shift.onclick = function () {
  shiftF();
};

enter.onclick = function () {
  enterF();
};

ok.onclick = function () {
  okF();
};
