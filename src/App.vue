
<template>
  <div class="page-app" v-bind:class="{ 'nav-open': navIsOpen }">
    <div class="page-nav">
      <nav class="container">
        <div class="page-nav__inner">
          <div class="page-nav__icon">
            <router-link to="/" exact>
              <span>D</span>
              <span>&amp;</span>
              <span>T</span>
            </router-link>
          </div>
          <div class="page-nav__xs-nav">
            <button v-on:click="toggleNav">
              <span class="sr-only">Open navigation</span>
              <div class="icon-burger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
          <ul class="page-nav__links">
            <li v-on:click="closeNav">
              <router-link to="/" exact><span>Welcome</span></router-link>
            </li>
            <li v-on:click="closeNav">
              <router-link to="details"><span>Details</span></router-link>
            </li>
            <li v-on:click="closeNav">
              <router-link to="accommodation"><span>Accommodation</span></router-link>
            </li>
            <li v-on:click="closeNav">
              <router-link to="directions"><span>Directions</span></router-link>
            </li>
            <li v-on:click="closeNav">
              <router-link to="rsvp"><span>RSVP</span></router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="pages">
      <transition name="page-slide">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function data() {
    return {
      navIsOpen: false,
    };
  },
  methods: {
    toggleNav: function toggleNav() {
      this.navIsOpen = !this.navIsOpen;
    },
    closeNav: function closeNav() {
      this.navIsOpen = false;
    },
  },
};
</script>

<style>
/*@import url("https://fonts.googleapis.com/css?family=Delius|Delius+Swash+Caps|Handlee|Satisfy");*/
@import url("https://fonts.googleapis.com/css?family=Handlee|Satisfy");
html,
body {
  padding: 0;
  margin: 0;
}

