import React from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Css/CheckoutPage.css";
import axios from "axios";

const formikSchema = Yup.object().shape({
  naam: Yup.string().required("Naam moet ingevuld zijn"),
  achterNaam: Yup.string().required("Achter Naam moet ingevuld zijn"),
  email: Yup.string().required("Naam moet ingevuld zijn"),
  tel: Yup.number().positive().required("Naam moet ingevuld zijn"),
});

const CheckoutPage = () => {
  const cartState = useSelector((state) => state.cart);
  const { cartItems } = cartState;

  const formik = useFormik({
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
  });

  return (
    <div>
      <p>Naam</p>

      <p>Achternaam</p>

      <p>Email</p>

      <p>Telefoon Nummer</p>
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
