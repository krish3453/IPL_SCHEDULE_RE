import React from 'react'
import { useState,useEffect } from 'react'




function PointTable() {

    //     let PointData={
    //   "pointsTable": [
    //     {
    //       "groupName": "Teams",
    //       "pointsTableInfo": [
    //         {
    //           "teamId": 971,
    //           "teamName": "GT",
    //           "matchesPlayed": 14,
    //           "matchesWon": 10,
    //           "matchesLost": 4,
    //           "points": 20,
    //           "nrr": "+0.316",
    //           "teamFullName": "Gujarat Titans",
    //           "teamMatches": [
    //             {
    //               "opponent": "Lucknow Super Giants",
    //               "startdt": "1648476000000",
    //               "result": "Won by 5 wkts",
    //               "opponentSName": "LSG",
    //               "matchId": 45901,
    //               "matchName": "4th Match",
    //               "winner": 971,
    //               "opponentId": 966,
    //               "opponentImageId": 882545,
    //               "nrrChanges": "+0.286"
    //             },
    //             {
    //               "opponent": "Delhi Capitals",
    //               "startdt": "1648908000000",
    //               "result": "Won by 14 runs",
    //               "opponentSName": "DC",
    //               "matchId": 45931,
    //               "matchName": "10th Match",
    //               "winner": 971,
    //               "opponentId": 61,
    //               "opponentImageId": 860040,
    //               "nrrChanges": "+0.209"
    //             },
    //             {
    //               "opponent": "Punjab Kings",
    //               "startdt": "1649426400000",
    //               "result": "Won by 6 wkts",
    //               "opponentSName": "PBKS",
    //               "matchId": 45961,
    //               "matchName": "16th Match",
    //               "winner": 971,
    //               "opponentId": 65,
    //               "opponentImageId": 860084,
    //               "nrrChanges": "-0.146"
    //             },
    //             {
    //               "opponent": "Sunrisers Hyderabad",
    //               "startdt": "1649685600000",
    //               "result": "Lost by 8 wkts",
    //               "opponentSName": "SRH",
    //               "matchId": 45986,
    //               "matchName": "21st Match",
    //               "winner": 255,
    //               "opponentId": 255,
    //               "opponentImageId": 860066,
    //               "nrrChanges": "-0.252"
    //             },
    //             {
    //               "opponent": "Rajasthan Royals",
    //               "startdt": "1649944800000",
    //               "result": "Won by 37 runs",
    //               "opponentSName": "RR",
    //               "matchId": 46001,
    //               "matchName": "24th Match",
    //               "winner": 971,
    //               "opponentId": 64,
    //               "opponentImageId": 860055,
    //               "nrrChanges": "+0.353"
    //             },
    //             {
    //               "opponent": "Chennai Super Kings",
    //               "startdt": "1650204000000",
    //               "result": "Won by 3 wkts",
    //               "opponentSName": "CSK",
    //               "matchId": 46026,
    //               "matchName": "29th Match",
    //               "winner": 971,
    //               "opponentId": 58,
    //               "opponentImageId": 860038,
    //               "nrrChanges": "-0.055"
    //             },
    //             {
    //               "opponent": "Kolkata Knight Riders",
    //               "startdt": "1650708000000",
    //               "result": "Won by 8 runs",
    //               "opponentSName": "KKR",
    //               "matchId": 46056,
    //               "matchName": "35th Match",
    //               "winner": 971,
    //               "opponentId": 63,
    //               "opponentImageId": 860046,
    //               "nrrChanges": "+0.001"
    //             },
    //             {
    //               "opponent": "Sunrisers Hyderabad",
    //               "startdt": "1651068000000",
    //               "result": "Won by 5 wkts",
    //               "opponentSName": "SRH",
    //               "matchId": 46081,
    //               "matchName": "40th Match",
    //               "winner": 971,
    //               "opponentId": 255,
    //               "opponentImageId": 860066,
    //               "nrrChanges": "-0.025"
    //             },
    //             {
    //               "opponent": "Royal Challengers Bengaluru",
    //               "startdt": "1651312800000",
    //               "result": "Won by 6 wkts",
    //               "opponentSName": "RCB",
    //               "matchId": 46096,
    //               "matchName": "43rd Match",
    //               "winner": 971,
    //               "opponentId": 59,
    //               "opponentImageId": 860056,
    //               "nrrChanges": "+0.006"
    //             },
    //             {
    //               "opponent": "Punjab Kings",
    //               "startdt": "1651586400000",
    //               "result": "Lost by 8 wkts",
    //               "opponentSName": "PBKS",
    //               "matchId": 46121,
    //               "matchName": "48th Match",
    //               "winner": 65,
    //               "opponentId": 65,
    //               "opponentImageId": 860084,
    //               "nrrChanges": "-0.219"
    //             },
    //             {
    //               "opponent": "Mumbai Indians",
    //               "startdt": "1651845600000",
    //               "result": "Lost by 5 runs",
    //               "opponentSName": "MI",
    //               "matchId": 46136,
    //               "matchName": "51st Match",
    //               "winner": 62,
    //               "opponentId": 62,
    //               "opponentImageId": 860053,
    //               "nrrChanges": "-0.038"
    //             },
    //             {
    //               "opponent": "Lucknow Super Giants",
    //               "startdt": "1652191200000",
    //               "result": "Won by 62 runs",
    //               "opponentSName": "LSG",
    //               "matchId": 46166,
    //               "matchName": "57th Match",
    //               "winner": 971,
    //               "opponentId": 966,
    //               "opponentImageId": 882545,
    //               "nrrChanges": "+0.256"
    //             },
    //             {
    //               "opponent": "Chennai Super Kings",
    //               "startdt": "1652608800000",
    //               "result": "Won by 7 wkts",
    //               "opponentSName": "CSK",
    //               "matchId": 46191,
    //               "matchName": "62nd Match",
    //               "winner": 971,
    //               "opponentId": 58,
    //               "opponentImageId": 860038,
    //               "nrrChanges": "+0.015"
    //             },
    //             {
    //               "opponent": "Royal Challengers Bengaluru",
    //               "startdt": "1652968800000",
    //               "result": "Lost by 8 wkts",
    //               "opponentSName": "RCB",
    //               "matchId": 46216,
    //               "matchName": "67th Match",
    //               "winner": 59,
    //               "opponentId": 59,
    //               "opponentImageId": 860056,
    //               "nrrChanges": "-0.075"
    //             },
    //             {
    //               "opponent": "Rajasthan Royals",
    //               "startdt": "1653400800000",
    //               "result": "Won by 7 wkts",
    //               "opponentSName": "RR",
    //               "matchId": 47584,
    //               "matchName": "Qualifier 1",
    //               "winner": 971,
    //               "opponentId": 64,
    //               "opponentImageId": 860055
    //             },
    //             {
    //               "opponent": "Rajasthan Royals",
    //               "startdt": "1653834600000",
    //               "result": "Won by 7 wkts",
    //               "opponentSName": "RR",
    //               "matchId": 47605,
    //               "matchName": "Final",
    //               "winner": 971,
    //               "opponentId": 64,
    //               "opponentImageId": 860055
    //             }
    //           ],
    //           "form": [
    //             "W",
    //             "W",
    //             "L",
    //             "W",
    //             "W"
    //           ],
    //           "teamImageId": 860068,
    //           "teamQualifyStatus": "Q"
    //         },
    //         {
    //           "teamId": 64,
    //           "teamName": "RR",
    //           "matchesPlayed": 14,
    //           "matchesWon": 9,
    //           "matchesLost": 5,
    //           "points": 18,
    //           "nrr": "+0.298",
    //           "teamFullName": "Rajasthan Royals",
    //           "teamMatches": [
    //             {
    //               "opponent": "Sunrisers Hyderabad",
    //               "startdt": "1648562400000",
    //               "result": "Won by 61 runs",
    //               "opponentSName": "SRH",
    //               "matchId": 45906,
    //               "matchName": "5th Match",
    //               "winner": 64,
    //               "opponentId": 255,
    //               "opponentImageId": 860066,
    //               "nrrChanges": "+3.050"
    //             },
    //             {
    //               "opponent": "Mumbai Indians",
    //               "startdt": "1648893600000",
    //               "result": "Won by 23 runs",
    //               "opponentSName": "MI",
    //               "matchId": 45926,
    //               "matchName": "9th Match",
    //               "winner": 64,
    //               "opponentId": 62,
    //               "opponentImageId": 860053,
    //               "nrrChanges": "-0.950"
    //             },
    //             {
    //               "opponent": "Royal Challengers Bengaluru",
    //               "startdt": "1649167200000",
    //               "result": "Lost by 4 wkts",
    //               "opponentSName": "RCB",
    //               "matchId": 45946,
    //               "matchName": "13th Match",
    //               "winner": 59,
    //               "opponentId": 59,
    //               "opponentImageId": 860056,
    //               "nrrChanges": "-0.882"
    //             },
    //             {
    //               "opponent": "Lucknow Super Giants",
    //               "startdt": "1649599200000",
    //               "result": "Won by 3 runs",
    //               "opponentSName": "LSG",
    //               "matchId": 45981,
    //               "matchName": "20th Match",
    //               "winner": 64,
    //               "opponentId": 966,
    //               "opponentImageId": 882545,
    //               "nrrChanges": "-0.267"
    //             },
    //             {
    //               "opponent": "Gujarat Titans",
    //               "startdt": "1649944800000",
    //               "result": "Lost by 37 runs",
    //               "opponentSName": "GT",
    //               "matchId": 46001,
    //               "matchName": "24th Match",
    //               "winner": 971,
    //               "opponentId": 971,
    //               "opponentImageId": 860068,
    //               "nrrChanges": "-0.562"
    //             },
    //             {
    //               "opponent": "Kolkata Knight Riders",
    //               "startdt": "1650290400000",
    //               "result": "Won by 7 runs",
    //               "opponentSName": "KKR",
    //               "matchId": 46031,
    //               "matchName": "30th Match",
    //               "winner": 64,
    //               "opponentId": 63,
    //               "opponentImageId": 860046,
    //               "nrrChanges": "-0.009"
    //             },
    //             {
    //               "opponent": "Delhi Capitals",
    //               "startdt": "1650636000000",
    //               "result": "Won by 15 runs",
    //               "opponentSName": "DC",
    //               "matchId": 46051,
    //               "matchName": "34th Match",
    //               "winner": 64,
    //               "opponentId": 61,
    //               "opponentImageId": 860040,
    //               "nrrChanges": "+0.052"
    //             },
    //             {
    //               "opponent": "Royal Challengers Bengaluru",
    //               "startdt": "1650981600000",
    //               "result": "Won by 29 runs",
    //               "opponentSName": "RCB",
    //               "matchId": 46076,
    //               "matchName": "39th Match",
    //               "winner": 64,
    //               "opponentId": 59,
    //               "opponentImageId": 860056,
    //               "nrrChanges": "+0.129"
    //             },
    //             {
    //               "opponent": "Mumbai Indians",
    //               "startdt": "1651327200000",
    //               "result": "Lost by 5 wkts",
    //               "opponentSName": "MI",
    //               "matchId": 46101,
    //               "matchName": "44th Match",
    //               "winner": 62,
    //               "opponentId": 62,
    //               "opponentImageId": 860053,
    //               "nrrChanges": "-0.111"
    //             },
    //             {
    //               "opponent": "Kolkata Knight Riders",
    //               "startdt": "1651500000000",
    //               "result": "Lost by 7 wkts",
    //               "opponentSName": "KKR",
    //               "matchId": 46116,
    //               "matchName": "47th Match",
    //               "winner": 63,
    //               "opponentId": 63,
    //               "opponentImageId": 860046,
    //               "nrrChanges": "-0.110"
    //             },
    //             {
    //               "opponent": "Punjab Kings",
    //               "startdt": "1651917600000",
    //               "result": "Won by 6 wkts",
    //               "opponentSName": "PBKS",
    //               "matchId": 46141,
    //               "matchName": "52nd Match",
    //               "winner": 64,
    //               "opponentId": 65,
    //               "opponentImageId": 860084,
    //               "nrrChanges": "-0.014"
    //             },
    //             {
    //               "opponent": "Delhi Capitals",
    //               "startdt": "1652277600000",
    //               "result": "Lost by 8 wkts",
    //               "opponentSName": "DC",
    //               "matchId": 46171,
    //               "matchName": "58th Match",
    //               "winner": 61,
    //               "opponentId": 61,
    //               "opponentImageId": 860040,
    //               "nrrChanges": "-0.098"
    //             },
    //             {
    //               "opponent": "Lucknow Super Giants",
    //               "startdt": "1652623200000",
    //               "result": "Won by 24 runs",
    //               "opponentSName": "LSG",
    //               "matchId": 46196,
    //               "matchName": "63rd Match",
    //               "winner": 64,
    //               "opponentId": 966,
    //               "opponentImageId": 882545,
    //               "nrrChanges": "+0.076"
    //             },
    //             {
    //               "opponent": "Chennai Super Kings",
    //               "startdt": "1653055200000",
    //               "result": "Won by 5 wkts",
    //               "opponentSName": "CSK",
    //               "matchId": 46221,
    //               "matchName": "68th Match",
    //               "winner": 64,
    //               "opponentId": 58,
    //               "opponentImageId": 860038,
    //               "nrrChanges": "-0.006"
    //             },
    //             {
    //               "opponent": "Gujarat Titans",
    //               "startdt": "1653400800000",
    //               "result": "Lost by 7 wkts",
    //               "opponentSName": "GT",
    //               "matchId": 47584,
    //               "matchName": "Qualifier 1",
    //               "winner": 971,
    //               "opponentId": 971,
    //               "opponentImageId": 860068
    //             },
    //             {
    //               "opponent": "Royal Challengers Bengaluru",
    //               "startdt": "1653660000000",
    //               "result": "Won by 7 wkts",
    //               "opponentSName": "RCB",
    //               "matchId": 47598,
    //               "matchName": "Qualifier 2",
    //               "winner": 64,
    //               "opponentId": 59,
    //               "opponentImageId": 860056
    //             },
    //             {
    //               "opponent": "Gujarat Titans",
    //               "startdt": "1653834600000",
    //               "result": "Lost by 7 wkts",
    //               "opponentSName": "GT",
    //               "matchId": 47605,
    //               "matchName": "Final",
    //               "winner": 971,
    //               "opponentId": 971,
    //               "opponentImageId": 860068
    //             }
    //           ],
    //           "form": [
    //             "W",
    //             "W",
    //             "L",
    //             "W",
    //             "L"
    //           ],
    //           "teamImageId": 860055,
    //           "teamQualifyStatus": "Q"
    //         },
    //         {
    //           "teamId": 966,
    //           "teamName": "LSG",
    //           "matchesPlayed": 14,
    //           "matchesWon": 9,
    //           "matchesLost": 5,
    //           "points": 18,
    //           "nrr": "+0.251",
    //           "teamFullName": "Lucknow Super Giants",
    //           "teamMatches": [
    //             {
    //               "opponent": "Gujarat Titans",
    //               "startdt": "1648476000000",
    //               "result": "Lost by 5 wkts",
    //               "opponentSName": "GT",
    //               "matchId": 45901,
    //               "matchName": "4th Match",
    //               "winner": 971,
    //               "opponentId": 971,
    //               "opponentImageId": 860068,
    //               "nrrChanges": "-0.286"
    //             },
    //             {
    //               "opponent": "Chennai Super Kings",
    //               "startdt": "1648735200000",
    //               "result": "Won by 6 wkts",
    //               "opponentSName": "CSK",
    //               "matchId": 45916,
    //               "matchName": "7th Match",
    //               "winner": 966,
    //               "opponentId": 58,
    //               "opponentImageId": 860038,
    //               "nrrChanges": "+0.275"
    //             },
    //             {
    //               "opponent": "Sunrisers Hyderabad",
    //               "startdt": "1649080800000",
    //               "result": "Won by 12 runs",
    //               "opponentSName": "SRH",
    //               "matchId": 45941,
    //               "matchName": "12th Match",
    //               "winner": 966,
    //               "opponentId": 255,
    //               "opponentImageId": 860066,
    //               "nrrChanges": "+0.204"
    //             },
    //             {
    //               "opponent": "Delhi Capitals",
    //               "startdt": "1649340000000",
    //               "result": "Won by 6 wkts",
    //               "opponentSName": "DC",
    //               "matchId": 45956,
    //               "matchName": "15th Match",
    //               "winner": 966,
    //               "opponentId": 61,
    //               "opponentImageId": 860040,
    //               "nrrChanges": "+0.063"
    //             },
    //             {
    //               "opponent": "Rajasthan Royals",
    //               "startdt": "1649599200000",
    //               "result": "Lost by 3 runs",
    //               "opponentSName": "RR",
    //               "matchId": 45981,
    //               "matchName": "20th Match",
    //               "winner": 64,
    //               "opponentId": 64,
    //               "opponentImageId": 860055,
    //               "nrrChanges": "-0.082"
    //             },
    //             {
    //               "opponent": "Mumbai Indians",
    //               "startdt": "1650103200000",
    //               "result": "Won by 18 runs",
    //               "opponentSName": "MI",
    //               "matchId": 46011,
    //               "matchName": "26th Match",
    //               "winner": 966,
    //               "opponentId": 62,
    //               "opponentImageId": 860053,
    //               "nrrChanges": "+0.122"
    //             },
    //             {
    //               "opponent": "Royal Challengers Bengaluru",
    //               "startdt": "1650376800000",
    //               "result": "Lost by 18 runs",
    //               "opponentSName": "RCB",
    //               "matchId": 46036,
    //               "matchName": "31st Match",
    //               "winner": 59,
    //               "opponentId": 59,
    //               "opponentImageId": 860056,
    //               "nrrChanges": "-0.172"
    //             },
    //             {
    //               "opponent": "Mumbai Indians",
    //               "startdt": "1650808800000",
    //               "result": "Won by 36 runs",
    //               "opponentSName": "MI",
    //               "matchId": 46066,
    //               "matchName": "37th Match",
    //               "winner": 966,
    //               "opponentId": 62,
    //               "opponentImageId": 860053,
    //               "nrrChanges": "+0.210"
    //             },
    //             {
    //               "opponent": "Punjab Kings",
    //               "startdt": "1651240800000",
    //               "result": "Won by 20 runs",
    //               "opponentSName": "PBKS",
    //               "matchId": 46091,
    //               "matchName": "42nd Match",
    //               "winner": 966,
    //               "opponentId": 65,
    //               "opponentImageId": 860084,
    //               "nrrChanges": "+0.074"
    //             },
    //             {
    //               "opponent": "Delhi Capitals",
    //               "startdt": "1651399200000",
    //               "result": "Won by 6 runs",
    //               "opponentSName": "DC",
    //               "matchId": 46106,
    //               "matchName": "45th Match",
    //               "winner": 966,
    //               "opponentId": 61,
    //               "opponentImageId": 860040,
    //               "nrrChanges": "-0.011"
    //             },
    //             {
    //               "opponent": "Kolkata Knight Riders",
    //               "startdt": "1651932000000",
    //               "result": "Won by 75 runs",
    //               "opponentSName": "KKR",
    //               "matchId": 46146,
    //               "matchName": "53rd Match",
    //               "winner": 966,
    //               "opponentId": 63,
    //               "opponentImageId": 860046,
    //               "nrrChanges": "+0.306"
    //             },
    //             {
    //               "opponent": "Gujarat Titans",
    //               "startdt": "1652191200000",
    //               "result": "Lost by 62 runs",
    //               "opponentSName": "GT",
    //               "matchId": 46166,
    //               "matchName": "57th Match",
    //               "winner": 971,
    //               "opponentId": 971,
    //               "opponentImageId": 860068,
    //               "nrrChanges": "-0.318"
    //             },
    //             {
    //               "opponent": "Rajasthan Royals",
    //               "startdt": "1652623200000",
    //               "result": "Lost by 24 runs",
    //               "opponentSName": "RR",
    //               "matchId": 46196,
    //               "matchName": "63rd Match",
    //               "winner": 64,
    //               "opponentId": 64,
    //               "opponentImageId": 860055,
    //               "nrrChanges": "-0.123"
    //             },
    //             {
    //               "opponent": "Kolkata Knight Riders",
    //               "startdt": "1652882400000",
    //               "result": "Won by 2 runs",
    //               "opponentSName": "KKR",
    //               "matchId": 46211,
    //               "matchName": "66th Match",
    //               "winner": 966,
    //               "opponentId": 63,
    //               "opponentImageId": 860046,
    //               "nrrChanges": "-0.011"
    //             },
    //             {
    //               "opponent": "Royal Challengers Bengaluru",
    //               "startdt": "1653487200000",
    //               "result": "Lost by 14 runs",
    //               "opponentSName": "RCB",
    //               "matchId": 47591,
    //               "matchName": "Eliminator",
    //               "winner": 59,
    //               "opponentId": 59,
    //               "opponentImageId": 860056
    //             }
    //           ],
    //           "form": [
    //             "W",
    //             "L",
    //             "L",
    //             "W",
    //             "L"
    //           ],
    //           "teamImageId": 882545,
    //           "teamQualifyStatus": "Q"
    //         },
    //         {
    //           "teamId": 59,
    //           "teamName": "RCB",
    //           "matchesPlayed": 14,
    //           "matchesWon": 8,
    //           "matchesLost": 6,
    //           "points": 16,
    //           "nrr": "-0.253",
    //           "teamFullName": "Royal Challengers Bengaluru",
    //           "teamMatches": [
    //             {
    //               "opponent": "Punjab Kings",
    //               "startdt": "1648389600000",
    //               "result": "Lost by 5 wkts",
    //               "opponentSName": "PBKS",
    //               "matchId": 45896,
    //               "matchName": "3rd Match",
    //               "winner": 65,
    //               "opponentId": 65,
    //               "opponentImageId": 860084,
    //               "nrrChanges": "-0.697"
    //             },
    //             {
    //               "opponent": "Kolkata Knight Riders",
    //               "startdt": "1648648800000",
    //               "result": "Won by 3 wkts",
    //               "opponentSName": "KKR",
    //               "matchId": 45911,
    //               "matchName": "6th Match",
    //               "winner": 59,
    //               "opponentId": 63,
    //               "opponentImageId": 860046,
    //               "nrrChanges": "+0.649"
    //             },
    //             {
    //               "opponent": "Rajasthan Royals",
    //               "startdt": "1649167200000",
    //               "result": "Won by 4 wkts",
    //               "opponentSName": "RR",
    //               "matchId": 45946,
    //               "matchName": "13th Match",
    //               "winner": 59,
    //               "opponentId": 64,
    //               "opponentImageId": 860055,
    //               "nrrChanges": "+0.207"
    //             },
    //             {
    //               "opponent": "Mumbai Indians",
    //               "startdt": "1649512800000",
    //               "result": "Won by 7 wkts",
    //               "opponentSName": "MI",
    //               "matchId": 45971,
    //               "matchName": "18th Match",
    //               "winner": 59,
    //               "opponentId": 62,
    //               "opponentImageId": 860053,
    //               "nrrChanges": "+0.135"
    //             },
    //             {
    //               "opponent": "Chennai Super Kings",
    //               "startdt": "1649772000000",
    //               "result": "Lost by 23 runs",
    //               "opponentSName": "CSK",
    //               "matchId": 45991,
    //               "matchName": "22nd Match",
    //               "winner": 58,
    //               "opponentId": 58,
    //               "opponentImageId": 860038,
    //               "nrrChanges": "-0.288"
    //             },
    //             {
    //               "opponent": "Delhi Capitals",
    //               "startdt": "1650117600000",
    //               "result": "Won by 16 runs",
    //               "opponentSName": "DC",
    //               "matchId": 46016,
    //               "matchName": "27th Match",
    //               "winner": 59,
    //               "opponentId": 61,
    //               "opponentImageId": 860040,
    //               "nrrChanges": "+0.136"
    //             },
    //             {
    //               "opponent": "Lucknow Super Giants",
    //               "startdt": "1650376800000",
    //               "result": "Won by 18 runs",
    //               "opponentSName": "LSG",
    //               "matchId": 46036,
    //               "matchName": "31st Match",
    //               "winner": 59,
    //               "opponentId": 966,
    //               "opponentImageId": 882545,
    //               "nrrChanges": "+0.109"
    //             },
    //             {
    //               "opponent": "Sunrisers Hyderabad",
    //               "startdt": "1650722400000",
    //               "result": "Lost by 9 wkts",
    //               "opponentSName": "SRH",
    //               "matchId": 46061,
    //               "matchName": "36th Match",
    //               "winner": 255,
    //               "opponentId": 255,
    //               "opponentImageId": 860066,
    //               "nrrChanges": "-0.723"
    //             },
    //             {
    //               "opponent": "Rajasthan Royals",
    //               "startdt": "1650981600000",
    //               "result": "Lost by 29 runs",
    //               "opponentSName": "RR",
    //               "matchId": 46076,
    //               "matchName": "39th Match",
    //               "winner": 64,
    //               "opponentId": 64,
    //               "opponentImageId": 860055,
    //               "nrrChanges": "-0.100"
    //             },
    //             {
    //               "opponent": "Gujarat Titans",
    //               "startdt": "1651312800000",
    //               "result": "Lost by 6 wkts",
    //               "opponentSName": "GT",
    //               "matchId": 46096,
    //               "matchName": "43rd Match",
    //               "winner": 971,
    //               "opponentId": 971,
    //               "opponentImageId": 860068,
    //               "nrrChanges": "+0.014"
    //             },
    //             {
    //               "opponent": "Chennai Super Kings",
    //               "startdt": "1651672800000",
    //               "result": "Won by 13 runs",
    //               "opponentSName": "CSK",
    //               "matchId": 46126,
    //               "matchName": "49th Match",
    //               "winner": 59,
    //               "opponentId": 58,
    //               "opponentImageId": 860038,
    //               "nrrChanges": "+0.114"
    //             },
    //             {
    //               "opponent": "Sunrisers Hyderabad",
    //               "startdt": "1652004000000",
    //               "result": "Won by 67 runs",
    //               "opponentSName": "SRH",
    //               "matchId": 46151,
    //               "matchName": "54th Match",
    //               "winner": 59,
    //               "opponentId": 255,
    //               "opponentImageId": 860066,
    //               "nrrChanges": "+0.329"
    //             },
    //             {
    //               "opponent": "Punjab Kings",
    //               "startdt": "1652450400000",
    //               "result": "Lost by 54 runs",
    //               "opponentSName": "PBKS",
    //               "matchId": 46181,
    //               "matchName": "60th Match",
    //               "winner": 65,
    //               "opponentId": 65,
    //               "opponentImageId": 860084,
    //               "nrrChanges": "-0.208"
    //             },
    //             {
    //               "opponent": "Gujarat Titans",
    //               "startdt": "1652968800000",
    //               "result": "Won by 8 wkts",
    //               "opponentSName": "GT",
    //               "matchId": 46216,
    //               "matchName": "67th Match",
    //               "winner": 59,
    //               "opponentId": 971,
    //               "opponentImageId": 860068,
    //               "nrrChanges": "+0.070"
    //             },
    //             {
    //               "opponent": "Lucknow Super Giants",
    //               "startdt": "1653487200000",
    //               "result": "Won by 14 runs",
    //               "opponentSName": "LSG",
    //               "matchId": 47591,
    //               "matchName": "Eliminator",
    //               "winner": 59,
    //               "opponentId": 966,
    //               "opponentImageId": 882545
    //             },
    //             {
    //               "opponent": "Rajasthan Royals",
    //               "startdt": "1653660000000",
    //               "result": "Lost by 7 wkts",
    //               "opponentSName": "RR",
    //               "matchId": 47598,
    //               "matchName": "Qualifier 2",
    //               "winner": 64,
    //               "opponentId": 64,
    //               "opponentImageId": 860055
    //             }
    //           ],
    //           "form": [
    //             "W",
    //             "L",
    //             "W",
    //             "W",
    //             "L"
    //           ],
    //           "teamImageId": 860056,
    //           "teamQualifyStatus": "Q"
    //         },
    //         {
    //           "teamId": 61,
    //           "teamName": "DC",
    //           "matchesPlayed": 14,
    //           "matchesWon": 7,
    //           "matchesLost": 7,
    //           "points": 14,
    //           "nrr": "+0.204",
    //           "teamFullName": "Delhi Capitals",
    //           "teamMatches": [
    //             {
    //               "opponent": "Mumbai Indians",
    //               "startdt": "1648375200000",
    //               "result": "Won by 4 wkts",
    //               "opponentSName": "MI",
    //               "matchId": 45891,
    //               "matchName": "2nd Match",
    //               "winner": 61,
    //               "opponentId": 62,
    //               "opponentImageId": 860053,
    //               "nrrChanges": "+0.914"
    //             },
    //             {
    //               "opponent": "Gujarat Titans",
    //               "startdt": "1648908000000",
    //               "result": "Lost by 14 runs",
    //               "opponentSName": "GT",
    //               "matchId": 45931,
    //               "matchName": "10th Match",
    //               "winner": 971,
    //               "opponentId": 971,
    //               "opponentImageId": 860068,
    //               "nrrChanges": "-0.849"
    //             },
    //             {
    //               "opponent": "Lucknow Super Giants",
    //               "startdt": "1649340000000",
    //               "result": "Lost by 6 wkts",
    //               "opponentSName": "LSG",
    //               "matchId": 45956,
    //               "matchName": "15th Match",
    //               "winner": 966,
    //               "opponentId": 966,
    //               "opponentImageId": 882545,
    //               "nrrChanges": "-0.181"
    //             },
    //             {
    //               "opponent": "Kolkata Knight Riders",
    //               "startdt": "1649584800000",
    //               "result": "Won by 44 runs",
    //               "opponentSName": "KKR",
    //               "matchId": 45976,
    //               "matchName": "19th Match",
    //               "winner": 61,
    //               "opponentId": 63,
    //               "opponentImageId": 860046,
    //               "nrrChanges": "+0.592"
    //             },
    //             {
    //               "opponent": "Royal Challengers Bengaluru",
    //               "startdt": "1650117600000",
    //               "result": "Lost by 16 runs",
    //               "opponentSName": "RCB",
    //               "matchId": 46016,
    //               "matchName": "27th Match",
    //               "winner": 59,
    //               "opponentId": 59,
    //               "opponentImageId": 860056,
    //               "nrrChanges": "-0.257"
    //             },
    //             {
    //               "opponent": "Punjab Kings",
    //               "startdt": "1650463200000",
    //               "result": "Won by 9 wkts",
    //               "opponentSName": "PBKS",
    //               "matchId": 46041,
    //               "matchName": "32nd Match",
    //               "winner": 61,
    //               "opponentId": 65,
    //               "opponentImageId": 860084,
    //               "nrrChanges": "+0.723"
    //             },
    //             {
    //               "opponent": "Rajasthan Royals",
    //               "startdt": "1650636000000",
    //               "result": "Lost by 15 runs",
    //               "opponentSName": "RR",
    //               "matchId": 46051,
    //               "matchName": "34th Match",
    //               "winner": 64,
    //               "opponentId": 64,
    //               "opponentImageId": 860055,
    //               "nrrChanges": "-0.227"
    //             },
    //             {
    //               "opponent": "Kolkata Knight Riders",
    //               "startdt": "1651154400000",
    //               "result": "Won by 4 wkts",
    //               "opponentSName": "KKR",
    //               "matchId": 46086,
    //               "matchName": "41st Match",
    //               "winner": 61,
    //               "opponentId": 63,
    //               "opponentImageId": 860046,
    //               "nrrChanges": "-0.020"
    //             },
    //             {
    //               "opponent": "Lucknow Super Giants",
    //               "startdt": "1651399200000",
    //               "result": "Lost by 6 runs",
    //               "opponentSName": "LSG",
    //               "matchId": 46106,
    //               "matchName": "45th Match",
    //               "winner": 966,
    //               "opponentId": 966,
    //               "opponentImageId": 882545,
    //               "nrrChanges": "-0.108"
    //             },
    //             {
    //               "opponent": "Sunrisers Hyderabad",
    //               "startdt": "1651759200000",
    //               "result": "Won by 21 runs",
    //               "opponentSName": "SRH",
    //               "matchId": 46131,
    //               "matchName": "50th Match",
    //               "winner": 61,
    //               "opponentId": 255,
    //               "opponentImageId": 860066,
    //               "nrrChanges": "+0.054"
    //             },
    //             {
    //               "opponent": "Chennai Super Kings",
    //               "startdt": "1652018400000",
    //               "result": "Lost by 91 runs",
    //               "opponentSName": "CSK",
    //               "matchId": 46156,
    //               "matchName": "55th Match",
    //               "winner": 58,
    //               "opponentId": 58,
    //               "opponentImageId": 860038,
    //               "nrrChanges": "-0.491"
    //             },
    //             {
    //               "opponent": "Rajasthan Royals",
    //               "startdt": "1652277600000",
    //               "result": "Won by 8 wkts",
    //               "opponentSName": "RR",
    //               "matchId": 46171,
    //               "matchName": "58th Match",
    //               "winner": 61,
    //               "opponentId": 64,
    //               "opponentImageId": 860055,
    //               "nrrChanges": "+0.060"
    //             },
    //             {
    //               "opponent": "Punjab Kings",
    //               "startdt": "1652709600000",
    //               "result": "Won by 17 runs",
    //               "opponentSName": "PBKS",
    //               "matchId": 46201,
    //               "matchName": "64th Match",
    //               "winner": 61,
    //               "opponentId": 65,
    //               "opponentImageId": 860084,
    //               "nrrChanges": "+0.045"
    //             },
    //             {
    //               "opponent": "Mumbai Indians",
    //               "startdt": "1653141600000",
    //               "result": "Lost by 5 wkts",
    //               "opponentSName": "MI",
    //               "matchId": 46226,
    //               "matchName": "69th Match",
    //               "winner": 62,
    //               "opponentId": 62,
    //               "opponentImageId": 860053,
    //               "nrrChanges": "-0.051"
    //             }
    //           ],
    //           "form": [
    //             "W",
    //             "L",
    //             "W",
    //             "W",
    //             "L"
    //           ],
    //           "teamImageId": 860040,
    //           "teamQualifyStatus": "E"
    //         },
    //         {
    //           "teamId": 65,
    //           "teamName": "PBKS",
    //           "matchesPlayed": 14,
    //           "matchesWon": 7,
    //           "matchesLost": 7,
    //           "points": 14,
    //           "nrr": "+0.126",
    //           "teamFullName": "Punjab Kings",
    //           "teamMatches": [
    //             {
    //               "opponent": "Royal Challengers Bengaluru",
    //               "startdt": "1648389600000",
    //               "result": "Won by 5 wkts",
    //               "opponentSName": "RCB",
    //               "matchId": 45896,
    //               "matchName": "3rd Match",
    //               "winner": 65,
    //               "opponentId": 59,
    //               "opponentImageId": 860056,
    //               "nrrChanges": "+0.697"
    //             },
    //             {
    //               "opponent": "Kolkata Knight Riders",
    //               "startdt": "1648821600000",
    //               "result": "Lost by 6 wkts",
    //               "opponentSName": "KKR",
    //               "matchId": 45921,
    //               "matchName": "8th Match",
    //               "winner": 63,
    //               "opponentId": 63,
    //               "opponentImageId": 860046,
    //               "nrrChanges": "-1.880"
    //             },
    //             {
    //               "opponent": "Chennai Super Kings",
    //               "startdt": "1648994400000",
    //               "result": "Won by 54 runs",
    //               "opponentSName": "CSK",
    //               "matchId": 45936,
    //               "matchName": "11th Match",
    //               "winner": 65,
    //               "opponentId": 58,
    //               "opponentImageId": 860038,
    //               "nrrChanges": "+1.421"
    //             },
    //             {
    //               "opponent": "Gujarat Titans",
    //               "startdt": "1649426400000",
    //               "result": "Lost by 6 wkts",
    //               "opponentSName": "GT",
    //               "matchId": 45961,
    //               "matchName": "16th Match",
    //               "winner": 971,
    //               "opponentId": 971,
    //               "opponentImageId": 860068,
    //               "nrrChanges": "-0.086"
    //             },
    //             {
    //               "opponent": "Mumbai Indians",
    //               "startdt": "1649858400000",
    //               "result": "Won by 12 runs",
    //               "opponentSName": "MI",
    //               "matchId": 45996,
    //               "matchName": "23rd Match",
    //               "winner": 65,
    //               "opponentId": 62,
    //               "opponentImageId": 860053,
    //               "nrrChanges": "+0.087"
    //             },
    //             {
    //               "opponent": "Sunrisers Hyderabad",
    //               "startdt": "1650189600000",
    //               "result": "Lost by 7 wkts",
    //               "opponentSName": "SRH",
    //               "matchId": 46021,
    //               "matchName": "28th Match",
    //               "winner": 255,
    //               "opponentId": 255,
    //               "opponentImageId": 860066,
    //               "nrrChanges": "-0.130"
    //             },
    //             {
    //               "opponent": "Delhi Capitals",
    //               "startdt": "1650463200000",
    //               "result": "Lost by 9 wkts",
    //               "opponentSName": "DC",
    //               "matchId": 46041,
    //               "matchName": "32nd Match",
    //               "winner": 61,
    //               "opponentId": 61,
    //               "opponentImageId": 860040,
    //               "nrrChanges": "-0.671"
    //             },
    //             {
    //               "opponent": "Chennai Super Kings",
    //               "startdt": "1650895200000",
    //               "result": "Won by 11 runs",
    //               "opponentSName": "CSK",
    //               "matchId": 46071,
    //               "matchName": "38th Match",
    //               "winner": 65,
    //               "opponentId": 58,
    //               "opponentImageId": 860038,
    //               "nrrChanges": "+0.143"
    //             },
    //             {
    //               "opponent": "Lucknow Super Giants",
    //               "startdt": "1651240800000",
    //               "result": "Lost by 20 runs",
    //               "opponentSName": "LSG",
    //               "matchId": 46091,
    //               "matchName": "42nd Match",
    //               "winner": 966,
    //               "opponentId": 966,
    //               "opponentImageId": 882545,
    //               "nrrChanges": "-0.051"
    //             },
    //             {
    //               "opponent": "Gujarat Titans",
    //               "startdt": "1651586400000",
    //               "result": "Won by 8 wkts",
    //               "opponentSName": "GT",
    //               "matchId": 46121,
    //               "matchName": "48th Match",
    //               "winner": 65,
    //               "opponentId": 971,
    //               "opponentImageId": 860068,
    //               "nrrChanges": "+0.241"
    //             },
    //             {
    //               "opponent": "Rajasthan Royals",
    //               "startdt": "1651917600000",
    //               "result": "Lost by 6 wkts",
    //               "opponentSName": "RR",
    //               "matchId": 46141,
    //               "matchName": "52nd Match",
    //               "winner": 64,
    //               "opponentId": 64,
    //               "opponentImageId": 860055,
    //               "nrrChanges": "-0.002"
    //             },
    //             {
    //               "opponent": "Royal Challengers Bengaluru",
    //               "startdt": "1652450400000",
    //               "result": "Won by 54 runs",
    //               "opponentSName": "RCB",
    //               "matchId": 46181,
    //               "matchName": "60th Match",
    //               "winner": 65,
    //               "opponentId": 59,
    //               "opponentImageId": 860056,
    //               "nrrChanges": "+0.254"
    //             },
    //             {
    //               "opponent": "Delhi Capitals",
    //               "startdt": "1652709600000",
    //               "result": "Lost by 17 runs",
    //               "opponentSName": "DC",
    //               "matchId": 46201,
    //               "matchName": "64th Match",
    //               "winner": 61,
    //               "opponentId": 61,
    //               "opponentImageId": 860040,
    //               "nrrChanges": "-0.066"
    //             },
    //             {
    //               "opponent": "Sunrisers Hyderabad",
    //               "startdt": "1653228000000",
    //               "result": "Won by 5 wkts",
    //               "opponentSName": "SRH",
    //               "matchId": 46231,
    //               "matchName": "70th Match",
    //               "winner": 65,
    //               "opponentId": 255,
    //               "opponentImageId": 860066,
    //               "nrrChanges": "+0.169"
    //             }
    //           ],
    //           "form": [
    //             "W",
    //             "L",
    //             "W",
    //             "L",
    //             "W"
    //           ],
    //           "teamImageId": 860084,
    //           "teamQualifyStatus": "E"
    //         },
    //         {
    //           "teamId": 63,
    //           "teamName": "KKR",
    //           "matchesPlayed": 14,
    //           "matchesWon": 6,
    //           "matchesLost": 8,
    //           "points": 12,
    //           "nrr": "+0.146",
    //           "teamFullName": "Kolkata Knight Riders",
    //           "teamMatches": [
    //             {
    //               "opponent": "Chennai Super Kings",
    //               "startdt": "1648303200000",
    //               "result": "Won by 6 wkts",
    //               "opponentSName": "CSK",
    //               "matchId": 45886,
    //               "matchName": "1st Match",
    //               "winner": 63,
    //               "opponentId": 58,
    //               "opponentImageId": 860038,
    //               "nrrChanges": "+0.639"
    //             },
    //             {
    //               "opponent": "Royal Challengers Bengaluru",
    //               "startdt": "1648648800000",
    //               "result": "Lost by 3 wkts",
    //               "opponentSName": "RCB",
    //               "matchId": 45911,
    //               "matchName": "6th Match",
    //               "winner": 59,
    //               "opponentId": 59,
    //               "opponentImageId": 860056,
    //               "nrrChanges": "-0.546"
    //             },
    //             {
    //               "opponent": "Punjab Kings",
    //               "startdt": "1648821600000",
    //               "result": "Won by 6 wkts",
    //               "opponentSName": "PBKS",
    //               "matchId": 45921,
    //               "matchName": "8th Match",
    //               "winner": 63,
    //               "opponentId": 65,
    //               "opponentImageId": 860084,
    //               "nrrChanges": "+0.750"
    //             },
    //             {
    //               "opponent": "Mumbai Indians",
    //               "startdt": "1649253600000",
    //               "result": "Won by 5 wkts",
    //               "opponentSName": "MI",
    //               "matchId": 45951,
    //               "matchName": "14th Match",
    //               "winner": 63,
    //               "opponentId": 62,
    //               "opponentImageId": 860053,
    //               "nrrChanges": "+0.260"
    //             },
    //             {
    //               "opponent": "Delhi Capitals",
    //               "startdt": "1649584800000",
    //               "result": "Lost by 44 runs",
    //               "opponentSName": "DC",
    //               "matchId": 45976,
    //               "matchName": "19th Match",
    //               "winner": 61,
    //               "opponentId": 61,
    //               "opponentImageId": 860040,
    //               "nrrChanges": "-0.657"
    //             },
    //             {
    //               "opponent": "Sunrisers Hyderabad",
    //               "startdt": "1650031200000",
    //               "result": "Lost by 7 wkts",
    //               "opponentSName": "SRH",
    //               "matchId": 46006,
    //               "matchName": "25th Match",
    //               "winner": 255,
    //               "opponentId": 255,
    //               "opponentImageId": 860066,
    //               "nrrChanges": "-0.223"
    //             },
    //             {
    //               "opponent": "Rajasthan Royals",
    //               "startdt": "1650290400000",
    //               "result": "Lost by 7 runs",
    //               "opponentSName": "RR",
    //               "matchId": 46031,
    //               "matchName": "30th Match",
    //               "winner": 64,
    //               "opponentId": 64,
    //               "opponentImageId": 860055,
    //               "nrrChanges": "-0.063"
    //             },
    //             {
    //               "opponent": "Gujarat Titans",
    //               "startdt": "1650708000000",
    //               "result": "Lost by 8 runs",
    //               "opponentSName": "GT",
    //               "matchId": 46056,
    //               "matchName": "35th Match",
    //               "winner": 971,
    //               "opponentId": 971,
    //               "opponentImageId": 860068,
    //               "nrrChanges": "-0.080"
    //             },
    //             {
    //               "opponent": "Delhi Capitals",
    //               "startdt": "1651154400000",
    //               "result": "Lost by 4 wkts",
    //               "opponentSName": "DC",
    //               "matchId": 46086,
    //               "matchName": "41st Match",
    //               "winner": 61,
    //               "opponentId": 61,
    //               "opponentImageId": 860040,
    //               "nrrChanges": "-0.086"
    //             },
    //             {
    //               "opponent": "Rajasthan Royals",
    //               "startdt": "1651500000000",
    //               "result": "Won by 7 wkts",
    //               "opponentSName": "RR",
    //               "matchId": 46116,
    //               "matchName": "47th Match",
    //               "winner": 63,
    //               "opponentId": 64,
    //               "opponentImageId": 860055,
    //               "nrrChanges": "+0.066"
    //             },
    //             {
    //               "opponent": "Lucknow Super Giants",
    //               "startdt": "1651932000000",
    //               "result": "Lost by 75 runs",
    //               "opponentSName": "LSG",
    //               "matchId": 46146,
    //               "matchName": "53rd Match",
    //               "winner": 966,
    //               "opponentId": 966,
    //               "opponentImageId": 882545,
    //               "nrrChanges": "-0.364"
    //             },
    //             {
    //               "opponent": "Mumbai Indians",
    //               "startdt": "1652104800000",
    //               "result": "Won by 52 runs",
    //               "opponentSName": "MI",
    //               "matchId": 46161,
    //               "matchName": "56th Match",
    //               "winner": 63,
    //               "opponentId": 62,
    //               "opponentImageId": 860053,
    //               "nrrChanges": "+0.247"
    //             },
    //             {
    //               "opponent": "Sunrisers Hyderabad",
    //               "startdt": "1652536800000",
    //               "result": "Won by 54 runs",
    //               "opponentSName": "SRH",
    //               "matchId": 46186,
    //               "matchName": "61st Match",
    //               "winner": 63,
    //               "opponentId": 255,
    //               "opponentImageId": 860066,
    //               "nrrChanges": "+0.217"
    //             },
    //             {
    //               "opponent": "Lucknow Super Giants",
    //               "startdt": "1652882400000",
    //               "result": "Lost by 2 runs",
    //               "opponentSName": "LSG",
    //               "matchId": 46211,
    //               "matchName": "66th Match",
    //               "winner": 966,
    //               "opponentId": 966,
    //               "opponentImageId": 882545,
    //               "nrrChanges": "-0.014"
    //             }
    //           ],
    //           "form": [
    //             "W",
    //             "L",
    //             "W",
    //             "W",
    //             "L"
    //           ],
    //           "teamImageId": 860046,
    //           "teamQualifyStatus": "E"
    //         },
    //         {
    //           "teamId": 255,
    //           "teamName": "SRH",
    //           "matchesPlayed": 14,
    //           "matchesWon": 6,
    //           "matchesLost": 8,
    //           "points": 12,
    //           "nrr": "-0.379",
    //           "teamFullName": "Sunrisers Hyderabad",
    //           "teamMatches": [
    //             {
    //               "opponent": "Rajasthan Royals",
    //               "startdt": "1648562400000",
    //               "result": "Lost by 61 runs",
    //               "opponentSName": "RR",
    //               "matchId": 45906,
    //               "matchName": "5th Match",
    //               "winner": 64,
    //               "opponentId": 64,
    //               "opponentImageId": 860055,
    //               "nrrChanges": "-3.050"
    //             },
    //             {
    //               "opponent": "Lucknow Super Giants",
    //               "startdt": "1649080800000",
    //               "result": "Lost by 12 runs",
    //               "opponentSName": "LSG",
    //               "matchId": 45941,
    //               "matchName": "12th Match",
    //               "winner": 966,
    //               "opponentId": 966,
    //               "opponentImageId": 882545,
    //               "nrrChanges": "+1.225"
    //             },
    //             {
    //               "opponent": "Chennai Super Kings",
    //               "startdt": "1649498400000",
    //               "result": "Won by 8 wkts",
    //               "opponentSName": "CSK",
    //               "matchId": 45966,
    //               "matchName": "17th Match",
    //               "winner": 255,
    //               "opponentId": 58,
    //               "opponentImageId": 860038,
    //               "nrrChanges": "+0.936"
    //             },
    //             {
    //               "opponent": "Gujarat Titans",
    //               "startdt": "1649685600000",
    //               "result": "Won by 8 wkts",
    //               "opponentSName": "GT",
    //               "matchId": 45986,
    //               "matchName": "21st Match",
    //               "winner": 255,
    //               "opponentId": 971,
    //               "opponentImageId": 860068,
    //               "nrrChanges": "+0.388"
    //             },
    //             {
    //               "opponent": "Kolkata Knight Riders",
    //               "startdt": "1650031200000",
    //               "result": "Won by 7 wkts",
    //               "opponentSName": "KKR",
    //               "matchId": 46006,
    //               "matchName": "25th Match",
    //               "winner": 255,
    //               "opponentId": 63,
    //               "opponentImageId": 860046,
    //               "nrrChanges": "+0.305"
    //             },
    //             {
    //               "opponent": "Punjab Kings",
    //               "startdt": "1650189600000",
    //               "result": "Won by 7 wkts",
    //               "opponentSName": "PBKS",
    //               "matchId": 46021,
    //               "matchName": "28th Match",
    //               "winner": 255,
    //               "opponentId": 65,
    //               "opponentImageId": 860084,
    //               "nrrChanges": "+0.119"
    //             },
    //             {
    //               "opponent": "Royal Challengers Bengaluru",
    //               "startdt": "1650722400000",
    //               "result": "Won by 9 wkts",
    //               "opponentSName": "RCB",
    //               "matchId": 46061,
    //               "matchName": "36th Match",
    //               "winner": 255,
    //               "opponentId": 59,
    //               "opponentImageId": 860056,
    //               "nrrChanges": "+0.768"
    //             },
    //             {
    //               "opponent": "Gujarat Titans",
    //               "startdt": "1651068000000",
    //               "result": "Lost by 5 wkts",
    //               "opponentSName": "GT",
    //               "matchId": 46081,
    //               "matchName": "40th Match",
    //               "winner": 971,
    //               "opponentId": 971,
    //               "opponentImageId": 860068,
    //               "nrrChanges": "-0.091"
    //             },
    //             {
    //               "opponent": "Chennai Super Kings",
    //               "startdt": "1651413600000",
    //               "result": "Lost by 13 runs",
    //               "opponentSName": "CSK",
    //               "matchId": 46111,
    //               "matchName": "46th Match",
    //               "winner": 58,
    //               "opponentId": 58,
    //               "opponentImageId": 860038,
    //               "nrrChanges": "-0.129"
    //             },
    //             {
    //               "opponent": "Delhi Capitals",
    //               "startdt": "1651759200000",
    //               "result": "Lost by 21 runs",
    //               "opponentSName": "DC",
    //               "matchId": 46131,
    //               "matchName": "50th Match",
    //               "winner": 61,
    //               "opponentId": 61,
    //               "opponentImageId": 860040,
    //               "nrrChanges": "-0.146"
    //             },
    //             {
    //               "opponent": "Royal Challengers Bengaluru",
    //               "startdt": "1652004000000",
    //               "result": "Lost by 67 runs",
    //               "opponentSName": "RCB",
    //               "matchId": 46151,
    //               "matchName": "54th Match",
    //               "winner": 59,
    //               "opponentId": 59,
    //               "opponentImageId": 860056,
    //               "nrrChanges": "-0.356"
    //             },
    //             {
    //               "opponent": "Kolkata Knight Riders",
    //               "startdt": "1652536800000",
    //               "result": "Lost by 54 runs",
    //               "opponentSName": "KKR",
    //               "matchId": 46186,
    //               "matchName": "61st Match",
    //               "winner": 63,
    //               "opponentId": 63,
    //               "opponentImageId": 860046,
    //               "nrrChanges": "-0.239"
    //             },
    //             {
    //               "opponent": "Mumbai Indians",
    //               "startdt": "1652796000000",
    //               "result": "Won by 3 runs",
    //               "opponentSName": "MI",
    //               "matchId": 46206,
    //               "matchName": "65th Match",
    //               "winner": 255,
    //               "opponentId": 62,
    //               "opponentImageId": 860053,
    //               "nrrChanges": "+0.040"
    //             },
    //             {
    //               "opponent": "Punjab Kings",
    //               "startdt": "1653228000000",
    //               "result": "Lost by 5 wkts",
    //               "opponentSName": "PBKS",
    //               "matchId": 46231,
    //               "matchName": "70th Match",
    //               "winner": 65,
    //               "opponentId": 65,
    //               "opponentImageId": 860084,
    //               "nrrChanges": "-0.149"
    //             }
    //           ],
    //           "form": [
    //             "L",
    //             "L",
    //             "L",
    //             "W",
    //             "L"
    //           ],
    //           "teamImageId": 860066,
    //           "teamQualifyStatus": "E"
    //         },
    //         {
    //           "teamId": 58,
    //           "teamName": "CSK",
    //           "matchesPlayed": 14,
    //           "matchesWon": 4,
    //           "matchesLost": 10,
    //           "points": 8,
    //           "nrr": "-0.203",
    //           "teamFullName": "Chennai Super Kings",
    //           "teamMatches": [
    //             {
    //               "opponent": "Kolkata Knight Riders",
    //               "startdt": "1648303200000",
    //               "result": "Lost by 6 wkts",
    //               "opponentSName": "KKR",
    //               "matchId": 45886,
    //               "matchName": "1st Match",
    //               "winner": 63,
    //               "opponentId": 63,
    //               "opponentImageId": 860046,
    //               "nrrChanges": "-0.639"
    //             },
    //             {
    //               "opponent": "Lucknow Super Giants",
    //               "startdt": "1648735200000",
    //               "result": "Lost by 6 wkts",
    //               "opponentSName": "LSG",
    //               "matchId": 45916,
    //               "matchName": "7th Match",
    //               "winner": 966,
    //               "opponentId": 966,
    //               "opponentImageId": 882545,
    //               "nrrChanges": "+0.111"
    //             },
    //             {
    //               "opponent": "Punjab Kings",
    //               "startdt": "1648994400000",
    //               "result": "Lost by 54 runs",
    //               "opponentSName": "PBKS",
    //               "matchId": 45936,
    //               "matchName": "11th Match",
    //               "winner": 65,
    //               "opponentId": 65,
    //               "opponentImageId": 860084,
    //               "nrrChanges": "-0.723"
    //             },
    //             {
    //               "opponent": "Sunrisers Hyderabad",
    //               "startdt": "1649498400000",
    //               "result": "Lost by 8 wkts",
    //               "opponentSName": "SRH",
    //               "matchId": 45966,
    //               "matchName": "17th Match",
    //               "winner": 255,
    //               "opponentId": 255,
    //               "opponentImageId": 860066,
    //               "nrrChanges": "+0.040"
    //             },
    //             {
    //               "opponent": "Royal Challengers Bengaluru",
    //               "startdt": "1649772000000",
    //               "result": "Won by 23 runs",
    //               "opponentSName": "RCB",
    //               "matchId": 45991,
    //               "matchName": "22nd Match",
    //               "winner": 58,
    //               "opponentId": 59,
    //               "opponentImageId": 860056,
    //               "nrrChanges": "+0.466"
    //             },
    //             {
    //               "opponent": "Gujarat Titans",
    //               "startdt": "1650204000000",
    //               "result": "Lost by 3 wkts",
    //               "opponentSName": "GT",
    //               "matchId": 46026,
    //               "matchName": "29th Match",
    //               "winner": 971,
    //               "opponentId": 971,
    //               "opponentImageId": 860068,
    //               "nrrChanges": "+0.107"
    //             },
    //             {
    //               "opponent": "Mumbai Indians",
    //               "startdt": "1650549600000",
    //               "result": "Won by 3 wkts",
    //               "opponentSName": "MI",
    //               "matchId": 46046,
    //               "matchName": "33rd Match",
    //               "winner": 58,
    //               "opponentId": 62,
    //               "opponentImageId": 860053,
    //               "nrrChanges": "+0.104"
    //             },
    //             {
    //               "opponent": "Punjab Kings",
    //               "startdt": "1650895200000",
    //               "result": "Lost by 11 runs",
    //               "opponentSName": "PBKS",
    //               "matchId": 46071,
    //               "matchName": "38th Match",
    //               "winner": 65,
    //               "opponentId": 65,
    //               "opponentImageId": 860084,
    //               "nrrChanges": "-0.004"
    //             },
    //             {
    //               "opponent": "Sunrisers Hyderabad",
    //               "startdt": "1651413600000",
    //               "result": "Won by 13 runs",
    //               "opponentSName": "SRH",
    //               "matchId": 46111,
    //               "matchName": "46th Match",
    //               "winner": 58,
    //               "opponentId": 255,
    //               "opponentImageId": 860066,
    //               "nrrChanges": "+0.131"
    //             },
    //             {
    //               "opponent": "Royal Challengers Bengaluru",
    //               "startdt": "1651672800000",
    //               "result": "Lost by 13 runs",
    //               "opponentSName": "RCB",
    //               "matchId": 46126,
    //               "matchName": "49th Match",
    //               "winner": 59,
    //               "opponentId": 59,
    //               "opponentImageId": 860056,
    //               "nrrChanges": "-0.024"
    //             },
    //             {
    //               "opponent": "Delhi Capitals",
    //               "startdt": "1652018400000",
    //               "result": "Won by 91 runs",
    //               "opponentSName": "DC",
    //               "matchId": 46156,
    //               "matchName": "55th Match",
    //               "winner": 58,
    //               "opponentId": 61,
    //               "opponentImageId": 860040,
    //               "nrrChanges": "+0.459"
    //             },
    //             {
    //               "opponent": "Mumbai Indians",
    //               "startdt": "1652364000000",
    //               "result": "Lost by 5 wkts",
    //               "opponentSName": "MI",
    //               "matchId": 46176,
    //               "matchName": "59th Match",
    //               "winner": 62,
    //               "opponentId": 62,
    //               "opponentImageId": 860053,
    //               "nrrChanges": "-0.209"
    //             },
    //             {
    //               "opponent": "Gujarat Titans",
    //               "startdt": "1652608800000",
    //               "result": "Lost by 7 wkts",
    //               "opponentSName": "GT",
    //               "matchId": 46191,
    //               "matchName": "62nd Match",
    //               "winner": 971,
    //               "opponentId": 971,
    //               "opponentImageId": 860068,
    //               "nrrChanges": "-0.025"
    //             },
    //             {
    //               "opponent": "Rajasthan Royals",
    //               "startdt": "1653055200000",
    //               "result": "Lost by 5 wkts",
    //               "opponentSName": "RR",
    //               "matchId": 46221,
    //               "matchName": "68th Match",
    //               "winner": 64,
    //               "opponentId": 64,
    //               "opponentImageId": 860055,
    //               "nrrChanges": "+0.003"
    //             }
    //           ],
    //           "form": [
    //             "L",
    //             "W",
    //             "L",
    //             "L",
    //             "L"
    //           ],
    //           "teamImageId": 860038,
    //           "teamQualifyStatus": "E"
    //         },
    //         {
    //           "teamId": 62,
    //           "teamName": "MI",
    //           "matchesPlayed": 14,
    //           "matchesWon": 4,
    //           "matchesLost": 10,
    //           "points": 8,
    //           "nrr": "-0.506",
    //           "teamFullName": "Mumbai Indians",
    //           "teamMatches": [
    //             {
    //               "opponent": "Delhi Capitals",
    //               "startdt": "1648375200000",
    //               "result": "Lost by 4 wkts",
    //               "opponentSName": "DC",
    //               "matchId": 45891,
    //               "matchName": "2nd Match",
    //               "winner": 61,
    //               "opponentId": 61,
    //               "opponentImageId": 860040,
    //               "nrrChanges": "-0.914"
    //             },
    //             {
    //               "opponent": "Rajasthan Royals",
    //               "startdt": "1648893600000",
    //               "result": "Lost by 23 runs",
    //               "opponentSName": "RR",
    //               "matchId": 45926,
    //               "matchName": "9th Match",
    //               "winner": 64,
    //               "opponentId": 64,
    //               "opponentImageId": 860055,
    //               "nrrChanges": "-0.115"
    //             },
    //             {
    //               "opponent": "Kolkata Knight Riders",
    //               "startdt": "1649253600000",
    //               "result": "Lost by 5 wkts",
    //               "opponentSName": "KKR",
    //               "matchId": 45951,
    //               "matchName": "14th Match",
    //               "winner": 63,
    //               "opponentId": 63,
    //               "opponentImageId": 860046,
    //               "nrrChanges": "-0.333"
    //             },
    //             {
    //               "opponent": "Royal Challengers Bengaluru",
    //               "startdt": "1649512800000",
    //               "result": "Lost by 7 wkts",
    //               "opponentSName": "RCB",
    //               "matchId": 45971,
    //               "matchName": "18th Match",
    //               "winner": 59,
    //               "opponentId": 59,
    //               "opponentImageId": 860056,
    //               "nrrChanges": "+0.181"
    //             },
    //             {
    //               "opponent": "Punjab Kings",
    //               "startdt": "1649858400000",
    //               "result": "Lost by 12 runs",
    //               "opponentSName": "PBKS",
    //               "matchId": 45996,
    //               "matchName": "23rd Match",
    //               "winner": 65,
    //               "opponentId": 65,
    //               "opponentImageId": 860084,
    //               "nrrChanges": "+0.109"
    //             },
    //             {
    //               "opponent": "Lucknow Super Giants",
    //               "startdt": "1650103200000",
    //               "result": "Lost by 18 runs",
    //               "opponentSName": "LSG",
    //               "matchId": 46011,
    //               "matchName": "26th Match",
    //               "winner": 966,
    //               "opponentId": 966,
    //               "opponentImageId": 882545,
    //               "nrrChanges": "+0.024"
    //             },
    //             {
    //               "opponent": "Chennai Super Kings",
    //               "startdt": "1650549600000",
    //               "result": "Lost by 3 wkts",
    //               "opponentSName": "CSK",
    //               "matchId": 46046,
    //               "matchName": "33rd Match",
    //               "winner": 58,
    //               "opponentId": 58,
    //               "opponentImageId": 860038,
    //               "nrrChanges": "+0.156"
    //             },
    //             {
    //               "opponent": "Lucknow Super Giants",
    //               "startdt": "1650808800000",
    //               "result": "Lost by 36 runs",
    //               "opponentSName": "LSG",
    //               "matchId": 46066,
    //               "matchName": "37th Match",
    //               "winner": 966,
    //               "opponentId": 966,
    //               "opponentImageId": 882545,
    //               "nrrChanges": "-0.108"
    //             },
    //             {
    //               "opponent": "Rajasthan Royals",
    //               "startdt": "1651327200000",
    //               "result": "Won by 5 wkts",
    //               "opponentSName": "RR",
    //               "matchId": 46101,
    //               "matchName": "44th Match",
    //               "winner": 62,
    //               "opponentId": 64,
    //               "opponentImageId": 860055,
    //               "nrrChanges": "+0.164"
    //             },
    //             {
    //               "opponent": "Gujarat Titans",
    //               "startdt": "1651845600000",
    //               "result": "Won by 5 runs",
    //               "opponentSName": "GT",
    //               "matchId": 46136,
    //               "matchName": "51st Match",
    //               "winner": 62,
    //               "opponentId": 971,
    //               "opponentImageId": 860068,
    //               "nrrChanges": "+0.111"
    //             },
    //             {
    //               "opponent": "Kolkata Knight Riders",
    //               "startdt": "1652104800000",
    //               "result": "Lost by 52 runs",
    //               "opponentSName": "KKR",
    //               "matchId": 46161,
    //               "matchName": "56th Match",
    //               "winner": 63,
    //               "opponentId": 63,
    //               "opponentImageId": 860046,
    //               "nrrChanges": "-0.169"
    //             },
    //             {
    //               "opponent": "Chennai Super Kings",
    //               "startdt": "1652364000000",
    //               "result": "Won by 5 wkts",
    //               "opponentSName": "CSK",
    //               "matchId": 46176,
    //               "matchName": "59th Match",
    //               "winner": 62,
    //               "opponentId": 58,
    //               "opponentImageId": 860038,
    //               "nrrChanges": "+0.281"
    //             },
    //             {
    //               "opponent": "Sunrisers Hyderabad",
    //               "startdt": "1652796000000",
    //               "result": "Lost by 3 runs",
    //               "opponentSName": "SRH",
    //               "matchId": 46206,
    //               "matchName": "65th Match",
    //               "winner": 255,
    //               "opponentId": 255,
    //               "opponentImageId": 860066,
    //               "nrrChanges": "+0.036"
    //             },
    //             {
    //               "opponent": "Delhi Capitals",
    //               "startdt": "1653141600000",
    //               "result": "Won by 5 wkts",
    //               "opponentSName": "DC",
    //               "matchId": 46226,
    //               "matchName": "69th Match",
    //               "winner": 62,
    //               "opponentId": 61,
    //               "opponentImageId": 860040,
    //               "nrrChanges": "+0.071"
    //             }
    //           ],
    //           "form": [
    //             "W",
    //             "L",
    //             "W",
    //             "L",
    //             "W"
    //           ],
    //           "teamImageId": 860053,
    //           "teamQualifyStatus": "E"
    //         }
    //       ]
    //     }
    //   ],
    //   "appIndex": {
    //     "seoTitle": "Indian Premier League 2022 Points Table | Cricbuzz.com",
    //     "webURL": "www.cricbuzz.com/cricket-series/4061/indian-premier-league-2022/points-table"
    //   },
    //   "legend": [
    //     {
    //       "key": "PTS",
    //       "value": "Points"
    //     },
    //     {
    //       "key": "NRR",
    //       "value": "Net Run Rate"
    //     },
    //     {
    //       "key": "Q",
    //       "value": "Qualified"
    //     },
    //     {
    //       "key": "E",
    //       "value": "Eliminated"
    //     },
    //     {
    //       "key": "P",
    //       "value": "Matches played"
    //     },
    //     {
    //       "key": "W",
    //       "value": "Matches won"
    //     },
    //     {
    //       "key": "L",
    //       "value": "Matches lost"
    //     },
    //     {
    //       "key": "NR",
    //       "value": "No Result"
    //     },
    //     {
    //       "key": "D",
    //       "value": "Disqualified"
    //     }
    //   ]
    // }

    const [tableData, setTableData] = useState()

    async function fetchTableData() {
        const url = 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/series/4061/points-table';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '7d240f3335msh88048827ba7eae3p125816jsnbd1fa131fc52',
                'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setTableData(result.pointsTable[0].pointsTableInfo);
            
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchTableData();
    }, []);

    return (
        <div>
            {
                tableData?.map(({ form, matchesLost, matchesPlayed, matchesWon, teamName, nrr, points }, i) => {
                    return <div className='flex gap-5'>
                        <span>{i + 1}</span>
                        <span>{teamName}</span>
                        <span>{matchesPlayed}</span>
                        <span>{matchesWon}</span>
                        <span>{matchesLost}</span>
                        <span>{points}</span>
                        <span>{form.reverse().map(data => data == "W" ?
                            <i className="fi fi-sr-check-circle text-green-400"></i>
                            : <i className="fi fi-sr-cross-circle text-red-400"></i>)}</span>
                    </div>
                })
            }
        </div>
    )
}

export default PointTable