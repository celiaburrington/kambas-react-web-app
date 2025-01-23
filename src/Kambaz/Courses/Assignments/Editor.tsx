export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <h4><label htmlFor="wd-name">Assignment Name</label></h4>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description" rows={13} cols={45}>
        The assignment is available online Submit a link to the landing page of your Web application running on Netlify. 
        The landing page should be the Kambaz application with a link to the Lab exercises.
        Lab 1 should be the landing page of the Lab exercises and should include the following:
        Your full name and section Links to each of the lab assignments Link to the Kambaz application 
        Links to all relevant source code repositories The Kambaz application should include a link to navigate back to the landing page. 
      </textarea><br /><br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as </label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="PERCENTAGE">Percentage</option>
              <option value="LETTER">Letter</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="ONLINE">Online</option>
              <option value="PERSON">In Person</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top" />
          <td>
            Online Entry Options<br />
            <input type="checkbox" name="wd-entry-options" id="wd-text-entry"></input>
            <label htmlFor="wd-text-entry"> Text Entry</label><br />
            <input type="checkbox" name="wd-entry-options" id="wd-website-url"></input>
            <label htmlFor="wd-website-url"> Website URL</label><br />
            <input type="checkbox" name="wd-entry-options" id="wd-media-recordings"></input>
            <label htmlFor="wd-media-recordings"> Media Recordings</label><br />
            <input type="checkbox" name="wd-entry-options" id="wd-student-annotation"></input>
            <label htmlFor="wd-student-annotation"> Student Annotation</label><br />
            <input type="checkbox" name="wd-entry-options" id="wd-file-upload"></input>
            <label htmlFor="wd-file-upload"> File Uploads</label><br />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            Assign
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label><br />
            <input id="wd-assign-to" value="Everyone" /><br /><br />
            <label htmlFor="wd-due-date">Due</label><br />
            <input type="date" id="wd-due-date" value="2024-05-13"/><br /><br />
            <table>
              <tr>
                <td>
                  <label htmlFor="wd-available-from">Available from</label>
                </td>
                <td>
                  <label htmlFor="wd-available-until">Until</label>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="date" id="wd-available-from" value="2024-05-06"/>
                </td>
                <td>
                  <input type="date" id="wd-available-until" value="2024-05-20"/>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tfoot>
            <tr>
              <td align="right" colSpan={2}>
                <hr />
                <button>Cancel</button>
                <button>Save</button>
              </td>
            </tr>
        </tfoot>
      </table>
    </div>
  );
}