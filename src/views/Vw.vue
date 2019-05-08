<template>
    <div>
        <div class="vw-main">这是vw布局</div>
        <div class="btn">button</div>
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
        @include pxToVw(height, 100);
        color: #fff;
        font-size: 50px;
        background-color: rgb(10, 144, 206);
    }

    .btn{
        height: 20vw;
        width: 20vmin;
        margin: 20vw;
        line-height: 20vw;
        text-align: center;
        border-radius: 50%;
        color: #fff;

        background-color: rgb(206, 46, 6);
    }
</style>
