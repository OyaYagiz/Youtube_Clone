import axios from "axios";

// yapılan her istekte geçerli olmasını isteğimiz ayarları tanımladığımız bir alan
const api = axios.create({
  baseURL: 'https://youtube138.p.rapidapi.com',
  params: { hl: "tr", gl: "TR" },
  headers: {
    "x-rapidapi-key": '7048c86a1amsh4d021196e01f461p1d1592jsn559ee6efba20',
    "x-rapidapi-host":'youtube138.p.rapidapi.com',
  },
});

export default api;
