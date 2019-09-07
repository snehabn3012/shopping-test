<template>
  <div class="image-container">
    <div class="selected-image">
      <img :src="selectedImage" />
    </div>
    <carousel
      class="container"
      :perPageCustom="[[320, 4], [1199, 8]]"
      :navigationEnabled="true"
      :loop="false"
      :controls="false"
      navigationNextLabel="<i class='material-icons arrow_forward_ios'></i>"
      navigationPrevLabel="<i class='material-icons arrow_back_ios'></i>"
    >
      <slide
        class="slide"
        @slideclick="openImage(image.url)"
        v-for="(image,index) in this.$store.state.selectedProduct.imageList"
        :key="index"
      >
        <img class="slide-image" :src="image.url" />
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedImage: "",
      product: {}
    };
  },
  methods: {
    openImage(url) {
      this.selectedImage = url;
    }
  },
  mounted() {
    this.selectedImage = this.$store.state.selectedProduct.imageList
      ? this.$store.state.selectedProduct.imageList[0].url
      : "";
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.image-container {
  width: 60%;
  float: right;
  .selected-image {
    width: 300px;
    height: 400px;
    img {
      width: 350px;
      height: 350px;
    }
  }
  .container {
    text-align: center;
    .slide-image {
      width: 50px;
      height: 50px;
    }
  }
}
@media only screen and (max-width: 600px) {
  .image-container {
    width: 100%;
    .selected-image {
      max-width: 450px;
      height: 350px;
      img {
        width: 350px;
        height: 300px;
      }
    }
  }
}
</style>