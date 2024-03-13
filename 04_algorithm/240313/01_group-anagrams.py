import collections
class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        my_anagrams_dd = collections.defaultdict(list)
        for str in strs:
            key = ''.join(sorted(str))
            my_anagrams_dd[key].append(str)
        return list(my_anagrams_dd.values())

s = Solution()
strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
result = s.groupAnagrams(strs)
print(result)