import {environment} from "../../environments/environment";


const {API} = environment;

export const urls = {
  saveData: API + '/',
  getAll:API + '/keys',
  getId:API + '/key'
}
