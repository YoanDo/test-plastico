import sanityClient from '../../client';
import { setMembers } from '../redux/actions';
import state from '../redux/store';

export async function getAllMembers() {
  const members = await sanityClient.fetch(`*[_type == "member"]`);
  state.dispatch(setMembers(members));

  return members;
}
