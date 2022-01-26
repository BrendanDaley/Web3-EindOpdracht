import React from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Css/CheckoutPage.css";
import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const schema = Yup.object().shape({
  naam: Yup.string().required("Naam moet ingevuld zijn"),
  achterNaam: Yup.string().required("Achter Naam moet ingevuld zijn"),
  email: Yup.string()
    .email("Geen Geldig email adres")
    .required("Naam moet ingevuld zijn"),
  tel: Yup.number().positive().required("Naam moet ingevuld zijn"),
});

const CheckoutPage = () => {
  const cartState = useSelector((state) => state.cart);
  const { cartItems } = cartState;

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      naam: "",
      achterNaam: "",
      email: "",
      tel: "",
    },
    onSubmit: (values) => {
      const data = {
        klant: values,
        producten: cartItems,
      };
      axios
        .post("http://localhost:4000/postbestelling", data)
        .then((res) => {});
    },
    validationSchema: schema,
  });
  return (
    <div className="CheckoutPage">
      <h1>Vul uw gegevens in</h1>
      <form onSubmit={handleSubmit} className="KlantForm">
        <div className="formDiv">
          <label htmlFor="naam">Naam </label>
          <input
            id="naam"
            name="naam"
            value={values.naam}
            onChange={handleChange}
          />
          {errors && errors.naam && (
            <p style={{ color: "red" }}> {errors.naam}</p>
          )}
        </div>
        <div className="formDiv">
          <label htmlFor="achterNaam">Achternaam </label>
          <input
            id="achterNaam"
            name="achterNaam"
            value={values.achterNaam}
            onChange={handleChange}
          />
          {errors && errors.achterNaam && (
            <p style={{ color: "red" }}> {errors.achterNaam}</p>
          )}
        </div>
        <div className="formDiv">
          <label htmlFor="tel">Telefoon Nummer </label>
          <input
            id="tel"
            name="tel"
            value={values.tel}
            onChange={handleChange}
          />
          {errors && errors.tel && (
            <p style={{ color: "red" }}> {errors.tel}</p>
          )}
        </div>
        <div className="formDiv">
          <label htmlFor="email">Email </label>
          <input
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors && errors.email && (
            <p style={{ color: "red" }}> {errors.email}</p>
          )}
        </div>
        <div className="ButtonSubmitDiv">
          <Link to={"/winkelmand"}>
            <Button variant="contained" className="Cancel">
              Terug
            </Button>
          </Link>

          <Button variant="contained" type="submit" className="Submit">
            Bestel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;

{
  /*export const PostBestelling = createAsyncThunk("postbestelling", async () => {
  const response = await axios({
    url: "http://localhost:4000/postbestelling",
    method: "POST",
  });
  return response;
}); */
}
