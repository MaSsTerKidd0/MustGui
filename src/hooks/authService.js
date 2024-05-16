import axios from "axios";
import fetchWithToken from "../hooks/useFetchWithToken";

class AuthService {
  async login(credentials) {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/login/",
        credentials
      );
      if (response.status >= 200 && response.status < 300) {
        const { token, role } = response.data;
        this.setToken(token);
        this.setRole(role);
        return true;
      } else {
        console.error("Login failed with status code:", response.status);
        return false;
      }
    } catch (error) {
      console.error("Error during login:", error);
      return false;
    }
  }

  async logout() {
    try {
      const response = await fetchWithToken("http://127.0.0.1:8080/logout/", {
        method: "POST",
      });
      if (response.ok) {
        this.removeToken();
        this.removeRole();
      } else {
        console.error("Logout failed with status code:", response.status);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  }

  isAuthenticated() {
    const token = this.getToken();
    return !!token;
  }

  setToken(token) {
    localStorage.setItem("authToken", token);
  }

  getToken() {
    return localStorage.getItem("authToken");
  }

  removeToken() {
    localStorage.removeItem("authToken");
  }

  removeRole() {
    localStorage.removeItem("role");
  }
}

export default new AuthService();
