import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
class CoursesPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadCourses().catch((err) => {
      console.log("err", err);
    });
    this.props.actions.loadAuthors().catch((err) => {
      console.log("loadAuthors err", err);
    });
  }

  render() {
    return (
      <div>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses}></CourseList>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions, dispatch),
      loadAuthors: bindActionCreators(authorActions, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
