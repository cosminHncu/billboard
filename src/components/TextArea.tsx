import { useState } from "react";
import "./TextArea.css";
import {
  IonButton,
  IonCol,
  IonInput,
  IonRow,
  useIonRouter,
} from "@ionic/react";
import { useBillboardContext } from "../context/BillboardContext";

export default function TextArea() {
  const { setBillboardTxt, setTextLength, lightMode, inputText, setInputText } =
    useBillboardContext();

  const [error, setError] = useState(false);
  const router = useIonRouter();
  const handleInputChange = (event: any) => {
    setError(false);
    setInputText(event.target.value.toUpperCase());
  };

  const handleSubmit = () => {
    setTextLength(inputText.length);
    if (inputText === "") {
      setBillboardTxt("FOLLOW @ELLLLLLLLLLLLLIPSE");
      setTextLength(30);
      router.push("/billboard");
    } else {
      setBillboardTxt(inputText);
      router.push("/billboard");
    }
  };

  return (
    <IonRow className={lightMode ? "input-border--light" : "input-border"}>
      <IonCol size="9">
        <IonInput
          autoCapitalize="characters"
          onInput={handleInputChange}
          aria-label="Custom textarea"
          placeholder="TYPE HERE"
          className={lightMode ? "custom--light" : "custom"}
          style={{ textTransform: "uppercase" }}
          maxlength={30}
          value={inputText}
        ></IonInput>
      </IonCol>
      <IonCol size="3" className="flex-center">
        <IonButton
          className="border-bottom "
          strong
          fill="clear"
          onClick={handleSubmit}
          size="small"
        >
          DISPLAY
        </IonButton>
      </IonCol>
    </IonRow>
  );
}
