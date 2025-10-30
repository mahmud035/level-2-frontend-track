export const Input = ({ label, type, name, register, errors }) => {
  return (
    <div className="w-full max-w-md">
      <label htmlFor={name} className="block font-medium capitalize">
        {label ? label : name}
      </label>
      <input type={type} id={name} {...register} />

      {errors[name] && (
        <span className="text-xs text-red-500">{errors[name].message}</span>
      )}
    </div>
  );
};
