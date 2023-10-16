export default function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.insertAdjacentHTML('afterbegin', `count is ${counter}`);
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}
