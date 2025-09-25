// ~/components/ComponentLibrariesList
// We create components because they help us isolate specific
// parts of our page based on some visual and/or functional
// characteristic of our page.
// - Navigation Bars
// - Navigation Items
// - Fat Footers
// - Dashboards are examples of a larger layout component that gets filled with smaller components
import ListGroup from 'react-bootstrap/ListGroup';

const UI_LIBRARY_LIST = [
	{
		name: "MUI",
		url: "https://mui.com/"
	},
	{
		name: "React Bootstrap (the one we're looking at)",
		url: "https://react-bootstrap.github.io/"
	},
	{
		name: "Ant Design",
		url: "https://ant.design/docs/react/introduce"
	},
	{
		name: "Semantic UI",
		url: "https://react.semantic-ui.com/"
	}
]

export default function ComponentLibrariesList(props) {
    return <ListGroup>
        {UI_LIBRARY_LIST.map(({name, url}) => {
            return <ListGroup.Item>
                    <a href={url} target='_blank'>{name}</a>
                </ListGroup.Item>
        })}
    </ListGroup>
}
