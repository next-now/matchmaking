import React, {useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);



export default function AskForHelp() {
  const classes = useStyles();
  const [education, setEducation] = useState(false);
  const [shopping, setShopping] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [medical, setMedical] = useState(false);
  return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <form onSubmit={(event) => {
            event.preventDefault();
            console.log("done");
            const data = new FormData(event.target);
            //data.get(".....")
          }}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Add help request</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Title"
                    id="title"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      name: "title"
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6} >
                  <CustomInput
                      labelText="Expiration date"
                      id="expirationDate"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        name: "expirationDate",
                        type: "date"
                      }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Estimated duration in hours"
                    id="durationInHours"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      name: "durationInHours",
                      type: "number"
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Address"
                    id="address"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      name: "location"
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Talk about what you need"
                    id="description"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <Checkbox
                      checked={education}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                      name="category"
                      label={"Education"}
                      value={1}
                      onChange={() => setEducation(!education)}

                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Checkbox
                      checked={delivery}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                      name="category"
                      label={"Delivery"}
                      value={2}
                      onChange={() => setDelivery(!delivery)}

                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <FormControlLabel
                      control={<Checkbox
                          checked={shopping}
                          inputProps={{'aria-label': 'primary checkbox'}}
                          name="category"
                          label={"Shopping"}
                          value={3}
                          onChange={() => setShopping(!shopping)}

                      />
                      }
                      label = "Shopping"
                      />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <FormControlLabel
                      control={
                        <Checkbox
                            checked={medical}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                            name="category"
                            label={"Medical"}
                            value={4}
                            onChange={() => setMedical(!medical)}
                        />
                      }
                      label="Medical"
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" type="submit">Update Profile</Button>
            </CardFooter>
          </Card>
          </form>
        </GridItem>
      </GridContainer>
  );
}
