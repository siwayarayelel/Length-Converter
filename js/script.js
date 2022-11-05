var input = document.querySelector("#input");
var result = document.querySelector("#result");
var inputType = document.querySelector("#inputType")
var resultType = document.querySelector("#resultType")
var inputTypeValue,resultTypeValue;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;



function myResult(){

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;


//for meter
    if(inputTypeValue === "meter" && resultTypeValue === "kilometer"){

        result.value = Number(input.value) * 0.001;
    }
    else if(inputTypeValue === "meter" && resultTypeValue === "centimeter"){

        result.value = Number(input.value) * 100;
    }
    else if(inputTypeValue === "meter" && resultTypeValue === "millimeter"){

        result.value = Number(input.value) * 1000;
    }
    else if(inputTypeValue === "meter" && resultTypeValue === "micrometer"){

        result.value = Number(input.value) * 1000000;
    }
    else if(inputTypeValue === "meter" && resultTypeValue === "nanometer"){

        result.value = Number(input.value) * 1000000000;
    }
    else if(inputTypeValue === "meter" && resultTypeValue === "miles"){

        result.value = Number(input.value) / 1609.344;
    }
    else if(inputTypeValue === "meter" && resultTypeValue === "yard"){

        result.value = Number(input.value) * 1.0936;
    }
    else if(inputTypeValue === "meter" && resultTypeValue === "foot"){

        result.value = Number(input.value) * 3.28084;
    }
    else if(inputTypeValue === "meter" && resultTypeValue === "inch"){

        result.value = Number(input.value) * 39.37;
    }
    else if(inputTypeValue === "meter" && resultTypeValue === "meter"){

        result.value = input.value
    }

//for kilometer
    if(inputTypeValue === "kilometer" && resultTypeValue === "meter"){

        result.value = Number(input.value) * 1000;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue === "centimeter"){

        result.value = Number(input.value) * 100000;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue === "millimeter"){

        result.value = Number(input.value) * 1000000;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue === "micrometer"){

        result.value = Number(input.value) * 1000000000;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue === "nanometer"){

        result.value = Number(input.value) * 1000000000000;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue === "miles"){

        result.value = Number(input.value) * 0.62137119;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue === "yard"){

        result.value = Number(input.value) * 1093.613298;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue === "foot"){

        result.value = Number(input.value) * 3280.8398950131;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue === "inch"){

        result.value = Number(input.value) * 39370.07874;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue === "kilometer"){

        result.value = input.value
    }


//for centimeter
    if(inputTypeValue === "centimeter" && resultTypeValue === "kilometer"){

        result.value = Number(input.value) * 0.00001;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue === "meter"){

        result.value = Number(input.value) * 0.01;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue === "millimeter"){

        result.value = Number(input.value) * 10;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue === "micrometer"){

        result.value = Number(input.value) * 100000;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue === "nanometer"){

        result.value = Number(input.value) * 10000000;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue === "miles"){

        result.value = Number(input.value) / 160934.4;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue === "yard"){

        result.value = Number(input.value) * 0.010936133;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue === "foot"){

        result.value = Number(input.value) * 0.0328084;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue === "inch"){

        result.value = Number(input.value) * 0.393701;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue === "centimeter"){

        result.value = input.value
    }


//for millimeter
    if(inputTypeValue === "millimeter" && resultTypeValue === "kilometer"){

        result.value = Number(input.value) * 0.000001;
    }
    else if(inputTypeValue === "millimeter" && resultTypeValue === "centimeter"){

        result.value = Number(input.value) / 10;
    }
    else if(inputTypeValue === "millimeter" && resultTypeValue === "meter"){

        result.value = Number(input.value) / 1000;
    }
    else if(inputTypeValue === "millimeter" && resultTypeValue === "micrometer"){

        result.value = Number(input.value) * 1000;
    }
    else if(inputTypeValue === "millimeter" && resultTypeValue === "nanometer"){

        result.value = Number(input.value) * 1000000;
    }
    else if(inputTypeValue === "millimeter" && resultTypeValue === "miles"){

        result.value = Number(input.value) / 1609344;
    }
    else if(inputTypeValue === "millimeter" && resultTypeValue === "yard"){

        result.value = Number(input.value) / 914.4;
    }
    else if(inputTypeValue === "millimeter" && resultTypeValue === "foot"){

        result.value = Number(input.value) / 305;
    }
    else if(inputTypeValue === "millimeter" && resultTypeValue === "inch"){

        result.value = Number(input.value) * 0.039;
    }
    else if(inputTypeValue === "millimeter" && resultTypeValue === "millimeter"){

        result.value = input.value
    }



//for micrometer
    if(inputTypeValue === "micrometer" && resultTypeValue === "kilometer"){

        result.value = Number(input.value) / 1000000;
    }
    else if(inputTypeValue === "micrometer" && resultTypeValue === "centimeter"){

        result.value = Number(input.value) / 10000;
    }
    else if(inputTypeValue === "micrometer" && resultTypeValue === "millimeter"){

        result.value = Number(input.value) / 1000;
    }
    else if(inputTypeValue === "micrometer" && resultTypeValue === "meter"){

        result.value = Number(input.value) / 1000000;
    }
    else if(inputTypeValue === "micrometer" && resultTypeValue === "nanometer"){

        result.value = Number(input.value) * 1000;
    }
    else if(inputTypeValue === "micrometer" && resultTypeValue === "miles"){

        result.value = Number(input.value) / 1609344000;
    }
    else if(inputTypeValue === "micrometer" && resultTypeValue === "yard"){

        result.value = Number(input.value) * 914400;
    }
    else if(inputTypeValue === "micrometer" && resultTypeValue === "foot"){

    result.value = Number(input.value) * 304800;
    }
    else if(inputTypeValue === "micrometer" && resultTypeValue === "inch"){

    result.value = Number(input.value) / 25400;
    }
    else if(inputTypeValue === "micrometer" && resultTypeValue === "micrometer"){

    result.value = input.value
    }


//for nanometer
    if(inputTypeValue === "nanometer" && resultTypeValue === "kilometer"){

        result.value = Number(input.value) / 1000000000000;
    }
    else if(inputTypeValue === "nanometer" && resultTypeValue === "centimeter"){

        result.value = Number(input.value) / 10000000;
    }
    else if(inputTypeValue === "nanometer" && resultTypeValue === "millimeter"){

        result.value = Number(input.value) / 1000000;
    }
    else if(inputTypeValue === "nanometer" && resultTypeValue === "micrometer"){

        result.value = Number(input.value) / 1000;
    }
    else if(inputTypeValue === "nanometer" && resultTypeValue === "meter"){

        result.value = Number(input.value) / 1000000000;
    }
    else if(inputTypeValue === "nanometer" && resultTypeValue === "miles"){

        result.value = Number(input.value) / 1609344000000;
    }
    else if(inputTypeValue === "nanometer" && resultTypeValue === "yard"){

        result.value = Number(input.value) / 914400000;
    }
    else if(inputTypeValue === "nanometer" && resultTypeValue === "foot"){

        result.value = Number(input.value) / 304800000;
    }
    else if(inputTypeValue === "nanometer" && resultTypeValue === "inch"){

        result.value = Number(input.value) / 25400000;
    }
    else if(inputTypeValue === "nanometer" && resultTypeValue === "nanometer"){

        result.value = input.value
    }



//for miles
    if(inputTypeValue === "miles" && resultTypeValue === "kilometer"){

        result.value = Number(input.value) * 1.609344;
    }
    else if(inputTypeValue === "miles" && resultTypeValue === "centimeter"){

        result.value = Number(input.value) * 160934.4;
    }
    else if(inputTypeValue === "miles" && resultTypeValue === "millimeter"){

        result.value = Number(input.value) * 1609344;
    }
    else if(inputTypeValue === "miles" && resultTypeValue === "micrometer"){

        result.value = Number(input.value) * 1609344000;
    }
    else if(inputTypeValue === "miles" && resultTypeValue === "nanometer"){

        result.value = Number(input.value) * 1609344000000;
    }
    else if(inputTypeValue === "miles" && resultTypeValue === "meter"){

        result.value = Number(input.value) * 1609.344;
    }
    else if(inputTypeValue === "miles" && resultTypeValue === "yard"){

        result.value = Number(input.value) * 1760;
    }
    else if(inputTypeValue === "miles" && resultTypeValue === "foot"){

        result.value = Number(input.value) * 5280;
    }
    else if(inputTypeValue === "miles" && resultTypeValue === "inch"){

        result.value = Number(input.value) * 63360;
    }
    else if(inputTypeValue === "miles" && resultTypeValue === "miles"){

        result.value = input.value
    }


//for yard
    if(inputTypeValue === "yard" && resultTypeValue === "kilometer"){

        result.value = Number(input.value) * 0.000914;
    }
    else if(inputTypeValue === "yard" && resultTypeValue === "centimeter"){

        result.value = Number(input.value) * 91.44;
    }
    else if(inputTypeValue === "yard" && resultTypeValue === "millimeter"){

        result.value = Number(input.value) * 914.4;
    }
    else if(inputTypeValue === "yard" && resultTypeValue === "micrometer"){

        result.value = Number(input.value) * 914400;
    }
    else if(inputTypeValue === "yard" && resultTypeValue === "nanometer"){

        result.value = Number(input.value) * 914400000;
    }
    else if(inputTypeValue === "yard" && resultTypeValue === "miles"){

        result.value = Number(input.value) / 1760;
    }
    else if(inputTypeValue === "yard" && resultTypeValue === "meter"){

        result.value = Number(input.value) * 0.9144;
    }
    else if(inputTypeValue === "yard" && resultTypeValue === "foot"){

        result.value = Number(input.value) * 3;
    }
    else if(inputTypeValue === "yard" && resultTypeValue === "inch"){

        result.value = Number(input.value) * 36;
    }
    else if(inputTypeValue === "yard" && resultTypeValue === "yard"){

        result.value = input.value
    }


//for foot
    if(inputTypeValue === "foot" && resultTypeValue === "kilometer"){

        result.value = Number(input.value) * 0.000305;
    }
    else if(inputTypeValue === "foot" && resultTypeValue === "centimeter"){

        result.value = Number(input.value) * 30.48;
    }
    else if(inputTypeValue === "foot" && resultTypeValue === "millimeter"){

        result.value = Number(input.value) * 304.8;
    }
    else if(inputTypeValue === "foot" && resultTypeValue === "micrometer"){

        result.value = Number(input.value) * 304800;
    }
    else if(inputTypeValue === "foot" && resultTypeValue === "nanometer"){

        result.value = Number(input.value) * 304800000;
    }
    else if(inputTypeValue === "foot" && resultTypeValue === "miles"){

        result.value = Number(input.value) / 5280;
    }
    else if(inputTypeValue === "foot" && resultTypeValue === "yard"){

        result.value = Number(input.value) / 3;
    }
    else if(inputTypeValue === "foot" && resultTypeValue === "meter"){

        result.value = Number(input.value) * 0.304;
    }
    else if(inputTypeValue === "foot" && resultTypeValue === "inch"){

        result.value = Number(input.value) * 12;
    }
    else if(inputTypeValue === "foot" && resultTypeValue === "foot"){

        result.value = input.value
    }


//for inch
    if(inputTypeValue === "inch" && resultTypeValue === "kilometer"){

        result.value = Number(input.value) * 0.0000254;
    }
    else if(inputTypeValue === "inch" && resultTypeValue === "centimeter"){

        result.value = Number(input.value) * 2.54;
    }
    else if(inputTypeValue === "inch" && resultTypeValue === "millimeter"){

        result.value = Number(input.value) * 25.4;
    }
    else if(inputTypeValue === "inch" && resultTypeValue === "micrometer"){

        result.value = Number(input.value) * 25400;
    }
    else if(inputTypeValue === "inch" && resultTypeValue === "nanometer"){

        result.value = Number(input.value) * 25400000;
    }
    else if(inputTypeValue === "inch" && resultTypeValue === "miles"){

        result.value = Number(input.value) / 63360;
    }
    else if(inputTypeValue === "inch" && resultTypeValue === "yard"){

        result.value = Number(input.value) / 36;
    }
    else if(inputTypeValue === "inch" && resultTypeValue === "foot"){

        result.value = Number(input.value) / 12;
    }
    else if(inputTypeValue === "inch" && resultTypeValue === "meter"){

        result.value = Number(input.value) * 0.0254;
    }
    else if(inputTypeValue === "inch" && resultTypeValue === "inch"){

        result.value = input.value
    }
}