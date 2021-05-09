<template>
  <div>
    <div
      id="dlgCustomerDetail"
      class="dialog"
      :class="{ 'dialog-hide': !isShow }"
    >
      <div class="model"></div>
      <div class="dialog-content">
        {{ matchId(this.employee) }}
        <div class="dialog-header">
          <div class="dialog-title">THÔNG TIN NHÂN VIÊN</div>
          <div class="dialog-close-button" @click="btnCloseOnClick()">
            &#x2715;
          </div>
          <input type="checkbox" name="" id="" />
          <p>Là khách hàng</p>
          <input type="checkbox" name="" id="" />
          <p>Là nhà cung cấp</p>
        </div>
        <div class="dialog-body">
          <div class="base">
            <div class="base-left">
              <div class="row1">
                <div class="m-col">
                  <label>Mã nhân viên (<a style="color: red">*</a>)</label>
                  <input
                    id="txtEmployeeCode"
                    type="text"
                    ref="empId"
                    style="width: 132px"
                    v-model="employee.EmployeeCode"
                    :class="{ warning: colorId }"
                  />
                </div>
                <div class="m-col">
                  <label style="margin-left: 10px"
                    >Họ và tên (<a style="color: red">*</a>)</label
                  >
                  <input
                    id="txtFullName"
                    type="text"
                    style="margin-bottom: 40px"
                    v-model="employee.fullName"
                    :class="{ warning: colorName }"
                  />
                </div>
              </div>
              <div class="row2">
                <label style="margin-left: 10px"
                  >Đơn vị (<a style="color: red">*</a>)</label
                >
                <select
                  id="cbDepartment"
                  style="margin-left: 10px; margin-bottom: 13px"
                  v-model="employee.departmentId"
                >
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

                <label style="margin-left: 10px">Chức danh</label>
                <input
                  id="txtEmployeeCode"
                  type="text"
                  ref="empId"
                  style="margin-left: 10px; margin-bottom: 20px"
                  v-model="employee.employeeCode"
                  :class="{ warning: colorId }"
                />
              </div>
            </div>
            <div class="base-right">
              <div class="right1">
                <div class="m-col">
                  <label>Ngày sinh</label>
                  <input
                    style="width: 172px"
                    id="dtDateOfBirth"
                    type="date"
                    v-model="employee.dateOfBirth"
                  />
                </div>
                <div class="m-col">
                  <label>Giới tính</label>
                  <select id="cbGender" v-model="employee.gender">
                    <option value="1">Nam</option>
                    <option value="0">Nữ</option>
                    <option value="2">Không xác định</option>
                  </select>
                </div>
              </div>
              <div class="right2">
                <div class="m-col">
                  <label
                    >Số CMTND</label
                  >
                  <input
                    style="width: 172px"
                    id="txtCMT"
                    type="text"
                    v-model="employee.identifyNumber"
                  />
                </div>
                <div class="m-col">
                  <label>Ngày cấp</label>
                  <input
                    style="width: 190px"
                    id="dtDatecreate"
                    type="date"
                    v-model="employee.identifyDate"
                  />
                </div>
              </div>
              <div class="right3">
                <div class="m-col">
                  <label>Nơi cấp</label>
                  <input
                    style="width: 382px"
                    id="txtPlace"
                    type="text"
                    v-model="employee.identifyRegion"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="deep">
            <div class="deep-on">
              <div class="m-col">
                <label>Địa chỉ</label>
                <input
                  id="txtaddress"
                  type="text"
                  ref="address"
                  v-model="employee.address"
                />
              </div>
            </div>
            <div class="deep-down">
              <div class="deep-phone">
                <div class="m-col">
                  <label>Điện thoại di động</label>
                  <input
                    style="width:180px"
                    id="txtPhone"
                    type="text"
                    v-model="employee.phoneNumber"
                  />
                </div>
                <div class="m-col">
                  <label>Điện thoại cố định</label>
                  <input
                    style="width:180px"
                    id="txtPhone"
                    type="text"
                    v-model="employee.homePhone"
                  />
                </div>
                <div class="m-col">
                  <label>Email (<a style="color: red">*</a>)</label>
                  <input
                    style="width:180px"
                    id="txtEmail"
                    type="email"
                    v-model="employee.email"
                  />
                </div>
              </div>
              <div class="deep-bank">
                <div class="m-col">
                  <label>Tên ngân hàng</label>
                  <input
                    style="width:180px"
                    id="txtPhone"
                    type="text"
                    v-model="employee.bankName"
                  />
                </div>
                <div class="m-col">
                  <label>Tài khoản ngân hàng</label>
                  <input
                    style="width:180px"
                    id="txtPhone"
                    type="text"
                    v-model="employee.bankAccount"
                  />
                </div>
                <div class="m-col">
                  <label>Chi nhánh</label>
                  <input
                    style="width:180px"
                    id="txtEmail"
                    type="email"
                    v-model="employee.agency"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="img">
            <br />
            <br />
            <img src="../../assets/img/default-avatar.jpg" alt="" />
            <p>Vui lòng chọn ảnh có định dạng .jpg, .jpeg, .png, .gif</p>
          </div>
          <div class="form">
            <p>A. THÔNG TIN CHUNG</p>
            <div class="border-div"></div>
            <div class="form1">
              <div class="m-col">
                <label>Mã nhân viên (<a style="color: red">*</a>)</label>
                <input
                  id="txtEmployeeCode"
                  type="text"
                  ref="empId"
                  v-model="employee.EmployeeCode"
                  :class="{ warning: colorId }"
                />
              </div>
              <div class="m-col">
                <label>Họ và tên (<a style="color: red">*</a>)</label>
                <input
                  id="txtFullName"
                  type="text"
                  v-model="employee.FullName"
                  :class="{ warning: colorName }"
                />
              </div>
            </div>
            <br /><br />
            <div class="form1">
              <div class="m-col">
                <label>Ngày sinh</label>
                <input
                  id="dtDateOfBirth"
                  type="date"
                  v-model="employee.DateOfBirth"
                />
              </div>
              <div class="m-col">
                <label>Giới tính</label>
                <select id="cbGender" v-model="employee.Gender">
                  <option value="1">Nam</option>
                  <option value="0">Nữ</option>
                  <option value="2">Không xác định</option>
                </select>
              </div>
            </div>
            <br /><br />
            <div class="form1">
              <div class="m-col">
                <label>Số CMTND/ Căn cước (<a style="color: red">*</a>)</label>
                <input
                  id="txtCMT"
                  type="text"
                  v-model="employee.IdentityNumber"
                  :class="{ warning: colorCMT }"
                />
              </div>
              <div class="m-col">
                <label>Ngày cấp</label>
                <input
                  id="dtDatecreate"
                  type="date"
                  v-model="employee.IdentityDate"
                />
              </div>
            </div>
            <br /><br />
            <div class="form1">
              <div class="m-col">
                <label>Nơi cấp</label>
                <input
                  id="txtPlace"
                  type="text"
                  v-model="employee.IdentityPlace"
                />
              </div>
            </div>
            <br /><br />
            <div class="form1">
              <div class="m-col">
                <label>Email (<a style="color: red">*</a>)</label>
                <input
                  id="txtEmail"
                  type="email"
                  v-model="employee.Email"
                  :class="{ warning: colorEmail }"
                />
              </div>
              <div class="m-col">
                <label>Số điện thoại (<a style="color: red">*</a>)</label>
                <input
                  id="txtPhone"
                  type="text"
                  v-model="employee.PhoneNumber"
                  :class="{ warning: colorPhone }"
                />
              </div>
            </div>
            <br /><br />
            <p>B. THÔNG TIN CÔNG VIỆC</p>
            <div class="border-div"></div>
            <div class="form1">
              <div class="m-col">
                <label>Vị trí</label>
                <select id="cbPosition" v-model="employee.PositionId">
                  <option value="3700cc49-55b5-69ea-4929-a2925c0f334d">
                    Giám đốc
                  </option>
                  <option value="148ed882-32b8-218e-9c20-39c2f00615e8">
                    Nhân viên Marketting
                  </option>
                  <option value="25c6c36e-1668-7d10-6e09-bf1378b8dc91">
                    Thu ngân
                  </option>
                </select>
              </div>
              <div class="m-col">
                <label>Phòng ban</label>
                <select id="cbDepartment" v-model="employee.DepartmentId">
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
              </div>
            </div>
            <br /><br />
            <div class="form1">
              <div class="m-col">
                <label>Mã số thuế cá nhân</label>
                <input
                  id="txtPersonalTaxCode"
                  type="text"
                  v-model="employee.PersonalTaxCode"
                />
              </div>
              <div class="m-col">
                <label>Mức lương cơ bản</label>
                <input id="txtSalary" type="text" v-model="employee.Salary" />
              </div>
            </div>
            <br /><br />
            <div class="form1">
              <div class="m-col">
                <label>Ngày gia nhập công ty</label>
                <input
                  id="dtDateOfBirth"
                  type="date"
                  v-model="employee.JoinDate"
                />
              </div>
              <div class="m-col">
                <label>Tình trạng công việc</label>
                <select id="cbGender">
                  <option value="1">Đang làm việc</option>
                </select>
              </div>
            </div>
          </div> -->
        </div>
        <br />
        <div class="dialog-footer">
          <div class="btn-close" @click="btnCloseOnClick()">Hủy</div>
          <button id="btnSave" class="btn-default" @click="btnSaveOnClick()">
            Lưu
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "../../../node_modules/axios";
export default {
  props: {
    idNewEmp: { type: String, default: "" },
    isShow: { type: Boolean, default: false },
    employee: { type: Object, default: null },
    formMode: { type: String, default: "add" },
    colorId: { type: Boolean, default: false },
    colorName: { type: Boolean, default: false },
    colorCMT: { type: Boolean, default: false },
    colorPhone: { type: Boolean, default: false },
    colorEmail: { type: Boolean, default: false },
    salary: { type: String, default: "" },
  },
  methods: {
    /**--------------------------------------
     * Gọi đến phương thức ẩn Dialog của cha
     * CreatedBy: NVMANH (31/03/2021)
     */
    btnCloseOnClick() {
      this.resetRedColor();
      this.$emit("hideDialog");
    },

    //ham gep id cho add employee
    matchId(employee) {
      if (this.idNewEmp != "" && this.formMode == "add") {
        employee.EmployeeCode = this.idNewEmp;
      }
    },

    check() {
      if (this.employee.EmployeeCode == "") {
        this.colorId = true;
      }
      if (this.employee.FullName == "") {
        this.colorName = true;
      }
      if (this.employee.Email == "") {
        this.colorEmail = true;
      }
      if (this.employee.PhoneNumber == "") {
        this.colorPhone = true;
      }
      if (this.employee.IdentityNumber == "") {
        this.colorCMT = true;
      }
    },

    checkBeforeSave() {
      if (this.employee.EmployeeCode != "") {
        this.colorId = false;
      }
      if (this.employee.FullName != "") {
        this.colorName = false;
      }
      if (this.employee.Email != "") {
        this.colorEmail = false;
      }
      if (this.employee.PhoneNumber != "") {
        this.colorPhone = false;
      }
      if (this.employee.IdentityNumber != "") {
        this.colorCMT = false;
      }
    },

    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " (VND)";
    },

    isEmailAddress(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    resetRedColor() {
      this.colorId = this.colorName = this.colorCMT = this.colorEmail = this.colorPhone = false;
    },

    btnSaveOnClick() {
      if (
        this.employee.EmployeeCode == "" ||
        this.employee.FullName == "" ||
        this.employee.PhoneNumber == "" ||
        this.employee.Email == "" ||
        this.employee.IdentityNumber == "" ||
        this.isEmailAddress(this.employee.Email) == false
      ) {
        alert("vui lòng nhập đầy đủ thông tin hoặc nhập đúng dạng Email!");
        this.check();
      } else {
        this.resetRedColor();
        if (this.employee.Salary == this.formatPrice(this.salary)) {
          this.employee.Salary = this.salary;
        }
        if (this.formMode == "add") {
          axios
            .post("http://api.manhnv.net/v1/Employees", this.employee)
            .then((res) => {
              console.log(res);
              this.$emit("hideDialog");
            })
            .catch((res) => {
              console.log(res);
            });
        } else {
          axios
            .put(
              "http://api.manhnv.net/v1/Employees/" + this.employee.EmployeeId,
              this.employee
            )
            .then((res) => {
              console.log(res);
              this.$emit("hideDialog");
            })
            .catch((res) => {
              console.log(res);
            });
        }
      }
    },
  },
  filters: {
    doiCachHienThi: function (value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND";
    },
  },
};
</script>
<style scoped>
.dialog-body {
  align-content: flex-start;
}

