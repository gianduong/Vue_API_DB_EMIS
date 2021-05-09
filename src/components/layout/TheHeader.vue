<template>
    <div>
        <div id="header">
            <i class="fa fa-bars fa-2x iconHeader"></i>
            <div class="local-box">
                <form action="">
                    <label for="location"></label>
                    <select name="location" id="">
                        <option value="volvo">CÔNG TY CỔ PHẦN MISA</option>
                    </select>
                </form>
            </div>
            <div class="status">
                <img src="../../assets/icon/status.png" alt="">
                <div>DC-02</div>
            </div>

            <div class="search">
                <input type="text" placeholder="nhập từ khóa tìm kiếm">
                <div class="searchIcon"></div>
            </div>
            <div class="option">
                <div class="mi-23"><div class="mi-24 mi category-morong"></div></div>
                <div class="mi-23"><div class="mi-24 mi category-thietlap"></div></div>
                <div class="mi-23"><div class="mi-24 mi category-tuvan"></div></div>
                <div class="mi-23"><div class="mi-24 mi category-giup"></div></div>
                <div class="mi-23"><div class="mi-24 mi category-thongbao"></div></div>  
            </div>
            <div class="logo">
                <img src="../../assets/icon/avatar-default.png" alt="" class="header-img">
                <h4>Nguyễn Giản Dương</h4>
                <div class="option-img category-chevron-down mi mi-24"></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
#header {
    border: 1px solid #dedede;
    position: absolute;
    left:175px;
    right:0;
    height: 50px;
    top:0;
    display: flex;
}
.local-box {
    width: 18%;
    margin-top: 5px;
    margin-left: 2px;
}

select {
    border: none;
    font-family: inherit;
    padding-left: 10px;
    overflow: hidden;
    white-space: nowrap;
    font-weight: 600;
    max-width: 800px;
    text-overflow: ellipsis;
    transition: all .2s ease;
    font-size: 14px;
    color: #111;
    cursor: pointer;
}

select:hover {
    border:none;
}

.location {
    border: none;
    margin: 10px;
    font-size: 14px;
}

.header-img {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 15%;
    cursor: pointer;
}

.logo > h4 {
    position: absolute;
    top: 0;
    right: calc(15% - 130px);
    font-size: 14px;
    cursor: pointer;
}

.option-img {
    position: absolute;
    top: 18px;
    right: 10px;
}

.iconHeader {
    margin: 12px 10px 12px 10px;
}

.status {
    display: flex;
    width: 80px;
    height: 30px;
    margin: 10px 0 10px 15px;
    justify-content: center;
    align-items: center;
    border: 1px solid #EBEDF0;
    border-radius: 25px;
    font-size: 13px;
    cursor: pointer;
}

.status img {
    margin-left: -10px;
    margin-right: 5px;
}

.search {
    width: 190px;
    height: 30px;
    all: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 0 200px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out; 
}

.searchIcon {
    width: 30px;
    height: 30px;
    background-image: url('../../assets/icon/search.png');
    background-position: right center; 
    background-repeat: no-repeat;
    margin-right: 5px;
    cursor: pointer;
}

.search input {
    height: 18px;
    width: 155px;
    padding: 0 5px 0 10px;
    border: none;
}

::placeholder {
    font-style: italic;
    font-size: 12px;
}

.option {
    width: fit-content;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0 0 10px;
}

.mi {
    background: url('../../assets/img/Sprites.64af8f61.svg');
}

.mi-22 {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    margin: 0 10px 0 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.mi-23 {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    margin: 0 10px 0 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.mi-24 {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    margin: 0 10px 0 10px;
}

.mi-22 :hover {
    transition: 1s;
    width: 48px;
    height: 48px;
    background-color: #2CA01C;
    margin: 0 10px 0 10px;
    
}

.mi-23:hover {
    transition: 0.3s;
    width: 35px;
    height: 35px;
    background-color: #111;
    margin: 0;
    border-bottom: 10px solid #111;
    border-left: 5px solid #f4f4f4;
    border-right: 5px solid #f4f4f4;
}


.category-morong {
    background-position: -568px -30px;
}

.category-thietlap {
    background-position: -675px -30px;
}

.category-tuvan {
    background-position: -899px -30px;
}

.category-giup {
    background-position: -731px -30px;
}

.category-thongbao {
    background-position: -788px -30px;
}

.category-chevron-down {
    background-position: -944px -360px;
}

</style>