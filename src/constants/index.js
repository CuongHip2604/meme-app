const PAGE_SIZE =3;
const CURR_PAGE = 1;
const CONFIG_ACCESS_TOKEN = 'ACCESS_TOKEN'

export const NOTI_POST_CMT = {
    group: 'noti',
    type : 'success',
    title: 'Success!',
    text: 'Đăng bình luận thành công!'
}
export const NOTI_UNPOST_CMT = {
    group: 'noti',
    type : 'error',
    title: 'Error!',
    text: 'Có lỗi xảy ra, vui lòng thử lại!'
}
export const NOTI_POST_UPLOAD = {
    group: 'noti',
    type : 'success',
    title: 'Success!',
    text: 'Đăng bài thành công!'
}
export const NOTI_UPDATE_PROFILE = {
    group: 'noti',
    type : 'success',
    title: 'Success!',
    text: 'Cập nhập thành công!'
}
export const NOTI_UPDATE_PASS = {
    group: 'noti',
    type : 'success',
    title: 'Success!',
    text: 'Thay đổi mật khẩu thành công!'
}
export const NOTI_LOGIN = {
    group: 'noti',
    type : 'success',
    title: 'Success!',
    text: 'Đăng nhập thành công!'
}
export const NOTI_REGISTER = {
    group: 'noti',
    type : 'success',
    title: 'Success!',
    text: 'Đăng ký thành công!'
}


export {
    PAGE_SIZE,
    CURR_PAGE,
    CONFIG_ACCESS_TOKEN
}