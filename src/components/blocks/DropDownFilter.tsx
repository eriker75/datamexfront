import { DropDownItem } from "@/components/elements/DropDownItem";
import { useAppSelector } from "@/hooks/redux";
import { FilterType } from "@/models/types/FilterType";
import { memo, useMemo, useState } from "react";

export interface DropDownFilterCI {
  placeholder: string;
  type: FilterType;
  filters: string[];
}

const DropDownFilter = memo(({ placeholder, type, filters }: DropDownFilterCI) => {

  const filterState = useAppSelector((state) => state.filters);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredFilters = useMemo(() => {
    return filters.filter((filter) => {
      return filter.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [searchTerm, filters]);

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
          onChange={(event) => setSearchTerm(event.target.value)}
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
            className={filteredFilters.includes(filter) ? "dropdown-item" : "dropdown-item d-none"}
          >
            <DropDownItem filter={filter} type={type} status={filterState[type].includes(filter)}/>
          </div>
        )}
      </div>
    </div>
  );
});

DropDownFilter.displayName = 'DropDownFilter';

export { DropDownFilter };
