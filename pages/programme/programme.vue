<template>
    <div class="container"  :style="{ height: height + 'px' }">
        <!-- <NavDom :current="2" white mask />
        <Logo dark />
        <div class="content">
            <div class="left">
                <div class="inside">
                    <nuxt-link class="p" :to="`/programme/${ index }`" :class="[{ 'active': current == index }]"
                        v-for="(item, index) in list" 
                        :key="index" 
                        @click="handleSelectPage(index)"><span></span>{{ list[current].Title }}</nuxt-link>
                </div>
            </div>
            <div class="right">
                <template  v-if="list.length !== 0" >
                    <div class="title">{{ list[current].Title }}</div>
                    <div class="SubTitle">{{ list[current].SubTitle }}</div>
                    <div class="html" v-html="list[current].Txt">
                    </div>
                </template>
            </div>
        </div> -->
    </div>
</template>

<script>

export default {
    name: 'PAGE_PROGRAMME',
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    position: relative;
    .content {
        width: 100%;
        height: 100%;
        .left {
            width: 4.84rem;
            height: 100%;
            box-sizing: border-box;
            border-right: 1px solid rgba(171, 178, 191, 0.3);
            position: relative;
            display: inline-block;
            vertical-align: top;
            .inside {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                box-sizing: border-box;
                padding-left: .95rem;
                .p {
                    display: block;
                    text-decoration: none;
                    font-size: .18rem;
                    color: #3E4045;
                    line-height: .25rem;
                    transition: all .2s linear;
                    position: relative;
                    margin-bottom: .36rem;
                    box-sizing: border-box;
                    padding-left: .2rem;
                    cursor: pointer;
                    font-weight: bold;
                    span {
                        display: inline-block;
                        width: 0;
                        height: .15rem;
                        opacity: .4;
                        position: absolute;
                        bottom: -.1rem;
                        left: 0;
                        transition: width .4s linear;
                    }
                    &:hover {
                        span {
                            width: 1.2rem;
                            background-color: #DAE0E9;
                            height: .15rem;
                            opacity: .6;
                            bottom: -.05rem;
                        }
                    }
                }
                .active {
                    font-size: .28rem;
                    span {
                        width: 1.2rem;
                        background-color: #008DDC;
                    }
                }
            }
        }
        .right {
            width: calc(100% - 4.85rem);
            height: 100%;
            overflow: auto;
            box-sizing: border-box;
            padding-left: 1.15rem;
            display: inline-block;
            vertical-align: top;
            padding-top: 1.1rem;
            .title {
                font-size: .4rem;
                line-height: .56rem;
                color: #666F7E;
                margin-bottom: .2rem;
            }
            .SubTitle {
                font-size: .25rem;
                line-height: .3rem;
                color: #666F7E;
                margin-bottom: .3rem;
            }
            .html {
                font-size: .16rem;
                line-height: .22rem;
                color: #666F7E;
                .html-title {
                    margin-bottom: .2rem;
                }
                .html-content {
                    margin-bottom: .6rem;
                }
            }
        }
    }
}
</style>