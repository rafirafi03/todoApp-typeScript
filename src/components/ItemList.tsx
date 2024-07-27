import Button from "./Button";
import { Items, ReactSetState } from "../types/utils";

type ItemList = {
    items: Items[];
    setItems: ReactSetState<Items[]>;
}

const ItemList = ({ items, setItems }: ItemList) => {

    const handleDelete = (id: string) => {
        setItems((prev) => prev.filter((data) => data.id !== id));
      };

  return (
    items.map((data) => (
        <div
          key={data.id}
          className="flex justify-between items-center border border-slate-600 pl-2 mb-2 mr-1 py-2"
        >
          <p>{data.title}</p>
          <Button onClick={() => handleDelete(data.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="red"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-trash-2"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6l-2 14H7L5 6"></path>
              <path d="M10 11v6"></path>
              <path d="M14 11v6"></path>
              <path d="M17 6V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2"></path>
            </svg>
          </Button>
        </div>
      ))
  )
}

export default ItemList
