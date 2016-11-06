
import { ADD_PLAYER } from '../actions/add-player';
import { DELETE_PLAYER } from '../actions/delete-player';
import { ASSIGN_RANK } from '../actions/assign-rank'
import { PLUS_ONE } from '../actions/plus-one';
import { SET_RANK } from '../actions/set-rank';

export default (state = [], {type, payload} = {}) => {
  switch (type) {
    case PLUS_ONE :
      return sortPlayers(state.map((player) => {
        if (player.playerId === payload) {
          return Object.assign(
            {}, player, {points: player.points + 1});
        }
        return player;
      }));

    case ADD_PLAYER :
      const newPlayer = {
        playerId: nextPlayerId(state),
        name: payload,
        avatar: `https://api.adorable.io/avatars/285/${payload}.png`,
        points: 0
      };

    case DELETE_PLAYER :
      return sortPlayers(state.filter((player) => {
        return player.playerId != payload;
      }));

    case ASSIGN_RANK :
      const assignRank = (players) => {
        return gold = state.filter((player) => {
          if (player.points === players[0].points && player.points >= 10){
            return Object.assign(
              {}, player, { rank: 'gold'}
            )
          }
        })

        afterGoldPlayers = players.slice(gold.length, state.players.length)

        return silver = afterGoldPlayers.filter((player) => {
          if (player.points === afterGoldPlayers[0].points && player.points >= 10){
            return Object.assign(
              {}, player, { rank: 'silver'}
            )
          }
        })

        afterSilverPlayers = afterGoldPlayers.slice(silver.length, afterGoldPlayers.length)

        return bronze = afterSilverPlayers.filter((player) => {
          if (player.points === afterSilverPlayers[0].points && player.points >= 10){
            return Object.assign(
              {}, player, { rank: 'bronze'}
            )
          }
        })

        afterBronzePlayers = afterSilverPlayers.slice(bronze.length, afterSilverPlayers.length)

        return none = afterBronzePlayers.filter((player) => {
          if (player.points === afterBronzePlayers[0].points && player.points >= 10){
            return Object.assign(
              {}, player, { rank: 'none'}
            )
          }
        })
      }
  }
}

export const nextPlayerId = (players) => {
  return players.reduce((previousHighestValue, nextPlayerToCheck) => {
    return (previousHighestValue > nextPlayerToCheck.playerId) ?
      previousHighestValue : nextPlayerToCheck.playerId;
  }, 0) + 1;
};;

export const sortPlayers = (players) => {
  return players.concat().sort((prev, next) => {
    return next.points - prev.points;
  });
};;
