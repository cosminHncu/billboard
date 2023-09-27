import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonRouterLink,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";
import { closeCircleOutline } from "ionicons/icons";
import { TypeAnimation } from "react-type-animation";
import "./About.css";

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"secondary"}>
          <IonButtons className="p-2" slot="primary">
            <IonRouterLink
              routerLink="/home
            "
            >
              <IonButton>
                <IonIcon
                  color="tertiary"
                  size="large"
                  icon={closeCircleOutline}
                />
              </IonButton>
            </IonRouterLink>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding " color={"secondary"} fullscreen>
        <IonRow className="center">
          <IonCol size="12">
            <TypeAnimation
              className="heading"
              sequence={[
                "ELLIPSE <3",
                1000,
                "GIN TONIC",
                500,
                "WISH YOU WERE HERE",
                500,
                "PLAY APHEX TWIN",
                500,
                "IM HUNGRY",
                500,
                "SKRRT SKRT",
                500,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                width: "100%",
                textAlign: "left",
                fontSize: "4rem",
                color: "#fff",
                fontWeight: "bolder",
              }}
            />
          </IonCol>
          <IonCol size="12">
            <div>
              <IonText>
                According to bMedia Group, a minute of advertising in Times
                Square is worth $62. A minute of your screen time is worth more.
              </IonText>
            </div>
            <br />
            <div>
              <IonText>
                Ellipse gives you your own personal billboard in your pocket. A
                straight-forward way to share your message. Write, display, show
                the world.
              </IonText>
            </div>
            <br />
            <div>
              <IonText>Write, display & show the world.</IonText>
            </div>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="flex-center ">
            This is your portable billboard by
            <span className="pl-1">
              <a href="http://bit.ly/3LCjSqI">Ellipse</a>
            </span>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default About;
