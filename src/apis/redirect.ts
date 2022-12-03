import axios from '../apis/axios';
import { Redirect } from '../types/redirect';

class RedirectApi {
  async getRedirectUrl(userId: string) {
    const res = await axios.get<Redirect>(`/user-redirect/${userId}`);
    return res.data;
  }
}

export const redirectApi = new RedirectApi();
