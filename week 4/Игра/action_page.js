function someFunc() {
  /*Переменные для хранения координат и скорости*/
  var x1 = 0;
  var y1 = 0;
  var x2 = 800 - document.body.querySelector(".sname").value;
  var y2 = 600 - document.body.querySelector(".sname").value;
  var speed_factor1;
  var speed_factor2;
  var player1 = document.body.querySelector(".player1");
  var player2 = document.body.querySelector(".player2");
  /*Убираем поле ввода формы и выводим игровое поле и информацию об игре*/
  document.body.querySelector(".input-form").classList.add("hide");
  document.body.querySelector(".playing-field").classList.remove("hide");
  document.body.querySelector(".playing-field").style = "display:inline-block";
  document.body.querySelector(".info").classList.remove("hide");
  document.body.querySelector(".info").style = "display:inline-block";
  /*Узнаем высоту и ширину первого и второго элементов*/
  player1.style.width = document.body.querySelector(".fname").value + "px";
  player1.style.height = document.body.querySelector(".fname").value + "px";
  player2.style.width = document.body.querySelector(".sname").value + "px";
  player2.style.height = document.body.querySelector(".sname").value + "px";
  /*Узнаем коэффициенты скорости первого и второго элементов*/
  speed_factor1 = document.body.querySelector(".fspeed").value;
  speed_factor2 = document.body.querySelector(".sspeed").value;
  /*Перемещение первого элемента*/
  document.addEventListener("keydown", pressKey);
  /*Функция вычисляющая столкнулись ли объекты и выводящая победителя в результате столкновения*/
  function rect2Rect(obj1, obj2) {
    if (
      obj1.getBoundingClientRect().left <=
        obj2.getBoundingClientRect().left +
          obj2.getBoundingClientRect().width &&
      obj1.getBoundingClientRect().left + obj1.getBoundingClientRect().width >=
        obj2.getBoundingClientRect().left &&
      obj1.getBoundingClientRect().top + obj1.getBoundingClientRect().height >=
        obj2.getBoundingClientRect().top &&
      obj1.getBoundingClientRect().top <=
        obj2.getBoundingClientRect().top + obj2.getBoundingClientRect().height
    ) {
      if (
        document.body.querySelector(".fname").value >
        document.body.querySelector(".sname").value
      ) {
        alert("Игрок 1 победил");
      }
      if (
        document.body.querySelector(".fname").value <
        document.body.querySelector(".sname").value
      ) {
        alert("Игрок 2 победил");
      }
      if (
        document.body.querySelector(".fname").value ==
        document.body.querySelector(".sname").value
      ) {
        alert("Ничья");
      }
      return true;
    } else {
      return false;
    }
  }
  /*Функция вычисляющая столкнулись ли объекты со стеной и вычисляющая победителя в результате столкновения со стеной*/
  function rectWithWall() {
    if (
      x1 < 0 ||
      x1 > (800 - document.body.querySelector(".fname").value) ||
      y1 < 0 ||
      y1 > (600 - document.body.querySelector(".fname").value)
    ) {
      alert("Игрок 2 победил");
      return true;
    }
    if (
      x2 < 0 ||
      x2 > (800 - document.body.querySelector(".sname").value) ||
      y2 < 0 ||
      y2 > (600 - document.body.querySelector(".sname").value)
    ) {
      alert("Игрок 1 победил");
      return true;
    }
  }
  /*Функция обрабатывающая нажатие клавиши на клавиатуре*/
  function pressKey(event) {
    if (!rect2Rect(player1, player2) && !rectWithWall()) {
      if (event.keyCode == 37) {
        x1 = x1 - Number(speed_factor1);
        player1.style.left = x1 + "px";
      } else if (event.keyCode == 39) {
        x1 = x1 + Number(speed_factor1);
        player1.style.left = x1 + "px";
      } else if (event.keyCode == 38) {
        y1 = y1 - Number(speed_factor1);
        player1.style.top = y1 + "px";
      } else if (event.keyCode == 40) {
        y1 = y1 + Number(speed_factor1);
        player1.style.top = y1 + "px";
      } else if (event.keyCode == 65) {
        x2 = x2 - Number(speed_factor2);
        player2.style.left = x2 + "px";
      } else if (event.keyCode == 68) {
        x2 = x2 + Number(speed_factor2);
        player2.style.left = x2 + "px";
      } else if (event.keyCode == 87) {
        y2 = y2 - Number(speed_factor2);
        player2.style.top = y2 + "px";
      } else if (event.keyCode == 83) {
        y2 = y2 + Number(speed_factor2);
        player2.style.top = y2 + "px";
      }
    } else alert("Игра окончена. Нажмите f5, для того, чтобы сыграть еще раз");
  }
  /*Таймер*/
  function timer() {
    var obj = document.body.querySelector(".timer");
    obj.innerHTML--;
    if (obj.innerHTML == 0) {
      if (
        document.body.querySelector(".fname").value <
        document.body.querySelector(".sname").value
      ) {
        alert("Игрок 1 победил");
        alert("Игра окончена. Нажмите f5, для того, чтобы сыграть еще раз");
      }
      if (
        document.body.querySelector(".fname").value >
        document.body.querySelector(".sname").value
      ) {
        alert("Игрок 2 победил");
        alert("Игра окончена. Нажмите f5, для того, чтобы сыграть еще раз");
      }
      if (
        document.body.querySelector(".fname").value ==
        document.body.querySelector(".sname").value
      ) {
        alert("Ничья");
        alert("Игра окончена. Нажмите f5, для того, чтобы сыграть еще раз");
      }
      setTimeout(function () {}, 1000);
    } else {
      setTimeout(timer, 1000);
    }
  }
  setTimeout(timer, 1000);

  return false;
}
document.body.querySelector(".form").onsubmit = someFunc;