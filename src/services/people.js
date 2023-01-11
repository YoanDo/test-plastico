import sanityClient from '../../client';
import { setMembers, setVolunteers } from '../redux/actions';
import state from '../redux/store';

export async function getAllMembers() {
  const members = await sanityClient.fetch(`*[_type == "member"]`);
  state.dispatch(setMembers(members));

  return members;
}

export async function getAllVolunteers() {
  const volunteers = await sanityClient.fetch(`*[_type == "volunteer"]`);
  state.dispatch(setVolunteers(volunteers));

  return volunteers;
}
