import api from '../middleware/api'
import appLoading from './loading'
import updatePlayers from './update-players'

export const ASSIGN_RANK = 'ADD_RANK'

export default (playerId) => {
  return (dispatch) => {
    dispatch(appLoading(true))

    api.patch('players/${playerId}', playerId)
      .then(() => {
        assignRank(PlayerId)
        dispatch(appLoading(false))
        dispatch(updatePlayers(true))
      })
  }
}

export const assignRank = (playerId) => {
  return {
    type: ASSIGN_RANK,
    payload: playerId
  }
}
