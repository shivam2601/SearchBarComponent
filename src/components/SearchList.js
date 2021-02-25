import React from "react";
const SearchlList = (props) => {
  let listData = props.data.slice(0,6) || [];
  return (
    <>
      {listData.length > 0 &&
        listData.map((data, index) => {
          const { city, airport, country } = data;
          return (
            <option
              key={index}
              value={city + " >> " + country + " (" + airport + ")"}
            ></option>
          );
        })}
    </>
  );
};
export default SearchlList;