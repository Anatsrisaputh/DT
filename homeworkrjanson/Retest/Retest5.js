// ให้เขียนโปรแกรมที่หาผลลัพธ์ของ 1 - 2 + 3 - 4 + 5 - 6 + 7 - … + 18953 - 18954 
// แล้วแสดง alert คำตอบออกมา
let sum = 0;
for (i = 1; i <= 18954; i++); {
    if (i % 2 == 0) {
        sum = sum - i;
    }
    else sum = sum + i
}
alert(sum);
    