import * as FileSystem from 'expo-file-system';

export const getBase64 = async (path: string): Promise<string>=> {
    const base64 = await FileSystem.readAsStringAsync(path, { encoding: 'base64' });
    return base64
}