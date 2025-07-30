var typed = new Typed('.typing', {
      strings: ['Dubai', 'Sharjah','Abu Dhabi'],
      typeSpeed: 130,
      backSpeed:130,
      loop:true,
    });

    
if (window.innerWidth <= 2000 ) {
    window.onscroll = function () {
        const aero = document.getElementById('aero');
        if (window.scrollY > 200) {
            aero.style.display = 'none';
        } else {
            aero.style.display = 'block';
        }
    };
}


const sections = document.querySelectorAll('section');
const nextBtns = document.querySelectorAll('.next-btn');
const prevBtns=document.querySelectorAll('.pre-btn')

nextBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (index < sections.length - 1) {
      sections[index + 1].scrollIntoView({ behavior: 'smooth' });
    }
  });
});

prevBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (index >=0) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
    }
  });
});




// function goToServices() {
//       // Navigate to the services page
//       window.location.href = "services/index.html";
//       // Or simply: window.location.href = "services/";
//     }

