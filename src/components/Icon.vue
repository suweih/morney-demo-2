<template>
  <svg class="icon" @click="$emit('click',$event )">
    <use :xlink:href="'#'+name"/>
  </svg>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../assets/icons', true, /\.svg$/))} catch (error) {console.log(error)}
export default {
  props: ['name'],  //传入一个外部变量
  name: 'Icon'
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>