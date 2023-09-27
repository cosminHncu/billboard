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
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import { informationCircleOutline } from "ionicons/icons";
import TextArea from "../components/TextArea";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"secondary"}>
          <IonButtons className="p-2" slot="primary">
            <IonRouterLink routerLink="/about">
              <IonButton>
                <IonIcon
                  color="tertiary"
                  size="large"
                  icon={informationCircleOutline}
                />
              </IonButton>
            </IonRouterLink>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding " color={"secondary"} fullscreen>
        <IonRow className="center">
          <IonCol size="12">
            <TextArea />
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

export default Home;
