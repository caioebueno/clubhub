import React from 'react'
import PropTypes from 'prop-types'

InputComp.propTypes = {
    placehodler: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    width: PropTypes.string,
}

InputComp.defaultProps = {
    width: '300px',
}

// STYLED COMPONENTS
import {Input} from './styles'

function InputComp(props) {
    return <Input {...props} />
}



export default InputComp