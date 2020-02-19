import Axios from "axios";

export const getInfo = (username) => dispatch =>
  {
    Axios.get(`https://api.github.com/users/${username}`).then((response)=>
    {
      dispatch(
        {
          type:"ADD_USER",
          personData:
            {
              name:response.data.name,
              username:response.data.login,
              img:response.data.avatar_url
            }
        });
    }).catch((error)=>
    {
      dispatch(
        {
          type:"API_ERROR",
          info:error.response.data.message
        }
      );
    })
  };