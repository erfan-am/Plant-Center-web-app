class TokenService {
    getLocalRefreshToken() {
      const user = JSON.parse(localStorage.getItem("authentication"));
      return user?.refreshToken;
    }
    getLocalAccessToken() {
      const user = JSON.parse(localStorage.getItem("authentication"));
      return user?.accessToken;
    }
    updateLocalAccessToken(token) {
      let user = JSON.parse(localStorage.getItem("authentication"));
      user.accessToken = token;
      localStorage.setItem("authentication", JSON.stringify(user));
    }
    getUser() {
      return JSON.parse(localStorage.getItem("authentication"));
    }
    setUser(user) {
      console.log(JSON.stringify(user));
      localStorage.setItem("authentication", JSON.stringify(user));
    }
    removeUser() {
      localStorage.removeItem("authentication");
    }
  }
  export default new TokenService();
  