

const eSignature = document.getElementById("signature");
var c = eSignature.getContext("2d");
eSignature.width = 399;
eSignature.height = 300;
eSignature.style.backgroundColor = "transparent";




window.onload = function(){


  let y = 10;  
  fvGridY(c);
  function fvGridY (c){
    for(i=0; i<40; i++){
      c.beginPath();
      c.strokeStyle = "blue";
    c.strokeStyle = "transparent";
      c.lineWidth = 1;
      //       X   Y 
      c.moveTo(0, y*i);
      c.lineTo(450, y*i);
      c.stroke();
      c.closePath();
    }
  } // end function fnGridY

  let x = 10;  
  fvGridX(c);
  function fvGridX (c){
    for(i=0; i<50; i++){
      c.beginPath();
      c.strokeStyle = "blue";
  c.strokeStyle = "transparent";
      c.lineWidth = 1;
      //       X    Y 
      c.moveTo(x*i, 0);
      c.lineTo(x*i, 300);
      c.stroke();
      c.closePath();
    }
  } // end function fnGridX




  function fnLogo(c){
    c.beginPath();
    c.strokeStyle = 'red';
    c.strokeStyle = "grey";
    c.strokeStyle = "pink";
    c.strokeStyle = "purple";
    c.strokeStyle = "hotpink";
//    c.strokeStyle = "white";
c.lineCap = "round";
c.lineWidth = 13;

    //       X   Y 
    // F
    c.moveTo(10, 25);
    c.lineTo(60, 25);
    c.moveTo(10, 65);
    c.lineTo(10, 115);
    c.moveTo(10, 65);
    c.lineTo(60, 65);

    // R
    c.moveTo(90, 25);
    c.lineTo(120, 25);

    c.moveTo(90, 65);
    c.arc(120, 45, 20, 1.5, Math.PI * 1.5, true); // Outer circle

    c.moveTo(90, 65);
    c.lineTo(160, 135);

    // A
    c.moveTo(215, 25);
    c.lineTo(260, 115);

    // N
    c.moveTo(280, 75);
    c.lineTo(320, 165);

    // K
    c.moveTo(340, 120);
    c.lineTo(390, 75);
    c.moveTo(340, 120);
    c.lineTo(390, 165);
    
    // V
    c.moveTo(10, 145);
    c.lineTo(95, 265);
    c.moveTo(95, 265);
    c.lineTo(215, 25);

    // O
    c.moveTo(255, 225);
    c.arc(215, 225, 40, 0, Math.PI * 2, true); // Outer circle





    c.stroke();
    c.closePath();
  } // end draw function

  fnLogo(c);

  // FRAMERATE USED FOR CALLING FNMAINANIMATION 24 TIMES PER SECOND
  setInterval(function(eSignature){ 
  //
  }, 100);

}