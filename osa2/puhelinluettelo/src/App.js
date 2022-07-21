import { useEffect, useState } from "react";
import axios from "axios";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState({ name: "", number: "" });
  const [filter, setFilter] = useState("");
  const [personsToShow, setPersonsToShow] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
      setPersonsToShow(response.data);
    });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewName({ ...newName, [name]: value });
  };

  const addPerson = (event) => {
    event.preventDefault();

    const enteredName = persons.filter(
      (person) => person.name === newName.name
    );

    if (enteredName.length === 0) {
      const personObject = {
        name: newName.name,
        number: newName.number,
      };

      setPersons(persons.concat(personObject));
      setPersonsToShow(persons.concat(personObject));
      setNewName({ name: "", number: "" });
    } else {
      alert(`${newName.name} is already added to phonebook`);
    }
  };

  const filterByName = (event) => {
    const search = event.target.value;
    setFilter(search);
    setPersonsToShow(
      persons.filter((person) => person.name.toLowerCase().includes(search))
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} filterByName={filterByName} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleChange={handleChange}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default App;
