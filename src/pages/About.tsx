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
import { useBillboardContext } from "../context/BillboardContext";

const About: React.FC = () => {
  const { lightMode } = useBillboardContext();

  return (
    <IonPage>
      <IonHeader
        className={`ion-no-border ${
          lightMode ? "color-page--light" : "color-page"
        }`}
      >
        <IonToolbar color={lightMode ? "tertiary" : "secondary"}>
          <IonButtons className="p-2" slot="end">
            <IonRouterLink routerLink="/home">
              <IonButton>
                <IonIcon
                  color={lightMode ? "secondary" : "tertiary"}
                  size="large"
                  icon={closeCircleOutline}
                />
              </IonButton>
            </IonRouterLink>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent
        className="ion-padding "
        color={lightMode ? "tertiary" : "secondary"}
        fullscreen
      >
        <IonRow className="center">
          <IonCol size="12">
            <TypeAnimation
              sequence={[
                "ELLIPSE <3",
                1000,
                "TYPE SMTH LIKE",
                500,
                "GIN TONIC",
                500,
                "WISH YOU WERE HERE",
                500,
                "PLAY APHEX TWIN",
                500,
                "I'M HUNGRY",
                500,
                "RACE?",
                500,
                "SKRRT SKRRT",
                500,
                "SPREAD LOVE",
                500,
                "BE CREATIVE",
                500,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className={lightMode ? "heading--light" : "heading"}
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
                straight-forward way to share your message.
              </IonText>
            </div>
            <br />
            <div>
              <IonText>Type, display & show the world.</IonText>
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
