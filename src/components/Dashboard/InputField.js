import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "4CAF50",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "4CAF50",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "4CAF50",
    },
    "&:hover fieldset": {
      borderColor: "4CAF50",
    },
    "&.Mui-focused fieldset": {
      borderColor: "4CAF50",
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
