export const getRandomTodos = (todos, count) => {
    const randomTodos = []
    const todoCount = todos.length

    if (todoCount <= count) {
        return todos
    }

    while (randomTodos.length < count) {
        const randomIndex = Math.floor(Math.random() * todoCount)
        const randomTodo = todos[randomIndex]

        if (!randomTodos.includes(randomTodo)) {
            randomTodos.push(randomTodo)
        }
    }
    return randomTodos
}