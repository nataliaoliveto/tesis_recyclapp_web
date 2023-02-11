import React from "react";
import Router from "next/router";

type Props = {};

export const Image = () => {
  const [images, setImages] = React.useState([
    {
      publicId: "",
      version: 0,
      format: "",
    },
  ]); // set the type of the state to an array of objects

  const fetchImages = async () => {
    const response = await fetch("http://localhost:5000/api/images");
    const data = await response.json();
    // setImages(data);
    console.log(data);
  };

  React.useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <div className="page">
        <h1>Image Gallery</h1>
        <Upload />
        <main>
          {images.map((image) => (
            <img
              src={`https://res.cloudinary.com/dakunjike/v${image.version}/${image.publicId}.${image.format}`}
              key={image.publicId}
            />
          ))}
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

export const Upload = () => {
  const [imageUploaded, setImageUploaded] = React.useState();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("event.target.files[0]", event.target.files[0]);
    setImageUploaded(event.target.files[0]);
  };

  const submitData = async (e) => {
    e.preventDefault();

    if (!imageUploaded) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append("mi_file", imageUploaded);

      console.log(formData);

      await fetch("http://localhost:5000/api/image", {
        method: "POST",
        body: formData,
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
          ></input>

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
