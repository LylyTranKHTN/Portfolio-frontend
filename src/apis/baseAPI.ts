const timeout = 5000; // 5 seconds
// Create an AbortController instance
const controller = new AbortController();
const signal = controller.signal;

// Set up a setTimeout function to abort the fetch request after the specified timeout
const timeoutId = setTimeout(() => {
  controller.abort();
}, timeout);

const headers = {
  // disable CORS
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

class BaseAPI {
  baseURL: string;

  constructor() {
    this.baseURL = `http://localhost:5173/api`;
  }

  async get(url: string) {
    const response = await fetch(this.baseURL + url, { signal, headers });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json().then((data) => {
      clearTimeout(timeoutId);
      return data;
    });
  }

  async post<T>(url: string, data: T) {
    const response = await fetch(this.baseURL + url, {
      signal,
      headers,
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json().then((data) => {
      clearTimeout(timeoutId);
      return data;
    });
  }

  async put<T>(url: string, data: T) {
    const response = await fetch(this.baseURL + url, {
      signal,
      method: 'PUT',
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json().then((data) => {
      clearTimeout(timeoutId);
      return data;
    });
  }
}

export default BaseAPI;
