export default function ComponentWrapper(props) {
    return <div style={{color: props.textColor}}>
        {props.children}
    </div>
}