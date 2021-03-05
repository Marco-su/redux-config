//---IMPORTS
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { obtenerUsuarios } from "../Store/user.reducer";

//---HOOK
const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users.array);
  const myString = useSelector((store) => store.users.string);

  console.log(users); //---

  useEffect(() => {
    dispatch(obtenerUsuarios());
  }, [dispatch]);

  //---COMPONENT
  return (
    <div>
      <p>Estoy retornando dos valores desde la tienda con el mismo reducer</p>
      <h3>{myString}</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

//---EXPORT
export default UsersList;
