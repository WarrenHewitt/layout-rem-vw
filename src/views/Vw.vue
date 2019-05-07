<template>
    <div>
        <div class="vw-main">这是vw布局</div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    $baseWidth: 375;
    @mixin pxToVw($property, $px){
        #{$property}: $px / $baseWidth * 100vw
    }
    .vw-main{
        @include pxToVw(width, 375);
        @include pxToVw(height, 600);
        color: #fff;
        font-size: 50px;
        background-color: rgb(10, 144, 206);
    }
</style>
