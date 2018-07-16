import React from 'react'

import {connect} from 'react-redux'

import {getKicks} from '../api/kicks'

class Kicks extends React.Component {
    componentDidMount() {
        this.props.dispatch(getKicks())
        console.log('I should go get kicks now')
    }
    render() {
        const {kicks} = this.props
            return <div>
                {kicks.map(kick => <div>
                    <h1>{kick.name}</h1>
                </div>)}
            </div>
    }
}



const mapStateToProps = ({kicks}) => ({
    kicks
})


export default connect(mapStateToProps)(Kicks)