import React from "react";

// bu fonksiyon datadan gelen description keyinin valuesunu kontrol eder.
// eğer description valuesu array tipinde ise li etiketi içinde ekrana basar değil ise p etiketi 
// içinde basar
const RenderDescription = (description) => {
  if (Array.isArray(description)) {
    return (
      <ul>
        {description.map((item, index) => (
          <li className="list-style-circle" key={index}>
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return <p>{description}</p>;
};

export default RenderDescription;
