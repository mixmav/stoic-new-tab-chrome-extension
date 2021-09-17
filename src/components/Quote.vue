<template>
	<div class="vQuotes-container mt-10">
		<h1>{{quote}}</h1>
		<h2>{{author}}</h2>
		
		<button class="btn mt-20" v-ripple @click="getAndUpdateQuote"><i class="fas fa-sync"></i>Get new quote</button>
	</div>
</template>

<script>
import $ from 'jquery';

export default{
	mounted(){
		this.getAndUpdateQuote();
	},
	methods: {
		getAndUpdateQuote(){
			let vThis = this;
			$.ajax({
				method: 'GET',
				url: 'https://stoicquotesapi.com/v1/api/quotes/random',
				success: function(data){
					vThis.quote = data.body;
					vThis.author = data.author;
				}
			});
		}
	},

	data(){
		return {
			quote: '',
			author: '',
		}
	}
}

</script>

<style lang="scss">
	.vQuotes-container{
		h1{
			font-size: 1.6em;
		}
		h2{
			font-size: 1.2em;
		}
	}
</style>