<template>
    <div class="footer-wrapper">
        {{ item.Footer }} 
        <a href="https://beian.miit.gov.cn/#/Integrated/index" target="view_window"> {{ item.ICP }}</a>
    </div>
</template>

<script>
export default {
    props: ['item'],
}
</script>

<style lang="scss" scoped>
.footer-wrapper {
    width: 100%;
    height: .3rem;
    background-color: #0b0b0b;
    position: fixed;
    bottom: 0;
    left: 0;
    font-size: .14rem;
    color: #fff;
    text-align: center;
    z-index: 999999;
    a {
        display: inline-block;
        margin: 0 auto;
        line-height: .3rem;
        cursor: pointer;
        color: #fff;
    }
}
</style>