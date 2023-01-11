import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { getAllMembers } from '../services/people';
import { getMembers } from '../redux/selectors/people';
import TeamList from '../components/TeamList';

const TeamMembers = () => {
  const allMembers = useSelector((state) => getMembers(state));
  const [members, setMembers] = useState(allMembers);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (!members?.length) {
      getAllMembers().then((res) => {
        setMembers(res);
        setIsLoading(false);
      });
    }
  }, [members]);

  if (isLoading || !members.length) return null; // todo add skeleton

  return <TeamList title="memberTeam" members={members} />;
};

TeamMembers.propTypes = {};

export default TeamMembers;
