<template>

    <div class="parallax_container" :class="'parallax-' + num" :style="{height:parallaxHeight + 'px'}">
        <img v-if="num == 1" class="parallax_child parallax" src="../assets/img/banner-one.jpg"></img>
        <img v-if="num == 2" class="parallax_child parallax" src="../assets/img/banner-two.jpg"></img>
        <img v-if="num == 3" class="parallax_child parallax" src="../assets/img/banner-three.jpg"></img>
        <img v-if="num == 4" class="parallax_child parallax" src="../assets/img/banner-four.jpg"></img>
        <div class="parallax_child parallax_content">
            <div class="site_content">
                <slot name="content"></slot>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: 'parallax',
  data () {
    return {

    }
  },
  props: {
      parallaxHeight: {
            type: Number,
          default: "200"
      },

        num: {
            type: Number,
            default: 1
        },

        speed: {
          type: Number,
          default: 0.5
        }
  },

  mounted () {

      var self = this;

  },

created () {
  window.addEventListener('scroll', this.onScroll);
},
destroyed () {
  window.removeEventListener('scroll', this.onScroll);
},



  methods: {

      updateBackgroundPosition: function(){

      },

  onScroll: function(){

    var speed = this.speed;

    var windowYOffset = window.pageYOffset,
    elementYOffset = this.$el.offsetTop,
        windowWidth = window.innerWidth,
    elBackgrounPos = /*"50% " +*/ ((windowYOffset - elementYOffset) * speed ) + "px";

    if(windowWidth < 768){
        //elBackgrounPos = "0 0";
    }

    var parallaxingNode = this.$el.getElementsByClassName("parallax")[0];

      //parallaxingNode.style.backgroundPosition = elBackgrounPos;
      parallaxingNode.style.top = elBackgrounPos;

//    console.log(this.$el.offsetTop + " scrolled " + elBackgrounPos );

  }

  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.parallax .container {
  width: 100%;
  margin: 0 auto;
}

.module:last-child {
  margin-bottom: 0;
}
.content {
  padding: 40px 0;
    background-color: transparent;
}
.parallax {

}
.module.parallax h1 {
  color: #1e1e1e;
  font-size: 48px;
  line-height: 1;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 0 10px white;
}

.parallax_container{
    overflow: hidden;
    position: relative;
}

.parallax_child{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}


.container{
    background-color: transparent;
}

.parallax {
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    transition-timing-function: linear;
}

@media screen and (max-width: 768px) {
    .parallax {
        width: 170%;
        left: -45%;
    }
}


/*
.parallax-1{
    height: 650px;
}


.parallax-2{
    height: 320px;
}



.parallax-3{
    height: 320px;
}


.parallax-4{
    height: 460px;
}

.parallax{
    height: 1000px;
}

/*
.parallax-1 .parallax{
    background-image: url("../assets/img/banner-one.jpg");
}
.parallax-2 .parallax{
    background-image: url("../assets/img/banner-two.jpg");
}
.parallax-3 .parallax{
    background-image: url("../assets/img/banner-three.jpg");
}
.parallax-4 .parallax{
    background-image: url("../assets/img/banner-four.jpg");
}
*/

</style>