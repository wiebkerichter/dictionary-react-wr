import React from "react";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos)
    return (
      <section className="Photos">
        <div className="container-fluid">
          <div className="row">
            {props.photos.map(function (photo, index) {
              return (
                <div key={index} className="col-4 mb-3">
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img
                      src={photo.src.landscape}
                      className="rounded img-fluid"
                      alt={photo.alt}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
}
