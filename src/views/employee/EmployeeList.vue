<template>
  <div>
    <div class="page-title">
      <div class="page-left">Nhân viên</div>
      <div class="page-right">
        <div class="status">
          <img src="../../assets/icon/tienich.png" alt="" />
        </div>
        <button class="btn-default btn-Add" @click="btnAddOnClick()">
          Thêm
        </button>
        <button class="btn-default btn-excel">
          <img class="img1" src="../../assets/icon/gach-excel.png" alt="" />
          <img class="img2" src="../../assets/icon/excel.png" alt="" />
        </button>
      </div>
    </div>
    <div class="table-employee">
      <div class="toolbar">
        <select
          name="toolbar-action"
          class="toolbar-action"
          v-model="department"
          @click="SearchByDepartmentId()"
        >
          <option value="">Thực hiện hàng loạt</option>
          <option value="35e773ea-5d44-2dda-26a8-6d513e380bde">
            Phòng nghiên cứu
          </option>
          <option value="3f8e6896-4c7d-15f5-a018-75d8bd200d7c">
            Phòng Công nghệ
          </option>
          <option value="78aafe4a-67a7-2076-3bf3-eb0223d0a4f7">
            Phòng đào tạo
          </option>
          <option value="45ac3d26-18f2-18a9-3031-644313fbb055">
            Phòng kinh doanh
          </option>
          <option value="7c4f14d8-66fb-14ae-198f-6354f958f4c0">
            Phòng kế toán
          </option>
        </select>
        <div class="tb-option">
          <input
            type="text"
            class="input-search"
            v-model="search"
            placeholder="Tìm theo mã, tên nhân viên"
          />
          <div class="mi mi-24 mi-refresh" @click="loadData()"></div>
          <div class="mi mi-24 mi-excel__nav" @click="btnDeleteOnClick()"></div>
          <div class="mi mi-24 mi-setting__list"></div>
        </div>
        <!-- <button class="btn-refresh" @click="loadData()"></button>
        <button class="btndelete" @click="btnDeleteOnClick()">
          <img src="../../assets/img/delete.jpg" alt="" />
        </button> -->
      </div>
      <div class="grid">
        <table id="tblListCustomer" class="table" width="100%" border="0">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>MÃ NHÂN VIÊN</th>
              <th>TÊN NHÂN VIÊN</th>
              <th>GIỚI TÍNH</th>
              <th>NGÀY SINH</th>
              <th>SỐ CMND</th>
              <th>CHỨC DANH</th>
              <th>TÊN ĐƠN VỊ</th>
              <th>SỐ TÀI KHOẢN</th>
              <th>TÊN NGÂN HÀNG</th>
              <th>CHI NHÁNH</th>
              <th>CHỨC NĂNG</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="emp in employees"
              :key="emp.employeeId"
              @dblclick="trOnDblClick(emp.employeeId)"
              @click="
                getEmpID(emp.employeeId), (employeeName = emp.employeeCode)
              "
            >
              <td><input type="checkbox" /></td>
              <td>{{ emp.employeeCode }}</td>
              <td>{{ emp.fullName }}</td>
              <td>{{ emp.gender | fomatGender }}</td>
              <td>{{ emp.dateOfBirth | formatDate }}</td>
              <td>{{ emp.identifyNumber }}</td>
              <td>{{ emp.positionName }}</td>
              <td>{{ emp.departmentId | fomatDepartment }}</td>
              <td>{{ emp.bankAccount }}</td>
              <td>{{ emp.bankName }}</td>
              <td>{{ emp.agency }}</td>
              <td>
                <div class="db-option">
                  <div class="tbl-update" @click="trOnDblClick(emp.employeeId)">
                    Sửa
                  </div>
                  <select
                    name=""
                    id=""
                    class="tbl-option"
                    v-model="deleteCheck"
                    v-on="btnDeleteOnClick()"
                  >
                    <option value="1">Nhân bản</option>
                    <option value="2" style="color: green">Xóa</option>
                    <option value="3">Ngừng sử dụng</option>
                  </select>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="paging">
      <div data-v-a72348a4="" class="paging-bar">
        <div data-v-a72348a4="" class="paging-record-info">
          Nhân viên: <b data-v-a72348a4="">{{ employees.length*(PageIndex -1) }} - {{ employees.length*PageIndex }}/{{maxEmp}}</b> bản ghi
        </div>
        <div data-v-a72348a4="" class="paging-option" style="margin-top: 15px">
          <!-- <div data-v-a72348a4="" class="btn-select-page m-btn-firstpage"></div>
          <div data-v-a72348a4="" class="btn-select-page m-btn-prev-page"></div> -->
          <div data-v-a72348a4="" class="m-btn-list-page">
            <button data-v-a72348a4="" class="btn-pagenumber non-color" @click="(PageIndex = 1), indexCount = 5, paging()">
              &laquo;
            </button>
            <button
              data-v-a72348a4=""
              class="btn-pagenumber non-color"
              @click="downCountPage(), paging()"
            >
              ❮
            </button>
            <button
              data-v-a72348a4=""
              class="btn-pagenumber btn-pagenumber-selected"
              @click="(PageIndex = 1), paging()"
            >
              1</button
            ><button
              data-v-a72348a4=""
              class="btn-pagenumber"
              @click="(PageIndex = 2), paging()"
            >
              2</button
            ><button
              data-v-a72348a4=""
              class="btn-pagenumber"
              @click="(PageIndex = 3), paging()"
              :class="{hiddencheck: checkcheck3}"
            >
              3</button
            ><button
              data-v-a72348a4=""
              class="btn-pagenumber"
              @click="(PageIndex = 4), paging()"
              :class="{hiddencheck: checkcheck4}"
            >
              4
            </button>
            <button
            style="border:none"
            :class="{hiddencheck: checkcheckn}"
            >...</button>

            <button
              data-v-a72348a4=""
              class="btn-pagenumber"
              @click="(PageIndex = indexCount), paging()"
              :class="{hiddencheck: checkcheckn}"
            >
              {{indexCount}}
            </button>
            <button
            style="border:none"
            :class="{hiddencheck: checkcheckn}"
            >...</button>

            <button
              data-v-a72348a4=""
              class="btn-pagenumber"
              @click="(PageIndex = maxIndexCount), paging()"
              :class="{hiddencheck: checkcheckn}"
            >
              {{maxIndexCount}}
            </button>
            <button
              data-v-a72348a4=""
              class="btn-pagenumber non-color"
              @click="(PageIndex += 1), upCountPage(), paging()"
              :class="{hiddencheck: checkcheckn}"
            >
              ❯
            </button>
            <button data-v-a72348a4="" class="btn-pagenumber non-color" @click="(PageIndex = maxIndexCount), paging()">
              &raquo;
            </button>
          </div>
          <!-- <div data-v-a72348a4="" class="btn-select-page m-btn-next-page"></div>
          <div data-v-a72348a4="" class="btn-select-page m-btn-lastpage"></div> -->
          <!-- <jw-pagination
            :items="exampleItems"
            @changePage="onChangePage"
          ></jw-pagination> -->
        </div>
        <div data-v-a72348a4="" class="paging-record-option">
          <select
            class="select-banGhi"
            v-model="selectedPaging"
            @click="selectPaging()"
          >
            <option value="0">10 bản ghi trên một trang</option>
            <option value="1">20 bản ghi trên một trang</option>
            <option value="2">30 bản ghi trên một trang</option>
            <option value="3">50 bản ghi trên một trang</option>
            <option value="4">100 bản ghi trên một trang</option>
          </select>
        </div>
      </div>
    </div>
    <CustomerDetail
      :isShow="isShowDialogDetail"
      :employee="selectedEmployee"
      :formMode="dialogFormMode"
      @hideDialog="hideDialog"
      :salary="salary"
      :idNewEmp="idNewEmp"
    />
    <checkDelete
      :isShowCheck="isShowDialogDelete"
      :isIdDelete="idDelete"
      :isDataCheck="employeeName"
      @hideDialogDelete="hideDialogDelete"
      @resetDelete="resetDelete"
    />
  </div>
