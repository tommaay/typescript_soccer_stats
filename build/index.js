"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    var homeTeam = match[1];
    var awayTeam = match[2];
    var winResult = match[5];
    if ((homeTeam === 'Man United' && winResult === MatchResult_1.MatchResult.HomeWin) ||
        (awayTeam === 'Man United' && winResult === MatchResult_1.MatchResult.AwayWin)) {
        manUnitedWins++;
    }
}
console.log("Manchester United won " + manUnitedWins + " games.");
