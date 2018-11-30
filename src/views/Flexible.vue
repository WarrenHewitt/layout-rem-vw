<template>
    <div class="hello">
        <div class="test-img">
            <div class="d1">
                <img src="../assets/t1.jpg" alt="no">
            </div>
            <div class="d2">
                <div>不使用分号，而是用换行符来分隔属性有些语法上稍有差异</div>
                <div class="btn">马上抢</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld'
}
</script>

<style scoped lang="scss">
// @mixin pxToRem ($px: ){
//     background-color: red;
// }

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
