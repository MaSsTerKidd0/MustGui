const fetchWithToken = async (url, options = {}) => {
  // Configure fetch options
  const authToken = localStorage.getItem("authToken");
  const fetchOptions = {
    ...options,
    headers: {
      ...options.headers,
      "Content-Type": "application/json", // Ensure JSON content type is set
    },
  };

  // Append the Authorization header with the Bearer token if it exists
  if (authToken) {
    fetchOptions.headers["Authorization"] = `Bearer ${authToken}`;
  } else {
    console.warn("Authentication token not provided");
  }

  try {
    // Perform the fetch request with the provided options
    const response = await fetch(url, fetchOptions);

    // Extract the response body from the HttpResponse instance
    const responseBody = await response.text();

    // Return the response body
    return { body: responseBody };
  } catch (error) {
    // Log the error to the console and rethrow it
    console.error("Fetch error:", error);
    throw error;
  }
};

export default fetchWithToken;
