import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./spinner.module.scss";

library.add(fas);

const Spinner = () => <FontAwesomeIcon icon="spinner" spin size="7x" className={styles.spinner} />;

export default Spinner;
