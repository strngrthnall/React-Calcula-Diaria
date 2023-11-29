import {
  header,
  containerLogo,
  logo,
  containerTitle,
  title,
  containerRepoLink,
  repoLink
} from './Header.module.css'

const imgUrl = 'https://raw.githubusercontent.com/strngrthnall/React-Calcula-Diaria/main/calculadora-de-diaria/src/assets/icon.png'
const repoImg = 'https://raw.githubusercontent.com/strngrthnall/React-Calcula-Diaria/main/calculadora-de-diaria/src/assets/icons8-github.svg'
const linkRepo = 'https://github.com/strngrthnall/React-Calcula-Diaria'

const Header = () => {
  return (
    <header className={ header }>
      <div className={ containerLogo }>
        <img className={ logo } src={imgUrl} alt="Icone de Calculadora" />
      </div>
      <div className={containerTitle}>
        <h1 className={ title }>Calculadora de Diarias</h1>
      </div>
      <div className={containerRepoLink}>
        <a href={ linkRepo }>
          <img className={ repoLink } src={repoImg} alt="Github Logo" />
        </a>
      </div>
    </header>
  )
}

export default Header