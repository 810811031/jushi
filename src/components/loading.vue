<template>
    <div :class="['loading']">
        <div class="truck-wrapper">
            <div class="truck">
                <div class="truck-container"></div>
                <div class="glases"></div>
                <div class="bonet"></div>
                
                <div class="base"></div>
                
                <div class="base-aux"></div>
                <div class="wheel-back"></div>
                <div class="wheel-front"></div>
                
                <div class="smoke"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'COMPONENT_LOADING',
}
</script>

<style lang="scss" scoped>
@import './loading.css';
.loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #69c;
    z-index: 9999999;
}
</style>