<template>
	<div class="page-details" id="accomodation">
		<div class="container">
			<h2>Accommodation</h2>
			<p>We recommend two accommodation options while you join us for our wedding. Book in as soon as possible with either as Pemberton books up quickly in November. Of course, you can also find your own place to stay locally as there are lots of options nearby. </p>
			<p>Coming to stay for the weekend will have some extra costs not encountered in your ‘usual’ wedding, and as such ask that your only present is your presence! </p>

			<h3>Glamping at Whispering Woods</h3>
			<p>The first place to stay is at the wedding venue in a luxurious bell tent village, which comes set up for you complete with arrival concierge, comfy Airbed, crisp white linen, doona, pillows and cushions, soap, towels and fairy lights! </p>
			<p>Whispering Woods is a small sustainable farm run surrounded by Karri forest. There are lots of friendly animals and walks through the woods are magical! We will have a tent and love the idea of most people choosing to stay at the venue and making a weekend of it – not having to drive after the wedding is a bonus.</p>
			<p>We have reserved a limited number of tents for our guests with Soul Camping and you can book via our wedding link below. There is a choice of a 4m tent (2-3 people, 15 available) or a 5m tent (up to 4 people, 5 available). Book in ASAP to get your choice of tent. </p>
			<p><a href="http://www.soulcamping.com.au/tessa-deans-wedding/" class="btn">http://www.soulcamping.com.au/tessa-deans-wedding/</a></p>

			<h3>Karri Valley Resort</h3>
			<p>The resort is 15 minutes’ drive from Whispering Woods and is a good option for those coming to stay who have children. We have booked two 3 bedroom chalets (just in case it books out, let us know if you want to stay in one of these!) – but you can also book a room for two in the resort or there are a couple of 2 bedroom chalets. </p>
			<p><a href="http://karrivalleyresort.com.au/" class="btn">http://karrivalleyresort.com.au/</a></p>

		</div>
		<div class="tent">
			<img src="../assets/tent.jpg" alt="Tent">
		</div>

	</div>
</template>

<script>
export default {
  name: 'AccomodationPage',
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
.tent {
	margin: 40px 0 0;
	text-align: center;
	position: relative;
}
	.tent::before {
		content: ' ';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: inset 0 10px 10px -10px rgba(0, 0, 0, 0.5);
	}
.tent img {
	width: 100%;
	max-width: 100%;
	height: auto;
}
</style>
