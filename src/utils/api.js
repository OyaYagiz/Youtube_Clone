import axios from "axios";

// yapılan her istekte geçerli olmasını isteğimiz ayarları tanımladığımız bir alan
const api = axios.create({
  baseURL: "https://youtube138.p.rapidapi.com",
  params: { hl: "tr", gl: "TR" },
  headers: {
    "x-rapidapi-key": "82cb311baamsh7ea2ca1e67b25fbp1972fbjsn3b2cb45a4aea",
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
});

export default api;
