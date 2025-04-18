import AsyncStorage from "@react-native-async-storage/async-storage";

import { UserDTO } from '@dtos/UserDTO';
import { USER_STORGE } from "./storgeConfig";

export async function storgeUserSave(user: UserDTO) {
  await AsyncStorage.setItem(USER_STORGE, JSON.stringify(user));
}