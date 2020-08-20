import React from 'react'

export default function adminHeaderSubmenu() {
    return (
        <div>
            <a href="#" className="dropdown-item">
              <i className="fas fa-user" style={{ paddingRight: 10 }}></i>
              ข้อมูลส่วนตัว
            </a>
            <a href="#" className="dropdown-item">
              <i class="fas fa-key" style={{ paddingRight: 10 }}></i>
              เปลี่ยนรหัสผ่าน
            </a>

            <div className="dropdown-divider" />
            <a href="/login" className="dropdown-item">
              <i class="fas fa-sign-out-alt" style={{ paddingRight: 10 }}></i>
              ออกจากระบบ
            </a>
        </div>
    )
}
