import math, time, sys, re, random

def selector():
    rand = int(random.random()*10 + 1)
    file = "circuit{}.jpg".format(rand)
    if rand == 1:
        nums = {
            "V": int(random.random() * 1000) /10,
            "I": int(random.random() * 100) / 10,
            "R1": int(random.random() * 10000) / 10,
            "R2": int(random.random() * 10000) / 10,
            "R3": int(random.random() * 10000) / 10,
            "R4": int(random.random() * 10000) / 10
        }
        varj = ""
        count = int(random.random() * len(nums))
        counter = 0
        for i in nums:
            if counter == count:
                varj = i
                break
            counter += 1
        del nums[varj]
        return nums, varj, file, rand
    elif rand == 2:
        nums = {
            "V": int(random.random() * 1000) /10,
            "I": int(random.random() * 100) / 10,
            "R1": int(random.random() * 10000) / 10,
            "R2": int(random.random() * 10000) / 10,
            "R3": int(random.random() * 10000) / 10,
            "R4": int(random.random() * 10000) / 10
        }
        varj = ""
        count = int(random.random() * len(nums))
        counter = 0
        for i in nums:
            if counter == count:
                varj = i
                break
            counter += 1
        del nums[varj]
        return nums, varj, file, rand
    elif rand == 3:
        nums = {
            "V": int(random.random() * 1000) /10,
            "I": int(random.random() * 100) / 10,
            "R1": int(random.random() * 10000) / 10,
            "R2": int(random.random() * 10000) / 10,
            "R3": int(random.random() * 10000) / 10,
            "R4": int(random.random() * 10000) / 10
        }
        varj = ""
        count = int(random.random() * len(nums))
        counter = 0
        for i in nums:
            if counter == count:
                varj = i
                break
            counter += 1
        del nums[varj]
        return nums, varj, file, rand
    elif rand == 4:
        nums = {
            "V": int(random.random() * 1000) /10,
            "I": int(random.random() * 100) / 10,
            "R1": int(random.random() * 10000) / 10,
            "R2": int(random.random() * 10000) / 10,
            "R3": int(random.random() * 10000) / 10,
            "R4": int(random.random() * 10000) / 10,
            "R5": int(random.random() * 10000) / 10
        }
        varj = ""
        count = int(random.random() * len(nums))
        counter = 0
        for i in nums:
            if counter == count:
                varj = i
                break
            counter += 1
        del nums[varj]
        return nums, varj, file, rand
    elif rand == 5:
        nums = {
            "V": int(random.random() * 1000) /10,
            "I": int(random.random() * 100) / 10,
            "R1": int(random.random() * 10000) / 10,
            "R2": int(random.random() * 10000) / 10,
            "R3": int(random.random() * 10000) / 10,
            "R4": int(random.random() * 10000) / 10,
            "R5": int(random.random() * 10000) / 10
        }
        varj = ""
        count = int(random.random() * len(nums))
        counter = 0
        for i in nums:
            if counter == count:
                varj = i
                break
            counter += 1
        del nums[varj]
        return nums, varj, file, rand
    elif rand == 6:
        nums = {
            "V": int(random.random() * 1000) /10,
            "I": int(random.random() * 100) / 10,
            "R1": int(random.random() * 10000) / 10,
            "R2": int(random.random() * 10000) / 10,
            "R3": int(random.random() * 10000) / 10,
            "R4": int(random.random() * 10000) / 10
        }
        varj = ""
        count = int(random.random() * len(nums))
        counter = 0
        for i in nums:
            if counter == count:
                varj = i
                break
            counter += 1
        del nums[varj]
        return nums, varj, file, rand
    elif rand == 7:
        nums = {
            "V": int(random.random() * 1000) /10,
            "I": int(random.random() * 100) / 10,
            "R1": int(random.random() * 10000) / 10,
            "R2": int(random.random() * 10000) / 10,
            "R3": int(random.random() * 10000) / 10,
            "R4": int(random.random() * 10000) / 10,
            "R5": int(random.random() * 10000) / 10,
            "R6": int(random.random() * 10000) / 10
        }
        varj = ""
        count = int(random.random() * len(nums))
        counter = 0
        for i in nums:
            if counter == count:
                varj = i
                break
            counter += 1
        del nums[varj]
        return nums, varj, file, rand
    elif rand == 8:
        nums = {
            "V": int(random.random() * 1000) /10,
            "I": int(random.random() * 100) / 10,
            "R1": int(random.random() * 10000) / 10,
            "R2": int(random.random() * 10000) / 10,
            "R3": int(random.random() * 10000) / 10,
            "R4": int(random.random() * 10000) / 10,
            "R5": int(random.random() * 10000) / 10,
            "R6": int(random.random() * 10000) / 10
        }
        varj = ""
        count = int(random.random() * len(nums))
        counter = 0
        for i in nums:
            if counter == count:
                varj = i
                break
            counter += 1
        del nums[varj]
        return nums, varj, file, rand
    elif rand == 9:
        nums = {
            "V": int(random.random() * 1000) /10,
            "I": int(random.random() * 100) / 10,
            "R1": int(random.random() * 10000) / 10,
            "R2": int(random.random() * 10000) / 10,
            "R3": int(random.random() * 10000) / 10
        }
        varj = ""
        count = int(random.random() * len(nums))
        counter = 0
        for i in nums:
            if counter == count:
                varj = i
                break
            counter += 1
        del nums[varj]
        return nums, varj, file, rand
    elif rand == 10:
        nums = {
            "V": int(random.random() * 1000) /10,
            "I": int(random.random() * 100) / 10,
            "R1": int(random.random() * 10000) / 10,
            "R2": int(random.random() * 10000) / 10,
            "R3": int(random.random() * 10000) / 10,
            "R4": int(random.random() * 10000) / 10,
            "R5": int(random.random() * 10000) / 10
        }
        varj = ""
        count = int(random.random() * len(nums))
        counter = 0
        for i in nums:
            if counter == count:
                varj = i
                break
            counter += 1
        del nums[varj]
        return nums, varj, file, rand

