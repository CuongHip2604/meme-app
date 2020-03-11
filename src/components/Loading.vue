<template>
  <div class="loading">
    <div class="loadingio-spinner-rolling-iposy1v2hrs" style="width: 100%; height: 100%">
      <div class="ldio-bg28ajqwirr">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loading"
};
</script>

<style>
.loading {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100000;
  transition: all 0.2s ease;
  background-color: rgba(0, 0, 0, 0.53);
  opacity: 0;
  visibility: hidden;
}

.loading.show {
  opacity: 1;
  visibility: visible;
}

.loading .loadingio-spinner-rolling-iposy1v2hrs {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.3);
}
.loading .ldio-bg28ajqwirr {
  top: 30%;
  left: 40%;
}
@keyframes ldio-bg28ajqwirr {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.ldio-bg28ajqwirr div {
  position: absolute;
  width: 120px;
  height: 120px;
  border: 20px solid #ffffff;
  border-top-color: transparent;
  border-radius: 50%;
}
.ldio-bg28ajqwirr div {
  animation: ldio-bg28ajqwirr 1s linear infinite;
  top: 100px;
  left: 100px;
}
.loadingio-spinner-rolling-iposy1v2hrs {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  /* background: #ffffff; */
}
.ldio-bg28ajqwirr {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-bg28ajqwirr div {
  box-sizing: content-box;
}
</style>