// Write your code here
import './index.css'

const AppItem = props => {
  const {eachAppItem} = props
  const {appName, imageUrl} = eachAppItem
  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="img" />
      <p className="name">{appName}</p>
    </li>
  )
}

export default AppItem
