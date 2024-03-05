// 这里不用了，使用下载的组件
// import CnapRTable from "@/components/cnapRichTable/cnap-rich-table.vue";
export default {
    name: "CacheReq",
    props: {},
    components: {
        // CnapRTable,
    },
    data() {
        return {
            // 增删改查url
            url: {
                deleteOne: "deleteOne",
                addOrders: "create",
                modifyOne: "modifyOne",
                queryByPage: "queryByPage",
            },
            // 用于条件查询表单
            conditionForm: {
                orderId: null,
                orderName: "",
                orderAddress: "",
                createDate: "",
                remark: "",
                ext1: "",
                ext2: "",
                ext3: "",
            },
            // 用于条件查询表单规则
            conditionRules: [],

            /* 弹出框数据 */
            // 弹出框宽度
            dialogWidth: '45%',
            // 弹出框标题
            dialogTitle: 'order.dialog.title',
            // dialogType：由弹出框内部传出，用于指明时添加还是修改
            // 用于添加/修改表单
            dialogForm: {
                orderId: null,
                orderName: "",
                orderAddress: "",
                createDate: "",
                remark: "",
                ext1: "",
                ext2: "",
                ext3: "",
            },
            // 用于弹出框中特殊日期表单
            dialogDate: [{ createDate: 'yyyy-MM-dd hh:mm:ss' }],
            // 用于删除的参数字段,不传就默认使用表单的第一个：如orderId
            dialogDel: 'orderId',
            // 弹出框校验规则
            // 用于弹出框表单规则
            dialogRules: {
                orderId: [
                    {
                        required: true,
                        message: this.$t("order.rules.orderId"),
                        trigger: "blur",
                    },
                ],
                createDate: [
                    {
                        required: true,
                        message: this.$t("order.rules.createDate"),
                        trigger: "blur",
                    },
                ],
            },
            /* 分页数据 */
            // 页码尺寸，应该会统一
            pageSizes: [10, 20, 50],
        };
    },
    created() { },
    mounted() { },
    computed: {},
    // watch中函数不需要return
    watch: {},
    methods: {
        // 日期格式化
        formatDate(row) {
            // 转为日期格式
            const date = new Date(row.createDate);
            return this.$formatDate(date, "yyyy-MM-dd");
        },
        // 条件查询
        submitForm() {
            this.$refs.cnapRichTable.submitForm()
        },
        // 重置表单
        resetForm() {
            this.conditionForm = {
                orderId: null,
                orderName: "",
                orderAddress: "",
                createDate: "",
                remark: "",
                ext1: "",
                ext2: "",
                ext3: "",
            }
        },
        /* 表格事件 */
        // 表格操作按钮-展示详情
        showDetail() {
            this.$refs.cnapRichTable.showDetail()
        },
        // 表格操作按钮-取消选中
        setCurrent() {
            this.$refs.cnapRichTable.setCurrent()
        }

    },
};