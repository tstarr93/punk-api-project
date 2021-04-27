import React from "react";
import styles from "./Filter.module.scss";

const Filter = () => {
  return (
    <>
      <section>
        <article>
          <label htmlFor="abv">
            High ABV
            <input type="checkbox" name="highABV" />
          </label>
          <label htmlFor="classic">
            Classic Range
            <input type="checkbox" name="classicRange" />
          </label>
          <label htmlFor="acidic">
            Acidic
            <input type="checkbox" name="acidic" />
          </label>
        </article>
      </section>
    </>
  );
};

export default Filter;
