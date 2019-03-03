<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
    created () {
        if (!/(iphone|android)/ig.test(navigator.userAgent)) {
            document.getElementsByTagName('body')[0].innerHTML = '<h1 style="position:fixed;width:100%;font-size:30px;text-align:center;height:100%;color:#fff;background-color:#45a4f1">请在手机端打开</h1>'
        }
    }
}
</script>
