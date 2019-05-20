<template>
  <div class="article-admin">
    <b-table hover striped :items="articles.data"></b-table>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "@/global";
export default {
  name: "ArticleAdmin",
  data() {
    return {
      mode: "save",
      article: {},
      articles: [],
      fields: []
    };
  },
  methods: {
    loadArticles() {
      const url = `${baseApiUrl}/articles`;
      axios.get(url).then(resp => {
        this.articles = resp.data;
      });
    }
  },
  mounted() {
    this.loadArticles();
  }
  /* created() {
    const url = `${baseApiUrl}/articles`;
    axios.get(url).then(resp => {
      this.articles = resp.data;
    });
  } */
};
</script>

<style>
</style>
