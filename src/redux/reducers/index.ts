import { Repository } from "../../pages/Dashboard";

interface GitState {
    repos: Repository[];
}

const INITIAL_STATE: GitState = {
    repos: [{
        full_name: '',
        description: '',
        owner: {
            login: '',
            avatar_url: '',
        }
    }]
}

const reducer = (state: GitState = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case 'ADD_REPO':
            return {
                repos: [...state.repos, {
                    full_name: action.payload.repo.full_name,
                    description: action.payload.repo.description,
                    owner: {
                        login: action.payload.repo.owner.login,
                        avatar_url: action.payload.repo.owner.avatar_url
                    }
                }]
            }

        default:
            return state;
    }
}

export default reducer;