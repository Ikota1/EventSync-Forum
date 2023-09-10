import { useState } from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

const BarChartUsers = ({ users }) => {

  const [usersData] = useState(Array.from({ length: 7 }).map((user, index) => {

    const date = dayjs()
      .add(index - (7 - 1), 'day')
      .format('DD/MM/YYYY');

    const usersToday = users.filter((user) => {

      const formattedDate = dayjs(user.createdOn).format('DD/MM/YYYY');
      if (date === formattedDate) {
        return user;
      }
    })
    return {
      date,
      users: usersToday.length
    }

    }))


  return (
    <BarChart width={500} height={300} data={usersData}margin={{ top: 5, right: 30, left: 20, bottom: 5 }} >
      <XAxis dataKey="date" />
      <YAxis allowDecimals='false' />
      <Tooltip />
      <Legend />
      <Bar dataKey="users" fill="#8884d8" />
    </BarChart>
  );
}

BarChartUsers.propTypes = {
  users: PropTypes.array.isRequired,
};

export default BarChartUsers
