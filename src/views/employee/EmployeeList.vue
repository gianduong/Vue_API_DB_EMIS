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
          v-model="this.department"
          @click="loadWithDepartment(this.department)"
        >
          <option value="">Thực hiện hàng loạt</option>
          <option value="469b3ece-744a-45d5-957d-e8c757976496">
            Phòng nhân sự
          </option>
          <option value="4e272fc4-7875-78d6-7d32-6a1673ffca7c">
            Phòng Công nghệ
          </option>
          <option value="17120d02-6ab5-3e43-18cb-66948daf6128">
            Phòng đào tạo
          </option>
          <option value="142cb08f-7c31-21fa-8e90-67245e8b283e">
            Phòng Marketting
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
          <div class="mi mi-24 mi-excel__nav"></div>
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
              <!-- <th>CHỨC NĂNG</th> -->
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="emp in employees"
              :key="emp.EmployeeId"
              @dblclick="trOnDblClick(emp.EmployeeId)"
              @click="getEmpID(emp.EmployeeId), (employeeName = emp.FullName)"
            >
              <td><input type="checkbox" /></td>
              <td>{{ emp.employeeCode }}</td>
              <td>{{ emp.fullName }}</td>
              <td>{{ emp.gender | fomatGender }}</td>
              <td>{{ emp.dateOfBirth | formatDate }}</td>
              <td>{{ emp.identifyNumber }}</td>
              <td>{{ emp.positionName }}</td>
              <td>Phòng kinh doanh</td>
              <td>{{ emp.bankAccount }}</td>
              <td>{{ emp.bankName }}</td>
              <td>{{ emp.agency }}</td>
              <!-- <td>Đang thử việc</td> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="paging">
      <div data-v-a72348a4="" class="paging-bar">
        <div data-v-a72348a4="" class="paging-record-info">
          Tổng số: <b data-v-a72348a4="">1000</b> bản ghi
        </div>
        <div data-v-a72348a4="" class="paging-option">
          <!-- <div data-v-a72348a4="" class="btn-select-page m-btn-firstpage"></div>
          <div data-v-a72348a4="" class="btn-select-page m-btn-prev-page"></div> -->
          <div data-v-a72348a4="" class="m-btn-list-page">
            <button data-v-a72348a4="" class="btn-pagenumber non-color">
              &laquo;
            </button>
            <button data-v-a72348a4="" class="btn-pagenumber non-color">
              ❮
            </button>
            <button
              data-v-a72348a4=""
              class="btn-pagenumber btn-pagenumber-selected"
            >
              1</button
            ><button data-v-a72348a4="" class="btn-pagenumber">2</button
            ><button data-v-a72348a4="" class="btn-pagenumber">3</button
            ><button data-v-a72348a4="" class="btn-pagenumber">4</button>
            <button data-v-a72348a4="" class="btn-pagenumber non-color">
              ❯
            </button>
            <button data-v-a72348a4="" class="btn-pagenumber non-color">
              &raquo;
            </button>
          </div>
          <!-- <div data-v-a72348a4="" class="btn-select-page m-btn-next-page"></div>
          <div data-v-a72348a4="" class="btn-select-page m-btn-lastpage"></div> -->
          <!-- <paginate
            v-model="page"
            :page-count="20"
            :page-range="3"
            :margin-pages="2"
            :click-handler="clickCallback"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
            :page-class="'page-item'"
          >
          </paginate> -->
        </div>
        <div data-v-a72348a4="" class="paging-record-option">
          <select class="select-banGhi">
            <option value="">10 bản ghi trên một trang</option>
            <option value="469b3ece-744a-45d5-957d-e8c757976496">
              20 bản ghi trên một trang
            </option>
            <option value="4e272fc4-7875-78d6-7d32-6a1673ffca7c">
              30 bản ghi trên một trang
            </option>
            <option value="17120d02-6ab5-3e43-18cb-66948daf6128">
              50 bản ghi trên một trang
            </option>
            <option value="142cb08f-7c31-21fa-8e90-67245e8b283e">
              100 bản ghi trên một trang
            </option>
          </select>
        </div>
      </div>
    </div>
    <CustomerDetail
      :isShow="isShowDialogDetail"
      :employee="selectedEmployee"
      :formMode="dialogFormMode"
      @hideDialog="hideDialog"
      :colorCMT="colorCMT"
      :colorId="colorId"
      :colorName="colorName"
      :colorEmail="colorEmail"
      :colorPhone="colorPhone"
      :salary="salary"
      :idNewEmp="idNewEmp"
    />
    <checkDelete
      :isShowCheck="isShowDialogDelete"
      :isIdDelete="idDelete"
      :isDataCheck="employeeName"
      @hideDialogDelete="hideDialogDelete"
    />
  </div>
