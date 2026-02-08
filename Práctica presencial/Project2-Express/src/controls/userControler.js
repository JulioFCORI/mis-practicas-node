import { response } from "express";

let users = [
  { id: 1, name: "Julio Romero" },
  { id: 2, name: "Pepita Gomez" },
  { id: 3, name: "Marcus Finix" },
  { id: 4, name: "Subaru Natski" },
];

const validateName = (req, res) => {
  const { name } = req.body;
  if (name === undefined || name === null) {
    res.status(400).json({ message: "El campo name es obligatorio" });
    return null;
  }
  if (name !== undefined) {
    if (typeof name !== "string") {
      res.status(400).json({ message: "El campo name debe ser un string" });
      return null;
    }
    const trimmed = name.trim();
    if (trimmed.length < 2) {
      res
        .status(400)
        .json({ message: "El campo name debe tener almenos 2 caracteres" });
      return null;
    }
    return trimmed;
  }
  return undefined;
};

const parseId = (req, res) => {
  const id = Number(req.params.id);
  console.log(id);
  if (!Number.isInteger(id) || id < 1) {
    return res
      .status(400)
      .json({ message: "El id debe ser un entero mayor o igual a 1" });
    return null;
  }
  return id;
};

const findUserIndexById = (id) => users.findIndex(u => u.id === id)

const getUsers = (req, res) => {
  res.json(users);
};

const getUserById = (req, res) => {
  const id = parseId(req, res);
  if( id = null) return;
  const user = users.find((user) => user.id === id);
  if (user === undefined) {
    return res.status(404).json({ message: "No existe el Id" });
  }

  return res.json(user);
};

const createUsers = (req, res) => {
  const name = validateName(req, res);
  if (name === null || name === undefined) return;

  const nextId = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
  const newUser = { id: nextId, name };
  users.push(newUser);
};

const updateUser = (req, res) => {
    const id = parseId(req, res);
  if( id = null) return;

  const index = findUserIndexById(id);

  if(index === -1){
    return res.status(404).json({message: "El id no existe"})
  }

  const name = validateName(req, res);
  if (name === null || name === undefined) return;

  const updated = {id,name};
  user[index] = updated;
  return res.json(updated)
};

const deleteUser = (req, res) => {
    const id = parseId(req, res);
  if( id = null) return;
};

export { getUsers, getUserById, createUsers, updateUser, deleteUser };
