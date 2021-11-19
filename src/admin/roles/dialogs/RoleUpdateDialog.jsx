import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { useFormik } from "formik";
import React from "react";

const RoleUpdateDialog = (props) => {
  const { role, permissions } = props;

  const { onSubmit } = props;

  const formik = useFormik({
    initialValues: {
      name: role.name,
      permissions: role.permissions,
    },
    onSubmit: (values) => {
      onSubmit({
        ...values,
        _id: role._id,
      });
    },
  });

  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container style={{ padding: 16 }}>
          <Grid item xs={12} style={{ marginBottom: 16 }}>
            <TextField
              name="name"
              type="text"
              label="Role's name"
              variant="outlined"
              fullWidth
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </Grid>

          <FormControl component="fieldset">
            <FormLabel component="legend">Permissions</FormLabel>

            <Grid container>
              {permissions.map((permission) => (
                <React.Fragment>
                  <Grid item xs={3}>
                    <Typography
                      style={{
                        marginTop: 16,
                        fontWeight: 600,
                      }}
                    >
                      {permission.name}
                    </Typography>

                    {permission.permissions.map((item) => (
                      <FormGroup
                        aria-label="Permissions"
                        name="permissions"
                        value={[formik.values.permissions]}
                        onChange={formik.handleChange}
                      >
                        <FormControlLabel
                          name="permissions"
                          value={item._id}
                          control={<Checkbox color="primary" />}
                          label={item._id}
                        />
                      </FormGroup>
                    ))}
                  </Grid>
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
            backgroundColor: "#5FA3B7",
          }}
        >
          Submit
        </Button>
      </form>
    </React.Fragment>
  );
};
export default RoleUpdateDialog;
