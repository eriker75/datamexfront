export interface DropDownItemCI {
    value: string;
}

export const DropDownItem = ({ value }: DropDownItemCI ) => {
  return (
    <div
      style={{ padding: "0 1.25rem" }}
      className="dropdown-item"
    >
      <div className="form-check">
        <input
          className="form-check-input cursor"
          type="checkbox"
          id={value}
          name={value}
          value={value}
        />
        <label
          className="form-check-label cursor w-100"
          htmlFor={value}
          style={{ whiteSpace: "normal" }}
        >
          {value}
        </label>
      </div>
    </div>
  )
}
