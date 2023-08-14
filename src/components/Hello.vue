<template>
  <div class="welcome">
    <div class="page-intro">
      <div class="page-intro__inner">
        <div class="container">
          <p class="page-intro__divide"><span>Dean &amp; Tessa</span></p>
          <h1 class="page-intro__heading">Invite you to their wedding celebration</h1>
          <p class="page-intro__divide"><span>12 &middot; 11 &middot; 2017</span></p>
        </div>
      </div>
    </div>
    <div class="countdown">
      <!--<Countdown date="May 13, 2017"></Countdown>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloPage',
  // components: { Countdown },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome {
  position: relative;
  background: url('../assets/woods.jpg') center center no-repeat;
  background-size: cover;
}
  .welcome::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(122, 100, 136,0.2) 0%, rgba(76, 43, 97, 0.8) 100%);
  }

.page-intro {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  min-height: 100vh;
}
.page-intro__inner {
  flex: 1 1 auto;
  padding: 60px 0 0;
  text-shadow: 0 1px 2px rgba(0,0,0,0.9);
  position: relative;
}
  .page-intro__inner .container {
    padding-top: 20px;
    padding-bottom: 20px;
    position: relative;
  }
  .page-intro__inner em {
    color: #FFF6C9;
    font-style: normal;
  }
  .page-intro__heading {
    /*font-family: "Delius", cursive;*/
    font-size: 110px;
    /*font-weight: bold;*/
    line-height: 1;
    margin: 0 0 60px;
  }
  .page-intro__divide {
    font-family: "Satisfy", cursive;
    overflow: hidden;
    font-size: 60px;
    margin: 0;
    color: #fff6c9;
  }
    .page-intro__divide span {
      display: inline-block;
      position: relative;
    }
    .page-intro__divide span::before,
    .page-intro__divide span::after {
      content: ' ';
      position: absolute;
      top: 50%;
      width: 100%;
      height: 2px;
      background: #fff;
    }
    .page-intro__divide span::before {
      right: 100%;
      margin-right: 20px;
      background: linear-gradient(270deg, #fff 0%, rgba(255, 255, 255, 0) 50%);
    }
    .page-intro__divide span::after {
      left: 100%;
      margin-left: 20px;
      background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0) 50%);
    }

@media screen and (max-width: 760px) {
  .page-intro__inner .container {
    padding-top: 0;
    padding-bottom: 0;
  }
  .page-intro__heading {
    font-size: 50px;
    line-height: 1;
    margin: 0 0 30px;
  }
  .page-intro__divide {
    font-size: 24px;
  }
}
</style>
