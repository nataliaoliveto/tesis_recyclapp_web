import React from "react";
import Router from "next/router";
import axios from "axios";
import { UserCreate } from "../models/user";
import { NextPageContext } from "next";

export const Image = ({ images }) => {
  // const [images, setImages] = React.useState([
  //   {
  //     publicId: "",
  //     version: 0,
  //     format: "",
  //   },
  // ]); // set the type of the state to an array of objects

  // const fetchImages = async () => {
  //   const response = await fetch("http://localhost:5000/api/images");
  //   const data = await response.json();
  //   setImages(data);
  // };

  // React.useEffect(() => {
  //   fetchImages();
  // }, []);

  return (
    <>
      <div className="page">
        <h1>Image Gallery</h1>
        <Upload />
        <main>
          {/* {images.map((image) => (
            <img
              src={`https://res.cloudinary.com/dakunjike/v${image.version}/${image.publicId}.${image.format}`}
              key={image.publicId}
            />
          ))}       */}
        </main>
      </div>
      <style jsx>{`
        .image {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }
        .image:hover {
          box-shadow: 1px 1px 3px #aaa;
        }
        .image + .image {
          margin-top: 2rem;
        }
      `}</style>
    </>
  );
};

const initialState: UserCreate = {
  name: "Elsa",
  surname: "Prisma222222",
  mail: "elsa2@prisma.io",
  phone: "01144446666",
  password: "password",
  username: "elsaprisma",
  userType: "CUSTOMER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "surname":
      return { ...state, surname: action.payload };
    case "mail":
      return { ...state, mail: action.payload };
    case "phone":
      return { ...state, phone: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "username":
      return { ...state, username: action.payload };
    case "userType":
      return { ...state, userType: action.payload };
    default:
      return state;
  }
};

export const Upload = () => {
  const [imageUploaded, setImageUploaded] = React.useState();
  const [formValues, dispatch] = React.useReducer(reducer, initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUploaded(event.target.files[0]);
  };

  const handleChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: event.target.name, payload: event.target.value });
  };

  const submitData = async (e) => {
    // http://localhost:5000/api/user
    e.preventDefault();

    if (!imageUploaded) return;

    try {
      const imageData = new FormData();
      imageData.append("image_file", imageUploaded);

      const res = await axios.post(
        "http://localhost:5000/api/user",
        formValues,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );

      imageData.append("publicid", "cleeteqqv0000up5soh9k24cs");
      imageData.append("subfolder", "User");

      const resImg = await fetch("http://localhost:5000/api/image", {
        method: "PUT",
        body: imageData,
        // username: "cleeteqqv0000up5soh9k24cs",
      });

      // Router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="page">
        <form onSubmit={submitData}>
          <h1>Upload Image</h1>

          <input
            onChange={handleChange}
            accept=".jpg, .png, .gif, .jpeg"
            type="file"
          />

          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChangeForm}
          />
          <label>Apellido:</label>
          <input
            type="text"
            name="surname"
            value={formValues.surname}
            onChange={handleChangeForm}
          />
          <label>Mail:</label>
          <input
            type="mail"
            name="mail"
            value={formValues.mail}
            onChange={handleChangeForm}
          />
          <label>Telefono:</label>
          <input
            type="number"
            name="phone"
            value={formValues.phone}
            onChange={handleChangeForm}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChangeForm}
          />
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChangeForm}
          />
          <label>Tipo de usuario:</label>
          <select>
            <option defaultValue={"CUSTOMER"} value="CUSTOMER">
              General
            </option>
            <option value="STORE">Tienda</option>
          </select>

          {/* genera user > devuelve username > genera request para cloudinary
        genera user > devuelve error > drop/mantain pending > se reenvia otro form con el nuevo/mismo pending
        
        1 mostrar en la web datos cargados (incluyendo la imagen)
        2 mostrar errores pero mantener la carga de datos (se pierde la imagen????)*/}

          <input type="submit" value="Upload" />
        </form>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        input[type="submit"] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }
      `}</style>
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const { req, res } = context;
  const response = await fetch("http://localhost:5000/api/images");
  const data = await response.json();

  return {
    props: {
      images: data,
    },
  };
}
