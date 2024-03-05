// import cnapRichTable from "@/components/cnapRichTable/cnap-rich-table.vue";
export default {
    name: "GenericReq",
    props: {},
    // components: { cnapRichTable },
    data() {
        return {
            // 增删改查url
            url: {
                deleteOne: "deleteOne",
                addOrders: "create",
                modifyOne: "modifyOne",
                queryByPage: "queryByPage",
            },
            // 条件查询表单
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
            conditionRules: [],
            // 弹出框标题
            dialogTitle: 'commodity.dialog.title',
            // 用于弹出框中特殊日期表单
            dialogDate: [{ createDate: 'yyyy-MM-dd hh:mm:ss' }],
            // 用于删除的参数字段,不传就默认使用表单的第一个：如orderId
            dialogDel: 'orderId',
            // dialogType：由弹出框内部传出，用于指明时添加还是修改
            // 用于弹出框
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
            dialogRules: {
                orderId: [
                    {
                        required: true,
                        message: this.$t("commodity.rules.orderId"),
                        trigger: "blur",
                    },
                ],
                createDate: [
                    {
                        required: true,
                        message: this.$t("commodity.rules.createDate"),
                        trigger: "blur",
                    },
                ],
            },
            // 页码尺寸，应该会统一
            // pageSizes: [10, 20, 50],
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
    },
}