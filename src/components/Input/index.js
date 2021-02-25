import { Grid, InputAdornment, TextField, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const Input = ({
  half,
  label,
  name,
  handleChange,
  handleShowPassword,
  value,
  type,
  autoFocus,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        label={label}
        onChange={(e) => handleChange(e)}
        variant="outlined"
        required
        name={name}
        value={value}
        type={type}
        autoFocus={autoFocus}
        fullWidth
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "password" ? <Visibility /> : <VisibilityOff />}{" "}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default Input;
