const FormRowSelect = ({ name, labelText, list, defaultValue, onChange }) => {
  return (
    <div>
      <label className="text-mono-label uppercase mb-xs block">
        {labelText}
      </label>
      <div className="relative">
        <select
          className="w-full border-2 border-on-background bg-surface-container-lowest p-md text-body focus:outline-none
           focus:border-primary focus:shadow-[2px_2px_0px_0px_var(--color-on-background)] transition-all appearance-none pr-10"
          name={name}
          id={name}
          defaultValue={defaultValue}
          onChange={onChange}
        >
          {list.map((itemValue) => {
            return (
              <option key={itemValue} value={itemValue}>
                {itemValue}
              </option>
            );
          })}
        </select>
        <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
          arrow_drop_down
        </span>
      </div>
    </div>
  );
};

export default FormRowSelect;
