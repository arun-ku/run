import React,{ Component } from 'react';
import Cell from './LudoCell';

export default class Board extends Component {

    render() {
        return (
            <div className="ludo-board">
                <ul>
                    {
                        [...new Array(100)].map((v, index) => {
                            return <Cell key={`key_${index}`} />
                        })
                    }
                </ul>
            </div>
        );
    }
}