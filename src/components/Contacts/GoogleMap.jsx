import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <iframe
        title="uniqueTitle"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d182.76486764319498!2d74.61326954924091!3d42.86782297985413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1681284469418!5m2!1sru!2skg"
        width="550"
        height="425"
        style={{ border: "none", borderRadius: "10px" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