/**
// row
 */
.base {
  display: flex;
}

.row1 {
  display: flex;
  margin-top: 20px;
}
.base-left {
  width: 362px;
}
.row1 input {
  margin: 0 10px 0 20px;
}

.row1 :first-child {
  width: 142px;
}

.empId {
  width: 132px;
}

.row1 :last-child {
  width: 219px;
}

.row2 {
  margin-top: 20px;
}
.base-right {
  width: 382px;
  margin: 20px 0 0 20px;
}
.right1,
.right2 {
  display: flex;
  margin-bottom: 30px;
}

.deep-on {
  width: 765px;
}

.deep-on :only-child {
  width: 100%;
}

.deep-down {
  width: 602px;
  margin-top: 40px;
}

.deep-phone, .deep-bank {
  display: flex;
}

.deep-bank {
  margin-top: 40px;
}


/** */
.warning {
  border: 1px solid red;
}

.form {
  width: 600px;
  height: 540px;
}
.img {
  width: 200px;
  justify-content: center;
}
.img p {
  text-align: center;
}
.img img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 1px solid #bdbec0;
  margin-left: 4px;
  cursor: pointer;
}
.form1 {
  display: flex;
  justify-content: space-between;
}

.m-col {
  width: 280px;
  height: 40px;
}
.m-col input {
  margin-left: 10px;
  margin-right: 10px;
}

.m-col label {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 4px;
}

.m-col select {
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}

.btn-close {
  position: absolute;
  text-align: center;
  right: 15%;
  z-index: 1;
  cursor: pointer;
}

.border-div {
  width: 80px;
  height: 1px;
  border-top: 6px solid #019160;
  margin-left: 10px;
  margin-bottom: 10px;
}
.form p {
  margin-bottom: 5px;
  margin-left: 10px;
  font-weight: bold;
}

.dialog-header {
  display: flex;
}

.dialog-header input {
  margin: 2.5px 15px 0 15px;
  width: 15px;
  height: 15px;
}

.dialog-header p {
  color: #2d2d2d;
  margin-top: 2px;
  margin-bottom: 0px;
  font-size: 14px;
}
</style>