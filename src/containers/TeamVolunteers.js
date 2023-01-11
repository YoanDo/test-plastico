import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { getAllVolunteers } from '../services/people';
import { getVolunteers } from '../redux/selectors/people';
import TeamList from '../components/TeamList';

const TeamVolunteers = () => {
  const allMembers = useSelector((state) => getVolunteers(state));
  const [members, setMembers] = useState(allMembers);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (!members?.length) {
      getAllVolunteers().then((res) => {
        setMembers(res);
        setIsLoading(false);
      });
    }
  }, [members]);

  if (isLoading || !members.length) return null; // todo add skeleton

  return <TeamList title="volunteerTeam" members={members} />;
};

TeamVolunteers.propTypes = {};

export default TeamVolunteers;
