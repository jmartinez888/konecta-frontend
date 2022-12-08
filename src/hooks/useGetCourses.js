import { useEffect, useState } from "react";
import { RequestGet } from "../utils/request";

const useGetCourses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        (async () => {
            const courses = await RequestGet("/courses")
            setCourses(courses);
        })()
        return () => { };
    }, []);

    return { courses }
};

export default useGetCourses;
