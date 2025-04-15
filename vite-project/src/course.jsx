import PropTypes from 'prop-types';

function Course(props) {
    return (
        <>

            <div className="Card">
                <p><img src={props.image} alt=""></img></p>
                <h1>{props.name}</h1>
                <span>{props.price}</span>
            </div>
            

        </>
    );
}
//default props defining method
// Course.defaultProps={
//     price:'23',
// };

Course.PropTypes = {
    name:PropTypes.number,
}
export default Course