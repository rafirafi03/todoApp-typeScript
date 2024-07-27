import { useState } from "react";
import "./App.css";
import ImageHeader from "./components/ImageHeader";
import Input from "./components/Input";
import Button from "./components/Button";
import { Items } from "./types/utils";
import ItemList from "./components/ItemList";

function App() {
  const [items, setItems] = useState<Items[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if(inputValue.trim()=="") {
      setError('List is empty')
    } else {

      setItems((prev) => [
        ...prev,
        { title: inputValue, id: Date.now().toString() },
      ]);
      setInputValue("");
      setError('');
    }
  };

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <ImageHeader />

      <div className="w-[350px]">
        <form className="mb-5" onSubmit={handleSubmit}>
          <Input
            type="text"
            inputValue={inputValue}
            setInputValue={setInputValue}
          />

          {error && <div className="text-red-500 mb-2">{error}</div>}

          <Button className="bg-gray-700 w-full p-2">Add</Button>
        </form>

        <div className="h-52 overflow-y-auto">
          <ItemList items={items} setItems={setItems}/>
        </div>
      </div>
    </div>
  );
}

export default App;
