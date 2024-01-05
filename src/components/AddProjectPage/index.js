import {Component} from 'react'
// import {Redirect} from 'react-router-dom'
import Projects from '../Projects'
import './index.css'

class AddProjectPage extends Component {
  state = {projectName: '', projectLink: '', description: '', projectList: []}

  onChangeProjectName = event => {
    this.setState({
      projectName: event.target.value,
    })
  }

  onChangeProjectLink = event => {
    this.setState({
      projectLink: event.target.value,
    })
  }

  onChangeDescription = event => {
    this.setState({
      description: event.target.value,
    })
  }

  onclickAddButton = async event => {
    event.preventDefault()
    const {projectName, projectLink, description} = this.state
    const NewProject = {
      name: projectName,
      link: projectLink,
      details: description,
    }
    this.setState(prevSate => ({
      projectList: [...prevSate.projectList, NewProject],
      projectName: '',
      projectLink: '',
      description: '',
    }))
  }

  render() {
    const {projectName, projectLink, description, projectList} = this.state
    return (
      <div className="projects-container">
        <h1 className="add-project-heading">Add Project</h1>
        <form className="from" onSubmit={this.onclickAddButton}>
          <div className="label-input-container">
            <label className="label" htmlFor="projectLink">
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              value={projectName}
              onChange={this.onChangeProjectName}
              placeholder="project Name"
            />
          </div>
          <div className="label-input-container">
            <label className="label" htmlFor="projectLink">
              Project Link
            </label>
            <input
              type="text"
              id="projectLink"
              value={projectLink}
              onChange={this.onChangeProjectLink}
              placeholder="project Link"
            />
          </div>
          <div className="label-input-container">
            <label className="label" htmlFor="description">
              Description
            </label>
            <textarea
              rows="8"
              cols="55"
              id="description"
              value={description}
              onChange={this.onChangeDescription}
            />
          </div>
          <button className="add-button" type="submit">
            Add
          </button>
        </form>
        <div project-view-section>
          <h1 className="projects">Projects</h1>
          {projectList.map(eachItem => (
            <Projects eachProject={eachItem} />
          ))}
        </div>
      </div>
    )
  }
}

export default AddProjectPage
