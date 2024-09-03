import "./App.css";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks"; 

//Hooks
import { useForm } from "./hooks/userForm";

function App() {

    const formComponents = [
        <UserForm key="user-form" />,
        <ReviewForm key="review-form" />,
        <Thanks key="thanks" />,
      ];
      

  const { currentStep, currentComponent} = useForm(formComponents)

  return (
    <div className="App">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <p>etapas</p>
        <form action="">
          <div className="inputs-container">{currentComponent}</div>  
          <div className="actions">
            <button type="button">
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            <button type="submit">
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
