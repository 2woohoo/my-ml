import './App.css';

function App() {


  // const status = document.getElementById('status');
  // if (status) {
  //   status.innerText = 'Loaded TensorFlow.js - version: ' + tf.version.tfjs;
  // }

  return (
    <div className="App">
      <div className='container'>
        <div className='text-blue-500 text-2xl'>训练你的机器模型</div>

        {/* <p id="status" className='font-bold'>Awaiting TF.js load</p> */}

        <p id="status">正在初始化项目...</p>

        <video id="webcam" autoplay></video>

        <button id="enableCam">开启摄像头</button>
        <button class="dataCollector" data-1hot="0" data-name="Class 1">采集类别1</button>
        <button class="dataCollector" data-1hot="1" data-name="Class 2">采集类别2</button>
        <button class="dataCollector" data-1hot="2" data-name="Class 3">采集类别3</button>
        <button id="train">训练 &amp; 并进行预测!</button>
        <button id="reset">重试！</button>

        <p>使用方法：</p>
        <ol>
          <li>开启摄像头</li>
          <li>采集类别1,2,3，至少30秒</li>
          <li>点击训练并预测</li>
          <li>当模型训练完毕后可以看到结果实时展示在网页上</li>
        </ol>

      </div>
    </div>
  );
}

export default App;
