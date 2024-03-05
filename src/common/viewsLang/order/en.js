module.exports = {
    form: {
        orderId: 'orderId',
        orderName: 'orderName',
        orderAddress: 'orderAddress',
        createDate: 'orderDate',
        idPlaceholder: 'Query by orderId',
        namePlaceholder: 'Fuzzy query based on orderName',
        adPlaceholder: 'Fuzzy query based on orderAddress',
        cdPlaceholder: 'Query by orderDate',
    },
    table: {
        orderId: 'orderId',
        orderName: 'orderName',
        orderAddress: 'orderAddress',
        createDate: 'orderDate',
        remark: 'remark'
    },
    dialog: {
        title:'Order info',
        orderId: 'orderId',
        orderName: 'orderName',
        orderAddress: 'orderAddress',
        createDate: 'orderDate',
        remark: 'remark',
        idPlaceholder: 'Please fill in the orderId',
        namePlaceholder: 'Please fill in the orderName',
        adPlaceholder: 'Please fill in the orderAddress',
        cdPlaceholder: 'Select orderDate',
        rkPlaceholder: 'Please fill in the remark',
    },
    rules: {
        orderId: 'orderId is required',
        createDate: 'Please fill in the createDate',
    },
}