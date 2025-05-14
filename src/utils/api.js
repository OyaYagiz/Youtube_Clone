import axios from "axios";

// yapılan her istekte geçerli olmasını isteğimiz ayarları tanımladığımız bir alan
const api = axios.create({
  baseURL: "https://youtube138.p.rapidapi.com/",
  params: { hl: "tr", gl: "TR" },
  headers: {
       'x-rapidapi-key': '5e6d9cd8d0msh20d46ad55199d63p1fc426jsn1b72d71d13af',
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
});

export default api;
