// 调用后端接口的方法

axios.get('http://localhost:8081/timeNow')
    .then(response => {
        // 处理响应数据
        const dataContainer = document.getElementById('timeText');
        dataContainer.textContent = response.data.data;
        console.log(response.data);
    })
    .catch(error => {
        // 处理错误
        console.error(error);
    });