<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 com-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built in Directives</h1>
        <p v-text="'Shambho'"></p>
        <p v-html="'<strong>Strong text</strong>'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 com-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives: ;) </h1>
        <p v-highlight:background.delayed="'red'">Color This</p>
        <p v-local-highlight:background.delayed.blink="'red'">Color This, too</p>
        <!-- <p v-html="'<strong>Strong Suraj</strong>'"></p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        console.log("bind -> el, binding, vnode", el, binding, vnode);
        let delay = 0;

        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
          if (binding.modifiers["blink"]) {
            let mainColor = binding.value;
            let secondColor = "blue";
            let currentColor = mainColor;
            setTimeout(() => {
              setInterval(() => {
                currentColor == secondColor
                  ? (currentColor = mainColor)
                  : (currentColor = secondColor);
                if (binding.arg) {
                  el.style.background = currentColor;
                } else {
                  el.style.color = binding.value;
                }
              }, 1000);
            }, delay);
          } else {
            setTimeout(() => {
              if (binding.arg == "background") {
                el.style.background = binding.value;
              } else {
                el.style.color = binding.value;
              }
            }, delay);
          }
      }
    }
  }
};
</script>

<style>
</style>