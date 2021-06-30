<template>
  <div>
    <p>您输入的网址出错!</p>
    点击返回
    <router-link to="/money">首页</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class NotFound extends Vue {

}
</script>

<style lang="scss" scoped>

</style>