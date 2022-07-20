const PersonForm = ({ addPerson, newName, handleChange }) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input name="name" value={newName.name} onChange={handleChange} />
      </div>
      <div>
        number:{" "}
        <input name="number" value={newName.number} onChange={handleChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
