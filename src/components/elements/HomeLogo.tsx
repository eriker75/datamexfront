import Link from "next/link";
import Image from "next/image";

export const HomeLogo = () => {
  return (
    <Link
      className="navbar-brand flex-shrink-0 order-lg-1 mx-auto ms-lg-0 pe-lg-2 me-lg-4"
      href="/"
    >
      <Image
        className="d-none d-lg-block"
        src="/img/logo/logo-dark.png"
        alt="Around"
        width={200}
        height={100}
      />
      <Image
        className="d-lg-none"
        src="/img/logo/logo-icon.png"
        alt="Around"
        width={60}
        height={50}
      />
    </Link>
  );
};

