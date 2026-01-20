type trabalho = {
  type: "trabalho";
  img: string;
  empresa: string;
  cargo: string;
  funcoes?: string;
  dataInicio: Date;
  dataFim?: Date;
};
type educacao = {
  type: "educacao";
  title: string;
  img: string;
  curso: string;
  dataInicio: Date;
  dataFim?: Date;
};
type cursos = {
  type: "cursos";
  nome: string;
  img: string;
  instituicao: string;
  ano: string;
  skills: string[];
};
type projetos = {
  type: "projetos";
  img: string;
  logo: string;
  title: string;
  link: string;
  empresa: string;
  perfil?: string;
};

export type CardProps = trabalho | educacao | cursos | projetos;
