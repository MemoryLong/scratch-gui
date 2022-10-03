/*
 * @description:实现登录本地化
 * @param null:
 * @return: null
 * @author: zhouhaifeng
 * @date: 2022/9/18 15:47
 **/
import keyMirror from 'keymirror';

const UserState = keyMirror({
    NOT_LOGINED: null,
    LOGINED: null
});

const UserStates = Object.keys(UserState);


const initialState = {
    error: null,
    userData: null,
    // loginState: null
    loginState: UserState.NOT_LOGINED
};

const getIsLogined = loginState => (
    loginState === UserState.LOGINED
);


const reducer = function (state, action) {
    if (typeof state === 'undefined'){
        state = initialState;
    }
    return state;
};


export {
    reducer as default,
    initialState as userStateInitialState,
    UserState,
    UserStates,
    getIsLogined
};
