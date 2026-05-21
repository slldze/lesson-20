function asyncFunctions() {
  const setTimeoutBtn = document.getElementById("setTimeout");
  const clearTimeoutBtn = document.getElementById("clearTimeout");
  const setIntervalBtn = document.getElementById("setInterval");
  const clearIntervalBtn = document.getElementById("clearInterval");

  let timeoutId, intervalId;
  if (setTimeoutBtn) {
    setTimeoutBtn.addEventListener("click", () => {
      timeoutId = setTimeout(() => {
        console.log("This message is displayed after 2 seconds.");
      }, 2000);
    });
  }

  if (clearTimeoutBtn) {
    clearTimeoutBtn.addEventListener("click", () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    });
  }

  if (setIntervalBtn) {
    setIntervalBtn.addEventListener("click", () => {
      intervalId = setInterval(() => {
        console.log("This message is displayed every 2 seconds.");
      }, 2000);
    });
  }

  if (clearIntervalBtn) {
    clearIntervalBtn.addEventListener("click", () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    });
  }
}

function initClockAndCountdown() {
  const clockEl = document.getElementById("real-clock");
  const countdownEl = document.getElementById("countdown");
  const targetDate = new Date("May 22, 2026 20:00:00").getTime();

  setInterval(() => {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    if (clockEl) {
      clockEl.textContent = hours + ":" + minutes + ":" + seconds;
    }

    const diff = targetDate - now.getTime();
    if (diff > 0 && countdownEl) {
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      countdownEl.textContent = d + "d " + h + "h " + m + "m";
    } else if (countdownEl) {
      countdownEl.textContent = "ლექცია დაიწყო!";
    }
  }, 1000);
}

function slider() {
  const slides = document.querySelectorAll(".slide"),
    slidesContainer = document.querySelector(".slides");

  let currentIndex = 1;
  let autoSlider;

  function updateSlides() {
    slides.forEach((slide, index) => {
      if (index === currentIndex) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }

  function goToNextSlide() {
    if (currentIndex >= slides.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateSlides();
  }

  function startAutoSlide() {
    autoSlider = setInterval(goToNextSlide, 2000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlider);
  }

  updateSlides();
  startAutoSlide();

  if (slidesContainer) {
    slidesContainer.addEventListener("mouseenter", stopAutoSlide);
    slidesContainer.addEventListener("mouseleave", startAutoSlide);
  }
}

initClockAndCountdown();
slider();

(function test() {
  // console.log("test");
})();
