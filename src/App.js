import "./App.css";
import Notes from "./Components/Notes";
import Seacrh from "./Components/Seacrh";
import { nanoid } from "nanoid";
import { useState } from "react";

function App() {
  const [Taxt, setTaxt] = useState([
    // {
    //   text: "Hello Everyone My name is madhav jha I Create Note app using react useState I am learning web development 🙂😎",
    //   // date: new Date(),
    // },
  ]);
  const addNote = (text) => {
    const date = new Date();
    const newNotes = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      date1: date.toLocaleTimeString(),
    };
    const addnn = [...Taxt, newNotes];
    setTaxt(addnn);
  };
  const deleteNotes = (id) => {
    const addnn = Taxt.filter((taxt) => taxt.id !== id);
    setTaxt(addnn);
  };
  const [SearchText, setSearchText] = useState("");
  return (
    <>
      <div className="desing">
        <h3>Note App</h3>
      </div>
      <Seacrh setSearchText={setSearchText} />
      <Notes
        Taxt={Taxt.filter((note) =>
          note.text.toLowerCase().includes(SearchText)
        )}
        deleteNotes={deleteNotes}
        handlenote={addNote}
      />
    </>
  );
}

export default App;
