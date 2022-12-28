import React from "react";

export default function Photos(props) {
  if (props.photos)
    return (
      <div className="Photos">
        <section>
          <div className="container-fluid">
            <div className="row">
              {props.photos.map(function (photo, index) {
                return (
                  <div key={index} className="col-4 mb-3">
                    <a
                      href={photo.src.original}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={photo.src.landscape}
                        className="rounded img-fluid"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
}
