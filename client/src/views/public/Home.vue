<template>
  <div class="home">
    <div class="image">
      <div class="home-title">
        Hello! I'm Leo.
        <br />
        I'm a junior software developer.
      </div>
    </div>
    <div class="about">
      <div class="about-header">
        <div class="about-title">
          About
        </div>
        <div class="about-underline"></div>
      </div>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="6" class="about-photo-container">
            <div class="about-photo"></div>
            <div class="about-text">
              Hey! I'm a
              <span class="about-text-highlight">
                2nd year Computer Science Student on University of A Coruña
              </span>
              currently looking to work as a part time software developer.
              <br />
              <br />
              I've done a
              <span class="about-text-highlight">
                Multi-platform Software Develpment Vocational Study
              </span>
              and worked as a full stack software developer.
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <h2 class="mb-5">Technologies I've worked with</h2>
            <v-container fluid>
              <v-row>
                <v-col cols="4" md="3">
                  <img
                    class="logo-tech"
                    src="../../assets/logos/synfony.png"
                    alt="symfony-logo"
                  />
                </v-col>
                <v-col cols="4" md="3">
                  <img
                    class="logo-tech"
                    src="../../assets/logos/vue.png"
                    alt="vue-logo"
                  />
                </v-col>
                <v-col cols="4" md="3">
                  <img
                    class="logo-tech"
                    src="../../assets/logos/html.png"
                    alt="html-logo"
                  />
                </v-col>
                <v-col cols="4" md="3">
                  <img
                    class="logo-tech"
                    src="../../assets/logos/css.png"
                    alt="css-logo"
                  />
                </v-col>
                <v-col cols="4" md="3">
                  <img
                    class="logo-tech"
                    src="../../assets/logos/js.png"
                    alt="js-logo"
                  />
                </v-col>
                <v-col cols="4" md="3">
                  <img
                    class="logo-tech"
                    src="../../assets/logos/php.png"
                    alt="php-logo"
                  />
                </v-col>
                <v-col cols="4" md="3">
                  <img
                    class="logo-tech"
                    src="../../assets/logos/java.png"
                    alt="java-logo"
                  />
                </v-col>
                <v-col cols="4" md="3">
                  <img
                    class="logo-tech"
                    src="../../assets/logos/sql.png"
                    alt="sql-logo"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="contact">
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>
.home {
  height: 100%;
}
.image {
  min-height: 480px;
  margin-top: -150px;
  width: 100%;
  height: 100vh;
  background-image: url("../../assets/landscape.jpg");
  background-color: gray;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
.home-title {
  color: white;
  padding-top: 250px;
  text-shadow: 1px 1px gray;
}
.home-description {
  color: white;
  padding-top: 10%;
  padding-right: 10%;
  padding-left: 10%;
}
.about-header {
  margin: 1.5em 0 2em 0;
}
.about-title {
  font-size: 2em;
  font-weight: 900;
}
.about-underline {
  border-bottom: solid black;
  width: 4em;
  margin-right: auto;
  margin-left: auto;
}
.about-photo-container {
  padding-right: 40px;
  padding-left: 40px;
}
.about-photo {
  min-height: 280px;
  max-height: 100%;
  width: 50%;
  vertical-align: middle;
  background-image: url("../../assets/user.jpg");
  background-color: gray;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  margin: 0 auto;
}
.about-text {
  margin: 20px auto 0 auto;
  font-size: 1.2em;
  width: 50%;
}
.about-text-highlight {
  color: #75c8ea;
  font-weight: 900;
}
.logo-tech {
  max-width: 100px;
  max-height: 100px;
}
@media only screen and (max-width: 720px) {
  .home-title {
    font-size: 10vw !important;
  }
  .home-description {
    font-size: 7vw !important;
  }
  .about-photo,
  .about-text {
    width: 80%;
  }
}
@media screen and (max-width: 900px) and (min-width: 721px) {
  .home-title {
    font-size: 10vw !important;
  }
  .home-description {
    font-size: 5vw !important;
  }
  .about-photo,
  .about-text {
    width: 80%;
  }
}
@media screen and (max-width: 1300px) and (min-width: 901px) {
  .home-title {
    font-size: 7vw !important;
  }
  .home-description {
    font-size: 3vw !important;
  }
  .about-photo,
  .about-text {
    width: 70%;
  }
}
@media screen and (min-width: 1301px) {
  .home-title {
    font-size: 5.2vw !important;
  }
  .home-description {
    font-size: 2vw !important;
  }
}
@media only screen and (max-width: 720px) {
  .about-text {
    padding-right: 7%;
    padding-left: 7%;
  }
}
@media only screen and (max-height: 600px) {
  .home-title {
    font-size: 5vw !important;
    padding-top: 150px;
  }
}
</style>
