import { DropDownItem } from "@/components/elements/DropDownItem";

export interface DropDownFilterCI {
  placeholder: string;
}

export const DropDownFilter = ({placeholder} : DropDownFilterCI ) => {
  return (
    <div className="btn-group dropdown">
      <div
        className="btn btn-outline-secondary dropdown-toggle bg-white"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="true"
      >
        <input
          type="text"
          placeholder={placeholder}
          className="rounded"
          style={{ outline: "none", border: "none" }}
        />
      </div>
      <div
        className="dropdown-menu my-1 cursor w-100"
        style={{ overflowY: "scroll", maxHeight: "200px" }}
        onClick={(event) => event.stopPropagation()}
      >
        <DropDownItem value="HOLA"/>
        <DropDownItem value="HOLA"/>
        <DropDownItem value="HOLA"/>
        <DropDownItem value="HOLA"/>
        <DropDownItem value="HOLA"/>
        <DropDownItem value="HOLA"/>
        <DropDownItem value="HOLA"/>
        <DropDownItem value="HOLA"/>
        <DropDownItem value="HOLA"/>
        <DropDownItem value="HOLA"/>
        <DropDownItem value="HOLA"/>
        <DropDownItem value="HOLA"/>
        <DropDownItem value="HOLA"/>
        <DropDownItem value="HOLA"/>
        <DropDownItem value="HOLA"/>
        <DropDownItem value="HOLA"/>
        <DropDownItem value="HOLA"/>
        <DropDownItem value="HOLA"/>
        <DropDownItem value="HOLA"/>
        <DropDownItem value="HOLA"/>
      </div>
    </div>
  );
};
