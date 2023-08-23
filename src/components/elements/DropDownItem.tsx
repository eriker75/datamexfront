import { useAppDispatch } from "@/hooks/redux";
import { FilterType } from "@/models/types/FilterType";
import { toggleFilter } from "@/redux/features/filterSlice";
import { useEffect, useState } from "react";
import jsCookie from 'js-cookie';
export interface DropDownItemCI {
  filter: string;
  type: FilterType;
}

export const DropDownItem = ({ filter, type }: DropDownItemCI) => {
  const [ checked, setChecked ] = useState<boolean>(false);
  const dispatch = useAppDispatch()

  const handleDropdownClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    dispatch(toggleFilter({ type, filter }));
    setChecked(!checked)
  };

  useEffect(() => {
    const savedState = jsCookie.get('filterState');
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      setChecked(parsedState[type].includes(filter));
    }
  }, [type, filter]);

  return (
    <div className="form-check" onClick={handleDropdownClick}>
      <input
        className="form-check-input cursor"
        type="checkbox"
        id={filter}
        name={filter}
        value={filter}
        defaultChecked={checked}
      />
      <label
        className="form-check-label cursor w-100"
        //htmlFor={filter}
        style={{ whiteSpace: "normal" }}
      >
        {filter}
      </label>
    </div>
  )
}
