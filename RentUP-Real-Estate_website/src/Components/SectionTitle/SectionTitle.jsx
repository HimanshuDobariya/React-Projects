import React from "react";

const SectionTitle = ({ img, title, subTitle }) => {
  return (
    <section
      className="flex"
      style={{
        backgroundImage: `linear-gradient(45deg, rgba(17, 40, 72, .629), rgba(17, 40, 72, .629)), url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        color: "#fff",
        height: "40vh",
      }}
    >
      <div className="container">
        <p style={{ textAlign: "center" }}>{subTitle}</p>
        <h1
          style={{ fontSize: "40px", fontWeight: "400", textAlign: "center" }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
};

export default SectionTitle;
