<template>
	<div class="app-container">
		<div id="particles-js"></div>
	
		<div class="main-page-content">
			<clock></clock>
			<quote></quote>
		</div>
	</div>
</template>

<script>
import 'particles.js/particles';

import Clock from './components/Clock.vue';
import Quote from './components/Quote.vue';

export default {
	name: 'App',
	components: {
		Clock,
		Quote
	},
	data(){
		return{
			particlesJS: window.particlesJS,
		}
	},
	mounted() {
		this.particlesJS.load('particles-js', '/assets/particles.json');
		this.addParticlesJSEventListener();
    },

	updated(){
		this.addParticlesJSEventListener();
	},

	methods: {
		addParticlesJSEventListener(){
			// Wait for the child node to be rendered by giving it a timeout of 600ms
			// Then pass all mousemove events to the particles div
			setTimeout(() => {
				document.querySelector('.main-page-content').addEventListener('mousemove', e => {
					var e = document.createEvent('MouseEvents');
					e.initMouseEvent('mousemove',true,true,document.defaultView, 0, event.screenX, event.screenY, event.clientX, event.clientY,false,false,false,false,null,null);
					document.getElementById("particles-js").childNodes[0].dispatchEvent(e) 
				});
			}, 600);
		}
	}
}
</script>

<style lang="scss">

	@import "./scss/app.scss";
	@import "./scss/fontawesome/fontawesome";

	.app-container{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(black, 0.8);
		display: flex;
		justify-content: center;
		align-items: flex-start;
		#particles-js{
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 0;
		}

		.main-page-content{
			position: relative;
			z-index: 100;
			display: inline-block;
			margin-top: 100px;
			padding: 1em;
		}
	}

</style>
