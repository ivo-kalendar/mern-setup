import spinner from '../assets/spinner.svg';

const Spinner = () => {
    const spinnerStyle = {
        width: '3rem',
        margin: 'auto',
        // display: 'block',
    };

    return (
        <div className='container'>
            <img src={spinner} style={spinnerStyle} alt='Loading...' />
        </div>
    );
};

export default Spinner;
