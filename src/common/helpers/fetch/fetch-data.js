/**
 * Method used to fetch data from a given endpoint
 *
 * @param {string} base_url - base url to fetch
 * @param {string} resource_path - resource path to fetch
 * @param {string} sub_resource_path - id for subresource path to fetch
 * @returns {Promise}
 */
export const fetchData = (base_url, resource_path, sub_resource_path) => {
  const RESOURCE = sub_resource_path
    ? `${resource_path}/${sub_resource_path}/`
    : `${resource_path}/`
  const URL_TO_FETCH = resource_path ? `${base_url}/${RESOURCE}` : base_url

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', URL_TO_FETCH, true)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) resolve(JSON.parse(xhr.responseText))
    }
    xhr.onerror = () => reject(new Error(`XMLHttpRequest failed with status ${xhr.status}`))
    xhr.send()
  })
}
