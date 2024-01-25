import axios from "axios";

const KEY = 'AIzaSyAqlT1_kRVSf5B8WeKpUHsSDm_hPND_V0o';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
});
