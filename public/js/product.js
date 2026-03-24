const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log("submit fun called");
    const product = e.target.productName.value;

    const obj = {
        "productName": product
    }

    axios.post('http://localhost:5000/products', obj).then((result) => {
        console.log('Value returned from POST request: ' + result.data.value);
    });
};