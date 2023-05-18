import AsyncStorage from '@react-native-async-storage/async-storage';

// Read data from AsyncStorage
async function readDataFromStorage(key: string): Promise<any | null> {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  } catch (error) {
    console.log('Error reading data from AsyncStorage:', error);
    return null;
  }
}

// Write data to AsyncStorage
async function writeDataToStorage(key: string, data: any): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.log('Error writing data to AsyncStorage:', error);
    return false;
  }
}

// Remove data from AsyncStorage
async function removeDataFromStorage(key: string): Promise<boolean> {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    console.log('Error removing data from AsyncStorage:', error);
    return false;
  }
}

export { readDataFromStorage, writeDataToStorage, removeDataFromStorage };