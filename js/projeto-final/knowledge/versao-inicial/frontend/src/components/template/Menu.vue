<template>
  <aside class="menu" v-show="isMenuVisible">
    <div class="menu-filter">
      <i class="fa fa-search fa-lg"></i>
      <input
        v-model="treeFilter"
        type="text"
        class="filter-field"
        placeholder="Digite para filtrar..."
      />
    </div>
    <Tree :data="treeData" :options="treeOptions" :filter="treeFilter" ref="tree" />
  </aside>
</template>

<script>
import { mapState } from "vuex"; //mapeando atributos da store
import Tree from "liquor-tree";
import axios from "axios";
import { baseApiUrl } from "@/global";

export default {
  name: "Menu",
  components: { Tree },
  computed: mapState(["isMenuVisible"]), //coletando o atributo desejado para dentro deste componente
  data() {
    return {
      treeFilter: "",
      treeData: this.getTreeData(),
      treeOptions: {
        propertyNames: { text: "name" },
        filter: { emptyText: "Categoria não encontrada" }
      }
    };
  },
  methods: {
    getTreeData() {
      const url = `${baseApiUrl}/categories/tree`;
      return axios.get(url).then(resp => resp.data); //retornando Promisse (com o json "tree)
    },
    onNodeSelect(node) {
      //add nova rota ao componente router
      this.$router.push({
        name: "articlesByCategory",
        params: { id: node.id }
      });
      if (this.$mq === "xs" || this.$mq === "sm") {
        this.$store.commit("toggleMenu", false);
      }
    }
  },
  mounted() {
    //this.$ref é como acesso elementos dentro do template com a tag "ref="name""
    this.$refs.tree.$on("node:selected", this.onNodeSelect);
  }
};
</script>

<style>
.menu {
  grid-area: menu;
  background: linear-gradient(to right, #232526, #414345);

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.menu a,
.menu a:hover {
  color: #fff;
  text-decoration: none;
}
.menu .tree-node.selected > .tree-content,
.menu .tree-node .tree-content:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.tree.arrow.has-child {
  filter: brightness(2);
}
.menu .menu-filter {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px;
  padding-bottom: 8px;
  border-bottom: 1px solid #aaa;
}
.menu .menu-filter i {
  color: #aaa;
  margin-right: 10px;
}
.menu input {
  color: #ccc;
  font-size: 1.3rem;
  border: 0;
  outline: 0;
  width: 100%;
  background: transparent;
}
.tree-filter-empty {
  color: #ccc;
  margin-left: 20px;
  font-size: 1.3rem;
}
</style>
