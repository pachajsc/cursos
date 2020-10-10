import httpClient from "../utils/httpClient";
import SWR from "swr";
export const ListItem = {
  getListItems: async () => {
   
      // const { data: fetcher } = await httpClient.get('/');
      // return SWR('/', fetcher);
      return await httpClient.get("/");
   
  },
  updateItems: async (id, data) => {
    return await httpClient.put(`/update/${id}`, data);
  },
};
