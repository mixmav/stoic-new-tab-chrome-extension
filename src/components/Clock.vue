<template>
	<div class="vClock-container">
		<h1>{{time}}</h1>
	</div>
</template>

<script>
import DayJS from 'dayjs';

export default{
	data(){
		return {
			time: '',
		}
	},

	mounted(){
		setInterval(() => {
			this.time = DayJS().format('dddd D MMM, h:mm:ss A');
		}, 1000);
	}
}

</script>

<style lang="scss">
	.vClock-container{
		h1{
			font-size: 1.2em;
		}
	}
</style>