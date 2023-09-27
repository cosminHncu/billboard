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
  const { setBillboardTxt, setTextLength } = useBillboardContext();
  const [isMoving, setIsMoving] = useState(true);
  const [inputText, setInputText] = useState("");
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
      setTextLength(50);
      router.push("/billboard");
    } else {
      setBillboardTxt(inputText);
      router.push("/billboard");
    }
  };

  return (
    <IonRow className="input-border">
      <IonCol size="9">
        <IonInput
          autoCapitalize="characters"
          onInput={handleInputChange}
          aria-label="Custom textarea"
          placeholder="TYPE HERE"
          className="custom"
          //helperText="Helper text"
          //counter={true}
          maxlength={100}
        ></IonInput>
      </IonCol>
      <IonCol size="3" className="flex-center">
        <IonButton
          className="border-bottom"
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
