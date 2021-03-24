import { objError } from 'pages/Dashboard';
import { AxiosResponse } from 'axios';
import RepoOwner from 'types/RepoOwner';
import api from 'services/api';
import Repository from 'types/Repository';

type SetError = (error: objError) => void;
type SetOwner = (owner: RepoOwner) => void;
type SetCompletion = AxiosResponse<RepoOwner>;

const buildErrorModel = (message: string, isError: boolean) => ({
  message,
  isError,
});

const handleCompletion = (completion: SetCompletion, setError: SetError, setOwner: SetOwner) => {
  if (completion.status === 200) {
    setOwner(completion.data);
    setError(buildErrorModel('', false));
  } else {
    setError(buildErrorModel('Ocorreu um erro', true));
  }
};

const handleRejection = (rejection: any, setError: SetError): void => {
  setError(buildErrorModel('Não foi encontrado um owner com esse nome', true));
};

export const getOwnerDetails = (owner: string, setError: SetError, setOwner: SetOwner) => {
  api.get<RepoOwner>(`/users/${owner}`)
    .then((completion) => handleCompletion(completion, setError, setOwner),
      (rejection) => handleRejection(rejection, setError))
    .catch((rejection) => handleRejection(rejection, setError));
};

export const getRepos = (owner: string): Promise<Repository[] | null> => (
  api.get<Repository[]>(`/users/${owner}/repos`).then((completion) => {
    if (completion.status === 200) return completion.data;
    return null;
  }).catch(null));
