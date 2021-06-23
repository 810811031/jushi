<template>
    <div :class="['loading']">

    </div>
</template>

<script>
export default {
    name: 'COMPONENT_LOADING',
}
</script>

<style lang="scss" scoped>
.loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 9999999;
}
</style>