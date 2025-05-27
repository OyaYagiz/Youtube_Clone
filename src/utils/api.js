import axios from "axios";

// yapılan her istekte geçerli olmasını isteğimiz ayarları tanımladığımız bir alan
const api = axios.create({
  baseURL: "https://youtube138.p.rapidapi.com/",
  params: { hl: "tr", gl: "TR" },
  headers: {
    "x-rapidapi-key": "540b8ce973msh3fcab752cec3e7ap1c3e91jsnebe08ba2523c",
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
});

export default api;
