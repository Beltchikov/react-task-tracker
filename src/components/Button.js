import Proptypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    return (
        <button
            onClick = {onClick}
            style={{ backgroundColor: color }}
            className='btn'>{text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelBlue'
}

Button.propTypes = {
    color: Proptypes.string,
    text: Proptypes.string,
    onClick: Proptypes.func
};

export default Button
