<template>
  <div class="home">
    <PageTitle icon="fa fa-home" main="Dashbord" sub="Base de Conhecimento"/>
    <div class="stats">
      <Stat title="Categorias" :value="stat.categories" icon="fa fa-folder" color="#d54d50"/>
      <Stat title="Artigos" :value="stat.articles" icon="fa fa-file" color="#3bc480"/>
      <Stat title="Usuários" :value="stat.users" icon="fa fa-user" color="#3282cd"/>
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import Stat from "./Stat";
//importar axios para requisições http no backend
import axios from "axios";
// import URLbase para onde serão feitas as reqs
import { baseApiUrl } from "@/global.js";

export default {
  name: "Home",
  components: { PageTitle, Stat },
  // criando campo "data" para ser o componente ter um estado, que é obtido do backend
  // atributo "data" em component vue sempre é uma função que retorna um objeto
  data: function() {
    return {
      //stat começa como um objeto vazio, e receberá as infos do backend
      stat: {}
    };
  },
  //definindo método para trazer as infos e armazenar no "data.stat"
  /*  methods: {
    getStats() {
      axios.get(`${baseApiUrl}/stats`).then(resp => (this.stat = resp.data));
    }
  },
  mounted(){
      this.getStats()
  } */
  // created substitui a necessidade de chamar o mounted,
  // método é chamado quando o componente é renderizado
  created() {
    axios.get(`${baseApiUrl}/stats`).then(resp => (this.stat = resp.data));
  }
};
</script>

<style>
.stats {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
