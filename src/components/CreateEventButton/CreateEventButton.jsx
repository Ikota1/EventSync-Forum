import { useState } from 'react';
import EventForm from '../EventForm/EventForm';


export const CreateEventButton = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleCreateButtonClick = () => {
    setShowCreateForm(!showCreateForm);
  };

  const handleCloseForm = () => {
    setShowCreateForm(false);
  };

  return (
    <div>
      <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={handleCreateButtonClick}>Create Event</button>
      {showCreateForm && (
        <div className="overlay">
          <EventForm onClose={handleCloseForm} />
        </div>
      )}
    </div>
  );
};

export default CreateEventButton;
