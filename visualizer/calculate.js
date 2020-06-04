var big;
big = 0;
function selector() {
    var count, counter, file, nums, rand, varj;
    rand = Number.parseInt(((Math.random() * 10) + 1));
    file = "circuit"+rand.toString()+".jpg";
    if ((rand === 1)) {
        nums = {"V": (Number.parseInt((Math.random() * 1000)) / 10), "I": (Number.parseInt((Math.random() * 100)) / 10), "R1": (Number.parseInt((Math.random() * 10000)) / 10), "R2": (Number.parseInt((Math.random() * 10000)) / 10), "R3": (Number.parseInt((Math.random() * 10000)) / 10), "R4": (Number.parseInt((Math.random() * 10000)) / 10)};
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
    } else {
        if ((rand === 2)) {
            nums = {"V": (Number.parseInt((Math.random() * 1000)) / 10), "I": (Number.parseInt((Math.random() * 100)) / 10), "R1": (Number.parseInt((Math.random() * 10000)) / 10), "R2": (Number.parseInt((Math.random() * 10000)) / 10), "R3": (Number.parseInt((Math.random() * 10000)) / 10), "R4": (Number.parseInt((Math.random() * 10000)) / 10)};
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
        } else {
            if ((rand === 3)) {
                nums = {"V": (Number.parseInt((Math.random() * 1000)) / 10), "I": (Number.parseInt((Math.random() * 100)) / 10), "R1": (Number.parseInt((Math.random() * 10000)) / 10), "R2": (Number.parseInt((Math.random() * 10000)) / 10), "R3": (Number.parseInt((Math.random() * 10000)) / 10), "R4": (Number.parseInt((Math.random() * 10000)) / 10)};
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
            } else {
                if ((rand === 4)) {
                    nums = {"V": (Number.parseInt((Math.random() * 1000)) / 10), "I": (Number.parseInt((Math.random() * 100)) / 10), "R1": (Number.parseInt((Math.random() * 10000)) / 10), "R2": (Number.parseInt((Math.random() * 10000)) / 10), "R3": (Number.parseInt((Math.random() * 10000)) / 10), "R4": (Number.parseInt((Math.random() * 10000)) / 10), "R5": (Number.parseInt((Math.random() * 10000)) / 10)};
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
                } else {
                    if ((rand === 5)) {
                        nums = {"V": (Number.parseInt((Math.random() * 1000)) / 10), "I": (Number.parseInt((Math.random() * 100)) / 10), "R1": (Number.parseInt((Math.random() * 10000)) / 10), "R2": (Number.parseInt((Math.random() * 10000)) / 10), "R3": (Number.parseInt((Math.random() * 10000)) / 10), "R4": (Number.parseInt((Math.random() * 10000)) / 10), "R5": (Number.parseInt((Math.random() * 10000)) / 10)};
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
                    } else {
                        if ((rand === 6)) {
                            nums = {"V": (Number.parseInt((Math.random() * 1000)) / 10), "I": (Number.parseInt((Math.random() * 100)) / 10), "R1": (Number.parseInt((Math.random() * 10000)) / 10), "R2": (Number.parseInt((Math.random() * 10000)) / 10), "R3": (Number.parseInt((Math.random() * 10000)) / 10), "R4": (Number.parseInt((Math.random() * 10000)) / 10)};
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
                        } else {
                            if ((rand === 7)) {
                                nums = {"V": (Number.parseInt((Math.random() * 1000)) / 10), "I": (Number.parseInt((Math.random() * 100)) / 10), "R1": (Number.parseInt((Math.random() * 10000)) / 10), "R2": (Number.parseInt((Math.random() * 10000)) / 10), "R3": (Number.parseInt((Math.random() * 10000)) / 10), "R4": (Number.parseInt((Math.random() * 10000)) / 10), "R5": (Number.parseInt((Math.random() * 10000)) / 10), "R6": (Number.parseInt((Math.random() * 10000)) / 10)};
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
                            } else {
                                if ((rand === 8)) {
                                    nums = {"V": (Number.parseInt((Math.random() * 1000)) / 10), "I": (Number.parseInt((Math.random() * 100)) / 10), "R1": (Number.parseInt((Math.random() * 10000)) / 10), "R2": (Number.parseInt((Math.random() * 10000)) / 10), "R3": (Number.parseInt((Math.random() * 10000)) / 10), "R4": (Number.parseInt((Math.random() * 10000)) / 10), "R5": (Number.parseInt((Math.random() * 10000)) / 10), "R6": (Number.parseInt((Math.random() * 10000)) / 10)};
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
                                } else {
                                    if ((rand === 9)) {
                                        nums = {"V": (Number.parseInt((Math.random() * 1000)) / 10), "I": (Number.parseInt((Math.random() * 100)) / 10), "R1": (Number.parseInt((Math.random() * 10000)) / 10), "R2": (Number.parseInt((Math.random() * 10000)) / 10), "R3": (Number.parseInt((Math.random() * 10000)) / 10)};
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
                                    } else {
                                        if ((rand === 10)) {
                                            nums = {"V": (Number.parseInt((Math.random() * 1000)) / 10), "I": (Number.parseInt((Math.random() * 100)) / 10), "R1": (Number.parseInt((Math.random() * 10000)) / 10), "R2": (Number.parseInt((Math.random() * 10000)) / 10), "R3": (Number.parseInt((Math.random() * 10000)) / 10), "R4": (Number.parseInt((Math.random() * 10000)) / 10), "R5": (Number.parseInt((Math.random() * 10000)) / 10)};
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

function dothedo(){
    big = selector();
    big[0] = JSON.stringify(big[0])
    var image = document.getElementById("image");
    image.src = "images/"+big[2];
    document.getElementById("big").innerHTML = big.toString();
}

function verify(rand, nums) {
    var current, resistance, voltage;
    if ((rand === 1)) {
        current = nums["I"];
        resistance = ((1 / ((1 / nums["R1"]) + (1 / nums["R2"]))) + (1 / ((1 / nums["R4"]) + (1 / nums["R3"]))));
        voltage = nums["V"];
        return verify(current, resistance, voltage);
    } else {
        if ((rand === 2)) {
            current = nums["I"];
            resistance = ((nums["R1"] + nums["R2"]) + (1 / ((1 / nums["R4"]) + (1 / nums["R3"]))));
            voltage = nums["V"];
            return verify(current, resistance, voltage);
        } else {
            if ((rand === 3)) {
                current = nums["I"];
                resistance = (nums["R1"] + (1 / ((1 / nums["2"]) + (1 / (nums["R3"] + nums["R4"])))));
                voltage = nums["V"];
                return verify(current, resistance, voltage);
            } else {
                if ((rand === 4)) {
                    current = nums["I"];
                    resistance = (nums["R1"] + (1 / ((1 / nums["2"]) + (1 / ((nums["R3"] + nums["R4"]) + nums["R5"])))));
                    voltage = nums["V"];
                    return verify(current, resistance, voltage);
                } else {
                    if ((rand === 5)) {
                        current = nums["I"];
                        resistance = (((nums["R1"] + nums["R2"]) + nums["R3"]) + (1 / ((1 / nums["R4"]) + (1 / nums["R5"]))));
                        voltage = nums["V"];
                        return verify(current, resistance, voltage);
                    } else {
                        if ((rand === 6)) {
                            current = nums["I"];
                            resistance = (((nums["R1"] + nums["R4"]) + nums["R2"]) + nums["R3"]);
                            voltage = nums["V"];
                            return verify(current, resistance, voltage);
                        } else {
                            if ((rand === 7)) {
                                current = nums["I"];
                                resistance = ((nums["R1"] + nums["R4"]) + (1 / (((1 / (nums["R2"] + nums["R3"])) + (1 / nums["R5"])) + (1 / nums["R6"]))));
                                voltage = nums["V"];
                                return verify(current, resistance, voltage);
                            } else {
                                if ((rand === 8)) {
                                    current = nums["I"];
                                    resistance = ((nums["R1"] + nums["R6"]) + (1 / (((1 / nums["R2"]) + (1 / nums["R3"])((1 / nums["R5"]))) + (1 / nums["R4"]))));
                                    voltage = nums["V"];
                                    return verify(current, resistance, voltage);
                                } else {
                                    if ((rand === 9)) {
                                        current = nums["I"];
                                        resistance = ((nums["R1"] + nums["R2"]) + nums["R3"]);
                                        voltage = nums["V"];
                                        return verify(current, resistance, voltage);
                                    } else {
                                        if ((rand === 10)) {
                                            current = nums["I"];
                                            resistance = (((1 / ((1 / nums["R1"]) + (1 / nums["R2"]))) + (1 / ((1 / nums["R4"]) + (1 / nums["R5"])))) + nums[3]);
                                            voltage = nums["V"];
                                            return verify(current, resistance, voltage);
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
    if ((((current + 0.1) > (resistance * voltage)) && ((current - 0.1) < (resistance * voltage)))) {
        return true;
    }
    return false;
}

//# sourceMappingURL=calculate.js.map
