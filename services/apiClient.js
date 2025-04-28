// src/services/apiClient.js
class ApiClient {
  constructor() {
    this.baseURL = "/api/auth"; // 🛠️ Dynamic base URL now handled by Vite proxy
    this.defaultHeaders = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }

  async customFetch(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const headers = { ...this.defaultHeaders, ...options.headers };
    
    const config = {
      ...options,
      headers,
      credentials: "include",
    };
  
    console.log(`Fetching ${url}`);
    const response = await fetch(url, config);
  
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error: ${response.status} - ${errorText}`);
    }
  
    try {
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to parse JSON response", error);
      throw error;
    }
  }
  

  // ✅ Auth endpoints
  async signup(userData) {
    return this.customFetch("/register", {
      method: "POST",
      body: JSON.stringify(userData),
    });
  }
  

  async login(email, password) {
    return this.customFetch("/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  }

  logout() {
    localStorage.removeItem("token");
}

}

const apiClient = new ApiClient();
export default apiClient;
