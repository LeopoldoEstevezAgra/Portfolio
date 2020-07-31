<template>
  <div class="home">
    <div class="image">
      <div class="home-title">
        Amet ipsum
      </div>
      <div class="home-description">
        Ipsum magnam id vero assumenda facere quibusdam suscipit quisquam. Sit
        culpa officiis dignissimos aut repellendus Inventore maxime ad mollitia
        nesciunt?
      </div>
    </div>
    <div class="about">
      <h2>About</h2>
      <div class="about-text">
        Ipsum praesentium possimus accusantium consequatur ab repudiandae.
        Corrupti labore sed.
      </div>
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
  height: 100vh;
  background-image: url("../../assets/landscape.jpg");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
.home-title {
  color: white;
  padding-top: 10%;
}
.home-description {
  color: white;
  padding-top: 10%;
  padding-right: 10%;
  padding-left: 10%;
}
@media only screen and (max-width: 720px) {
  .home-title {
    font-size: 14vw !important;
  }
  .home-description {
    font-size: 7vw !important;
  }
}
@media screen and (max-width: 900px) and (min-width: 721px) {
  .home-title {
    font-size: 10vw !important;
  }
  .home-description {
    font-size: 5vw !important;
  }
}
@media screen and (min-width: 901px) {
  .home-title {
    font-size: 7vw !important;
  }
  .home-description {
    font-size: 3vw !important;
  }
}
@media screen and (min-width: 1300px) {
  .home-title {
    font-size: 5vw !important;
  }
  .home-description {
    font-size: 2vw !important;
  }
}
.about {
  margin-top: 2em;
}
.about-text {
  margin-top: 2em;
  text-align: center !important;
  padding-right: 15%;
  padding-left: 15%;
}
@media only screen and (max-width: 720px) {
  .about-text {
    padding-right: 7%;
    padding-left: 7%;
  }
}
</style>
