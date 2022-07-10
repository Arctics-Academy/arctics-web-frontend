import "../global.css"

const PageTitle = ({ title }) => {
  return (
    <div className="global-page-title__wrapper">
      <h1 className="global-page-title__text">{title}</h1>
    </div>
  )
}

export default PageTitle