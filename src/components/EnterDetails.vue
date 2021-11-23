<template>

</template>
<script>
export default {
  props: [],
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
  },
  data() {
    return showModal;
  },
};
</script>
<style scoped>
</style>