<template>
  <Transition name="modal">
    <div v-if="show" class="fixed z-40 flex justify-center items-center top-0 left-0 w-full h-full bg-gray-900/30">
        <div class="bg-white flex flex-col h-auto w-96 p-5">
          <div class="text-green-500 text-center">
            <slot name="header" ></slot>
          </div>

          <div class="modal-body">
            <slot name="body"></slot>
          </div>

          <!-- <div class="modal-footer">
            <slot name="footer">
            </slot>
          </div> -->
        </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    show: Boolean
  }
}
</script>

<style>

    .modal-body {
    margin: 20px 0;
    }

    .modal-default-button {
    float: right;
    }

    /*
    * The following styles are auto-applied to elements with
    * transition="modal" when their visibility is toggled
    * by Vue.js.
    *
    * You can easily play with the modal transition by editing
    * these styles.
    */

    .modal-enter-from {
    opacity: 0;
    }

    .modal-leave-to {
    opacity: 0;
    transition: all 0.3s ease;
    }

    .modal-enter-from .modal-container,
    .modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    }
</style>