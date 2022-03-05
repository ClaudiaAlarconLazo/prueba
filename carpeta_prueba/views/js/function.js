console.log('prueba');

axios.get('http://localhost:8080/api/v1/categories').then((res) => {
  const { data } = res;
  console.log(data);
});
