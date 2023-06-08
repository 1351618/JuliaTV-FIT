import React from "react";
import MainPages from "./main_content/main_page";
// import WorkoutPage from "./main_content/workout_page";

class Main extends React.Component {
    render() {
        return (
            <div>
                <MainPages/>
                {/* <WorkoutPage/> */}
            </div>
        )
    }
}

export default Main;