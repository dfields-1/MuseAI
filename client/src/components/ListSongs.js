import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { List, ListItem } from "@chakra-ui/react";

import SongButton from "./SongButton";

const ListSongs = ({
  listRender,
  setListRender,
  selectedSong,
  setSelectedSong,
}) => {
  const [todos, setTodos] = useState([]);

  //delete function
  const deleteFromList = async (id) => {
    try {
      const delTodo = await fetch(`http://localhost:9000/todos/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:9000/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, [listRender]);

  return (
    <List spacing={0}>
      {todos
        .sort((a, b) => {
          return a.todo_id > b.todo_id ? 1 : -1;
        })
        .map((todo, i) => (
          <ListItem key={todo.todo_id}>
            <SongButton
              todo={todo}
              deleteFromList={deleteFromList}
              selectedSong={selectedSong}
              setSelectedSong={setSelectedSong}
            />
          </ListItem>
        ))}
    </List>
  );
};

export default ListSongs;
