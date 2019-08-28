<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <emenu></emenu>
      </el-col>
      <el-col :span="19">区域划分</el-col>
    </el-row>
    <el-row :span="24">
      区域划分
    </el-row>
  </div>
</template>

<script>
import Emenu from '@/components/index/menu'
export default {
  components: {
    Emenu
  }
}
</script>

<style lang="scss">
  @import '../assets/css/index/index.scss';
</style>
