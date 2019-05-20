<template>
  <div class="category-admin">
   <!--  <b-table hover striped :items="categories"></b-table> -->
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "@/global";

export default {
  name: "CategroryAdmin",
  data() {
    return {
      mode: "save",
      category: {},
      categories: [],
      fields: []
    };
  },
  methods: {
    loadCategories() {
      const url = `${baseApiUrl}/categories`;
      axios.get(url).then(resp => {
        this.categories = resp.data;
      });
    }
  },
  mounted() {
    this.loadCategories();
  }
  /* created() {
    const url = `${baseApiUrl}/categories`;
    axios.get(url).then(resp => {
      this.categories = resp.data;
    });
  } */
};
</script>

<style>
</style>
