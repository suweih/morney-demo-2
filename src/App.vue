<template>
  <div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/reset.scss";

body{
  color: #333;
  font-family: $font-hei;
  line-height: 1.5;
  font-size: 16px;
  background: #f5f5f5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media (min-width: 500px) {
  body{
    width: 600px;
    margin: 0 auto;
    box-shadow: 0 3px 3px rgba(0,0,0,0.4);
  }
}
</style>
