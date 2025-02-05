export default function Modules() {
  return (
    <div>
      <button id="wd-collapse">Collapse All</button> 
      <button id="wd-view-progress">View Progress</button>
      <select id="wd-publish">
        <option value="PUBLISH">Publish All</option>
      </select>
      <button id="wd-add-module">+ Module</button>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
        </li>
      </ul>
    </div> 
  );
}
