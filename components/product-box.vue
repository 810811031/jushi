<template>
    <div :class="['box', { 'big': enter }]"
        @mouseover="handleChangeStyle(true)" 
        @mouseleave="handleChangeStyle(false)">
        <div class="arc" ref="box" :style="{ 'background-color': bg }"></div>
        <div class="content">
            <p class="title">举视新能源</p>
            <p class="name">120KW落地式直流充电桩</p>
            <p class="type">JSDC120/750/WA/2/A/IE</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'COMPONENT_PRODUCT_BOX',
    props: {
        bg: {
            type: String,
            default: '#E8EBF0'
        }
    },
    data() {
        return {
            enter: false,
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
        transition: all .3s linear;
    }
    .content {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        box-sizing: border-box;
        padding-top: .45rem;
        .title {
            font-size: .14rem;
            line-height: .2rem;
            color: #656E7D;
            text-align: center;
        }
        .name {
            font-size: .18rem;
            line-height: .25rem;
            margin-top: .16rem;
            color: #656E7D;
            text-align: center;
        }
        .type {
            font-size: .12rem;
            color: #ABB2BF;
            position: absolute;
            left: 50%;
            bottom: .26rem;
            transform: translateX(-50%);
        }
    }
}
.big {
    .arc {
        transform: scale(2, 2);
        border-radius: 0;
    }
}
@media screen and (max-width: 1000px) {
    .arc {
        width: 1.9rem !important;
        height: 1.9rem !important;
    }
}
</style>