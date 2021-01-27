import uuidv4 from '../../tools/uuid';

export const saveTodoApi = async (todo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(uuidv4());
    }, 1000);
  });
};

export const deleteTodoApi = async (todo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(todo.id);
    }, 0);
  });
};

export const editTodoApi = async (todo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(todo.id), 1000);
  });
};
