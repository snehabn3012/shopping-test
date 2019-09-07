<template>
  <div class="left-container">
    <p>< {{selectedCategory}}</p>
    <div>
      <span class="left">{{selectedProduct.name}}</span>
      <span class="right">$ {{selectedProduct.price}}</span>
      <!-- {{selectedProduct}} -->
    </div>
    <div class="cart-container">
      <div class="tab">
        <button
          :class="[selectedGender=='men' ? 'selected' : '', 'tablinks']"
          @click="updateContent('men')"
        >Men</button>
        <button
          :class="[selectedGender=='women' ? 'selected' : '', 'tablinks']"
          @click="updateContent('women')"
        >Women</button>
      </div>
      <div class="tab-content">
        <div class="colors">
          <p>Select Color</p>
          <div
            class="color-circle"
            :style="{background:color}"
            v-for="(color,index) in colorList"
            :key="color[index]"
            @click="selectedColor(color)"
          >{{size}}</div>
        </div>
        <div class="size">
          <p>Select Size</p>
          <div
            class="size-box"
            v-for="(size, index) in sizeList"
            :key="size[index]"
            @click="selectedColor(index)"
          >{{size}}</div>
        </div>
      </div>
      <button class="green-btn btn" type="submit">ADD TO BAG</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorList: [],
      sizeList: [],
      size: "",
      color: "",
      selectedGender: "men",
      selectedCategory: this.$store.state.selectedCategory,
      selectedProduct: this.$store.state.selectedProduct
    };
  },
  methods: {
    updateContent(type) {
      if (type == "men") {
        this.selectedGender = "men";
        this.colorList = ["red", "blue", "black"];
        this.sizeList = ["15", "18", "19"];
      } else {
        this.selectedGender = "women";
        (this.colorList = ["pink", "lightpink", "grey"]),
          (this.sizeList = ["19", "20", "21"]);
      }
    }
  },
  created() {
    this.updateContent("men");
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.left-container {
  width: 30%;
  .left {
    float: left;
  }
  .right {
    float: right;
  }
  .cart-container {
    float: left;
    width: 100%;
    border: 1px solid lightgray;
    margin-top: 20px;
    .tab {
      background: lightgray;
      .tablinks {
        background-color: inherit;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        transition: 0.3s;

        width: 50%;
      }
      .selected {
        background: white;
        color: green;
        font-weight: 18px;
        text-transform: uppercase;
      }
    }

    .tab-content {
      .colors {
        padding: 5px;
        .color-circle {
          border-radius: 50%;
          width: 25px;
          height: 25px;
          margin: 5px;
          display: inline-block;
          cursor: pointer;
        }
      }
      .size {
        padding: 5px;
        .size-box {
          border: 1px solid lightgray;
          width: 17px;
          height: 17px;
          padding: 10px;
          margin: 5px;
          display: inline-block;
          cursor: pointer;
        }
      }
    }
    .green-btn {
      width: 100%;
      background: green;
      border: none;
      padding: 15px;
      color: white;
      font-size: 14px;
      outline: none;
      cursor: pointer;
    }
  }
}
@media only screen and (max-width: 600px) {
  .left-container {
    float: left;
    width: 100%;
    .cart-container {
      width: 100%;
    }
  }
}
</style>