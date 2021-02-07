import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);

let manUnitedWins = 0;
matchReader.load();

for (let match of matchReader.matches) {
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
