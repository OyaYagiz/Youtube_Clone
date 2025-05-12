import axios from "axios";

// yapılan her istekte geçerli olmasını isteğimiz ayarları tanımladığımız bir alan
const api = axios.create({
  baseURL: "https://youtube138.p.rapidapi.com",
  params: { hl: "tr", gl: "TR" },
  headers: {
    "x-rapidapi-key": "756d0c1442msh153e7d65fc912a8p1d303ajsn3ab32182bfe9",
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
});

export default api;
