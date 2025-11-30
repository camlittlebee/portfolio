import type { CardProps } from "../../types/Card.types";
const format = (d?: Date) =>
  d ? d.toLocaleDateString("pt-BR") : "Atualmente";

const Card = (props: CardProps) => {
  switch (props.type) {
    case 'projetos':
      return (
        <div className="card__projetos">
          <p>{props.img}</p>
          <hr />
          <h2>{props.title}</h2>
          <p>{props.link}</p>
          <p>{props.empresa}</p>
        </div>
      );
    case 'trabalho':
      return (
        <div className="card__trabalho">
          <p>{props.img}</p>
          <hr />
          <h2>{props.empresa}</h2>
          <p>{props.cargo}</p>
          <p>{props.funcoes}</p>
          <p>{format(props.dataInicio)}</p>
          <p>{format(props.dataFim)}</p>
        </div>
      );
    case 'educacao':
      return (
        <div className="card__educacao">
          <p>{props.img}</p>
          <hr />
          <h2>{props.title}</h2>
          <p>{props.curso}</p>
        </div>
      );
    default:
      return null;
  }
};

export default Card;