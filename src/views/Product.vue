<template>
    <div class="product">
        
    </div>
</template>

<script>
import mixin from '@/mixins'

export default {
    name: 'PAGE_PRODUCT',
    mixins: [ mixin ],
    data() {
        return {
            isShow: false
        }
    },
	created() {
		setTimeout(() => {
			this.isShow = true
		}, 1000)
	}
}
</script>

<style lang="scss" scoped>

</style>