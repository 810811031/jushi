<template>
    <div class="__timeline__wrapper__">
        <span class="years">{{ item.year }}年</span>
        <div :class="['line-wrapper', { 'active': active }]">
            <div :class="['arc-wrapper', { 'active-wrapper': active }]">
                <div :class="['arc-inslide', { 'active-inside': active }]"></div>
            </div>
            <div class="line-right"></div>
            <div class="line-bottom"></div>
            <div class="line-left" v-if="index !== 0"></div>
        </div>
        <div class="box-content" v-for="(group, i) in item.array" :key="i" @click="handleClick">
            <span class="title">{{ group.title }}</span>
            <span class="description">{{ group.descript }}</span>
            <span class="line-bottom" v-if="i !== item.array.length - 1"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'COMPONENT_TIMELINE',
    props: ['item', 'index', 'active'],
    created() {
        console.log(this.active)
    },
    methods: {
        handleClick: function () {
            this.$emit('change')
        }
    }
}
</script>

<style lang="scss" scoped>
.__timeline__wrapper__ {
    width: 1.15rem;
    display: inline-block;
    vertical-align: top;
    margin-right: .6rem;
    .years {
        font-size: .14rem;
        color: #858C98;
        line-height: .2rem;
        margin-left: .1rem;
    }
    .line-wrapper {
        width: 100%;
        height: .7rem;
        padding-left: .21rem;
        position: relative;
        .arc-wrapper {
            width: .24rem;
            height: .24rem;
            background-color: rgba(198, 203, 213, .3);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            .arc-inslide {
                width: .12rem;
                height: .12rem;
                background-color: #C6CBD5;
                border-radius: 50%;
            }
        }
        .line-left {
            width: .81rem;
            height: 2px;
            background-color: #C6CBD5;
            position: absolute;
            top: .11rem;
            left: -.54rem;
        }
        .line-right {
            width: .82rem;
            height: 2px;
            background-color: #C6CBD5;
            position: absolute;
            top: .11rem;
            left: .39rem;
        }
        .line-bottom {
            width: 2px;
            height: .56rem;
            background-color: #C6CBD5;
            position: absolute;
            bottom: 0rem;
            left: .32rem;
        }
        .active-wrapper {
            background-color: rgba(148, 183, 253, .3) !important;
        }
        .active-inside {
            background-color: #94B7FD !important;
        }
    } 
    .box-content {
        width: 100%;
        border: 1px solid #C6CBD5;
        box-sizing: border-box;
        border-radius: .04rem;
        cursor: pointer;
        padding: .05rem;
        margin-bottom: .2rem;
        position: relative;
        .title {
            font-size: .14rem;
            color: #666F7E;
            text-decoration: underline;
            display: block;
        }
        .description {
            width: 1.05rem;
            display: block;
            line-height: .14rem;
            font-size: .12rem;
            color: #B8BBC1;
            white-space: pre-wrap;
            white-space: break-all;
        }
        .line-bottom {
            width: 2px;
            height: .2rem;
            background-color: #C6CBD5;
            position: absolute;
            bottom: -.21rem;
            left: .32rem;
        }
    }
}
</style>