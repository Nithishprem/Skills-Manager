import PropTypes from 'prop-types';

function Button({children, type, version, onClick, isDisabled}) {
    return (
        <button type={type} className={`btn btn-${version}`} onClick={onClick} disabled={isDisabled}>{children}</button>
    )
}

Button.defaultProps = {
    version: 'primary',
    isDisabled: false,
    type: 'button'
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,

}

export default Button
