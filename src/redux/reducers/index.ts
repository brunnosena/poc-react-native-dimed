import { Repository } from "../../pages/Dashboard";

export interface GitState {
    repos: Repository[];
}

const INITIAL_STATE: GitState = {
    repos: []
}

const buildRepo = (newRepo: Repository): Repository => {
    return {
        full_name: newRepo.full_name,
        description: newRepo.description,
        owner: {
            login: newRepo.owner.login,
            avatar_url: newRepo.owner.avatar_url
        }
    };
};

const reducer = (state: GitState = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case 'ADD_REPO': {
            const newRepo = buildRepo(action.payload.repo)

            return {
                repos: [
                    ...state.repos,
                    newRepo
                ]
            };
        }

        default:
            return state;
    }
}

export default reducer;