import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { ChildrenInterface } from "@/models/interfaces/ChildrenInterface";
import { RootState } from "@/redux/sotre"
import { useRouter } from "next/router";
import { useEffect } from "react"
import jsCookie from 'js-cookie';
import { login } from "@/redux/features/authSlice";

export const ProtectedLayout = ({children}: ChildrenInterface) => {
  const router = useRouter();
  const dispatch = useAppDispatch(); 
  const { isLoggedIn } = useAppSelector((state: RootState) => state.auth )
  
  useEffect(()=> {
    if(!isLoggedIn) {
      router.push('/login');
    }
    return;
  }, [isLoggedIn, router, dispatch])

  return (
    <div>
      {children}
    </div>
  )
}
