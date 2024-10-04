function kiemTra() {
    var hoTen = document.frmDangKy.hoTen.value;
    var Email = document.frmDangKy.email.value;
    var tel = document.frmDangKy.tel.value;
    var nuoc = document.frmDangKy.nuoc.value;
    var khoaHoc = document.frmDangKy.khoaHoc.value;
    var diaChi = document.frmDangKy.diaChi.value;
    // Xác thực Email hợp lệ
    var tesEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // Xác thực Email hợp lệ
    if (hoTen == '') {
        alert('Họ tên không được để trống')
        document.frmDangKy.hoTen.focus();
        return false;
    }
    if (Email == '') {
        alert('Email không được để trống');
        document.frmDangKy.email.focus();
        return false;
    }
    // // xác thực Email hợp lệ
    else if (!tesEmail.test(Email)) {
        alert('Vui lòng nhập Email hợp lệ!');
        document.frmDangKy.email.focus();
        return false;
    }
    // Xác thực Email hợp lệ
    if (tel == '') {
        alert('Số điện thoại không được để trống');
        document.frmDangKy.tel.focus();
        return false;
    }
    else if (tel.length <= 9) {
        alert('Vui lòng nhập đúng số điện thoại');
        document.frmDangKy.tel.focus();
        return false;
    }
    if (nuoc == 'chonNuoc') {
        alert('Vui lòng chọn ngôn ngữ');
        return false;
    }
    if (khoaHoc == 'chonKhoaHoc') {
        alert('Vui lòng chọn khoá học');
        return false;
    }
    if (diaChi == '') {
        alert('Địa chỉ không được để trống');
        document.frmDangKy.diaChi.focus();
        return false;
    }
    alert('Chúc mừng bạn đã đăng ký khoá học online thành công!');
    var thongtin = "<h2>THÔNG TIN ĐĂNG KÝ CỦA BẠN LÀ:</h2>" +
        "<p><b>Họ và tên: </b>" + hoTen + '</p>' +
        '<p><b>Địa chỉ Email: </b>' + Email + '</p>' +
        '<p><b>Số điện thoại: </b>' + tel + '</p>' +
        '<p><b>Ngôn ngữ: </b>' + nuoc + '<b>     Khoá: </b>' + khoaHoc + '</p>' +
        '<p><b>Địa chỉ: </b>' + diaChi + '</p>';
    document.getElementById("hienthongtin").innerHTML = thongtin;
}
function huy() {
    location.reload(true);
}