import updateWishList from "../logic/firebaseQueries/addToWishList";
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
        this.userData.wishList.push(productId);
        await updateWishList(this.uid, [... new Set(this.userData.wishList)]);
        console.log(this.userData.wishList);
    },
    async removeWishList(productId) {
        this.userData.wishList.filter(id => id !== productId);
        await updateWishList(this.uid, [... new Set(this.userData.wishList)]);
        console.log(this.userData.wishList);
    }

};