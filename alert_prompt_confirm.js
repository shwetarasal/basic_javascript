<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>alert_prompt_confirm</title>
 
</head>
<body>
 <h1>Hello World! </h1> 
</body>
</html>
<script>
alert("Enter the value of a!!")
let a = prompt("enter a here")

let write = confirm("Do you want to write it to the page?")
if(write){
  document.write(a)
}
else{
  document.write("Please allow me to write")
}
</script>
