<template>
	<div class="page-details" id="details">
		<div class="container">

			<h2>A Weekend Wedding at Whispering Woods!</h2>
      <p>We are so excited to celebrate our wedding with our closest friends and family that we have decided to make a weekend of it at Whispering Woods in Pemberton, Western Australia.</p>
      <p>The ceremony will take place on <strong>Sunday 12th November 2017</strong> however we would love if everyone joined us the day before for a welcome picnic and stayed for breakfast the day after!</p>
      <p>Please see below for an order of events and the accommodation tab for more information.</p>

      <h3>Saturday 11th November 2017</h3>

      <p class="event-item">
        <span class="event-item__time">2pm</span>
        <span>Camping Guests arrive at Whispering Woods</span>
      </p>
      <p>Follow directions to park your car in the top paddock and make sure you bring plenty of warm and wet weather clothing just in case, enclosed shoes suitable for adventuring and a hot water bottle if you feel the cold. Soul Camping will provide the basics such as linen and towels. We will be providing toilets, showers, tea and coffee facilities. </p>

      <p class="event-item">
        <span class="event-item__time">5pm</span>
        <span>Potluck Picnic and Drinks</span>
      </p>
      <p>Join us for a casual dinner, all wedding guests welcome! We would love it if you could bring a plate to share – nibbles, salads or sweets. Please also BYO alcohol if you plan to have a few drinks. We will put on a BBQ with sausages, buns, onions and soft drinks.</p>

      <h3>Sunday 12th November 2017</h3>

      <p class="event-item">
        <span class="event-item__time">8am</span>
        <span>Help Yourself Breakfast</span>
      </p>
      <p>A buffet style brekkie outside the barn to get everyone fuelled up for the day. We will be providing cereals, toast, croissants, fruit, tea, coffee, juice etc. </p>

      <p class="event-item">
        <span class="event-item__time">12pm</span>
        <span>Wedding Day Lunch</span>
      </p>
      <p>Provided by us, most likely pies, sausage rolls and sandwiches sourced from the local bakery. Will be very casual, ‘help yourself’ style while everyone is getting ready. </p>

      <p class="event-item">
        <span class="event-item__time">3pm</span>
        <span>Drinks in the Woods</span>
      </p>
      <p>We ask that you make your way to the ceremony nice and early to have a light refreshment and get excited! Beer, sparkling wine and lemonade provided!</p>
      <p>You may dress however you like. We assume that most guests will aim for smart-casual but feel free to suit and dress up to your heart’s delight if you so wish! Footwear appropriate for grass, gravel and forest paths is encouraged. </p>

      <p class="event-item">
        <span class="event-item__time">4pm</span>
        <span>Wedding Ceremony in the Woods</span>
      </p>
      <p>We get married! Woohoo!</p>

      <p class="event-item">
        <span class="event-item__time">5pm</span>
        <span>Happy Hour</span>
      </p>
      <p>Enjoy some drinks and snacks at the barn while we have some photos. </p>

      <p class="event-item">
        <span class="event-item__time">6pm</span>
        <span>Barn Party</span>
      </p>
      <p>Peace Pizza fire up their oven, music kicks off and the celebration truly begins! There will be no formal sit down dinner or seating plans so mingle and dance the night away.</p>

      <h3>Monday 13th November 2017</h3>

      <p class="event-item">
        <span class="event-item__time">9am</span>
        <span>BBQ Breakfast</span>
      </p>
      <p>Time to soak up the booze, tell some stories, share photos &amp; reminisce on the night that was! Please note that Soul Camping arrive at 10am to pack down the tents so please have your belongings packed into your car before brekkie. </p>
    </div>
    <div class="cabin">
      <img src="../assets/cabin-painting.png">
    </div>
	</div>
</template>

<script>
export default {
  name: 'DetailsPage',
  // data() {
  //   return {
  //     msg: '',
  //   };
  // },
};
</script>

<style scoped>
.cabin {
  text-align: center;
}
.cabin img {
  width: 100%;
  max-width: 100%;
  height: auto;
}
.event-item {
  display: inline-table;
  line-height: 1.2;
}
  .event-item span {
    display: table-cell;
    vertical-align: middle;
    height: 100%;
    padding: 10px 15px;
  }
  .event-item__time {
    background: rgb(122, 100, 136);
    color: #fff;
    text-shadow: none;
    border-radius: 50px 50px 0 50px;
  }
  .event-item__time + span {
    font-weight: bold;
    position: relative;
  }
    .event-item__time + span::after {
      content: ' ';
      position: absolute;
      bottom: 0;
      left: 0;
      right: -20px;
      height: 1px;
      background: linear-gradient(90deg, rgba(122, 100, 136, 0.8) 70%, rgba(122, 100, 136, 0) 100%);
    }
</style>
