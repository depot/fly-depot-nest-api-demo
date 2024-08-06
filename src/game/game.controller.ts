import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { GameResult, Move } from './game.types';
import { GameService } from './game.service';

@ApiTags('game')
@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}
  @ApiOperation({ summary: 'Play a move' })
  @ApiQuery({ name: 'move', required: true, description: 'Move to play' })
  @Get('play')
  play(@Query('move') move: Move): GameResult {
    return this.gameService.play(move);
  }
}
