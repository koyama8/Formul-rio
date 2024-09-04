import "./App.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";

// Hooks
import { useForm } from "./hooks/userForm";
import { useState, useEffect } from "react";

import Steps from "./components/Steps";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);
  const [headerText, setHeaderText] = useState("Deixe sua avaliação");

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserForm
      key="user-form"
      data={data}
      updateFieldHandler={updateFieldHandler}
    />,
    <ReviewForm
      key="review-form"
      data={data}
      updateFieldHandler={updateFieldHandler}
    />,
    <Thanks key="thanks" data={data} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  useEffect(() => {
    const texts = [
      "Deixe sua avaliação",
      "Dev. Koyama",
      "Formulário multi-step com React JS",
    ];
    let index = 0;

    const interval = setInterval(() => {
      setHeaderText(texts[index]);
      index = (index + 1) % texts.length; // Alterna entre os textos
    }, 5000); // Muda o texto a cada 2 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h2>{headerText}</h2>
        <p>
          Estamos empolgados com a sua avaliação! Sua opinião torna nossos
          produtos ainda melhores.
          <br />
          Preencha o formulário React abaixo e nos diga como foi sua experiência
          — cada feedback é uma mordida de energia positiva!
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form action="" onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}

            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