</template>
<script>
// const exampleItems = [...Array(150).keys()].map((i) => ({
//   id: i + 1,
//   name: "Item " + (i + 1),
// }));
// var idcustomer;
import CustomerDetail from "./EmployeeDetail.vue";
import checkDelete from "../report/check.vue";
// import Paginate from "vuejs-paginate";
// import JwPagination from "jw-vue-pagination";
import axios from "axios";
import moment from "moment";
export default {
  components: {
    CustomerDetail,
    checkDelete,
    // Paginate,
    // JwPagination,
  },

  created() {
    // load dữ liệu cho trang
    axios
      .get("https://localhost:44369/api/Employee")
      .then((res) => {
        console.log(res);
        this.employees = res.data;
        this.maxEmp = this.employees.length;
      })
      .catch((res) => {
        console.log(res);
      });
  },
  props: {
    changeColor: { type: Boolean, default: false },
    checkcheck3: {type: Boolean, default: false},
    checkcheck4: {type: Boolean, default: false},
    checkcheckn: {type: Boolean, default: true},
  },

  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },
    loadData() {
      axios
        .get("https://localhost:44369/api/Employee")
        .then((res) => {
          console.log(res);
          this.employees = res.data;
        })
        .catch((res) => {
          console.log(res);
        });
    },

    upCountPage(){
      if(this.indexCount >= 5 && this.indexCount < this.maxIndexCount - 1){
        this.indexCount += 1; 
      }
    },

    downCountPage(){
      if(this.indexCount > 5){
        this.indexCount -= 1; 
      }
      if(this.PageIndex > 1){
        this.PageIndex -= 1;
      }
    },

    selectPaging() {
      this.indexCount = 5;
      if (this.selectedPaging == "0") {
        this.PageSize = 10;
        this.maxIndexCount = Math.floor(this.maxEmp/this.PageSize);
        this.checkcheckn = false;
        this.checkcheck3 = this.checkcheck4 = false;
      } else if (this.selectedPaging == "1") {
        this.maxIndexCount = Math.floor(this.maxEmp/this.PageSize);
        this.PageSize = 20;
        this.checkcheckn = false;
        this.checkcheck3 = this.checkcheck4 = false;
      } else if (this.selectedPaging == "2") {
        this.maxIndexCount = Math.floor(this.maxEmp/this.PageSize);
        this.PageSize = 30;
        this.checkcheckn = false;
        this.checkcheck3 = this.checkcheck4 = false;
      } else if (this.selectedPaging == "3") {
        this.PageSize = 50;
        this.checkcheckn = true;
        this.checkcheck3 = this.checkcheck4 = false;
      } else {
        this.PageSize = 100;
        this.checkcheckn = true;
        this.checkcheck3 = this.checkcheck4 = true;
      }
    },

    paging() {
      axios
        .get(
          "https://localhost:44369/api/Employee/Paging?pageIndex=" +
            this.PageIndex +
            "&pageSize=" +
            this.PageSize
        )
        .then((res) => {
          console.log(res);
          this.employees = res.data;
        })
        .catch((res) => {
          console.log(res);
        });
    },
    /**--------------------------------------
     * Hiển thị Dialog của cha
     * CreatedBy: NVMANH (31/03/2021)
     */
    btnAddOnClick() {
      this.getIdlast();
      this.selectedEmployee = {};
      this.isShowDialogDetail = true;
      this.dialogFormMode = "add";
    },
    /**--------------------------------------
     *  ẩn Dialog chi tiết
     * CreatedBy: NVMANH (31/03/2021)
     */
    hideDialog() {
      this.isShowDialogDetail = false;
      this.idNewEmp = "";
      this.loadData();
    },

    hideDialogDelete() {
      this.isShowDialogDelete = false;
      this.idDelete = "";
      this.employeeID = "";
      this.loadData();
    },

    // formatPrice(value) {
    //   let val = (value / 1).toFixed(0).replace(".", ",");
    //   return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " (VND)";
    // },

    trOnDblClick(employeeID) {
      // Lấy id của bản ghi được chọn:
      // this.idNewEmp = "";
      axios
        .get("https://localhost:44369/api/Employee/" + employeeID)
        .then((res) => {
          this.selectedEmployee = res.data;
          console.log(res);
        })
        .catch((res) => {
          console.log(res);
        });
      // Thực hiện bindding dữ liệu lên form chi tiết:
      // Cập nhật trạng thái form:
      this.dialogFormMode = "edit";
      // Hiển thị Dialog chi tiết:
      this.isShowDialogDetail = true;
    },

    getIdlast() {
      axios
        .get("https://localhost:44369/api/Employee/getCode")
        .then((res) => {
          console.log(res);
          this.idNewEmp = res.data;
        })
        .catch((res) => {
          console.log(res);
        });
    },

    getEmpID(employeeID) {
      this.EmployeeId = employeeID;
      this.idDelete = employeeID;
    },

    btnDeleteOnClick() {
      if (this.deleteCheck == "2") {
        if (this.idDelete != "") {
          this.isShowDialogDelete = true;
        }
      }
    },

    resetDelete() {
      this.deleteCheck = 10;
    },

    searchData() {
      axios
        .get("https://localhost:44369/api/Employee/search?name=" + this.search)
        .then((res) => {
          console.log(res);
          this.employees = res.data;
        })
        .catch((res) => {
          console.log(res);
        });
    },

    SearchByDepartmentId() {
      if (this.department != "" && this.department != null) {
        axios
          .get(
            "https://localhost:44369/api/Employee/searchByDepartmentId?name=" +
              this.department
          )
          .then((res) => {
            console.log(res);
            this.employees = res.data;
          })
          .catch((res) => {
            console.log(res);
          });
      } else {
        this.loadData();
      }
    },
  },

  watch: {
    search: function (value) {
      if (value != "") {
        this.searchData();
      }
    },
  },

  data() {
    return {
      page: 10,
      employeeID: "",
      idDelete: "",
      dialogFormMode: "add",
      isShowDialogDetail: false,
      employeeName: "",
      isShowDialogDelete: false,
      dataEmployeeName: "",
      selectedEmployee: {},
      employees: [],
      department: "",
      position: "",
      salary: "",
      idNewEmp: "",
      search: "",
      PageIndex: 1,
      PageSize: 10,
      selectedPaging: "",
      // exampleItems,
      // pageOfItems: [],
      deleteCheck: 10,
      indexCount: 5,
      maxIndexCount: 0,
      maxEmp:0,
    };
  },

  filters: {
    doiCachHienThi(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND";
    },
    formatDate(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY");
      }
    },
    fomatGender(value) {
      if (value == 0) {
        return "Khác";
      } else if (value == 1) {
        return "Nam";
      } else {
        return "Nữ";
      }
    },
    fomatDepartment(value) {
      if (value == "78aafe4a-67a7-2076-3bf3-eb0223d0a4f7") {
        return "Phòng đào tạo";
      } else if (value == "45ac3d26-18f2-18a9-3031-644313fbb055") {
        return "Phòng kinh doanh";
      } else if (value == "7c4f14d8-66fb-14ae-198f-6354f958f4c0") {
        return "Phòng kế toán";
      } else if (value == "3f8e6896-4c7d-15f5-a018-75d8bd200d7c") {
        return "Phòng công nghệ";
      } else {
        return "Phòng nghiên cứu";
      }
    },
  },
};
</script>

