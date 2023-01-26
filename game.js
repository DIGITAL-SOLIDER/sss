AFRAME.registerComponent("game-play", {
  schema: {
    elementId: { type: "string", default: "#fat" },
  },
  update: function () {
    this.isCollided(this.data.elementId);
  },

  init: function () {
    var duration = 120;
    const timerEl = document.querySelector("#timer");
    this.startTimer(duration, timerEl);
  },

  startTimer: function (duration, timerEl) {
    var minutes;
    var seconds;

    var timer = setInterval(countDown, 1000);

    function countDown() {
      if (duration >= 0) {
        minutes = parseInt(duration / 60);
        seconds = parseInt(duration % 60);

        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        timerEl.setAttribute("text", {
          value: minutes + ":" + seconds,
        });

        duration -= 1;
      }
      else {
        clearInterval(timer);
      }
    }
  },
  isCollided: function (elemntId) {
    const element = document.querySelector(elemntId);
    element.addEventListener("collide", (e) => {
      if (elemntId.includes("#fat")) {
        element("visible",false)
        this.data.Ut()
      } else {
        this.data.gameOver()
      }
    });
  },
  Ut: function () {
    var element = document.querySelector("#countT")
    var count = element.getAttribute("text").value
    var currentTargets = parseInt(count)
    currentTargets -= 1
    element.setAttribute("text", {
      value: currentTargets
    })
  },
  gameOver: function () { 
    var subEl = document.querySelector("#sub");
    var element = document.querySelector("#over");
    element.setAttribute("visible", true);
    subEl.setAttribute("dynamic-body", { mass: 100 }); 
  },
});
