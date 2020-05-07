import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";
import loading from "../../images/loading.png";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return <img className={styles.image} src={loading} />;
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          style={{
            backgroundColor: "#272729",
            borderColor: "rgba(0, 0, 255, 0.7)",
            borderWidth: 10,
            boxShadow: "2px 2px 2px 2px gray",
          }}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography className={styles.title} gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" className={styles.title}>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={1}
                separator="."
              />
            </Typography>
            <Typography className={styles.title}>
              {new Date(lastUpdate).toLocaleString()}
            </Typography>
            <Typography variant="body2" className={styles.title}>
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          style={{
            backgroundColor: "#272729",
            borderColor: "rgba(0, 255, 0, 0.7)",
            borderWidth: 10,
            boxShadow: "2px 2px 2px 2px gray",
          }}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography className={styles.title} gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" className={styles.title}>
              {" "}
              <CountUp
                start={0}
                end={recovered.value}
                duration={1}
                separator="."
              />
            </Typography>
            <Typography className={styles.title}>
              {" "}
              {new Date(lastUpdate).toLocaleString()}
            </Typography>
            <Typography variant="body2" className={styles.title}>
              Number of recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          style={{
            backgroundColor: "#272729",
            borderColor: "rgba(255, 0, 0, 0.7)",
            borderWidth: 10,
            boxShadow: "2px 2px 2px 2px gray",
          }}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography className={styles.title} gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" className={styles.title}>
              {" "}
              <CountUp
                start={0}
                end={deaths.value}
                duration={1}
                separator="."
              />
            </Typography>
            <Typography className={styles.title}>
              {" "}
              {new Date(lastUpdate).toLocaleString()}
            </Typography>
            <Typography variant="body2" className={styles.title}>
              Number of deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
