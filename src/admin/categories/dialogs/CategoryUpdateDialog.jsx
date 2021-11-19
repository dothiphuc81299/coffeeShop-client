import { Button, Grid, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import React from "react";

const CategoryUpdateDialog = (props) => {
  const { category } = props;
  const { onSubmit } = props;

  const formik = useFormik({
    initialValues: {
      name: category.name || null,
    },
    onSubmit: (values) => {
      onSubmit({ ...values, _id: category._id });
    },
  });

  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container style={{ padding: 16 }}>
          <Grid item xs={12}>
            <TextField
              name="name"
              type="text"
              label="Category's Name"
              variant="outlined"
              fullWidth
              value={formik.values.name}
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
            backgroundColor: "#5FA3B7",
          }}
        >
          Submit
        </Button>
      </form>
    </React.Fragment>
  );
};
export default CategoryUpdateDialog;
