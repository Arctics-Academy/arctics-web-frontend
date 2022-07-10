// Stylesheet
import "./global-button.css"

// Main Component
const ActionButton = ({ type=undefined, label, loading=false, callback }) => {
  if (label.length <= 2) {
    if (loading) {
      return (
        <button className="global__action-button global__action-button-2 global__action-button--loading">
            <div className="global__action-button-div--loading">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
        </button>
      )
    }
    else {
      return (
        <button type={(type ? type : '')} className="global__action-button global__action-button-2" onClick={callback}>
          <span className="global__action-button-text">{label}</span>
        </button>
      )
    }
  }
  else {
    if (loading) {
      return (
        <button className="global__action-button global__action-button-4 global__action-button--loading">
            <div className="global__action-button-div--loading">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
        </button>
      )
    }
    else {
      return (
        <button type={(type ? type : '')} className="global__action-button global__action-button-4" onClick={callback}>
          <span className="global__action-button-text">{label}</span>
        </button>
      )
    }
  }
}

// Exports
export default ActionButton

