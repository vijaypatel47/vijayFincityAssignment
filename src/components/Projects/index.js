import './index.css'

const Projects = props => {
  const {eachProject} = props
  const {name, link, details} = eachProject
  return (
    <div className="eachProjectContainer">
      <div className="details-container">
        <h1 className="name-in-view">{name}</h1>
        <p>{details}</p>
        <button type="button" className="view-project-button">
          view project
        </button>
      </div>
      <div className="img-container">
        <img src={link} alt="name" className="img" />
      </div>
    </div>
  )
}

export default Projects
