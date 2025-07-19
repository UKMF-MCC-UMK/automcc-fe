const BACKEND_URL = "http://localhost:8000/api";
const BACKEND_STORAGE_URL = "http://localhost:8000/storage";

// upload configuration
const MAX_FILE_SIZE = 1024 * 1024 * 2; // => limiting each file (bytes); set zero (0) to disable
const FILE_TYPE_ALLOWED = [
  // html css js
  "text/html",
  "text/css",
  "text/javascript",
  "application/javascript",
  //   image
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/gif",
  "image/bmp",
  "image/webp",
  "image/tiff",
  "image/svg+xml",
  // Fonts
  "font/woff",
  "font/woff2",
  "font/ttf",
  "font/otf",
  // other
  "text/plain",
  "application/json",
];
