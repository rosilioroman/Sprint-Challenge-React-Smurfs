import React, { Fragment} from 'react';

import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

const SmurfEdit = props => {
    const smurfId = props.match.params.id;
    const {id, name, height, age} = props.smurfs[smurfId];
    return(
        <Fragment>
            <div className="current-smurf">
                <h2>Current Smurf</h2>
                <Smurf id={id} name={name} height={height} age={age}/>
            </div>
            <SmurfForm formType="edit"/>
        </Fragment>
    );
}

export default SmurfEdit;