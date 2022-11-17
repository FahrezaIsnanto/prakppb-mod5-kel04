import "./CardProfile.css";

export default function CardProfile(props) {
    return (
        <div className="containerProfile">
            <img src={props.avatar} alt="avatar" className="avatarProfile" />
            <p className="usernameProfile">{props.username}</p>
            <p className="emailProfile">{props.email}</p>
            <h2 className="nameProfile">{props.name}</h2>
            <p className="blogProfile">{props.blog}</p>
        </div>
    );
}