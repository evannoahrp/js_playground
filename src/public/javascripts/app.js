/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#000000",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#000000",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "repulse",
        },
        onclick: {
          enable: false,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 100,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: "#b61924",
      background_image: "",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover",
    },
  }
);

// card in portfolio
class kartu {
  constructor(gambar, deskripsi) {
    this.gambar = gambar;
    this.deskripsi = deskripsi;
  }
}

var gambar1 = new kartu(
  "/images/meme/1.jpg",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet modi exercitationem fugit necessitatibus omnis recusandae atque quisquam numquam. Pariatur reprehenderit laboriosam earum velit delectus ipsam!"
);
var gambar2 = new kartu("/images/meme/2.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur asperiores aperiam illo deleniti illum iure vero unde amet nemo, velit fuga magnam explicabo eveniet magni.");
var gambar3 = new kartu("/images/meme/3.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eligendi illo, illum ducimus debitis suscipit. Nihil, neque ullam. Nemo sapiente impedit ratione cum, quia debitis.");
var gambar4 = new kartu("/images/meme/4.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa mollitia possimus dignissimos laborum a aut sit modi! Doloremque libero unde eligendi possimus saepe, esse quaerat.");
var gambar5 = new kartu(
  "/images/meme/5.jpg",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam consequatur vitae consequuntur corrupti dignissimos. Alias est earum magni provident odit nostrum voluptate suscipit libero quod?"
);

var arrGambar = [gambar1, gambar2, gambar3, gambar4, gambar5];

$(document).ready(function () {
  $.each(arrGambar, function (i) {
    var temp = `<div class="col-md-4 mb-4"><div class="card h-100"><img src="${arrGambar[i].gambar}" alt="..." /><div class="card-body"><p class="card-text"> ${arrGambar[i].deskripsi}</p></div></div></div>`;
    $("#kartuPortfolio").append(temp);
  });
});
