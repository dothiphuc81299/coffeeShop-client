import { Button, Grid, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const MenuCreateDialog = (props) => {
  const { list } = props;
  const { onSubmit } = props;

  const formik = useFormik({
    initialValues: {
      name: "",
      price: null,
      category: "",
      image: "",
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
              label="Drink's Name"
              variant="outlined"
              fullWidth
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12} style={{ marginBottom: 16 }}>
            <TextField
              name="price"
              type="number"
              label="Price"
              variant="outlined"
              fullWidth
              value={formik.values.price}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12} style={{ marginBottom: 16 }}>
            <TextField
              name="image"
              type="text"
              label="Image"
              variant="outlined"
              fullWidth
              value={formik.values.image}
              onChange={formik.handleChange}
            />
          </Grid>

          <FormControl component="fieldset">
            <FormLabel component="legend">Category</FormLabel>
            <Grid item xs={12}>
              {list.map((item) => (
                <React.Fragment>
                  <RadioGroup
                    aria-label="Category"
                    name="category"
                    value={formik.values.category}
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
            backgroundColor: "#5FA3B7",
          }}
        >
          Submit
        </Button>
      </form>
    </React.Fragment>
  );
};
export default MenuCreateDialog;
