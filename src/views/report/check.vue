<template>
  <div>
    <div class="check" :class="{ hidden: !isShowCheck }">
      <div class="menu">
        <p class="warning">Xóa bản ghi</p>
        <div class="btnClose" @click="CloseCheck(), btnCloseOnClick()">
          <p>&#10540;</p>
        </div>
      </div>
      <div class="check-title">
        <div class="logo">
          <img src="../../assets/img/pop-danger.jpg" alt="" />
        </div>
        <div>
          <p class="atention">
            Bạn có thực sự muốn xóa {{ isDataCheck }} không?
          </p>
        </div>
      </div>

      <div class="dialog-footer">
        <div class="btn-close" @click="CloseCheck(), btnCloseOnClick()">
          Không
        </div>
        <button
          id="btnSave"
          class="btn-default"
          @click="acceptDeleteFunction()"
        >
          Có
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.check {
  box-sizing: border-box;
  position: absolute;
  width: 400px;
  height: 170px;
  top: 50px;
  left: calc(50% - 300px);
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid #eceef1;
}
.warning {
  margin: 24px;
  font-weight: bold;
}

.btnClose {
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

.btnClose p {
  font-size: large;
}

.check-title {
  display: flex;
  width: 100%;
  height: 100px;
}

.check-title .logo {
  width: 40px;
  height: 40px;
  margin-left: 20px;
  margin-top: 10px;
  border: 1px solid #d8d6d6;
  border-radius: 50%;
  overflow: hidden;
}

.check-title p {
  margin-left: 10px;
  margin-right: 24px;
}

.hidden {
  display: none;
}

.check-title img {
  width: 35px;
  height: 35px;
  margin-left: 2px;
}

.menu {
  background-color: #ffffff;
  height: 24px;
}
.atention {
  /* text-align: center; */
  font-size: 13px;
}
.dialog-close-button {
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: 0 4px 0 4px;
}

.dialog-close-button:hover {
  cursor: pointer;
}

.dialog-hide {
  display: none;
}

.btn-close:hover {
  background-color: #f4f4f4;
  border-radius: 5px;
}

.btnClose:hover {
  background-color: #f4f4f4;
}

.dialog-footer {
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0;
  height: 56px;
  background-color: #e4e4e4;
  border-radius: 0 0 4px 4px;
  left: 0;
  right: 0;
}

.btn-close {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 20px;
  z-index: 1;
  cursor: pointer;
  width: 80px;
  height: 40px;
}

.dialog-footer button {
  position: absolute;
  right: 24px;
  background-color: #2CA01C;
  width: 100px;
}
</style>
<script>
import axios from "axios";
export default {
  props: {
    isShowCheck: { type: Boolean, default: false },
    isDataCheck: { type: String },
    isIdDelete: { type: String, default: null },
  },
  methods: {
    CloseCheck() {
      this.isShowCheck = false;
      this.$emit("resetDelete");
    },
    acceptDeleteFunction() {
      this.$emit("resetDelete");
      axios
        .delete("https://localhost:44369/api/Employee/" + this.isIdDelete)
        .then(() => {
          // alert("Xóa thành công!");
          this.isShowCheck = false;
          this.btnCloseOnClick();
        })
        .catch(() => {
          console.log("Không xóa được nhân viên!");
          this.btnCloseOnClick();

        });
    },

    btnCloseOnClick() {
      this.$emit("hideDialogDelete");
      this.$emit("resetDelete");
    },
  },
};
</script>