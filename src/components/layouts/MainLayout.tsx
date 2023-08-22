import { Hero, Footer, SignInModal } from "@/components";
import { ChildrenInterface } from "@/interfaces/ChildrenInterface";

export const MainLayout = ({children}: ChildrenInterface) => {
  return (
    <main>
      <SignInModal/>
      <Hero/>
      {children}
      <Footer/>
    </main>
  )
}
