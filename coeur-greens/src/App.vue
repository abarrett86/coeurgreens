<template>
  <div id="app">

      <div class="site_content">
          <el-row class="site_header">
              <el-col :md="{span:12, offset: 0}" :xs="{span: 24}" :sm="{span: 24}" class="logo">
                  <img src="./assets/img/logo-top-green-2x.png" class="top_logo"/>
              </el-col>
              <el-col  :md="{span:12, offset: 0}" :xs="{span: 24}" :sm="{span: 24}" class="nav_menu">
                  <el-row>
                      <el-col :span="6" class="nav_link"><a href="#about-us" v-smooth-scroll>ABOUT US</a></el-col>
                      <el-col :span="6" class="nav_link"><a href="#tech" v-smooth-scroll>TECH</a></el-col>
                      <el-col :span="6" class="nav_link"><a href="#products" v-smooth-scroll>PRODUCTS</a></el-col>
                      <el-col :span="6" class="nav_link"><a href="#contact" v-smooth-scroll>CONTACT</a></el-col>
                  </el-row>
              </el-col>
          </el-row>
      </div>

      <parallax :parallax-height=500 :speed='0.25' :num='1' >

          <el-row slot="content" class="sub_head">
              <el-col :span="24" ><h1>FRESH. LOCAL. GREENS.</h1></el-col>
              <el-col :span="24" ><h4>Sustainably grown in Idaho 365 days a year</h4></el-col>
          </el-row>
      </parallax>
      <div class="site_content">
      <el-row id="about-us" class="about_us" >
          <el-col :md="{span:11, offset: 0}" :xs="{span: 24}" :sm="{span: 24}" ><img src="./assets/img/coeur-container.png" class="container_image"/></el-col>
          <el-col :md="{span:11, offset: 1}" :xs="{span: 24}" :sm="{span: 24}" >
              <h1>About us</h1>
              <p>We are Coeur Greens, an Agricultural Technology (AgTech) company that provides fresh, non-GMO, sustainable, locally grown greens 365 days a year. Located in North Idaho, Coeur Greens is a member of <span class="font_bold">Idaho Preferred&reg;</span>, a program managed by the Idaho State Department of Agriculture to identify and promote Idaho food and agriculture products.</p>
              <a href="https://idahopreferred.com/members/coeur-greens/"><img src="./assets/img/idaho-green-2x.png" class="idaho_green_image" /></a>
          </el-col>
      </el-row>

      <el-row class="about_tiles">
            <el-col :md="{span:6, offset: 0}" :xs="{span: 24}"  :sm="{span: 12}"  class="content_tile about_tile">
                <img src="./assets/img/icon-one-2x.png" />
                <h6>PESTICIDE<br/>FREE</h6>
            </el-col>

            <el-col :md="{span:6, offset: 0}" :xs="{span: 24}" :sm="{span: 12}"  class="content_tile about_tile">
                <img src="./assets/img/icon-two-2x.png" />
                <h6>SUSTAINABLE<br/>AGRICULTURE</h6>
            </el-col>

            <el-col :md="{span:6, offset: 0}" :xs="{span: 24}" :sm="{span: 12}"  class="content_tile about_tile">
                <img src="./assets/img/icon-three-2x.png" />
                <h6>URBAN VERTICAL<br/>FARMING</h6>
            </el-col>

            <el-col :md="{span:6, offset: 0}" :xs="{span: 24}" :sm="{span: 12}"  class="content_tile about_tile">
                <img src="./assets/img/icon-four-2x.png" />
                <h6>PREMIUM QUALITY<br/>365</h6>
            </el-col>

      </el-row>
      </div>

      <el-row class="about_footer">

          <div width="auto">

          <el-col :span="24">
              <div class="site_content">

                  <div class="about_footer_content">
                      <div class="about_footer_text">
                          GROWN WITH FRESH AQUIFER WATER FROM
                      </div>
                      <div class="about_footer_image">
                          <img src="./assets/img/logo-horizontal-2x.png"/>
                      </div>
                  </div>
              </div>
          </el-col>
          </div>
      </el-row>

        <parallax :parallax-height=320 :speed='0.25' :num='2' ></parallax>
      <div class="site_content">
      <el-row id="tech" class="tech">
          <el-col :md="{span:12, offset: 0}"  :xs="{span: 24}" :sm="{span: 24}">
              <h1>Our tech</h1>
              <p>Coeur Greens Vertical Farms are out fitted with innovative climate and hydroponic growing technologies for high volume, consistent production and harvests 365 days a year.</p>
          </el-col>
          <el-col :md="{span:11, offset: 1}" :xs="{span: 24, offset: 0}" :sm="{span: 24, offset: 0}" class="process_animation_container"><img src="./assets/img/process-animation-2.gif" /></el-col>
      </el-row>

      <el-row class="tech_tiles" :gutter="40">

          <el-col :md="{span:8, offset: 0}" :xs="{span: 24}" :sm="{span: 24}" class="content_tile thirds_tile">
              <div class="horizontal_line" />
              <h6>CONSISTENT PRODUCTION</h6>
              <p>One Coeur Greens Vertical Farm is equal to two acres of conventional farmland.</p>
          </el-col>

          <el-col :md="{span:8, offset: 0}" :xs="{span: 24}" :sm="{span: 24}" class="content_tile thirds_tile">
              <div class="horizontal_line" />
              <h6>WATER CONSERVATION</h6>
              <p>Every Coeur Greens Vertical Farm uses 90% less water than a conventional farm</p>
          </el-col>

          <el-col :md="{span:8, offset: 0}" :xs="{span: 24}" :sm="{span: 24}" class="content_tile thirds_tile">
              <div class="horizontal_line" />
              <h6>CONTROLLED ENVIRONMENT</h6>
              <p>Perfect growing environment for year round production regardless of crazy Idaho weather</p>
          </el-col>

      </el-row>

      </div>


      <el-row class="tech_footer">
          <el-col :span="24">
              <div class="site_content">
                  <el-row class="tech_footer">
                      <el-col :span="24">
                          <h2>Farm to Table</h2>
                          <img src="./assets/img/flow-chart-2x.png" class="flow_chart"/>
                      </el-col>
                  </el-row>
              </div>
          </el-col>
      </el-row>


        <parallax :parallax-height=320  :speed='0.25' :num='3' ></parallax>
      <div class="site_content">
      <el-row id="products" class="product_tiles">

          <el-col :span="24" class="center_text"><h1>Our Greens</h1></el-col>

          <el-col :span="24">

              <el-col :md="{span:8, offset: 0}" :xs="{span: 24}"  :sm="{span: 24}" class="content_tile thirds_tile">
                  <img src="./assets/img/products-lettuce.jpg"/>
                  <h6>LETTUCE HEADS</h6>
                  <p>Green and Red Butterhead</p>
              </el-col>

              <el-col :md="{span:8, offset: 0}"  :xs="{span: 24}" :sm="{span: 24}" class="content_tile thirds_tile">
                  <img src="./assets/img/products-basil.jpg"/>
                  <h6>MICROGREEN HERBS</h6>
                  <p>Italian Basil, Lemon Basil</p>
              </el-col>

              <el-col :md="{span:8, offset: 0}" :xs="{span: 24}" :sm="{span: 24}" class="content_tile thirds_tile">
              <img src="./assets/img/products-sprouts.jpg"/>
                  <h6>MICROGREENS AND MIXES</h6>
                  <p>
                      Red Radish<br/>
                      Spicy Mix (Red and Green Mustards)<br/>
                      Mild Mix (Cabbage, kale, kohlrabi, Mizuna)</p>
              </el-col>
          </el-col>

      </el-row>

      </div>


        <parallax :parallax-height=410 :speed='0.25' :num='4' >
            <contact id="contact" slot="content">
            </contact>
        </parallax>


          <el-row class="app_footer">
                <el-col :span="24">
                    <div class="site_content">

                <el-row>

              <el-col class="app_footer_left" :md="{span:12, offset: 0}" :xs="{span: 24}" :sm="{span: 24}">
                  <el-row>
                        <el-col :md="{span:16, offset: 0}" :xs="{span: 24}" :sm="{span: 24}" class="copyright_text">
                            <p>Copyright &copy; 2017 Coeur Greens. All rights reserved.</p>
                        </el-col>
                      <el-col :md="{span:8, offset: 0}" :xs="{span: 24}" :sm="{span: 24}">
                        <a target="_blank" href="https://www.facebook.com/Coeur-Greens-1220251638032970/"><img src="./assets/img/social-facebook-2x.png"/></a>&nbsp;
                        <a target="_blank" href="https://www.youtube.com/channel/UCrxIJEfTb45-rYoGYnbFfCg"><img src="./assets/img/social-youtube-2x.png"/></a>&nbsp;
                        <a target="_blank" href="http://instagram.com/coeurgreens/"><img src="./assets/img/social-instagram-2x.png"/></a>
                    </el-col>
                  </el-row>
              </el-col>

              <el-col class="app_footer_right" :md="{span:12, offset: 0}" :xs="{span: 24}" :sm="{span: 24}">
                  <el-row>
                      <el-col :md="{span:18, offset: 0}" :xs="{span: 24}" :sm="{span: 24}">
                          <p>We are Idaho Preferred!</p>
                      </el-col>
                      <el-col :md="{span:6, offset: 0}" :xs="{span: 24}" :sm="{span: 24}">
                        <a href="https://idahopreferred.com/members/coeur-greens/"><img src="./assets/img/idaho-white-2x.png"/></a>
                      </el-col>
              </el-col>
                </el-row>
                    </div>
                </el-col>

          </el-row>
      </div>

  </div>


