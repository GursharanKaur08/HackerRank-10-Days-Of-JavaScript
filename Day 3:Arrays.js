'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() 
{
    return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) 
{   var sbig = nums[0];
    var fbig = nums[0];
    for(var i=1;i<nums.length;i++)
    {
        if(fbig<nums[i])
        {
            sbig = fbig;
            fbig = nums[i];
        }
        else if(sbig<nums[i] && fbig !=nums[i])
        {
            sbig= nums[i];
        }
      
    }
    return sbig;
}


function main() 
{
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}
