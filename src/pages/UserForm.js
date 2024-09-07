import { Grid2, Typography, Input, Button } from "@mui/material";

const UserForm = (props) => {
  return (
    <Grid2
      container
      spacing={2}
      sx={{
        backgroundColor: "white",
        marginBottom: "100px",
        display: "block",
      }}
    >
      <Grid2 item xs={12}>
        <Typography component="h1" sx={{ color: "#000000" }}>
          User Form
        </Typography>
      </Grid2>

      <Grid2 item xs={12} sm={6} sx={{ display: "flex" }}>
        <Typography
          component="label"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
          htmlFor="id"
        >
          ID
        </Typography>
        <Input
          type="number"
          id="id"
          name="id"
          sx={{ width: "400px" }}
          value={""}
          onChange={(e) => {}}
        />
      </Grid2>

      <Grid2 item xs={12} sm={6} sx={{ display: "flex" }}>
        <Typography
          component="label"
          htmlFor="name"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          Name
        </Typography>
        <Input
          type="text"
          id="name"
          name="name"
          sx={{ width: "400px" }}
          value={""}
          onChange={(e) => {}}
        />
      </Grid2>

      <Button
        sx={{
          margin: "auto",
          marginBottom: "20px",
          backgroundColor: "#00c6e6",
          color: "#000000",
          marginLeft: "15px",
          marginTop: "20px",
          "&:hover": {
            opacity: 0.7,
            backgroundColor: "#00c6e6",
          },
        }}
      >
        Add
      </Button>
    </Grid2>
  );
};

export default UserForm;