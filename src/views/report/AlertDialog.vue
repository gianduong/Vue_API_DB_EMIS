<template>
  <div class="check" :class="{ hidden: !show }">
    <div class="model"></div>
    <div class="menu">
      <p class="warning">THÔNG BÁO</p>
      <div class="btnClose" @click="CloseCheck()">
        <p>&#10540;</p>
      </div>
    </div>
    <div class="check-title">
      <div class="logo">
        <img src="../../assets/img/pop-danger.jpg" alt="" />
      </div>
      <div>
        <p class="atention">
          {{ msg }}
        </p>
      </div>
    </div>

    <div class="dialog-footer">
      <button id="btnSave" class="btn-default" @click="CloseCheck()">
        Đồng ý
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertDialog",
  props: {
    show: { type: Boolean, default: false },
    msg: String,
  },
  methods: {
    CloseCheck() {
      this.show = false;
    },
  },
};
</script>

<style scoped>
.dialog .model {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000;
  opacity: 0.4;
}

.check {
  box-sizing: border-box;
  position: absolute;
  width: 400px;
  height: 170px;
  top: 0px;
  left: 0;
  left: calc(50% - 300px);
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid #eceef1;
  z-index: 50;
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
  right: 35%;
  z-index: 1;
  cursor: pointer;
  width: 100px;
  height: 40px;
}

.dialog-footer button {
  position: absolute;
  right: 24px;
  background-color: #f55353;
  width: 100px;
}
</style>