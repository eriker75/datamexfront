import { FilterGroup, Header } from "@/components";
import { BackgroundImage } from "@/components/elements/BackgroundImage";

export const Hero = () => {
  return (
    <div>
      <div
        style={{ backgroundColor: "red", minHeight: "60vh" }}
        className="position-relative mb-5"
      >
        <BackgroundImage
          image={"/placeholders/hero.png"}
          className="d-flex align-items-center justify-content-center"
        >
          <Header/>
          <h1
            className="text-white text-center position-relative"
            style={{ zIndex: "9" }}
          >
            La base de datos de las empresas de mexico
          </h1>
        </BackgroundImage>
        <div
          className="position-absolute top-100 start-50 translate-middle w-50 rounded rounded-5 d-flex align-items-center justify-content-center gap-3"
          style={{
            minHeight: "100px",
            backgroundColor: "#F7F7FC",
            zIndex: "9",
            minWidth: "800px",
            padding: "20px"
          }}
        >
          <FilterGroup/>
        </div>

      </div>
    </div>
  );
};
