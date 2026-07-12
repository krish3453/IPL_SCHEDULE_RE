import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import react from 'react'
import InPageNavi from './InPageNavi'



const MatchDetail = () => {


  // let FData =
  // {
  //   "matchid": 91596,
  //   "seriesid": 7607,
  //   "seriesname": "Indian Premier League 2024",
  //   "matchdesc": "51st Match",
  //   "matchformat": "T20",
  //   "startdate": 1714744800000,
  //   "enddate": 1714758342415,
  //   "state": "Complete",
  //   "status": "Mumbai Indians opt to bowl",
  //   "team1": {
  //     "teamid": 62,
  //     "teamname": "Mumbai Indians",
  //     "teamsname": "MI",
  //     "isfullmember": false,
  //     "isassociated": false,
  //     "isleagueteam": false,
  //     "iswomenteam": false,
  //     "isheader": false,
  //     "isactive": false,
  //     "teampriority": "",
  //     "isvideopresent": false,
  //     "imageid": 0,
  //     "countryname": "",
  //     "belongsto": "",
  //     "teamcolor": ""
  //   },
  //   "team2": {
  //     "teamid": 63,
  //     "teamname": "Kolkata Knight Riders",
  //     "teamsname": "KKR",
  //     "isfullmember": false,
  //     "isassociated": false,
  //     "isleagueteam": false,
  //     "iswomenteam": false,
  //     "isheader": false,
  //     "isactive": false,
  //     "teampriority": "",
  //     "isvideopresent": false,
  //     "imageid": 0,
  //     "countryname": "",
  //     "belongsto": "",
  //     "teamcolor": ""
  //   },
  //   "umpire1": {
  //     "id": 8905,
  //     "name": "Jayaraman Madanagopal",
  //     "country": "IND"
  //   },
  //   "umpire2": {
  //     "id": 9608,
  //     "name": "Tapan Sharma",
  //     "country": "IND"
  //   },
  //   "umpire3": {
  //     "id": 8034,
  //     "name": "Michael Gough",
  //     "country": "ENG"
  //   },
  //   "referee": {
  //     "id": 1820,
  //     "name": "Pankaj Dharmani",
  //     "country": "IND"
  //   },
  //   "venueinfo": {
  //     "id": 81,
  //     "ground": "Wankhede Stadium",
  //     "city": "Mumbai",
  //     "country": "India",
  //     "timezone": "+05:30",
  //     "established": 1974,
  //     "capacity": "33,000",
  //     "knownas": "",
  //     "ends": "Garware Pavilion End, Tata End",
  //     "hometeam": "Mumbai, Mumbai Indians",
  //     "floodlights": false,
  //     "curator": "",
  //     "profile": "",
  //     "imageurl": "",
  //     "groundlength": 0,
  //     "groundwidth": 0,
  //     "othersports": "",
  //     "imageid": 0,
  //     "latitude": "",
  //     "longitude": ""
  //   },
  //   "currbatteamid": 0,
  //   "ismatchnotcovered": false,
  //   "appindex": {
  //     "seotitle": "Cricket match facts MI vs KKR 51st Match,Indian Premier League 2024 | Cricbuzz.com",
  //     "weburl": "http://www.cricbuzz.com/cricket-match-facts/91596/mi-vs-kkr-51st-match-indian-premier-league-2024"
  //   },
  //   "istournament": true,
  //   "tossstatus": "Mumbai Indians opt to bowl",
  //   "seriesstartdt": 1710979200000,
  //   "seriesenddt": 1716768000000,
  //   "istimeannounced": false,
  //   "statetitle": "",
  //   "replacematchid": 0,
  //   "livestreamenabled": false,
  //   "isfantasyenabled": true,
  //   "broadcastinfo": [],
  //   "daynight": false,
  //   "matchtype": "league",
  //   "seriestype": "IPL",
  //   "shortstatus": "KKR won",
  //   "boundarytrackervalues": {
  //     "boundarytrackervalue": []
  //   },
  //   "matchimageid": 402272,
  //   "islivestreamenabled": false,
  //   "isfantasyhandbookenabled": false,
  //   "isforecastenabled": false,
  //   "ispollenabled": false
  // }


  let { id } = useParams()
  const [data, setData] = useState({})
  const [teamPlayers, setTeamPlayers] = useState([])




  async function PlayerDetails(teamId) {
    const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}/team/${teamId}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
        'Content-Type': 'application/json'
      }
    };


    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setTeamPlayers(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchMatchDetails(id) {
    const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
        'Content-Type': 'application/json'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    fetchMatchDetails(id)

  }, [id])


  return (
    <>
      <div><h1>Match Detail</h1></div>

      <InPageNavi teams={[data.team1?.teamsname, data.team2?.teamsname]}
        onClick={[
          () => PlayerDetails(data.team1?.teamid),
          () => PlayerDetails(data.team2?.teamid)
        ]}
      >


        <h1>{data.team1?.teamname}</h1>
        <h1>{data.team2?.teamname}</h1>

      </InPageNavi>

      <div>
        <h2>Players</h2>

        {teamPlayers.player?.map((group, i) => (
          <div key={i}>
            <h3>{group.category}</h3>

            {group.player.map((player) => (
              <div
                key={player.id}
                style={{
                  border: "1px solid gray",
                  margin: "8px",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                <h4>{player.name}</h4>
                <p>Role: {player.role}</p>


              </div>
            ))}
          </div>
        ))}
      </div>

    </>
  );
};

export default MatchDetail;
