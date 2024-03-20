var son = +prompt (" Son kriting biz uni juft yoki toqiligini aniqlab bermaiza ")
while (isNaN(son)) {
    son = +prompt(" Bu son emas iltmos son kriting ")
}
if (son % 2 === 0) {
    son = alert (" Bu juft son ");
   } else {
     son = alert(" Bu toq son ");
   }


