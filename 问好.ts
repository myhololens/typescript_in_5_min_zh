class 学生 {
  全名: string;
  constructor(public 姓: string, public 名: string) {
      this.全名 = 姓 + 名;
  }
}

interface 人 {
  姓: string;
  名: string;
}

function 问好(那谁: 人) {
  return "吃了么, " + 那谁.姓 + 那谁.名;
}

let 路人 = new 学生("大", "黄");

document.body.innerHTML = 问好(路人);