</template>
<script>
// var idcustomer;
import CustomerDetail from "./EmployeeDetail.vue";
import checkDelete from "../report/check.vue";
// import Paginate from 'vuejs-paginate'
import axios from "axios";
import moment from "moment";
export default {
  components: {
    CustomerDetail,
    checkDelete,
    // Paginate,
  },

  created() {
    // load dữ liệu cho trang
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
  props: {
    changeColor: { type: Boolean, default: false },
  },

  // computed: {
  //   searchByCode:function(){
  //     axios
  //       .get("https://localhost:44369/api/Employee/search?name=Nguyễn Giản Dương")
  //       .then((res) => {
  //         console.log(res);
  //         this.employees = res.data;
  //       })
  //       .catch((res) => {
  //         console.log(res);
  //       });
  //   },
  // },

  methods: {
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

    
    /**--------------------------------------
     * Hiển thị Dialog của cha
     * CreatedBy: NVMANH (31/03/2021)
     */
    btnAddOnClick() {
      this.getIdlast();
      this.colorName = this.colorCMT = this.colorEmail = this.colorPhone = true;
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
      this.colorId = this.colorName = this.colorCMT = this.colorEmail = this.colorPhone = false;
      this.idNewEmp = "";
      this.loadData();
    },

    hideDialogDelete() {
      this.isShowDialogDelete = false;
      this.idDelete = "";
      this.employeeID = "";
      this.loadData();
    },

    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " (VND)";
    },

    trOnDblClick(employeeID) {
      // Lấy id của bản ghi được chọn:
      // this.idNewEmp = "";
      axios
        .get("https://localhost:44369/api/Employee" + employeeID)
        .then((res) => {
          this.selectedEmployee = res.data;
          this.salary = this.selectedEmployee.Salary;
          this.selectedEmployee.Salary = this.formatPrice(
            this.selectedEmployee.Salary
          );
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

    loadWithDepartment(department) {
      alert(department);
      // if (department == "") {
      this.loadData();
      // } else {
      //   axios
      //     .get(
      //       "http://api.manhnv.net/v1/Employees/Filter?departmentId=" +
      //         department
      //     )
      //     .then((res) => {
      //       this.selectedEmployee = res.data;
      //       console.log(res);
      //     })
      //     .catch((res) => {
      //       console.log(res);
      //     });
      // }
    },

    loadWithPosition(position) {
      alert(position);
      // if (position == "") {
      this.loadData();
      // } else {
      //   axios
      //     .get(
      //       "http://api.manhnv.net/v1/Employees/Filter?positionId=" + position
      //     )
      //     .then((res) => {
      //       this.selectedEmployee = res.data;
      //       console.log(res);
      //     })
      //     .catch((res) => {
      //       console.log(res);
      //     });
      // }
    },

    getEmpID(employeeID) {
      this.EmployeeId = employeeID;
      this.idDelete = employeeID;
    },

    btnDeleteOnClick() {
      if (this.idDelete != "") {
        this.isShowDialogDelete = true;
      }
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
  },

  watch: {
    search: function(value) {
      if(value != "") {
        this.searchData();
      }
    } 
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
      colorId: false,
      colorName: false,
      colorCMT: false,
      colorPhone: false,
      colorEmail: false,
      salary: "",
      idNewEmp: "",
      search: "",
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
      if(value == 0) {
        return "Không xác định"
      }
      else if(value == 1){
        return "Nữ"
      }
      else{
        return "Nam"
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

.table-employee {
  background-color: #ffffff;
  position: relative;
  width: 1140px;
  height: 500px;
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
  z-index: 1;
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