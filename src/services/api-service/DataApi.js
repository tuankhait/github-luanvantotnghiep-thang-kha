import authorizedRequest from '../../services/api-service/authorizedRequest';
import unAuthorizedRequest from '../../services/api-service/unAuthorizedRequest';
const PREFIX ="api_server.php";
class DataApi {
    postDataMaster = (body, params) => {
        return unAuthorizedRequest.post(PREFIX, body, {}, params);
    };
}

export default new DataApi();