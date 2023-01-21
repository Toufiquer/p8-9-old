import { useContext } from "react";
import { ThemeData } from "../../App";

const useColorFn = () => {
  const colorData = `pl-4 pr-[10px] py-1 rounded text-bold mr-1 my-2 ml-0 flex items-center justify-center `;
  return colorData;
};
const ButtonDetailsUser = ({ id, handler, children, name }) => {
  const [themeData] = useContext(ThemeData);
  const { textI, hoverText } = themeData;
  return (
    <button title={`Details About: ${name}`} onClick={() => handler(id)} className={` ${textI} ${useColorFn()}  ${hoverText} `}>
      {children}
    </button>
  );
};
const ButtonAddUser = ({ id, handler, children }) => {
  const [themeData] = useContext(ThemeData);
  const { add, hoverAdd } = themeData;
  return (
    <button onClick={() => handler(id)} className={`${useColorFn()}  ${add} ${hoverAdd} text-black`}>
      {children}
    </button>
  );
};
const ButtonRemoveUser = ({ id, handler, children }) => {
  const [themeData] = useContext(ThemeData);
  const { delete0, hoverDelete } = themeData;
  return (
    <button onClick={() => handler(id)} className={`${useColorFn()}  ${delete0} ${hoverDelete}  text-black`}>
      {children}
    </button>
  );
};
export { ButtonAddUser, ButtonRemoveUser, ButtonDetailsUser };
