<template>
  <div>
    <v-carousel hide-delimiters class="carousel">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <v-card class="mx-auto" max-width="800">
      <span class="card-title">
        <v-card-title>MEN'S NEW CLASSIC</v-card-title></span
      >

      <span class="card-description">
        <v-card-subtitle>
          MORE THAN 100+ MENS PRODUCT IS LIVE NOW !
        </v-card-subtitle>
      </span>

      <v-card-actions>
        <v-btn class="shop-button" block text>
          Shop Now
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Product1 from "../assets/product1.jpg";
import Product2 from "../assets/product2.jpg";
import Product3 from "../assets/product3.jpg";
import Product4 from "../assets/product4.jpg";
import Product5 from "../assets/product5.jpg";
export default {
  name: "Home",
  data() {
    return {
      items: [
        {
          src: Product1,
        },
        {
          src: Product2,
        },
        {
          src: Product3,
        },
        {
          src: Product4,
        },
        {
          src: Product5,
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.carousel {
  height: 100%;
  margin-bottom: 45px;
}
.card-title {
  display: flex;
  justify-content: center;
  .v-card__title {
    font-size: 30px;
    font-weight: bold;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
}
.card-description {
  display: flex;
  justify-content: center;
}
.shop-button {
  color: white;
  background-color: black;
}
</style>
