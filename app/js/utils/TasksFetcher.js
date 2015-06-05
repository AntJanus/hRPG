import config from '../../../config';
import request from 'superagent-bluebird-promise';

var baseUrl = 'https://habitrpg.com/api/v2';

var TaskFetcher = {
  fetch() {
    return request
      .get(baseUrl + '/user/tasks')
      .set('x-api-user', config.id)
      .set('x-api-key', config.token)
    ;
  }
};

export default TaskFetcher;
