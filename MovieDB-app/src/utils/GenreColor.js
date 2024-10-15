// genre type color
const getGenreColor = (genreName) => {
  switch (genreName) {
    case "Action":
      return "bg-myred";
    case "Adventure":
      return "bg-darkcyan";
    case "Comedy":
      return "bg-cyan";
    case "Sci-Fi":
      return "bg-mutedred";
    case "Animation":
      return "bg-mutedred";
    case "Drama":
      return "bg-mutedred";
    case "Mystery":
      return "bg-yellow-400";
    default:
      return "bg-red-600";
  }
};

export default getGenreColor;
