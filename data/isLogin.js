import updateWishList from "../logic/firebaseQueries/updateWishList";
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
    async addWishList(productId) {
        this.wishList.push(productId);
        await updateWishList(this.uid, this.wishList);
        console.log(this.userData.wishList);
    },
    async removeWishList(productId) {
        this.wishList.filter(id => id !== productId);
        await updateWishList(this.uid, this.wishList);
        console.log(this.userData.wishList);
    },
    get wishList() {
        return [...new Set(this.userData.wishList)];
    }
};