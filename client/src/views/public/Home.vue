<template>
  <div class="home">
    <div class="image">
      <div class="home-title">
        Amet ipsum
      </div>
      <div class="home-description">
        Amet amet aperiam voluptatibus quos adipisci. Tempore numquam
        consequatur doloribus sapiente laudantium. Blanditiis velit neque
        veritatis reprehenderit ex! Ad delectus qui est culpa nihil! Rerum.
      </div>
    </div>
    <div class="about">
      <h2>About</h2>
      <div class="about-text">
        <p>
        Sit quia libero eaque minus et Impedit magni alias vero totam voluptatem Voluptatibus voluptates dolorum consectetur earum officia vero? Quaerat excepturi distinctio eos ipsum minima Deserunt quod qui accusantium delectus at quos? Dicta aspernatur vitae nulla neque amet. Minima voluptatem laborum quo vero blanditiis, aliquam veritatis Sunt aliquam distinctio eaque eum mollitia facilis Eaque repellat repudiandae laudantium accusamus vitae. At mollitia consequuntur delectus illo veniam
        quasi Ad quaerat qui nulla error officia Placeat ea perferendis quaerat quod rerum Ullam nulla quidem pariatur aliquam placeat. Corporis consequatur corporis quibusdam culpa pariatur necessitatibus? Necessitatibus soluta repudiandae assumenda ipsum cum Nulla reiciendis quam sequi beatae fugiat? Explicabo vel perferendis rerum illum quam magni Sint consectetur est commodi dolorum soluta ut? Eveniet sint in dolores magnam quos quibusdam magni? Porro perferendis nisi dolorum dolorem odit
        temporibus dolor molestias. Laborum excepturi numquam aliquam amet aliquam eius Maxime et corporis inventore hic eveniet. Eos at aliquam saepe tempora nostrum. Libero harum quas sunt possimus quidem Illo ea quis exercitationem possimus corrupti Sit doloribus iure reiciendis sequi iusto? Explicabo quod laudantium expedita dolorem voluptatibus omnis? Veritatis natus sint pariatur blanditiis sapiente Vel itaque laboriosam harum aliquam nihil, labore. Quos sapiente nisi eveniet natus
        tenetur! Ut sunt fuga labore distinctio quas, ex exercitationem cum Perspiciatis totam maxime tenetur ab doloremque quidem. Repellat nemo commodi voluptatum dolore dolorum nisi Nisi excepturi voluptatum at ut corrupti Exercitationem rerum optio fuga iure laboriosam corporis. Doloremque commodi consequatur magni autem corporis Nesciunt nesciunt labore quis necessitatibus ratione Veritatis nihil quaerat distinctio natus quo laboriosam et? Distinctio excepturi provident quos excepturi
        cupiditate. Deserunt aliquid laborum quis ea ducimus. At consequuntur delectus officia doloremque et Beatae nam numquam eligendi eveniet et et A officiis vel itaque beatae beatae explicabo Nemo alias quaerat impedit eaque ab. Hic vitae vero aspernatur nobis veniam alias. Commodi placeat?.
        </p>
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
