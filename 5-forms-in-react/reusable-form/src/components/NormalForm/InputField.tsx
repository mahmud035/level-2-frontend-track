import { useFormContext } from 'react-hook-form';

const InputField = () => {
  const { register, watch } = useFormContext();

  console.log(watch('test'));

  return <input type="text" {...register('test')} />;
};

export default InputField;
