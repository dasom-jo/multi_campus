#https://leetcode.com/problems/assign-cookies

class Solution:
    def findContentChildren(self, g: list[int], s: list[int]) -> int:
        result = 0
        g.sort()
        s.sort()
        for kid in g:
            for cookie in s:
                if kid <= cookie:
                    result +=1
                    s.remove(cookie)
                    break
        return cookie

s = Solution()
result = s.findContentChildren([1,2,3],[1,2])
print(result)