body {
  background-color: #fffbf5;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23f4e5cd' fill-opacity='0.4'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  font-family: "Handlee", sans-serif;
  color: rgb(122, 100, 136);
  font-size: 22px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

*::selection {
  background: #f1dc73;
  color: rgb(45, 16, 64);
  text-shadow: none;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Satisfy", cursive;
  font-weight: 300;
  line-height: 1.3;
  margin: 0.2em 0 0.5em;
}

h1 {
  font-size: 100px;
}

h2 {
  font-size: 65px;
}
h3 {
  font-size: 45px;
  margin-top: 1.33em;
}
h4 {
  font-size: 35px;
}
h5 {
  font-size: 25px;
}
h6 {
  font-size: 20px;
}
p {
  line-height: 1.9;
}
hr {
}

a {
  color: inherit;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}

.container {
  padding: 0 10px;
  width: auto;
  max-width: 100%;
  margin: 0 auto;
}
.btn {
  position: relative;
  display: inline-block;
  padding: 15px 20px;
  background: #fff;
  border: 2px solid rgb(122, 100, 136);
  border-radius: 50px;
  text-decoration: none;
  text-shadow: none;
  line-height: 1;
  color: rgb(122, 100, 136);
  overflow: hidden;
  transition: 200ms all ease-out;
}
  .btn::before {
    content: ' ';
    position: absolute;
    z-index: -1;
    top: 100%;
    left: 0;
    right: 0;
    height: 100%;
    transition: 100ms all ease-out;
    transform: translate3d(0, 0, 0);
    background: rgb(122, 100, 136);
  }
  .btn:hover {
    background: transparent;
    color: #fff;
  }
  .btn:hover::before {
    transform: translate3d(0, -100%, 0);
  }

.page-nav {
  position: fixed;
  z-index: 900;
  top: 0;
  left: 0;
  right: 0;
  background: rgb(122, 100, 136);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1), inset 0 -2px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 22px;
}
  .page-nav__inner {
    display: flex;
    justify-content: space-between;
  }
  .page-nav__icon a {
    display: block;
    margin: 5px 0;
    padding: 0;
    height: 50px;
    width: 80px;
    background: #fff;
    border-radius: 50px;
    position: relative;
    color: rgb(122, 100, 136);
    line-height: 46px;
    font-size: 30px;
    font-weight: 900;
    text-decoration: none;
    user-select: none;
    border: 1px solid #FFF6C9;
    box-shadow: inset 0 0 0 1px rgb(86, 57, 105);
    overflow: hidden;
    transition: 200ms all ease-out;
  }
  .page-nav__icon a::before {
    content: ' ';
    background: rgb(122, 100, 136);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 200ms all ease-out;
    transform: translate3d(0, 0, 0) scale(0);
    opacity: 0;
    border-radius: 50px;
  }
  .page-nav__icon a span {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    transition: 200ms all ease-out;
  }
  .page-nav__icon a span:nth-child(2) {
    font-size: 50px;
    font-weight: 100;
    margin: 4px -6px 0;
  }
  .page-nav__icon a:not(:hover) span:nth-child(2) {
    opacity: 0.25;
  }
    .page-nav__icon a:hover {
      color: rgb(86, 57, 105);
    }
    .page-nav__icon a:hover::before {
      transform: translate3d(0, 0, 0) scale(1);
      opacity: 0.1;
    }
  .page-nav__links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }
    .page-nav__links li {
      flex: 0 1 auto;
      display: inline-block;
      vertical-align: top;
      margin: 0;
      padding: 0;
      text-shadow: 0 1px 1px rgba(0,0,0,0.25);
    }
    .page-nav__links a {
      position: relative;
      display: inline-block;
      vertical-align: top;
      flex: 1 1 auto;
      text-decoration: none;
      color: #fff;
      transition: 200ms all ease-out;
      padding: 15px 10px;
      overflow: hidden;
    }
    .page-nav__links a span {
      position: relative;
      display: inline-block;
      vertical-align: top;
    }
    .page-nav__links a span::before {
      content: ' ';
      position: absolute;
      bottom: -3px;
      left: 0;
      right: 0;
      width: 100%;
      height: 2px;
      background: #FFF6C9;
      transition: 150ms all ease-out;
      transform: scale(0.6);
      transform-origin: center center;
      opacity: 0;
    }
      .page-nav__links a:hover {
        background: rgba(0, 0, 0, 0.3);
      }
      .page-nav__links a.router-link-active {
        background: rgba(0, 0, 0, 0.1);
      }
      .page-nav__links a:hover span::before,
      .page-nav__links a.router-link-active span::before {
        transform: scale(1);
        opacity: 1;
      }

  .page-nav__xs-nav {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
  }
    .page-nav__xs-nav button {
      appearance: none;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 70px;
      background: transparent;
      border: none;
      transition: 150ms all ease-out;
    }
    .page-nav__xs-nav button:hover,
    .nav-open .page-nav__xs-nav button {
      background: rgba(0, 0, 0, 0.2);
    }
    .page-nav__xs-nav button:focus {
      outline: none;
    }
    .page-nav__xs-nav .icon-burger {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

.icon-burger {
  width: 45px;
  height: 36px;
  position: relative;
  margin: 0 auto;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
}
  .icon-burger span {
    display: block;
    position: absolute;
    height: 6px;
    width: 100%;
    background: #fff;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
  }
    .icon-burger span:nth-child(1) {
      top: 0px;
    }
    .icon-burger span:nth-child(2) {
      top: 14px;
    }
    .icon-burger span:nth-child(3) {
      top: 28px;
    }


.page-details {
  padding: 80px 0;
  text-shadow: 0 1px 1px rgba(255,255,255,0.9);
  text-align: center;
}
  .page-details iframe {
    width: 100%;
  }

.page-rsvp {
  text-align: center;
  padding: 80px 0;
}

.page-rsvp iframe {
  width: calc(100% - 4em);
  height: 100vh;
  margin: 0 2em 2em;
  border-radius: 4px;
  border: 2px solid #FFF6C9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.page-footer {
  height: 100vh;
  background: center top no-repeat transparent;
  background-size: cover;
  background-attachment: fixed;
}


/* Enter and leave animations can use different */
/* durations and timing functions.              */
.page-slide-enter-active {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  transition: all 400ms cubic-bezier(0.22, 0.61, 0.36, 1);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.page-slide-leave-active {
  transition: all 400ms cubic-bezier(0.22, 0.61, 0.36, 1);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.page-slide-enter {
  transform: translate3d(0, 40px, 0);
  opacity: 0;
}
.page-slide-enter-to {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}
.page-slide-leave {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}
.page-slide-leave-to {
  transform: translate3d(0, 40px, 0);
  opacity: 0;
}



@media screen and (min-width: 1080px) {
  .page-nav__links a {
    padding-left: 30px;
    padding-right: 30px;
  }
}
@media screen and (min-width: 880px) {
  .container {
    width: 860px;
  }
}


@media screen and (max-width: 760px) {
  body {
    font-size: 18px;
  }
  h1 {
    font-size: 50px;
  }

  h2 {
    font-size: 32px;
  }
  h3 {
    font-size: 22px;
  }
  h4 {
    font-size: 18px;
  }
  h5 {
    font-size: 14px;
  }
  h6 {
    font-size: 12px;
  }
  .page-app.nav-open {
    overflow: hidden;
  }
  .pages {
    transition: 800ms all cubic-bezier(0.22, 0.61, 0.36, 1);
  }
    .nav-open .pages {
      transform: translate3d(-80%, 0, 0);
    }
  .page-nav {
    transition: 800ms all cubic-bezier(0.22, 0.61, 0.36, 1);
  }
    .nav-open .page-nav {
      transform: translate3d(-80%, 0, 0);
    }
    .nav-open .icon-burger span:nth-child(1) {
      top: 18px;
      transform: rotate(135deg);
    }
    .nav-open .icon-burger span:nth-child(2) {
      opacity: 0;
      left: -60px;
    }
    .nav-open .icon-burger span:nth-child(3) {
      top: 18px;
      transform: rotate(-135deg);
    }
  .page-nav__xs-nav {
    display: block;
  }
  .page-nav__inner {
    display: block;
  }
  .page-nav__links {
    display: block;
    position: fixed;
    top: 0;
    left: 100%;
    width: 80%;
    height: 100vh;
    background: rgb(122, 100, 136);
    box-shadow: inset 20px 0 20px -20px rgba(0, 0, 0, 0.5);
  }
  .page-nav__links li {
    display: block;
  }
  .page-nav__links li:not(:first-of-type) {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  .page-nav__links a {
    display: block;
  }
}

</style>