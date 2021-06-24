<template>
	<div id="app">
		<router-view/>
		<transition name="loading"
			enter-active-class="animated slideInRight" 
			leave-active-class="animated bounceOutLeft">
			<Loading v-if="loading.show" style="animation-duration: 700ms" />
		</transition>
		
	</div>
</template>

<script>
import Loading from '@/components/loading'

export default {
	name: 'APP',
	components: {
		Loading
	},
	computed: {
        loading() {
            return this.$store.getters.getRouteAnimate
        }
	}
}
</script>

<style lang="scss">
* {
	padding: 0;
	margin: 0;
}
html, body {
	width: 100%;
	height: 100%;
	font-size: 0;
}
#app {
	width: 100%;
	height: 100%;
}
</style>
