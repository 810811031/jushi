<template>
    <div :class="['box', { 'big': enter }]" 
        @mouseover="handleChangeStyle(true)" 
        @mouseleave="handleChangeStyle(false)">
        <div class="arc"></div>
        <div class="content">

        </div>
    </div>
</template>

<script>
export default {
    name: 'COMPONENT_PRODUCT_BOX',
    data() {
        return {
            enter: false
        }
    },
    methods: {
        handleChangeStyle(type) {
            this.enter = type
        }
    }
}
</script>

<style lang="scss" scoped>
.box {
    display: flex;
    width: 33.333%;
    height: 33.333%;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    border-bottom: 1px solid rgba(171, 178, 191, .3);
    border-right: 1px solid rgba(171, 178, 191, .3);
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
    &:nth-of-type(7),
    &:nth-of-type(8),
    &:nth-of-type(9) {
        border-bottom: none;
    }
    position: relative;
    .arc {
        position: absolute;
        top: .25rem;
        width: 2.6rem;
        height: 2.6rem;
        border-radius: 50%;
        background-color: #E8EBF0;
        transition: all .3s linear;
    }
}
.big {
    .arc {
        transform: scale(2, 2);
        border-radius: 0;
    }
}
</style>