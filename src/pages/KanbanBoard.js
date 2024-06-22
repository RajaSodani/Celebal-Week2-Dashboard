import React from 'react';
import KanbanBoard from '../components/KanbanBoard';

function KanbanPage() {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Kanban Board</h2>
            <div className="overflow-x-auto">
                <KanbanBoard />
            </div>
        </div>
    );
}

export default KanbanPage;
