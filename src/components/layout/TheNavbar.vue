<template>
  <div id="navbar">
    <div class="logo-box">
      <img src="../../assets/icon/logoNavbar.png" alt="">
    </div>
    <div class="navbar-box">
      <a class="navbar-item">
        <div class="navbar-icon icon-dashboard"></div>
        <div class="navbar-text">Tổng quan</div>
      </a>
      <router-link class="navbar-item" to="/employee">
        <div class="navbar-icon icon-tienmat"></div>
        <div class="navbar-text">Tiền mặt</div>
      </router-link>
      <router-link class="navbar-item" to="/employee">
        <div class="navbar-icon icon-tiengui"></div>
        <div class="navbar-text">Tiền gửi</div>
      </router-link>
      <router-link class="navbar-item" to="/report">
        <div class="navbar-icon icon-muahang"></div>
        <div class="navbar-text">Mua hàng</div>
      </router-link>
      <router-link class="navbar-item" to="/report">
        <div class="navbar-icon icon-banhang"></div>
        <div class="navbar-text">Bán hàng</div>
      </router-link>
      <router-link class="navbar-item" to="/report">
        <div class="navbar-icon icon-hoadon"></div>
        <div class="navbar-text">Quản lý hóa đơn</div>
      </router-link>
      <router-link class="navbar-item" to="/report">
        <div class="navbar-icon icon-kho"></div>
        <div class="navbar-text">Kho</div>
      </router-link>
      <router-link class="navbar-item" to="/report">
        <div class="navbar-icon icon-congcu"></div>
        <div class="navbar-text">Công cụ dụng cụ</div>
      </router-link>
      <router-link class="navbar-item" to="/report">
        <div class="navbar-icon icon-taisan"></div>
        <div class="navbar-text">Tài sản cố định</div>
      </router-link>
      <router-link class="navbar-item" to="/report">
        <div class="navbar-icon icon-thue"></div>
        <div class="navbar-text">Thuế</div>
      </router-link>
      <router-link class="navbar-item" to="/report">
        <div class="navbar-icon icon-giathanh"></div>
        <div class="navbar-text">Giá thành</div>
      </router-link>
      <router-link class="navbar-item" to="/report">
        <div class="navbar-icon icon-tonghop"></div>
        <div class="navbar-text">Tổng hợp</div>
      </router-link>
      <router-link class="navbar-item" to="/report">
        <div class="navbar-icon icon-ngansach"></div>
        <div class="navbar-text">Ngân sách</div>
      </router-link>
      <router-link class="navbar-item" to="/report">
        <div class="navbar-icon icon-baocao"></div>
        <div class="navbar-text">Báo cáo</div>
      </router-link>
      <router-link class="navbar-item" to="/report">
        <div class="navbar-icon icon-taichinh"></div>
        <div class="navbar-text">Phân tích tài chính</div>
      </router-link>
    </div>
  </div>
</template>
<style scoped>
#navbar {
  width: 175px;
  height: 100vh;
  border-right: 1px solid #dedede;
  background-color: #393A3E;
}
/**logo */
.mi-sidebar-dashboard {
    background-position: -30px -1628px;
}
.mi-24 {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
}
.mi {
    background: url("../../assets/img/Sprites.64af8f61.svg") no-repeat;
    cursor: pointer;
}

.mi-sidebar-dashboard[data-v-31c3492c] {
    background-position: -30px -1628px;
}

.logo-box {
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  cursor: pointer;
}

.logo-box .sidebar {
  margin-left: 16px;
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  background-image: url("../../assets/img/toggle.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.logo-box .logo {
  margin-left: 8px;
  width: 100%;
  height: 30px;
  flex-shrink: 0;
  background-image: url("../../assets/img/cukcuk-logo.png");
  background-size: contain;
  background-position: left;
  background-repeat: no-repeat;
}
.navbar-box {
  overflow: auto;
  position: absolute;
  top: 50px;
  width: 175px;
  bottom: 0;
}
::-webkit-scrollbar {
  width: 0px;
}
.navbar-box .navbar-item {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0;
}

.navbar-box .navbar-item:hover {
  background-color: #616164;
  cursor: pointer;
}

.navbar-item img {
  position: absolute;
  width: 100%;
  height: 100%;
}

.navbar-item .navbar-icon {
  margin-left: 16px;
  width: 20px;
  height: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  color: #EAEAEA;
  z-index: 1;
}

.navbar-item .navbar-text {
  margin-left: 10px;
  color: #EAEAEA;
  font-size: 14px;
}

a.navbar-item:hover {
  cursor: pointer;
  
}
a.navbar-item:active {
  background-color: aquamarine;
}
</style>