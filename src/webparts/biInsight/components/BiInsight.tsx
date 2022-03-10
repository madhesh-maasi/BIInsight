import * as React from "react";
import styles from "./BiInsight.module.scss";
import { IBiInsightProps } from "./IBiInsightProps";
import { escape } from "@microsoft/sp-lodash-subset";
import App from "./App";
import "../../../ExternalRef/CSS/style.css";

export default class BiInsight extends React.Component<IBiInsightProps, {}> {
  public render(): React.ReactElement<IBiInsightProps> {
    return (
      <>
        <div className={styles.headerStyle}>Janssen Insight Portal</div>
        <App />
      </>
    );
  }
}
