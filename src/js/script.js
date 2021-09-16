$(function(){
	$quote = $('#quote');
	$author = $('#author');
	$date = $('#date');
	$.ajax({
		method: 'GET',
		url: 'https://stoicquotesapi.com/v1/api/quotes/random',
		success: function(data){
			$quote.html(data.body);
			$author.html(data.author);
		}
	});
	

	setTimeout(function(){
		document.querySelector('.content').addEventListener('mousemove', e => { 
			var e = document.createEvent('MouseEvents');
			e.initMouseEvent('mousemove',true,true,document.defaultView, 0, event.screenX, event.screenY, event.clientX, event.clientY,false,false,false,false,null,null);
			document.getElementById("particles-js").childNodes[0].dispatchEvent(e) 
		});
	}, 600);
	
	$('#date').html(dayjs().format('dddd D MMM, h:mm A'));
	setInterval(() => {
		$('#date').html(dayjs().format('dddd D MMM, h:mmA'));
	}, 60000);

	particlesJS('particles-js', particlesJSON);
});

var particlesJSON = {
	"particles": {
	  "number": {
		"value": 70,
		"density": {
		  "enable": true,
		  "value_area": 800
		}
	  },
	  "color": {
		"value": "#ffffff"
	  },
	  "shape": {
		"type": "circle",
		"stroke": {
		  "width": 0,
		  "color": "#000000"
		},
		"polygon": {
		  "nb_sides": 5
		},
		"image": {
		  "src": "img/github.svg",
		  "width": 100,
		  "height": 100
		}
	  },
	  "opacity": {
		"value": 0.5,
		"random": false,
		"anim": {
		  "enable": false,
		  "speed": 1,
		  "opacity_min": 0.1,
		  "sync": false
		}
	  },
	  "size": {
		"value": 1,
		"random": false,
		"anim": {
		  "enable": false,
		  "speed": 40,
		  "size_min": 0.1,
		  "sync": false
		}
	  },
	  "line_linked": {
		"enable": true,
		"distance": 150,
		"color": "#ffffff",
		"opacity": 0.4,
		"width": 1
	  },
	  "move": {
		"enable": true,
		"speed": 6,
		"direction": "none",
		"random": false,
		"straight": false,
		"out_mode": "bounce",
		"bounce": false,
		"attract": {
		  "enable": false,
		  "rotateX": 600,
		  "rotateY": 1200
		}
	  }
	},
	"interactivity": {
	  "detect_on": "canvas",
	  "events": {
		"onhover": {
		  "enable": true,
		  "mode": "repulse"
		},
		"onclick": {
		  "enable": true,
		  "mode": "push"
		},
		"resize": true
	  },
	  "modes": {
		"grab": {
		  "distance": 400,
		  "line_linked": {
			"opacity": 1
		  }
		},
		"bubble": {
		  "distance": 400,
		  "size": 40,
		  "duration": 2,
		  "opacity": 8,
		  "speed": 3
		},
		"repulse": {
		  "distance": 200,
		  "duration": 0.4
		},
		"push": {
		  "particles_nb": 4
		},
		"remove": {
		  "particles_nb": 2
		}
	  }
	},
	"retina_detect": true
}