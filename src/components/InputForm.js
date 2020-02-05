import React from 'react';

class InputForm extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return(
            <form>
                <label>
                    Date:
                    <input type="date" name="date" />
                </label><br/>
                <label>
                    Current Mileage:
                    <input type="float" name="mileage" />
                </label><br/>
                <label>
                    $ per gallon:
                    <input type="currency" name="pergal" />
                </label><br/>
                <label>
                    Gallons put into tank:
                    <input type="float" name="gallons" />
                </label><br/>
                <label>
                    Name of station:
                    <input type="string" name="stationName" />
                </label><br/>
                <label>
                    Address of station:
                    <input type="address" name="address" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default InputForm;