<template>
  <div id="app" class="app">
    <h1>{{ restaurantName }}</h1>
    <p class="description">
      Bienvenue dans notre café {{ restaurantName }}! Nous sommes réputés pour
      notre pain et nos merveilleuses pâtisseries. Faites vous plaisir dès le
      matin ou avec un goûter réconfortant. Mais attention, vous verrez qu'il
      est difficile de s'arrêter.
    </p>

    <section class="menu">
      <h2>Menu</h2>
      <MenuItem
        v-for="item in simpleMenu"
        :name="item.name"
        :image="item.image"
        :quantity="item.quantity"
        :price="item.price"
        :inStock="item.inStock"
        :key="item.name"
      />
    </section>

    <aside class="shopping-cart">
      <h2>Panier d'achat : {{ shoppingCart }} articles</h2>
    </aside>
  </div>
</template>

<script>
import MenuItem from "@/components/MenuItem"; // @ is an alias for /src
import {mapState} from 'vuex'

export default {
  name: "Home",
  components: {
    MenuItem
  },
  computed: {
    ...mapState({
      restaurantName: "restaurantName",
      shoppingCart: "shoppingCart",
      simpleMenu: "simpleMenu"
    })
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