<style scoped>
.page-title {
  height: 40px;
  display: flex;
  align-items: center;
}

::-webkit-scrollbar {
  width: 0px;
}
/**Paginate */
.paginateOne {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  font-size: 15px;
  margin-bottom: 10px;
}

.paginateOne .pagiItem {
  margin: 0 5px 0 5px;
}

.hiddencheck{
  display: none;
}

/**
/// chuc nang
 */
.db-option {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tbl-update {
  font-size: 13px;
  margin-right: 10px;
  color: #0071b8;
}

.tbl-option {
  width: 0px;
  height: 20px;
  padding-left: 2px;
  margin-top: 0;
}

.table-employee {
  background-color: #ffffff;
  position: relative;
  width: 1295px;
  height: 580px;
  max-height: 700px;
  top: 0;
  left: 0;
  bottom: 0;
}

::placeholder {
  font-style: italic;
}

.toolbar-action {
  width: 200px;
  height: 35px;
  border-radius: 25px;
  border: 2px solid #b1b2b3;
}

.page-title .page-right {
  position: absolute;
  right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.page-title .page-left {
  font-size: 24px;
  font-weight: bold;
}

.paging-option paginate {
  display: flex;
}

.toolbar {
  margin-top: 26px;
  /* margin-left: 15px; */
  margin-right: 16px;
  display: flex;
  /* width: 60%; */
  align-items: center;
  height: 42px;
  padding: 14px 0 14px 10px;
  /* background-color: #ff0000; */
}

.toolbar input {
  width: 240px;
  height: 35px;
}

.grid {
  position: absolute;
  right: 24px;
  left: 15px;
  bottom: 60px;
  top: 70px;
  overflow-y: auto;
}

.paging {
  position: absolute;
  bottom: 0;
  height: 60px;
  left: 24px;
  right: 24px;
}

.m-col {
  width: 50%;
  float: left;
  padding: 0 4px;
  box-sizing: border-box;
}

.m-row {
  width: 100%;
  display: flex;
  margin-top: 8px;
  position: relative;
}

.m-row label {
  display: block;
}

.m-row input,
select {
  margin-top: 4px;
}

.setbackground {
  background-color: hotpink;
}

.non-color {
  background-color: #ffffff;
}

.btndelete {
  width: 40px;
  height: 40px;
  position: absolute;
  right: 64px;
  margin-right: 8px;
  border: 1px solid #bbbbbb;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  display: flex;
  text-align: center;
  align-items: center;
  overflow: hidden;
  /* background-image: url('../../assets/img/delete.jpg');
    background-repeat:no-repeat;
    background-size: auto;
    background-position: center; */
}
.btndelete img {
  width: 40px;
  height: 40px;
  margin-left: -6px;
  margin-top: 4px;
}
.btndelete:hover {
  background-color: red;
}

.status {
  display: flex;
  width: 90px;
  height: 40px;
  margin: 10px 10px 10px 15px;
  justify-content: center;
  align-items: center;
  border: 1px solid #8d9096;
  border-radius: 25px;
  font-size: 13px;
  cursor: pointer;
}

.status img {
  margin: 0 20px 0 15px;
}

.btn-Add {
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  background-color: #2ca01c;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.btn-Add:hover {
  background-color: #35bf22;
}

.btn-excel {
  border-bottom-right-radius: 25px;
  border-top-right-radius: 25px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: #2ca01c;
  width: 50px;
  padding: 0;
  display: flex;
}

.btn-excel .img1 {
  margin-right: 17px;
  margin-top: 7px;
}

.btn-excel .img2 {
  margin-top: 12px;
  margin-left: 0px;
  margin-right: 11px;
}

.mi-24 {
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  margin: 0 10px 0 10px;
}

/*
lua chon tren tb
*/
.tb-option {
  position: absolute;
  right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mi {
  background: url("../../assets/img/Sprites.64af8f61.svg") no-repeat;
  cursor: pointer;
}

.mi-setting__list {
  background-position: -88px -200px;
}
.mi-setting__list:hover {
  background-position: -88px -256px;
}

.mi-excel__nav {
  background-position: -704px -200px;
}

.mi-excel__nav:hover {
  background-position: -704px -256px;
}

.mi-refresh {
  background-position: -423px -201px;
}

.mi-refresh:hover {
  background-position: -1097px -88px;
}

.select-banGhi {
  width: 200px;
  height: 30px;
  padding-left: 5px;
  font-size: 13px !important;
}



</style>