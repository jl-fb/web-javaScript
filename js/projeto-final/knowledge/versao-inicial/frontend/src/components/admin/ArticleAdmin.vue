<template>
  <div class="article-admin">
    <b-form>
      <input id="article-id" v-model="article.id" type="hidden">
      <b-form-group label="Nome:" label-for="article-name">
        <b-form-input
          id="article-name"
          v-model="article.name"
          type="text"
          required
          :readonly="mode === 'remove'"
          placeholder="Informe o nome do Artigo..."
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Descrição" labe-for="article-descrition">
        <b-form-input
          id="article-description"
          type="text"
          v-model="article.description"
          required
          :readonly="mode==='remove'"
          placeholder="Informe a Descrição do Artigo..."
        ></b-form-input>
      </b-form-group>
      <b-form-group v-if="mode==='save'" label="Imagem (URL)" label-for="article.imageUrl">
        <b-form-input
          id="article-imageUrl"
          type="text"
          v-model="article.imageUrl"
          required
          :readonly="mode==='remove'"
          placeholder="Informe a URL da Imagem..."
        ></b-form-input>
      </b-form-group>
      <b-form-group v-if="mode==='save'" label="Categoria:" label-for="article-categorieId">
        <b-form-select
          id="article-categorieId"
          :options="categories"
          v-model="article.categorieId"
        />
      </b-form-group>
      <b-form-group v-if="mode==='save'" label="Autor" label-for="article-userId">
        <b-form-select id="article-userId" :options="users" v-model="article.userId"/>
      </b-form-group>
      <b-form-group v-if="mode ==='save'" label="Conteúdo:" label-for="article-content">
        <VueEditor v-model="article.content" placeholder="Informe o Conteúdo do Artigo..."/>
      </b-form-group>
      <b-button v-if="mode === 'save'" variant="primary" @click="save">Salvar</b-button>
      <b-button v-if="mode === 'remove'" variant="danger" @click="remove">Excluir</b-button>
      <b-button @click="reset" class="ml-2">Cancelar</b-button>
      <hr>
    </b-form>
    <b-table hover striped :items="articles" :fields="fields">
      <template slot="actions" slot-scope="data">
        <b-button variant="warning" @click="loadArticle(data.item)" class="mr-2 mb-2">
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button variant="danger" @click="loadArticle(data.item, mode = 'remove')" class="mb-2">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
    <b-pagination v-model="page" size="md" :total-rows="count" :per-page="limit"/>
  </div>
</template>

<script>
import axios from "axios";
import { VueEditor } from "vue2-editor";
import { baseApiUrl, showError } from "@/global";
export default {
  name: "ArticleAdmin",
  components: { VueEditor },
  data() {
    return {
      mode: "save",
      article: {},
      articles: [],
      categories: [],
      users: [],
      page: 1,
      limit: 0,
      count: 0,
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "description", label: "Descrição", sortable: true },
        { key: "actions", label: "Ações" }
      ]
    };
  },
  methods: {
    loadArticles() {
      const url = `${baseApiUrl}/articles?page=${this.page}`;
      axios.get(url).then(resp => {
        this.articles = resp.data.data;
        this.count = resp.data.count;
        this.limit = resp.data.limit;
      });
    },
    reset() {
      (this.mode = "save"), (this.article = {}), this.loadArticles();
    },
    save() {
      const method = this.article.id ? "put" : "post";
      const id = this.article.id ? `${this.article.id}` : "";
      axios[method](`${baseApiUrl}/articles/${id}`, this.article)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    remove() {
      const id = this.article.id;
      axios
        .delete(`${baseApiUrl}/articles/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    loadArticle(article, mode = "save") {
      this.mode = mode;
      //this.article = {...article}
      axios
        .get(`${baseApiUrl}/articles/${article.id}`)
        .then(resp => (this.article = resp.data));
    },
    loadCategories() {
      const url = `${baseApiUrl}/categories`;
      axios.get(url).then(resp => {
        this.categories = resp.data.map(category => {
          return { value: category.id, text: category.path };
        });
      });
    },
    loadUsers() {
      const url = `${baseApiUrl}/users`;
      axios.get(url).then(resp => {
        this.users = resp.data.map(user => {
          return { value: user.id, text: `${user.name} - ${user.email}` };
        });
      });
    }
  },
  watch: {
    page() {
      this.loadArticles();
    }
  },
  mounted() {
    this.loadArticles();
    this.loadCategories();
    this.loadUsers();
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
