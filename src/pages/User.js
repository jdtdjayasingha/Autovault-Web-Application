import { Box } from "@mui/material"; 
import UserForm from "./UserForm"; 
import UsersTable from "./UserTable"; 

const user = [
  { id: 1, name: 'Prasad' },
  { id: 2, name: 'Prasadi' }
];

const User = () => {
  return (
    <Box sx={{ width: 'calc(100% - 100px)', margin: 'auto', marginTop: '100px' }}>
      <UserForm />
      <UsersTable rows={user} />
    </Box>
  );
};

export default User;