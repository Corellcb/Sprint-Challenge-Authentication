import React from "react";
import axios from "axios";

export default class Jokes extends React.Component {
    constructor() {
        super();

        this.state = {
            jokes: []
        }
    };

    componentDidMount() {
        axios
            .get('http://localhost:4000/api/jokes')
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <h1>Jokes</h1>
                {this.state.jokes.map((el, index) => (
                    <p key={index}>{el.joke}</p>
                ))}
            </div>
        )
    }
}