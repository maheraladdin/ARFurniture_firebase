export const isLogin = {
    set changeState(state) {
        this.state = state;
    },
    state: false,
    uid: "",
    set changeUid(uid) {
        this.uid = uid;
    }
};