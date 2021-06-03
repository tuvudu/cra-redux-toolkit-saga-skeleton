import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUsersPending, selectUsers } from "~/app/redux/users/users.slice";

export function UserListContainer() {
  const { data } = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersPending());
  }, [dispatch]);

  return <div>{data && data.map((item) => <p>{item?.name}</p>)}</div>;
}
