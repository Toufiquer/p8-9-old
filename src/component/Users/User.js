import { UserCircleIcon, UserMinusIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { ThemeData } from "../../App";
import { ButtonAddUser, ButtonRemoveUser, ButtonDetailsUser } from "../Button/Button";

const User = ({ user: { id, name, email, img } }) => {
  const [themeData] = useContext(ThemeData);
  const { border } = themeData;
  return (
    <div className={`${border} p-2 text-semibold flex h-32 max-w-xl flex-col`}>
      <div className="flex">
        <img src={img} alt={name} className={`w-16 h-16 mt-1`} />
        <div className={`ml-2`}>
          <h2 title={name}>
            <span className="font-bold">Name:</span> {name.length >= 12 ? name.slice(0, 12) + "..." : name}
          </h2>
          <h2 title={email}>
            <span className="font-bold">Email:</span> {email.length >= 12 ? email.slice(0, 12) + "..." : email}
          </h2>
          <h2>
            <span className="font-bold">ID:</span> {id}
          </h2>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <ButtonAddUser>
            <div className="flex">
              Add <UserPlusIcon className={`h-6 w-6 ml-2`}></UserPlusIcon>
            </div>
          </ButtonAddUser>
          <ButtonRemoveUser>
            <div className="flex">
              Remove <UserMinusIcon className={`h-6 w-6 ml-2`}></UserMinusIcon>
            </div>
          </ButtonRemoveUser>
        </div> 
        <ButtonDetailsUser name={name}>
          <UserCircleIcon className={`h-6 w-6`}></UserCircleIcon>
        </ButtonDetailsUser>
      </div>
    </div>
  );
};

export default User;
