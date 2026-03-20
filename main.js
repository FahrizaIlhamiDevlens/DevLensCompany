const text = "</DevLens>";
let i = 0;
let isDeleting = false;

function typingLoop() {
  const element = document.getElementById("logo");
  
  if (!isDeleting) {
    element.textContent = text.substring(0, i + 1);
    i++;
    
    if (i === text.length) {
      isDeleting = true;
      setTimeout(typingLoop, 1200);
      return;
    }
  } else {
    element.textContent = text.substring(0, i - 1);
    i--;
    
    if (i === 0) {
      isDeleting = false;
    }
  }
  
  setTimeout(typingLoop, isDeleting ? 50 : 100);
}

typingLoop();


document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  
  console.log("JS jalan");
  
  hamburger.addEventListener("click", () => {
    console.log("klik");
    navMenu.classList.toggle("active");
  });
});

document.addEventListener("click", (e) => {
  // cek apakah yang diklik bukan hamburger dan bukan navMenu
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});

//Copy ini ketika mau bikin conainer lain
const boxes = document.querySelectorAll('.container-home');

window.addEventListener('scroll', () => {
  boxes.forEach(box => {
    const posisi = box.getBoundingClientRect().top;
    
    if (posisi < window.innerHeight - 50) {
      box.classList.add('show');
    } else {
      box.classList.remove('show'); // ⬅️ ini kuncinya
    }
  });
});
//Copy ini ketika mau bikin conainer lain
