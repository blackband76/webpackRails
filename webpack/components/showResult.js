const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const ShowResult = (values) => {
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
}