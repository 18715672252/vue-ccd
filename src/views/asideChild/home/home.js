export default {
  name: "IndexHome",
  props: {},
  components: {},
  data() {
    return {
      activeName: "first",
      collapseNames: ['1'],
      text21: '<template v-slot:form></template>',
      text22: '<template v-slot:table></template>',
      text23: '<template v-slot:dialog="{ dialogType }"></template>',
      // 头部参数
      cnapHeader0: [
        [':is-fold-aside="isFoldAside"', '是否折叠侧边栏', 'false'],
        ['@change-fold="isFold = $event"', '返回侧边栏折叠状态，配合v-show控制侧边栏', '取反'],
        [':header-path="headerPath"', '首页跳转路由地址<span style="color:red">【必填】</span>', '/home'],
        [':header-crypto="headerCrypto"', '选择是否加密<span style="color:green">【新增】</span>', 'true'],
        [':header-theme="headerTheme"', '选择默认主题', 'red'],
        [':show-crypto="showCrypto"', '是否显示加密按钮', 'true'],
        [':show-lang="showLang"', '是否显示中文切换按钮', 'true'],
        [':show-theme="showTheme"', '是否显示主题切换按钮', 'true'],
        [':show-top="showTop"', '是否显示顶部日期区域<span style="color:green">【新增】</span>', 'true'],
      ],
      // 头部插槽
      cnapHeader1: [
        ['<template v-slot:header></template>', '<span style="color:red">已废弃</span>'],
        ['<template v-slot:topTip></template>', '用于顶部日期后追加内容<span style="color:brown">【重新定义】</span>'],
        ['<template v-slot:title></template>', '用于替换头部标题'],
      ],
      // 侧边栏参数
      cnapAside0: [
        [':is-log="isLog"', '是否打印响应数据', 'false'],
        [':aside-fold="isFold"', '侧边栏是否折叠', 'false'],
        [':aside-url="asideUrl"', '菜单请求路径<span style="color:red">【二选一必填】</span>', '" "'],
        [':aside-param="asideParam"', '菜单请求参数', '{ }'],
        [':aside-width="asideWidth"', '侧边栏宽度', '190px'],
        [':aside-list="asideList"', '菜单数据<span style="color:red">【二选一必填】</span>', '[ ]']
      ],
      // 侧边栏插槽
      cnapAside1: [
        ['<template v-slot:asideTop></template>', '用于添加侧边栏头部']
      ],
      // 底部参数
      cnapFooter: [['<template v-slot:footer></template>', '用于替换底部内容']],
      // 表格参数
      cnapRichTable0: [
        [':is-log="isLog"', '是否打印响应数据', 'false'],
        [':rt-url="url"', '用于增(addOrders)删(deleteOne)改(modifyOne)查(queryByPage)请求的url，传入的属性名按约定<span style="color:red">【必填】</span>', '{ }'],
        [':condition-form="conditionForm"', '条件表单数据<span style="color:red">【必填】</span>', '{ }'],
        [':condition-rules="conditionRules"', '条件表单校验数据', '{ }'],
        [':condition-label-width="100"', '条件表单项标签长度', '100'],
        [':table-index="false"', '是否显示表格索引列', 'true'],
        [':table-height="529"', '表格高度', 'null'],
        [':table--max-height="529"', '表格最大高度<span style="color:green">【新增】</span>', 'null'],
        [':row-style="rowStyle"', '表格行样式', '{ }'],
        [':cell-style="cellStyle"', '表格单元格样式', '{ }'],
        [':table-add="true"', '添加按钮是否显示<span style="color:brown">【重新定义】</span>', 'true'],
        [':table-edit="true"', '编辑按钮是否显示<span style="color:brown">【重新定义】</span>', 'true'],
        [':table-del="true"', '删除按钮是否显示<span style="color:brown">【重新定义】</span>', 'true'],
        [':page-sizes="pageSizes"', '分页页码尺寸', '[10,15,20,50]'],
        [':dialog-width="dialogWidth"', '弹出框宽度', '50%'],
        [':dialog-title="dialogTitle"', '弹出框标题', '" "'],
        [':dialog-form="dialogForm"', '弹出框表单数据<span style="color:red">【必填】</span>', '{ }'],
        [':dialog-date="dialogDate"', '弹出框需要处理的日期项', '[ ]'],
        [':dialog-del="dialogDel"', '用作删除参数的表单项', 'String,不传为dialogForm第一个属性'],
        [':dialog-label-width="110"', '弹出框表单项标签宽度', '100'],
        [':dialog-rules="dialogRules"', '弹出框表单校验数据', '{ }'],
      ],
      cnapRichTable1: [
        ['<template v-slot:formItem></template>', '用于添加条件表单子项<span style="color:red">【改名】</span>'],
        ['<template v-slot:formBtn></template>', '用于替换查询按钮<span style="color:green">【新增】</span>'],
        ['<template v-slot:tableColumn></template>', '用于填写表格列<span style="color:red">【改名】</span>'],
        ['<template v-slot:tableBtn="{ currentRow }"></template>', '用于添加表格操作按钮<span style="color:green">【新增】</span>；提供当前行数据'],
        ['<template v-slot:v-slot:dialog="{ dialogType }></template>', '用于添加弹出框表单子项；提供当前弹出框类型'],
      ],
      cnapRichTable2: [
        ['submitForm()', '用于条件查询【操作类方法】<span style="color:green">【新增】</span>', '无'],
        ['setCurrent()', '用于取消选中【操作类方法】<span style="color:green">【新增】</span>', '无'],
        ['showDetail()', '用于显示当前行数据详情【操作类方法】<span style="color:green">【新增】</span>', '无'],
      ]
    };
  },
  created() { },
  mounted() { },
  computed: {},
  // watch中函数不需要return
  watch: {},
  methods: {},
};