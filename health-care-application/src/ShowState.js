import React from 'react'
import { connect } from 'react-redux'


export default function ShowState(props) {
    return (
        <div>
            <h1>All State</h1>
            <p> {typeof props.Info} </p>
            {/* {props.Info.map((i)=>
                <p>{i.peopleID}</p>
            )} */}
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         elderlyInfos: state
//     }
// }

// export default connect(mapStateToProps)(ShowState);