def verify(rand, nums):
    if rand == 1:
        current = nums['I']
        resistance = (1 / ((1 / nums["R1"]) + (1 / nums["R2"]))) + (1 / ((1 / nums["R4"]) + (1 / nums["R3"])))
        voltage = nums['V']
        return verify(current, resistance, voltage)
    elif rand == 2:
        current = nums['I']
        resistance =  nums["R1"] +  nums["R2"] + (1 / ((1 / nums["R4"]) + (1 / nums["R3"])))
        voltage = nums['V']
        return verify(current, resistance, voltage)
    elif rand == 3:
        current = nums['I']
        resistance =  nums["R1"] + (1 / ((1 / nums["2"]) + (1 / (nums["R3"] + nums["R4"]))))
        voltage = nums['V']
        return verify(current, resistance, voltage)
    elif rand == 4:
        current = nums['I']
        resistance =  nums["R1"] + (1 / ((1 / nums["2"]) + (1 / (nums["R3"] + nums["R4"] + nums["R5"]))))
        voltage = nums['V']
        return verify(current, resistance, voltage)
    elif rand == 5:
        current = nums['I']
        resistance =  nums["R1"] +  nums["R2"] + nums["R3"] + (1 / ((1 / nums["R4"]) + (1 / nums["R5"])))
        voltage = nums['V']
        return verify(current, resistance, voltage)
    elif rand == 6:
        current = nums['I']
        resistance =  nums["R1"] + nums["R4"] + nums["R2"] + nums["R3"]
        voltage = nums['V']
        return verify(current, resistance, voltage)
    elif rand == 7:
        current = nums['I']
        resistance =  nums["R1"] + nums["R4"] + (1/((1/(nums["R2"] + nums["R3"])) + (1/nums["R5"]) + (1/nums["R6"])))
        voltage = nums['V']
        return verify(current, resistance, voltage)
    elif rand == 8:
        current = nums['I']
        resistance =  nums["R1"] + nums["R6"] + (1/((1/nums["R2"]) + (1/nums["R3"]) (1/nums["R5"]) + (1/nums["R4"])))
        voltage = nums['V']
        return verify(current, resistance, voltage)
    elif rand == 9:
        current = nums['I']
        resistance =  nums["R1"] + nums["R2"] + nums["R3"]
        voltage = nums['V']
        return verify(current, resistance, voltage)
    elif rand == 10:
        current = nums['I']
        resistance = (1 / ((1 / nums["R1"]) + (1 / nums["R2"]))) + (1 / ((1 / nums["R4"]) + (1 / nums["R5"]))) + nums[3]
        voltage = nums['V']
        return verify(current, resistance, voltage)

def error(current, resistance, voltage):
    if current + .1 > resistance * voltage and current - .1 < resistance * voltage: return True
    return False
