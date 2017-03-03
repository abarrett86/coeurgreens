<template>

    <div class="parallax_container" :class="'parallax-' + num">
        <div class="parallax_child parallax">

       </div>
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
      height: {
            type: String,
          default: "200px"
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


  },

created () {
  window.addEventListener('scroll', this.onScroll);
},
destroyed () {
  window.removeEventListener('scroll', this.onScroll);
},

  methods: {
  onScroll: function(){

    var speed = this.speed;

    var windowYOffset = window.pageYOffset,
    elementYOffset = this.$el.offsetTop,
        windowWidth = window.innerWidth,
    elBackgrounPos = "50% " + ((windowYOffset - elementYOffset) * speed ) + "px";

    if(windowWidth < 768){
        elBackgrounPos = "0 0";
    }

    var parallaxingNode = this.$el.getElementsByClassName("parallax")[0];

      parallaxingNode.style.backgroundPosition = elBackgrounPos;

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
  background-position: 0 0;
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
    width: 100%;
}


.container{
    background-color: transparent;
}

.parallax {
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
}

.parallax-1 .parallax{
    background-image: url("../assets/img/banner-one.jpg");

}


.parallax-1,
.parallax-1 .parallax{
    height: 500px;
}


.parallax-2,
.parallax-2 .parallax{
    height: 280px;
}



.parallax-3,
.parallax-3 .parallax{
    height: 280px;
}


.parallax-4,
.parallax-4 .parallax{
    height: 410px;
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

</style>