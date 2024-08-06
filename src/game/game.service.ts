import { Injectable } from '@nestjs/common';
import { GameResult, Move } from './game.types';

@Injectable()
export class GameService {
  play(move: Move): GameResult {
    const validMoves: Move[] = ['rock', 'paper', 'scissors'];
    const winningMoves: { [key in Move]: Move } = {
      rock: 'scissors',
      scissors: 'paper',
      paper: 'rock',
    };
    const internalMove =
      validMoves[Math.floor(Math.random() * validMoves.length)];
    if (move === internalMove) {
      return { result: 'draw', playerMove: move, computerMove: internalMove };
    }
    if (winningMoves[move] === internalMove) {
      return { result: 'win', playerMove: move, computerMove: internalMove };
    }
    return { result: 'lose', playerMove: move, computerMove: internalMove };
  }
}
