import React, { FC, useEffect, useState } from "react";

const ContactsPage: FC = () => {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("/api/v1/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return <div>{JSON.stringify(users)}</div>;
};

export default ContactsPage;
