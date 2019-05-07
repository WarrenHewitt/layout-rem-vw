> 参考（https://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html）


# 移动端 rem 和 vw 方式适配

- 文本内容较多时还是px更适用，因为显示内容更多

- 为什么有 px 转 rem 和 vw 这个步骤其中一个原因是要还原UI设计稿，设计稿是px单位

## rem

-  字体不适用rem 字体设置奇数可能会出现问题 有的字体不支持，ie低版本会变偶数渲染


- ios的缩放比按照 initial-scale=1/dpr 设置,

- 没有对 Android 的dpr，缩放比进行匹配是因为
    - 兼容性差，有些设备设置的initial-scale不为1时无效
    - 设置initial-scale = 1 获取到的宽度和实际的宽度一致


---
这是简单的实现方式：

$baseFontSize: 75是将设计稿750等分为10份的结果,所以这里的75是根据设计稿而定的

因为 flexible 计算出的font-size结果也是10等分

```css
@mixin pxToRem($property, $px, $baseFontSize: 75) {
    #{$property} : $px / $baseFontSize * 1rem
}
```

---
设置根font-size = document.documentElement.getBoundingClientRect().width / 10;

iphone6获取到的width 为什么值为750，因为视宽375 dpr为2
```css
@mixin fontSize($font-size){
    font-size: $font-size;
    [data-dpr="2"] & {
        font-size: $font-size * 2;
    }
    [data-dpr="3"] & {
        font-size: $font-size * 3;
    }
}
@include fontSize(16px);
```

## vw

这里使用的是baseWidth，注意与rem布局（使用baseFontSize）的差异

baseWidth的值也是与设计稿有关

```css
/* 基准宽度 */
$baseWidth: 375;

/* 最小宽度 */
$minWidth: 320px;

/* 最大宽度 */
$maxWidth: 540px;

@mixin pxToVw($property, $px){
    #{$property}: $px / $baseWidth * 100vw
}
```
