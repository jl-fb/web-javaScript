<template>
  <div class="category-admin">
    <b-form>
      <input id="category-id" type="hidden" v-model="category.id">
      <b-form-group label="Nome:" label-for="category-name">
        <b-form-input
          id="category-name"
          type="text"
          v-model="category.name"
          required
          :readonly="mode === 'remove'"
          placeholder="Informe o nome da Categoria..."
        />
      </b-form-group>
      <b-form-group label="Categoria Pai:" label-for="category-parenId">
        <b-form-select
          v-if="mode ==='save'"
          class="w-50"
          id="category-parentId"
          type="text"
          :options="categories"
          v-model="category.parentId"
        />
        <b-form-input v-else id="category-parentId" type="text" v-model="category.path" readonly/>
      </b-form-group>
      <b-button variant="primary" @click="save" v-if="mode ==='save'">Salvar</b-button>
      <b-button variant="danger" @click="remove" v-if="mode === 'remove'">Excluir</b-button>
      <b-button class="ml-2" @click="reset">Cancelar</b-button>
      <hr>
    </b-form>
    <b-table hover striped :items="categories" :fields="fields">
      <template slot="actions" slot-scope="data">
        <b-button variant="warning" @click="loadCategory(data.item)" class="mr-2 mb-2">
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button variant="danger" @click="loadCategory(data.item, mode = 'remove')" class="mb-2">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl, showError } from "@/global";

export default {
  name: "CategroryAdmin",
  data() {
    return {
      mode: "save",
      category: {},
      categories: [],
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "path", label: "Caminho", sortable: true },
        { key: "actions", label: "Ações" }
      ]
    };
  },
  methods: {
    loadCategories() {
      const url = `${baseApiUrl}/categories`;
      axios.get(url).then(resp => {
        //this.categories = resp.data;
        this.categories = resp.data.map(category => {
          return { ...category, value: category.id, text: category.path };
        });
      });
    },
    reset() {
      this.mode = "save";
      this.category = {};
      this.loadCategories();
    },
    save() {
      /*  const method = this.category.id;
      if(method){
        method = 'put'
      }else{
        method = 'post'
      } */
      const method = this.category.id ? "put" : "post";
      const id = this.category.id ? `${this.category.id}` : "";
      axios[method](`${baseApiUrl}/categories/${id}`, this.category)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    remove() {
      const id = this.category.id;
      axios
        .delete(`${baseApiUrl}/categories/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    loadCategory(category, mode = "save") {
      this.mode = mode;
      this.category = { ...category };
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
