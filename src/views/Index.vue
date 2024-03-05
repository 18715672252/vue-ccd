<template>
  <div id="Index">
    <cnap-home
      :is-fold-aside="isFoldAside"
      :header-path="headerPath"
      :header-theme="headerTheme"
      :show-lang="true"
      :show-theme="true"
      :show-top="true"
      :aside-url="asideUrl"
      :aside-param="asideParam"
      :aside-width="asideWidth"
      :aside-list="asideList"
      :is-log="false"
    >
      <template v-slot:topTip><span> 欢迎访问11</span></template>
      <template v-slot:title></template>
      <template v-slot:asideTop></template>
      <template v-slot:footer> </template>
    </cnap-home>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: {},
  components: {},
  data() {
    return {
      // 头部参数
      isFoldAside: false,
      // 头部logo跳转地址
      headerPath: '/home',
      headerTheme: 'red',
      // 侧边导航栏参数,宽度默认200px
      asideUrl: '',
      // asideUrl: "queryMenu",
      asideParam: {},
      asideWidth: '190px',
      asideList: [
        {
          index: 'home',
          name: 'home'
        },
        {
          index: '1',
          name: 'System',
          children: [
            { index: 'commodity', name: 'commodity' },
            { index: 'order', name: 'order' }
          ]
        }
      ]
    };
  },
  created() {},
  mounted() {},
  computed: {},
  // watch中函数不需要return
  watch: {},
  methods: {}
};
</script>

<style lang="less" scoped></style>
