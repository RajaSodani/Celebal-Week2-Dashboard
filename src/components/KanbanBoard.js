import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialTasks = {
    todo: [{ id: '1', content: 'Task 1' }, { id: '2', content: 'Task 2' }],
    inProgress: [{ id: '3', content: 'Task 3' },{ id: '4', content: 'Task 4' }],
    done: [{ id: '5', content: 'Task 5' },{ id: '6', content: 'Task 6' },{ id: '7', content: 'Task 7' },{ id: '8', content: 'Task 8' },],
};

function KanbanBoard() {
    const [tasks, setTasks] = useState(initialTasks);

    const onDragEnd = (result) => {
        const { source, destination } = result;
        if (!destination) return;

        const sourceColumn = tasks[source.droppableId];
        const destColumn = tasks[destination.droppableId];
        const [removed] = sourceColumn.splice(source.index, 1);
        destColumn.splice(destination.index, 0, removed);

        setTasks({
            ...tasks,
            [source.droppableId]: sourceColumn,
            [destination.droppableId]: destColumn,
        });
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex space-x-4 w-[1100px]">
                {Object.entries(tasks).map(([columnId, columnTasks]) => (
                    <Droppable droppableId={columnId} key={columnId}>
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className="flex-1 bg-gray-200 dark:bg-gray-800 rounded shadow-md p-4"
                            >
                                <h2 className="text-xl font-semibold mb-4">{columnId}</h2>
                                {columnTasks.map((task, index) => (
                                    <Draggable key={task.id} draggableId={task.id} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="bg-blue-500 text-white p-2 mb-2 rounded"
                                            >
                                                {task.content}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                ))}
            </div>
        </DragDropContext>
    );
}

export default KanbanBoard;
