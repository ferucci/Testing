import del from "del"
import path from "../config/path.js"

// Удаление директории
const clear = () => {
  return del(path.root)
}

export default clear;