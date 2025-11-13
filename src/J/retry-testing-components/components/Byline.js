// ~/components/Byline.js

export default function Byline(props) {
    const profileUrl = `https://github.com/${props.githubUsername}`;
    return <div>
        <span>by {props.author}</span>
        <a href={profileUrl} target="_blank">on GitHub</a>
    </div>
}
