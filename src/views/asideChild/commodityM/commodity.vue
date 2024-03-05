<template>
  <div id="generic-req" class="rollOuter">
    <cnap-rich-table
      :rt-url="url"
      :condition-form="conditionForm"
      :dialog-title="dialogTitle"
      :dialog-form="dialogForm"
      :dialog-date="dialogDate"
      :dialog-rules="dialogRules"
      ref="cnapRichTable"
    >
      <!-- 表单部分 -->
      <template v-slot:formItem>
        <el-form-item :label="$t('commodity.form.orderId')">
          <el-input
            v-model.number="conditionForm.orderId"
            :placeholder="$t('commodity.form.idPlaceholder')"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('commodity.form.orderName')">
          <el-input
            v-model="conditionForm.orderName"
            :placeholder="$t('commodity.form.namePlaceholder')"
            style="width: 251px"
          ></el-input>
        </el-form-item>
      </template>
      <!-- 查询表单按钮 -->
      <template v-slot:formBtn>
        
      </template>
      <!-- 表格数据区域 -->
      <template v-slot:tableColumn>
        <el-table-column
          property="orderId"
          :label="$t('commodity.table.orderId')"
          width="180"
        >
        </el-table-column>
        <el-table-column
          property="orderName"
          :label="$t('commodity.table.orderName')"
          width="180"
        >
        </el-table-column>
        <el-table-column
          property="orderAddress"
          :label="$t('commodity.table.orderAddress')"
        >
        </el-table-column>
        <el-table-column
          property="createDate"
          :label="$t('commodity.table.createDate')"
          :formatter="formatDate"
          width="180"
        >
        </el-table-column>
        <el-table-column property="remark" :label="$t('commodity.table.remark')">
        </el-table-column>
      </template>
      <!-- 表格操作按钮 -->
      <template v-slot:tableBtn> </template>
      <!-- 弹出框区域 -->
      <template v-slot:dialog="{ dialogType }">
        <el-form-item :label="$t('commodity.dialog.orderId')" prop="orderId">
          <el-input
            v-model.number="dialogForm.orderId"
            :disabled="dialogType == 'edit' ? true : false"
            :placeholder="$t('commodity.dialog.idPlaceholder')"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('commodity.dialog.orderName')">
          <el-input
            v-model="dialogForm.orderName"
            :placeholder="$t('commodity.dialog.namePlaceholder')"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('commodity.dialog.orderAddress')">
          <el-input
            v-model="dialogForm.orderAddress"
            :placeholder="$t('commodity.dialog.adPlaceholder')"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('commodity.dialog.createDate')" prop="createDate">
          <el-date-picker
            v-model="dialogForm.createDate"
            type="date"
            :placeholder="$t('commodity.dialog.cdPlaceholder')"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd hh:mm:ss"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item :label="$t('commodity.dialog.remark')">
          <el-input
            v-model="dialogForm.remark"
            type="textarea"
            :placeholder="$t('commodity.dialog.rkPlaceholder')"
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
import commodity from "./commodity";
export default commodity;
</script>

<style lang="less" scoped></style>
