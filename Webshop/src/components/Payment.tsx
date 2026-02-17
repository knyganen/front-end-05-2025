
function Payment(props: {sum: number}) {
    const pay = () => {
        const url="https://igw-demo.every-pay.com/api/v4/payments/oneoff";
        const payload = {
            "account_name": "EUR3D1",
            "nonce": "16578" + new Date() + Math.random() * 999999,
            "timestamp": new Date(),
            "amount": props.sum,
            "order_reference": "abc" + Math.random() * 999999,
            "customer_url": "https://katunyganen.ee/webshop/tellimus",
            "api_username": "e36eb40f5ec87fa2"
        };
        const headers = {
            "Content-Type": "application/json",
            "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA=="
        };

        fetch(url, {
            method: "POST", 
            body: JSON.stringify(payload), 
            headers: headers
        }).then(res => res.json())
        .then(json => window.location.href = json.payment_link)
    }

  return (
    <div>
        <button onClick={pay}>Maksa</button>
    </div>
  )
}

export default Payment