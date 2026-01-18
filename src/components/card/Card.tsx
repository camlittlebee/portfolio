import type { CardProps } from "../../types/Card.types";
const format = (d?: Date) =>
  d ? d.toLocaleDateString("pt-BR") : "Atualmente";

const Card = (props: CardProps) => {
  switch (props.type) {
    case 'projetos':
      return (
        <a className="card__projetos" href={`${props.link}`} target="_blank" rel="noopener noreferrer" title="Ler Artigo">
          <div className="card-header">
            <img className="card-logo" src={`./src/assets/logos/${props.logo}.webp`} alt={`Logo ${props.empresa}`} title={`Logo ${props.empresa}`} width='50' height='50' />
            <p className="card-tag">{props.empresa}</p>
          </div>
          <div className="card-cover">
            <img src={`./src/assets/cover/${props.img}.webp`} alt={`Cover ${props.title}`} title={`Cover ${props.title}`} />
          </div>
          <h2 className="card-title">{props.title}</h2>

          {props.perfil && (
            <a className="card__btn-perfil" href={props.perfil} target="_blank" rel="noopener noreferrer" title="Ver Mais Artigos">
              Leia Outros Artigos
            </a>
          )}
        </a>
      );
    case 'trabalho':
      return (
        <div className="card__trabalho">
          <img className="card-logo" src={`./src/assets/logos/${props.img}.webp`} alt={`Logo ${props.empresa}`} title={`Logo ${props.empresa}`} width='145' height='145' />
          <div className="card-body">
            <h2 className="card-title">{props.empresa}</h2>
            <p className="card-subtitle">{props.cargo}</p>
            <p className="card-text">{props.funcoes}</p>
            <div className="card-time">
              <time>{format(props.dataInicio)}</time>
              -
              <time>{format(props.dataFim)}</time>
            </div>
          </div>
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