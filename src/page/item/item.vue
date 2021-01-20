<template>
  <div>
    <Public fatherComponent="item"></Public>
    </div>
</template>
<script>
import Public from '@/components/public'
export default {
  name: "item",
  data() {
    return {};
  },
  components:{
    Public
  }
};
</script>
<style >
</style>