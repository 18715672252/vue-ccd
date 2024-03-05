<template>
  <div id="cache-req" class="rollOuter">
    <cnap-rich-table
      :is-log="false"
      :rt-url="url"
      :condition-form="conditionForm"
      :condition-label-width="100"
      :table-index="false"
      :table-max-height="449"
      :row-style="{ height: '40px' }"
      :cell-style="{ padding: '0' }"
      :table-add="true"
      :table-edit="true"
      :table-del="true"
      :page-sizes="pageSizes"
      :dialog-width="dialogWidth"
      :dialog-title="dialogTitle"
      :dialog-form="dialogForm"
      :dialog-date="dialogDate"
      :dialog-del="dialogDel"
      :dialog-label-width="110"
      :dialog-rules="dialogRules"
      ref="cnapRichTable"
    >
      <!-- 查询表单子项 -->
      <template v-slot:formItem>
        <el-form-item :label="$t('order.form.orderId')">
          <el-input
            v-model.number="conditionForm.orderId"
            :placeholder="$t('order.form.idPlaceholder')"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('order.form.orderName')">
          <el-input
            v-model="conditionForm.orderName"
            :placeholder="$t('order.form.namePlaceholder')"
            style="width: 245px"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('order.form.orderAddress')">
          <el-input
            v-model="conditionForm.orderAddress"
            :placeholder="$t('order.form.adPlaceholder')"
            clearable
            style="width: 272px"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('order.form.createDate')">
          <el-date-picker
            v-model="conditionForm.createDate"
            type="date"
            :placeholder="$t('order.form.cdPlaceholder')"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd hh:mm:ss"
          >
          </el-date-picker>
        </el-form-item>
      </template>
      <!-- 查询表单按钮 -->
      <template v-slot:formBtn>
        <el-form-item>
          <el-button type="primary" @click="submitForm">查询</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </template>
      <!-- 表格数据区域 -->
      <template v-slot:tableColumn>
        <el-table-column
          property="orderId"
          :label="$t('order.table.orderId')"
          width="180"
        >
        </el-table-column>
        <el-table-column
          property="orderName"
          :label="$t('order.table.orderName')"
          width="180"
        >
        </el-table-column>
        <el-table-column property="orderAddress" :label="$t('order.table.orderAddress')">
        </el-table-column>
        <el-table-column
          property="createDate"
          :label="$t('order.table.createDate')"
          :formatter="formatDate"
          width="180"
        >
        </el-table-column>
        <el-table-column property="remark" :label="$t('order.table.remark')">
        </el-table-column>
      </template>
      <!-- 表格操作按钮 -->
      <template v-slot:tableBtn="{ currentRow }">
        <el-button
          type="primary"
          size="mini"
          :disabled="!currentRow"
          @click="showDetail(currentRow)"
          >显示详情</el-button
        >
        <el-button type="primary" size="mini" @click="setCurrent">取消选中</el-button>
      </template>
      <!-- 弹出框区域 -->
      <template v-slot:dialog="{ dialogType }">
        <el-form-item :label="$t('order.dialog.orderId')" prop="orderId">
          <el-input
            v-model.number="dialogForm.orderId"
            :disabled="dialogType == 'edit' ? true : false"
            :placeholder="$t('order.dialog.idPlaceholder')"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('order.dialog.orderName')">
          <el-input
            v-model="dialogForm.orderName"
            :placeholder="$t('order.dialog.namePlaceholder')"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('order.dialog.orderAddress')">
          <el-input
            v-model="dialogForm.orderAddress"
            :placeholder="$t('order.dialog.adPlaceholder')"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('order.dialog.createDate')" prop="createDate">
          <el-date-picker
            v-model="dialogForm.createDate"
            type="date"
            :placeholder="$t('order.dialog.cdPlaceholder')"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd hh:mm:ss"
            style="display: flex"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item :label="$t('order.dialog.remark')">
          <el-input
            v-model="dialogForm.remark"
            type="textarea"
            :placeholder="$t('order.dialog.rkPlaceholder')"
            maxlength="30"
            show-word-limit
            style="width: 300px"
          ></el-input>
        </el-form-item>
      </template>
    </cnap-rich-table>
  </div>
</template>

<script>
import order from "./order";
export default order;
</script>

<style lang="less" scoped></style>
