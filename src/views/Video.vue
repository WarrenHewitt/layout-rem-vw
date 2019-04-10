<template>
    <div>
        <iframe class="video_iframe" src="http://v.qq.com/iframe/player.html?vid=c01350046ds&auto=0" allowfullscreen="" frameborder="0" height="375" width="500"></iframe>
        <iframe class="video_iframe" src="http://v.qq.com/iframe/player.html?vid=s0135vh2yyg&auto=0" allowfullscreen="" frameborder="0" height="375" width="500"></iframe>
    </div>
</template>
<script>
export default {
    data () {
        return {
            key: ''
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/css/common.scss';

    .video_iframe {
        @include pxToRem((height: 300));
        z-index: 1;
        width: 100%;
    }
</style>
