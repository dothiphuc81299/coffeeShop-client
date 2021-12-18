import { Button, Grid, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function AccountUpdateDialog(props) {
  const { infor, token } = props;
  const { onSubmit } = props;

  const formik = useFormik({
    initialValues: {
      username: infor.username || null,
      phone: infor.phone || null,
      address: infor.address || null,
    },
    onSubmit: (values) => {
      onSubmit({
        token,
        ...values,
      });
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
              name="Address"
              type="text"
              label="Address"
              variant="outlined"
              fullWidth
              value={formik.values.address}
              onChange={formik.handleChange}
            />
          </Grid>
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
}
