<template>
  <div id="index-home">
    <el-tabs v-model="activeName">
      <!-- 回到顶部按钮，添加的类为滚动区域 -->
      <el-backtop target=".el-tabs__content" :bottom="30"></el-backtop>
      <el-tab-pane name="first">
        <span slot="label"
          ><i class="el-icon-document"></i>{{ $t("home.tabs.page") }}</span
        >
        <el-row>
          <el-col :xs="24" :sm="12">
            <el-card
              @click.native="$router.push('/commodity')"
              shadow="hover"
              style="cursor: pointer"
            >
              <div slot="header">
                <span>{{ $t("home.commodity") }}</span>
              </div>
              <div>
                {{ $t("home.text1") }}
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-card
              @click.native="$router.push('/order')"
              shadow="hover"
              style="cursor: pointer"
            >
              <div slot="header">
                <span>{{ $t("home.order") }}</span>
              </div>
              <div>
                {{ $t("home.text2") }}
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane name="second">
        <span slot="label"
          ><i class="el-icon-tickets"></i>{{ $t("home.tabs.component") }}</span
        >

        <el-collapse v-model="collapseNames">
          <el-collapse-item
            title="主页组件【cnap-home.vue】：插件提供了主页组件，内部包含三个子组件，均可通过标签直接使用；以下【必填项】仅针对直接使用主页组件时适用。"
            name="1"
          >
            <div>
              <el-row>
                <!-- 头部组件说明 -->
                <el-col :span="12">
                  <el-card>
                    <div slot="header">
                      <span>【cnap-header】</span>
                    </div>
                    <table>
                      <thead>
                        <tr>
                          <th>支持参数</th>
                          <th>说明</th>
                          <th>默认值</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in this.cnapHeader0" :key="index">
                          <td>{{ item[0] }}</td>
                          <td v-html="item[1]"></td>
                          <td>{{ item[2] }}</td>
                        </tr>
                        <tr>
                          <td>应用时必须配置国际化？</td>
                          <td>否</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                    <table style="margin-top: 20px">
                      <thead>
                        <tr>
                          <th>支持插槽</th>
                          <th>说明</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in this.cnapHeader1" :key="index">
                          <td>{{ item[0] }}</td>
                          <td v-html="item[1]"></td>
                        </tr>
                      </tbody>
                    </table>
                  </el-card>
                </el-col>
                <!-- 侧边组件说明 -->
                <el-col :span="12">
                  <el-card>
                    <div slot="header">
                      <span>【cnap-aside】</span>
                    </div>
                    <table>
                      <thead>
                        <tr>
                          <th>支持参数</th>
                          <th>说明</th>
                          <th>默认值</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in this.cnapAside0" :key="index">
                          <td>{{ item[0] }}</td>
                          <td v-html="item[1]"></td>
                          <td>{{ item[2] }}</td>
                        </tr>
                        <tr>
                          <td>应用时必须配置国际化？</td>
                          <td>是</td>
                          <td>用于菜单数据内部渲染</td>
                        </tr>
                      </tbody>
                    </table>
                    <table>
                      <thead>
                        <tr>
                          <th>支持插槽</th>
                          <th>说明</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in this.cnapAside1" :key="index">
                          <td>{{ item[0] }}</td>
                          <td>{{ item[1] }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </el-card>
                </el-col>
                <!-- 底部组件说明 -->
                <el-col :span="12">
                  <el-card>
                    <div slot="header">
                      <span>【cnap-footer】</span>
                    </div>
                    <table>
                      <thead>
                        <tr>
                          <th>支持插槽</th>
                          <th>说明</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in this.cnapFooter" :key="index">
                          <td>{{ item[0] }}</td>
                          <td>{{ item[1] }}</td>
                        </tr>
                        <tr>
                          <td>应用时必须配置国际化？</td>
                          <td>否</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </el-collapse-item>
          <el-collapse-item
            title="表格组件【cnap-rich-table】：表格公共组件，包含表单、表格、分页、弹出框部分"
            name="2"
          >
            <div>
              <!-- 表格组件说明 -->
              <el-row>
                <el-card class="flex-body">
                  <div slot="header">
                    <span>【cnap-rich-table】</span>
                  </div>
                  <table style="width: 49%; float: left">
                    <thead>
                      <tr>
                        <th>支持参数</th>
                        <th>说明</th>
                        <th>默认值</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in this.cnapRichTable0" :key="index">
                        <td>{{ item[0] }}</td>
                        <td v-html="item[1]"></td>
                        <td>{{ item[2] }}</td>
                      </tr>
                      <tr>
                        <td>应用时必须配置国际化？</td>
                        <td>否</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                  <table style="width: 49%; float: right">
                    <thead>
                      <tr>
                        <th>支持插槽</th>
                        <th>说明</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in this.cnapRichTable1" :key="index">
                        <td>{{ item[0] }}</td>
                        <td v-html="item[1]"></td>
                      </tr>
                    </tbody>
                  </table>
                  <table style="width: 49%; float: right; margin-top: 20px">
                    <thead>
                      <tr>
                        <th>内置方法</th>
                        <th>说明</th>
                        <th>参数</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in this.cnapRichTable2" :key="index">
                        <td>{{ item[0] }}</td>
                        <td v-html="item[1]"></td>
                        <td>{{ item[2] }}</td>
                      </tr>
                    </tbody>
                  </table>
                </el-card>
              </el-row>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import home from "./home";
export default home;
</script>

<style scoped>
@import url("./home.css");
</style>
