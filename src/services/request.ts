import { _get } from "@/services/utils";

export const postApi = {
  async getListPost(params?: any) {
    return _get("/post", params);
  },
};
