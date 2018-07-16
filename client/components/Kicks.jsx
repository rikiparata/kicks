import React from 'react'

import {connect} from 'react-redux'

function Kicks (props) {
    console.log(props)
    return <div>
        {props.kicks.map(kick => <div>
            <h1>{kick.name}</h1>
        </div>)}
    </div>
}

const mapStateToProps = ({kicks}) => ({
    kicks
})


export default connect(mapStateToProps)(Kicks)