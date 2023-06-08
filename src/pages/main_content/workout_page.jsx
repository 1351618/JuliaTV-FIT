import React from "react";
import Fon_Ttren from "../../images/fon_tren.jpg";

class WorkoutPage extends React.Component {
    render() {
        return (
            <div id="training-cont">
                <div id="training-cont_foto"><img src={Fon_Ttren} alt=""/></div>
                    <div id="training-cont_body">
                        <h1>Выбери свой комплекс тренировок</h1>
                        <div class="training_button">
                        <button id="training_button_bot-1">выпучивание глаз</button>
                        <button id="training_button_bot-2">свирепый крик</button>
                        <button id="training_button_bot-3">натуживание сидя</button>
                        <button id="training_button_bot-4">лежаций поаорот</button>
                        <button id="training_button_bot-5">руканогий бег</button>
                        <button id="training_button_bot-6">замерание</button>
                        <button id="training_button_bot-7">котопоглаживание</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkoutPage;