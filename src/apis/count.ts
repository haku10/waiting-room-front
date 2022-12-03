import axios from '../apis/axios';
import { Count } from '../types/count';

class CountApi {
  async getCount(userId: string) {
    const res = await axios.get<Count>(`/count/${userId}`);
    return res.data;
  }
}

export const countApi = new CountApi();
