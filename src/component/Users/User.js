import { UserCircleIcon, UserMinusIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeData } from "../../App";
import { ButtonAdd, ButtonRemove, ButtonDetails } from "../Button/Button";

const User = ({ user: { id, name, email, img }, handleAdd, handleRemove }) => {
  const navigate = useNavigate();
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
          <ButtonAdd handler={() => handleAdd(id)}>
            <div className="flex">
              Add <UserPlusIcon className={`h-6 w-6 ml-2`}></UserPlusIcon>
            </div>
          </ButtonAdd>
          <ButtonRemove handler={() => handleRemove(id)}>
            <div className="flex">
              Remove <UserMinusIcon className={`h-6 w-6 ml-2`}></UserMinusIcon>
            </div>
          </ButtonRemove>
        </div>
        <ButtonDetails handler={() => navigate(`/users/${id}`)} name={name}>
          <UserCircleIcon className={`h-6 w-6`}></UserCircleIcon>
        </ButtonDetails>
      </div>
    </div>
  );
};

export default User;
