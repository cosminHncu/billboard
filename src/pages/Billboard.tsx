import { IonContent, IonPage, IonRouterLink } from "@ionic/react";
import { useBillboardContext } from "../context/BillboardContext";
import "./Billboard.css";
import { KeepAwake } from "@capacitor-community/keep-awake";
import { useEffect } from "react";

const Billboard: React.FC = () => {
  const { billboardTxt, textLength, lightMode } = useBillboardContext();
  const keepAwake = async () => {
    await KeepAwake.keepAwake();
  };
  useEffect(() => {
    keepAwake();
  }, []);
  console.log(textLength);
  return (
    <IonPage>
      <IonContent
        fullscreen={true}
        color={lightMode ? "tertiary" : "secondary"}
      >
        <IonRouterLink routerLink="/home">
          <div className="rotate">
            <p
              className={`rotate ${
                textLength <= 3
                  ? "moving-text1"
                  : textLength <= 6
                  ? "moving-text2"
                  : textLength <= 9
                  ? "moving-text3"
                  : textLength <= 12
                  ? "moving-text4"
                  : textLength <= 15
                  ? "moving-text5"
                  : textLength <= 18
                  ? "moving-text6"
                  : textLength <= 21
                  ? "moving-text7"
                  : textLength <= 24
                  ? "moving-text8"
                  : textLength <= 27
                  ? "moving-text9"
                  : "moving-text9"
              }`}
            >
              {billboardTxt.toUpperCase()}
            </p>
          </div>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Billboard;
