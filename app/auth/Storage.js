import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

const key = '@authToken';

const storeToken = async (authToken) => {
    // try {
    //     await SecureStore.setItemAsync(key, authToken);
    // } catch (error) {
    //     console.log('Error storing the auth token', error);
    // }

    try {
        await AsyncStorage.setItem(key, authToken);
      } catch (error) {
        console.log('Error storing the auth token', error);
      }
};

const getToken = async () => {
    // try {
    //     return await SecureStore.getItemAsync(key);
    // } catch (error) {
    //     console.log('Error getting the auth token', error);
    // }
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          return value;
        }
      } catch (error) {
        console.log('Error getting the auth token', error);
      }
};

const getUser = async () => {
    const token = await getToken();
    return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log('Error removing the auth token', error);
    }
};

export default { getToken, getUser, removeToken, storeToken };
