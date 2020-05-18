<template>
  <div id="app">
    <v-app>
      <v-app-bar
        app
        color="white"
        height="100"
      >
        <v-avatar class="mr-3" color="grey lighten-5" size="70">
          <v-img contain max-height="100%" src="./assets/images/head.png"></v-img>
        </v-avatar>

        <h1 class="font-weight-black headline">CAPITAL PLUS LIMITED</h1>

        <v-spacer></v-spacer>
        <p class="mr-3 font-weight-black">HOME</p>
        <p class="mr-3 font-weight-black" @click="$vuetify.goTo('#about-us')">ABOUT</p>
        <p class="mr-3 font-weight-black">INVENTORY</p>
        <p class="mr-3 font-weight-black">CONTACT</p>
      </v-app-bar>

      <v-content  >
        <section id="hero" data-aos="zoom-in" data-aos-easing="ease" data-aos-duration="4000">
          <v-row no-gutters >
            <v-img class="ban-img">
              <v-theme-provider dark>
                <v-container fill-height>
                  <v-row align="center" class="white--text mx-auto" justify="center">
                    <v-col class="white--text text-center" cols="12" tag="h1">
                      <span
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                        class="font-weight-light"
                      >WELCOME TO</span>

                      <br />

                      <span
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                        class="font-weight-black"
                      >CAPITAL PLUS FARMS LTD</span>
                    </v-col>

                    <v-btn class="align-self-end" fab outlined @click="$vuetify.goTo('#about-us')">
                      <v-icon>mdi-chevron-double-down</v-icon>
                    </v-btn>
                  </v-row>
                </v-container>
              </v-theme-provider>
            </v-img>
          </v-row>
        </section>

        <section id="about-us">
          <div class="py-12"></div>

          <v-container class="text-center">
            <h2 class="display-2 font-weight-bold mb-3">ABOUT US</h2>

            <v-responsive class="mx-auto mb-8" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive >

            <v-responsive class="mx-auto title font-weight-light mb-8" max-width="720" data-aos="zoom-in" data-aos-easing="ease" data-aos-duration="4000">
              Capital-Plus farms is your go-to farm for your fresh and healthy eggs.
              We are a company that provides eggs in wholesales and also do bulk supply of eggs
            </v-responsive>
          </v-container>

          <div class="py-12"></div>
        </section>

        <section id="features" class="grey lighten-3">
          <div class="py-12"></div>

          <v-container class="text-center" >
            <h2 class="display-2 font-weight-bold mb-3">FUN FACTS ABOUT EGGS</h2>

            <v-responsive class="mx-auto mb-12" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-row>
              <v-col v-for="({ src, title, text }, i) in features" :key="i" cols="12" md="4" data-aos="zoom-in" data-aos-easing="ease" data-aos-duration="4000">
                <!-- <v-card class="mx-auto" max-width="400">
                  
                    <v-img :src="src" class="mb-4" height="275" max-width="100%"></v-img>

                  <v-card-title class="justify-center font-weight-black text-uppercase" v-text="title"></v-card-title>

                  <v-card-text class="subtitle-1" v-text="text">
                  </v-card-text>
                <v-card>-->

                <v-card class="mx-auto" max-height="630">
                  <v-img :src="src" class="mb-4" height="300px"></v-img>

                  <v-card-title v-text="title"></v-card-title>

                  <v-card-actions>
                    <v-btn color="purple" @click="show = !show" text>READ MORE</v-btn>

                    <v-spacer></v-spacer>

                    <v-btn icon @click="show = !show">
                      <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                  </v-card-actions>

                  <v-expand-transition>
                    <div v-show="show">
                      <v-divider></v-divider>
                      <v-card-text v-text="text"></v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

          <div class="py-12"></div>
        </section>

        <section id="stats" data-aos="zoom-in" data-aos-easing="ease" data-aos-duration="4000">
          <v-parallax
            :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
            src="./assets/images/agro3-3.jpg"
          >
          <div class="fill-height repeating-gradient"></div>
            <v-container fill-height>
               <v-row class="mx-auto">
                <div class="col-lg-4">
                    <div class="counter">
                        <h1 class="counter-value text-center" data-count="100">0</h1>
                        <h3 class="text-center mt-2">PARTNERS</h3>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="counter">
                        <h1 class="counter-value text-center" data-count="200">0</h1>
                        <h3 class="text-center mt-2">SOLD</h3>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="counter">
                        <h1 class="counter-value text-center" data-count="300">0</h1>
                        <h3 class="text-center mt-2">CUSTOMERS</h3>
                    </div>
                </div>
              </v-row>
            </v-container>
          </v-parallax>
        </section>

        <!-- <section id="blog" data-aos="zoom-in" data-aos-easing="ease" data-aos-duration="4000">
          <div class="py-12"></div>

          <v-container>
            <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Blog</h2>

            <v-responsive class="mx-auto mb-12" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-row>
              <v-col v-for="({ src, text, title }, i) in articles" :key="i" cols="12" md="4">
                <v-img :src="src" class="mb-4" height="275" max-width="100%"></v-img>

                <h3 class="font-weight-black mb-4 text-uppercase" v-text="title"></h3>

                <div class="title font-weight-light mb-5" v-text="text"></div>

                <v-btn class="ml-n4 font-weight-black" text>Continue Reading</v-btn>
              </v-col>
            </v-row>
          </v-container>

          <div class="py-12"></div>
        </section> -->

        <v-sheet id="contact" color="#333333" dark tag="section" tile data-aos="zoom-in" data-aos-easing="ease" data-aos-duration="3000">
          <div class="py-12"></div>

          <v-container>
            <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Contact Us</h2>

            <v-responsive class="mx-auto mb-12" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-theme-provider light>
              <v-row>
                <v-col cols="12">
                  <v-text-field flat label="Name*" solo></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field flat label="Email*" solo></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field flat label="Subject*" solo></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-textarea flat label="Message*" solo></v-textarea>
                </v-col>

                <v-col class="mx-auto" cols="auto">
                  <v-btn color="accent" x-large>Submit</v-btn>
                </v-col>
              </v-row>
            </v-theme-provider>
          </v-container>

          <div class="py-12"></div>
        </v-sheet>
      </v-content>

      <v-footer class="justify-center" color="#292929" height="100" >
        <div class="title font-weight-light grey--text text--lighten-1 text-center" >
          &copy; {{ (new Date()).getFullYear() }} — Capital Plus — Made with
          💜 by Bimms'
        </div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Main",

  data() {
    return {
      show: false,
      articles: [
        {
          src:
            "https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          title: "Responsive",
          text:
            "Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum."
        },
        {
          src:
            "https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          title: "Think outside the box",
          text:
            "Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh."
        },
        {
          src:
            "https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80",
          title: "Small changes, big difference",
          text:
            "Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget."
        }
      ],
      features: [
        {
          src: "./assets/images/egg1.jpg",
          title: "Incredibly Nutritious and also safe and Healthy",
          text:
            "A single large boiled egg contains 13 nutrients and vitamins, 77 calories, 6 grams of protein and 5 grams of healthy fat. This makes them the most nutritious food on the planet, because they contain a little bit of all the nutrients we need "
        },
        {
          src: "./assets/images/head.png",
          title:
            "High in Cholesterol, but Don't Adversely Affect Blood Cholesterol",
          text:
            "It is true that eggs are high in cholesterol. In fact, a single egg contains 212 mg, which is over half of the recommended daily intake of 300 mg. However, it's important to keep in mind that cholesterol in the diet doesn't necessarily raise cholesterol in the blood."
        },
        {
          src: "../assets/images/egg3.jpg",
          title: "Are Linked to a Reduced Risk of Heart Disease",
          text:
            "Conspumption of egg regularly leads to elevated levels of HDL (High Density Lipoprotein) which isknown as the good cholesterol. People with higher levels of HDL normally have a lower risk of heart disease, stroke and various health problems.  "
        }
      ],
    };
  }
};
</script>

<style scoped>
.ban-img {
  width: 100%;
  height: 120vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../public/assets/images/agro3.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>