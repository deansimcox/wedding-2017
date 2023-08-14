<template>
	<div class="page-details" id="directions">
		<div class="container">
			<h2>Directions </h2>
				<p>Whispering Woods is 3 hours and 40 minutes’ drive south of Perth and 15 minutes north of Pemberton. There is no phone reception and Google maps isn’t reliable so please use the directions and map below.</p>
				<p>We suggest driving south through Nannup and then continue along Vasse Highway until you pass the Karri Valley Resort (you can stay there or in glamping tents at the wedding site – up to you!) The turn off for Whispering Woods is Green Road which is 10 minutes down Vasse Highway and on the left-hand side (not long after the turn off for Old Vasse Road). Green Road is gravel and suitable for all types of vehicles but it’s best to take it slowly and enjoy the magic of the woods. Follow the signage for the ‘Green Cabin’ and you’ll find your way to us!</p>
		</div>

		<div class="google-map">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15775.513771734431!2d115.91727010269732!3d-34.44106578184696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x240f7eb32b3a8996!2sWhispering+Woods!5e0!3m2!1sen!2sus!4v1494242655986" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
		</div>
	</div>
</template>

<script>
export default {
  name: 'DirectionsPage',
  // data() {
  //   return {
  //     msg: '',
  //   };
  // },
};
</script>

<style scoped>
h3 {
  margin-top: 60px;
}
.google-map {
	margin: 1em;
	position: relative;
	border-radius: 4px;
	overflow: hidden;
	background: #fff;
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
	.google-map::before {
		content: ' ';
		display: block;
		padding-bottom: 50%;
	}
	.google-map iframe {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
	}
</style>