</template>

<script>
import Parallax from './components/Parallax'
import Contact from './components/Contact'

export default {
  name: 'app',
  components: {
      Parallax,
      Contact
  },
}
</script>


<style>
    body{
        background-color: grey;
        margin: 0;
        font-family: 'Nunito', sans-serif;
    }
#app {
    background-color: white;
  color: #242424;
    padding: 0;
    margin: 0;
}

p {
    font-size: 1em;
    font-family: Nunito;
    font-weight: 300;
}

h1{
    color: #24b14a;
    font-weight: 300;
    font-size: 3em;
}

.site_content{
    width: 80%;
    margin: auto;
}

.sub_head{
    text-align: center;
    width: 100%;
    margin-top: 220px;
}


    .sub_head h1{
        font-weight: 700;

    }
    .sub_head h4{
        font-weight: 200;
        padding-top: 10px;
        font-size: 1.5em;
    }

    .sub_head h1,
    .sub_head h4{
        margin: 0;
        color: #ffffff;
    }

.top_logo{
    max-width: 160px;
}

    .font_bold{
        font-weight: 700;
    }


    .about_us{
        margin-top: 80px;
    }

    .tech{
        margin-top: 100px;
    }


    .container_image{
        float: right;
        width: 100%
    }

    .idaho_green_image{
        width: 95px;
    }



    .about_tile img{
        max-width: 150px;
    }

    .about_tiles{
        margin-top: 100px;
        margin-bottom: 100px;
    }


    .about_footer{
        background-color: #24b14a;
        color: white;
        text-align: center;
        padding-top: 24px;
        padding-bottom: 2px;
    }

    .about_footer_content{
        display: inline-block;
    }

    .about_footer_text{
        display:inline-block;
        font-size: 1em;
        font-weight: 700;
        padding-right: 30px;
        padding-top: 27px;
        float: left;
    }

    .about_footer_image{
        display:inline-block;
    }

    .about_footer img{
        max-width: 180px;
    }

    .tech{

    }

    .process_animation_container{
        text-align: center;
        margin-bottom: 45px;
    }

    .tech img{
        width: 100%;
        max-width: 300px;
    }


    .tech_tiles{
        padding-top: 40px;
        padding-bottom: 80px;
    }


    .tech_tiles h6{
        padding-bottom: 15px;
    }

    .tech_footer{
        padding-top: 50px;
        padding-bottom: 50px;
        background-color: #f5f5f5;
        text-align: center;
    }
    .tech_footer h2{
        font-size: 2em;
        font-weight: normal;
    }

    .tech_footer img{
        max-width: 871px;
    }

    .content_tile{
        text-align: center;
    }

    .thirds_tile h6{
        height: 50px;
    }

    .content_tile h6{
        padding-top: 25px;
        font-size: 1em;
        width: 100%;
        max-width: 120px;
        margin: auto;
        display: block;
    }

    .content_tile .horizontal_line{
        height: 1px;
        background-color: black;
        width: 10%;
        display: inline-block;
    }

    .content_tile p{

    }

    .content_tile img{
        width: 100%;
    }

    .center_text{
        text-align: center;
    }


    .app_footer{

        background-color: #24b14a;
    }

    .flow_chart{
        width: 100%;
    }

    .site_header a:hover{
        color: #7bb197;
    }

    .site_header a{
        text-decoration: none;
        font-weight: 700;
        font-size: 1em;
        color: #24b14a;
    }

    .site_header a:hover{
        color: #b4b4b4;
    }

    .site_header .logo{
        height: 160px;
    }

    .nav_menu{
        margin-top: 70px;
    }

    .nav_link{
        text-align: center;
    }

    .app_footer{
        padding-top: 15px;
        padding-bottom: 5px;
    }

    .app_footer p{
        color: white;
        font-weight: 700;

    }

    .app_footer_left{
        margin-top: 8px;
    }

    .app_footer_right{
        text-align: right;
    }

    .app_footer_right p{
        padding-top: 3px;
    }
    .app_footer_right img{
        width: 80px;
        margin-top: -3px;
    }

    .app_footer_left p{
        display: inline-block;
    }

    .app_footer_left .links{
        display: inline-block;
        margin-top: 0px;

    }

    .app_footer_left img{
        width: 40px;
    }

    .copyright_text p{
        font-weight: normal;
        margin-top: 11px;
    }

    .product_tiles .content_tile img{
        max-width: 335px;
    }

    .product_tiles{
        margin-top: 75px;
        margin-bottom: 75px;
    }

    @media screen and  (max-width: 991px) {

        .product_tiles .content_tile img {
            /*max-width: 480px;*/
        }

        .site_header{
            text-align: center;
        }

        .about_tile img{
            /*max-width: 250px;*/
        }

        .content_tile h6 {
            padding-top: 25px;
            font-size: 1.3em;
            max-width: 200px;

        }

        .nav_menu{
            margin-top: 15px;
            margin-bottom: 15px;
        }

        .about_footer{
            text-align: center;
        }

        .about_footer_text{
            font-size: .8em;

        }

        .about_footer_image img{
            text-align: center;
        }

        .about_tiles h6{
            padding-bottom: 35px;
        }

        .about_footer_image{
            text-align: center;
        }

        .tech{
            text-align: center;
        }

        .tech_footer {
            padding-top: 15px;
            padding-bottom: 15px;
        }

        .thirds_tile img{
            max-width: 70%
        }

        .app_footer_left,
        .app_footer_right{
            text-align: center;
        }

        #app .process_animation_container{
            margin-left: 0;
        }
    }

    @media screen and  (max-width: 768px) {
        .site_header a{
            font-size: .8em;
        }

        .copyright_text p{
            font-size: .9em;
        }

        .about_footer_text{
            padding-top: 0px;
            padding-bottom: 25px;
        }

        .about_footer_text,
        .about_footer_image{
            display: block;
        }

        .sub_head {
            margin-top: 140px;
        }
    }

    @media screen and  (max-width: 380px) {
        .site_header a {
            font-size: .7em;
        }
    }

</style>
