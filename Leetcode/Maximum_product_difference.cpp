// My solution - 1913

#include<algorithm>
#include<vector>
class Solution {
public:
    int maxProductDifference(vector<int>& nums) {
        std::vector<int> nums2= std::sort(nums.begin(),nums.end());
        int nums_len = nums.size();
        return ((nums[nums_len-1] * nums[nums_len - 2]) -(nums[0] * nums[1]) )  
    }
};


