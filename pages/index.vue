<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <emenu></emenu>
      </el-col>
      <el-col :span="19">
        <life></life>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Emenu from '@/components/index/menu'
import Life from '@/components/index/life'
export default {
  components: {
    Emenu,
    Life
  }
}
</script>

<style lang="scss">
  @import '../assets/css/index/index.scss';
</style>
