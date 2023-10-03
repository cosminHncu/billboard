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
import { informationCircleOutline, invertModeOutline } from "ionicons/icons";
import TextArea from "../components/TextArea";
import { useBillboardContext } from "../context/BillboardContext";
import { KeepAwake } from "@capacitor-community/keep-awake";
import { useEffect } from "react";

const Home: React.FC = () => {
  const { setLightMode, lightMode } = useBillboardContext();
  const handleLightMode = () => {
    setLightMode((prev: boolean) => !prev);
  };
  const keepAwake = async () => {
    await KeepAwake.keepAwake();
  };
  useEffect(() => {
    keepAwake();
  }, []);

  return (
    <IonPage>
      <IonHeader
        className={`ion-no-border ${
          lightMode ? "color-page--light" : "color-page"
        }`}
      >
        <IonToolbar color={lightMode ? "tertiary" : "secondary"}>
          <IonButtons className="p-2" slot="start">
            <div>
              <IonButton onClick={handleLightMode} slot="primary">
                <IonIcon icon={invertModeOutline} />
              </IonButton>
            </div>
          </IonButtons>

          <IonButtons className="p-2" slot="end">
            <IonRouterLink routerLink="/about">
              <IonButton>
                <IonIcon
                  color={lightMode ? "secondary" : "tertiary"}
                  size="large"
                  icon={informationCircleOutline}
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
