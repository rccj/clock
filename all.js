renderClockUnit();

function renderClockUnit() {
  const scale = document.querySelector('.scale');
  let deg = 180.5;//刻度角度，180度為12時的位置
  let time_deg = 180; // 數字角度
  let twelve_hours = 0; // 十二時制
  let twenty_hours = 12; // 二十四時制

  for (let i = 0; i < 60; i++) {
    const unit = document.createElement('div'); //創造一個Dom元素 div
    unit.classList.add('scale__unit'); //賦予一個class



    if (i % 5 == 0) {
      unit.style.transform = `rotate(${deg}deg) translateY(110px)`;

      const time = new Date()
      const hour = time.getHours();

      const am = `<span class="twelve" style="transform:rotate(${time_deg}deg)">${i == 0 ? 12 : twelve_hours}</span>`

      const pm = ` <span class="twenty" style="transform:rotate(${time_deg}deg)">${i == 0 ? 24 : twenty_hours}</span>`
      // 顯示數字
      // unit.innerHTML = hour < 13 ?am :pm;
      // unit.innerHTML = am+pm;


      twelve_hours++;
      twenty_hours++;

      time_deg -= 30; // 每一小刻度為5度，每小時間隔六個刻度，因此需減去6*5=30將數字轉正

    } else {
      unit.style.transform = `rotate(${deg}deg) translateY(120px)`;
    }

    deg += 6;

    scale.appendChild(unit);


  }

}
function clockPrimaryFeature() {

  const time = new Date()

  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();

  const hourDeg = (hour * 30 + min / 2);
  const minuteDeg = min * 6;
  const secondDeg = sec * 6;

  const HandHour = document.querySelector('.hand-hour');
  const handMinute = document.querySelector('.hand-minute');
  const hourSecond = document.querySelector('.hand-second');

  //加上角度
  HandHour.style.transform = `rotate(${180 + hourDeg}deg)`;
  handMinute.style.transform = `rotate(${180 + minuteDeg}deg)`;
  hourSecond.style.transform = `rotate(${180 + secondDeg}deg)`;


  //時間數字顯示
  const clockNumber = document.querySelector(".clockNumber");

  clockNumber.innerHTML = `
  <span>${hour < 10 ? '0' + hour : hour }</span>
  <span>${min < 10 ? '0' + min : min }</span>
  <span>${sec < 10 ? '0' + sec : sec }</span>
  `

}

clockPrimaryFeature()

setInterval(() => {
  clockPrimaryFeature()
}, 1000);

