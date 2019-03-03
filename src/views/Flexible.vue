<template>
    <div class="hello">
        <div class="info">这是设计稿750px宽度</div>
        <div class="test-img">
            <div class="d1">
                <img src="http://img0.imgtn.bdimg.com/it/u=725823361,1622128019&fm=26&gp=0.jpg" alt="no">
            </div>
            <div class="d2">
                <div class="t">文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</div>
                <div class="btn">购买</div>
            </div>
        </div>
        <p class="ft">footer</p>
        <div class="each">
            each mixin 这是一些文本
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
$baseFontSize: 75;
@mixin pxToRem($property, $px) {
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

$a: (rgb(182, 182, 182));
.ft{
    @include pxToRem(margin-top, 30);
    color: #fff;
    background: linear-gradient( join($a, rgb(87, 87, 87), comma) );
    @include fontSize(16px);
    @include pxToRem(height, 50);
}

@mixin each($param) {
    @each $key, $px in $param{
        #{$key}: $px / $baseFontSize * 1rem ;
    }
}

.each{
    @include each((width: 750, height: 100,margin-top: 30));
    color: #fff;
    background-color: #f351c2;
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
