<template>
  <div class="modal">
    <p class="modal-header">{{title}}</p>
    <p class="modal-title" v-html="message"/>
    <div class="modal-wrapper">
      <v-progress-circular v-if="progress"
          :size="70"
          :width="7"
          color="purple"
          indeterminate
      ></v-progress-circular>
    </div>

    <button v-if="close" class="modal-close" @click="$emit('close')">
      X
    </button>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['title', 'message', 'progress', 'close'],
}
</script>
<style lang="scss" scoped>
@import "../assets/fonts";
@import "../assets/mixins";
.modal {
  padding: 25px 10px 35px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &-header {
    @include font-Rotonda;
    font-size: 25px;
    color: #fab449;
    margin: 0 0 25px 0;
  }
  &-title {
    @include font-Rotonda;
    font-size: 18px;
    color: #007acd;
    margin: 0 0 25px 0;
    max-width: 250px;
    text-align: center;
  }
  &-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-close {
    background: transparent;
    border: none;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 24px;
    color: #007acd;
    &:hover {
      cursor: pointer;
      color: #ed1b2f;
      transform: rotate(180deg);
      transition: all 500ms cubic-bezier(0.47, 0, 0.745, 0.715);
    }
  }
  &-modal {
    @media (max-width: 768px) {
      width: 90vw;
      left: calc(50vw - 240px) !important;
      max-width: 480px;
    }
    @media (max-width: 480px) {
      left: 0 !important;
    }
  }
}
</style>
