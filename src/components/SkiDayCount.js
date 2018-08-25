import React, {Component} from 'react'
import '../stylesheets/ui.scss'


export class SkiDayCount extends Component {

    percentToDecimal(decimal) {
        return ((decimal * 100) + '%')
    }

    calsGoalProcress(total, goal) {
        return this.percentToDecimal(total / goal)
    }

    render() {
        return (
            <div className="ski-day-count">
                <div className="total-days">
                    <span>{this.props.total}</span>
                    <span>days</span>
                </div>
                <div className="powder-days">
                    <span>{this.props.powder}</span>
                    <span>days</span>
                </div>
                <div className="backcountry-days">
                    <span>{this.props.backcountry}</span>
                    <span>hiking days</span>
                </div>
                <div>
                    <span>
                        {this.calsGoalProcress(this.props.total, this.props.goal)}
                    </span></div>
            </div>
        );
    }
}

