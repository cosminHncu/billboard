import { IonContent, IonPage, IonRouterLink } from "@ionic/react";
import { useBillboardContext } from "../context/BillboardContext";
import "./Billboard.css";
const Billboard: React.FC = () => {
  const { billboardTxt, textLength } = useBillboardContext();
  console.log(textLength);
  return (
    <IonPage>
      <IonContent fullscreen={true} color={"secondary"}>
        <IonRouterLink routerLink="/home">
          <div className="rotate">
            <p
              className={`rotate ${
                textLength <= 5
                  ? "moving-text1"
                  : textLength <= 10
                  ? "moving-text2"
                  : textLength <= 15
                  ? "movie-text3"
                  : "moving-text3"
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
