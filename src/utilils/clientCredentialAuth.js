
const client_id = '031581b1a338434998e5fadc66822ebf';
const client_secret = 'f76acbd152b141d2bb6ccfd7c072406c';
const auth = btoa(`${client_id}:${client_secret}`);
const endpoint = 'https://accounts.spotify.com/api/token';

const authOption = {
  method: 'POST',
  body: new URLSearchParams({grant_type: 'client_credentials'}),
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    authorization: `Basic ${auth}`,
  }
};

async function accessTokenRequest(){
  try{
    const response = await fetch(endpoint,authOption);
    if(response.status === 200){
      const data = await response.json();
      console.log(data);
      return data.access_token;
    }
    console.log(response.statusText);
  }
  catch(error){
    console.log(error);
  }
}

export default  accessTokenRequest;