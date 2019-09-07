<template>
  <div class="footer-container">
    <div class="inline men">
      <b>MEN</b>
      <ul>
        <li>OCA Low</li>
        <li>OCA High</li>
        <li>CATIBA Low</li>
        <li>CATIBA High</li>
      </ul>
    </div>
    <div class="inline women">
      <b>WOMEN</b>
      <ul>
        <li>OCA Low</li>
        <li>OCA High</li>
        <li>CATIBA Low</li>
        <li>CATIBA High</li>
      </ul>
    </div>

    <div class="inline support">
      <b>SUPPORT</b>
      <ul>
        <li>FAQ</li>
        <li>Returns</li>
        <li>Live Chat</li>
      </ul>
    </div>

    <div class="inline about">
      <b>ABOUT</b>
      <ul>
        <li>Mission</li>
        <li>Vision</li>
        <li>Future</li>
      </ul>
    </div>

    <div class="inline stores">
      <b>POP UP STORES</b>
      <ul>
        <li>Find near you</li>
        <li>Vision</li>
        <li>Register</li>
        <li>
          <input type="text" placeholder="Find your sneakers here" />
        </li>
      </ul>
    </div>

    <div class="inline letter">
      <b>NEWS LETTER</b>
      <ul>
        <li>Find near you</li>
        <li>Vision</li>
        <li>Register</li>
        <li>
          <input type="email" placeholder="Enter Email" />
          <button class="btn" type="submit">JOIN US</button>
        </li>
      </ul>
    </div>

    <div class="inline shop">
      <b>SHOP</b>
      <ul>
        <li>CATIBA</li>
        <li>OCA</li>
      </ul>
    </div>

    <div class="inline support">
      <b>SUPPORT</b>
      <ul>
        <li>FAQ</li>
        <li>Returns</li>
        <li>Live Chat</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer-container {
  background-color: black;
  color: white;
  width: 100%;
  padding: 20px;
  .inline {
    display: inline-grid;
    width: 16%;
    ul {
      padding-inline-start: 0;
      li {
        list-style-type: none;
        padding: 5px 0;
        .btn {
          color: white;
          background: black;
          padding: 8px;
          margin-left: 13px;
        }
      }
    }
    input {
      border-top-color: black;
      border-right-color: black;
      border-bottom-color: initial;
      border-left-color: black;
      background: black;
      padding: 5px 0;
    }
  }
  .shop {
    display: none;
  }
  .support {
    display: none;
  }
}

@media only screen and (max-width: 600px) {
  .footer-container {
    .inline {
      width: 100%;
    }
    .men,
    .women,
    .support,
    .stores,
    .about {
      display: none;
    }

    .letter {
      margin-bottom: 20px;
    }
  }
}
</style>
