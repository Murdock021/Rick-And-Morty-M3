import style from "./about.module.css";

const About = () => {
  return (
    <div className={style.todo}>
      <div className={style.all}>
        <h1 className={style.saludo}>Hello World</h1>
        <h2 className={style.nombre}>Olá, Me chamo Diogo Machado, tenho 31 anos, moro no Rio de Janeiro profissional com experiência em TI à 13 anos, me encontrei na programação, e á 1 Anos e 3 meses aprimorei minhas capacidades como desenvolvedor e me desafiei a conseguir aprimorar minhas habilidades em programação. </h2>
        <h3 className={style.texto}>
          Bem Viando ao Meu Primeiro Projeto  Front-End con React
        </h3>
      </div>
      <div className={style.container}>
        <div className={style.logo}></div>
        <div className={style.bottom}></div>
      </div>
    </div>
  );
};

export default About;
