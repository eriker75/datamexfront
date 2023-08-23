import { Hero, Footer, SignInModal } from "@/components";
import { ChildrenInterface } from "@/models/interfaces/ChildrenInterface";
import { ProtectedLayout } from "./ProtectedLayout";

export const MainLayout = ({children}: ChildrenInterface) => {
  return (
    <main>
      <ProtectedLayout>
        <SignInModal/>
        <Hero/>
        {children}
        <Footer/>
      </ProtectedLayout>
    </main>
  )
}
