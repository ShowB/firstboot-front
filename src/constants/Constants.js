const serverUrl = 'http://3.35.211.126:50031';
const localUrl = 'http://localhost:50031';

class Constants {
  static BASE_URL = process.env.NODE_ENV === 'production' ? serverUrl : localUrl;
}

export default Constants;
