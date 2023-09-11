
import PropTypes from 'prop-types';
import EventEditForm from './EventEditForm';
import { useState } from 'react';

const EventEditBtn = ({ eventId }) => {
  const [showUpdateFrom, setShowUpdateForm] = useState(false);
  const handleShowForm = () => {
    setShowUpdateForm(!showUpdateFrom);
  };
  
  const handleCloseForm = () => {
    setShowUpdateForm(false);
  };

  return (
    // <button  className="bg-blue-700 text-white px-2 py-1 rounded mb-4 ml-1">Edit Event</button>
  <div>
    <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
     onClick={handleShowForm}>Edit Event</button>
    {showUpdateFrom && (
      <div className="overlay">
        <EventEditForm eventId={eventId} onClose={handleCloseForm}/>
      </div>
    )}
  </div>
  )
}

EventEditBtn.propTypes = {
  eventId: PropTypes.string,
};

export default EventEditBtn