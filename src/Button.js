import './Button.css';

export function Button ({variant = "default" | "secondary", text, onClick}) {
    return (
        <button className={`${variant} buttonBody`} onClick={onClick}>{text}</button>
    );
}