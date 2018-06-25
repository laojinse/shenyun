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
