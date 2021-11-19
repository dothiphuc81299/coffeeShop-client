import { Button, Grid, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import React from "react";

const EventCreateDialog = (props) => {
  const { onSubmit } = props;

  const formik = useFormik({
    initialValues: {
      name: "",
      desc: "",
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
              name="name"
              type="text"
              label="Event's Name"
              variant="outlined"
              fullWidth
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="desc"
              type="text"
              label="Describe"
              variant="outlined"
              fullWidth
              value={formik.values.desc}
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
};
export default EventCreateDialog;
