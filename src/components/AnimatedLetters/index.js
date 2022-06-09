import './index.scss';

const AnimatedLetters = ({letterClass, strArray, idx}) => {
    return (
        <span className='inline-animation'>
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    );
};

export default AnimatedLetters