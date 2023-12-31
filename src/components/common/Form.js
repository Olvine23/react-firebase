import React from "react";
import { Box, TextField } from "@mui/material";
import Button from "./Button";

function BasicTextFields({ title, setPassword, setEmail, handleAction }) {
  return (
    <div>
      <div className="heading-container">
        <h3>{title}</h3>
      </div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="email"
          label="Enter the Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Enter the Password"
          variant="outlined"
          onChange={(e)=> setPassword(e.target.value)}
        />
      </Box>
      <Button handleAction={handleAction} title={title}  />
    </div>
  );
}

export default BasicTextFields;
