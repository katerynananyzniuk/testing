import {Character} from './Character'

export function App({side}) {
  if(!side) {
    side = "light"
  }

  const characters = [
    {name:"Harry Hotter", side:"light"},
    {name:"Hagrid", side:"light"},
    {name:"Albus Dumbledore", side:"light"},
    {name:"Malfoy", side:"dark"},
    {name:"Voldemort", side:"dark"},
    // {name:"Bellatrix Lestrange", side:"dark"},
  ]

  const filteredChars = characters.filter(char => char.side === side)

  return (
    <ul>
      {filteredChars.map((char, index) => {
        return <Character key={char.name + index} name={char.name} side={char.side} />
      })}
    </ul>
  )
}