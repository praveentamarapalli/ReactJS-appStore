// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTabItem, onClickTabItem, isClicked} = props
  const {tabId, displayText} = eachTabItem
  const selectedItemStyle = isClicked ? 'selected' : ''
  const onClickTab = () => {
    onClickTabItem(tabId)
  }
  return (
    <>
      <li>
        <button
          type="button"
          className={`button ${selectedItemStyle}`}
          onClick={onClickTab}
        >
          {displayText}
        </button>
        <hr className={`line ${selectedItemStyle}`} />
      </li>
    </>
  )
}
export default TabItem
