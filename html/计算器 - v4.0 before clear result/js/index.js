



// //*********v2.0*********//
// var index = document.getElementById('output_display').innerText = 0; 

// function demo(){
// 	//获取点击<li>标签里的值
// 	var num = document.getElementById("one").getElementsByTagName("li");
// 	for(i=0;i<num.length;i++){
//         num[i].onclick = function(){
//             index = null;

//             //输入值：字符串的拼接
//         	var show = document.getElementById('output_display').innerText;
//         	var c_nun = document.getElementById('output_display').innerText = (this.innerHTML);
//         	document.getElementById('output_display').innerText = (show + c_nun).replace(/\b(0+)/gi,"");
//         	//.replace(/\b(0+)/gi,"") 方法为：去掉字符串前面的0
//         }
//     }
//     document.getElementById("ac_btn").onclick = ac;
//     document.getElementById("btn_c").onclick = backspace_key;
// };



// function ac(){
// 	var index = document.getElementById('output_display').innerText = 0; 
// };

// demo();







//*********v3.0*********//
var index = document.getElementById('output_display').innerText = 0; 

function demo(){
	//获取点击<li>标签里的值
	var num = document.getElementById("one").getElementsByTagName("li");
	for(i=0;i<num.length;i++){
        num[i].onclick = function(){
            index = null;

            //输入值：字符串的拼接
        	var show = document.getElementById('output_display').innerText;
        	var c_nun = document.getElementById('output_display').innerText = (this.innerHTML);
            var add_num = document.getElementById('output_display').innerText = (show + c_nun);


            //解决输入零点几的数时，小数点前面不显示0的情况
            if(add_num.indexOf("0.")>-1){
                var last_num = document.getElementById('output_display').innerText = '0' + (show + c_nun).replace(/\b(0+)/gi,"");
            }
            else{
                var last_num = document.getElementById('output_display').innerText = (show + c_nun).replace(/\b(0+)/gi,"");
                //.replace(/\b(0+)/gi,"") 方法为：去掉字符串前面的0
            }


        	//解决输入一位数以上的数时，仅显示一位数的情况
        	if(last_num.length>=2){
        		document.getElementById('output_display').innerText = last_num;
        	}
        	else{
        		document.getElementById('output_display').innerText = (this.innerHTML);
        	}
        }
    }
    document.getElementById("ac_btn").onclick = ac;
    document.getElementById("btn_c").onclick = backspace_key;
    document.getElementById("dengyu").onclick = dengyu;
    document.getElementById("jishu").onclick = jishuqi;
};



function ac(){
	var index = document.getElementById('output_display').innerText = 0; 
};

demo();



// //解决输入零点几的数时，小数点前面不显示0的情况
// function float_add_zero(){
// 	var show = document.getElementById('output_display').innerText;
// 	var c_nun = document.getElementById('output_display').innerText = (this.innerHTML);
// 	var last_num = document.getElementById('output_display').innerText = (show + c_nun).replace(/\b(0+)/gi,"");
// 	if(last_num.length>=2 && last_num.indexOf(".")==0){
// 		alert(123)
// 		// document.getElementById('output_display').innerText = '0' + (show + c_nun).replace(/\b(0+)/gi,"");
// 	}
// };




//退格键：删除输错的数字
function backspace_key(){
	var new_index = document.getElementById('output_display').innerText;
	if(new_index != '' && new_index.length >= 2){
		var now_index = new_index.substring(0,new_index.length - 1);
		document.getElementById('output_display').innerText = now_index;
	}
	else{
		document.getElementById('output_display').innerText = 0;
	}
};





//加法
 function jia(){
	var last_num = document.getElementById('output_display').innerText;

	var bjs = last_num.substring(0,last_num.indexOf('+'));
	var js = last_num.substring(last_num.indexOf('+')+1,last_num.length);
	var jia_result=Number(bjs)+Number(js);
	console.log(jia_result)
	document.getElementById('output_display').innerText = jia_result;
 };


//减法
 function jian(){
    var last_num = document.getElementById('output_display').innerText;

    var bjs = last_num.substring(0,last_num.indexOf('-'));
    var js = last_num.substring(last_num.indexOf('-')+1,last_num.length);
    var jia_result=Number(bjs)-Number(js);
    console.log(jia_result)
    document.getElementById('output_display').innerText = jia_result;
 };


//乘法
 function chen(){
    var last_num = document.getElementById('output_display').innerText;

    var bjs = last_num.substring(0,last_num.indexOf('×'));
    var js = last_num.substring(last_num.indexOf('×')+1,last_num.length);
    var jia_result=Number(bjs)*Number(js);
    console.log(jia_result)
    document.getElementById('output_display').innerText = jia_result;
 };


//除法 
 function chu(){
    var last_num = document.getElementById('output_display').innerText;

    var bjs = last_num.substring(0,last_num.indexOf('÷'));
    var js = last_num.substring(last_num.indexOf('÷')+1,last_num.length);
    var jia_result=Number(bjs)/Number(js);
    console.log(jia_result)
    document.getElementById('output_display').innerText = jia_result;
 };



function dengyu(){
    var last_num = document.getElementById('output_display').innerText;
    if(last_num.indexOf("+")>-1){
        jia();
    }
    else if(last_num.indexOf("-")>-1){
        jian();
    }
    else if(last_num.indexOf("×")>-1){
        chen();
    }
    else if(last_num.indexOf("÷")>-1){
        chu();
    }

    var x=1;
};



// document.getElementById("one").document.getElementByTagName("li").onclick = 
function jishuqi(){
    alert(123)
    x-1
};