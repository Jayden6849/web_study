let applyMathFunctions = () => {
    let str1 = document.getElementById("floor").innerText;
    str1 = Number(str1.replace(/[^0-9.^-]/g, ""));
    // console.log(str1, typeof(str1));
    document.getElementById("floor").innerHTML = `Floor : ${Math.floor(str1)}`;

    let str2 = document.getElementById("round").innerText;
    str2 = Number(str2.replace(/[^0-9.^-]/g, ""));
    document.getElementById("round").innerHTML = `Round: ${Math.round(str2)}`;

    let str3 = document.getElementById("ceil").innerText;
    str3 = Number(str3.replace(/[^0-9.^-]/g, ""));
    document.getElementById("ceil").innerHTML = `Ceil: ${Math.ceil(str3)}`;

    let str4 = document.getElementById("abs").innerText;
    str4 = Number(str4.replace(/[^0-9.^-]/g, ""));
    document.getElementById("abs").innerHTML = `Abs: ${Math.abs(str4)}`;

    let str5 = document.getElementById("pow").innerText;
    str5 = str5.replace(/[^0-9.-]/g, "");
    // console.log(str5[0], str5[1]);
    document.getElementById("pow").innerHTML = `Pow: ${Math.pow(str5[0], str5[1])}`;

    // console.log(str);
}