/** URL-encodes form data the way Netlify Forms expects. */
export const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

/**
 * Posts a submission to Netlify Forms. `formName` must match a hidden
 * detection form in index.html. Throws on network or HTTP failure.
 */
export async function submitNetlifyForm(formName, fields) {
  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({ 'form-name': formName, ...fields }),
  });
  if (!response.ok) {
    throw new Error(`Form submission failed (${response.status})`);
  }
  return response;
}
