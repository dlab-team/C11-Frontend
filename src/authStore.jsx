import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

export const authStore = (set) => ({
  token: "",
  profile: null,
  isAuth: false,
  errors: null,
  setToken: (token) =>
    set(() => ({
      token,
      isAuth: true,
    })),
  setProfile: (profile) =>
    set(() => ({
      profile,
    })),
  logout: () => set(() => ({ token: null, profile: null, isAuth: false })),
  cleanErrors: () => set(() => ({ errors: null })),
})

const useAuthStore = create(
  devtools(
    persist(authStore, {
      name: "auth",
    })
  )
)

export default useAuthStore
