/**
 * BÀI THI KẾT THÚC HỌC PHẦN: LẬP TRÌNH WEB - ĐỀ SỐ 1
 * Sinh viên: Nguyễn Gia Bảo - MSSV: 231A010849
 * File: js/script.js - JavaScript hỗ trợ chung cho toàn bộ website
 */

document.addEventListener("DOMContentLoaded", function () {
    // 1. Tự động xác định và đánh dấu trang đang active trên thanh Menu
    highlightActiveNavLink();

    // 2. Kích hoạt menu điều hướng trên thiết bị di động (Mobile Menu Toggle)
    initMobileNav();
});

/**
 * Hàm đánh dấu mục menu tương ứng với trang hiện tại
 */
function highlightActiveNavLink() {
    // Lấy tên file hiện tại từ URL (ví dụ: baitap01.html)
    const currentPath = window.location.pathname;
    const pageName = currentPath.substring(currentPath.lastIndexOf("/") + 1) || "index.html";

    // Tìm tất cả các thẻ a trong menu điều hướng
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {
        const href = link.getAttribute("href");
        // So sánh href với pageName
        if (href === pageName || (pageName === "" && href === "index.html")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

/**
 * Hàm bật/tắt menu trên màn hình điện thoại khi bấm nút ☰
 */
function initMobileNav() {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", function () {
            navMenu.classList.toggle("show");
        });
    }
}

/**
 * Hàm tiện ích: Mở Modal hộp thoại nổi
 * @param {string} modalId - ID của phần tử modal cần mở
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add("active");
    }
}

/**
 * Hàm tiện ích: Đóng Modal hộp thoại nổi
 * @param {string} modalId - ID của phần tử modal cần đóng
 */
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove("active");
    }
}
