> 参考（https://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html）
# 移动端 rem 方式适配

-  字体不适用rem 字体设置奇数可能会出现问题 有的字体不支持，ie低版本会变偶数渲染


- ios的缩放比按照 initial-scale=1/dpr 设置,

- 没有对Android的dpr，缩放比进行匹配是因为
    - 兼容性差，有些设备设置的initial-scale不为1时无效
    - 设置initial-scale = 1 获取到的宽度和实际的宽度一致


---
这是简单的实现方式，75是将设计稿750等分为10份的结果,因为flexible计算出的font-size结果也是10等分
```css
@mixin pxToRem($property, $px, $baseFontSize: 75) {
    #{$property} : $px / $baseFontSize * 1rem
}
```
@mixin emCalc($props,$sizes,$base:$base-font-size){
    $values: (); $sublists: false;
    @each $s in $sizes {
        //循环列表中多个属性值，例如text-shadow属性
         @if type-of($s) == list {
            $sublists: true; $vv: ();
            @each $ss in $s {
                $vv: append($vv,if(type-of($ss) == number, #{$ss / $base}rem, $ss));
            }
            $values: append($values,join((), $vv));
        } @else {
            $values: append($values,if(type-of($s) == number, #{$s / $base}rem, $s));
        }
    }
    $value: join((), $values, if($sublists,comma,space));
    @each $prop in $props {
        #{$prop}: $value
    }
}

---
- 设置根font-size，用 document.documentElement.getBoundingClientRect().width 获取宽(iphone6 为什么值为750，应为视宽375 dpr为2)，除以10 
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