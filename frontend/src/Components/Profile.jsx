import React, { use, useEffect, useState } from 'react'
import { Avatar } from '@mantine/core';


import Service from '../utils/http'
import { Center, Text } from '@mantine/core';
const obj = new Service();


export default function Profile() {


   const [user, setUser] = useState({})


   const getProfileData = async () => {
       try {
           let data = await obj.get("user/me")
           setUser(data)
           console.log(data);
       } catch (error) {
           console.log(error);
       }
   }
   useEffect(() => {


       getProfileData();
   }, [])


   return (
       <div>
           {
              <Center>
  <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
    <Avatar variant="filled" radius="100%" size="xl" src={user.avatar} />

    <Text color="black" size="lg">{user?.name}</Text>
    <Text color="grey" size="lg">{user?.email}</Text>

    <div style={{ display: "flex", gap: "8px" }}>
      <div style={{ color: "black", fontWeight: "bold" }}>USER_ID:</div>
      <div style={{ color: "black" }}>{user?._id}</div>
    </div>

    <div style={{ display: "flex", gap: "8px" }}>
      <div style={{ color: "black", fontWeight: "bold" }}>ACCOUNT CREATED:</div>
      <div style={{ color: "black" }}>{user?.createdAt}</div>
    </div>
  </div>
</Center>



           }
       </div>
   )
}

