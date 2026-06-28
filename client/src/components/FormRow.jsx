const FormRow = ({
  name,
  type,
  labelText,
  placeholder,
  dataIcon,
  defaultValue,
  onChange,
}) => {
  return (
    <div className="space-y-xs group">
      <label
        // className="text-mono-label uppercase font-black block text-xs"
        className="text-mono-label uppercase mb-xs block "
        htmlFor={name}
      >
        {labelText}
      </label>
      <div className="relative">
        <span
          className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-background z-10"
          data-icon={dataIcon}
        >
          {dataIcon}
        </span>
        <input
          className="w-full border-2 pl-14 border-on-background bg-surface-container-lowest p-md text-body focus:outline-none focus:border-primary focus:shadow-[2px_2px_0px_0px_var(--color-on-background)] transition-all"
          id={name}
          name={name}
          placeholder={placeholder}
          type={type}
          defaultValue={defaultValue}
          required
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default FormRow;
