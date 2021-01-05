<template>
  <div>
    <form method="get" class="co-detain-form">
      <label for="invitation">邀请码</label>
      <input id="invitation" value="zsd" type="text"/>
      <input class="co-select" type="submit" value="查询">
    </form>
    <div class="co-detain-text">
      <div>
        <p>拘留：</p>
        <label for="downMenu">拘留类型</label>
        <select id="downMenu">
          <option value ="1">Volvo</option>
          <option value ="2">Saab</option>
          <option value="3">Opel</option>
          <option value="4">Audi</option>
        </select>
        <p>预计于2020-2-21 11:23:12释放</p>
        <button class="co-detain-sure">确定</button>
        <div class="co-detain-len">
        </div>
      </div>

      <div class="co-detain-len">
        <p>拘留记录：</p>
        <div>拘留时间：2020-2-21 11:23:12 至
          <br>2020-2-21 11:23:12</div>
        <p>拘留类型：垃圾营销</p>
        <p>拘留来源：自动封禁</p>
      </div>
    </div>
  </div>




</template>

<script>
export default {

}
</script>

<style>
.co-detain-form{
  border-bottom: solid black 1px;
  padding: 10px;
  /*margin: 10px;*/
}
#invitation{
  width: 50vw;
  height: 20px;
}
.co-select{
  width: 10vw; height: 25px;
}
.co-detain-text{
  line-height: 300%;
  padding: 10px;
}
#downMenu{
  width: 50vw;
}
.co-detain-sure{
  position: relative;
  width: 80vw;
  height: 40px;
  border-radius: 5px;
  left: 8vw;
}
.co-detain-len{
  border-bottom: solid black 1px;
  padding: 10px;
}
</style>