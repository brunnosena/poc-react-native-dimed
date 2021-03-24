import { RectButtonProperties } from 'react-native-gesture-handler';
import RepoOwner from 'types/RepoOwner';

interface RepoOwnerWrapper extends RectButtonProperties {
  repoOwner: RepoOwner;
}

export default RepoOwnerWrapper;
