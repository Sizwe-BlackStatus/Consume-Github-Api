const axios = require("axios");
function getApi(repositoryName, startDate, endDate) {
  axios
    .get(
      `https://api.github.com/repos/UWSEDS/${repositoryName}/pulls?state=all`
    )
    .then((response) => {
      var prByDate = response.data.filter(function (year) {
        return (
          year.created_at > startDate &&
          year.created_at < endDate ||
          year.closed_at > startDate &&
          year.closed_at < endDate ||
          year.merged_at > startDate &&
          year.merged_at < endDate
        );
      });
      console.log(prByDate);
    })
    .catch((error) => {
      console.log("ERROR HERE", error);
    });
  return repositoryName;
}
console.log(getApi("uwseds.github.io", "2015-01-01", "2018-12-31"));