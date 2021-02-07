"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
var manUnitedWins = 0;
matchReader.load();
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
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
