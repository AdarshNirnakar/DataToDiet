export const Input = ({ id, type, accept, onChange, className, ref }) => (
    <input
      id={id}
      type={type}
      accept={accept}
      onChange={onChange}
      className={`border p-2 rounded-lg ${className}`}
      ref={ref}
    />
  );
  