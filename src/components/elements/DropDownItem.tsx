import { useAppDispatch } from "@/hooks/redux";
import { FilterType } from "@/models/types/FilterType";
import { toggleFilter } from "@/redux/features/filterSlice";
import { memo, useEffect, useRef, useState } from "react";
import jsCookie from 'js-cookie';
export interface DropDownItemCI {
  filter: string;
  type: FilterType;
  status: boolean;
}

const DropDownItem = memo(({ filter, type, status }: DropDownItemCI) => {
  const [ checked, setChecked ] = useState<boolean>(status);
  const dispatch = useAppDispatch();
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleInputCheckClick = () => {
    dispatch(toggleFilter({ type, filter }));
    setChecked(!checked)
  }

  const handleLabelCheckClick = (event: any) => {
    dispatch(toggleFilter({ type, filter }));
    event.preventDefault();
    if(checkboxRef.current) {
      checkboxRef.current.checked = !checkboxRef.current.checked;
    }
    setChecked(!checked)
  }
  return (
    <div className="form-check">
      <input
        className="form-check-input cursor"
        type="checkbox"
        id={filter}
        name={filter}
        value={filter}
        defaultChecked={checked}
        onClick={() => handleInputCheckClick()}
        ref={checkboxRef}
      />
      <label
        className="form-check-label cursor w-100"
        htmlFor={filter}
        style={{ whiteSpace: "normal" }}
        onClick={(event) => handleLabelCheckClick(event)}
      >
        {filter}
      </label>
    </div>
  )
})

DropDownItem.displayName = 'DropDownItem';

export { DropDownItem };