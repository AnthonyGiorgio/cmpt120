//
// Global Variables
//         
var currentLoc = 0;
var score = 0;
var navigationErrorCount = 0;
var sarcasmThreshold = 5;

var hasVisitedLoc0 = false;
var hasVisitedLoc1 = false;
var hasVisitedLoc2 = false;
var hasVisitedLoc3 = false;
var hasVisitedLoc4 = false;
        
//
// Initialization
//
function init() {
  look();
}

//
// Directional Button Event Handlers
//         
function btnGo_click() {
   var command = document.getElementById("txtCommand").value;
   command = command.trim();
   command = command.toLowerCase();
   command = command.substr(0,2);
   displayMessage(command);
}

function btnNorth_click() {
  if (currentLoc === 0) {
     currentLoc = 1;
     look();               
  } else {
    if (currentLoc === 3) {
       currentLoc = 0;
       look();            
    } else {
       navigationError(); 
    }
  }            
}

function btnSouth_click() {
  if (currentLoc === 1) {
     currentLoc = 0;
     look();
  } else {
    if (currentLoc === 0) {
       currentLoc = 3;
       look();
    } else {
       navigationError(); 
    }
  }
}

function btnEast_click() {
  if (currentLoc === 4) {
     currentLoc = 0;
     look();
  } else {
    if (currentLoc === 0) {
       currentLoc = 2;
       look();
    } else {
       navigationError(); 
    }
  }
}

function btnWest_click() {
  if (currentLoc === 2) {
     currentLoc = 0;
     look();
  } else {
    if (currentLoc === 0) {
       currentLoc = 4;
       look();
    } else {
       navigationError(); 
    }
  }
}
        
//
// Story / Locale Functions
//
function look() {
  var desc = "";
  switch(currentLoc) {
     case 0: apartment(); break;
     case 1: stairs();    break; 
     case 2: factory();   break;
     case 3: comics();    break;
     case 4: penny();     break;
     default: desc = "You cannot go that way";
  }
}

function apartment() {
   var desc = "0. You are in Sheldon's and Leonard's apartment.";
   checkScore();
   desc = desc + "\n" + "Score: " + score ;
   displayMessage(desc);
}

function stairs() {
   var desc = "1. You are standing by the stairs";
   checkScore();
   desc = desc + "\n" + "Score: " + score ;
   displayMessage(desc);
}

function factory() {
   var desc = "2. Welcome to the Cheesecake Factory. Please wait to be seated.";
   checkScore();
   desc = desc + "\n" + "Score: " + score ;
   displayMessage(desc);
}

function comics() {
   var desc = "3. Say hi to Stuart at his (not burned) Comic book store.";
   checkScore();
   desc = desc + "\n" + "Score: " + score ;
   displayMessage(desc);
}

function penny() {
   var desc = "";
   // Repetition: FOR loop
   for (var i=0; i<3; i=i+1) {
      desc = desc + "knock, ";
   }   
   desc = desc + "Penny! ";
   
   // // Repetition: WHILE loop
   var i=0; 
   while (i < 3) {
      desc = desc + "knock, ";
      i=i+1;
   }   
   
   desc = desc + "Penny! ";   
   checkScore();
   desc = desc + "\n" + "Score: " + score ;
   displayMessage(desc);
}

function navigationError() {
  navigationErrorCount = navigationErrorCount + 1;
  if (navigationErrorCount < sarcasmThreshold) {
     displayMessage("You cannot go that way.");
  } else {
     displayMessage("DUH! WTF?");
  }            
}

function checkScore() {
  if (! hasVisitedLoc0) {            
     if (currentLoc === 0) {
        score = score + 5;
        hasVisitedLoc0 = true;
     }
  } else if ( (! hasVisitedLoc1) && (currentLoc === 1) ) {            
        score = score + 5;
        hasVisitedLoc1 = true;
  } else if ( (! hasVisitedLoc2) && (currentLoc === 2) ) {            
        score = score + 5;
        hasVisitedLoc2 = true;
  } else if ( (! hasVisitedLoc3) && (currentLoc === 3) ) {            
        score = score + 5;
        hasVisitedLoc3 = true;
  } else if ( (! hasVisitedLoc4) && (currentLoc === 4) ) {            
        score = score + 5;
        hasVisitedLoc4 = true;
  }            
}

//
// Utility Function(s)
//
function displayMessage(msg) {
  var target = document.getElementById("taMain");
  target.value = msg + "\n\n" + target.value;
}
