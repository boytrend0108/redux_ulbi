/* eslint-disable no-console */
function App() {
  function foo() {
    const a: number = 5;
    const b: number = 6;

    console.log('result:', a === b);
  }

  foo();

  return <div>Works</div>;
}

export default App;
