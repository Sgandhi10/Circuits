var big, v;
big = 0;

function normal(){
    var image = document.getElementById("image");
    image.src = "images/"+big[2];
}
function wrong(){
    var image = document.getElementById("image");
    image.src = "images/incorrect.svg";
    setTimeout(normal, 1000);
}

function submit(){
    big[0][big[1]] = parseFloat(document.getElementById("ANSWER").value)
    if (verify(big[3], big[0])){
        var image = document.getElementById("image");
        image.src = "images/correct.svg";
    } else {
        wrong();
    }
}
function make_resistor(){
    return parseFloat((((Math.random() * 90)) / 10 + 1).toFixed(2));
}
function make_current(){
    return parseFloat((((Math.random() * 10) / 10) + .95).toFixed(2));
}
function make_voltage(){
    return parseFloat((((Math.random() * 100) / 10) + 95).toFixed(2));
}

function selector() {
    var count, counter, file, nums, rand, varj, d;
    var rand_li = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 16, 17, 18];
    rand = rand_li[Number.parseInt((Math.random() * rand_li.length))];
    d = {"V": make_voltage, "I": make_current, "R": make_resistor};
    rand_dict = { 0: ["V", "I", "R1", "R2", "R3", "R4"], 1: ["V", "I", "R1", "R2", "R3", "R4"], 2: ["V", "I", "R1", "R2", "R3", "R4"], 3: ["V", "I", "R1", "R2", "R3", "R4", "R5"], 4: ["V", "I", "R1", "R2", "R3", "R4", "R5"], 5: ["V", "I", "R1", "R2", "R3", "R4"], 6: ["V", "I", "R1", "R2", "R3", "R4", "R5", "R6"], 7: ["V", "I", "R1", "R2", "R3", "R4", "R5", "R6"], 8: ["V", "I", "R1", "R2", "R3"], 9: ["V", "I", "R1", "R2", "R3", "R4"], 10: ["V", "I","R1", "R2", "R3", "R4","R5", "R6"], 12: ["V", "I","R1", "R2", "R3", "R4","R5", "R6"], 14: ["V", "I","R1", "R2", "R3", "R4", "R5","R6", "R7"], 15: ["V", "I","R1", "R2", "R3", "R4", "R5", "R6"], 16: ["V", "I", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8"], 17: ["V", "I", "R1", "R2", "R3", "R4", "R5", "R6","R7", "R8"], 18: ["V", "I", "R1", "R2", "R3", "R4", "R5"]  };
    file = "circuit" + rand.toString() + ".svg";
    nums = {};
    for (i = 0; i<rand_dict[rand].length; i++){
        nums[rand_dict[rand][i]] = d[rand_dict[rand][i].charAt(0)]();
    }
    varj = "";
    count = Number.parseInt((Math.random() * Object.keys(nums).length));
    counter = 0;
    for (var i in nums) {
        if (counter == count) {
            varj = i;
            break;
        }
        counter += 1;
    }
    delete nums[varj];
    return [nums, varj, file, rand];
}

function dothedo(){
    var dic;
    dic = {"R": "&Omega;", "I": "A", "V": "V"};
    big = selector();
    //big[0] = JSON.stringify(big[0])
    var image = document.getElementById("image");
    image.src = "images/"+big[2];
    //document.getElementById("big").innerHTML = big.toString();
    var s;
    s = "";
    for (var key in big[0]){
        s = s + key + "=" + big[0][key].toString() + dic[key.charAt(0)] + "; ";
    }

    s = s.substring(0, s.length-2);
    document.getElementById("va").innerHTML = "Given "+s;
    document.getElementById("vb").innerHTML = "Find "+big[1].toString();
}

function voltage_divider(rand, nums) {
    var new_nums = {};
    for (var i in nums) {
        new_nums[i] = nums[i];
    }
    new_nums["V"] = (nums["V"] * nums["R" + (nums.length - 2)]) / (nums["R" + (nums.length - 2)] + nums["R" + (nums.length - 3)]);
    return verify(rand % 10, new_nums);
}

function verify(rand, nums) {
    var current, resistance, voltage;
    if (rand > 9) {
        return voltage_divider(rand, nums);
    } else {
        if (rand === 0) {
            current = nums["I"];
            resistance = ((1 / ((1 / nums["R1"]) + (1 / nums["R2"]))) + (1 / ((1 / nums["R4"]) + (1 / nums["R3"]))));
            voltage = nums["V"];
            return error(current, resistance, voltage);
        } else {
            if (rand == 1) {
                current = nums["I"];
                resistance = ((nums["R1"] + nums["R2"]) + (1 / ((1 / nums["R4"]) + (1 / nums["R3"]))));
                voltage = nums["V"];
                return error(current, resistance, voltage);
            } else {
                if (rand == 2) {
                    current = nums["I"];
                    resistance = (nums["R1"] + (1 / ((1 / nums["R2"]) + (1 / (nums["R3"] + nums["R4"])))));
                    voltage = nums["V"];
                    return error(current, resistance, voltage);
                } else {
                    if (rand == 3) {
                        current = nums["I"];
                        resistance = (nums["R1"] + (1 / ((1 / nums["R2"]) + (1 / ((nums["R3"] + nums["R4"]) + nums["R5"])))));
                        voltage = nums["V"];
                        return error(current, resistance, voltage);
                    } else {
                        if (rand == 4) {
                            current = nums["I"];
                            resistance = (((nums["R1"] + nums["R2"]) + nums["R3"]) + (1 / ((1 / nums["R4"]) + (1 / nums["R5"]))));
                            voltage = nums["V"];
                            return error(current, resistance, voltage);
                        } else {
                            if (rand == 5) {
                                current = nums["I"];
                                resistance = (((nums["R1"] + nums["R4"]) + nums["R2"]) + nums["R3"]);
                                voltage = nums["V"];
                                return error(current, resistance, voltage);
                            } else {
                                if (rand == 6) {
                                    current = nums["I"];
                                    resistance = ((nums["R1"] + nums["R4"]) + (1 / (((1 / (nums["R2"] + nums["R3"])) + (1 / nums["R5"])) + (1 / nums["R6"]))));
                                    voltage = nums["V"];
                                    return error(current, resistance, voltage);
                                } else {
                                    if (rand == 7) {
                                        current = nums["I"];
                                        resistance = ((nums["R1"] + nums["R6"]) + (1 / (((1 / nums["R2"]) + (1 / nums["R3"])((1 / nums["R5"]))) + (1 / nums["R4"]))));
                                        voltage = nums["V"];
                                        return error(current, resistance, voltage);
                                    } else {
                                        if (rand == 8) {
                                            current = nums["I"];
                                            resistance = ((nums["R1"] + nums["R2"]) + nums["R3"]);
                                            voltage = nums["V"];
                                            return error(current, resistance, voltage);
                                        } else {
                                            if (rand == 9) {
                                                current = nums["I"];
                                                resistance = (((1 / ((1 / nums["R1"]) + (1 / nums["R2"]))) + (1 / ((1 / nums["R4"]) + (1 / nums["R5"])))) + nums[3]);
                                                voltage = nums["V"];
                                                return error(current, resistance, voltage);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function error(current, resistance, voltage) {
    if ((((current + 0.1) > (voltage/resistance)) && ((current - 0.1) < (voltage/resistance)))) {
        return true;
    }
    return false;
}

//# sourceMappingURL=calculate.js.map
