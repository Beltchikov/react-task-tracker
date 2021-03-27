import Proptypes from 'prop-types'

const Button = ({color, text}) => {
    return (
        <button style={{backgroundColor: color}} className='btn'>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelBlue'
}

Button.propTypes = {
    color : Proptypes.string, 
    text: Proptypes.string
};

export default Button
