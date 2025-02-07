class Solution {
public:
    string makeKey(string str){
        vector<int>count(26,0);
        for(auto c : str){
            count[c-'a']++;
        }
        string key=to_string(count[0]);
        for (int i = 1; i < 26; i++) {
                key += ',' + to_string(count[i]);
            }
            return key;
    }
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string,vector<string>>store;
        for(auto str : strs){
            string key=makeKey(str);
            store[key].push_back(str);
        }
        vector<vector<string>>result;
        for(auto it=store.begin();it!=store.end();it++){
            result.push_back(it->second);
        }
        return result;
    }
};