<template>
  <div>
    <form method="get" style="border-bottom: solid black 1px; padding: 10px; margin: 10px; position: static;" >
      <label for="invitation">邀请码</label>
      <input id="invitation" value="zsd" type="text" style="width: 50vw; height: 20px"/>
      <input type="submit" value="查询" style="width: 10vw; height: 25px;">
    </form>
    <div style="line-height: 200%">
      <p>拘留：</p>
      <label for="downMenu">拘留类型</label>
      <select id="downMenu" style="width: 50vw">
        <option value ="1">Volvo</option>
        <option value ="2">Saab</option>
        <option value="3">Opel</option>
        <option value="4">Audi</option>
      </select>
      <p>预计于2020-2-21 11:23:12释放</p>
      <button style="position: relative; width: 80vw; height: 40px; left: 8vw">确定</button>
      <div style="border-bottom: solid black 1px; padding: 10px;">

      </div>
      <div style="border-bottom: solid black 1px; padding: 10px;">
        <p>拘留记录：</p>
        <div>拘留时间：2020-2-21 11:23:12
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