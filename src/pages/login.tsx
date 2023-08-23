import { useAppDispatch } from "@/hooks/redux"
import { login } from "@/redux/features/authSlice"
import { useRouter } from "next/router";
import { useEffect } from "react"


export default function LoginPage () {
  const dispatch = useAppDispatch()
  const router = useRouter();

  const handleLogin = () => {
    dispatch(login({
      authToken: "token",
      refreshToken: "refresh"
    }))

    router.push("/");
  }
  

  return (
    <div>
        <h1>LOGIN PAGE</h1>
        <button onClick={handleLogin}>LOGIN BUTTON</button>
    </div>
  )
}
