import { getItemAsync } from 'expo-secure-store';

export const checkLogin = async () => {
    return await getItemAsync("@token")
        .then((result) => {
            return result;
        })
        .catch(() => {
            return false;
        });
}