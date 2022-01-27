import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { useFormik } from "formik";
import React from "react";

const EmployeeCreateDialog = (props) => {
  const { roles } = props;
  const { onSubmit } = props;

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      phone: "",
      address: "",
      role: "",
    },
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container style={{ padding: 16 }}>
          <Grid item xs={12} style={{ marginBottom: 16 }}>
            <TextField
              name="username"
              type="text"
              label="Username"
              variant="outlined"
              fullWidth
              value={formik.values.username}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12} style={{ marginBottom: 16 }}>
            <TextField
              name="password"
              type="text"
              label="Password"
              variant="outlined"
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12} style={{ marginBottom: 16 }}>
            <TextField
              name="phone"
              type="text"
              label="Phone Number"
              variant="outlined"
              fullWidth
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12} style={{ marginBottom: 16 }}>
            <TextField
              name="address"
              type="text"
              label="Address"
              variant="outlined"
              fullWidth
              value={formik.values.address}
              onChange={formik.handleChange}
            />
          </Grid>

          <FormControl component="fieldset">
            <FormLabel component="legend">Role</FormLabel>
            <Grid item xs={12}>
              {roles.map((item) => (
                <React.Fragment>
                  <RadioGroup
                    aria-label="Roles"
                    name="role"
                    value={formik.values.role}
                    onChange={formik.handleChange}
                  >
                    <FormControlLabel
                      value={item._id}
                      control={<Radio />}
                      label={item.name}
                    />
                  </RadioGroup>
                </React.Fragment>
              ))}
            </Grid>
          </FormControl>
        </Grid>

        <Button
          variant="contained"
          type="submit"
          color="primary"
          style={{
            width: 120,
            margin: "auto",
            marginLeft: 16,
            marginBottom: 16,
            backgroundColor: "#177245",
          }}
        >
          Submit
        </Button>
      </form>
    </React.Fragment>
  );
};
export default EmployeeCreateDialog;
