{
   "code": 0
  ,"msg": ""
  ,"data":[
    {
        "title": "主页"
        ,"icon": "layui-icon-home"
        ,"list": []
    }
    ,
    {},
    {}
  ]
}

//插入语句 该 data 为 一级菜单列表
db.menuM.insert({"code":"0","msg":"","data":[15,18,26]})

{
   "code": "0"
   ,"msg": ""
   ,"data": ["15","18"]
}
// 修改一级菜单
db.menuM.update({"code":"0"},{$set:{"data":[]}})


//一级菜单所属字段
{
    "_id" :""
    "title": "主页"
    ,"icon": "layui-icon-home"
    ,"list": [D,F,N]
    ,"jump": ""
    ,"paixu":1
    ,"dengji":"1"
}

// 二级菜单所属字段
{
    "_id" :""
    "title": "主页"
    ,"name": " "
    ,"list": [D,F,N]
    ,"jump": ""
    ,"paixu":23
    ,"dengji":"2"
}

// 二级菜单所属字段
{
    "_id" :""
    ,"name": "laypage"
    ,"title": "分页"
    ,"paixu":13
    ,"dengji":"3"
}

{"title": "主页","icon": "layui-icon-home","list": [],"jump": "","paixu":"1",""}
db.menuS.update({"parent":""},{$set:{"dengji":"1"}},{multi:true})
db.menuS.update({"jump":"javascript:;"},{$set:{"parent":"","dengji":"1"})
db.menuS.remove({"dengji":"1"})
db.menuS.update({"icon" : "layui-icon-home"},{$set:{"parent":"","dengji":"1"}})
 ,

db.menuS.update({"icon" : "layui-icon-file"},{$set:{"dengji":"2"}})
 ,

db.menuS.update({"icon" : "layui-icon-close-fill"},{$set:{"dengji":"3"}})
 ,

 db.menuS.update({"dengji":"1"},{$set:{"list":[]}},{multi:true})
 ,
 db.menuS.update({"dengji":"2"},{$set:{"list":[]}},{multi:true})

 db.menuS.update({"list":"[]"},{$set:{"list":[]}},{multi:true})

 db.menuS.update({$set:{"list":[]}},{multi:true})

     function abc(){
        $.ajax({
            url: "http://localhost:3000/menu/menuList",  
            // dataType:"json",
            success: function(data){
                 for(var i=0; i<data.length; i++){
                     dk.push(data[i])
                 }
            }
        });
    }

    function sucArry(){

        // 循环生成一级表单
        for(var k=0; k<dk.length; k++){
            // 判断
            if(dk[k].dengji == 1){
                // 如果没有父级 创建一级菜单 
                menuArry.push(dk[k])
            }
        }

        // 循环生成二级表单
        for(var m=0; m<dk.length; m++){
            // 如果是二级菜单
            if(dk[m].dengji ==2 ){
                // 向父级数组List中添加
                for(var mm=0; mm<menuArry.length; mm++){
                    // 判断，如果寻找id值相等的父级
                    if(menuArry[mm]._id == dk[m].parent){
                        menuArry[mm].list.push(dk[m])
                    }
                }
            }
        }
        //先把3添加到2中 再把2 添加到1 中

        // 循环生成三级表单
        for(var j=0; j<dk.length; j++){
            // 如果是三级菜单
            if(dk[j].dengji ==3){

            }
        }


        console.log(menuArry)
    }
