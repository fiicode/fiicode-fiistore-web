import { url } from './constants';
/**
 * Répresente une erreur renvoyée par l'API.
 */

class ApiErrors {
  constructor(errors) {
    this.errors = errors;
  }

  get errorsParField() {
    return this.errors?.reduce((acc, error) => {
      return {
        ...acc,
        [error.field]: error.message,
      };
    }, {});
  }
}

const checkUrl = async (urlCheck) => {
  try {
    const response = await fetch(urlCheck);
    return response.ok;
  } catch (error) {
    return false;
  }
};

/**
 *
 * @param endpoint
 * @param token
 * @param options
 * @returns {Promise<*>}
 */
// eslint-disable-next-line consistent-return
async function fetchData(
  endpoint,
  token = localStorage.getItem('fs_tk'),
  options = {}
) {
  // const token = JSON.parse(sessionStorage.getItem('fstore_token'));
  // console.log(localStorage.getItem('fs_tk'));
  // eslint-disable-next-line no-param-reassign
  options = {
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    ...options,
  };
  // if (token) {
  //   options.headers.Authorization = `${token.type} ${token.token}`;
  // }

  if (
    options.body !== null &&
    typeof options.body === 'object' &&
    !(options.body instanceof FormData)
  ) {
    options.body = JSON.stringify(options.body);
    options.headers['Content-Type'] = 'application/json';
  }

  // const getUrl = async function getUrl() {
  //   const primaryUrlWorks = await checkUrl(url);
  //   if (!primaryUrlWorks) {
  //     return url2;
  //   }
  //   return url;
  // };
  // const urlValid = await getUrl();
  const urlValid = url;

  let response = [];
  try {
    if (navigator.onLine) {
      response = await fetch(`${urlValid}${endpoint}`, options);
    } else {
    //   document.getElementById('NotiflixNotifyWrap')?.remove();
    //   Notiflix.Notify.warning(
    //     'Connexion internet perdue. Veuillez vous connecter '
    //   );
    }
  } catch (e) {
    // document.getElementById('NotiflixNotifyWrap')?.remove();
    // Notiflix.Notify.warning(
    //   'Le serveur distant est inaccessible. Réessayez dans quelques instants'
    // );
  }

  if (response.status === 400) {
    console.log(response.statusText);
  }

  if (response.status === 404) {
    console.log(response.statusText);
  }

  if (response.status === 401) {
    if (endpoint === '/access/me' || response?.statusText === 'Unauthorized') {
    //   Notiflix.Report.failure(
    //     'Votre session est expirée',
    //     'Veuillez vous reconnecter',
    //     'Ok',
    //     () => {
    //       localStorage.removeItem('fs_tk');
    //       window.location.reload();
    //     }
    //   );
    } else {
    //   document.getElementById('NotiflixNotifyWrap')?.remove();
    //   Notiflix.Notify.warning(response.statusText);
    }
  }

  if (response.status === 204) {
    return response.statusText;
  }

  if (navigator.onLine && response && response.length !== 0) {
    // try {
    // console.log(response);
    const responseData = await response.json();
    if (response.status === 400 || response.status === 422) {
    //   document.getElementById('NotiflixNotifyWrap')?.remove();
    //   Notiflix.Notify.warning(responseData?.errors[0]?.message);
    }
    if (response.ok) {
      return responseData;
    }
    if (responseData.errors) {
      throw new ApiErrors(responseData.errors);
    }
    // } catch (e) {
    //   // console.log(e.errors[0]?.message);
    //   document.getElementById('NotiflixNotifyWrap')?.remove();
    //   // console.log(e);
    //   Notiflix.Notify.warning('Une erreur se produite');
    // }
  } else {
    // document.getElementById('NotiflixNotifyWrap')?.remove();
    // Notiflix.Notify.warning(
    //   'Le serveur distant est inaccessible. Réessayez dans quelques instants'
    // );
  }
}

export { ApiErrors, fetchData, checkUrl };
