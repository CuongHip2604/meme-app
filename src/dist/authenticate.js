import store from '../store'

const IfNotAuthenticated = (to, from, next) => {
    //1: router chi cho phep vao khi  chua dang nhap
    if (store.getters.isLogin === false) {
        next();
    } else {
        next({
            name: 'home',
            query: {
                redirect: to.name
            }
        });
    }
}

const IfAuthenticated = (to, from, next) => {
    //2. router chi cho phep vao khi da dang nhap
    if (store.getters.isLogin === true) {
        next();
    } else {
        next({
            name: 'login',
            query: {
                redirect: to.name
            }
        });
    }
}

export {
    IfAuthenticated,
    IfNotAuthenticated
}