移动端 rem 方式适配

字体设置奇数可能会出现问题 有的字体不支持，ie低版本会变偶数渲染

- 设置根font-size，用 document.documentElement.getBoundingClientRect().width 获取宽，除以10
- ios的缩放比按照 initial-scale=1/dpr 设置,
- 没有对Android的dpr，缩放比进行匹配是因为
    - 兼容性差，有些设备设置的initial-scale不为1时无效
    - 设置initial-scale = 1 获取到的宽度和实际的宽度一致