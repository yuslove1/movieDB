
function errorHandling(error) {

    if (error.message === 'Movie not found') {
       return {serverError: false, movieNotFound: true };
      } else{
       return { serverError: true, movieNotFound: false };
      } 

}
export default errorHandling;

