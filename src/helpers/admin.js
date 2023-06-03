import { obtenerUsuarioStorage } from "./LocalStorage"

const ADMIN_EMAIL = "danielcorrea3131@gmail.com"

export const getIsAdmin = () => {
  return obtenerUsuarioStorage("email") === ADMIN_EMAIL
}