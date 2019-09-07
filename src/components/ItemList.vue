<template>
  <div class="item-list-container">
    <carousel
      :perPageCustom="[[320, 1], [1199, 4]]"
      :navigationEnabled="true"
      :loop="false"
      :controls="false"
      navigationNextLabel="<i class='material-icons arrow_forward_ios'></i>"
      navigationPrevLabel="<i class='material-icons arrow_back_ios'></i>"
    >
      <slide
        @slideclick="handleSlideClick(product)"
        v-for="(product,index) in products"
        :key="index"
      >
        <div class="item-container">
          <img :src="product.image" alt />
          <p>{{product.description}}</p>
          <p>$ {{product.price}}</p>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import Service from "./../services/ItemService";
export default {
  props: ["products"],
  components: {
    Carousel,
    Slide
  },
  data() {
    return {};
  },
  methods: {
    handleSlideClick(product) {
      console.log("clicked", product);

      Service.getProductImages(product).then(res => {
        product.imageList = res.data;
        this.$store.dispatch("updateTheSelectedProduct", product);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.item-list-container {
  margin: 10px 40px;
  .item-container {
    width: 310px;
    img {
      width: 230px;
      height: 250px;
    }
  }
}
</style>
