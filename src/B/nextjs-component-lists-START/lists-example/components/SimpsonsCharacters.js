const SIMPSONS_CHARACTERS = [
    "Homer Simpson",
    "Bart Simpson",
    "Marge Simpson",
    "Mr. Burns",
    "Lisa Simpson",
	"Apu Nahasapeemapetilon",
	"Sideshow Bob",
	"Milhouse Van Houten",
	"Ned Flanders",
]

export default function SimpsonsCharacters(props) {
    return <ul>
        {SIMPSONS_CHARACTERS.map((characterName, index) => {
            return <li key={index}>{characterName}</li>
        })}
    </ul>
}
