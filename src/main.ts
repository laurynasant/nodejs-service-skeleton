const main = async () => {
  console.log("Hello World!")
};

export default main;

if (require.main === module) {
  main();
}
