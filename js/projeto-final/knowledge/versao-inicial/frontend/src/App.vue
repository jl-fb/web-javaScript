<template>
  <div id="app" :class="{'hide-menu': !isMenuVisible || !user}">
    <Header title="João - Base de Conhecimento" :hideToggle="!user" :hideUserDropdown="!user" />
    <Menu v-if="user" />
    <Loading v-if="validatingToken" />
    <Content v-else />
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex"; // mapeando atributos e métodos para poder alterar o grid layout
import Header from "@/components/template/Header";
import Menu from "@/components/template/Menu";
import Content from "@/components/template/Content";
import Footer from "@/components/template/Footer";
import axios from "axios";
import { baseApiUrl, userKey } from "@/global";
import Loading from "@/components/template/Loading";

export default {
  name: "App",
  components: { Header, Menu, Content, Footer, Loading },
  computed: mapState(["isMenuVisible", "user"]),
  data() {
    return {
      validatingToken: true
    };
  },
  methods: {
    async validateToken() {
      this.validatingToken = true;

      const json = localStorage.getItem(userKey);
      const userData = JSON.parse(json);
      this.$store.commit("setUser", null);

      if (!userData) {
        this.validatingToken = false;
        this.$router.push({ name: "auth" });
        return;
      } else {
        const resp = await axios.post(`${baseApiUrl}/validateToken`, userData);
        if (resp.data) {
          this.$store.commit("setUser", userData);
          if (this.$mq === "xs" || this.$mq === "sm") {
            this.$store.commit("toggleMenu");
          }
        } else {
          localStorage.removeItem(userKey);
          this.$router.push({ name: "auth" });
        }
        this.validatingToken = false;
      }
    }
  },
  created() {
    this.validateToken();
  }
};
</script>

<style>
* {
  font-family: "Lato", sans-serif;
}

body {
  margin: 0px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 40px; /*header content footer*/
  grid-template-columns: 300px 1fr; /*menu content*/
  grid-template-areas:
    "header header"
    "menu content"
    "footer footer";
}

/* Mudando o grid área para não apresentar o Menu na segunda linha */
#app.hide-menu {
  grid-template-areas:
    "header header"
    "content content"
    "footer footer";
}
</style>