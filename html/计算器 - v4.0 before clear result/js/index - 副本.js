// function getValue(val){
//     alert(val);
// }



// $(".input").click(function(){
// 	var number =  $(this).val();
// 	alert('hello world');
// };




// function display_alert()
//   {
//   // alert((this).value)
//   alert((this).)
//   };


// var btn = addEventListener('click',function getValue(val){alert(val);},false);
// btn.onclick = function(){
// 	alert('hello world');
// }





// function demo(){
// 	var num = document.getElementById("one").getElementsByTagName("li");
// 	// alert(this.innerHTML);
// 	for(i=1;i<num.length;i++){
//         num[i].onclick = function(){
//             alert(this.innerHTML);
//         }
//     }
// };


// function demo(){
// 	var num = document.getElementById("one").getElementsByTagName("li");
// 	alert(this.innerHTML);
// };



//*********v1.0*********//
// var index = document.getElementById('output_display').innerText = 0; 

// function demo(){

// 	//获取点击<li>标签里的值
// 	var num = document.getElementById("one").getElementsByTagName("li");
// 	for(i=0;i<num.length;i++){
//         num[i].onclick = function(){
//             // alert(this.innerHTML);
//             // var input_num = document.getElementById("output_display")
//         	document.getElementById('output_display').innerText = (this.innerHTML);
//         }
//     }
// };

// demo();







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
        	var last_num = document.getElementById('output_display').innerText = (show + c_nun).replace(/\b(0+)/gi,"");
        	//.replace(/\b(0+)/gi,"") 方法为：去掉字符串前面的0
        	// var float_num = document.getElementById('output_display').innerText = '0' + (show + c_nun).replace(/\b(0+)/gi,"");

        	//移除字符串中最前面的零
        	// if(last_num.length>=2 && last_num.indexOf(".")>-1){
        	// 	document.getElementById('output_display').innerText = float_num;
        	// }else 
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
    // document.getElementById("float_add_zero").onclick = float_add_zero;
    document.getElementById("jia").onclick = jia;
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







// //退格键：删除输错的数字
// function backspace_key(){
// 	var new_index = document.getElementById('output_display').innerText;
// 	if(new_index == ''){
// 		alert(123)
// 		document.getElementById('output_display').innerText = 0;
// 	}
// 	else{
// 		var now_index = new_index.substring(0,new_index.length - 1);
// 		document.getElementById('output_display').innerText = now_index;
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




// //退格键：删除输错的数字
// function backspace_key(){
// 	var new_index = document.getElementById('output_display').innerText;

// 		if(new_index != '' && new_index.length >= 2 && new_index.indexOf("0.")>-1){
// 			var now_index = new_index.substring(0,new_index.length - 1);
// 			document.getElementById('output_display').innerText = now_index;
// 		};
// 		else if(new_index != '' && new_index.length >= 2){
// 			var now_index = new_index.substring(0,new_index.length - 1);
// 			document.getElementById('output_display').innerText = now_index;
// 		};
// 		else{
// 			document.getElementById('output_display').innerText = 0;
// 		};
// };








// //加法
//  function jia(){
// 	var last_num = document.getElementById('output_display').innerText;

// 	var bjs = last_num.match(/(\S*)+/)[1];
// 	// var js = last_num.match(/+(\S*)=/)[1]; 
// 	var jia_result=Number(bjs)+Number(js);
// 	console.log(jia_result)
// 	document.getElementById('output_display').innerText = jia_result;
//  };




//加法
 function jia(){
	var last_num = document.getElementById('output_display').innerText;

	var bjs = last_num.substring(0,last_num.indexOf('+'));
	var js = last_num.substring(last_num.indexOf('+')+1,last_num.length);
	var jia_result=Number(bjs)+Number(js);
	console.log(jia_result)
	document.getElementById('output_display').innerText = jia_result;
 };











        //  function jian(){//减法  
              
        //     var a=document.getElementById('a').value;  
        //     var b=document.getElementById('b').value;  
        //     var c=document.getElementById('c');  
        //      c.value=Number(a)-Number(b);  
                      
                              
        // }  
              
        // function cheng(){//乘法  
              
        //     var a=document.getElementById('a').value;  
        //     var b=document.getElementById('b').value;  
        //     var c=document.getElementById('c');  
        //      c.value=Number(a)*Number(b);  
                      
                              
        // }  
              
        // function chu(){//除法  
              
        //     var a=document.getElementById('a').value;  
        //     var b=document.getElementById('b').value;  
        //     var c=document.getElementById('c');  
        //      c.value=Number(a)/Number(b);  
                      
                              
        // }  