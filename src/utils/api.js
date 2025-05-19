import axios from "axios";

// yapılan her istekte geçerli olmasını isteğimiz ayarları tanımladığımız bir alan
const api = axios.create({
  baseURL: "https://youtube138.p.rapidapi.com/",
  params: { hl: "tr", gl: "TR" },
  headers: {
    "x-rapidapi-key": "9fec598be9mshd85e408ed6011fep182e47jsn9f70b43c622f",
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
});

export default api;
