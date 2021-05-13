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
          <img src="../../assets/icon/hoi.png" alt="" class="imghoi" />
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
                    v-model="employee.employeeCode"
                    :class="{ warning: colorId }"
                  />
                  <div
                    class="checkEmpCode"
                    v-bind:class="{ DisplayCode: !isNullCode }"
                  >
                    Gán mã tự động
                  </div>
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
                  <div
                    class="checkName"
                    style="width: 159px"
                    v-bind:class="{ DisplayName: !isNullName }"
                  >
                    {{ popAlert }}
                  </div>
                </div>
              </div>
              <div class="row2">
                <div
                  class="checkDe"
                  v-bind:class="{ DisplayDe: !isNullDepartment }"
                >
                  Đơn vị không được bỏ trống
                </div>
                <label style="margin-left: 10px"
                  >Đơn vị (<a style="color: red">*</a>)</label
                >
                <select
                  id="cbDepartment"
                  style="margin-left: 10px; margin-bottom: 13px"
                  v-model="employee.departmentId"
                  :class="{ warning: colorDepartment }"
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
                  id="txtpositionName"
                  type="text"
                  ref="empId"
                  style="margin-left: 10px; margin-bottom: 20px"
                  v-model="employee.positionName"
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
                  <label>Số CMTND</label>
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
                    style="width: 180px"
                    id="txtPhone"
                    type="text"
                    v-model="employee.phoneNumber"
                  />
                </div>
                <div class="m-col">
                  <label>Điện thoại cố định</label>
                  <input
                    style="width: 180px"
                    id="txtPhoneHome"
                    type="text"
                    v-model="employee.homePhone"
                  />
                </div>
                <div class="m-col">
                  <label>Email (<a style="color: red">*</a>)</label>
                  <input
                    style="width: 180px"
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
                    style="width: 180px"
                    id="txtBankName"
                    type="text"
                    v-model="employee.bankName"
                  />
                </div>
                <div class="m-col">
                  <label>Tài khoản ngân hàng</label>
                  <input
                    style="width: 180px"
                    id="txtAccount"
                    type="text"
                    v-model="employee.bankAccount"
                  />
                </div>
                <div class="m-col">
                  <label>Chi nhánh</label>
                  <input
                    style="width: 180px"
                    id="txtLocation"
                    type="email"
                    v-model="employee.agency"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="dialog-footer">
          <div class="btn-close" @click="btnCloseOnClick()">Cất</div>
          <button id="btnSave" class="btn-default" @click="btnSaveOnClick()">
            Cất và đóng
          </button>
        </div>
      </div>
    </div>

    <!-- Alert check /////////////////////////////////////////////////////////////////////////////////////////-->
    <div class="check1" :class="{ hidden1: !showAlert }">
      <div class="menu1">
        <p class="warning1">THÔNG BÁO</p>
        <div class="btnClose1" @click="CloseCheck()">
          <p>&#10540;</p>
        </div>
      </div>
      <div class="check-title1">
        <div class="logo1">
          <img src="../../assets/img/pop-danger.jpg" alt="" />
        </div>
        <div>
          <p class="atention1">
            {{ contentMsg }}
          </p>
        </div>
      </div>
      <hr class="hrCheck" />
      <div class="dialog-footer1">
        <button
          id="btnSave1"
          class="btn-default1 btn-default"
          @click="CloseCheck()"
        >
          Đồng ý
        </button>
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

    salary: { type: String, default: "" },
  },

  data() {
    return {
      showAlert: false,
      contentMsg: "",
      ErrorApi: false,
      popAlert: "",
      isNullName: false,
      isNullCode: false,
      isNullDepartment: false,
      colorId: false,
      colorName: false,
      colorDepartment: false,
    };
  },

  methods: {
    /**--------------------------------------
     * Gọi đến phương thức ẩn Dialog của cha
     * CreatedBy: NVMANH (31/03/2021)
     */
    btnCloseOnClick() {
      this.$emit("hideDialog");
      ((this.isNullCode == this.isNullDepartment) == this.isNullName) == false;
    },

    //ham gep id cho add employee
    matchId(employee) {
      if (this.idNewEmp != "" && this.formMode == "add") {
        employee.employeeCode = this.idNewEmp;
      }
    },

    CloseCheck() {
      this.showAlert = false;
    },

    checkNameNull() {
      if (this.employee.fullName == null || this.employee.fullName == "") {
        this.popAlert = "Tên không được phép để trống";
        this.colorName = true;
        this.isNullName = true;
      } else {
        this.isNullName = false;
        this.colorName = false;
      }
    },

    checkEmpCode() {
      if (this.employee.employeeCode == "") {
        this.colorId = true;
        this.isNullCode = true;
      } else {
        this.isNullCode = false;
        this.colorId = false;
      }
    },

    checkDe() {
      if (
        this.employee.departmentId == null ||
        this.employee.departmentId == ""
      ) {
        this.isNullDepartment = true;
        this.colorDepartment = true;
      } else {
        this.isNullDepartment = false;
        this.colorDepartment = false;
      }
    },

    isEmailAddress(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    checkCodeExists(value) {
      axios
        .get(
          "https://localhost:44369/api/Employee/CheckCodeExists?code=" + value
        )
        .then((res) => {
          console.log(res);
          this.ErrorApi = res.data;
          if (this.ErrorApi == true) {
            this.contentMsg =
              "Mã nhân viên <" +
              value +
              "> đã tồn tại trong hệ thống, vui lòng kiểm tra lại!";
            this.showAlert = true;
          }
        })
        .catch((res) => {
          console.log(res);
        });
    },

    btnSaveOnClick() {
      if (this.formMode == "add") {
        this.checkCodeExists(this.employee.employeeCode);
      }
      this.checkEmpCode();
      this.checkDe();
      this.checkNameNull();
      if (
        ((this.isNullCode == this.isNullDepartment) == this.isNullName) ==
        false
      ) {
        if (this.formMode == "add") {
          axios
            .post("https://localhost:44369/api/Employee", this.employee)
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
              "https://localhost:44369/api/Employee/" +
                this.employee.employeeId,
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
};
</script>
<style scoped>
.dialog-body {
  align-content: flex-start;
}

/**
// row/////////////////////////////////////////////////////////////////////////////////////////
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
  margin-top: 30px;
}

/**validate /////////////////////////////////////////////////////////////////////*/

.checkName {
  z-index: 1;
  background-color: #2c2b30;
  color: #e4e4e4;
  font-size: 11px;
  position: absolute;
  top: 127px;
  left: 176px;
}

.checkEmpCode {
  z-index: 1;
  background-color: #2c2b30;
  color: #e4e4e4;
  font-size: 11px;
  position: absolute;
  top: 127px;
  left: 34px;
  width: 100px;
}

.checkDe {
  z-index: 1;
  background-color: #2c2b30;
  color: #e4e4e4;
  font-size: 11px;
  position: absolute;
  top: 194px;
  left: 33px;
}

.DisplayCode {
  display: none;
}

.DisplayName {
  display: none;
}

.DisplayDe {
  display: none;
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

.deep-phone,
.deep-bank {
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
  right: 22%;
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

.imghoi {
  position: absolute;
  top: 7px;
  right: 5%;
}

/**alertDialog /////////////////////////////////////////////////////////////////////////*/
.check1 {
  box-sizing: border-box;
  position: absolute;
  width: 405px;
  height: 185px;
  top: 27px;
  left: 0;
  left: calc(50% - 300px);
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid #858585;
  z-index: 2;
}

.warning1 {
  margin: 10px 24px 24px 24px;
}

.btnClose1 {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btnClose1 p {
  font-size: large;
}

.check-title1 {
  display: flex;
  width: 100%;
  height: 100px;
}

.check-title1 .logo1 {
  width: 40px;
  height: 40px;
  margin-left: 20px;
  margin-top: 10px;
  border: 1px solid #d8d6d6;
  border-radius: 50%;
  overflow: hidden;
}

.check-title1 p {
  margin-left: 10px;
  margin-right: 24px;
}

.hidden1 {
  display: none;
}

.check-title1 img {
  width: 35px;
  height: 35px;
  margin-left: -2px;
}

.menu1 {
  background-color: #ffffff;
  height: 24px;
}
.atention1 {
  /* text-align: center; */
  font-size: 13.5px;
}

.dialog-close-button1:hover {
  cursor: pointer;
}

.dialog-hide1 {
  display: none;
}

.btn-close1:hover {
  background-color: #f4f4f4;
  border-radius: 5px;
}

.btnClose1:hover {
  background-color: #f4f4f4;
}

.hrCheck {
  border: 1px solid #2d2d2d;
  margin-left: 20px;
  margin-top: 0px;
  position: absolute;
  top: 112px;
  z-index: 1;
  width: 355px;
}

.dialog-footer1 {
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0;
  height: 56px;
  background-color: #ffffff;
  border-radius: 0 0 4px 4px;
  left: 0;
  right: 0;
}

.btn-close1 {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 35%;
  z-index: 1;
  cursor: pointer;
  width: 100px;
  height: 40px;
}

.dialog-footer1 button {
  position: absolute;
  right: 24px;
  margin-bottom: 10px;
  background-color: #2ba01e;
  width: 100px;
}
</style>