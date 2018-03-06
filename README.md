# TSAlert
一个简单的弹框,支持自动关闭，自定义按钮，主题选择。
## 使用方法
### 引入js文件

         <script src="../TSAlert.js"></script>或者<script src="../TSAlert.min.js"></script>
### 调用

        TSAlert(options);
options配置项:
  {
    content: '' //弹框要显示的内容
    theme: ''   //弹框的主题 info err suc三种
    autoClose: 0 //弹框自动关闭倒计时，单位为s，默认为0表示不自动关闭
  }
### 方法
以下方法都支持链式调用
#### addBtn(obj)
为弹框添加按钮：

        TSAlert(options).addBtn({
            text: '是',  //按钮文字
            event: function(e){
              //点击执行的事件
            }
        }).addBtn({
            text: '否',  //按钮文字
            event: function(e){
              //点击执行的事件
            }
        })
#### close()
关闭弹框方法:

        let tsa = TSAlert(options);
        tsa.close();
