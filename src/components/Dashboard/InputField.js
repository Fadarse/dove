import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "blue",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "blue",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "gray",
    },
    "&:hover fieldset": {
      borderColor: "blue",
    },
    "&.Mui-focused fieldset": {
      borderColor: "blue",
    },
  },
});

const InputField = ({ label, value, onChange, ...props }) => {
  return (
    <CustomTextField
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      {...props}
    />
  );
};

export default InputField;
