import { ReactNode, createContext, useContext, useState } from 'react';

//* Declare type
type TSelectContext = {
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
};

type TSelect = {
  children: ReactNode;
};

type TSelectOption = {
  value: string;
  children: string;
};

//* Context API
const SelectContext = createContext<TSelectContext | null>(null);

//* Select Component
const Select = ({ children }: TSelect) => {
  const [selectedOption, setSelectedOption] = useState('');
  // console.log(selectedOption);

  const values = {
    selectedOption,
    setSelectedOption,
  };

  return (
    <SelectContext.Provider value={values}>
      <select onChange={(e) => setSelectedOption(e.target.value)}>
        {children}
      </select>
    </SelectContext.Provider>
  );
};

//* SelectOption Component
export const SelectOption = ({ value, children }: TSelectOption) => {
  const { selectedOption } = useSelectContext();

  const isActive = selectedOption === value;
  // console.log(isActive);

  return (
    <option
      value={value}
      className={`${isActive ? 'bg-purple-400' : 'bg-white'}`}
    >
      {children}
    </option>
  );
};

Select.SelectOption = SelectOption;

export default Select;

//* Create Custom Hook
const useSelectContext = () => {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error('Context out of bound');
  }

  return context;
};
