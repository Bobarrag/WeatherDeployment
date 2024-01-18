import { useState } from "react";
import { Combobox } from "@headlessui/react";

const people = [
  'First Person',
  'Second Person',
  'Third Person'
]

function Dropdown() {

  //sets selectedPerson to first entry of people
  const [selectedPerson, setSelectedPerson] = useState(people[0])
  const [query, setQuery] = useState('')

  //ternary operator: if query is empty? then just show the whole array 'people'
  //else return person if they include whatevery query equals
  const filteredPeople = 
    query === ''
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLocaleLowerCase())
      })

  return <>
    <Combobox value = {selectedPerson} onChange= {setSelectedPerson}>
      <Combobox.Input onChange = {(event) => setQuery(event.target.value)}/>
        <Combobox.Options>
          {filteredPeople.map((person)=> (
            <Combobox.Option key={person} value={person}>
              {person}
            </Combobox.Option>
          ))}
        </Combobox.Options>
    </Combobox>
  </>;
}

export default Dropdown;
