export const isLogin = {
    set changeState(state) {
        this.state = state;
    },
    state: false,
    uid: "",
    set changeUid(uid) {
        this.uid = uid;
    },
    userData: {},
    set changeUserData(userData) {
        this.userData = userData;
    },
    set updateProfile(userData) {
        this.userData.email = userData.email;
        this.userData.username = userData.username;
        this.userData.image = userData.image;
    },
    get wishList() {
        return this.userData.wishList;
    }
};