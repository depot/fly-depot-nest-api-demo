export type Move = 'rock' | 'paper' | 'scissors';
export const validMoves: Move[] = ['rock', 'paper', 'scissors'];

export type GameResult = {
  result: string;
  playerMove: Move;
  computerMove: Move;
};
