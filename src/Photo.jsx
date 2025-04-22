import React from "react";

const Photo = (props) => {
    if (props.photo) {
      console.log(props.photo)
    return (
      <section className="bg-white rounded-md my-3 lg:p-5 p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {props.photo.map((photo, index) => {
            return <img
                  src={photo.largeImageURL}
                  key={index}
                  className="w-64 h-64 lg:w-64 lg:h-64 rounded-lg object-cover mx-auto "
                />;
            
        })}
      </section>
    );
  } else {
    return null;
  }
};

export default Photo;
