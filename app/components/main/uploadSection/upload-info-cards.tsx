import React from "react";

const CARD_ARRAY = [
  {
    title: "Purpose",
    content: "",
  },
  {
    title: "Features",
    content: "",
  },
  {
    title: "Challenges",
    content: "More will come to mention",
  },
] as const;

const UploadInfoCards = () => {
  return (
    <div className="grid grid-cols-3 gap-16 pt-16">
      {CARD_ARRAY.map(({ title, content }) => (
        <div>
          <h3>{title}</h3>
          <span>{content}</span>
        </div>
      ))}
    </div>
  );
};

export default UploadInfoCards;
