/**
 * *Fetch*
 * do fetch to backend server, when token invalid, will automaticly remove token and redirect to login page.
 * @param {string} url 
 * @param {Headers} requestOptions 
 * @param {boolean} auto_redirect
 * @returns {Promise<{res?: Response, message: string, success: boolean}>} 
 */
async function get_fetch(url, requestOptions = {}, auto_redirect = true) {
  function invalid_token(){
    if (!auto_redirect) return;
    localStorage.removeItem("token");
    window.location.href = "/login.html";
  }

  const token = localStorage.getItem("token");

  if (!token) {
    invalid_token();
  }

  requestOptions.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  };

  try {
    const res = await fetch(url, requestOptions);

    if (!res.ok) {
      if (res.status === 401) {
        invalid_token();
      } 
      return {
        message: "Fetch error with status: " + res.status,
        res,
        success: false,
      };
    }
    return {
        message: "Fetch berhasil",
        res,
        success: true,
      };
  } catch (error) {
    return {
        message: "Gagal terhubung ke server",
        success: false,
      };;
  }
}
