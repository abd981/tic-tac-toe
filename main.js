var tdElements = document.querySelectorAll("td");
var turn = 0;
var btn = document.getElementById("btn");
var table = document.querySelector("table");
var turnText = document.getElementById("turn");
turnText.innerHTML = "Player 1 turn";
var isPlaying = true;

var gameSys = [true, true, true,
               true, true, true,
               true, true, true]

tdElements.forEach((item, i) => {
  item.addEventListener("click", () => {
    if(gameSys[i])
    {
      if(isPlaying)
      {
        item.innerHTML = playerTurn(item);
        gameSys[i] = false;
        gameOverCases(tdElements);
      }
    }
  });
});



function playerTurn(elem) {
    if(turn % 2 === 0){
      turnText.innerHTML = "Player 2 turn";
      turn++;
      return "X";
    }
    else{
      turnText.innerHTML = "Player 1 turn";
      turn++;
      return "O";
    }
}


function reset()
{
  btn.style.display = "none";
  turn = 0;
  isPlaying = true;
  for(var i = 0; i < tdElements.length; i++)
  {
    tdElements[i].innerHTML = "";
  }
  for(var i = 0; i < gameSys.length; i++)
  {
    gameSys[i] = true;
  }
  turnText.innerHTML = "Player 1 turn";
  winText.innerHTML = ""
}


var winText = document.getElementById("text");

function gameOver(text)
{
  isPlaying = false;
  btn.style.display = "inline";
}

function gameOverSys(winner){
  if(winner=="X")
  {
    gameOver("Player 1 is the winner")
    winText.innerHTML = "Player 1 is the winner"
  }
  else if(winner=="O")
  {
    gameOver("Player 2 is the winner")
    winText.innerHTML = "Player 2 is the winner"
  }
  else if(winner=="D")
  {
    gameOver("Drew")
    winText.innerHTML = "Drew"
  }
}


function gameOverCases(arr)
{
  // rotations start
  if(arr[0].innerHTML === "X" && arr[4].innerHTML === "X" && arr[8].innerHTML === "X")
  {
    gameOverSys("X");
  }
  else if(arr[0].innerHTML === "O" && arr[4].innerHTML === "O" && arr[8].innerHTML === "O")
  {
    gameOverSys("O");
  }
  else if(arr[2].innerHTML === "X" && arr[4].innerHTML === "X" && arr[6].innerHTML == "X")
  {
    gameOverSys("X");
  }
  else if(arr[2].innerHTML === "O" && arr[4].innerHTML === "O" && arr[6].innerHTML === "O")
  {
    gameOverSys("O");
  }//rotations end horizontal start
  else if(arr[0].innerHTML === "X" && arr[1].innerHTML === "X" && arr[2].innerHTML === "X")
  {
    gameOverSys("X");
  }
  else if(arr[0].innerHTML === "O" && arr[1].innerHTML === "O" && arr[2].innerHTML === "O")
  {
    gameOverSys("O");
  }
  else if(arr[3].innerHTML === "X" && arr[4].innerHTML === "X" && arr[5].innerHTML === "X")
  {
    gameOverSys("X");
  }
  else if(arr[3].innerHTML === "O" && arr[4].innerHTML === "O" && arr[5].innerHTML === "O")
  {
    gameOverSys("O");
  }
  else if(arr[6].innerHTML === "X" && arr[7].innerHTML === "X" && arr[8].innerHTML === "X")
  {
    gameOverSys("X");
  }

  else if(arr[6].innerHTML === "O" && arr[7].innerHTML === "O" && arr[8].innerHTML === "O")
  {
    gameOverSys("O");
  }  //horizontal end vertical start
  else if(arr[0].innerHTML === "X" && arr[3].innerHTML === "X" && arr[6].innerHTML === "X")
  {
    gameOverSys("X")
  }
  else if(arr[0].innerHTML === "O" && arr[3].innerHTML === "O" && arr[6].innerHTML === "O")
  {
    gameOverSys("O")
  }
  else if(arr[1].innerHTML === "X" && arr[4].innerHTML === "X" && arr[7].innerHTML === "X")
  {
    gameOverSys("X")
  }
  else if(arr[1].innerHTML === "O" && arr[4].innerHTML === "O" && arr[7].innerHTML === "O")
  {
    gameOverSys("O")
  }
  else if(arr[2].innerHTML === "X" && arr[5].innerHTML === "X" && arr[8].innerHTML === "X")
  {
    gameOverSys("X")
  }
  else if(arr[2].innerHTML === "O" && arr[5].innerHTML === "O" && arr[8].innerHTML === "O")
  {
    gameOverSys("O")
  }
  else if(turn >= 9)
  {
    gameOverSys("D")
  }
}
