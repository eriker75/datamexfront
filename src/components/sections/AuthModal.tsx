import { LoginModal, LogoutModal, SocialAuthModal } from "@/components";

export const SignInModal = () => {
  return (
    <div className="modal fade" id="modal-signin" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content border-0">
          <LoginModal/>
          <LogoutModal/>
          <div className="modal-body text-center px-4 pt-2 pb-4">
            <hr className="my-0" />
            <p className="fs-sm fw-medium text-heading pt-4">Or sign in with</p>
            <SocialAuthModal/>
          </div>
        </div>
      </div>
    </div>
  );
};
