import httpClient from "../utils/httpClient";
export const ListItem = {
  getListItems: async () => { 
    return await httpClient.get("/"); 
  },
  updateItems: async (id, data) => {
    return await httpClient.put(`/update/${id}`, data);
  },
};
