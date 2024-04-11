import { Component } from "react";

export class TodayDate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Intl.DateTimeFormat("eng", {day: "numeric", month: "long", weekday: "long"}).format(new Date()).replace(/(\s?\.?)/, "")
        }
    }

render () {
    return <p>{this.state.date}</p>
}
}