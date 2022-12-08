const CourseItem = ({ course }) => {
    return (
        <div style={{
            border: "1px solid red",
            marginBottom: "20px"
        }}>
            <div>ID: {course.id}</div>
            <div>Nombre: {course.name}</div>
        </div>
    );
};

export default CourseItem;
