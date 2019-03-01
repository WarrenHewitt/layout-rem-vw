<template>
    <div class="hello">
        <div class="info">这是设计稿750px宽度</div>
        <div class="test-img">
            <div class="d1">
                <img src="../assets/t1.jpg" alt="no">
            </div>
            <div class="d2">
                <div class="t">文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</div>
                <div class="btn">购买</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    mounted () {
    }
}
</script>

<style scoped lang="scss">
.t {
    color: if(true, rgb(46, 78, 114), red);
}

@mixin pxToRem($property, $px, $baseFontSize: 75) {
    #{$property} : $px / $baseFontSize * 1rem
}

@mixin fontSize($font-size){
    font-size: $font-size;
    [data-dpr="2"] & {
        font-size: $font-size * 2;
    }
    [data-dpr="3"] & {
        font-size: $font-size * 3;
    }
}

.info{
    @include pxToRem(width, 750);
    @include pxToRem(height, 60);
    @include pxToRem(line-height, 60);
    @include fontSize(16px);
    color: rgb(253, 255, 254);
    background-color: rgb(94, 92, 92);
}

.test-img {
    margin-top: 1rem;
    background-color: rgb(247, 242, 242);
    overflow: hidden;
    .d1{
        float: left;
        img {
            width: 2.3457rem;
            height: 2.3457rem;
        }
    }
    .d2{
        margin-left: 2.56rem;

        .btn{
            margin: 1.2rem 0 0 4.6rem;
            height: .66rem;
            width: 2.345rem;
            line-height: .66rem;
            text-align: center;
            color: #fff;
            background-color: red;
        }
    }
}
</style>
