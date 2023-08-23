import { DropDownItem } from "@/components/elements/DropDownItem";

import { FilterType } from "@/models/types/FilterType";

export interface DropDownFilterCI {
  placeholder: string;
  type: FilterType;
  filters: string[];
}

export const DropDownFilter = ({ placeholder, type, filters }: DropDownFilterCI) => {
  
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
        {filters.map((filter) => 
          <div
            key={filter}
            style={{ padding: "0 1.25rem" }}
            className="dropdown-item"
          >
            <DropDownItem filter={filter} type={type}/>
          </div>
        )}
      </div>
    </div>
  );
};
