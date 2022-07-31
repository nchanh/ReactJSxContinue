import { ADD_JOB, SET_JOB, DELETE_JOB} from './constants'

export const initJobs = {
  job: '',
  jobs: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload
      }

    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      }

    case DELETE_JOB:
      let newJobs = [...state.jobs]
      newJobs.splice(action.payload, 1)

      return {
        ...state,
        jobs: newJobs
      }

    default:
      throw new Error('State is error')
  }
}
export default reducer