import { get, omitBy, isNil, sumBy } from 'lodash';
import Cookies from 'js-cookie';
import URL from 'url';
import config from '../configs';

export default async ({ fullURL, url, method, query, body }) => {
  const response = await fetch(
    // eslint-disable-line
    `${fullURL || `${config.apiHost}${encodeURI(url)}`}${URL.format({
      query,
    })}`,
    omitBy(
      {
        method: method || (body ? 'POST' : 'GET'),
        headers: omitBy(
          {
            'Content-Type': 'application/json; charset=utf-8',
            accessToken: Cookies.get('accessToken'),
          },
          isNil,
        ),
        body: body ? JSON.stringify(body) : undefined,
      },
      isNil,
    ),
  );

  if (response.status === 200) {
    const json = await response.json();
    return Promise.resolve(json);
  } else {
    const json = await response.json();
    return Promise.reject({ statusCode: response.status, reason: json }); // eslint-disable-line
  }
};
