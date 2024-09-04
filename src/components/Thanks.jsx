import PropTypes from "prop-types";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./Thanks.css";

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>Obrigado!</h2>

      <p>
        Este formulário foi desenvolvido com React, utilizando uma combinação de
        componentes funcionais e hooks personalizados para gerenciar o estado e
        a navegação multi-step. A integração de bibliotecas como react-icons
        para os ícones e uma estilização moderna com CSS garante uma experiência
        fluida e atraente.
      </p>
      <p>Para concluir sua avaliação clique no botão de Enviar abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação, {data.name}:</h3>

      <p className="review-data">
        <span>Satisfação:</span> {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comentário:</span> {data.comment}
      </p>
    </div>
  );
};

// Validação das props usando prop-types
Thanks.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    review: PropTypes.oneOf([
      "unsatisfied",
      "neutral",
      "satisfied",
      "very_satisfied",
    ]).isRequired,
    comment: PropTypes.string.isRequired,
  }).isRequired,
};

export default Thanks;
