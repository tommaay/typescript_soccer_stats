import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader('football.csv');
reader.read();

let manUnitedWins = 0;

for (let match of reader.data) {
    const homeTeam = match[1];
    const awayTeam = match[2];
    const winResult = match[5];

    if (
        (homeTeam === 'Man United' && winResult === MatchResult.HomeWin) ||
        (awayTeam === 'Man United' && winResult === MatchResult.AwayWin)
    ) {
        manUnitedWins++;
    }
}

console.log(`Manchester United won ${manUnitedWins} games.`);
