<script>
import BaseButton from "./BaseButton";
import { mapActions } from 'vuex'

export default {
  name: "MenuItem",
  components: {
    BaseButton
  },
  props: {
    name: String,
    inStock: Boolean,
    price: Number,
    quantity: Number,
    image: Object
  },
  data() {
    return {
      onSale: false
    };
  },
  computed: {
    generatedPrice() {
      if (this.onSale) {
        return (this.price * 0.9).toFixed(2);
      } else {
        return this.price;
      }
    }
  },
  beforeMount() {
    const today = new Date().getDay();
    if (today % 2 === 0) {
      this.onSale = true;
    }
  },
  methods: {
    ...mapActions(["updateShoppingCart"])
  }
};
</script>

<template>
  <div class="menu-item">
    <img class="menu-item__image" :src="image.source" :alt="image.alt" />
    <div>
      <h3>{{ name }}</h3>
      <p>Prix : {{ generatedPrice }}</p>
      <p v-if="inStock">En stock</p>
      <p v-else>En rupture de stock</p>

      <div>
        <label for="add-item-quantity">Quantité : {{ quantity }}</label>
        <input v-model.number="quantity" id="add-item-quantity" type="number" />
        <BaseButton @click="updateShoppingCart(quantity)">
          Ajouter au panier
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style></style>
