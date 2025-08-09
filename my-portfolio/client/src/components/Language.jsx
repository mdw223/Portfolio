import '../styling/Language.css';

const Langauge = ({name, logo}) => {
    return (
        <div className="language-item description-spacing">
            <img src={logo} alt={name} />
            <p>{name}</p>
        </div>
    );
};
export default Langauge;
