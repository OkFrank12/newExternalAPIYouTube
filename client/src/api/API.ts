import axios from "axios";
import lodash from "lodash";

const url: string = `http://localhost:1000/api`;
const newUrl: string = `http://localhost:1000`;

export const registerUserAPI = async (data: any) => {
  try {
    const config: any = {
      "content-type": "multipart/form-data",
    };
    return await axios
      .post(`${url}/register`, data, config)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    console.log(error);
  }
};

export const signInAPI = async (data: any) => {
  try {
    return await axios.post(`${url}/sign-in`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const readMyEndPoint = async (data: any) => {
  try {
    return await axios.post(`${newUrl}/data`, data);
  } catch (error) {
    console.log(error);
  }
};

export const getMyEndPoint = async () => {
  try {
    return await axios.get(`${newUrl}/read`).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const getYouTubeVideos = async (search: string) => {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      q: search,
      part: "snippet,id",
      regionCode: "NG",
      maxResults: "20",
      order: "date",
    },
    headers: {
      "X-RapidAPI-Key": "cca5e7ddc8mshc1c37a392aa5603p1145e4jsn2e7189e9e70f",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  try {
    const check = await getMyEndPoint();

    if (lodash.some(check, search)) {
      return check;
    } else {
      const response = await axios.request(options);
      let keyValue = search;
      const newData = {
        [keyValue]: response.data.items,
      };
      // localStorage.setItem("youTube", JSON.stringify(response.data.items));

      readMyEndPoint({ data: newData });
      console.log(response.data.items);
      return response.data.items;
    }
  } catch (error) {
    console.error(error);
  }
};
