type RequestConfig = {
  baseURL?: string;
  headers?: HeadersInit;
};

type InterceptorFn = (value: any) => any | Promise<any>;

class FetchWrapper {
  private baseURL: string;
  private headers: HeadersInit;
  private responseInterceptors: InterceptorFn[];
  private errorInterceptors: InterceptorFn[];

  constructor(config: RequestConfig = {}) {
    this.baseURL = config.baseURL || "";
    this.headers = config.headers || {};
    this.responseInterceptors = [];
    this.errorInterceptors = [];
  }

  private async handleResponse(response: Response) {
    try {
      if (!response.ok) {
        throw response;
      }

      const data = await response.json();
      return this.runInterceptors(this.responseInterceptors, data);
    } catch (error) {
      return this.runInterceptors(this.errorInterceptors, error);
    }
  }

  private async runInterceptors(interceptors: InterceptorFn[], value: any) {
    let result = value;
    for (const interceptor of interceptors) {
      result = await interceptor(result);
    }
    return result;
  }

  interceptors = {
    response: {
      use: (onFulfilled: InterceptorFn, onRejected?: InterceptorFn) => {
        if (onFulfilled) this.responseInterceptors.push(onFulfilled);
        if (onRejected) this.errorInterceptors.push(onRejected);
      },
    },
  };

  private createUrl(endpoint: string): string {
    return `${this.baseURL}${endpoint}`;
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = this.createUrl(endpoint);
    const headers = { ...this.headers, ...options.headers };

    try {
      const response = await fetch(url, { ...options, headers });
      return this.handleResponse(response);
    } catch (error) {
      return this.runInterceptors(this.errorInterceptors, error);
    }
  }

  async get(endpoint: string, options: RequestInit = {}) {
    return this.request(endpoint, { ...options, method: "GET" });
  }

  async post(endpoint: string, data?: any, options: RequestInit = {}) {
    return this.request(endpoint, {
      ...options,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: JSON.stringify(data),
    });
  }

  async put(endpoint: string, data?: any, options: RequestInit = {}) {
    return this.request(endpoint, {
      ...options,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: JSON.stringify(data),
    });
  }

  async delete(endpoint: string, options: RequestInit = {}) {
    return this.request(endpoint, { ...options, method: "DELETE" });
  }
}

export const fetchCustom = new FetchWrapper({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Example usage of interceptors
fetchCustom.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);
