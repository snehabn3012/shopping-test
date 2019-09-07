<template>
  <div class="container">
    <div v-if="showLoader">
      <loader></loader>
    </div>
    <div v-else>
      <Header></Header>
      <div class="body">
        <div class="row">
          <item-image></item-image>
          <item-cart></item-cart>
        </div>
        <item-list :products="productList"></item-list>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import SideBar from "./../components/SideBar";
import itemCart from "./../components/ItemCart";
import itemImage from "./../components/ItemImage";
import itemList from "./../components/ItemList";
import Service from "./../services/ItemService";
import Loader from "./../components/Loader";

export default {
  components: {
    Header,
    Footer,
    SideBar,
    itemCart,
    itemImage,
    itemList,
    Loader
  },
  data() {
    return {
      productList: [],
      showLoader: true
    };
  },
  methods: {},
  created() {},
  mounted() {
    Promise.all([Service.getItems(), Service.getImages()])
      .then(values => {
        console.log(values);
        this.productList = values[0].data;
        this.imageList = values[1].data;

        this.productList.forEach(product => {
          this.imageList.forEach(image => {
            if (product.id == image.productId) {
              product.image = image.url;
            }
          });
        });
        Service.getProductImages(this.productList[0]).then(res => {
          this.productList[0].imageList = res.data;
          this.$store.dispatch("updateTheSelectedProduct", this.productList[0]);
          this.showLoader = false;
        });
      })
      .catch(error => {
        this.showLoader = false;
      });
  }
};
</script>

<style scoped lang="scss">
.container {
  p {
    color: red;
  }
  .row {
    width: 100%;
    height: 520px;
  }
  .body {
    padding: 15px;
    background: white;
    border-top: 1px solid lightgrey;
  }
}

@media only screen and (max-width: 600px) {
  .container {
    .row {
      width: 100%;
      height: 850px;
    }
  }
}
</style>