<template>
    <div :class="['box', { 'big': enter }]"
        @mouseover="handleChangeStyle(true)" 
        @mouseleave="handleChangeStyle(false)">
        <div class="arc-wrapper">
            <div class="arc" ref="box" :style="{ 'background-color': bg }"></div>
        </div>
        <div class="content">
            <p :class="['title', { 'white': bg }]">举视新能源</p>
            <p :class="['name', { 'white': bg }]">120KW落地式直流充电桩</p>
            <p class="type" :style="{ color: color }">JSDC120/750/WA/2/A/IE</p>
            <img :class="['img', { 'animate1': animate == 1, 'animate2': animate == 2 }]" :src="require('@/assets/images/demo.png')" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'COMPONENT_PRODUCT_BOX',
    props: {
        bg: {
            type: String | null,
            default: null
        },
        animate: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: ''
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
    cursor: pointer;
    border-left: 1px solid rgba(171, 178, 191, .3);
    &:nth-of-type(7),
    &:nth-of-type(8),
    &:nth-of-type(9) {
        border-bottom: none;
    }
    position: relative;
    .arc-wrapper {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
    }
    .arc {
        margin-top: .25rem;
        width: 2.6rem;
        height: 2.6rem;
        border-radius: 50%;
        transition: all .3s linear;
        background-color: #E8EBF0;
    }
    .content {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        box-sizing: border-box;
        padding-top: .45rem;
        text-align: center;
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
        .white {
            color: #fff;
        }
        .type {
            font-size: .12rem;
            color: #ABB2BF;
            position: absolute;
            left: 50%;
            bottom: .15rem;
            transform: translateX(-50%);
        }
        .img {
            margin-top: .2rem;
            height: 1.4rem;
            display: inline-block;
            position: relative;
            z-index: 9999;
        }
        .animate1 {
            animation: show1 .5s;
        }
        .animate2 {
            animation: show2 .5s;
        }
        @keyframes show1 {
            from {
                transform: translate(6rem, 6rem) scale(2, 2);
                opacity: 0;
            }
            to{}
        }
        @keyframes show2 {
            from {
                transform: translate(-8rem, 0) scale(2, 2);
            }
            to {}
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