import { Link } from "react-router";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h3 id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" 
              to="/Kambaz/Courses/1234/Home">
            <img src="/images/reactjs.png" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" 
              to="/Kambaz/Courses/1221/Home">
            <img src="/images/books.jpg" width={200} />
            <div>
              <h5> ENGW1221 Advanced Writing </h5>
              <p className="wd-dashboard-course-title">
                Interdisciplinary Advanced Writing
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" 
              to="/Kambaz/Courses/3650/Home">
            <img src="/images/oldcomputer.jpg" width={200} />
            <div>
              <h5> CS3650 Systems </h5>
              <p className="wd-dashboard-course-title">
                Computer Systems and Assembly
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" 
              to="/Kambaz/Courses/3200/Home">
            <img src="/images/databases.jpg" width={200} />
            <div>
              <h5> CS3200 Database Design </h5>
              <p className="wd-dashboard-course-title">
                Introduction to Databases
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" 
              to="/Kambaz/Courses/3700/Home">
            <img src="/images/networks.jpg" width={200} />
            <div>
              <h5> CS3700 Networks </h5>
              <p className="wd-dashboard-course-title">
                Networks and Distributed Systems
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" 
              to="/Kambaz/Courses/4530/Home">
            <img src="/images/engineering.jpg" width={200} />
            <div>
              <h5> CS4530 Software Engineering </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Software Engineering
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" 
              to="/Kambaz/Courses/2321/Home">
            <img src="/images/math.jpg" width={200} />
            <div>
              <h5> MATH2321 Calculus 3 </h5>
              <p className="wd-dashboard-course-title">
                Calculus 3 for Science/Engineering
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />
      </h3>
    </div>
  );
}