<template>
  <div class="home">
    <div class="image">
      <div class="home-title">
        Hello! I'm Leo.
        <br />
        I'm a junior software developer.
      </div>
      <v-btn
        icon
        dark
        large
        @click="
          openLink(
            'https://www.linkedin.com/in/leopoldo-est%C3%A9vez-agra-78b151164/'
          )
        "
      >
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn
        icon
        dark
        large
        @click="openLink('https://twitter.com/LeopoldoEstevzA')"
      >
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn
        icon
        dark
        large
        @click="openLink('https://github.com/LeopoldoEstevezAgra')"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn
        icon
        dark
        large
        @click="openLink('https://www.instagram.com/leopoldoesteveza/')"
      >
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
      <br />
      <v-dialog max-width="400px" v-model="dialog">
        <template v-slot:activator="{ on, attr }">
          <v-btn icon dark x-large v-on="on" v-bind="attr">
            <v-icon>
              mdi-send
            </v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            Want to say something ? Send me a message !!
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field label="Name" v-model="newContact.name">
              </v-text-field>
              <v-text-field label="Company" v-model="newContact.company">
              </v-text-field>
              <v-text-field label="E-mail" v-model="newContact.email">
              </v-text-field>
              <v-textarea label="Comment" v-model="newContact.note">
              </v-textarea>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="
                addContact(newContact);
                dialog = false;
              "
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
    <div class="contact"></div>
  </div>
</template>

<script>
import ContactService from "../../services/ContactService.js";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      dialog: false,
      newContact: {
        name: "",
        company: "",
        email: "",
        note: ""
      }
    };
  },
  methods: {
    openLink(link) {
      window.open(link);
    },
    resetNewContact() {
      this.newContact.name = "";
      this.newContact.company = "";
      this.newContact.email = "";
      this.newContact.note = "";
    },
    async addContact(contact) {
      await ContactService.addContact({
        name: contact.name,
        email: contact.email,
        company: contact.company,
        note: contact.note
      });
      this.resetNewContact();
    }
  }
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
